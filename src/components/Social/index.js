import React from "react";
import Icons from "../Shared/Icons";

function Social() {
  return (
    <>
      <section
        id="social"
        className="social-wrapper mexuvo-container-shape bg-shark-900 w-full h-full py-32"
      >
        <div className="container mx-auto relative">
          <div className="w-full h-full ">
            <div className="w-full">
              {/* heading */}
              <div className="social-heading mb-16">
                <span className="text-sm text-mexuvo-red-500 font-semibold">
                  SOCIAL MEDIA
                </span>
                <h1 className="text-4xl text-white font-bold">
                  Let’s Be Friends
                </h1>
              </div>
              {/* content */}
              <div className="social-content">
                <div className="grid grid-cols-4 gap-5">
                  {/* content-card */}
                  <a
                    href="#"
                    target="_blank"
                    className="social-card-wrapper py-10 px-8 backdrop-blur backdrop-filter bg-opacity-60 bg-white shadow rounded-md block group hover:bg-mexuvo-red-100 transition-all duration-300 ease-in-out"
                  >
                    <div className="flex justify-between items-center">
                      <div className="social-card-content">
                        <h2 className="text-2xl text-shark-500 group-hover:text-mexuvo-red-600 capitalize font-semibold">
                          linkedin
                        </h2>
                        <p className="text-sm text-gray-700">
                          Professional social media
                        </p>
                      </div>
                      <div className="social-card-icon">
                        <span>
                          <Icons
                            ico="linkedin"
                            className="w-16 h-16 text-shark-500 group-hover:text-mexuvo-red-600"
                          />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="social-card-wrapper py-10 px-8 backdrop-blur backdrop-filter bg-opacity-60 bg-white shadow rounded-md block group hover:bg-mexuvo-red-100 transition-all duration-300 ease-in-out"
                  >
                    <div className="flex justify-between items-center">
                      <div className="social-card-content">
                        <h2 className="text-2xl text-shark-500 group-hover:text-mexuvo-red-600 capitalize font-semibold">
                          Facebook
                        </h2>
                        <p className="text-sm text-gray-700">
                          Professional social media
                        </p>
                      </div>
                      <div className="social-card-icon">
                        <span>
                          <Icons
                            ico="facebook"
                            className="w-16 h-16 text-shark-500 group-hover:text-mexuvo-red-600"
                          />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="social-card-wrapper py-10 px-8 backdrop-blur backdrop-filter bg-opacity-60 bg-white shadow rounded-md block group hover:bg-mexuvo-red-100 transition-all duration-300 ease-in-out"
                  >
                    <div className="flex justify-between items-center">
                      <div className="social-card-content">
                        <h2 className="text-2xl text-shark-500 group-hover:text-mexuvo-red-600 capitalize font-semibold">
                          Twitter
                        </h2>
                        <p className="text-sm text-gray-700">
                          Professional social media
                        </p>
                      </div>
                      <div className="social-card-icon">
                        <span>
                          <Icons
                            ico="twitter"
                            className="w-16 h-16 text-shark-500 group-hover:text-mexuvo-red-600"
                          />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="social-card-wrapper py-10 px-8 backdrop-blur backdrop-filter bg-opacity-60 bg-white shadow rounded-md block group hover:bg-mexuvo-red-100 transition-all duration-300 ease-in-out"
                  >
                    <div className="flex justify-between items-center">
                      <div className="social-card-content">
                        <h2 className="text-2xl text-shark-500 group-hover:text-mexuvo-red-600 capitalize font-semibold">
                          Github
                        </h2>
                        <p className="text-sm text-gray-700">My work status</p>
                      </div>
                      <div className="social-card-icon">
                        <span>
                          <Icons
                            ico="github"
                            className="w-16 h-16 text-shark-500 group-hover:text-mexuvo-red-600"
                          />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Social;
