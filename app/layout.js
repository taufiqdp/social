import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Taufiq Socials",
  description: "Taufiq Socials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistMono.className}>
      <body>{children}</body>
    </html>
  );
}
