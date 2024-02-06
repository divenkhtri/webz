// exploreInsights.js

import React from "react";

const ExploreInsights = () => {
    return (
        <div className="h-[100vh] px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-navyblue mb-8">
                    Explore Our Insights
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Customer Insights */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Customer Insights</h2>
                        <p className="text-gray-700 mb-4">
                            Understand your customers better with MenuWise. Track demographics, preferences, and engagement metrics to tailor your offerings and enhance customer satisfaction.
                        </p>
                        {/* Add customer-related charts or statistics */}
                        <img src="/assets/customer-insights-chart.png" alt="Customer Insights Chart" className="w-full h-auto" />
                    </div>

                    {/* Order Insights */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Order Insights</h2>
                        <p className="text-gray-700 mb-4">
                            Optimize your menu and improve order efficiency. MenuWise helps you analyze order patterns, identify popular items, and streamline your operations for maximum profitability.
                        </p>
                        {/* Add order-related charts or statistics */}
                        <img src="/assets/order-insights-chart.png" alt="Order Insights Chart" className="w-full h-auto" />
                    </div>

                    {/* Financial Insights */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Financial Insights</h2>
                        <p className="text-gray-700 mb-4">
                            Keep your finances in check with MenuWise. Track revenue, expenses, and profitability trends to make informed decisions that contribute to the financial health of your restaurant.
                        </p>
                        {/* Add financial-related charts or statistics */}
                        <img src="/assets/financial-insights-chart.png" alt="Financial Insights Chart" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreInsights;
