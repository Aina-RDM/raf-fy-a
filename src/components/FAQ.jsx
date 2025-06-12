import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const questions = [
    {
      question: "Quels sont les délais de livraison ?",
      answer:
        "Les délais de livraison varient selon votre localisation et le nombre de produits commandés.",
    },
    {
      question: "Comment suivre ma commande ?",
      answer: "Un email de suivi vous est envoyé dès l’expédition.",
    },
    {
      question: "Puis-je retourner un produit ?",
      answer: "Oui, vous avez 14 jours pour un retour sans frais.",
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Nous acceptons le paiement en cash et via Mobile Money.",
    },
    {
      question: "Proposez-vous des emballages cadeaux ?",
      answer:
        "Oui, vous pouvez choisir l’option emballage cadeau lors du paiement.",
    },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState(
    new Array(questions.length).fill(false)
  );

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h3 className="text-5xl md:text-6xl font-semibold mb-8 text-center text-gray-700">
        Questions fréquentes
      </h3>
      <div className="space-y-6">
        {questions.map(({ question, answer }, i) => {
          const isOpen = visibleAnswers[i];
          return (
            <div key={i} className="border-b pb-4">
              <button
                onClick={() => toggleAnswer(i)}
                className="flex justify-between items-center w-full text-left font-semibold text-yellow-700 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{question}</span>
                {isOpen ? (
                  <FiChevronUp className="w-6 h-6 ml-2" />
                ) : (
                  <FiChevronDown className="w-6 h-6 ml-2" />
                )}
              </button>
              {isOpen && (
                <p id={`faq-answer-${i}`} className="mt-2 text-gray-600">
                  {answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
