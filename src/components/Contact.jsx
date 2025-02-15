import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="contact">
        <div>
          <div data-aos="fade-right">
            <h1
              data-aos="fade-right"
              className="text-blue-950 dark:text-white text-3xl ml-16 font-semibold mt-20"
            >
              Contact
            </h1>
            <hr className="my-6 border-gray-400 sm:mx-14 dark:border-gray-700 lg:my-8 aos-init aos-animate"></hr>
          </div>

          <div className="flex ml-12 pb-6">
            <div className="flex space-x-4">
              <a
                href="mailto:parekhvraj2002@gmail.com"
                target={"_blank"}
                className=" p-2 font-medium text-blue-950 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <TbMail className="text-[36px]"></TbMail>
              </a>
              <a
                href="https://www.linkedin.com/in/vraj24/"
                target={"_blank"}
                className=" p-2 font-medium text-blue-950 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <FaLinkedinIn className="text-[36px]"></FaLinkedinIn>
              </a>
              <a
                href="https://github.com/vraj24"
                target={"_blank"}
                className=" p-2 font-medium text-blue-950 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <AiFillGithub className="text-[36px]"></AiFillGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
