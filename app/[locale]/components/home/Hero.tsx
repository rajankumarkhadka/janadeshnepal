import Image from 'next/image';
import Container from '../layout/Container';

export default function Hero() {
  return (
    <>
    <section className='bg-[#fafafa]  pt-[191px]'></section>

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
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[500px] items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white py-20">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
              Gen-Z नेतृत्वमा उत्तरदायी शासन
            </h1>

            <p className="text-sm lg:text-2xl font-semibold text-blue-100 mb-6 max-w-md">
              डिजिटल पारदर्शिता र जनमुखी शासनको अभियान
            </p>

            <div className="flex items-center gap-4">
              <button
  className="relative h-[50px] w-40 overflow-hidden rounded-full
    border border-green-400 bg-green-600 text-white
    shadow-2xl transition-all

    before:absolute before:inset-x-0 before:top-0 before:h-0 before:bg-green-700
    before:duration-500 before:z-0

    after:absolute after:inset-x-0 after:bottom-0 after:h-0 after:bg-green-700
    after:duration-500 after:z-0

    hover:before:h-2/4 hover:after:h-2/4"
>
  <span className="relative z-10">Join Now</span>
</button>

                <button
  className="relative h-[50px] px-4 overflow-hidden rounded-full
    border border-white/60 bg-transparent text-white
    shadow-2xl transition-all

    before:absolute before:inset-x-0 before:top-0 before:h-0 before:bg-white/30
    before:duration-500 before:z-0

    after:absolute after:inset-x-0 after:bottom-0 after:h-0 after:bg-white/30
    after:duration-500 after:z-0

    hover:before:h-2/4 hover:after:h-2/4"
>
  <span className="relative z-10 flex items-center gap-2">
    Download Manifesto
    <span className="text-xs">⬇</span>
  </span>
</button>

            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="relative  lg:flex justify-end">
            <div className="absolute z-10 h-[480px] w-[450px] bg-[#00bf63] rounded-xl -top-12 right-0"></div>
           <div className="relative w-[540px] h-[500px] z-50  ">
            <Image
              src="/assets/hero_section.png"
              alt="Leader"
              fill
              priority
              className="object-contain"
            />
          </div>


          </div>
        </div>
      </div>
    </Container>
    <div className="relative ">
      <div className="absolute inset-0 flex items-center">
      <Container className='bg-blue-500 min-w-full mx-auto mb-[75px]'>
        <div className='max-w-[1240px] mx-auto'>
          <div className="flex items-center gap-3 py-7 text-sm text-white">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-white/20">
              📅
            </span>
            <span>
              Janadesh party to hold special meeting on 15<sup>th</sup> Falgun
            </span>
          </div>
        </div>
      </Container>
      </div>
    </div>
    </section>
    </>
  );
}
