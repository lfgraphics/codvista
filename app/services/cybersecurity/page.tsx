import Container from "@/components/ui/container";
import Image from "next/image";
import ActionButton from "@/components/ui/actionButton";

const page = () => {
  return (
    <Container>
      <div className="mt-14 md:mt-32 mb-7">
        <h1 className="text-center text-white z-40 md:left-[35%] md:text-6xl font-bold text-4xl my-7">
          Cyber Security
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
              src={"/home-page/security.jpg"}
              alt="Cod Vista Team"
              width={300}
              height={450}
            />
          </div>
          <div className="text flex-[55%] justify-center relative">
            <p className="text-xl text-left">
              <strong>Dangers lie behind every click,</strong> Cod Vista stands
              as your unyielding shield. We're not just about cybersecurity;
              we're about creating a fortress around your digital empire,
              ensuring every byte of your data is locked down tighter than Fort
              Knox.
              <br />
              <br />
              Our team is a blend of seasoned warriors in the cybersecurity
              realm, armed to the teeth with the latest tech and strategies to
              keep your digital domain safe and sound. Our Arsenal Includes-
              Cutting-edge cloud, application, and network security,
              impenetrable ransomware defense, foolproof authentication, and an
              ironclad data security strategy designed to keep the bad guys out
              and your peace of mind intact, preventing data leaks, threats,
              financial, reputational, and operational losses.
              <br />
              <br />
              Moreover, our comprehensive offerings encompass audits,
              penetration testing, and the implementation of advanced
              cybersecurity measures.
              <br />
              <br />
              With us in your corner, you can focus on what you do best—while we
              keep the digital barbarians at the gates.
              <br />
              <ActionButton text="Book a Call" />
            </p>
            {/* <div className="blanky hidden md:block bg-white w-[50%] absolute bottom-5 left-10 h-[10px]"></div> */}
          </div>
        </div>
        SOME SERVICES Authentication Solutions: Enhance access control and
        identity management with Cod Vista's Authentication process. From
        multi-factor authentication to biometric identification, we implement
        robust authentication mechanisms to verify user identities and prevent
        unauthorized access to your systems and data. Network Security: Through
        rigorous monitoring, intrusion detection, and access control measures,
        our team fortifies your network against potential vulnerabilities and
        unauthorized access points. By analyzing both weak and strong ties
        within your network architecture, we identify potential points of
        weakness and strengthen connections to enhance overall resilience. This
        approach minimizes the risk of data breaches and disruptions to your
        operations. Application Security: Protect your applications from
        potential threats and vulnerabilities with our application security
        experienced expertise. Our team conducts thorough assessments and
        implements industry best practices to fortify your applications against
        attacks and unauthorized access. Cloud Security: Safeguard your cloud
        infrastructure and data. From configuration management to encryption
        protocols, we ensure that your data remains secure and compliant in the
        cloud environment. (you can use these sentences while displaying
        designs) 1- Protect your data and business 24/7 2- Don't wait for
        disaster to strike. Let us be your trusted partner in navigating the
        complexities of cyber protection. 3- Fortify your cyber defenses 4- Your
        business is unique, and so are the threats you face. We craft custom
        security solutions that fit your needs like a glove, ensuring maximum
        protection without slowing you down. 5- Don't wait for disaster to
        strike. 6- Defend your network infrastructure from cyber threats.
      </div>
    </Container>
  );
};

export default page;
