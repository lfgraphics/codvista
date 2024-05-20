// pages/products/development.js
import Head from "next/head";
import Container from "@/components/ui/container";
import RedirectButton from "@/components/ui/redirectButton";
import Image from "next/image";

export const metadata = {
  title: "Programming/ Development Products | Cod Vista",
  description:
    "Explore Cod Vista's range of development products including web development, mobile app development, and software solutions.",
  metadataBase: new URL("https://www.codvista.com/products/dev"),
  openGraph: {
    images: [
      "https://images.unsplash.com/photo-1592609930961-219235eded71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mdHdhcmV8fHx8fHwxNzE2MjEyNjUz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    ],
  },
};

export default function DevelopmentProducts() {
  return (
    <Container>
      <Head>
        <title>Development Products | Cod Vista</title>
        <meta name="description" content="" />
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
            <RedirectButton
              text="Know More about Tasbeeh"
              url="/products/dev/tasbeeh"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
