import React from "react";
import "./index.css";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="mb-20">
        <div className="container mx-auto relative">
          <div className="w-full h-full flex items-center mb-5">
            <div className="w-full">
              {/* heading */}
              <div className="portfolio-heading h-20 flex items-center mb-24">
                <div className="portfolio-heading-border-1 bg-mexuvo-red-500"></div>
                <div className="portfolio-heading-content flex-1">
                  <h1 className="text-4xl font-bold tracking-tight text-shark-500 text-center">
                    Portfolio
                  </h1>
                </div>
                <div className="portfolio-heading-border-2 bg-mexuvo-red-500"></div>
              </div>
              {/* main content */}
              <div className="portfolio-main-content">
                <div className="grid grid-cols-3 gap-16">
                  {/* card */}
                  <div className="portfolio-card-wrapper relative">
                    <div className="portfolio-card w-full relative bg-white rounded-2xl h-64 overflow-hidden">
                      {/* project image */}
                      <img
                        src={require(`../../assets/img/demo.png`)}
                        alt=""
                        className="w-full h-full object-fill"
                      />
                      <div className="absolute flex flex-col h-full justify-between p-6 portfolio-card-content w-full">
                        {/* icons */}
                        <div className="portfolio-card-content-project-icons flex space-x-1">
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/html-1.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/css-3.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/logo-javascript.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/tailwindcss.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/vue-9.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/nuxt-2.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                        </div>
                        {/* description */}
                        <div className="portfolio-card-content-project-description text-white text-xs">
                          <p>
                            spiro’s mission is simple: provide the world with
                            free and relevant video education, emphasizing real
                            learning while fairly rewarding Educators. We are
                            beginning our journey by covering O-Level and
                            A-Level subject topics, but we plan to cover all
                            major academic subjects for students aged 13 and
                            above.
                          </p>
                        </div>
                        {/* visit */}
                        <div className="mexuvo-btn w-full">
                          <a
                            href="#"
                            className="w-64 h-10 inline-flex rounded-tr-xl uppercase transition duration-300 ease-in-out rounded-bl-xl justify-center items-center border-2 text-mexuvo-red-500 hover:text-white hover:bg-mexuvo-red-500 border-mexuvo-red-500 font-bold text-sm tracking-wide"
                          >
                            visit site
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-card-main-title absolute">
                      <h1 className="text-lg font-bold text-mexuvo-red-600">
                        Education
                      </h1>
                    </div>
                  </div>
                  {/* card */}
                  <div className="portfolio-card-wrapper relative">
                    <div className="portfolio-card w-full relative bg-white rounded-2xl h-64 overflow-hidden">
                      {/* project image */}
                      <img
                        src={require(`../../assets/img/demo.png`)}
                        alt=""
                        className="w-full h-full object-fill"
                      />
                      <div className="absolute flex flex-col h-full justify-between p-6 portfolio-card-content w-full">
                        {/* icons */}
                        <div className="portfolio-card-content-project-icons flex space-x-1">
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/html-1.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/css-3.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/logo-javascript.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/tailwindcss.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/vue-9.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/nuxt-2.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                        </div>
                        {/* description */}
                        <div className="portfolio-card-content-project-description text-white text-xs">
                          <p>
                            spiro’s mission is simple: provide the world with
                            free and relevant video education, emphasizing real
                            learning while fairly rewarding Educators. We are
                            beginning our journey by covering O-Level and
                            A-Level subject topics, but we plan to cover all
                            major academic subjects for students aged 13 and
                            above.
                          </p>
                        </div>
                        {/* visit */}
                        <div className="mexuvo-btn w-full">
                          <a
                            href="#"
                            className="w-64 h-10 inline-flex rounded-tr-xl uppercase transition duration-300 ease-in-out rounded-bl-xl justify-center items-center border-2 text-mexuvo-red-500 hover:text-white hover:bg-mexuvo-red-500 border-mexuvo-red-500 font-bold text-sm tracking-wide"
                          >
                            visit site
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-card-main-title absolute">
                      <h1 className="text-lg font-bold text-mexuvo-red-600">
                        Education
                      </h1>
                    </div>
                  </div>
                  {/* card */}
                  <div className="portfolio-card-wrapper relative">
                    <div className="portfolio-card w-full relative bg-white rounded-2xl h-64 overflow-hidden">
                      {/* project image */}
                      <img
                        src={require(`../../assets/img/demo.png`)}
                        alt=""
                        className="w-full h-full object-fill"
                      />
                      <div className="absolute flex flex-col h-full justify-between p-6 portfolio-card-content w-full">
                        {/* icons */}
                        <div className="portfolio-card-content-project-icons flex space-x-1">
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/html-1.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/css-3.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/logo-javascript.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/tailwindcss.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/vue-9.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/nuxt-2.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                        </div>
                        {/* description */}
                        <div className="portfolio-card-content-project-description text-white text-xs">
                          <p>
                            spiro’s mission is simple: provide the world with
                            free and relevant video education, emphasizing real
                            learning while fairly rewarding Educators. We are
                            beginning our journey by covering O-Level and
                            A-Level subject topics, but we plan to cover all
                            major academic subjects for students aged 13 and
                            above.
                          </p>
                        </div>
                        {/* visit */}
                        <div className="mexuvo-btn w-full">
                          <a
                            href="#"
                            className="w-64 h-10 inline-flex rounded-tr-xl uppercase transition duration-300 ease-in-out rounded-bl-xl justify-center items-center border-2 text-mexuvo-red-500 hover:text-white hover:bg-mexuvo-red-500 border-mexuvo-red-500 font-bold text-sm tracking-wide"
                          >
                            visit site
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-card-main-title absolute">
                      <h1 className="text-lg font-bold text-mexuvo-red-600">
                        Education
                      </h1>
                    </div>
                  </div>
                  {/* card */}
                  <div className="portfolio-card-wrapper relative">
                    <div className="portfolio-card w-full relative bg-white rounded-2xl h-64 overflow-hidden">
                      {/* project image */}
                      <img
                        src={require(`../../assets/img/demo.png`)}
                        alt=""
                        className="w-full h-full object-fill"
                      />
                      <div className="absolute flex flex-col h-full justify-between p-6 portfolio-card-content w-full">
                        {/* icons */}
                        <div className="portfolio-card-content-project-icons flex space-x-1">
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/html-1.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/css-3.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/logo-javascript.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/tailwindcss.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/vue-9.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/nuxt-2.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                        </div>
                        {/* description */}
                        <div className="portfolio-card-content-project-description text-white text-xs">
                          <p>
                            spiro’s mission is simple: provide the world with
                            free and relevant video education, emphasizing real
                            learning while fairly rewarding Educators. We are
                            beginning our journey by covering O-Level and
                            A-Level subject topics, but we plan to cover all
                            major academic subjects for students aged 13 and
                            above.
                          </p>
                        </div>
                        {/* visit */}
                        <div className="mexuvo-btn w-full">
                          <a
                            href="#"
                            className="w-64 h-10 inline-flex rounded-tr-xl uppercase transition duration-300 ease-in-out rounded-bl-xl justify-center items-center border-2 text-mexuvo-red-500 hover:text-white hover:bg-mexuvo-red-500 border-mexuvo-red-500 font-bold text-sm tracking-wide"
                          >
                            visit site
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-card-main-title absolute">
                      <h1 className="text-lg font-bold text-mexuvo-red-600">
                        Education
                      </h1>
                    </div>
                  </div>
                  {/* card */}
                  <div className="portfolio-card-wrapper relative">
                    <div className="portfolio-card w-full relative bg-white rounded-2xl h-64 overflow-hidden">
                      {/* project image */}
                      <img
                        src={require(`../../assets/img/demo.png`)}
                        alt=""
                        className="w-full h-full object-fill"
                      />
                      <div className="absolute flex flex-col h-full justify-between p-6 portfolio-card-content w-full">
                        {/* icons */}
                        <div className="portfolio-card-content-project-icons flex space-x-1">
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/html-1.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/css-3.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/logo-javascript.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/tailwindcss.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/vue-9.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                          <span>
                            <img
                              src={
                                require(`../../assets/img/technology/nuxt-2.svg`)
                                  .default
                              }
                              className="w-5 h-5"
                              alt="AJAX"
                            />
                          </span>
                        </div>
                        {/* description */}
                        <div className="portfolio-card-content-project-description text-white text-xs">
                          <p>
                            spiro’s mission is simple: provide the world with
                            free and relevant video education, emphasizing real
                            learning while fairly rewarding Educators. We are
                            beginning our journey by covering O-Level and
                            A-Level subject topics, but we plan to cover all
                            major academic subjects for students aged 13 and
                            above.
                          </p>
                        </div>
                        {/* visit */}
                        <div className="mexuvo-btn w-full">
                          <a
                            href="#"
                            className="w-64 h-10 inline-flex rounded-tr-xl uppercase transition duration-300 ease-in-out rounded-bl-xl justify-center items-center border-2 text-mexuvo-red-500 hover:text-white hover:bg-mexuvo-red-500 border-mexuvo-red-500 font-bold text-sm tracking-wide"
                          >
                            visit site
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-card-main-title absolute">
                      <h1 className="text-lg font-bold text-mexuvo-red-600">
                        Education
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
