import Head from "next/head";
import RedirectButton from "@/components/ui/redirectButton";
import Container from "@/components/ui/container";
import Image from "next/image";

export const metadata = {
  title: "Products | Cod Vista",
  description:
    "Explore Cod Vista's range of digital products in digital marketing, development, cybersecurity, and graphic design.",
  metadataBase: new URL("https://www.codvista.com/products"),
  openGraph: {
    images: [
      "https://images.unsplash.com/photo-1592609930961-219235eded71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mdHdhcmV8fHx8fHwxNzE2MjEyNjUz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    ],
  },
};

export default function Products() {
  return (
    <Container>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Our Digital Products</h1>

        <div className="flex flex-col md:flex-row items-center mb-12 gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2">Development</h2>
            <p className="mb-4">
              At Cod Vista, we offer a wide range of development projects
              including web development, mobile app development, and software
              solutions. Our products are designed to enhance productivity and
              streamline processes for businesses of all sizes.
            </p>
            <RedirectButton
              text="Explore Development Products"
              url="/products/dev"
            />
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZSUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt="Development"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12 gap-6">
          <div className="md:w-1/2 order-2 md:order-1">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661389748409-0a8f74602f34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlJTIwZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt="Digital Marketing"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-2">Digital Marketing</h2>
            <p className="mb-4">
              Our digital marketing products include SEO tools, social media
              marketing strategies, and comprehensive analytics platforms to
              help you boost your online presence and reach your target audience
              effectively.
            </p>
            <RedirectButton
              text="Explore Digital Marketing Products"
              url="/products/digital-marketing"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12 gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2">Cybersecurity</h2>
            <p className="mb-4">
              We offer advanced cybersecurity solutions to protect your digital
              assets from threats. Our products include antivirus software,
              encryption tools, and comprehensive security protocols to ensure
              the safety of your data.
            </p>
            <RedirectButton
              text="Explore Cybersecurity Products"
              url="/products/cybersecurity"
            />
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1655036387197-566206c80980?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlJTIwY3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt="Cybersecurity"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12 gap-6">
          <div className="md:w-1/2 order-2 md:order-1">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt="Graphic Design"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-2">Graphic Design</h2>
            <p className="mb-4">
              Our graphic design products include design software, templates,
              and creative assets that enable you to create stunning visuals for
              your projects. Whether you're a professional designer or a
              beginner, we have something for you.
            </p>
            <RedirectButton
              text="Explore Graphic Design Products"
              url="/products/graphic-design"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
