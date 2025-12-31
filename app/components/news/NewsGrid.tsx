import NewsCard from "./NewsCard";

export default function NewsGrid({ news }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-8 gap-6">
      {news.map((item: any) => (
        <NewsCard key={item.id} data={item} />
      ))}
    </div>
  );
}
