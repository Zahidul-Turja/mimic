import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "Mimic | %s",
    default: "Mimic | Welcome",
  },
  description:
    "This page mimics different websites e.g. Pexels, Unsplash and Pixabay etc. using there APIs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 relative min-h-screen min-w-full antialiased`}
      >
        <Header />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
