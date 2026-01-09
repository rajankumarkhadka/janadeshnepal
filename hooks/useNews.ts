import { useQuery } from '@tanstack/react-query';
import { fetchNews} from '@/lib/api/news';

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
};
