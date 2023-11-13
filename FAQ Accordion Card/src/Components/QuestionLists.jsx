import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is the purpose of this website?",
    answer:
      "The website is designed to provide information about our products and services.",
  },
  {
    id: 2,
    question: "How can I place an order?",
    answer:
      "To place an order, visit our 'Products' page and follow the instructions for ordering.",
  },
  {
    id: 3,
    question: "Is there a return policy?",
    answer:
      "Yes, we have a 30-day return policy. Please refer to our 'Returns' page for more details.",
  },
  {
    id: 4,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping. Shipping costs and delivery times may vary.",
  },
  {
    id: 5,
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team through the 'Contact Us' page or by emailing support@example.com.",
  },
  {
    id: 6,
    question: "Are there any discounts available?",
    answer:
      "We occasionally run promotions and discounts. Keep an eye on our 'Special Offers' page for the latest deals.",
  },
];

export default function QuestionList() {
  const [selected, setSelected] = useState(null);

  function handleClick(index) {
    setSelected(selected === index ? null : index);
  }

  return (
    <div className="max-w-xl mt-20 rounded-3xl flex flex-col items-center h-auto m-auto">
      <div>
        <h1 className="text-4xl font-bold mb-4">FAQ</h1>
      </div>
      {faqData.map((item, i) => (
        <div
          key={i}
          className="w-3/4 m-1 bg-orange-100 p-6 rounded-xl relative"
        >
          <div
            onClick={() => handleClick(i)}
            className="text-lg flex justify-between font-semibold"
          >
            <h2>{item.question}</h2>
            <button
              className={`transform ${selected === i ? "rotate-180" : ""}`}
            >
              <img src="/public/icon.svg" alt="icon" />
            </button>
          </div>
          {selected === i && (
            <div className="m-3 text-base">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      {selected !== null && <div style={{ height: "100px" }} />}
    </div>
  );
}
