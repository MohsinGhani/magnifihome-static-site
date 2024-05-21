import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const RealStateAgent = () => {
  const { push } = useRouter();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Partner Portal – Real Estate Agent & Broker
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
          As an Agent, your ideas, solutions and network have solved so many
          issues for your homeowner clients. Intensify your real estate
          influence and brand by offering your past and future clients a
          remodeling, maintenance and other improvement record keeping and
          warranty management tool. The BLOCKDRIVE can augment your relationship
          status with your network of clients to further solidify your position
          as their go-to real estate advisor.
        </p>
        <p className="mb-4">
          <strong>Why?</strong>
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Differentiate your advisory platform brand and value proposition
            compared to other real estate agents and brokers.
          </li>
          <li>
            Build deeper relationships across your network with a tool of value
            built for homeowners.
          </li>
          <li>
            Help build your clientele’s trust in your advisory service platform
            making you their first call.
          </li>
        </ul>
      </div>

      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 px-0">
        <div>
          <video
            src="/assets/videos/site-tutorial-1.mov"
            style={{ width: "100%" }}
            controls
          />
        </div>
        <div>
          <video
            src="/assets/videos/site-tutorial-2.mov"
            style={{ width: "100%" }}
            controls
          />
        </div>
        <div>
          <video
            src="/assets/videos/site-tutorial-3.mov"
            style={{ width: "100%" }}
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default RealStateAgent;
