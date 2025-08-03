"use client";
import React, { useState } from "react";
import Container from "./ui/container";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PenTool } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Services {
  title: string;
  url: string;
}

const Header = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const menuHandle = () => {
    setMenuOpen(!menuopen);
  };
  const services: Services[] = [
    { title: "Our Services", url: "/services" },
    // { title: "Contact Us", url: "/contact" },
    { title: "Privacy Policy", url: "/privacy-policy" },
    // { title: "Refund Policy", url: "/refund-policy" },
    { title: "Terms of Services", url: "/terms-of-services" },
    { title: "Products", url: "/products" },
    { title: "About Us", url: "/about" },
  ];

  return (
    <header className=" sm:flex sm:justify-between py-3 px-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-10 items-center justify-between w-full">
          <div className="flex items-end">
            <Link href={"/"}>
              <Image
                className="mt-1"
                src={"/logo.svg"}
                width={175}
                height={30}
                alt="Logo"
              ></Image>
            </Link>
          </div>
          <div className="leftDiv  flex items-center gap-5">
            <ul className="hidden relative gap-3 items-center md:flex">
              {services.map((service, index) => (
                <li
                  className="cursor-pointer px-2 rounded-md hover:bg-purple-800 transition-all 500 ease-in-out"
                  key={index}
                >
                  <Link href={service.url}>{service.title}</Link>
                </li>
              ))}
            </ul>
            <Sheet>
              <SheetTrigger className="cursor-pointer block md:hidden" asChild>
                {!menuopen ? <Menu size={32} /> : <X size={32} />}
              </SheetTrigger>
              <SheetContent className="bg-black">
                <SheetHeader>
                  <SheetTitle className="text-white text-2xl">
                    Cod Vista
                  </SheetTitle>
                  <SheetDescription className="hidden">
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <ul className="grid gap-3 grid-flow-row mt-9">
                  {services.map((service, index) => (
                    <li
                      className="text-lg px-2 rounded-md hover:bg-purple-800 transition-all 500 ease-in-out"
                      key={index}
                    >
                      <Link href={service.url}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
                <SheetFooter>
                  <SheetClose asChild></SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            {/* <div
              onClick={menuHandle}
              className="cursor-pointer block md:hidden"
            ></div> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
