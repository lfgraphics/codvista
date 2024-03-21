import React from "react";

const page = () => {
  return (
    <div>
      {/* map view is here */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14251.668178339502!2d83.3620013!3d26.7470232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991455a9b6915eb%3A0x9ef224d4a9e6725a!2sCod%20Vista!5e0!3m2!1sen!2sin!4v1709671358828!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{border:0}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default page;
