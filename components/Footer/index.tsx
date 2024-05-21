/* eslint-disable @next/next/no-img-element */

import { Space, Tooltip } from "antd";
import RenderItem from "./RenderItem";
import {
  YoutubeFilled,
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-4 sm:px-6 lg:px-2 lg:pt-24  ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <RenderItem heading="About Us" items={item?.aboutUs} />

            <RenderItem heading="Partner Portal" items={item?.partnerPortal} />

            <RenderItem heading="Helpful Links" items={item?.helpfulLinks} />

            <RenderItem heading="Contact Us" items={item?.contactUs} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const item: any = {
  contactUs: [
    {
      text: "admin@magnifivault.com",
      link: "",
    },
  ],

  helpfulLinks: [
    {
      text: "Terms Of Service",
      link: "/about",
    },
    {
      text: "Privacy Policy",
      link: "/privacy-policy",
    },
  ],

  partnerPortal: [
    {
      text: "Contractors",
      link: "/contractors",
    },
    {
      text: "Real Estate Agents & Brokers",
      link: "/real-state-agent",
    },
  ],

  aboutUs: [
    {
      text: "Our Goal",
      link: "/our-goal",
    },
    {
      text: "Career",
      link: "/career",
    },
    {
      text: "News",
      link: "/news",
    },
    {
      text: "Contact Us",
      link: "/contact-us",
    },
  ],
};

const socialLinks: any = [
  { link: "", img: <YoutubeFilled /> },
  { link: "", img: <FacebookFilled /> },
  { link: "", img: <LinkedinFilled /> },
  { link: "", img: <InstagramFilled /> },
];
