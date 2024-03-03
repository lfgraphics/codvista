import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    images: ["https://www.codvista.com/logo.png"],
  },
  metadataBase: new URL("https://www.codvista.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HJRCZ2SWZP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HJRCZ2SWZP');
    `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "lanp6c74y0");
    `,
          }}
        />
      </head>
      <body className={inter.className}>
        <SpeedInsights />
        <div className="header fixed top-0 w-full bg-[#18111c] bg-opacity-70 z-50 backdrop-blur-md">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
