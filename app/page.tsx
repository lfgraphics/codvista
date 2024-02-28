"use client";
import ActionButton from "@/components/ui/actionButton";
import Container from "@/components/ui/container";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import RedirectButton from "@/components/ui/redirectButton";
import FAQs from "@/components/Faqs";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What sets Cod Vista apart from other digital agencies?",
    answer: `Cod Vista stands out by offering a comprehensive suite of digital services all under one roof, providing personalized efficiency to our clients. Moreover, we prioritize delivering top-notch quality at affordable prices, making premium digital solutions accessible to businesses of all sizes.`,
  },
  {
    question: "How does Cod Vista ensure the success of a project?",
    answer: `We ensure project success through meticulous planning, clear communication, and a focus on client objectives. We employ a collaborative approach, involving clients at every stage of the project to ensure alignment with their goals and expectations. By selecting and outsourcing tasks to the best professionals in each respective field, we guarantee optimal results that meet and exceed our clients' expectations.`,
  },
  {
    question: "How does Cod Vista ensure data security and confidentiality?",
    answer: `<p class="font-semibold">Cod Vista takes data security and confidentiality seriously:</p>
      <ul class="list-disc">
        <li>We employ encryption techniques and utilize AWS to safeguard sensitive information.</li>
        <li>Access is strictly limited to authorized personnel working on the project and those essential to the project's success.</li>
        <li>Our team undergoes regular training to stay updated on the latest security protocols and practices.</li>
      </ul>`,
  },
  {
    question: "What services does Cod Vista offer?",
    answer: `Cod Vista offers a wide range of services including web development, mobile app development, digital marketing, UI/UX design, e-commerce solutions, and more. Each service is tailored to meet the specific needs and objectives of our clients, delivering high-quality solutions that drive business growth.`,
  },
  {
    question: "Can Cod Vista handle projects of all sizes?",
    answer: `Yes, Our mission is to make the world of digital solutions accessible to everyone. Whether it's a small-scale initiative or a large scale enterprise project we have the expertise and resources to handle projects of all sizes. Our flexible approach allows us to scale our services according to the scope and complexity of each project, providing optimal results regardless of size.`,
  },
  {
    question: "What industries does Cod Vista serve?",
    answer: `Cod Vista serves a diverse range of industries including but not limited to technology, e-commerce, healthcare, finance, education, and entertainment. Our team's versatile skill set enables us to cater to the specific needs and requirements of clients across various sectors.`,
  },
  {
    question: "Does Cod Vista offer custom solutions or standardized packages?",
    answer: `Yes, we offer both custom solutions and standardized packages, depending on the unique requirements of each client. We understand that every business is different, so we work closely with our clients to determine the best approach that aligns with their goals, budget, and timeline.
    <br />
    Our pricing packages are also customized, ensuring that clients only pay for the services they need, making our solutions cost-effective and efficient.`,
  },
  {
    question:
      "Can Cod Vista provide references or case studies of past projects?",
    answer: `Visit our <a class="text-blue-500 underline" href="/services">services</a> page to access case studies of our past projects. These case studies showcase our commitment to deliver results that matter. We take pride in our portfolio of successful projects and are happy to share more examples of our work upon request.`,
  },
  {
    question:
      "What kind of support does Cod Vista provide after project completion?",
    answer: `We provide post-project support, including bug fixes and addressing any spelling mistakes or issues that may arise. Our dedicated support team ensures that any issues are resolved promptly, providing our clients with peace of mind and continued satisfaction.`,
  },
  {
    question:
      "How does Cod Vista stay updated on the latest industry trends and technologies?",
    answer: `We incorporate what's new in our industry by always learning and researching. We also talk to experts and go to events, conferences and workshops where we can learn about the latest technology. This helps us make sure we're using the newest and best ideas in our work.`,
  },
  {
    question: "What is Cod Vista's approach to client collaboration?",
    answer: `We keep communication open and make sure everyone is on the same page. We believe in building strong partnerships with our clients, actively involving them in decision-making, providing regular updates and feedback. Our goal is to make our clients feel like they're part of the team, and together, we can make great things happen.`,
  },
];

declare namespace JSX {
  interface IntrinsicElements {
    // Add the declaration for the marquee element
    marquee: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLMarqueeElement>,
      HTMLMarqueeElement
    >;
  }
}



