"use client";
// DemoForm.js

const DemoBanner = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Banner */}
      <div className="h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Schedule Your Demo Today</h1>
          <p className="text-lg mb-8">
            Unlock insights and elevate your business
          </p>
          <button className="btn btn-active">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;
