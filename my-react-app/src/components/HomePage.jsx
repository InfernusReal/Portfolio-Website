import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HomePage.css";

gsap.registerPlugin(ScrollTrigger);
function rafScrollUpdate() {
  ScrollTrigger.update();
  requestAnimationFrame(rafScrollUpdate);
}
requestAnimationFrame(rafScrollUpdate);
ScrollTrigger.config({
  autoRefreshEvents: "DOMContentLoaded,load,resize,visibilitychange,scroll"
});
window.addEventListener("scroll", () => {
  ScrollTrigger.update(); // ensures ScrollTrigger syncs with manual scrollbar movement
});

function HomePage() {
  function Section1() {
    // Typing animation for Introduction
    const [typed, setTyped] = useState("");
    const fullText = "Introduction";
    const [done, setDone] = useState(false);
    useEffect(() => {
      let i = 0;
      setTyped("");
      setDone(false);
      const interval = setInterval(() => {
        if (i < fullText.length) {
          setTyped(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setDone(true), 200);
        }
      }, 90);
      return () => clearInterval(interval);
    }, []);


    return (
      <div className="wrapperx other "> {/* Removed bg-img from Section1 */}
        <h1 className="Introduction">Welcome to my Portfolio website.</h1>
        <div className="wrapper2 card-black">
          <div className="intro-heading-container">
            <h2 className="Introduction subheading center-underline">
              <span>{typed}</span>
              <span className={`underline-anim${done ? " show" : ""}`}></span>
            </h2>
          </div>
          <p className="description desc-justify">
            I am a 16 year old FullStack Developer and an author, having worked
            with various technologies including React, Express.js, MySQL and much
            more. I have also authored three novels and have a passion in world
            creation.
          </p>
        </div>
      </div>
    );
  }
  const Section2 = () => {
    const [typed, setTyped] = useState("");
    const fullText = "Project-1";
    const [done, setDone] = useState(false);
    const [startTyping, setStartTyping] = useState(false);
    const section2Ref = useRef(null);

  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      section2Ref.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        delay: 0.4,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );

    // Start typing 0.5s after scroll animation starts
    const typingDelay = setTimeout(() => {
      setStartTyping(true);
    }, 2000);

    return () => clearTimeout(typingDelay);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    setTyped("");
    setDone(false);

    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped((prev) => fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 200);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [startTyping]);
      const handleClick = () => {
        window.location.href = "https://github.com/InfernusReal/The-Prodigious-Hub.";
    };
    return (
      <div className="wrapper section2-spacing  " ref={section2Ref} id="projects">
        <div className="margin">
          <h1 className="Introduction">Coding related projects.</h1>
          <div className="wrapper3 card-black">
            <div className="intro-heading-container">
              <h2 className="Introduction subheading center-underline">
                <span>{typed}</span>
                <span className={`underline-anim${done ? " show" : ""}`}></span>
              </h2>
            </div>
            <p className="description desc-justify">
              The Prodigious Hub is a full-stack developer platform I built from
              scratch. It allows users to create projects, gain XP, level up, and
              collaborate. Features include live feeds, profile systems, and
              real-time Discord integration. This project is currently under
              construction, with plans to add more features.
            </p>
            <button className="glass-button" onClick={handleClick}>GitHub</button>
          </div>
        </div>
      </div>
    );
  };

  const SectionScroll=()=>{
    const sliderRef = useRef(null);

      useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 95%", // when the top of the element hits 80% of the viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
    return(
  <div className="tech-slider card-black" ref={sliderRef} >
  <div className="slider-track">
    <img src="/logos/html.png" alt="HTML" />
    <img src="/logos/css.png" alt="CSS" />
    <img src="/logos/js.png" alt="JS" />
    <img src="/logos/react.png" alt="React" />
    <img src="/logos/node.png" alt="Node" />
    <img src="/logos/mysql.png" alt="MySQL" />
    <img src="/logos/mongodb.png" alt="MongoDB" />
    <img src="/logos/Framermotion.png" alt="Framer Motion" />

    {/* Duplicate for infinite loop */}
    <img src="/logos/html.png" alt="HTML" />
    <img src="/logos/css.png" alt="CSS" />
    <img src="/logos/js.png" alt="JS" />
    <img src="/logos/react.png" alt="React" />
    <img src="/logos/node.png" alt="Node" />
    <img src="/logos/mysql.png" alt="MySQL" />
    <img src="/logos/mongodb.png" alt="MongoDB" />
    <img src="/logos/Framermotion.png" alt="Framer Motion" />
  </div>
</div>
    )
  }
