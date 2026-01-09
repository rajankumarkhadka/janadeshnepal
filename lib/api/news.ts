// lib/api/blogs.ts (or blogs.js)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://janadesh.gowell.edu.np';

export interface Blog {
  id: number;
  title_en: string;
  title_np: string;
  slug: string;
  excerpt_en: string;
  excerpt_np: string;
  featured_image: string;
  category: {
    id: number;
    name_en: string;
    name_np: string | null;
    slug: string;
    description_en: string;
    description_np: string;
  };
  tags: any[];
  author: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
  };
  status: string;
  is_featured: boolean;
  view_count: number;
  published_at: string | null;
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // or 'force-cache' depending on your needs
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${slug}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
}