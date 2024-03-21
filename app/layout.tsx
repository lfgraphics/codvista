import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
        <Footer></Footer>
      </body>
    </html>
  );
}
