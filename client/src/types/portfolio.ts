export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  message: string;
  image?: string;
}

export interface Profile {
  name: string;
  role: string;
  shortBio: string;
  email: string;
  location?: string;
  avatar?: string;
}