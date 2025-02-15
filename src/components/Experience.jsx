import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="experience">
        <div>
          <div>
            <h1
              data-aos="fade-right"
              className="text-blue-950 dark:text-white text-3xl ml-16 font-semibold mt-20"
            >
              Experience
            </h1>
            <hr
              data-aos="fade-right"
              className="my-6 border-gray-400 sm:mx-14 dark:border-gray-700 lg:my-8 aos-init aos-animate"
            ></hr>
            <ol className="ml-16 relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3
                  className="mb-1 text-lg font-semibold text-gray-950 dark:text-white"
                  data-aos="fade-right"
                >
                  Indiana University, Bloomington
                  <span className="font-normal bg-gray-300 dark:bg-gray-600 ml-1 text-sm me-2 px-2.5 py-0.5 rounded ms-3">
                    Current
                  </span>
                </h3>
                <p
                  className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500"
                  data-aos="fade-right"
                >
                  Center Desk Assistant (Part-Time)
                </p>
                <time
                  className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500"
                  data-aos="fade-right"
                >
                  September 2024
                </time>
                <ul className="space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
                  <li data-aos="fade-right">
                    Served as the first point of contact for residents,
                    visitors, and staff, providing customer service and handling
                    inquiries.
                  </li>
                  <li data-aos="fade-right">
                    Managed mail and package distribution, ensuring accurate
                    record-keeping and timely processing.
                  </li>
                  <li data-aos="fade-right">
                    Assisted students with maintenance requests,
                    check-in/check-out processes, and administrative tasks.
                  </li>
                  <li data-aos="fade-right">
                    Maintained confidentiality, security, and smooth front desk
                    operations using communication tools.
                  </li>
                  <li data-aos="fade-right">
                    Provided information on campus resources and residence hall
                    policies to enhance student engagement.
                  </li>
                </ul>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-950 dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3
                  className="flex items-center mb-1 text-lg font-semibold text-blue-950 dark:text-white"
                  data-aos="fade-right"
                >
                  Tech Elecon Pvt. Ltd.
                </h3>
                <p
                  className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500"
                  data-aos="fade-right"
                >
                  Software Engineer Intern
                </p>
                <time
                  className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500"
                  data-aos="fade-right"
                >
                  December 2023
                </time>
                <ul className="space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
                  <li data-aos="fade-right">
                    Designed a scalable e-commerce platform using ReactJS,
                    NodeJS, and MongoDB to streamline online sales.
                  </li>
                  <li data-aos="fade-right">
                    Enhanced system performance by 30% through state management
                    via Redux.
                  </li>
                  <li data-aos="fade-right">
                    Integrated PayPal API to ensure secure payment processing,
                    achieving 99.9% uptime.
                  </li>
                  <li data-aos="fade-right">
                    Collaborated with a cross-functional team to gather
                    requirements, develop prototypes, and deploy features on
                    time.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
