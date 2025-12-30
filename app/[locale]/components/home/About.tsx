'use client';
import Image from 'next/image';
import Container from '../layout/Container';
import { useState } from 'react';
export default function AboutMovement() {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-20">
      <Container>

        {/* TOP ICON CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {icons.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 py-10 transition hover:shadow-md"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={54}
                height={54}
              />
              <p className="mt-4 text-base font-semibold text-blue-600 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

       <div className="">
      <div className="">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600  py-2">
            About Movement
          </h1>
          <button className="text-gray-400 hover:text-gray-600 font-medium">
            View More
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_720px] gap-8 mb-8">
          {/* Text Content */}
          <div className=" items-center">
            <p className="text-base text-gray-700 leading-relaxed">
              The youths, who had been calling for demonstrations through social media in recent days, gathered at Maitighar this morning with placards and slogans.
            </p>
            <br />
            <p className="text-base text-gray-700 leading-relaxed">
              The youths, who had been calling for demonstrations through social media in recent days, gathered at Maitighar this morning with placards and slogans.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
              <img
                src={timelineData[activeIndex].image}
                alt={timelineData[activeIndex].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
              <img
                src={timelineData[(activeIndex + 1) % timelineData.length].image}
                alt={timelineData[(activeIndex + 1) % timelineData.length].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 flex items-center">
          {/* Dotted Horizontal Line */}
          <div className="absolute left-0 right-0 border-t-2 border-dashed border-gray-400"></div>

          {/* Timeline Circles */}
          <div className="relative flex justify-between items-center w-full">
            {timelineData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative z-10 w-6 h-6 rounded-full border-2 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                  index === activeIndex
                    ? 'bg-black border-black scale-125'
                    : 'bg-gray-400 border-gray-400'
                }`}
                aria-label={`View timeline item ${index + 1}`}
              >
                <span className="sr-only">Timeline point {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Timeline Labels (Optional) */}
          <div className="relative flex justify-between items-center mt-4">
            {timelineData.map((item, index) => (
              <div
                key={`label-${item.id}`}
                className="text-xs text-gray-500 text-center w-6"
              >
                {index === activeIndex && (
                  <span className="font-semibold text-black"></span>
                )}
              </div>
            ))}
          </div>
        </div>        
      </div>
    </div>
      </Container>
    </section>
  );
}

/* ICON DATA */
const icons = [
  {
    title: 'पारदर्शी शासन',
    icon: '/assets/janadesh-icons/eye.svg'
  },
  {
    title: 'उत्पाद, दिगो अर्थतन्त्र',
    icon: '/assets/janadesh-icons/plant.svg'
  },
  {
    title: 'वातावरण/पूर्वाधार',
    icon: '/assets/janadesh-icons/building.svg'
  },
  {
    title: 'समावेशी समाज',
    icon: '/assets/janadesh-icons/hand.svg'
  },
  {
    title: 'डिजिटल सुशासन',
    icon: '/assets/janadesh-icons/digital.svg'
  }
];
const timelineData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop',
      alt: 'Protest demonstration'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&h=400&fit=crop',
      alt: 'Youth gathering'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      alt: 'Community movement'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
      alt: 'Social activism'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop',
      alt: 'Peaceful protest'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=600&h=400&fit=crop',
      alt: 'Youth activism'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1571844307880-751c6d86f3f2?w=600&h=400&fit=crop',
      alt: 'Community gathering'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
      alt: 'Movement leaders'
    }
  ];