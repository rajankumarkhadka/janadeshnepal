import Image from 'next/image';

export default function FeaturedNews({ data }: any) {
  return (
    <div className="relative h-[420px] rounded-3xl overflow-hidden  my-8 ">
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute bottom-8 left-8 text-white max-w-3xl">
        <span className="inline-block bg-green-500 text-sm px-3 py-1 rounded-full mb-3">
          {data.category}
        </span>

        <h3 className="text-3xl font-bold mb-3">{data.title}</h3>

        <p className="text-sm opacity-80">
          {data.date} • {data.readTime}
        </p>
      </div>
    </div>
  );
}
