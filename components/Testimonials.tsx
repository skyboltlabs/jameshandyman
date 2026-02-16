
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner in Sea Point",
    content: "James did an incredible job with our kitchen renovation. He was professional, always on time, and the quality of his workmanship is outstanding. It's hard to find such reliable service in Cape Town.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael van Wyk",
    role: "Property Manager",
    content: "Reliable, professional, and honest. James is now our go-to handyman for all our property maintenance. He fixed a plumbing leak that three others couldn't solve. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "Thandi Gumede",
    role: "Resident in Constantia",
    content: "The waterproofing work on our roof was top-notch. No more leaks even after the heavy winter rains. The painting team was also very neat and finished earlier than expected.",
    rating: 5
  },
  {
    id: 4,
    name: "Peter Ross",
    role: "Business Owner",
    content: "James understands quality. His carpentry work on our custom office shelving was flawless. He's meticulous and treats the workspace with great respect.",
    rating: 4
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 mb-4">What Our Clients Say</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          We take pride in our work and our reputation. Here's what some of our valued clients in Cape Town have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">
              <StarRating rating={testimonial.rating} />
            </div>
            
            <p className="text-slate-700 italic mb-8 flex-grow">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4 border border-blue-200">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          Rated 4.9/5 by over 200+ clients
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
