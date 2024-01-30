"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="relative w-screen h-[80svh] text-white overflow-hidden">
        <Container>
          <div className="fixed select-none max-w-lg p-8 sm:left-9 sm:top-9 z-10 sm:mt-28 sm:ml-11">
            <h1 className="text-4xl font-bold mb-4">
              Unlock Digital Success with Cod Vista!
            </h1>
            <p className="text-lg mb-6">
              Your digital journey begins here at Cod Vista – where brilliance
              meets speed. From stunning websites to robust cybersecurity, we've
              got it all. Ready to transform your online presence? Let's make it
              happen!
            </p>
            <p>
            <span>Get Started</span><span>
              <Button className="flex items-center justify-between  font-bold  transition-all duration-500 hover:w-[180px] origin-left">
                <span>Contact Us Now!</span>
                <span className="ml-3">&rarr;</span>
              </Button>
              </span>
            </p>
          </div>
        </Container>
        <Spline
          className="absolute top-0 md:-right-40 w-full z-0 scale-[2]"
          scene="https://prod.spline.design/KhvQam3gbhW9361A/scene.splinecode"
        />
      </div>
    </>
  );
}
