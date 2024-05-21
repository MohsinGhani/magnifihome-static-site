/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="px-5 md:px-[450px]">
        <div className="h-[950px] ">
          <img
            src="assets/images/home.png"
            className="absolute z-[-1] top-0 right-0 w-full h-[950px]"
          />
          <div className="text-white max-w-[845px]">
            <h1 className="md:text-[64px] text-[48px] mb-[24px] font-semibold font-merriweather">
              Preserving Home Value
            </h1>
            <p className="md:text-[32px] text-[20px] mb-[32px]">
              For most homeowners, their home is the most valuable single asset
              they will own
            </p>
            <p className="md:text-[32px] text-[20px] ">
              Protect the value of that asset by memorializing key home and
              household details for future reference and value creation
            </p>
          </div>

          <div className="sm:mt-[100px] mt-[44px] bg-white shadow-lg rounded-2xl px-[20px] py-[25px] sm:py-[40px]">
            <Row justify="space-between" gutter={[16, 16]}>
              {item?.map((t: any, i: number) => (
                <Col span={24} sm={6} key={i}>
                  <div className="flex gap-[20px] items-center sm:flex-col text-center mx-auto max-w-none sm:max-w-[150px] ">
                    <img
                      src={t?.img}
                      alt="Image 1"
                      className="w-[50px] sm:w-[100px]"
                    />
                    <p className="text-lg font-medium">{t?.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* 2 section */}
        <div
          className="flex justify-between w-full mb-[40px] md:mb-[120px]"
          id="targetSection"
        >
          <div>
            <h2 className="text-blue-900 text-2xl font-medium w-full md:w-[50%] font-mono">
              About Magnifi Home - Our Product - Blockchain Household and Home
              Improvement Record Keeping
            </h2>

            <div className="w-full gap-[50px] flex flex-col md:flex md:flex-row">
              <div className="w-full">
                <img src="assets/images/GroupHome.png" className="w-full" />
              </div>

              <div className="w-full">
                <p>
                  Magnifi Home through our BLOCKDRIVE tool, helps facilitate a
                  transparent marketplace where homeowners can create and own a
                  digital record for their property, the property contents, and
                  any improvements & upgrades.
                </p>
                <div className="flex gap-2">
                  <span className="mt-4">
                    <CaretRightOutlined />
                  </span>
                  <p className="mt-4">
                    Floor plans, property maps, building permits, utility
                    easements, etc.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-4">
                    <CaretRightOutlined />
                  </span>
                  <p className="mt-4">
                    Kitchen & bathroom remodels, sustainable energy initiatives,
                    roof/window/siding replacements, HVAC or other home utility
                    upgrades, etc.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-4">
                    <CaretRightOutlined />
                  </span>
                  <p className="mt-4">
                    Household contents, including furniture, appliances &
                    electronics, clothing, artwork, supplies, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 section */}
        <div className="flex justify-between w-full mb-8">
          <div>
            <h2 className="text-blue-900 text-2xl font-medium font-mono w-full md:hidden">
              These digital records can be used and benefit the homeowner in
              numerous ways, including:
            </h2>

            <div className="w-full gap-[50px] flex flex-col md:flex md:flex-row-reverse">
              <div className="w-full">
                <img src="assets/images/Group_18.png" className="w-full" />
              </div>

              <div className="w-full">
                <h2 className="text-blue-900 text-2xl font-medium font-mono hidden md:block">
                  These digital records can be used and benefit the homeowner in
                  numerous ways, including:
                </h2>
                <div className="flex gap-2">
                  <span className="mt-4">
                    <CaretRightOutlined />
                  </span>
                  <p className="mt-4">
                    The BLOCKDRIVE indexing of home improvements allows
                    homeowners better and more accurate property information
                    which can be helpful to constituencies such as insurers and
                    lenders / mortgage providers
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-4">
                    <CaretRightOutlined />
                  </span>
                  <p className="mt-4">
                    To track warranty information for easy future access
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-4">
                    <CaretRightOutlined />
                  </span>
                  <p className="mt-4">
                    To document building materials (brands, quantities, grades,
                    colors, other characteristics)
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-4">
                    <CaretRightOutlined />
                  </span>
                  <p className="mt-4">
                    To accurately represent disclosures of property
                    improvements, when they occurred and what materials were
                    used (when selling a home) 
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-4">
                    <CaretRightOutlined />
                  </span>
                  <p className="mt-4">
                    To monetize the aggregate records upon the sale of the
                    property through the transfer of the BLOCKDRIVE (when
                    selling a home)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

const item: any = [
  {
    img: "assets/images/Group1.png",
    text: "Manage your home data",
  },
  {
    img: "assets/images/AI.png",
    text: "AI Enhanced homeowner notifications",
  },
  {
    img: "assets/images/Group3.png",
    text: "Digital record monetization",
  },
  {
    img: "assets/images/blockchain.png",
    text: "Blockchain linked digital asset",
  },
];
