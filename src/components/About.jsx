import React from 'react'
import aboutImage from './about.jpeg';
function About() {
  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
                <img
                    src={aboutImage}
                    alt="image"
                />
            </div>
            <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                   🚀 Empowering Businesses Through Data-Driven Insights
                </h2>
                <p className="mt-6 text-gray-600">
                   Excel Analytics Platform is an intuitive web-based solution designed to simplify data exploration and visualization for non-technical users and business analysts. Built using a modern MERN stack (MongoDB, Express, React, Node.js), the platform streamlines the process of uploading Excel spreadsheets and generating dynamic charts — all without writing a single line of code.
                </p>
                <h3 className="text-2xl text-gray-900 font-bold md:text-4xl">
                   💡 Our Mission
                </h3>
                <p className="mt-4 text-gray-600">
                    To bridge the gap between traditional spreadsheet data and modern analytics by enabling users to uncover actionable insights from raw Excel files in just a few clicks.
                </p>
            </div>
        </div>
    </div>
</div>
);
}
  


export default About
