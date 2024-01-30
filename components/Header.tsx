import React from "react";
import Container from "./ui/container";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full bbg-opacity-40 backdrop-blur-lg">
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
            <div className="ml-6 text-5xl">Cod Vista</div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
