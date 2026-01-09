import { apiClient } from '@/lib/api/client';

export const blogService = {
  getAll: () => apiClient<any[]>('/blogs/'),
};
