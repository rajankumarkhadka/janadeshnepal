import { useQuery } from '@tanstack/react-query';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
if (!API_BASE) throw new Error('NEXT_PUBLIC_API_BASE is not defined');

export async function fetchPolicies() {
  const res = await fetch(`${API_BASE}/policies/`);
  if (!res.ok) throw new Error('Failed to fetch policies');
  return res.json();
}

export function usePolicies() {
  return useQuery({
    queryKey: ['policies'],
    queryFn: fetchPolicies,
    staleTime: 1000 * 60, // 1 minute
    refetchOnWindowFocus: true,
  });
}


export async function fetchPolicyBySlug(slug: string) {
  const res = await fetch(`${API_BASE}/policies/${slug}/`);
  if (!res.ok) throw new Error('Policy not found');
  return res.json();
}