"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "next-intl";
import { timelineData } from "@/data/timeline";

export default function Timeline() {
  const locale = useLocale() as "en" | "np";

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-28">
      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 hidden lg:block" />

      <div className="space-y-32">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            locale={locale}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ item, reverse, locale }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative flex flex-col lg:flex-row items-center justify-between ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* DOT */}
      <span className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#2772b0] rounded-full border-4 border-white shadow-md hidden lg:block" />

      {/* IMAGE */}
      <motion.div
        style={{ y }}
        className="relative w-full lg:w-[480px] h-[320px] rounded-3xl overflow-hidden shadow-xl"
      >
        <Image
          src={item.image}
          alt={item.title[locale]}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* TEXT */}
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-[500px] mt-8 lg:mt-0 lg:mx-8">
        <span className="text-gray-400 text-sm">{item.year}</span>

        <h3 className="text-3xl text-[#2772b0] font-bold mt-2">
          {item.title[locale]}
        </h3>

        <p className="text-gray-600 text-base font-medium mt-2 leading-relaxed">
          {item.description[locale]}
        </p>
      </div>
    </motion.div>
  );
}
