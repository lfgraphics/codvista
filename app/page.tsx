"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="relative w-screen h-[80svh] text-white overflow-hidden">
        <Container>
          <div className="fixed pointer-events-nonemax-w-lg p-8 sm:left-9 sm:top-9 z-20 sm:mt-28 sm:ml-11">
            <h1 className="text-5xl mb-4" style={{ fontWeight: "600" }}>
              Unlock Digital Success with Cod Vista!
            </h1>
            <p className="text-lg mb-6 pointer-events-none">
              Your digital journey begins here at Cod Vista – where brilliance
              meets speed. From stunning websites to robust cybersecurity, we've
              got it all. Ready to transform your online presence? Let's make it
              happen!
            </p>
            <p>
              <span className="select-none pointer-events-none">
                Get Started
              </span>
              <span className="relative">
                <Button className="flex items-center justify-between  font-bold  transition-all duration-500 hover:w-[180px] origin-left">
                  <span>Contact Us Now!</span>
                  <span className="ml-3">&rarr;</span>
                </Button>
                {/* <div className="absolute"></div> */}
              </span>
            </p>
            <div className="pointer-events-none select-none opacity-60 absolute mt-9 ml-2 p-2 text-center rounded-full border-[1px] border-white w-[30ch] md:w-max">
              You can move the 3D object with two fingers or with your mouse
              cilcked!
            </div>
          </div>
        </Container>
        <Spline
          className="absolute top-0 md:-right-40 w-full z-10 scale-[2]"
          scene="https://prod.spline.design/KhvQam3gbhW9361A/scene.splinecode"
        />
        {/* need to fix the sharp ending  */}
        <div className="absolute top-36 right-8 md:top-32 md:right-96 blur-2xl bg-blend-lighten z-0 ">
          <img src="/colorLogo.svg" width="300" height="400" alt="" />
        </div>
      </div>
    </>
  );
}
