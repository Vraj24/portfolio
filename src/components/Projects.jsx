import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCards from "./ProjectCards";
import PrismCart from "/PrismCart.png";
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

          <div className="grid grid-cols-3 gap-4 mx-16">
            <div>
              <ProjectCards
                title="PrismCart"
                content="Developed a cross-platform e-commerce web and mobile app for a seamless shopping experience. Implemented JWT authentication, enhancing security by 95%. Designed REST APIs for admin tasks, enabling efficient product and inventory management. Built a recommendation system based on item type and price, boosting engagement by 15%. Integrated PayPal, Apple Pay, and Google Pay with automated receipt generation. Developed a Flutter mobile app with a UI identical to the web version for a consistent user experience. "
                url={PrismCart}
                githubLinks="https://github.com/Vraj24/PrismCart"
              ></ProjectCards>
            </div>
            <div>
              <ProjectCards
                title="Emotion Based Music Recommendation"
                content="Built real-time emotion detection, achieving an accuracy of 64% with simple CNN layers, which increased to 77% by 
using MobileNet. Implemented Spotipy API integration for personalized song recommendations based on user emotions, aiding 
stress relief. "
                url={Emotion}
                githubLinks="https://github.com/Vraj24/music_recommendation_ML"
              ></ProjectCards>
            </div>
            <div>
              <ProjectCards
                title="LinkUp"
                content="Built LinkUp, a real-time messaging web app that enables seamless Google authentication and instant communication. Designed a responsive and intuitive UI, increasing user engagement by 40%. Integrated Firebase for real-time database management, ensuring 99.9% uptime and efficient data synchronization. Optimized messaging performance, reducing latency by 30%, and enhancing overall user experience. Focused on scalability and seamless interactions to create a high-performance communication platform."
                url={LinkUp}
                githubLinks="https://github.com/Vraj24/LinkUp__A-Chat-App"
              ></ProjectCards>
            </div>
            <div>
              <ProjectCards
                title="Restaurant Table booking System"
                content="Developed a web-based system allowing seamless table reservations and menu management. Enhanced user experience through dynamic interfaces and persistent state handling using PHP cookies, reducing 
booking time by 20%. "
                url={Restaurant}
                githubLinks="https://github.com/Vraj24/restaurant-table-booking-system"
              ></ProjectCards>
            </div>
            <div>
              <ProjectCards
                title="inShare"
                content="Developed a user-friendly web application that enables secure file sharing by allowing users to upload files and share them via email addresses. Built the backend using Node.js and Express.js to handle file uploads, email integration, and file storage in MongoDB. Ensured efficient and reliable file transfers with optimized file handling mechanisms. Focused on security and performance to provide a smooth and secure file-sharing experience for users."
                url={inShare}
                githubLinks="https://github.com/Vraj24/inShare"
              ></ProjectCards>
            </div>
            <div>
              <ProjectCards
                title="Lyriks"
                content="Developed a music streaming website inspired by Spotify, utilizing ReactJS for the frontend and Tailwind CSS for responsive design and styling. Integrated the Shazam API through RapidAPI to provide real-time music search, song recommendations, and playback functionality. Built a clean, intuitive interface with features like searching for songs, viewing playlists, and streaming music, ensuring an engaging user experience. Gained hands-on experience with RapidAPI for API integrations and Shazam for music-related data."
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
