import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Landers = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Partner Portal – Mortgage & Lenders
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
          Differentiate your loan products with a beneficial tool for
          homeowners.
        </p>
        <p className="mb-4">
          We partner with mortgage, HELOC, and POS lenders to create digital
          records that outline key home & household content characteristics.
        </p>
        <p className="mb-4">
          Depending upon the purpose of the loan, the tool can be used in a
          number of ways:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Store key data, photos, and receipts showing the use of the
            financing and the project completion.
          </li>
          <li>
            Provide new homeowners a tool to help track their landmark
            investment, related documents, future upgrades, warranties, and
            household items.
          </li>
          <li>
            Provide homeowners with a future source of value when selling their
            home.
          </li>
        </ul>
        <p className="mb-4">
          <strong>Why?</strong>
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Customer rewards</li>
          <li>Differentiated product offering</li>
          <li>
            Positive NPV / IRR & residual income on digital record monetization
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Landers;
