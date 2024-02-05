
import './App.css';

import React, { useState } from 'react'


function App() {
  
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {

    setDarkMode(!darkMode);
  };


  const [language, setLanguage] = useState("tr");


  const changeLanguage = (lang) => {
   
    setLanguage(lang);
  };

 
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