export default function App() {
  return (
    <>
      {/* Landing page */}
      <div className="mt-14 relative w-full h-[85svh] text-white overflow-hidden z-40">
        <Container>
          <div className="absolute max-w-lg h-[85svh] p-8 sm:left-9 z-20  sm:ml-11 pointer-events-none">
            - This site is under development
            <h1 className="text-5xl mb-4" style={{ fontWeight: "600" }}>
              Unlock Digital Success with Cod Vista!
            </h1>
            <p className="text-lg mb-6">
              We elevate your brand through world-class digital experiences. We
              build transformative digital experiences by blending design,
              marketing, and technology.
              <br />
              From robust cybersecurity to unique brand identity, we offer a
              complete suite of solutions.
            </p>
            <div className="opacity-60 absolute bottom-2 w-[30ch] md:w-max p-2 text-center rounded-full border">
              You can move the 3D object with two fingers or with your mouse
              cilcked!
            </div>
          </div>
          <div className="z-50 absolute bottom-44 left-12 md:left-28">
            <ActionButton text="Get Started" />
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
      <Container>
        <main>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold my-4 mt-2">
              Cod Vista– A full-service digital transformation partner.
            </h2>
            <p className="text-gray-200 text-left">
              To produce the optimal outcomes you need a partner to trust, an
              expert who can guide you to the right strategy, take charge of the
              process, and deliver results that your customers will love. Cod
              Vista comprises experienced professionals, including creatives,
              strategists, technologists, and problem-solvers. Using a
              human-centered approach we empathize with your customers, identify
              their pain points, and create solutions that enhance their
              experience with your brand or product.
            </p>
            <p className="text-gray-200 text-left">
              And just as an architect would provide a full set of blueprints
              for a building, we provide full specifications for the digital
              experiences we design. This gives our clients a clear picture of
              the project, ensuring a smooth development process.
            </p>
            <div className="text-left mb-8">
              New Project? <ActionButton text="Get in Touch" />
            </div>
            <div className="my-4 companies-show-case">
              <h3 className="text-3xl">
                Leading companies trust us to design their products
              </h3>
              <marquee behavior="scroll" direction="left">
                Images of companies we've worked with (will add soon)
              </marquee>
            </div>
            <h2 className="text-3xl font-bold my-4">Services we offer</h2>
            <div className="servicesDivs">
              <div className="digital-marketing my-6 min-h-[75svh] flex items-center">
                <div>
                  <h4 className="text-left text-2xl font-bold mb-4">
                    Digital Marketing
                  </h4>
                  <div className="service-div even flex flex-col justify-center items-center md:items-end md:flex-row gap-4">
                    <div className="left text md:max-w-[50%]">
                      <p className="text-left">
                        We’re not just another digital marketing agency that
                        relies on cookie-cutter templates and guesswork for
                        every client. In a landscape that’s growing increasingly
                        complex, we’re able to help brands cut through the noise
                        and have their digital presence stand out in a
                        super-competitive ecosystem. We design your marketing
                        campaign to match your unique objectives, fine-tuning
                        the strategy based on concrete research and time-tested
                        marketing tactics, not mere speculation.
                      </p>
                      <p className="text-left">
                        Imagine your brand achieving the same level of
                        recognition as the local coffee shop, your website
                        steadily climbing the ranks on Google like a determined
                        mountaineer, and your inbox bustling with potential
                        leads like a lively farmers market. These are the goals
                        we strive to achieve for your business. And the best
                        part? You can achieve these milestones without the
                        financial burden of hiring a full-time team.
                      </p>
                      <p className="text-left">
                        With our personalized approach and commitment to
                        excellence, we'll help you reach new heights in your
                        digital marketing endeavors <br />
                        <span className="block m-4">
                          <RedirectButton
                            text="Know More"
                            url="/services/graphic-design"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="right w-[90%] overflow-hidden rounded-xl">
                      <Image
                        className="w-full"
                        src={"/home-page/digital-marketing.png"}
                        alt={""}
                        width={400}
                        height={350}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic-design my-6 min-h-[75svh] flex items-center">
                <div>
                  <h4 className="text-left text-2xl font-bold mb-4">
                    Graphic Design
                  </h4>
                  <div className="service-div odd flex flex-col justify-center items-center md:items-end md:flex-row-reverse gap-4">
                    <div className="left-text md:max-w-[50%]">
                      <p className="text-left">
                        There's no limit to what you can get designed at Cod
                        Vista. Whether you need an out-of-this-world
                        illustration, beautiful print designs, or engaging
                        digital marketing ads, Cod Vista can make it happen.
                        Regardless of your existing creative resources,
                        partnering with our graphic design agency ensures you
                        receive designs that are meticulously tailored to your
                        business needs and infused with a unique creative spark.
                      </p>
                      <p className="text-left">
                        Get all your graphic design needs met—from branding to
                        website illustrations. We are committed to creating
                        designs that not only catch the eye but also tell your
                        unique story, thereby forging deeper connections with
                        your audience on a whole new level.
                        <span className="block m-4">
                          <RedirectButton
                            text="Know More"
                            url="/services/graphic-design"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="right w-[90%] overflow-hidden rounded-xl">
                      <Image
                        className="w-full"
                        src={"/home-page/digital-marketing.png"}
                        alt={""}
                        width={400}
                        height={350}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="development my-6 min-h-[75svh] flex items-center">
                <div>
                  <h4 className="text-left text-2xl font-bold mb-4">
                    Web & App Development
                  </h4>
                  <div className="service-div even flex flex-col justify-center items-center md:items-end md:flex-row gap-4">
                    <div className="left text md:max-w-[50%]">
                      <p className="text-left">
                        In today's digital era, having a professional website or
                        app isn't just a luxury; it's a necessity. Our goal is
                        to ensure that you establish an effective digital
                        footprint that sets you apart.
                      </p>
                      <p className="text-left">
                        From concept to application, we specialize in creating
                        custom web and app solutions that captivate your
                        audience and leave a lasting impression. Through expert
                        guidance, quality-assured solutions, and a personalized
                        approach, we aim to streamline all your digital
                        solutions, sparing you the hassle.
                      </p>
                      <p className="text-left">
                        From concept to application, we specialize in creating
                        custom web and app solutions that captivate your
                        audience and leave a lasting impression. Through expert
                        guidance, quality-assured solutions, and a personalized
                        approach, we aim to streamline all your digital
                        solutions, sparing you the hassle. <br />
                        <span className="block m-4">
                          <RedirectButton
                            text="Know More"
                            url="/services/dev"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="right w-[90%] overflow-hidden rounded-xl">
                      <Image
                        className="w-full"
                        src={"/home-page/digital-marketing.png"}
                        alt={""}
                        width={400}
                        height={350}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cybersecurity my-6 min-h-[75svh] flex items-center">
                <div>
                  <h4 className="text-left text-2xl font-bold mb-4">
                    Cybersecurity
                  </h4>
                  <div className="service-div odd flex flex-col justify-center items-center md:items-end md:flex-row-reverse gap-4">
                    <div className="left-text md:max-w-[50%]">
                      <p className="text-left">
                        <strong>Dangers lie behind every click,</strong> Cod
                        Vista stands as your unyielding shield. We're not just
                        about cybersecurity; we're about creating a fortress
                        around your digital empire, ensuring every byte of your
                        data is locked down tighter than Fort Knox.
                      </p>
                      <p className="text-left">
                        Our team is a blend of seasoned warriors in the
                        cybersecurity realm, armed to the teeth with the latest
                        tech and strategies to keep your digital domain safe and
                        sound.
                      </p>
                      <p className="text-left">
                        Our Arsenal Includes- Cutting-edge cloud, application,
                        and network security, impenetrable ransomware defense,
                        foolproof authentication, and an ironclad data security
                        strategy designed to keep the bad guys out and your
                        peace of mind intact, preventing data leaks, threats,
                        financial, reputational, and operational losses.
                      </p>
                      <p className="text-left">
                        Moreover, our comprehensive offerings encompass audits,
                        penetration testing, and the implementation of advanced
                        cybersecurity measures.
                      </p>
                      <p className="text-left">
                        With us in your corner, you can focus on what you do
                        best—while we keep the digital barbarians at the gates.
                        <span className="block m-4">
                          <RedirectButton
                            text="Know More"
                            url="/services/cybersecurity"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="right w-[90%] overflow-hidden rounded-xl">
                      <Image
                        className="w-full"
                        src={"/home-page/digital-marketing.png"}
                        alt={""}
                        width={400}
                        height={350}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <FAQs faqs={faqs} />
        </div>
      </Container>
    </>
  );
}
