import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Contractors = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Partner Portal - Contractor Pros
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <p className="mb-4">
            <strong>Services</strong>
          </p>
          <Button
            className="mb-10"
            onClick={() => {
              push("/login");
            }}
          >
            Partner login
          </Button>
        </div>
        <p className="mb-4">
          As a contractor, you’ve worked hard to build your reputation with your
          customers. Utilize these existing relationships with homeowners to
          enhance your product offering and forge deeper connections.
        </p>
        <p className="mb-4">
          We partner with home improvement contractors to create digital records
          for completed improvements in areas such as:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Roofing, siding, or gutters</li>
          <li>Window & door replacement</li>
          <li>HVAC, plumbing, or septic</li>
          <li>Clean and sustainable energy projects (solar/wind)</li>
          <li>Remodeling projects</li>
        </ul>
        <p className="mb-4">
          Home improvement contractors are increasingly utilizing BLOCKDRIVE to
          differentiate themselves from competitors.
        </p>
        <p className="mb-4">
          Once the home improvement work is completed and paid for, the
          contractor will provide the relevant data (work completed, materials
          used, date completed, warranty terms, etc.), and access to BLOCKDRIVE
          for a differentiated and value-added homeowner experience.
        </p>
        <p className="mb-4">
          <strong>Why?</strong>
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Help ensure collections: The digital record will be created and
            transferred to the homeowner only upon successful collection and
            receipt of full payment.
          </li>
          <li>
            Assist in managing workmanship and material warranties: Clear and
            transparent record-keeping for warranty claims, date of service,
            service technician/team, materials used, and quantities.
          </li>
          <li>
            Provide a branding and closing opportunity that your competitors do
            not yet offer.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contractors;
