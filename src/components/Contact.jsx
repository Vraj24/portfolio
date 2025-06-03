import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pdf from "../assets/Vraj's Resume.pdf";

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

          <div className="ml-12 pb-6">
            <div className="mt-12 text-center" data-aos="fade-right">
              <a
                href={pdf}
                rel="noreferrer"
                target="_blank"
                class="hover:shadow-lg hover:shadow-sky-900 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:focus:ring-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  class="w-3.5 h-3.5 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"></path>
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                </svg>{" "}
                Download Resume
              </a>
            </div>
            <div className="mt-12 mb-6 text-center" data-aos="fade-right">
              <a
                href={"mailto:vrparekh@iu.edu"}
                rel="noreferrer"
                target="_blank"
                class="mr-10 hover:shadow-lg hover:shadow-sky-900 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:focus:ring-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  className="w-5 h-5 me-2.5"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>mail</title>
                  <path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" />
                </svg>
                vrparekh@iu.edu
              </a>
              <a
                href={"https://www.linkedin.com/in/vraj24/"}
                rel="noreferrer"
                target="_blank"
                class="mr-10 hover:shadow-lg hover:shadow-sky-900 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:focus:ring-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  className="w-5 h-5 me-2.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={"https://www.github.com/vraj24"}
                rel="noreferrer"
                target="_blank"
                class="mr-10 hover:shadow-lg hover:shadow-sky-900 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:focus:ring-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  className="w-5 h-5 me-2.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                </svg>
                GitHub
              </a>
            </div>
            <p className="mt-12 mr-14 text-right text-sm block mb-2 font-normal leading-none text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} - All Rights are Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
