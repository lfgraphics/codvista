import Container from "@/components/ui/container";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div className="w-full scale-130 min-h-[80vh] overflow-hidden mt-24">
      <div
        className="visme_d"
        data-title="Cod Vista Contact form"
        data-url="epreyjjr-cod-vista-contact-form"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="53651"
      ></div>
      <Script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></Script>
    </div>
  );
};

export default page;
