import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Section1.css";
import novelCover from "/novels/praised.png";


function Section1() {
    const handleClick = () => {
        window.location.href = "https://www.webnovel.com/book/the-praised-hypocrisy_29752733800715405";
    };
  return (
    <div className="section1-wrapper">
      <div className="eclipse-card">
        <img src={novelCover} alt="Eclipse Cover" className="novel-cover" />

        <h2 className="eclipse-title">The Praised Hypocrisy</h2>

        <button className="read-now-btn" onClick={handleClick}>Read Now</button>
      </div>
    </div>
  );
}

export default Section1;