"use client";
import { Kanit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const inter = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["vietnamese", "latin"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Listen for the beforeunload event
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("beforeunload", function (event) {
        // Get the current URL
        const currentUrl = window.location.pathname;

        // Check if the current URL is "/tasbeeh"
        if (currentUrl === "/tasbeeh") {
          // Update the start_url in the manifest to "/tasbeeh"
          updateManifestStartUrl("/tasbeeh");
        } else {
          // Update the start_url in the manifest to "/"
          updateManifestStartUrl("/");
        }
      });
    }
  }, []);

  // Function to update the start_url in the manifest file
  function updateManifestStartUrl(startUrl: string) {
    fetch("manifest.json") // Assuming your manifest file is named manifest.json
      .then((response) => response.json())
      .then((manifest) => {
        // Update the start_url property
        manifest.start_url = startUrl;

        // Save the updated manifest back to the file
        return fetch("manifest.json", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(manifest),
        });
      })
      .then(() => {
        console.log("Manifest start_url updated successfully");
      })
      .catch((error) => {
        console.error("Error updating manifest start_url:", error);
      });
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#6a6070" />
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
        <div className="header sticky top-0 w-full z-50 backdrop-blur-md">
          <Header />
        </div>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
