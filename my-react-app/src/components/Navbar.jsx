import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import "./Navbar.css";

function NavBar() {
const navigate =useNavigate();
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const Handle1 = () =>{
  navigate('/') 
  }
const Handle2 = () =>{
  navigate('/contact')
}
return(
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <ul className="nav-links">
          <li onClick={Handle1}>Home</li>
          <li onClick={() => scrollTo("projects")} >Projects</li>
          <li onClick={() => scrollTo("novels")} >Novels</li>
          <li onClick={Handle2}>Contact</li>
        </ul>
      </div>
    </nav>
)
}

export default NavBar;
