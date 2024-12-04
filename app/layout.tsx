import { Poppins } from "@/app/fonts/fonts";
import "./_styles/globals.css";
import type { Metadata } from "next";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "black",
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    default: "Kryptoneum FAQ",
    template: "%s | Kryptoneum FAQ",
  },
  generator: "Next.js",
  applicationName: "FAQ Section",
  description: "Common Questions Regarding Our Services and Products",
  keywords: ["FAQ", "Questions", "Answers", "Support", "Kryptoneum"],
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={Poppins.className}>{children}</body>
    </html>
  );
}
