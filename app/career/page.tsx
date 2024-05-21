import Footer from "@/components/Footer";
import React from "react";

const Careers = () => {
  return (
    <div>
      <div className="mb-[10px] min-h-[50vh] ">
        <h1 className="text-3xl font-bold mb-4">Careers</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Magnifi Home is actively growing – we have immediate job openings
            for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Relationship Managers (Real Estate Agent & Broker and Contractor
              Divisions)
            </li>
            <li>Data Analytics and Information Technology Professionals</li>
            <li>Customer Experience Professionals</li>
          </ul>
          <p className="mb-4">Benefits Include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Competitive compensation</li>
            <li>Employee stock ownership</li>
            <li>Profit share plan</li>
            <li>Paid time off after 6 months</li>
            <li>Remote work</li>
          </ul>
          <p className="mb-4">
            Send resumes to us at:{" "}
            <a href="mailto:admin@magnifivault.com" className="text-blue-500">
              admin@magnifivault.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
