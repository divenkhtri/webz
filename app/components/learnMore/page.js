// learnMore.js

import React from "react";

const LearnMore = () => {
    return (
        <div className="h-[100vh] px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-navyblue mb-8">
                    Learn More About MenuWise
                </h1>
                <div className="text-bluegray">
                    <p className="mb-4">
                        MenuWise is the leading analytics platform designed specifically for restaurants, empowering you to make data-driven decisions and elevate your business to new heights.
                    </p>
                    <p className="mb-4">
                        With MenuWise, you can:
                    </p>
                    <ul className="list-disc pl-6 mb-8">
                        <li>Gain deep insights into customer behavior and preferences</li>
                        <li>Optimize your menu with order insights and popular item analysis</li>
                        <li>Track financial performance, expenses, and profitability trends</li>
                        <li>Maximize marketing effectiveness and ROI with comprehensive analytics</li>
                        {/* Add more features or benefits as needed */}
                    </ul>
                    <p className="mb-4">
                        Ready to experience the power of MenuWise firsthand? Schedule a personalized demo with our experts, and discover how MenuWise can transform your restaurant business.
                    </p>
                    <button className="bg-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-dark">
                        Schedule Demo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LearnMore;
