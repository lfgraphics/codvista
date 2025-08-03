"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  let [insideBrowser, setInsideBrowser] = useState(false);
  useEffect(() => {
    setInsideBrowser(true);
  });
  return (
    <>
      <footer className="relative w-full flex justify-center mt-5">
        <div className="glowbox absolute -z-10 w-[80%] h-[80px] -top-12 blur-3xl bg-purple-600"></div>
        <div className="z-20 w-full flex flex-col md:flex-row bg-[#18111c] rounded-xl border-t-2 border-t-purple-400">
          <div className="my-4 md:w-1/3 md:border-r-2 md:border-r-gray-500 pl-6 pr-6">
            <div className="my-4 md:w-1/3 ">
              <img src="logo.svg" alt="logo" />
              {/* <Image
              src={"logo.svg"}
              alt={"logo"}
              width={400}
              height={200}
            ></Image> */}
            </div>
          </div>
          <div className="my-4 md:w-1/3 md:border-r-2 md:border-r-gray-500 pl-6">
            <h3 className="text-lg font-bold">Important Links</h3>
            <ul className="mt-3">
              {/* <li>
              <a href="/contact" className="hover:text-blue-700">
                Contact
              </a>
            </li> */}
              {/* <li>
              <a href="/cookies-policy" className="hover:text-blue-700">
                Cookies Policy
              </a>
            </li> */}
              <li>
                <a href="/privacy-policy" className="hover:text-blue-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="hover:text-blue-700">
                  Terms and Conditions
                </a>
              </li>
              {/* <li>
                <a href="/refund-policy" className="hover:text-blue-700">
                  Refund Policy
                </a>
              </li> */}
            </ul>
          </div>
          <div className="my-4 md:w-1/3 pl-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-3">
              <li>
                <Link href="/about" className="hover:text-blue-700">
                  About Us
                </Link>
              </li>
              <li>
                {insideBrowser && (
                  <Link
                    href={
                      !window.location.href.includes("/")
                        ? "#servicesDivs"
                        : "/#servicesDivs"
                    }
                    className="hover:text-blue-700"
                  >
                    Our Services
                  </Link>
                )}
              </li>
            </ul>
            <h3 className="text-lg font-bold" id="contact">Contact Us</h3>
            {/* <h6 className="mt-3 font-bold">United States</h6> */}
            <ul>
              {/* <li>
                <p className="text-xs">
                  Shop Number 9, 1st Floor, SK Plaza, Choteqazipur,Miyan Bazar
                  Dakshini,Gorakhpur, Uttar Pradesh 273001
                </p>
              </li> */}
              <li className="text-xs">
                <a
                  href="mailto:contact@codvista.com"
                  className="hover:text-blue-700"
                >
                  contact@codvista.com
                </a>
                {"    "}
                {/* <a href="tel:+919005228782" className="hover:text-blue-700">
                  (+91) 9005 2287 82
                </a> */}
              </li>
            </ul>
            <div className="mt-3 border-t border-t-gray-500 mr-6">
              <h3 className="text-lg font-bold pb-2 pt-3">Socials</h3>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/codvista"
                  className="hover:text-blue-700"
                >
                  <Twitter strokeWidth={1} />
                </a>
                <a
                  href="https://www.linkedin.com/company/cod-vista"
                  className="hover:text-blue-700"
                >
                  <Linkedin strokeWidth={1} />
                </a>
                {/* <a
                  href="https://www.instagram.com/codvista/"
                  className="hover:text-blue-700"
                >
                  <Instagram strokeWidth={1} />
                </a> */}
                <a
                  href="https://www.facebook.com/profile.php?id=61555510815916&mibextid=ZbWKwL"
                  className="hover:text-blue-700"
                >
                  <Facebook strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="attribute w-full p-2 text-center">
        Copyright © 2025 Cod Vista - All rights reserved
      </div>
    </>
  );
};

export default Footer;
