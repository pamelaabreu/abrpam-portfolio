import React from 'react';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function App() {
  return (
    <>
    <div style={{
      width: '100%', 
      height: '100vh',  
      background: '#27257D'
      }}>
        <div style={{
        display:'flex', 
        flexDirection:'column', 
        width: '50%', 
        margin: '0 auto', 
        color: 'white'
        }}>
          <h1 style={{fontSize: '80px'}}>Welcome to Pamela Abreu's Portfolio</h1>
          <h2>Under construction, please visit later!</h2>
          <a href='https://github.com/pamelaabreu' target='_blank' rel="noopener noreferrer"> <IoLogoGithub /> Github</a>
          <a href='https://www.linkedin.com/in/pamela-abreu/' target='_blank' rel="noopener noreferrer"> <IoLogoLinkedin /> LinkedIn</a>
          <a href='https://www.instagram.com/abrpam/' target='_blank' rel="noopener noreferrer"> <IoLogoInstagram /> Instagram</a>
        </div>
      
    </div>
      
    </>
  );
}

export default App;
