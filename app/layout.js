import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Taufiq Dwi Purnomo",
  description:
    "Hey there! Join me on my journey and discover all the ways we can connect.",
  openGraph: {
    title: "My Personal Links",
    description:
      "Hey there! Join me on my journey and discover all the ways we can connect.",
    url: "https://social.taufiqdp.com",
    siteName: "Taufiq",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taufiq Dwi Purnomo",
    description:
      "Hey there! Join me on my journey and discover all the ways we can connect.",
    images: ["https://social.taufiqdp.com/twitter-image.png"],
  },
  metadataBase: new URL("https://social.taufiqdp.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
