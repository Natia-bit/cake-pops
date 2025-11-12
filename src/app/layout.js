import { Montserrat, Comfortaa } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const myFont = localFont({
  src: "../../fonts/Chillink.ttf",
});

export const metadata = {
  title: "Cake Pops by Leanne",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
