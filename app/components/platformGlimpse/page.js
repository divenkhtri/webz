"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Define the data for each card
const cardData = [
  {
    id: 1,
    title: "Alert System",
    videoSrc: "/assets/glimpse/A9tM.gif",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 2,
    title: "User Management",
    videoSrc: "/assets/glimpse/woh.mp4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  // Add more cards as needed
];

const ClickThroughSection = () => {
  // State to track the currently expanded card
  const [expandedCard, setExpandedCard] = useState(1);

  // Effect to set the default active card
  useEffect(() => {
    setExpandedCard(1);
  }, []);

  const handleCardClick = (cardId) => {
    setExpandedCard(cardId);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* COLUMN-1 */}
        <div className="col-span-6 flex justify-center">
          {expandedCard && (
            <div className="flex flex-col align-middle justify-center p-10">
              {/* Video Player */}
              <iframe
                width="100"
                height="100"
                src={cardData.find((card) => card.id === expandedCard).videoSrc}
                title="Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        <div className="lg:col-span-1"></div>
        {/* Right side - Cards */}
        <div className="col-span-6 lg:col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 rounded-3xl">
            {cardData.map((card) => (
              <div
                key={card.id}
                className={`border rounded-lg mb-4 ${
                  expandedCard === card.id
                    ? "border-blue-500 bg-gray-100"
                    : "border-gray-300"
                }`}
              >
                {/* Clickable Card */}
                <div
                  className="cursor-pointer p-6"
                  onClick={() => handleCardClick(card.id)}
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  {/* Display Description only for the active card */}
                  {expandedCard === card.id && (
                    <p className="text-sm font-normal text-bluegray my-2">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickThroughSection;
