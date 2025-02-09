import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import ScrollToTopButton from "./ScrollToTop";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const words = ["Fear", "Doubt", "Anxiety"];
  const results = ["Confidence", "Clarity", "Success"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "MCQ TEST",
      image: "./slider_images/mcq.jpg", 
      description: "Practice MCQs for interviews.",
      link: "/new-page-1", 
    },
    {
      id: 2,
      title: "RESUME BUILDER",
      image: "./slider_images/resume.jpg", 
      description: "Create ats-friendly resumes easily.",
      link: "/new-page-2", 
    },
    {
      id: 3,
      title: "ROADMAP",
      image: "./slider_images/roadmap.jpg",
      description: "Detailed roadmap for success.",
      link: "/new-page-2", 
    },
    {
      id: 4,
      title: "FAQ QNA",
      image: "./slider_images/faq.jpg", 
      description: "Read and learn.",
      link: "/new-page-2", 
    },
    {
      id: 5,
      title: "INTERVIEW ETIQUETTES",
      image: "./slider_images/etiquettes.jpg",
      description: "Learn proper interview manners.",
      link: "/new-page-2", 
    },
    {
      id: 6,
      title: "CODING PLATFORM",
      image: "./slider_images/coding.jpg",
      description: "Code and review solutions here.",
      link: "/new-page-2",
    },
    {
      id: 7,
      title: "JOB PREFERENCE",
      image: "./slider_images/job.jpg", 
      description: "Set your job preferences.",
      link: "/new-page-2", 
    },
    {
      id: 8,
      title: "IT COMPANIES",
      image: "./slider_images/companies.jpg", 
      description: "Explore top IT companies.",
      link: "/new-page-1", 
    },
  ];
  

    const [isPaused, setIsPaused] = useState(false);
  
    useEffect(() => {
      if (isPaused) return; // Stop auto-slide when paused
  
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Auto-slide every 5 sec
  
      return () => clearInterval(interval);
    }, [slides.length, isPaused]);
  
    const handleNext = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      pauseSlider();
    };
  
    const handlePrev = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      pauseSlider();
    };
  
    const pauseSlider = () => {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 10000); // Pause for 10 sec
    };
  
    const getSlidePosition = (index) => {
      const totalSlides = slides.length;
      const relativeIndex = (index - currentSlide + totalSlides) % totalSlides;
      return relativeIndex === 0
        ? "center"
        : relativeIndex === 1
        ? "right"
        : relativeIndex === totalSlides - 1
        ? "left"
        : "hidden";
    };
  
  return (
    <>
      <div className="w-full h-screen">
        <NavBar />
        <div className="flex flex-wrap items-center justify-between px-6 md:px-10 py-32 bg-gradient-to-r from-blue-200 to-blue-50">
          {/* Left Side */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left p-6 md:p-12">
            <h1 className="text-3xl md:text-5xl font-semibold font-serif flex flex-col">
              {/* Transform + Sliding Fear, Doubt, Anxiety */}
              <div className="flex items-center space-x-3">
                <span>Transform</span>
                <div className="relative h-14 w-[200px] overflow-hidden">
                  <div
                    className="absolute top-0 left-0 flex flex-col transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateY(-${index * 3.5}rem)` }}
                  >
                    {words.map((word, i) => (
                      <div
                        key={i}
                        className="h-14 flex items-center text-red-500"
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Into + Sliding Confidence, Clarity, Success */}
              <div className="flex items-center space-x-3 mt-3">
                <span>Into</span>
                <div className="relative h-14 w-[300px] overflow-hidden">
                  <div
                    className="absolute top-0 left-0 flex flex-col transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateY(-${index * 3.5}rem)` }}
                  >
                    {results.map((word, i) => (
                      <div
                        key={i}
                        className="h-14 flex items-center text-green-500"
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </h1>
            <p className="text-lg text-gray-600 italic mt-0">
              PrepEdge transforms your interview journey, providing you with the
              practice and feedback needed to build confidence and excel in
              every round.
            </p>
            <button
              className="relative mt-4 px-6 py-3 bg-slate-700 text-white rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out 
  hover:bg-slate-800 hover:w-52 flex items-center justify-center group overflow-hidden shadow-lg hover:shadow-blue-500/50"
            >
              {/* Background Glow Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>

              {/* Button Text */}
              <span className="relative transition-all duration-300 ease-in-out group-hover:mr-2">
                Start Interview
              </span>

              {/* Sliding Arrow */}
              <span className="relative transform translate-x-[-10px] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                ➜
              </span>
            </button>
          </div>

          {/* Right Side - Compact Rotating Slider */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0 py-6 relative">
      {/* Slider Container */}
      <div className="relative w-full h-80 flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute text-4xl left-9 text-black rounded-full p-2 transform duration-200 active:scale-95 hover:bg-gray-200 focus:outline-none transition z-10 "
          //absolute right-0 text-4xl text-black 
        >
          ⇜
        </button>

        {/* Slides */}
        <div className="relative w-full h-80 overflow-hidden">
          <AnimatePresence initial={false}>
            {slides.map((slide, index) => {
              const position = getSlidePosition(index);
              return (
                <motion.div
                  key={slide.id}
                  initial={{
                    x: position === "center" ? 0 : position === "right" ? "100%" : "-100%",
                    scale: position === "center" ? 1 : 0.8,
                    opacity: position === "center" ? 1 : 0.7,
                  }}
                  animate={{
                    x: position === "center" ? 0 : position === "right" ? "50%" : "-50%",
                    scale: position === "center" ? 1 : 0.8,
                    opacity: position === "center" ? 1 : 0.7,
                  }}
                  exit={{
                    x: position === "left" ? "-200%" : "200%", // Move far out of view
                    scale: 0.5,
                    opacity: 0,
                  }}                  
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="absolute w-80 h-80 bg-white shadow-lg rounded-lg p-4"
                  style={{
                    left: "30%",
                    transform: `translateX(${position === "center" ? "-50%" : position === "right" ? "50%" : "-150%"})`,
                    zIndex: position === "center" ? 3 : 1,
                    display: position === "hidden" ? "none" : "block",
                  }}
                >
                  <Link to={slide.link} className="relative w-full h-full block">
                    <div
                      className="w-full h-full bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className="absolute bottom-0 p-2 backdrop-blur-sm w-full text-center bg-gradient-to-t from-black via-transparent to-transparent text-white">
                        <h3 className="text-2xl font-bold">{slide.title}</h3>
                        <p className="text-sm mt-2">{slide.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
  onClick={handleNext}
  className="absolute right-0 text-4xl text-black p-2 rounded-full transform transition-all duration-200 active:scale-95 hover:bg-gray-200 focus:outline-none"
>
  ⇝
</button>
      </div>

      {/* Bullet Indicators Below Slider */}
      <div className="flex gap-2 mt-6">
  {slides.map((_, index) => (
    <button
      key={index}
      className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
        currentSlide === index ? "bg-blue-500 scale-110" : "bg-gray-400 hover:bg-gray-500"
      }`}
      onClick={() => {
        setCurrentSlide(index);
        pauseSlider();
      }}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>
    </div>
        </div>
        </div>
      <Footer/>
      <ScrollToTop/>
    </>
  );
}

export default Home;
