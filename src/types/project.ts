export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  coverImage: string;
  images: string[];
  client?: string;
  year?: number;
  url?: string;
}
