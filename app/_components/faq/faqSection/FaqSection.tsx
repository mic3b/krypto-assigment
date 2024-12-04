/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./faqSection.module.scss";
import faqQuestions from "@/config/faqQuestions";
import { useState } from "react";

function FaqSection() {
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMoreQuestions = () => {
    setVisibleCount((old) => Math.min(old + 10, faqQuestions.length));
  };

  const titleSvg = () => {
    return (
      <svg
        width="22"
        height="18"
        fill="none"
        viewBox="0 0 18 16"
        aria-hidden="true"
      >
        <path
          fill="#F0F7F7"
          d="M8.054 7.47c.06.122 0 .183-.177.183a3.83 3.83 0 0 1-.724-.089 27.486 27.486 0 0 1-2.156-.9 8.656 8.656 0 0 1-.989 1.796c-.491.753-.94 1.533-1.343 2.338a4.471 4.471 0 0 0-.553 1.973 1.985 1.985 0 0 0 .63 1.442 1.878 1.878 0 0 0 1.349.625 1.58 1.58 0 0 0 .718-.177.648.648 0 0 0 .448-.27c.08-.074.172-.133.271-.178a.772.772 0 0 1 .553.266.824.824 0 0 1 .182.718c-.06.42-.36.663-.9.719a3.747 3.747 0 0 1-2.604-.984 3.499 3.499 0 0 1-1.525-2.88A4.67 4.67 0 0 1 2.4 9.361h-.183A1.266 1.266 0 0 1 .87 8.1a2.31 2.31 0 0 1 .63-1.708 2.332 2.332 0 0 1 1.796-.553c.553.06.962.121 1.26.177a4.471 4.471 0 0 0 .553-1.973 2.559 2.559 0 0 0-.36-1.438 1.21 1.21 0 0 0-1.105-.552 1.354 1.354 0 0 0-1.077.552.453.453 0 0 1-.553.177 2.012 2.012 0 0 1-.901-.359 1.575 1.575 0 0 1-.448-.807A1.47 1.47 0 0 1 1.112.54a1.658 1.658 0 0 1 1.26-.453 3.145 3.145 0 0 1 2.244 1.349 4.118 4.118 0 0 1 .99 2.874 5.04 5.04 0 0 1-.448 1.89c1.007.321 1.978.747 2.896 1.271ZM4.373 6.393a5.49 5.49 0 0 0-.99-.089 1.702 1.702 0 0 0-1.26.448 1.31 1.31 0 0 0-.447.9c0 .482.21.72.63.72.597.062 1.195-.447 1.796-1.526a.553.553 0 0 0 .27-.453Zm4.422 1.26c-1.253-.66-1.942-1.498-2.068-2.515a3.14 3.14 0 0 1 .63-2.156 3.211 3.211 0 0 1 2.698-.989c1.473.177 2.642 1.314 3.504 3.41.475 1.323 1.044 1.983 1.708 1.979a1.039 1.039 0 0 0 1.105-.448c.23-.278.358-.628.36-.99a1.492 1.492 0 0 0-.72-1.348 1.702 1.702 0 0 0-1.077-.359.26.26 0 0 1-.182.088.238.238 0 0 1-.177-.088 1.83 1.83 0 0 1-.365-.719.884.884 0 0 1 .27-.63 1.106 1.106 0 0 1 .99-.265 1.769 1.769 0 0 1 1.26 1.078 5.848 5.848 0 0 1 .553 3.316 6.688 6.688 0 0 1-2.332 4.582 7.185 7.185 0 0 1-4.676 1.796 4.14 4.14 0 0 1-3.145-.99 3.05 3.05 0 0 1-.99-2.155c0-1.315.868-2.067 2.61-2.244l.044-.353Z"
        />
      </svg>
    );
  };

  const downArrowSvg = () => {
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3.15039L8 13.8171M8 13.8171L12 9.81706M8 13.8171L4 9.81706"
          stroke="url(#paint0_linear_7374_43)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7374_43"
            x1="11.85"
            y1="3.15039"
            x2="3.50948"
            y2="3.54883"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2DD282" />
            <stop offset="1" stopColor="#90F4E8" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <section className={styles.faqSection} aria-label="FAQ Section">
      <h1>
        {titleSvg()}
        <span>Pytaj</span>, jakby jutra miało nie być. Odpowiemy!
      </h1>

      {visibleCount < faqQuestions.length && (
        <nav className={styles.menu} aria-label="FAQ Menu">
          <div
            className={styles.counter}
            style={
              {
                "--progress": visibleCount / faqQuestions.length,
              } as React.CSSProperties
            }
            aria-label={`Showing ${visibleCount} questions`}
          >
            {visibleCount} / {faqQuestions.length}
          </div>

          <div
            role="progressbar"
            className={styles.progressBar}
            aria-valuenow={visibleCount}
            aria-valuemax={faqQuestions.length}
            aria-valuemin={0}
            aria-label="Questions progress bar"
          >
            <div
              className={styles.indicator}
              style={{
                width: `${(visibleCount / faqQuestions.length) * 100}%`,
              }}
            ></div>
          </div>

          <button onClick={loadMoreQuestions} aria-label="show more questions">
            Wczytaj więcej
            {downArrowSvg()}
          </button>
        </nav>
      )}
    </section>
  );
}

export default FaqSection;
