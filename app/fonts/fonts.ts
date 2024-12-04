import { Poppins as PoppinsFont } from "next/font/google";

export const Poppins = PoppinsFont({
  weight: ["300"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
  display: "swap",
});
