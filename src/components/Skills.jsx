import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDart,
  DiSqllite,
} from "react-icons/di";
import {
  SiFlutter,
  SiPhp,
  SiPostman,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="skills">
        <div>
          <div>
            <h1
              data-aos="fade-right"
              className="text-blue-950 dark:text-white text-3xl ml-16 font-semibold mt-20"
            >
              Tools & Technologies
            </h1>
            <hr
              data-aos="fade-right"
              className="my-6 border-gray-400 sm:mx-14 dark:border-gray-700 lg:my-8 aos-init aos-animate"
            ></hr>
          </div>

          <Row
            style={{
              justifyContent: "center",
              marginLeft: "4rem",
              display: "flex",
              flexWrap: "wrap",
              width: "90%",
            }}
          >
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiPython />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <CgCPlusPlus />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiJava />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiJavascript1 />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiReact />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiNodejs />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiMongodb />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <SiPhp />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiDart />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <SiFlutter />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiSqllite />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <DiGit />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <SiScikitlearn />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <SiTensorflow />
            </Col>
            <Col
              xs={4}
              md={2}
              className="hover:shadow-lg hover:shadow-sky-900 inline-flex m-6 items-center px-4 py-2 w-24 h-24 text-6xl font-medium text-blue-950 bg-white border hover:border-gray-400 rounded-lg hover:bg-gray-100 border-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <SiPostman />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Skills;
