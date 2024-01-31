import React, { useState } from "react";
import Container from "./ui/container";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactButton from "./ContactButton";

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
            <div className="hidden md:block">
              <ContactButton />
              </div>
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
