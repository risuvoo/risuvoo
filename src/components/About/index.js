import React from "react";
import "./style.css";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto relative">
        <div className="w-full h-full flex items-center mb-5">
          <div className="w-full">
            {/* heading */}
            <div className="about-heading h-20 flex items-center mb-10">
              <div className="about-heading-border-1 bg-mexuvo-red-500"></div>
              <div className="about-heading-content flex-1">
                <h1 className="text-4xl font-bold tracking-tight text-shark-500 text-center">
                  About me
                </h1>
              </div>
              <div className="about-heading-border-2 bg-mexuvo-red-500"></div>
            </div>
            {/* main content */}
            <div className="flex space-x-5 items-center mb-10">
              {/* article */}
              <div className="about-article w-3/5">
                <div>
                  <p className="font-light mb-8 text-gray-800 text-lg tracking-wide">
                    When you talk about the beauty of a website first you remind
                    yourself about a word called “JAVASCRIPT”. In the world of
                    modern JavaScript integrating was my first perspective.
                    Hello! I am a frontend developer with a successful
                    experience of 3 years and always keen with some or other
                    challenges, Learning out new things and involving it with
                    some unique terms has being my passion always. Why not
                    bringing up imaginative ideas to a real form!!
                  </p>
                  <div className="mexuvo-btn mexuvo-download-btn w-full h-full mb-10">
                    <a
                      href="#"
                      className="w-64 h-12 inline-flex rounded-tr-xl transition duration-300 ease-in-out rounded-bl-xl justify-center items-center bg-shark-500 text-white uppercase text-sm tracking-wide"
                    >
                      Download CV
                    </a>
                  </div>
                  <ul className="text-gray-800 text-md">
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Html</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/html-1.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="html"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Css</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/css-3.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="css"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Bootstrapcss</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/bootstrap-4.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="bootstrapcss"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Tailwindcss</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/tailwindcss.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="tailwindcss"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Javascript</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/logo-javascript.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="javascript"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Typescript</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/typescript.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="typescript"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>JQuery</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/jquery-4.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="jquery"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Reactjs</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/favicon.ico`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="reactjs"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Vuejs</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/vue-9.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="vuejs"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Nuxtjs</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/nuxt-2.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="nuxtjs"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>Alpinejs</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/alpine-13.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="alpinejs"
                        />
                      </span>
                    </li>
                    <li className="border-b border-mexuvo-red-300 py-2 flex justify-between items-center font-semibold">
                      <span>AJAX</span>
                      <span>
                        <img
                          src={
                            require(`../../assets/img/technology/ajax.svg`)
                              .default
                          }
                          className="w-5 h-5"
                          alt="AJAX"
                        />
                      </span>
                    </li>
                    <li className=" py-2 flex justify-between items-center font-semibold">
                      <span>REST API Integration</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* about animation */}
              <div className="about-animation w-2/5">
                <img
                  src={
                    require(`../../assets/img/mexuvo-about-illustration.svg`)
                      .default
                  }
                  alt="animation"
                />
              </div>
            </div>
          </div>
        </div>
        {/* next-section-btn */}
        {/* <a
          href="#"
          className="mexuvo-next-section animate-bounce block text-shark-500 cursor-pointer"
        >
          <div className="mt-16 mb-10 next-section-btn-text">
            <span className="-rotate-90 antialiased inline-block text-xs transform font-medium uppercase">
              Portfolio
            </span>
          </div>
          <div>
            <Icons ico="arrow-down" className=" w-5 h-5 inline" />
          </div>
        </a> */}
      </div>
    </section>
  );
}

export default About;
