import Image from "next/image";

interface SimilarContentsProps {
  heading: string;
  paragraph: string;
  images: string[] | string | null;
}

const SimilarContents: React.FC<SimilarContentsProps> = ({
  heading,
  paragraph,
  images,
}) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-200 mb-8">{paragraph}</p>

      {Array.isArray(images) ? (
        <div className="flex items-start space-x-4 overflow-scroll">
          {images.map((image, index) => (
            <Image
              key={index}
              src={`${image}`}
              width={1920}
              height={1080}
              alt={`About Us Image ${index + 1}`}
              className="rounded-lg w-[90%]"
            />
          ))}
        </div>
      ) : (
        images !== null && (
          <Image
            src={`${images}`}
            width={1200}
            height={700}
            alt="About Us Image"
            className="mx-auto mb-4"
          />
        )
      )}
    </div>
  );
};

export default SimilarContents;
