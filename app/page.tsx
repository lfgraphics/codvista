"use client";
import ContactButton from "@/components/ContactButton";
import Header from "@/components/Header";
import SimilarContents from "@/components/SimilarContents";
import Container from "@/components/ui/container";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export default function App() {
  const aboutUs = {
    heading: "Welcome to Cod Vista",
    paragraph:
      "At Cod Vista, we are on a mission to redefine digital excellence. Our team of dedicated professionals combines innovation, expertise, and a passion for perfection.",
    images: ["/about/1.jpeg", "/about/2.jpg"],
  };

  const services = {
    heading: "Explore Our Services",
    paragraph:
      "Unlock a world of digital possibilities with Cod Vista. From bespoke web and app development to captivating design, marketing strategies, and robust cybersecurity solutions.",
    images: ["/services/1.jpg", "/services/2.jpg"],
  };

  const portfolio = {
    heading: "Discover Our Portfolio",
    paragraph:
      "Dive into our showcase to witness the Cod Vista touch. Each project is a testament to our creativity, technical prowess, and unwavering commitment to client success.",
    images: ["url-to-image5", "url-to-image6"],
  };

  const blog = {
    heading: "Stay Informed with Our Blog",
    paragraph:
      "Explore insights on the latest web development trends, design inspirations, cybersecurity best practices, and more. Your go-to resource for staying ahead in the digital realm.",
    images: ["url-to-image7", "url-to-image8"],
  };

  const contactUs = {
    heading: "Get in Touch with Us",
    paragraph:
      "Ready to take the next step? Connect with Cod Vista today. Whether you have a project in mind or just want to learn more about our services, our team is here to assist you.",
    images: ["url-to-image9", "url-to-image10"],
  };

  const testimonials = {
    heading: "What Our Clients Say",
    paragraph:
      "Don't just take our word for it. Hear what our clients have to say about their experience with Cod Vista. Our commitment to excellence is reflected in their success stories.",
    images: ["url-to-image11", "url-to-image12"],
  };

  const faqs = {
    heading: "Frequently Asked Questions",
    paragraph:
      "Got questions? We have answers. Explore our FAQs to find solutions to common queries about our services, pricing, and more. We are here to help.",
    images: ["url-to-image13", "url-to-image14"],
  };

  const cta = {
    heading: "Ready to Elevate Your Digital Presence?",
    paragraph:
      "Click below to explore our services, dive into our portfolio, or get in touch with us. Cod Vista – Your journey to digital excellence starts here.",
    images: ["url-to-image15", "url-to-image16"],
  };

  return (
    <>
      <div className="header fixed top-0 w-full bg-[#18111c] bg-opacity-70 z-50 backdrop-blur-md">
        <Header />
      </div>
      {/* Landing page */}
      <div className="mt-14 relative w-full h-[70svh] text-white overflow-hidden z-40">
        <Container>
          <div className="absolute max-w-lg p-8 sm:left-9 z-20  sm:ml-11">
            <h1 className="text-5xl mb-4" style={{ fontWeight: "600" }}>
              Unlock Digital Success with Cod Vista!
            </h1>
            <p className="text-lg mb-6 pointer-events-none">
              We elevate your brand through world-class digital experiences. We
              build transformative digital experiences by blending design,
              marketing, and technology. From robust cybersecurity to unique
              brand identity, we offer a complete suite of solutions.
            </p>
            <p>
              <span className="select-none pointer-events-none">
                Get Started
              </span>
              <span className="relative">
                <ContactButton />
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
          className="absolute top-0 md:-right-40 w-[90vw] z-10 scale-[2]"
          scene="https://prod.spline.design/KhvQam3gbhW9361A/scene.splinecode"
        />
        {/* need to fix the sharp ending  */}
        <div className="absolute top-28 sm:top-32 right-8 md:top-32 md:right-96 blur-2xl bg-blend-lighten z-0 ">
          <Image src="/colorLogo.svg" width="300" height="400" alt="" />
        </div>
      </div>
      {/* other details */}
      <Container>
        {/* aboutUs */}
        <SimilarContents
          heading={aboutUs.heading}
          paragraph={aboutUs.paragraph}
          images={aboutUs.images}
        />
        {/* Sercises */}
        <SimilarContents
          heading={services.heading}
          paragraph={services.paragraph}
          images={services.images}
        />
        {/* portfolio */}
        <SimilarContents
          heading={portfolio.heading}
          paragraph={portfolio.paragraph}
          images={null}
        />
        {/* blog */}
        <SimilarContents
          heading={blog.heading}
          paragraph={blog.paragraph}
          images={null}
        />
        {/* contactUS */}
        <SimilarContents
          heading={contactUs.heading}
          paragraph={contactUs.paragraph}
          images={null}
        />
        {/* testimonials */}
        <SimilarContents
          heading={testimonials.heading}
          paragraph={testimonials.paragraph}
          images={null}
        />
        {/* faqs */}
        <SimilarContents
          heading={faqs.heading}
          paragraph={faqs.paragraph}
          images={null}
        />
        {/* cta */}
        <SimilarContents
          heading={cta.heading}
          paragraph={cta.paragraph}
          images={null}
        />
      </Container>
    </>
  );
}
