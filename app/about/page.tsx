"use client";

import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="absolute top-[80px] right-0 w-full">
          <div className="w-full h-[300px] bg-[url('/assets/images/home.jpg')] bg-cover bg-center">
            <div className="w-full h-full flex justify-start items-end backdrop-blur-md"></div>
          </div>
        </div>
        <div className="mt-[260px] px-5  ">
          <div className="container mx-auto py-8 text-16px">
            <h1 className="text-4xl font-bold mb-4">
              Services For The Home Owners
            </h1>
            <hr />
            <p className="mb-4 mt-4">
              For most home owners, their home is the most valuable single asset
              they will own
            </p>
            <p className="mb-4">
              Protect the value of that asset by memorializing key home
              improvement details for future reference and value creation
            </p>
            <p className="mb-4">
              provide the relevant data (work completed, materials used, date
              completed, warranty terms, etc.) to magnifiy and magnifiy will
              create and provide a digital token reflecting the improvement
            </p>
            <p className="mb-0">Why?</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Manage insurance risk - insurance levels and coverages depend on
                the value of your home and its contents - ensure you have the
                right coverage and can defend your home against losses
              </li>
              <li>
                Help manage warranties - clear and transparent record keeping
                for warranty claims
              </li>
              <li>Future value realization on digital record monetization</li>
            </ul>
            <p className="mb-4">
              You have worked hard for your reputation with your customers -
              utilize your existing relationships with real estate owners to
              enhance your product offering
            </p>

            <p className="mb-0">
              We partner with home improvement contractors to create digital
              tokens for completed improvements in the following home
              improvements sectors:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Roofing, siding or gutters</li>
              <li>Window and Door replacement</li>
              <li>HVAC, plumbing or septic</li>
              <li>Clean energy (solar / wind)</li>
              <li>Water filtration</li>
            </ul>
            <p className="mb-4">
              These home improvement contractors can cross-sell a digital asset
              in conjunction with the improvement
            </p>
            <p className="mb-4">
              Once the home improvement work is completed and paid for, these
              home improvement contractors will provide the relevant data (work
              completed, materials used, date completed, warranty terms, etc.)
              to magnifiy and magnifiy will create and provide to the property
              owner a digital token reflecting the improvement
            </p>
            <p className="mb-0">Why?</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Help ensure collections - the digital token will be created and
                transferred to the homeowner only upon successful collection and
                a paid in full notification to Magnifi Home
              </li>
              <li>
                Help manage workmanship and material warranties - clear and
                transparent record keeping for warranty claims, date of service,
                service technician / team, materials used and quanaties
              </li>
              <li>
                Residual income to contractors on digital record monetization
              </li>
            </ul>
          </div>
          <div className="container mx-auto py-4 text-16px">
            <h1 className="text-4xl font-bold mb-4">About Magnifi Home</h1>
            <hr />
            <p className="mb-4 mt-4">
              Home Improvement Record Keeping Meets Digital Tokens
            </p>
            <p className="mb-4">
              Magnifi Home helps facilitate a transparent marketplace where real
              estate owners who are in the process of improving or have recently
              upgraded their property can create and own a digital record for
              their property and the improvement.
            </p>
            <p className="mb-0">Examples of upgrades:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                remodel, solar panel addition, roof, window or siding
                replacement, gutter protection install, HVAC or other home
                utility upgrades, etc.
              </li>
            </ul>
            <p className="mb-4">
              By linking the real estate improvement of the property to a
              digital record token or NFT, the homeowner has digital record of
              the improvement, the related costs of the improvement and the date
              at which the improvement was completed
            </p>

            <p className="mb-0">
              These digital record tokens can be used in numerous ways:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Indexing home improvements helps home owners keep better and
                more accurate property information which can be helpful to a
                number of constituencies including insurers, mortgage providers.
              </li>
              <li>
                Tracking and indexing Warranty information for easy future
                access.
              </li>
              <li>
                When selling a property, a seller can accurately represent (and
                the buyer can diligence and take comfort in) the disclosures of
                property improvements, when they occurred and what materials
                were used.
              </li>
              <li>
                Lastly, property owners can aggregate and monetize these digital
                records upon the sale of the property.
              </li>
            </ul>
            <p className="mb-4">
              Magnifi Home partners with home improvement contractors to help
              facilitate this better way to create digital records
            </p>
            <Link href="/registration" className="text-blue-500 font-bold">
              BECOME A CONTRACTOR PARTNER
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
