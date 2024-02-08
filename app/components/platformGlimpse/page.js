"use client";
import { useState } from "react";
import Image from "next/image";

// Define the data for each card
const cardData = [
  {
    id: 1,
    title: "Customer",
    gifSrc: "/assets/banner/homescreen.gif",
    description: "Description for Customer segment...",
  },
  {
    id: 2,
    title: "Order",
    gifSrc: "/assets/dashboard/order.gif",
    description: "Description for Order segment...",
  },
  {
    id: 3,
    title: "Finance",
    gifSrc: "/assets/banner/homescreen.gif",
    description: "Description for Finance segment...",
  },
  {
    id: 4,
    title: "Marketing",
    gifSrc: "/assets/dashboard/marketing.gif",
    description: "Description for Marketing segment...",
  },
  {
    id: 5,
    title: "Transactions & Payments",
    gifSrc: "/assets/dashboard/transactions.gif",
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
                expandedCard === card.id ? "bg-gray-100" : ""
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
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