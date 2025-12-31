import Image from "next/image";
import Container from "../layout/Container";

export default function NewsUpdates() {
  return (
    <Container className="py-12">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-blue-600 font-bold text-4xl">News & Updates</h2>
        <button className="text-gray-400 text-sm hover:text-gray-600">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative rounded-lg overflow-hidden h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5"
            alt="News"
            width={400}
            height={400}
            className="object-cover object-top w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E88E5]/90 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white font-bold text-lg mb-1">
              डिजिटल परिवर्तन र जागरूकता आधारित...
            </h3>
            <p className="text-white text-xs">Mangsir 14, 2060</p>
          </div>
        </div>

        <div className=" space-y-6  ">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="
    group flex gap-4 border-b border-gray-200 rounded-lg p-4
    transition-colors duration-500
    hover:bg-gray-200
  "
            >
              <div className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#787e8b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
        lucide lucide-chevron-right
      "
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>

              <div>
                <h4
                  className="
                  text-gray-600
        font-medium text-base mb-1
        transition-colors duration-300
        group-hover:text-green-500
      "
                >
                  डिजिटल परिवर्तन र जागरूकता आधारित...
                </h4>

                <p className="text-gray-400 text-xs mb-1">Mangsir 14, 2060</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
