import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-10 rounded-md">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to our website. We are dedicated to providing the best service
        possible.
      </p>
    </div>
  );
};

export default AboutPage;
