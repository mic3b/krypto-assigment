import { Poppins } from "@/app/fonts/fonts";
import "@/global/global.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kryptoneum FAQ",
    template: "%s | Kryptoneum FAQ",
  },
  generator: "Next.js",
  applicationName: "FAQ Section",
  description: "Common Questions Regarding Our Services and Products",
  keywords: ["FAQ", "Questions", "Answers"],
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: "#2dd282",
  viewport: {
    initialScale: 1,
    maximumScale: 1,
    width: "device-width",
  },
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
