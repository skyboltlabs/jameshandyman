
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  subServices: string[];
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
