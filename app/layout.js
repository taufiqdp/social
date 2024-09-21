import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Taufiq Socials",
  description: "Connect with Taufiq and explore their social presence",
  openGraph: {
    title: "Taufiq Socials",
    description: "Connect with Taufiq and explore their social presence",
    url: "https://social.taufiqdp.com",
    siteName: "Taufiq Socials",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taufiq Socials",
    description: "Connect with Taufiq and explore their social presence",
    images: ["https://social.taufiqdp.com/twitter-image.png]"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>{children}</body>
    </html>
  );
}
