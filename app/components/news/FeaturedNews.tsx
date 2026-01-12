'use client';
import { formatNepaliDate } from '@/utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedNewsComponent({
  blog,
  locale,
}: {
  blog: any;
  locale: 'en' | 'np';
}) {
  // Only render if blog exists
  if (!blog) return null;

  return (
    <div className="relative h-[420px] hover:shadow-md rounded-3xl overflow-hidden my-8">
      <Image
        src={blog.featured_image || '/images/news-placeholder.jpg'}
        alt={locale === 'np' ? blog.title_np : blog.title_en}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute bottom-8 left-8 text-white max-w-3xl">
        <span className="inline-block bg-green-500 text-sm px-3 py-1 rounded-full mb-3">
          {locale === 'np' ? blog.category?.name_np : blog.category?.name_en}
        </span>

        <h3 className="text-3xl font-bold mb-3">
          {locale === 'np' ? blog.title_np : blog.title_en}
        </h3>

        <p className="text-sm opacity-80">
          {formatNepaliDate(blog.published_at, locale)}
        </p>

        <Link
          href={`/${locale}/news/${blog.slug}`}
          className="mt-4 text-white font-medium text-sm block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
