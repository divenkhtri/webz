// pages/menu-recommendation.js
"use client"
// pages/menu-recommendation.js

import React, { useState } from 'react';
import axios from 'axios';


const MenuRecommendation = () => {
  const [userResponses, setUserResponses] = useState({
    Menu_Item_Category: '',
    Menu_Item_Type: '',
    budget: '',
  });

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const handleInputChange = (e) => {
    setUserResponses({ ...userResponses, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleRecommendation = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        'http://34.123.114.118:5000/api/recommend_menu_item',
        userResponses
      );

      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm dark:bg-transparent">
        <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
          Explore Our Menu Recommendations Model
        </p>

        {step === 0 && (
          <div className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
            <select
              placeholder="Select Menu Category"
              name="Menu_Item_Category"
              value={userResponses.Menu_Item_Category}
              onChange={handleInputChange}
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            >
              <option value="" disabled>
                Select Menu Category
              </option>
              <option value="Soup">Soup</option>
              <option value="Starters">Starters</option>
              <option value="Chakna">Chakna</option>
              <option value="Salads">Salads</option>
              <option value="Main Course">Main Course</option>
            </select>
            <button
              onClick={handleNextStep}
              className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Next
                </span>
              </div>
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
            <select
              placeholder="Select Menu Item Type"
              name="Menu_Item_Type"
              value={userResponses.Menu_Item_Type}
              onChange={handleInputChange}
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            >
              <option value="" disabled>
                Select Menu Item Type
              </option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
            <button
              onClick={handleNextStep}
              className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Next
                </span>
              </div>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
            <input
              name="budget"
              type="text"
              value={userResponses.budget}
              onChange={handleInputChange}
              placeholder="Enter Budget"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            />
            <button
              onClick={handleRecommendation}
              className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            >
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Get Recommendations
                </span>
              </div>
            </button>
          </div>
        )}

        <div className=" mt-8">
          <h3 className="text-xl font-semibold mb-4">Recommendations:</h3>
          <ul>
            {recommendations.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6"></stop>
              <stop offset="1" stopColor="#1d4ed8"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default MenuRecommendation;
