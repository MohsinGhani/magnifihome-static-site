import Footer from "@/components/Footer";
import React from "react";

const Goal = () => {
  return (
    <div>
      <div className="mb-[10px] min-h-[50vh] px-5 md:px-[450px]">
        <h1 className="text-3xl font-bold mb-4">Our Goal</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            We want to help homeowners better access and capitalize on their
            real estate-related data.
          </p>
          <p className="mb-4">
            There is value in data. For most homeowners, their home is the most
            valuable single asset they will own.
          </p>
          <p className="mb-4">
            With the rapidly increasing costs of home ownership (including
            maintenance, repairs & upgrades, and insurance), it is now more
            important than ever to protect the value of your home.
          </p>
          <p className="mb-4">
            With over 60% of home mortgages in the U.S. fixed at an interest
            rate below 4%, moving homes will be cost prohibitive for many
            homeowners for the near future.
          </p>
          <p className="mb-4">
            Defend the value of your home by creating a digital asset to
            memorialize key home and household details for future reference and
            value creation.
          </p>
          <p className="mb-4">
            These digital assets can be used and benefit the homeowner in
            numerous ways, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              To index home improvements allowing homeowners better and more
              accurate property information which can be helpful to
              constituencies such as insurers and lenders / mortgage providers.
            </li>
            <li>To track warranty information for easy future access.</li>
            <li>
              To document building materials (brands, quantities, grades,
              colors, other characteristics).
            </li>
            <li>
              To accurately represent disclosures of property improvements, when
              they occurred and what materials were used (when selling a home).
            </li>
            <li>
              To monetize the aggregate records upon the sale of the property
              through the transfer of the BLOCKDRIVE (when selling a home).
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Goal;
