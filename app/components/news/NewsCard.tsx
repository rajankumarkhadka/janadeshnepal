import Image from 'next/image';

export default function NewsCard({ data }: any) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="relative h-48">
        <Image src={data.image} alt={data.title} fill className="object-cover" />
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-blue-600 uppercase">
          {data.category}
        </span>

        <h3 className="font-medium text-lg text-green-600 mt-2">{data.title}</h3>

        <p className="text-sm text-gray-500 mt-2">{data.date}</p>

        <button className="mt-4 text-gray-600 font-medium text-sm">
          Read More →
        </button>
      </div>
    </div>
  );
}
