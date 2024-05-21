import Footer from "@/components/Footer";
import { Button } from "antd";

import React from "react";

const Insurance = () => {
  return (
    <div>
      <div className="mb-[10px] min-h-[50vh] px-5 md:px-[450px]">
        <h1 className="text-3xl font-bold mb-4">Partner Portal - Insurance</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between">
            <p className="mb-4">
              <strong>Services</strong>
            </p>
            <Button className="mb-10">Partner login</Button>
          </div>
          <p className="mb-4">
            Enhance your insurance product offerings with a tool to aid in
            transparent and more accurate information on the property and the
            insured.
          </p>
          <p className="mb-4">
            We partner with insurance carriers and third-party administrators to
            create digital records that outline key home & household content
            characteristics.
          </p>
          <p className="mb-4">
            You are already enhancing the underwriting requirements in the
            challenging environment – provide your customer base with a tool to
            help them better track and index the home and household information
            while also affording them enhanced residual home value.
          </p>
          <p className="mb-4">
            <strong>Why?</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Customer reward / retention programs</li>
            <li>
              Customer provided home and household data enhances both the
              underwriting and claims process
            </li>
            <li>Enhances fraud prevention infrastructure</li>
            <li>Positive NPV / IRR proposition</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Insurance;
