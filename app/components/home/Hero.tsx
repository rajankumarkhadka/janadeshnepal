'use client';
import Image from 'next/image';
import Container from '../layout/Container';
import { useEffect, useState } from 'react';

const newsList = [
  'Janadesh party to hold special meeting on 15th Falgun',
  'Central committee meeting concludes in Kathmandu',
  'Youth wing expansion program announced',
  'Policy discussion to be held this weekend',
  'Leadership training program starts tomorrow'
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % newsList.length);
    }, 5000); // 🔥 FAST switch (1.2s)

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className='bg-[#fafafa]  pt-[182px]'></section>
      <section className="relative w-full bg-[#fafafa]">
        <Container className=''>
          <div className="absolute inset-0">
            <Image
              src="/assets/background.jpg"
              alt="Movement"
              fill
              className="object-cover object-bottom"
              priority
            />
            <div className="absolute inset-0 bg-blue-600/85" />
          </div>
          <div className="relative z-10">
            <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[450px] ">
              <div className="text-white py-20">
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
                  Gen-Z नेतृत्वमा उत्तरदायी शासन
                </h1>

                <p className="text-sm lg:text-2xl font-semibold text-blue-100 mb-6 max-w-md">
                  डिजिटल पारदर्शिता र जनमुखी शासनको अभियान
                </p>

                <div className="flex items-center gap-4">
                  <button
                    className="px-6 py-2 rounded-full border-white/60 border bg-green-600  hover:bg-green-800 text-white font-normal shadow-lg  transition duration-300"
                  >
                    <span className="relative z-10">Join Now</span>
                  </button>

                  <button
                    className="px-6 py-2 rounded-full border-white/60 border bg-transparent  hover:bg-white/20 text-white font-normal shadow-lg  transition duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Download Manifesto
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-id="element-124"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>                    </span>
                  </button>
                </div>
              </div>
              <div className="relative   md:flex justify-end">
                <div className="absolute lg:flex hidden  z-10 h-[480px] w-[450px] bg-[#00bf63] rounded-xl -top-[48px] right-0"></div>
                <div className="absolute md:w-[540px] w-[340px] h-[528px] z-50  ">
                  <Image
                    src="/assets/hero_section.png"
                    alt="Leader"
                    fill
                    priority
                    className="lg:object-contain object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
        <div className="relative ">
          <div className="absolute  inset-0 flex items-center">
            <div className='bg-blue-500 w-full mb-[75px]'>
              <Container className=''>
                <div className="flex items-center gap-3 py-7 text-sm text-white transition-all duration-500">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-white/20">
                    📅
                  </span>
                  <span className="animate-fade">
                    {newsList[index]}
                  </span>
                </div>
              </Container>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
