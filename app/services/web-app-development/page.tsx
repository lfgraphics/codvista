import Container from "@/components/ui/container";
import Image from "next/image";
import ActionButton from "@/components/ui/actionButton";
import Link from "next/link";
export const metadata = {
  title: "Cod Vista | Development",
  description: "From concept to application, we specialize in creating custom web and app solutions that captivate your audience and leave a lasting impression. Through expert guidance, quality-assured solutions, and a personalized approach, we aim to streamline all your digital solutions, sparing you the hassle.",
  metadataBase: new URL(
    "https://www.codvista.com/services/web-app-development"
  ),
  openGraph: {
    images: ["https://www.codvista.com/logo.png"],
  },
};


const page = () => {
  return (
    <Container>
      <div className="mt-14 md:mt-32 mb-7 relative">
        <div className="sticky top-20 right-5 z-50 "><Link className="p-3 rounded-lg bg-purple-800 font-semibold" href="/services/web-app-development/caseStudies">Case Studies</Link></div>
        <h1 className="text-center text-white z-40 md:left-[35%] md:text-6xl font-bold text-4xl my-7">
          Web & App Development
        </h1>
        <div className="flex relative flex-col md:flex-row items-center gap-8">
          <div className="absolute md:-top-4 md:-left-4 -top-4 -left-0 w-7 h-auto">
            <div className="scale-150">
              {/* <Star color="fill-purple-600 z-500"></Star> */}
            </div>
          </div>
          <div className="image rounded-lg overflow-hidden md:w-[45%] ">
            <Image
              className="w-full z-400"
              src="https://plus.unsplash.com/premium_photo-1683134153517-32015af21911?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt="Cod Vista Team"
              width={300}
              height={450}
            />
          </div>
          <div className="text flex-[55%] justify-center relative">
            <p className="text-xl text-left">
              In today's digital era, having a professional website or app isn't
              just a luxury; it's a necessity. Our goal is to ensure that you
              establish an effective digital footprint that sets you apart.
              <br />
              <br />
              From concept to application, we specialize in creating custom web
              and app solutions that captivate your audience and leave a lasting
              impression. Through expert guidance, quality-assured solutions,
              and a personalized approach, we aim to streamline all your digital
              solutions, sparing you the hassle.
              <br />
              <br />
              Imagine your website and app running seamlessly, providing users
              with intuitive experiences and uninterrupted functionality.
              Picture receiving glowing comments and earning features in tech
              news. These possibilities become realities with a robust website
              or app, precisely what we're committed to delivering
            </p>
            <br />
            <ActionButton text="Book a Call" />
            {/* <div className="blanky hidden md:block bg-white w-[50%] absolute bottom-5 left-10 h-[10px]"></div> */}
          </div>
        </div>
        <div className="my-6 min-h-[75svh] flex items-center">
          <div>
            <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
              Progressive Web App
            </h4>
            <div className="service-div even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
              <div className="left text md:max-w-[50%]">
                <p className="text-left">
                  We Develop progressive web apps (PWAs) that offer a seamless
                  and engaging user experience similar to native mobile apps.
                  Our PWAs harness modern web technologies to deliver fast
                  performance, offline capabilities, and a user-centric design.
                  By utilizing service workers and caching strategies, we ensure
                  fast performance and offline capabilities, allowing users to
                  access your app even in low or no connectivity environments.
                  Additionally, our team focuses on prioritizing responsiveness,
                  intuitive navigation, and immersive interactions. Our
                  versatile PWAs solutions match the evolving needs of your
                  audience across all devices and platforms.
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <Image
                  className="w-full"
                  src={"/services/dev/pwa.gif"}
                  alt={""}
                  width={400}
                  height={350}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 min-h-[75svh] flex items-center">
          <div>
            <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
              Responsive Websites
            </h4>
            <div className="service-div odd flex flex-col justify-center items-center md:items-center md:flex-row-reverse gap-4">
              <div className="left-text md:max-w-[50%]">
                <p className="text-left">
                  Cod Vista creates stunning and user-friendly websites that
                  adapt seamlessly to various screen sizes and devices. Whether
                  your audience is browsing on a desktop, tablet, or smartphone,
                  we ensure a consistent and engaging experience.
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <Image
                  className="w-full"
                  src={"/services/dev/responsiveness.gif"}
                  alt={""}
                  width={400}
                  height={350}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 min-h-[75svh] flex items-center">
          <div>
            <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
              Full Stack Development
            </h4>
            <div className="service-div even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
              <div className="left text md:max-w-[50%]">
                <p className="text-left">
                  Envision dynamic web application or a feature-rich mobile app,
                  our full stack development services encompass every aspect of
                  your web and app projects. From inception to deployment our
                  team handles database design, ensuring efficient data storage
                  and retrieval for your application With expertise in
                  server-side scripting, we develop heavy back-end
                  functionalities that power your platform's core operations. On
                  the front end, our designers and developers collaborate to
                  create intuitive user interfaces ensuring seamless experiences
                  for your users.
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <Image
                  className="w-full"
                  src={"/services/dev/fullstack.gif"}
                  alt={""}
                  width={400}
                  height={350}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
