import React from "react";
import "./style.css";

function Hero() {
  return (
    <section id="hero" className="mexuvo-hero w-full md:mt-0 mt-10">
      <div className="container mx-auto pl-5 lg:pl-10">
        <div className="w-full md:h-screen relative">
          <div className="flex flex-col h-full md:items-start items-center justify-center lg:flex-row lg:items-center lg:space-x-10 w-full xl:justify-start xl:space-x-24">
            {/* profile img */}
            <div className="mexuvo-profile bg-white border-8 border-white rounded-full overflow-hidden mb-10 lg:mb-0">
              <img
                src={require(`../../assets/img/mexuvo/mexuvo-profile-one.jpg`)}
                alt="mexuvo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* intro */}
            <div className="mexuvo-intro">
              <div className="mexuvo-welcome-msg mb-7">
                <span className="text-md uppercase antialiased">
                  Welcome to my World
                </span>
              </div>
              <div className="mexuvo-main-intro mb-2">
                {/* xl:text-6xl md:text-5xl */}
                <h1 className="xl:text-6xl md:text-5xl text-4xl font-extrabold text-shark-500">
                  This Site is
                </h1>
              </div>
              <div className="mexuvo-main-intro-profession mb-7">
                <h1 className="xl:text-6xl md:text-5xl text-4xl font-extrabold text-mexuvo-red-500">
                  Under Construction
                </h1>
              </div>
              <div className="flex md:flex-row flex-col space-y-0 md:space-y-0 md:space-x-5 space-x-0">
                <div className="mexuvo-btn mexuvo-hire-btn mb-5">
                  <a
                    href="#"
                    className="w-64 h-12 inline-flex rounded-tr-xl transition duration-300 ease-in-out rounded-bl-xl justify-center items-center bg-mexuvo-red-500 text-white uppercase text-sm tracking-wide"
                  >
                    Emergency
                  </a>
                </div>
                <div className="mexuvo-btn mexuvo-download-btn w-full">
                  <a
                    download
                    href="../../assets/file/suvo-resume.pdf"
                    className="w-64 h-12 inline-flex rounded-tr-xl uppercase transition duration-300 ease-in-out rounded-bl-xl justify-center items-center border-2 text-shark-500 hover:text-white hover:bg-shark-500 border-shark-500 text-sm tracking-wide"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* next-section-btn */}
          {/* <a
            href="#about"
            className="mexuvo-next-section absolute animate-bounce text-shark-500 cursor-pointer"
          >
            <div className="mb-6 next-section-btn-text">
              <span className="-rotate-90 antialiased inline-block text-xs transform font-medium uppercase">
                About
              </span>
            </div>
            <div>
              <Icons ico="arrow-down" className=" w-5 h-5 inline" />
            </div>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
