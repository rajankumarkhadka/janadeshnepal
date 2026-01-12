// src/hooks/useBlogs.ts
import { useQuery } from '@tanstack/react-query';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
if (!API_BASE) throw new Error('NEXT_PUBLIC_API_BASE is not defined');

async function fetchBlogs(locale: 'en' | 'np') {
  const res = await fetch(`${API_BASE}/blogs?lang=${locale}`);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  const data = await res.json();

  // ✅ normalize paginated response
  return Array.isArray(data.results) ? data.results : [];
}

export function useBlogs(locale: 'en' | 'np') {
  return useQuery({
    queryKey: ['blogs', locale],
    queryFn: () => fetchBlogs(locale),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30,
  });
}
