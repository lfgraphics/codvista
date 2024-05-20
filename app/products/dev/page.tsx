// pages/products/development.js
import Head from "next/head";
import Container from "@/components/ui/container";
import RedirectButton from "@/components/ui/redirectButton";
import Image from "next/image";

export default function DevelopmentProducts() {
  return (
    <Container>
      <Head>
        <title>Development Products | Cod Vista</title>
        <meta
          name="description"
          content="Explore Cod Vista's range of development products including web development, mobile app development, and software solutions."
        />
        <meta
          name="keywords"
          content="Cod Vista, Development Products, Web Development, Mobile App Development, Software Solutions"
        />
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Development Products</h1>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="md:w-1/2">
            <Image
              src="/tasbeeh/photo.jpg"
              alt="Tasbeeh"
              width={800}
              height={600}
              className="rounded-lg max-w-96"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">Tasbeeh</h2>
            <p className="mb-4">
              Tasbeeh is a digital tool designed to help users keep track of
              their daily prayers and supplications. Its functionalities
              include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Counting and logging prayer repetitions</li>
              <li>Customizable prayer targets</li>
              <li>Sound and vibration alerts</li>
              <li>Dark mode</li>
              <li>Managing custom prayers (Dua)</li>
              <li>User-friendly interface</li>
            </ul>
            <RedirectButton text="Know More about Tasbeeh" url="/products/dev/tasbeeh" />
          </div>
        </div>
      </div>
    </Container>
  );
}
