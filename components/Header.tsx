import React, { useState } from "react";
import Container from "./ui/container";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactButton from "./ContactButton";
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
  return (
    <header className=" sm:flex sm:justify-between py-3 px-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-end">
            <Link href={"/"}>
              <Image
                className="mt-3"
                src={"/logo.svg"}
                width={40}
                height={30}
                alt="Logo"
              ></Image>
            </Link>
            <div className="ml-6 text-4xl">Cod Vista</div>
          </div>
          <div className="leftDiv flex items-center gap-5">
            <ul className="hidden gap-3 items-center md:flex">
              <li>
                <Link href={"#about"}>About US</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact US</Link>
              </li>
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-background">Services</NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4 min-w-[180px]">
                        <NavigationMenuLink><Link href={'web-dev'}>Web Development</Link></NavigationMenuLink>
                        <br />
                        <NavigationMenuLink><Link href={'gfx'}>Graphic Design</Link></NavigationMenuLink>
                        <br />
                        <NavigationMenuLink><Link href={'digitalmarketing'}>Digital Marketing</Link></NavigationMenuLink>
                        <br />
                        <NavigationMenuLink><Link href={'cybersecurity'}>Cybersecurity</Link></NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
            </ul>
            <div onClick={menuHandle} className="cursor-pointer">
              {!menuopen ? <Menu size={32} /> : <X size={32} />}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
