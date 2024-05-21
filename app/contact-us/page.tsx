import Footer from "@/components/Footer";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="mb-[10px] min-h-[50vh] px-5 md:px-[450px]">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Magnifi Home, part of Magnifi Vault Inc., partners with homeowners,
            real estate companies, and home improvement contractors to help
            facilitate a better way to capture, index, and monetize home-related
            data using the BLOCKDRIVE.
          </p>
          <p className="mb-4">
            For inquiries, email us at:{" "}
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

export default ContactUs;
