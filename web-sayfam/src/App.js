
import './App.css';
import React, { useState } from 'react'
import { useContext } from "react";
import { CiteContext } from "./contexts/CiteContext";
// import Hero from "./components/Hero";
// import Skills from "./components/Skills";
// import Profile from "./components/Profile";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import ModeSwitch from "./components/ModeSwitch";
// import Header from "./components/Header";
// import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialDAta = {
  name: "Ozan Azazi",
  birthday: "01.11.1975",
  cityofresidence: "Antakya",
  education: "Çukurova Üniversitesi İşletme Lisans,2002",
  preference: "Frontend, UI",
  mail: "cs50_scratch@yahoo.com",
};

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [language, setLanguage] = useState("tr");
  const changeLanguage = (lang) => {
       setLanguage(lang);
  };
  const [profildata, setProfildata] = useState(initialDAta);
  const { theme } = useContext(CiteContext);
  return (
       <div className={darkMode ? "bg-gray-900" : "bg-gray-100"}>
         <button
          onClick={toggleDarkMode}
        className="p-4 m-4 rounded-lg bg-blue-500 text-white"
      >
       {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button
        onClick={() => changeLanguage("tr")}
        className="p-4 m-4 rounded-lg bg-red-500 text-white"
      >
           TR
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className="p-4 m-4 rounded-lg bg-green-500 text-white"
      >
        EN
      </button>
      <h1 className={darkMode ? "text-white" : "text-black"}>
      {language === "tr" ? "Kişisel Web Sayfam" : "My Personal Web Page"}
      </h1>
      </div>
  );
}
export default App;
