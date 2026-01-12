const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

if (!API_BASE) {
  throw new Error('NEXT_PUBLIC_API_BASE is not defined');
}

export async function fetchLeadership(locale: 'en' | 'np') {
  const res = await fetch(`${API_BASE}/leadership?lang=${locale}`);

  if (!res.ok) {
    throw new Error('Failed to fetch leadership data');
  }

  return res.json();
}
