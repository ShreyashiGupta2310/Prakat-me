import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">

     
      <nav className="navbar">

        <div className="navHeader">
          <img src="/abc.png" alt="logo" className="logoImage" />
        </div>

        <div className="navList">
          <button className="btn" onClick={() => router("/3ulyeiwdh")}>Join as Guest</button>
          <button className="btn login" onClick={() => router("/auth")}>Login</button>
          <button className="btn signup" onClick={() => router("/auth?mode=signup")}>Register</button>
        </div>

      </nav>

      
      <div className="main-section">
  <div>
    <h1 className="main-text">Stay connected</h1>

    <button 
      className="btn join-main-btn"
      onClick={() => router("/3ulyeiwdh")}
    >
      Join as Guest
    </button>
  </div>

  <div className="circle-wrapper">
    <img 
      src="abc2.png" 
      className="circle-image"
      alt="users" 
    />
  </div>
</div>

    </div>
  );
}
