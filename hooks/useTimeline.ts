// src/hooks/useTimeline.ts
import { useQuery } from '@tanstack/react-query';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
if (!API_BASE) throw new Error('NEXT_PUBLIC_API_BASE is not defined');

export async function fetchTimeline() {
  const res = await fetch(`${API_BASE}/timeline/`); // API endpoint
  if (!res.ok) throw new Error('Failed to fetch timeline data');
  return res.json();
}

export function useTimeline() {
  return useQuery({
    queryKey: ['timeline'],
    queryFn: fetchTimeline,
    staleTime: 1000 * 60, // 1 minute cache
    refetchOnWindowFocus: true,
  });
}
