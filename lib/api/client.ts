const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiClient<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('API request failed');
  }

  return res.json();
}
