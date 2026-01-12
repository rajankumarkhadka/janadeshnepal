import { useQuery } from '@tanstack/react-query';
import { fetchLeadership } from '@/lib/leadership';

export function useLeadership(locale: 'en' | 'np') {
  return useQuery({
    queryKey: ['leadership', locale],
    queryFn: async () => {
      const res = await fetchLeadership(locale);

    //   // ✅ normalize API response
    //   if (Array.isArray(res)) return res;
      if (res?.results.length > 0) return res.results;
    //   if (res.data) return res.data;

      return [];
    },
  });
}
