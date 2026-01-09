const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function fetchBlogBySlug(slug: string, locale: 'en' | 'np') {
  const res = await fetch(`${API_BASE}/blogs/${slug}?lang=${locale}`);

  if (!res.ok) throw new Error('Failed to fetch blog');
  return res.json();
}

// Example: fetch all blogs
export async function fetchAllBlogs(locale: 'en' | 'np') {
  const res = await fetch(`${API_BASE}/blogs?lang=${locale}`);

  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
}
