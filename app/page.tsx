import ActionButton from "@/components/ui/actionButton";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { Code2, LineChart, ShieldCheck, Wand2 } from "lucide-react";
import RedirectButton from "@/components/ui/redirectButton";
import FAQs from "@/components/Faqs";
import Marquee from "react-fast-marquee";

export const metadata = {
  title: "Cod Vista",
  description: "A full-services digital transformation partner",
  metadataBase: new URL("https://www.codvista.com"),
  openGraph: {
    images: ["https://www.codvista.com/logo.png"],
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

interface Images {
  src: string;
  url: string | null;
  name: string;
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
    answer: `<p className="font-semibold">Cod Vista takes data security and confidentiality seriously:</p>
      <ul className="list-disc">
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
    answer: `Visit our <a className="text-blue-500 underline" href="/services">services</a> page to access case studies of our past projects. These case studies showcase our commitment to deliver results that matter. We take pride in our portfolio of successful projects and are happy to share more examples of our work upon request.`,
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

const images: Images[] = [
  {
    src: "/home-page/marquee/jahannuma.png",
    url: "https://jahan-numa.org",
    name: "Jahan Numa",
  },
  {
    src: "/home-page/marquee/asklive.jpg",
    url: "https://www.instagram.com/_asklive/",
    name: "ASK Live",
  },
  {
    src: "/home-page/marquee/kmwf.png",
    url: "http://kmwf.in",
    name: "Khadim-e-Millat Welfare Foundation",
  },
  {
    src: "/home-page/marquee/hqmeds.jpg",
    url: "https://www.hqmedsindia.com/",
    name: "HQ Meds",
  },
  {
    src: "/home-page/marquee/mankindmedicare.jpg",
    url: "https://www.mankindmedicare.com",
    name: "ManKind Medicare",
  },
  {
    src: "/home-page/marquee/alibaba.png",
    url: "https://alibaba.com",
    name: "Ali Baba",
  },
  {
    src: "/home-page/marquee/facebook.png",
    url: "https://facebook.com",
    name: "Facebook",
  },
  {
    src: "/home-page/marquee/fareye.webp",
    url: "https://fareye.com",
    name: "Far Eye",
  },
  {
    src: "/home-page/marquee/kaartech.webp",
    url: "https://www.kaartech.com/",
    name: "Kaar Tech",
  },
  {
    src: "/home-page/marquee/meta.png",
    url: "https://www.meta.com",
    name: "Meta",
  },
];

export default function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full text-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row w-full gap-4 items-center justify-center">
            {/* hero text and CTA*/}
            <div className="max-w-lg  py-16 sm:left-9 z-20 sm:ml-11">
             
              <h1 className="text-5xl mb-4" style={{ fontWeight: "600" }}>
                Unlock Digital Success with Cod Vista!
              </h1>
              <p className="text-lg mb-6">
                We elevate your brand through world-class digital experiences.
                We build transformative digital experiences by blending design,
                marketing, and technology.
                <br />
                From robust cybersecurity to unique brand identity, we offer a
                complete suite of solutions.
              </p>
              <div className="z-50 bottom-44 left-12 md:left-28">
                <ActionButton text="Get Started" />
              </div>
            </div>
            {/* hero Image area */}
            <div className="w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 425.84 276.83"
                width={600}
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="Layer_1-2-2" data-name="Cod Vista Logo">
                      <path
                        className="cls-1"
                        d="M203.78,135.28c0,.15,0,.27,0,.39,0,2.29,0,4.59,0,6.89v.52a3.36,3.36,0,0,1,.36,0H205l.3,0v-.29c0-.45,0-.9,0-1.35v-1.69l.93,0v3.21a.12.12,0,0,0,.12.12h.08l.84,0a.3.3,0,0,0,.3-.29,2.2,2.2,0,0,0,0-.36c0-.9,0-1.81,0-2.71,0-.68-.26-.95-.95-1a1.25,1.25,0,0,1-1-.35,1.07,1.07,0,0,1-.35-.77c0-.7,0-1.4,0-2.1a1,1,0,0,1,.54-.91,2.13,2.13,0,0,1,2.1,0,1.21,1.21,0,0,1,.65,1.12c0,.31,0,.8,0,1.11h-.93c0-.28,0-.76,0-1a.45.45,0,0,0-.42-.5,1.37,1.37,0,0,0-.36,0c-.51,0-.68.19-.68.7s0,1,0,1.48c0,.3,0,.35.35.35a1.91,1.91,0,0,1,1.51.62,1.6,1.6,0,0,1,.43,1.08c0,1.07,0,2.14,0,3.21a1.45,1.45,0,0,1-.24.75,1.13,1.13,0,0,0,.06,1.39A2.65,2.65,0,0,0,211,146a2.55,2.55,0,0,0,2.12-2.11c.35-2,.68-3.92,1-5.88.14-.82.27-1.65.4-2.48a1,1,0,0,0,0-.18h-3a2.09,2.09,0,0,0,0,.25q0,4,0,8c0,.11,0,.3,0,.3h-1v-8.62H209v-.91h6.82c.24,0,.32.06.38.31.53,2.52,1.08,5,1.63,7.55a1.41,1.41,0,0,1-2.65.9,5.4,5.4,0,0,1-.13-1.07v-.11h.9l0,.26c0,.16,0,.32,0,.48a.4.4,0,0,0,.44.38c.29-.05.53-.3.47-.54-.1-.47-.22-.93-.35-1.38a.25.25,0,0,0-.18-.14c-.56,0-1.13,0-1.69,0-.15,0-.17.09-.19.2-.15.92-.3,1.84-.47,2.76a3.58,3.58,0,0,1-3.19,3,3.53,3.53,0,0,1-3.75-2.46c-.12-.42-.12-.42-.55-.42l-5.83,0a.42.42,0,0,1-.48-.37c-.23-.83-.48-1.66-.7-2.49q-.82-3.18-1.63-6.37c0-.12-.05-.31-.09-.46h.9c.48,1.86,1,3.81,1.49,5.66l.27.95-.08-6.61h.95V135s0,5.18,0,7.76c0,.08,0,.29,0,.29h1.49s0-.25,0-.35v-7.28a.57.57,0,0,0,0-.13c-.32,0-.67,0-1,0v-1h3.08v1Zm11,4.72h1.56c-.29-1.36-.61-2.7-.9-4Z"
                      />
                      <path
                        className="cls-1"
                        d="M208.59,132.62h1.74c.16,0,.18-.08.18-.22,0-.42,0-.85,0-1.28q0-3.81,0-7.61v-.26a1.61,1.61,0,0,1,.22,0h1.5a2.36,2.36,0,0,1,2.52,2.39c0,1.89.05,3.79,0,5.68a2.28,2.28,0,0,1-1.29,1.9,2.51,2.51,0,0,1-1.31.36H200.5v-.94H205l-.21-.28a2.6,2.6,0,0,1-.62-1.76c0-1.59,0-3.19,0-4.78a2.56,2.56,0,0,1,1.78-2.47,2.62,2.62,0,0,1,3.36,2.49c0,1.68,0,3.36,0,5a2.26,2.26,0,0,1-.61,1.58Zm-.21-4.33h0v-2.54a1.57,1.57,0,0,0-.29-.88,1.6,1.6,0,0,0-1.77-.67,1.55,1.55,0,0,0-1.17,1.51c0,.59,0,1.19,0,1.79v3.11a1.71,1.71,0,0,0,.87,1.57,1.6,1.6,0,0,0,2.36-1.3c0-.87,0-1.73,0-2.59Zm3.07-4.14v8.23c0,.17.05.24.23.23s.44,0,.65,0a1.61,1.61,0,0,0,1.5-1.57c0-1.56,0-3.11,0-4.67a6.58,6.58,0,0,0,0-.89,1.3,1.3,0,0,0-1-1.19A9.84,9.84,0,0,0,211.45,124.15Z"
                      />
                      <path
                        className="cls-1"
                        d="M203.08,129.63s0,.91,0,1.12a3.07,3.07,0,0,1-6.12,0c-.09-1.37-.05-2.76,0-4.13a6.18,6.18,0,0,1,.15-1.49,2.59,2.59,0,0,1,2.38-1.9c1.13,0,2.19,0,3.32,0H203v.92l-3.26,0a1.92,1.92,0,0,0-1.34.44,1.73,1.73,0,0,0-.54,1.35c0,1.5,0,3,0,4.5a2.07,2.07,0,0,0,1.17,2,2.14,2.14,0,0,0,3.06-1.62c0-.25.07-1.22.07-1.22Z"
                      />
                      <path
                        className="cls-1"
                        d="M215,132.52a11.13,11.13,0,0,0,1-1.28,5.8,5.8,0,0,0-.27-6.66l-.51-.66c.25-.14.47-.28.7-.4,0,0,.14,0,.18.07a7.65,7.65,0,0,1,1.3,7,9,9,0,0,1-1.88,2.67Z"
                      />
                      <rect
                        className="cls-1"
                        x="196.88"
                        y="145.85"
                        width="9.61"
                        height="1.09"
                      />
                      <path
                        className="cls-1"
                        d="M199.89,143.66a1.59,1.59,0,0,0-1.46,1.56,1.56,1.56,0,0,0-1.57-1.56h0a1.57,1.57,0,0,0,1.43-1.56,1.56,1.56,0,0,0,1.57,1.56"
                      />
                    </g>
                    <rect
                      className="cls-2"
                      x="188.86"
                      y="117.78"
                      width="37.03"
                      height="37.03"
                    />
                    <Link
                      href="/services/web-app-development"
                      className="cursor-pointer"
                    >
                      <rect
                        className="cls-2  fill-blue-600"
                        x="179.05"
                        y="75.25"
                        width="56.65"
                        height="13.27"
                      />
                      <text
                        className="cls-3 text"
                        transform="translate(186.66 84.01)"
                      >
                        Development
                      </text>
                    </Link>
                    <rect
                      className="cls-2"
                      x="259.92"
                      y="129.66"
                      width="56.65"
                      height="13.27"
                    />
                    <Link href="/services/digital-marketing">
                      <text
                        className="cls-3"
                        transform="translate(262.07 138.43)"
                      >
                        Digital Marketing
                      </text>
                    </Link>
                    <rect
                      className="cls-2"
                      x="98.18"
                      y="129.66"
                      width="56.65"
                      height="13.27"
                    />
                    <Link href="/services/graphic-design">
                      <text
                        className="cls-3"
                        transform="translate(103.39 138.43)"
                      >
                        Graphic Design
                      </text>
                    </Link>
                    <rect
                      className="cls-2"
                      x="179.05"
                      y="173.1"
                      width="56.65"
                      height="13.27"
                    />
                    <Link href="/services/cybersecurity">
                      <text
                        className="cls-3"
                        transform="translate(186.71 181.87)"
                      >
                        Cybersecurity
                      </text>
                    </Link>
                    <text className="cls-3" transform="translate(78.46 74.3)">
                      Branding
                    </text>
                    <text className="cls-3" transform="translate(35.02 107.01)">
                      Re Branding
                    </text>
                    <text className="cls-3" transform="translate(0 138.87)">
                      Print Graphics
                    </text>
                    <text className="cls-3" transform="translate(29.42 178.36)">
                      Digital Graphics
                    </text>
                    <text className="cls-3" transform="translate(307.7 68.7)">
                      Social Media management
                    </text>
                    <text
                      className="cls-3"
                      transform="translate(341.68 104.48)"
                    >
                      Ads and Campaigns
                    </text>
                    <text
                      className="cls-3"
                      transform="translate(368.46 137.98)"
                    >
                      Search Engien
                      <tspan x="0" y="8.7">
                        Optimization (SEO)
                      </tspan>
                    </text>
                    <text
                      className="cls-3"
                      transform="translate(334.54 179.87)"
                    >
                      Whatsapp, SMS &amp;
                      <tspan x="0" y="8.7">
                        Email Marketing
                      </tspan>
                    </text>
                    <text className="cls-3" transform="translate(123.76 6.07)">
                      Responsive Website
                    </text>
                    <text className="cls-3" transform="translate(248.81 7.5)">
                      Full Stack Development
                    </text>
                    <text className="cls-3" transform="translate(81.69 38.25)">
                      Progressive Web Apps
                    </text>
                    <text className="cls-3" transform="translate(275.49 38.25)">
                      Android and IOS App Development
                    </text>
                    <text className="cls-3" transform="translate(276.88 242.7)">
                      Web Pentesting
                    </text>
                    <text
                      className="cls-3"
                      transform="translate(245.35 275.02)"
                    >
                      Cloud Security
                    </text>
                    <text className="cls-3" transform="translate(87.59 238.44)">
                      Network Security
                    </text>
                    <text className="cls-3" transform="translate(60.49 204.32)">
                      Authentication
                    </text>
                    <text
                      className="cls-3"
                      transform="translate(133.25 273.42)"
                    >
                      Data Security
                    </text>
                    <text className="cls-3" transform="translate(309.44 207.8)">
                      DDoS
                    </text>
                    <polyline
                      className="cls-4"
                      points="225.45 75.25 225.45 38.25 276.32 38.25"
                    />
                    <polyline
                      className="cls-4"
                      points="188.89 75.25 188.89 38.25 145.56 38.25"
                    />
                    <polyline
                      className="cls-4"
                      points="152.62 6.07 152.62 21.57 199.86 21.57 199.86 75.25"
                    />
                    <path
                      className="cls-4"
                      d="M214.43,75.25V21.57h46.94V6.74"
                    />
                    <polyline
                      className="cls-4"
                      points="71.28 106.35 108.28 106.35 108.28 129.66"
                    />
                    <polyline
                      className="cls-4"
                      points="105.58 73.79 142.58 73.79 142.58 129.66"
                    />
                    <line
                      className="cls-4"
                      x1="369.16"
                      y1="137.6"
                      x2="316.54"
                      y2="137.6"
                    />
                    <polyline
                      className="cls-4"
                      points="335.25 175.26 303.95 175.26 303.95 142.93"
                    />
                    <line
                      className="cls-4"
                      x1="41.6"
                      y1="137.89"
                      x2="98.18"
                      y2="137.89"
                    />
                    <polyline
                      className="cls-4"
                      points="76.98 177.38 108.28 177.38 108.28 142.93"
                    />
                    <polyline
                      className="cls-4"
                      points="309.25 68.48 281.73 68.48 281.73 129.66"
                    />
                    <polyline
                      className="cls-4"
                      points="342.2 104.22 305.39 104.23 305.39 129.66"
                    />
                    <polyline
                      className="cls-4"
                      points="215.35 186.37 215.35 270.25 248.09 270.25"
                    />
                    <polyline
                      className="cls-4"
                      points="277.35 238.08 224.03 238.08 224.03 186.37"
                    />
                    <polyline
                      className="cls-4"
                      points="310.23 203.45 231.86 203.45 231.86 186.37"
                    />
                    <polyline
                      className="cls-4"
                      points="172.96 270.25 207.64 270.25 207.64 186.37"
                    />
                    <polyline
                      className="cls-4"
                      points="139.04 235.24 196.86 235.24 196.86 186.37"
                    />
                    <polyline
                      className="cls-4"
                      points="104.98 204 187.21 204 187.21 186.37"
                    />
                    <line
                      className="cls-4"
                      x1="207.87"
                      y1="154.81"
                      x2="207.87"
                      y2="173.21"
                    />
                    <line
                      className="cls-4"
                      x1="207.38"
                      y1="117.78"
                      x2="207.38"
                      y2="88.52"
                    />
                    <polyline
                      className="cls-4"
                      points="225.89 137.49 245.35 137.49 245.35 169.14 272.03 169.14 272.03 142.93"
                    />
                    <polyline
                      className="cls-4"
                      points="142.58 142.93 142.58 169.14 172.96 169.14 172.96 137.49 188.89 137.49"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </Container>
      </div>
      {/* Main Content */}
      <Container>
        <main>
          <div className="text-center mb-8">
            <div className="mini-intro-of-starting">
              <h2 className="text-3xl font-bold my-4 mt-2">
                Cod Vista– A full-service digital transformation partner.
              </h2>
              <p className="text-gray-200 text-left">
                To produce the optimal outcomes you need a partner to trust, an
                expert who can guide you to the right strategy, take charge of
                the process, and deliver results that your customers will love.
                Cod Vista comprises experienced professionals, including
                creatives, strategists, technologists, and problem-solvers.
                Using a human-centered approach we empathize with your
                customers, identify their pain points, and create solutions that
                enhance their experience with your brand or product.
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
            </div>

            <div className="my-4 companies-show-case">
              <h3 className="text-3xl">
                Leading companies trust us to design their products
              </h3>
              <div className="my-4">
                <Marquee
                  autoFill={true}
                  pauseOnHover={true}
                  direction="left"
                  delay={0}
                  gradient={false}
                >
                  <div className="first flex gap-4 ml-4 py-5">
                    {images.map((obj) => (
                      <>
                        <div className="relative text-center bg-white w-20 h-20 rounded-xl cursor-pointer overflow-hidden filter grayscale hover:scale-125 hover:filter-none transition-all ease-in-out">
                          {obj.url ? (
                            <Link href={`${obj.url}`} target="_blank">
                              <Image
                                className="w-full h-full"
                                src={obj.src}
                                alt={obj.name}
                                width={1080}
                                height={1080}
                              />
                            </Link>
                          ) : (
                            <Image
                              className="w-full h-full"
                              src={obj.src}
                              alt={obj.name}
                              width={1080}
                              height={1080}
                            />
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>

            <div className="review my-4"></div>

            <h2 className="text-3xl font-bold my-4">Services we offer</h2>
            <div className="servicesDivs" id="servicesDivs">
              <div className="digital-marketing my-6 min-h-[75svh] flex items-center">
                <div>
                  <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
                    <LineChart size={32} /> Digital Marketing
                  </h4>
                  <div className="service-div even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
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
                            url="/services/digital-marketing"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="right w-[90%] relative overflow-hidden rounded-xl max-h-[400px] flex items-center">
                      <Image
                        className="w-full btn-4"
                        src={"/home-page/marketing.jpg"}
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
                  <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
                    <Wand2 size={32} /> Graphic Design
                  </h4>
                  <div className="service-div odd flex flex-col justify-center items-center md:items-center md:flex-row-reverse gap-4">
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
                    <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                      <Image
                        className="w-full"
                        src={"/home-page/gfx.jpg"}
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
                  <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
                    <Code2 size={32} /> Web & App Development
                  </h4>
                  <div className="service-div even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
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
                            url="/services/web-app-development"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                      <Image
                        className="w-full"
                        src={"/home-page/dev.jpg"}
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
                  <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
                    <ShieldCheck size={32} /> Cybersecurity
                  </h4>
                  <div className="service-div odd flex flex-col justify-center items-center md:items-center md:flex-row-reverse gap-4">
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
                    <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                      <Image
                        className="w-full"
                        src={"/home-page/security.jpg"}
                        alt={""}
                        width={400}
                        height={350}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Faqs */}
        <div className="mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <FAQs faqs={faqs} />
        </div>
      </Container>
    </>
  );
}
