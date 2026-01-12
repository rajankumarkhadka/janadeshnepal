import { useQuery } from '@tanstack/react-query';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
if (!API_BASE) throw new Error('NEXT_PUBLIC_API_BASE is not defined');

export async function fetchValues() {
  const res = await fetch(`${API_BASE}/services/`); // <-- append /services/
  if (!res.ok) {
    console.error('API Error:', res.status, await res.text());
    throw new Error('Failed to fetch core values');
  }
  return res.json();
}

export function useValues() {
  return useQuery({
    queryKey: ['values'],
    queryFn: fetchValues,
    staleTime: 1000 * 60 * 1, // 1 min cache
    refetchOnWindowFocus: true, // refresh when tab gets focus
  });
}
