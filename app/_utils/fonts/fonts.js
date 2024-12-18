import { Inter, Josefin_Sans, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import {
  Cormorant_Garamond,
  Cinzel,
  IM_Fell_English,
  Caesar_Dressing,
  Uncial_Antiqua,
} from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const imFellEnglish = IM_Fell_English({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const caesarDressing = Caesar_Dressing({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"], // Only one weight available
});

export const uncialAntiqua = Uncial_Antiqua({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"], // Only one weight available
});
