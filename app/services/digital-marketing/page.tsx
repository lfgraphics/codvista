import Container from "@/components/ui/container";
import Image from "next/image";
import ActionButton from "@/components/ui/actionButton";

export const metadata = {
  title: "Cod Vista | Digital Marketing",
  description: " With our personalized approach and commitment to excellence, we'll help you reach new heights in your digital marketing endeavors",
  metadataBase: new URL(
    "https://www.codvista.com/services/digital-marketing"
  ),
  openGraph: {
    images: ["https://www.codvista.com/logo.png"],
  },
};

const page = () => {
  return (
    <Container>
      <div className="mt-14 md:mt-32 mb-7">
        <h1 className="text-center text-white z-40 md:left-[35%] md:text-6xl font-bold text-4xl my-7">
          Digital Marketing
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
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt="Cod Vista Team"
              width={300}
              height={450}
            />
          </div>
          <div className="text flex-[55%] justify-center relative">
            <p className="text-xl text-left">
              We’re not just another digital marketing agency that relies on
              cookie-cutter templates and guesswork for every client. In a
              landscape that’s growing increasingly complex, we’re able to help
              brands cut through the noise and have their digital presence stand
              out in a super-competitive ecosystem. We design your marketing
              campaign to match your unique objectives, fine-tuning the strategy
              based on concrete research and time-tested marketing tactics, not
              mere speculation.
              <br />
              <br />
              Imagine your brand achieving the same level of recognition as the
              local coffee shop, your website steadily climbing the ranks on
              Google like a determined mountaineer, and your inbox bustling with
              potential leads like a lively farmers market. These are the goals
              we strive to achieve for your business. And the best part? You can
              achieve these milestones without the financial burden of hiring a
              full-time team.
              <br />
              <br />
              With our personalized approach and commitment to excellence, we'll
              help you reach new heights in your digital marketing endeavors
            </p>
            <br />
            <ActionButton text="Book a Call" />
            {/* <div className="blanky hidden md:block bg-white w-[50%] absolute bottom-5 left-10 h-[10px]"></div> */}
          </div>
        </div>
        <div className="my-6 min-h-[75svh] flex items-center">
          <div>
            <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
              Social Media Management
            </h4>
            <div className="service-div even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
              <div className="left text md:max-w-[50%]">
                <p className="text-left">
                  Comprehensive social media management services, including
                  strategic content creation, targeted advertising campaigns,
                  and engaging short-form content. Build a strong online
                  presence and connect with your audience across various social
                  platforms.
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <Image
                  className="w-full"
                  src={"/services/dm/smm.jpg"}
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
              Ads Management
            </h4>
            <div className="service-div odd flex flex-col justify-center items-center md:items-center md:flex-row-reverse gap-4">
              <div className="left-text md:max-w-[50%]">
                <p className="text-left">
                  Drive targeted traffic and maximize your online visibility
                  with Cod Vista's Google, Facebook and Instagram Ads expertise.
                  We craft customized ad campaigns that effectively reach your
                  target audience, driving conversions and optimizing your
                  return on investment.
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl flex items-center">
                <Image
                  className="w-full"
                  src={"/services/dm/ads.png"}
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
              SEO
            </h4>
            <div className="service-div even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
              <div className="left text md:max-w-[50%]">
                <p className="text-left">
                  Climb the search engine rankings with Cod Vista's SEO
                  strategies. From keyword research and on-page optimization to
                  content creation and link building, we employ proven
                  techniques to enhance your website's visibility and bring
                  organic traffic to your site.
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <Image
                  className="w-full"
                  src={"/services/dm/seo.png"}
                  alt={""}
                  width={400}
                  height={350}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="my-6 min-h-[75svh] flex items-center">
          <div>
            <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
              WhatsApp Marketing
            </h4>
            <div className="service-div even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
              <div className="left text md:max-w-[50%]">
                <p className="text-left">
                  Leverage the power of direct communication with WhatsApp
                  marketing. We help you craft personalized messages,
                  promotions, and effective customer engagement strategies to
                  connect your audience on the popular messaging platform.
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <Image
                  className="w-full"
                  src={"/services/dm/seo.png"}
                  alt={""}
                  width={400}
                  height={350}
                ></Image>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default page;
