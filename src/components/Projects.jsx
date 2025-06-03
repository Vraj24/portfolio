import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCards from "./ProjectCards";
import PrismCart from "/PrismCart.png";
import Weather from "/Weather.png";
import Emotion from "/emotion.png";
import LinkUp from "/LinkUp.png";
import inShare from "/inShare.png";
import Restaurant from "/Restaurant.png";
import Lyriks from "/Lyriks.png";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="projects">
        <div>
          <div>
            <h1
              data-aos="fade-right"
              className="text-blue-950 dark:text-white text-3xl ml-16 font-semibold mt-20"
            >
              Projects
            </h1>
            <hr
              data-aos="fade-right"
              className="my-6 border-gray-400 sm:mx-14 dark:border-gray-700 lg:my-8 aos-init aos-animate"
            ></hr>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-16 items-stretch">
            <div className="flex h-full">
              <ProjectCards
                title="Cloud-Based Weather Forecasting with LSTM"
                content="Developed a real-time weather forecasting pipeline using AWS, featuring LSTM models on SageMaker, data ingestion via Kinesis, preprocessing with Lambda, and automated alerts through SNS to enhance regional response times."
                url={Weather}
                githubLinks="https://github.com/Vraj24/PrismCart"
              ></ProjectCards>
            </div>
            <div className="flex h-full">
              <ProjectCards
                title="PrismCart"
                content="Built a cross-platform e-commerce web and mobile app with secure JWT authentication, REST APIs for admin operations, and a recommendation system that increased engagement by 15%. Integrated multiple payment gateways with automated receipts and developed a Flutter mobile app mirroring the web UI for consistency."
                url={PrismCart}
                githubLinks="https://github.com/Vraj24/Cloud-Based-Weather-Forecasting-with-LSTM"
              ></ProjectCards>
            </div>
            <div className="flex h-full">
              <ProjectCards
                title="Emotion Based Music Recommendation"
                content="Developed a real-time emotion detection system, improving accuracy from 64% to 77% using MobileNet. Integrated the Spotipy API to deliver emotion-based music recommendations for stress relief."
                url={Emotion}
                githubLinks="https://github.com/Vraj24/music_recommendation_ML"
              ></ProjectCards>
            </div>
            <div className="flex h-full">
              <ProjectCards
                title="LinkUp"
                content="Developed LinkUp, a real-time messaging web app with Google authentication, a responsive UI that boosted engagement by 40%, and Firebase integration for reliable, low-latency communication with 99.9% uptime and 30% reduced messaging latency."
                url={LinkUp}
                githubLinks="https://github.com/Vraj24/LinkUp__A-Chat-App"
              ></ProjectCards>
            </div>
            <div className="flex h-full">
              <ProjectCards
                title="Restaurant Table booking System"
                content="Created a web-based table reservation and menu management system with dynamic interfaces and PHP cookie-based state handling, reducing booking time by 20% and improving user experience."
                url={Restaurant}
                githubLinks="https://github.com/Vraj24/restaurant-table-booking-system"
              ></ProjectCards>
            </div>
            <div className="flex h-full">
              <ProjectCards
                title="inShare"
                content="Built a secure file-sharing web app with a Node.js and Express.js backend, enabling users to upload files and share them via email. Integrated MongoDB for storage and optimized file handling for reliable, high-performance transfers."
                url={inShare}
                githubLinks="https://github.com/Vraj24/inShare"
              ></ProjectCards>
            </div>
            <div className="flex h-full">
              <ProjectCards
                title="Lyriks"
                content="Created a Spotify-inspired music streaming website using ReactJS and Tailwind CSS, featuring real-time music search, recommendations, and playback via Shazam API integration. Designed an intuitive UI for seamless song search, playlist viewing, and streaming."
                url={Lyriks}
                githubLinks="https://github.com/Vraj24/Lyriks-web-app"
              ></ProjectCards>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
