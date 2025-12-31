'use client';

import { useLocale } from 'next-intl';
import Container from '../layout/Container';
import Image from 'next/image';

export default function ManifestoPage() {
  const locale = useLocale() as 'en' | 'np';

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[60%_40%] px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-[500px] relative rounded-lg border ">
              <Image
                src={'/assets/mainfesto.png'}
                alt="Manifesto Image 1"
                fill
                className="h-full w-full  object-cover rounded-lg"
              />
            </div>
             <div className="h-[500px] relative rounded-lg border ">
              <Image
                src={'/assets/mainfesto.png'}
                alt="Manifesto Image 1"
                fill
                className="h-full w-full  object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">

            </div>
          
          </div>
      </Container>
    </section>
  );
}
