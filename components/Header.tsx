"use client"
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

const Header = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const menuHandle = () => {
    setMenuOpen(!menuopen);
  };
  const services = [
    {
      title: { title: "Graphic Design", icon: <PenTool /> },
      subServices: [
        { title: "Branding", icon: Menu },
        { title: "Rebranding", icon: Menu },
        { title: "Print Graphics", icon: Menu },
        { title: "Digital Graphics", icon: Menu },
        // Add more sub-services as needed
      ],
    },
    {
      title: { title: "Digital Marketing", icon: <PenTool /> },
      subServices: [
        { title: "Social Media Management", icon: Menu },
        { title: "Google Ads", icon: Menu },
        { title: "SEO", icon: Menu },
        { title: "Message Marketing", icon: Menu },
        // Add more sub-services as needed
      ],
    },
    {
      title: { title: "Web & App Development", icon: <PenTool /> },
      subServices: [
        { title: "Responsive Websites", icon: Menu },
        { title: "Full Stack", icon: Menu },
        { title: "Dynamic and Static Websites/Webpages", icon: Menu },
        { title: "Progressive Web App", icon: Menu },
        { title: "Android & iOS Apps Development", icon: Menu },
        // Add more sub-services as needed
      ],
    },
    {
      title: { title: "Cybersecurity", icon: <PenTool /> },
      subServices: [
        { title: "Cloud Security", icon: Menu },
        { title: "Application Security", icon: Menu },
        { title: "Network Security", icon: Menu },
        { title: "Ransomware", icon: Menu },
        { title: "Authentication", icon: Menu },
        { title: "Data Security", icon: Menu },
        { title: "Web Pentesting", icon: Menu },
        // Add more sub-services as needed
      ],
    },
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
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                      <NavigationMenuContent asChild className="">
                        <div className="flex gap-2 p-4 text-white bg-slate-900 border-none outline-none">
                          {services.map((service, index) => (
                            <div key={index}>
                              <h2 className="text-lg">{service.title.title}</h2>
                              <ul className="min-w-56">
                                {service.subServices.map((subService) => (
                                  <li key={subService.title}>
                                    <span className="cursor-pointer">
                                      {subService.title}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
              <li>
                <Link href={"#about"}>About US</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact US</Link>
              </li>
            </ul>
            <div
              onClick={menuHandle}
              className="cursor-pointer block md:hidden"
            >
              {!menuopen ? <Menu size={32} /> : <X size={32} />}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
