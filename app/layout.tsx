import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["vietnamese", "latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Cod Vista",
  description: "A full-services digital transformation partner",
  openGraph: {
    images: ["https://codvista.com/logo.png"],
  },
  metadataBase: new URL("https://codvista.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header fixed top-0 w-full bg-[#18111c] bg-opacity-70 z-50 backdrop-blur-md">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
