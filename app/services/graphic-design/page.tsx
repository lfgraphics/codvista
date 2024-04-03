import Container from "@/components/ui/container";
import Image from "next/image";

const page = () => {
  return (
    <Container>
      <div className="mt-14 md:mt-32 mb-7">
        <h1 className="text-center text-white z-40 md:left-[35%] md:text-6xl font-bold text-4xl my-7">
          Graphic Design
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
              src={"/home-page/gfx.jpg"}
              alt="Cod Vista Team"
              width={300}
              height={450}
            />
          </div>
          <div className="text flex-[55%] justify-center relative">
            <p className="text-xl text-left">
              Branding/Rebranding - We specialize in crafting unique brand
              identities that resonate with your target audience. Whether you're
              establishing a new brand or revitalizing an existing one, our team
              brings creativity and strategic thinking to every project,
              ensuring your brand stands out in today's competitive market.
              <br />
              <br />
              Print Graphics: From eye-catching posters and banners to
              informative brochures and sleek business cards, print designs that
              capture attention and communicate your message effectively.
              Printed with the highest quality standards, leaving a lasting
              impression on your audience.
              <br />
              <br />
              Digital Graphics: Whether it's designing a memorable logo that
              embodies your brand's essence or creating engaging social media
              kits and icons, our team combines expertise and creativity to help
              your brand stand out in the digital realm.
            </p>
            {/* <div className="blanky hidden md:block bg-white w-[50%] absolute bottom-5 left-10 h-[10px]"></div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