useEffect(() => {
  // Ensure ScrollTrigger watches everything, including native scrollbar and key scroll
  const update = () => ScrollTrigger.update();

  // Attach all possible user input triggers
  window.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  window.addEventListener("keydown", update);  // arrow keys
  window.addEventListener("keyup", update);
  window.addEventListener("mouseup", update);  // scrollbar drag
  window.addEventListener("wheel", update);    // mouse wheel
  window.addEventListener("touchmove", update); // mobile scroll

  // Just to be safe
  ScrollTrigger.refresh();

  return () => {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
    window.removeEventListener("keydown", update);
    window.removeEventListener("keyup", update);
    window.removeEventListener("mouseup", update);
    window.removeEventListener("wheel", update);
    window.removeEventListener("touchmove", update);
  };
}, []);


const Section3=()=>{
    const [typed, setTyped] = useState("");
    const fullText = "Project-2";
    const [done, setDone] = useState(false);
    const [startTyping, setStartTyping] = useState(false);
    const section2Ref = useRef(null);

  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      section2Ref.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        delay: 0.4,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 115%",
          toggleActions: "play none none none",
        },
      }
    );

    // Start typing 0.5s after scroll animation starts
    const typingDelay = setTimeout(() => {
      setStartTyping(true);
    }, 2000);

    return () => clearTimeout(typingDelay);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    setTyped("");
    setDone(false);

    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped((prev) => fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 200);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [startTyping]);
      const handleClick = () => {
        window.location.href = "https://github.com/InfernusReal/HighLandInt-Website.";
    };
    return (
  <>
      <div className="wrapperx section2-spacing " ref={section2Ref}>
        <div className="margin">
          <div className="wrapper4 card-black">
            <div className="intro-heading-container">
              <h2 className="Introduction subheading center-underline">
                <span>{typed}</span>
                <span className={`underline-anim${done ? " show" : ""}`}></span>
              </h2>
            </div>
            <p className="description desc-justify mobile-text">
I served as the lead developer in creating the official website for Highland Internationals, a major overseas recruitment agency. The platform features a secure ad posting system and a responsive contact form integrated with backend storage. This agency operates at a large scale, sending hundreds of workers abroad monthly, and has also maintained professional relations with global brands, including IKEA.


            </p>
            <button className="glass-button" onClick={handleClick}>GitHub</button>
          </div>
        </div>
      </div>
  
  </>
    
    );
};

function Section4() {
  const novels = [
    {
      title: "Eclipse: The Terror of Mystery",
      image: "/novels/eclipse.png",
      description: "For the heavens have fallen and the void screams, the treachery of god is but glee.",
      route: "/Eclipse",
    },
    {
      title: "Infernal Progression System",
      image: "/novels/infernal.png",
      description: "A system. A descent into madness. The path of power is paved in blood and ambition.",
      route: "/Infernal",
    },
    {
      title: "The Praised Hypocrisy",
      image: "/novels/praised.png",
      description: "A god of lies, a kingdom of masks. In this world, truth is the sharpest weapon.",
      route: "/Praised",
    },
  ];

  return (
    <div className="novel-section bg2 " id="novels">
      <h1 className="bungee-heading">Writing Projects</h1>
      <div className="novel-wrapper">
        {novels.map((novel, index) => (
          <div className="novel-card" key={index}>
          <div className="glass-shine"></div>
            <div className="novel-image-container">
              <img src={novel.image} alt={novel.title} className="novel-image" />
              {index < 3 && <div className="vertical-line" />} {/* Add line between only first two */}
            </div>
            <div className="novel-floating">
              <p>{novel.description}</p>
              <Link to={novel.route} className="glass-button">
                Explore More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}
  return (
<>
<div className="bg">
    <Section1 />
    <SectionScroll />
    <Section2 />
    <Section3 />
    <Section4 /> {/* this has gold bg inside itself */}
  </div>

    

</>
  )
}

export default HomePage;