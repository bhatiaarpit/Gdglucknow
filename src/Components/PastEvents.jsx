import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const pastEventsData = [
  {
    name: 'Intro to Flutter',
    organizer: 'GDG Lucknow',
    venue: 'Online',
    date: 'December 15, 2023',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    detailsLink: '#',
  },
  {
    name: 'Machine Learning Workshop',
    organizer: 'GDG Lucknow',
    venue: 'Tech Hub',
    date: 'November 10, 2023',
    image: 'https://images.unsplash.com/photo-1593642632851-1c9e39b564b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    detailsLink: '#',
  },
  // Add more event objects here
];

function PastEvents() {
  return (
    <section id='pastevents' className="py-12 px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Past Events</h2>
      {pastEventsData.length > 4 ? (
        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            gap: '1rem',
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
        >
          {pastEventsData.map((event, index) => (
            <SplideSlide key={index}>
              <div className="p-2 block">
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
                  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">{event.name}</h6>
                    <p className="text-slate-600 font-light">{event.venue}</p>
                    <p className="text-slate-600">{event.date}</p>
                    <p className="text-slate-600 font-light">Organized by: {event.organizer}</p>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <a
                      href={event.detailsLink}
                      className="px-4 py-2 text-sm text-white bg-cyan-600 rounded hover:bg-cyan-700 transition"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEventsData.map((event, index) => (
            <div key={index} className="p-2">
              <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h6 className="mb-2 text-slate-800 text-xl font-semibold">{event.name}</h6>
                  <p className="text-slate-600 font-light">{event.venue}</p>
                  <p className="text-slate-600">{event.date}</p>
                  <p className="text-slate-600 font-light">Organized by: {event.organizer}</p>
                </div>
                <div className="flex items-center justify-between p-4">
                  <a
                    href={event.detailsLink}
                    className="px-4 py-2 text-sm text-white bg-cyan-600 rounded hover:bg-cyan-700 transition"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default PastEvents;
