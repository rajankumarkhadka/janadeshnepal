// 'use client';
// import NewsCard from "./NewsCard";
// import { useBlogs } from '@/hooks/useBlogs';

// export default function NewsGrid({params,
// }: {
//   params: { locale: 'en' | 'np' };
// }) {
//   const { data, isLoading } = useBlogs(params.locale);

//   if (isLoading) return <p>Loading...</p>;

 
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-8 gap-6">
//       {data?.map(blog => (
//         <NewsCard key={blog.id}
//           blog={blog}
//           locale={params.locale} />
//       ))}
//     </div>
//   );
// }


