// AIModelsSection.js
"use client";
import Link from "next/link";
import React, { useState } from "react";

const AIModels = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold mb-8">AI Models</h2>
      <Link href="/menu-recommendation" className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-700">
       
          Check Menu Recommendation Model
       
      </Link>
    </section>
  );
};

export default AIModels;
