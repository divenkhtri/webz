"use client";
// DemoForm.js

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, number } from "zod";
import DemoBanner from "../demoBanner/page";
// Zod schema for form validation
const schema = object({
  demoDuration: number(),
  selectedDate: string(),
  selectedTime: string(),
  userInfo: object({
    name: string(),
    email: string().email(),
    phone: string(),
    business: string(),
    situationChallenges: string(),
    goalsRequirements: string(),
  }),
});

const DemoForm = () => {
  const [demoDuration, setDemoDuration] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleDemoDurationChange = (duration) => {
    setDemoDuration(duration);
    setValue("demoDuration", duration);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setValue("selectedDate", date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setValue("selectedTime", time);
  };

  const onSubmit = (data) => {
    // Implement your form submission logic here
    console.log("Form submitted:", data);
  };
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  return (
    <div>
      <DemoBanner />

      {/* Form Content */}
      <div className="min-h-screen bg-white flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
        {/* Form Container */}
        <div className="max-w-md w-full bg-white rounded-md shadow-md overflow-hidden transition-transform transform duration-500 ease-in-out">
          {/* Step 1: Demo Duration Selection */}
          {step === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Select Demo Duration
              </h2>
              <div className="flex space-x-4">
                <button
                  className="btn btn-active"
                  onClick={() => {
                    setValue("demoDuration", 30);
                    nextStep();
                  }}
                >
                  30 Minutes
                </button>
                <button
                  className="btn btn-active"
                  onClick={() => {
                    setValue("demoDuration", 60);
                    nextStep();
                  }}
                >
                  60 Minutes
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Date Selection */}
          {step === 2 && (
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Select Date
              </h2>
              <input
                type="date"
                {...register("selectedDate")}
                className="border p-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-500"
              />
              <div className="flex justify-between">
                <button className="btn" onClick={prevStep}>
                  Back
                </button>
                <button className="btn btn-active" onClick={nextStep}>
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Time Selection */}
          {step === 3 && (
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Select Time
              </h2>
              <div className="flex space-x-4">
                <button
                  className="btn btn-active"
                  onClick={() => {
                    setValue("selectedTime", "12:00PM");
                    nextStep();
                  }}
                >
                  12:00PM
                </button>
                <button
                  className="btn btn-active"
                  onClick={() => {
                    setValue("selectedTime", "1:00PM");
                    nextStep();
                  }}
                >
                  1:00PM
                </button>
                <button
                  className="btn btn-active"
                  onClick={() => {
                    setValue("selectedTime", "2:00PM");
                    nextStep();
                  }}
                >
                  2:00PM
                </button>
              </div>
            </div>
          )}

          {/* Step 4: User Information */}
          {step === 4 && (
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Enter Your Information
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("userInfo.name")}
                    className={`border p-2 w-full ${
                      errors.userInfo?.name ? "border-red-500" : ""
                    } focus:outline-none focus:ring focus:border-blue-500`}
                  />
                  {errors.userInfo?.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.userInfo.name.message}
                    </p>
                  )}
                </div>

                {/* ... Repeat for other fields */}

                <button
                  type="submit"
                  className="btn btn-active transition-transform transform hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
