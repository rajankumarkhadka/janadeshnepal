import Image from 'next/image';
import Container from '../layout/Container';

export default function Hero() {
  return (
    <>
    <section className='bg-[#fafafa] pt-12'></section>

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
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[400px] items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white py-20">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Gen-Z नेतृत्वमा उत्तरदायी शासन
            </h1>

            <p className="text-sm lg:text-base text-blue-100 mb-6 max-w-md">
              डिजिटल पारदर्शिता र जनमुखी शासनको अभियान
            </p>

            <div className="flex items-center gap-4">
              <button className="rounded-full bg-green-500 px-6 py-2 text-sm font-medium text-white hover:bg-green-600 transition">
                Join Now
              </button>

              <button className="flex items-center gap-2 rounded-full border border-white/60 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
                Download Manifesto
                <span className="text-xs">⬇</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="relative  lg:flex justify-end">
            <div className="absolute z-50 h-[540px] w-[450px] bg-[#00bf63] rounded-xl -top-12 right-0"></div>
           <div className="relative w-[420px] h-[540px] z-50 overflow-hidden">
  <Image
    src="/assets/partymember.png"
    alt="Leader"
    fill
    priority
    className="object-cover"
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
