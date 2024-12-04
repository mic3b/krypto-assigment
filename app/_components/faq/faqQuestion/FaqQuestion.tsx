"use client";
import { useState } from "react";
import styles from "./FaqQuestion.module.scss";
import { FaqQuestionType } from "@/@types/faq";

interface FaqQuestionProps {
  index: number;
  questionData: FaqQuestionType;
  isVisible: boolean;
}

function FaqQuestion({ index, questionData, isVisible }: FaqQuestionProps) {
  const [active, setActive] = useState(true);

  const toggleSVG = () => {
    setActive((prevActive) => !prevActive);
  };

  const plusCircle = () => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="url(#paint0_linear_7374_594)" />
        <path
          d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
          stroke="url(#paint1_linear_7374_594)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7374_594"
            x1="21.625"
            y1="2.00001"
            x2="0.810559"
            y2="3.32577"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2DD282" />
            <stop offset="1" stopColor="#90F4E8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_7374_594"
            x1="14.8875"
            y1="9"
            x2="8.64317"
            y2="9.39773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2DD282" />
            <stop offset="1" stopColor="#90F4E8" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  const minusCircle = () => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="url(#paint0_linear_7374_350)" />
        <path
          d="M15 12H9"
          stroke="url(#paint1_linear_7374_350)"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7374_350"
            x1="21.625"
            y1="2.00001"
            x2="0.810559"
            y2="3.32577"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2DD282" />
            <stop offset="1" stopColor="#90F4E8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_7374_350"
            x1="15"
            y1="12.9812"
            x2="14.9889"
            y2="11.9364"
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
    <details
      className={`${styles.faqQuestion} ${
        isVisible ? styles.visible : styles.hidden
      }`}
      style={{ display: isVisible ? "" : "none" }}
    >
      <summary onClick={toggleSVG}>
        <h3
          data-index={index + 1 < 10 ? `0${index + 1}` : index + 1}
          id={`question-${index}`}
        >
          {questionData.question}
        </h3>
        <div className={styles.button}>
          <div
            className={`${styles.helperButton} ${active ? styles.active : ""}`}
          >
            {plusCircle()}
          </div>
          <div
            className={`${styles.helperButton} ${active ? "" : styles.active}`}
          >
            {minusCircle()}
          </div>
        </div>
      </summary>

      <p
        className={styles.content}
        id={`answer-${index}`}
        role="region"
        aria-labelledby={`question-${index}`}
      >
        {questionData.answer}
      </p>
    </details>
  );
}

export default FaqQuestion;
