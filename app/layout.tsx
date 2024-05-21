"use client";

import "./globals.scss";
import { useEffect, useState } from "react";
import {
  Jockey_One,
  Inter,
  Irish_Grover,
  Merriweather,
  Montserrat,
} from "next/font/google";
import Script from "next/script";
import HeaderMain from "@/components/Header/Header";
import withTheme from "@/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jockeyOne = Jockey_One({
  subsets: ["latin"],
  variable: "--font-jockey-one",
  weight: "400",
  display: "swap",
});

const irishGrover = Irish_Grover({
  subsets: ["latin"],
  variable: "--font-irish-grover",
  weight: "400",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return withTheme(
    <html
      lang="en"
      className={`${jockeyOne.variable} ${inter.variable} ${irishGrover.variable} ${merriweather.variable} ${montserrat.variable}`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EXPFT5JYJ0"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EXPFT5JYJ0');
          `}
        </Script>
      </head>
      <body>
        <HeaderMain />
        <div className="max-w-[1080px] mx-auto px-4 lg:px-8 font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
