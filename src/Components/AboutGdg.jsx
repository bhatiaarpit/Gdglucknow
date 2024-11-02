import React from 'react';
import gdgImage from '../assets/gdglogo.svg'; 

function AboutGdg() {
  return (
    <section className="flex flex-col md:flex-row items-center px-8 py-12 max-w-7xl mx-auto">
      <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">About Google Developer Group (GDG)</h2>
        <p className="text-slate-600 mb-4">
          Joining a Google Developer Group (GDG) offers you a unique opportunity to connect with fellow tech enthusiasts and developers in your area. GDG meetups feature a diverse array of topics, from insightful talks to hands-on workshops, all designed to help you build and sharpen your technical skills.
        </p>
        <p className="text-slate-600 mb-4">
          Our community stands out for its inclusive and welcoming atmosphere, inviting everyone from beginners to seasoned professionals. Whether you're just starting out in tech or looking to expand your expertise, GDG is a place for growth, learning, and collaboration.
        </p>
        <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is a GDG?</h3>
        <p className="text-slate-600 mb-4">
          Google Developer Groups (GDGs) are dedicated communities for those interested in Google's developer technologies. From platforms like Android, Chrome, and Google Cloud, to APIs such as Maps, YouTube, and Cast, GDGs offer something for everyone.
        </p>
        <p className="text-slate-600 mb-4">
          A GDG event can range from casual meetups with tech talks to hackathons and large-scale gatherings featuring workshops and demos. Regardless of the format, GDGs maintain a focus on developers and technical content, fostering an environment for continuous learning.
        </p>
        <p className="text-slate-600">
          <strong>GDG Lucknow</strong> is proud to be a part of this global community, welcoming participants from around the world to learn, share, and grow together.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center md:justify-end">
        <img src={gdgImage} alt="GDG Event" className="w-full h-auto max-w-md rounded-lg shadow-md" />
      </div>
    </section>
  );
}

export default AboutGdg;
