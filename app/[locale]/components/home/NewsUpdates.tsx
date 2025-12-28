import Image from "next/image";
import Container from '../layout/Container';

export default function NewsUpdates() {
    return (
        <Container className="py-20">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-blue-600 font-semibold text-3xl">
                    News & Updates
                </h2>
                <button className="text-gray-400 text-sm hover:text-gray-600">
                    View All
                </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* LEFT FEATURED CARD */}
                <div className="relative rounded-lg overflow-hidden h-[320px]">
                    <Image
                        src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5"
                        alt="News"
                        width={400}
                        height={180}
                        className="object-cover object-top w-full h-full"
                    />

                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-600/90 p-4">
                        <h3 className="text-white font-semibold text-base mb-1">
                            डिजिटल परिवर्तन र जागरूकता आधारित...
                        </h3>
                        <p className="text-white text-xs">
                            Mangsir 14, 2060
                        </p>
                    </div>
                </div>

                {/* RIGHT LIST */}
                <div className="md:col-span-2 space-y-6">
                    {[1, 2].map((item) => (
                        <div key={item} className="flex gap-4">
                            {/* Thumbnail */}
                            <div className="w-24 h-20 flex-shrink-0 rounded-md overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5"
                                    alt="Thumbnail"
                                    width={120}
                                    height={80}
                                    className="object-cover object-top w-full h-full"
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <h4 className="text-green-600 font-medium text-base mb-1">
                                    डिजिटल परिवर्तन र जागरूकता आधारित...
                                </h4>
                                <p className="text-gray-400 text-xs mb-1">
                                    Mangsir 14, 2060
                                </p>
                                <p className="text-gray-500 text-sm leading-snug">
                                    जनताले पाएको सेवाको मूल स्वरूप भनेको जनताको विश्वास जित्ने,
                                    नयाँ राजनीतिक संस्कार स्थापित गर्ने र जनअनुसार राज्य सञ्चालन गर्न
                                    सक्षम नेतृत्व तयार गर्नु हो।
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
