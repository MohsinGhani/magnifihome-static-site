/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import "./header.scss";
import React, { useEffect, useState } from "react";
import { Button, Drawer, Menu, Popover, Space } from "antd";
import { useRouter } from "next/navigation";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { logOutUser } from "@/redux/features/userSlice";
// import { fetchUserData } from "@/services/helpers";
// import { useAxo } from "@/services/helpers/api";
// import { API, iconProps } from "@/services/constant";
import { UnorderedListOutlined } from "@ant-design/icons";
import Link from "next/link";
// import BookADemo from "../BookADemo";

const HeaderMain = () => {
  const { push } = useRouter();
  //   const { user } = useAppSelector((state: any) => state?.userReducer);
  //   const dispatch = useAppDispatch();
  const [navColor, setnavColor] = useState(false);
  //   const [{}, userDetailsPost] = useAxo("post", API.USER_DETAILS);
  const scrollToSection = () => {
    const targetSection = document.getElementById("targetSection");

    if (targetSection) {
      const offset =
        targetSection.getBoundingClientRect().top + window.scrollY - 170;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = () => {
    push("/");

    setTimeout(() => {
      scrollToSection();
    }, 100);
  };

  //   useEffect(() => {
  //     const runFirstTime = async () => {
  //       try {
  //         await fetchUserData(userDetailsPost, dispatch);
  //       } catch (err) {
  //         console.log("fetchUserData err:", err);
  //       }
  //     };

  //     runFirstTime();
  //   }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor(true) : setnavColor(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items: any["items"] = [
    {
      key: "about",
      label: "About",
      children: [
        {
          label: <Link href="/our-goal">Our Goal</Link>,
          key: "our-goal",
          onClick: onClose,
        },
        {
          label: <Link href="/career">Career</Link>,
          key: "career",
          onClick: onClose,
        },
        {
          label: <Link href="/news">News</Link>,
          key: "news",
          onClick: onClose,
        },
        {
          label: <Link href="/contact-us">Contact Us</Link>,
          key: "contact-us",
          onClick: onClose,
        },
      ],
    },
    {
      label: (
        <Link href="/" onClick={handleLinkClick}>
          Product
        </Link>
      ),
      key: "product",
      onClick: onClose,
    },
    {
      key: "partner-portal",
      label: "Partner Portal",
      children: [
        {
          label: <Link href="/contractors">Contractors</Link>,
          key: "contractors",
          onClick: onClose,
        },
        {
          label: (
            <Link href="/real-state-agent">Real Estate Agents & Brokers</Link>
          ),
          key: "real-state-agent",
          onClick: onClose,
        },
      ],
    },
    // ...(!user?.id
    //   ? [
    {
      key: "login",
      label: (
        <Button
          ghost
          type="primary"
          // onClick={() => {
          //   // push("/login");
          //   onClose();
          // }}
        >
          Log in
        </Button>
      ),
    },
    {
      key: "registration",
      label: (
        <Button
          ghost
          type="primary"
          // onClick={() => {
          //   push("/registration");
          //   onClose();
          // }}
        >
          Sign up
        </Button>
      ),
    },
    {
      key: "buy-button",
      label: (
        <Popover content={<h1>Popover</h1>}>
          <Button type="primary" ghost>
            Buy
          </Button>
        </Popover>
      ),
      onClick: onClose,
    },
    {
      key: "Book-a-demo",
      label: (
        <Button
          type="primary"
          style={{ background: "#0b3a6e", color: "#fff" }}
          ghost
        >
          Book a Demo
        </Button>
      ),
      onClick: onClose,
    },
    //     ]
    //   : [
    //       {
    //         label: <UnorderedListOutlined {...iconProps} />,
    //         key: "SubMenu",
    //         children: [
    //           ...(!!user?.role.length
    //             ? [
    //                 {
    //                   key: "admin",
    //                   label: <Link href="/admin">Admin</Link>,
    //                   onClick: onClose,
    //                 },
    //               ]
    //             : user?.mode === "PARTNER"
    //             ? [
    //                 {
    //                   key: "partner",
    //                   label: <Link href="/partner">Partner</Link>,
    //                   onClick: onClose,
    //                 },
    //               ]
    //             : [
    //                 {
    //                   key: "dashboard",
    //                   label: <Link href="/dashboard">Dashboard</Link>,
    //                   onClick: onClose,
    //                 },
    //               ]),

    //         //   {
    //         //     key: "logout",
    //         //     label: (
    //         //       <div
    //         //         onClick={() => {
    //         //           dispatch(logOutUser(push));
    //         //           onClose();
    //         //         }}
    //         //       >
    //         //         Log out
    //         //       </div>
    //         //     ),
    //         //   },
    //         ],
    //       },
    //     ]),
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div
      className={`
      block w-full sticky inset-0 h-max max-w-full py-2 lg:py-4 mb-8 z-50 transition-all duration-1000 rounded shadow-md
      ${navColor ? "bg-white" : "bg-transparent"}
      `}
    >
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-4 lg:px-8">
        <img
          src="https://real-estate-img-dev.s3.us-east-2.amazonaws.com/IMAGE/R.png"
          alt="Logo"
          className="cursor-pointer"
          width={50}
          onClick={() => {
            push("/");
          }}
        />

        <Menu
          mode="horizontal"
          className="justify-end items-center border-none w-full !bg-transparent sm:flex hidden"
          items={items}
        />

        <Space className="sm:hidden flex gap-4">
          <Button
            type="primary"
            style={{ background: "#0b3a6e", color: "#fff" }}
            ghost
          >
            Book a Demo
          </Button>

          <Button
            type="primary"
            ghost
            onClick={showDrawer}
            icon={<UnorderedListOutlined />}
          />
        </Space>
        <Drawer
          placement="right"
          onClose={onClose}
          open={open}
          className="header_drawer"
        >
          <Menu mode="inline" items={items} />
        </Drawer>
      </div>
    </div>
  );
};

// const StripeBuyButton = () => (
//   <div
//     className="BuyButton-Button"
//     dangerouslySetInnerHTML={{
//       __html: `<stripe-buy-button buy-button-id=${process.env.NEXT_PUBLIC_BUY_BUTTON_ID} publishable-key=${process.env.NEXT_PUBLIC_PUBLISHABLE_KEY} />`,
//     }}
//   />
// );

export default HeaderMain;
