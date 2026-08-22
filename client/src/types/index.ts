export interface Project {
  _id?: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  role: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  featured?: boolean;
  index: number;
}

export interface Experience {
  _id?: string;
  year: string;
  role: string;
  company: string;
  description: string;
  index: number;
}

export interface Testimonial {
  _id?: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}
