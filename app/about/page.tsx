import Container from "@/components/ui/container";
import Image from "next/image";
import Star from "@/components/ui/star";

const page = () => {
  return (
    <Container>
      <div className="mt-14 md:mt-32 mb-7">
        <h1 className="text-center md:absolute text-white z-40 md:left-[35%] md:text-6xl font-bold text-4xl my-7">
          About Cod Vista
        </h1>
        <div className="flex relative flex-col md:flex-row items-center gap-8">
          <div className="absolute md:-top-4 md:-left-4 -top-4 -left-0 w-7 h-auto">
            <div className="scale-150">
              <Star color="fill-purple-600"></Star>
            </div>
          </div>
          <div className="image rounded-lg overflow-hidden md:w-[45%]">
            <Image
              className="w-full"
              src={"/about/first.jpeg"}
              alt="Cod Vista Team"
              width={300}
              height={450}
            />
          </div>
          <div className="text flex-[55%] justify-center relative">
            <p className="text-xl text-left md:leading-10">
              Cod Vista is a full-service digital transformation partner founded
              in 2020. Our company serves IT and non IT entities, helping to
              achieve a variety of goals and objectives with digital solutions
              and emerging technologies.
            </p>
            <div className="blanky hidden md:block bg-white w-[50%] absolute bottom-5 left-10 h-[10px]"></div>
          </div>
        </div>
        <div className="mission-vision">
          <h1 className="text-center md:text-6xl font-bold text-4xl my-7">
            Our Mission and vision
          </h1>
          <div className="mission-vision-values">
            <h3 className="font-semibold text-left text-2xl my-7 md:text-4xl">
              Mission
            </h3>
            <p className="text-lg md:text-xl ">
              We build-design alongside our clients to make the world a better
              place for everyone.
            </p>
            <h3 className="font-semibold text-left text-2xl my-7 md:text-4xl">
              Vision
            </h3>
            <p className="text-lg md:text-xl ">
              Our company’s vision is fully defined by a simple but
              comprehensive phrase — We will revolutionize the digital
              landscape.
            </p>
            <h3 className="font-semibold text-left text-2xl my-7 md:text-4xl">
              Values
            </h3>
            <p className="text-lg md:text-xl ">
              We do what we love and we do it well.
              <br />
              We take pride in our team and continuously evolving nature.
              <br />
              We uphold honesty as the bedrock of our agency, fostering
              transparency and trust in all our interactions.
            </p>
          </div>
        </div>
        <div className="why-us?">
          <h1 className="text-center md:text-6xl font-bold text-4xl my-7">
            Why Chose Us?
          </h1>
          <div className="mission-vision-values">
            <h3 className="font-semibold text-left text-2xl my-7 md:text-4xl">
              Result-oriented
            </h3>
            <p className="text-lg md:text-xl ">
              For Cod Vista, project success hinges solely on achieving clients'
              set goals and objectives. With exceptional project management and
              a talented IT team, we expedite tasks with efficiency and
              precision, ensuring high-quality and superior outcomes every time.
            </p>
            <h3 className="font-semibold text-left text-2xl my-7 md:text-4xl">
              Flexible
            </h3>
            <p className="text-lg md:text-xl ">
              With a cadre of highly skilled IT professionals alreadyboard, our
              team swiftly adjusts to meet clients' requirements. We excel in
              rapid team ramp-up, effortlessly scaling our workforce up or down
              to match evolving project conditions.
            </p>
            <h3 className="font-semibold text-left text-2xl my-7 md:text-4xl">
              Transparent
            </h3>
            <p className="text-lg md:text-xl ">
              Our cooperation with clients is always open and honest. We ensure
              regular communication, an established daily reporting system, and
              tracking tools according to the client’s preferences. Thus, our
              clients can control all possible aspects of projects.
            </p>
          </div>
        </div>
        <div className="TEAMS">
          <h1 className="text-center md:text-6xl font-bold text-4xl my-7">
            TEAMS
          </h1>
          <div className="mission-vision-values">
            <p className="text-lg md:text-xl ">
              <strong className="text-2xl">With a vision</strong> to
              revolutionize the digital landscape. Founder, Taha Kazmi, a
              passionate graphics designer + programmer, felt the need for a
              platform where all digital services could be met under one roof.
              In 2020, collaborating with (co-founder) Mohammad Saif, a renowned
              white hat hacker, the idea took flight.
              <br />
              <br />
              Saif's expertise in cybersecurity added a layer of protection,
              ensuring clients' assets remain secure in an increasingly volatile
              online world while Taha's creativity and innovative thinking laid
              the foundation of our digital solutions, allowing us to craft
              visually stunning designs-integrate them seamlessly.
              <br />
              <br />
              To encapsulate our clients of the marketing world we invited Mohd
              Amir, our digital marketing virtuoso having over three years of
              experience. With a knack for growing social media presence and
              managing ad campaigns, Amir elevated Cod Vista's offerings to new
              heights, ensuring clients received comprehensive services as per
              their needs.
              <br />
              <br />
              Every team needs balance, and that's where Yusuf Khan, another
              Co-Founder, comes in. With over six years of experience in local
              businesses, Khan brings unmatched communication skills to the
              table. His ability to charm clients and negotiate deals is
              unparalleled, making him the perfect liaison between Cod Vista and
              its valued clientele.
              <br />
              <br />
              On top of that, to ensure that every aspect of your project
              receives the attention and expertise it deserves, we utilize
              <strong className="text-2xl">Strategic Outsourcing</strong> as it
              enables us to tap into a vast network of specialized talent and
              resources. By collaborating with trusted partners, we remain
              responsive to the evolving needs of our clients while maintaining
              the highest standards of quality and efficiency.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
