'use client';

import { useState } from 'react';
import Container from '../layout/Container';

export default function PartyLeadershipCards() {
  const cardsData = [
    {
      id: 1,
      title: 'Digital Governance',
      description: "Digital governance clarifies who's responsible for the management and operation of",
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&'
    },
    {
      id: 2,
      title: 'Youth Digital Corps',
      description: "Digital governance clarifies who's responsible for the management and operation of .",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&'
    },
    {
      id: 3,
      title: 'Green Economy',
      description: "Digital governance clarifies who's responsible for the management and operation of.",
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300'
    },
    {
      id: 4,
      title: 'Innovation Hub',
      description: "Digital governance clarifies who's responsible for the management and operation of.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300'
    },
    {
      id: 5,
      title: 'Smart Cities',
      description: "Digital governance clarifies who's responsible for the management and operation of.",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300'
    }
    ,{
      id: 6,
      title: 'Smart Cities',
      description: "Digital governance clarifies who's responsible for the management and operation of.",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300'
    }
     , {
      id: 7,
      title: 'Smart Cities',
      description: "Digital governance clarifies who's responsible for the management and operation of.",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300'
    }
  ];

  return (
    <div className="pb-20 bg-white ">
      <Container>
      <div className="">
        {/* Header */}
        <h1 className="text-3xl font-bold text-green-600 mb-12">
          जनादेश पार्टीको नेतृत्व
        </h1>

        {/* Landscape Images Row */}
        <div className="mb-16 overflow-x-auto scrollbar-hide">
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div className="flex gap-6 pb-4">
            {cardsData.map((card) => (
              <div
                key={`image-${card.id}`}
                className="w-52 h-60 flex-shrink-0 rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {cardsData.slice(0, 3).map((card, index) => (
            <div
              key={card.id}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-green-600 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}

        </div>
      </div>
      </Container>
    </div>
  );
}