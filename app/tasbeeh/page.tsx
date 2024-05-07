import TasbeehCounter from "@/components/Tasbeeh";
export const metadata = {
  title: "Cod Vista | Tasbeeh",
  description: "A Tasbeeh Counter made by Cod Vista development team",
  metadataBase: new URL("https://www.codvista.com/tasbeeh"),
  openGraph: {
    images: ["https://www.codvista.com/tasbeeh/photo.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <TasbeehCounter />
    </div>
  );
};

export default page;
