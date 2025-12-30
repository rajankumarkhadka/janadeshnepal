"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2019",
    title: "Foundation",
    description:
      "The movement was founded with a clear vision to serve the people and address key social issues that were ignored.",
    image: "/assets/timeline.webp",
  },
  {
    year: "2021",
    title: "Expansion",
    description:
      "Through grassroots efforts, we reached people across multiple regions, establishing a strong support base.",
    image: "/assets/timeline.webp",
  },
  {
    year: "2024",
    title: "Leadership",
    description:
      "New leadership took charge, executing strategies that brought national presence and amplified our voice.",
    image: "/assets/timeline.webp",
  },
];

export default function Timeline() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-28">
      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 hidden lg:block" />

      <div className="space-y-32">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ item, reverse }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax for image
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative flex flex-col lg:flex-row items-center justify-between  ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* RED DOT */}
      <span className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#2772b0] rounded-full border-4 border-white shadow-md hidden lg:block" />

      {/* IMAGE CARD */}
      <motion.div
        style={{ y }}
        className="relative w-full lg:w-[480px] h-[320px] rounded-3xl overflow-hidden shadow-xl"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* TEXT CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-[500px] mt-8 lg:mt-0 lg:mx-8">
        <span className="text-gray-400 text-sm">{item.year}</span>
        <h3 className="text-3xl text-[#2772b0] font-bold mt-2">{item.title}</h3>
        <p className="text-gray-600 text-base font-medium mt-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
