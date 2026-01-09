export const fetchNews = async () => {
  const res = await fetch(
    'https://janadesh.gowell.edu.np/api/blogs/'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  return res.json();
};
