import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs = ({ faqs }: { faqs: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${
            openIndex === index ? "border-b border-gray-200" : ""
          } my-2`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center w-full py-2 ${
              openIndex === index ? "bg-transparent" : ""
            }`}
          >
            <div className="flex items-center">
              <span className="text-lg font-semibold">{faq.question}</span>
            </div>
            <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="p-4">
              <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
