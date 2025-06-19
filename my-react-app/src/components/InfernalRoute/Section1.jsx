import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Section1.css";
import novelCover from "/novels/infernal.png";


function Section1() {
    const handleClick = () => {
        window.location.href = "https://www.webnovel.com/book/infernal-progression-system_29261544108730405";
    };
  return (
    <div className="section1-wrapper">
      <div className="eclipse-card">
        <img src={novelCover} alt="Eclipse Cover" className="novel-cover" />

        <h2 className="eclipse-title">Infernal Progression System</h2>

        <button className="read-now-btn" onClick={handleClick}>Read Now</button>
      </div>
    </div>
  );
}

export default Section1;