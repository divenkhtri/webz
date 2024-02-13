"use client";
import { useState } from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Customer",
    gifSrc: "/assets/glimpse/customer.mp4",
    description:
      "Unlock deep insights into customer behavior, preferences, and demographics. Tailor your offerings to enhance customer satisfaction and loyalty.",
  },
  {
    id: 2,
    title: "Order",
    gifSrc: "/assets/glimpse/customer.mp4",
    description:
      "Optimize your restaurant operations by analyzing order patterns, tracking performance metrics, and ensuring efficient service with our comprehensive Order Management tools.",
  },
  {
    id: 3,
    title: "Finance",
    gifSrc: "/assets/glimpse/customer.mp4",
    description:
      "Stay on top of your finances with in-depth financial analytics. Monitor revenue, expenses, and profitability trends to make informed decisions for the success of your restaurant business.",
  },
  {
    id: 4,
    title: "Marketing",
    gifSrc: "/assets/glimpse/customer.mp4",
    description:
      "Maximize the impact of your marketing efforts. Analyze customer engagement, identify trends, and target the right audience for improved marketing ROI with our Marketing Analytics tools.",
  },
  {
    id: 5,
    title: "Transactions & Payments",
    gifSrc: "/assets/glimpse/customer.mp4",
    description: "Description for Transactions & Payments segment...",
  },
];

const DashboardSection = () => {
  const [expandedCard, setExpandedCard] = useState(1);

  const handleCardClick = (cardId) => {
    setExpandedCard((prevExpanded) =>
      prevExpanded === cardId ? null : cardId
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-6 flex">
      {/* Left side - Video */}
      <div className="w-2/3 flex items-center justify-center">
        {expandedCard && (
          <div className="w-full h-[80vh] p-2 rounded-2xl overflow-hidden shadow-xl bg-[#B8D1D7]">
            <video
              src={cardData.find((card) => card.id === expandedCard).gifSrc}
              alt="Active Video"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl w-full h-full object-cover object-center"
            ></video>
          </div>
        )}
      </div>
      {/* Right side - Cards */}
      <div className="w-1/3 p-4 space-y-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`cursor-pointer p-6 border rounded-xl transition-transform transform ${
              expandedCard === card.id
                ? "bg-blue-400 shadow-xl border-yellow-400"
                : "bg-blue-200 border-blue-300 hover:scale-105"
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h3>
            {expandedCard === card.id && (
              <p className="text-gray-600 animate__animated animate__fadeIn">
                {card.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSection;
