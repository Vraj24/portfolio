import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ResumeString from "./assets/Resume.jsx";

export const Context = React.createContext();

function App() {
  const [count, setCount] = useState(0);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        role: "system",
        content: ResumeString,
      },
    ]);
  }, []);

  return (
    <Context.Provider value={[messages, setMessages]}>
      <div className="dark:bg-blue-950 bg-slate-100">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Context.Provider>
  );
}

export default App;
