'use client';
import Image from 'next/image';
import Container from '../layout/Container';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

type ImageItem = {
  id: number;
  image: string;
  caption: string;
};

type AboutMovementItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  images: ImageItem[];
};

type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: AboutMovementItem[];
};

const fetchAboutMovement = async (): Promise<AboutMovementItem | null> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/about-movement/`
  );
  if (!res.ok) throw new Error('Failed to fetch');
  const data: ApiResponse = await res.json();
  return data.results?.[0] ?? null;
};

export default function AboutMovement() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['about-movement'],
    queryFn: fetchAboutMovement,
  });

  if (isLoading) return null;
  if (isError || !data) return null;

  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-12">
      <Container>
       <div
  className="
    mb-10
    overflow-x-auto
    scrollbar-hide
  "
>
  <div
    className="
      grid grid-flow-col auto-cols-[160px]
      sm:grid-flow-row sm:grid-cols-3
      lg:grid-cols-5
      gap-6
      pb-4
    "
  >
    {icons.map((item, idx) => (
      <div
        key={idx}
        className="
          flex flex-col items-center justify-center
          rounded-2xl bg-gray-50 py-10
          transition duration-300 hover:shadow-md
          min-w-[140px]
        "
      >
        <Image
          src={item.icon}
          alt={item.title}
          width={54}
          height={54}
        />
        <p className="mt-4 text-base font-medium text-blue-600 text-center">
          {item.title}
        </p>
      </div>
    ))}
  </div>
</div>


         <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold text-blue-600">
          {data.title}
        </h1>
        <button className="text-gray-400 hover:text-gray-600 font-medium">
          View More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* TEXT */}
        <div className="md:col-span-1">
          <p className="text-base text-gray-700 leading-relaxed">
            {data.subtitle}
          </p>
          <br />
          <p className="text-base text-gray-700 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* PHOTOS */}
        <div className="md:col-span-2">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
            {data.images.map((img) => (
              <div
                key={img.id}
                className="flex-shrink-0 w-[260px] h-64 rounded-lg overflow-hidden transition hover:shadow-md"
              >
                <img
                  src={img.image}
                  alt={img.caption || 'About movement'}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
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