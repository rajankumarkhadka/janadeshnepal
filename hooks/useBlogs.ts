// src/hooks/useBlogs.ts
import { useQuery } from '@tanstack/react-query';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
if (!API_BASE) throw new Error('NEXT_PUBLIC_API_BASE is not defined');

export async function fetchBlogs(locale: 'en' | 'np') {
  const res = await fetch(`${API_BASE}/blogs?lang=${locale}`);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
}

export async function fetchFeaturedBlog(locale: 'en' | 'np') {
  const res = await fetch(`${API_BASE}/blogs?lang=${locale}`);
  if (!res.ok) throw new Error('Failed to fetch featured blog');
  return res.json();
}

export function useBlogs(locale: 'en' | 'np') {
  return useQuery({
    queryKey: ['blogs', locale],
    queryFn: () => fetchBlogs(locale),
  });
}

export function useFeaturedBlog(locale: 'en' | 'np') {
  return useQuery({
    queryKey: ['featuredBlog', locale],
    queryFn: () => fetchFeaturedBlog(locale),
  });
}
