"use client";
import { useState } from "react";
import Image from "next/image";

// Define the data for each card
const cardData = [
  {
    id: 1,
    title: "Customer",
    gifSrc: "/assets/banner/homescreen.gif",
    description:
      "Unlock deep insights into customer behavior, preferences, and demographics. Tailor your offerings to enhance customer satisfaction and loyalty.",
  },
  {
    id: 2,
    title: "Order",
    gifSrc: "/assets/dashboard/homescreen.gif",
    description:
      "Optimize your restaurant operations by analyzing order patterns, tracking performance metrics, and ensuring efficient service with our comprehensive Order Management tools.",
  },
  {
    id: 3,
    title: "Finance",
    gifSrc: "/assets/banner/homescreen.gif",
    description:
      "Stay on top of your finances with in-depth financial analytics. Monitor revenue, expenses, and profitability trends to make informed decisions for the success of your restaurant business.",
  },
  {
    id: 4,
    title: "Marketing",
    gifSrc: "/assets/dashboard/homescreen.gif",
    description:
      "Maximize the impact of your marketing efforts. Analyze customer engagement, identify trends, and target the right audience for improved marketing ROI with our Marketing Analytics tools.",
  },
  {
    id: 5,
    title: "Transactions & Payments",
    gifSrc: "/assets/dashboard/homescreen.gif",
    description: "Description for Transactions & Payments segment...",
  },
];

const DashboardSection = () => {
  const [expandedCard, setExpandedCard] = useState(1);

  const handleCardClick = (cardId) => {
    // Toggle the expanded card when clicked
    setExpandedCard((prevExpanded) =>
      prevExpanded === cardId ? null : cardId
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex">
        {/* Left side - Gif */}
        <div className="w-2/3 flex items-center justify-center">
          {expandedCard && (
            <div className="p-4">
              <Image
                src={cardData.find((card) => card.id === expandedCard).gifSrc}
                alt="Active Gif"
                width={1000}
                height={1000}
              />
            </div>
          )}
        </div>

        {/* Right side - Cards */}
        <div className="w-1/3 p-4">
          {cardData.map((card) => (
            <div key={card.id} className="mb-4">
              {/* Clickable Card */}
              <div
                className={`cursor-pointer p-4 border rounded-lg ${
                  expandedCard === card.id
                    ? "bg-white shadow-xl"
                    : "bg-gray-500"
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {expandedCard === card.id ? card.description : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
