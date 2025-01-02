import { Toaster } from "react-hot-toast";

import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Mimic",
    default: "Welcome | Mimic",
  },
  description:
    "This page mimics different websites e.g. Pexels, Unsplash and Pixabay etc. using their APIs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative min-h-screen min-w-full bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />
        <main className="h-full w-full">{children}</main>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
