import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <Container>
      <div className="mt-14 md:mt-32 mb-7">
        <h1 className="text-center text-white z-40 md:left-[35%] md:text-6xl font-bold text-4xl">
          Development Team Services Case Studies
        </h1>
        <div className="saparator"></div>
        <div className="my-6 flex items-center">
          <div>
            <h4 className="text-left text-2xl font-bold mb-4 inline-flex md:flex md:justify-start">
              Streamlining Fee Management for Modern Nursery School
            </h4>
            <div className="service-div  text-lg even flex flex-col justify-center items-center md:items-center md:flex-row gap-4">
              <div className="left text md:max-w-[50%]">
                <p className="text-left">
                  Discover how we revolutionized fee management for Modern
                  Nursery School using Excel automation. Say goodbye to manual
                  errors and hello to streamlined processes.{" "}
                  <Link
                    className="text-blue-500 visited:text-purple-600 underline"
                    href="/services/web-app-development/caseStudies/school-data-management"
                  >
                    {" "}
                    Learn more{" "}
                  </Link>
                  about our innovative solution and how it transformed
                  administrative tasks.
                </p>
              </div>
              <div className="right w-[90%] overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <Image
                  className="w-full"
                  src={"/services/dev/caseStudies/school-data-management.jpeg"}
                  alt={""}
                  width={400}
                  height={350}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="secsaparator"></div>
      </div>
    </Container>
  );
};

export default page;
