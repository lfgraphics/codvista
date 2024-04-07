import Container from "@/components/ui/container";
import Image from "next/image";
import { Code2, LineChart, ShieldCheck, Wand2 } from "lucide-react";
import RedirectButton from "@/components/ui/redirectButton";

const page = () => {
  return (
    <Container>
      <div className="servicesDivs" id="servicesDivs">
        <div className="digital-marketing my-6 min-h-[75svh] flex items-center">
          <div>
            <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
              <LineChart size={32} /> Digital Marketing
            </h4>
            <div className="service-div even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
              <div className="left text md:max-w-[50%]">
                <p className="text-left">
                  We’re not just another digital marketing agency that relies on
                  cookie-cutter templates and guesswork for every client. In a
                  landscape that’s growing increasingly complex, we’re able to
                  help brands cut through the noise and have their digital
                  presence stand out in a super-competitive ecosystem. We design
                  your marketing campaign to match your unique objectives,
                  fine-tuning the strategy based on concrete research and
                  time-tested marketing tactics, not mere speculation.
                </p>
                <p className="text-left">
                  Imagine your brand achieving the same level of recognition as
                  the local coffee shop, your website steadily climbing the
                  ranks on Google like a determined mountaineer, and your inbox
                  bustling with potential leads like a lively farmers market.
                  These are the goals we strive to achieve for your business.
                  And the best part? You can achieve these milestones without
                  the financial burden of hiring a full-time team.
                </p>
                <p className="text-left">
                  With our personalized approach and commitment to excellence,
                  we'll help you reach new heights in your digital marketing
                  endeavors <br />
                  <span className="block m-4">
                    <RedirectButton
                      text="Know More"
                      url="/services/digital-marketing"
                    />
                  </span>
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <Image
                  className="w-full"
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
                  There's no limit to what you can get designed at Cod Vista.
                  Whether you need an out-of-this-world illustration, beautiful
                  print designs, or engaging digital marketing ads, Cod Vista
                  can make it happen. Regardless of your existing creative
                  resources, partnering with our graphic design agency ensures
                  you receive designs that are meticulously tailored to your
                  business needs and infused with a unique creative spark.
                </p>
                <p className="text-left">
                  Get all your graphic design needs met—from branding to website
                  illustrations. We are committed to creating designs that not
                  only catch the eye but also tell your unique story, thereby
                  forging deeper connections with your audience on a whole new
                  level.
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
                  In today's digital era, having a professional website or app
                  isn't just a luxury; it's a necessity. Our goal is to ensure
                  that you establish an effective digital footprint that sets
                  you apart.
                </p>
                <p className="text-left">
                  From concept to application, we specialize in creating custom
                  web and app solutions that captivate your audience and leave a
                  lasting impression. Through expert guidance, quality-assured
                  solutions, and a personalized approach, we aim to streamline
                  all your digital solutions, sparing you the hassle.
                </p>
                <p className="text-left">
                  From concept to application, we specialize in creating custom
                  web and app solutions that captivate your audience and leave a
                  lasting impression. Through expert guidance, quality-assured
                  solutions, and a personalized approach, we aim to streamline
                  all your digital solutions, sparing you the hassle. <br />
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
                  <strong>Dangers lie behind every click,</strong> Cod Vista
                  stands as your unyielding shield. We're not just about
                  cybersecurity; we're about creating a fortress around your
                  digital empire, ensuring every byte of your data is locked
                  down tighter than Fort Knox.
                </p>
                <p className="text-left">
                  Our team is a blend of seasoned warriors in the cybersecurity
                  realm, armed to the teeth with the latest tech and strategies
                  to keep your digital domain safe and sound.
                </p>
                <p className="text-left">
                  Our Arsenal Includes- Cutting-edge cloud, application, and
                  network security, impenetrable ransomware defense, foolproof
                  authentication, and an ironclad data security strategy
                  designed to keep the bad guys out and your peace of mind
                  intact, preventing data leaks, threats, financial,
                  reputational, and operational losses.
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
    </Container>
  );
};

export default page;
