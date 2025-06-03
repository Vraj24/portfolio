import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCards({ title, content, url, githubLinks }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="ProjectCards" onClick={() => window.open(githubLinks)}>
        <div className="h-full">
          <div
            className="flex flex-col h-full top-2 bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-sky-900 hover:border-gray-400 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-96 w-full object-cover"
                src={url}
                alt=""
                draggable="false"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="break-words mb-2 text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
                  {title}
                </h5>
              </a>
              <p className="break-words mb-3 font-normal text-gray-600 dark:text-gray-400">
                {content}
              </p>
              <div className="place-items-end">
                <a
                  href={githubLinks}
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-blue-950 dark:focus:ring-blue-800"
                >
                  GitHub
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
