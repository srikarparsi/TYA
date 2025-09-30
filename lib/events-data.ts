export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  location: string;
  status: 'upcoming' | 'past';
  images: string[];
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// Sample event data - replace with real data later
export const sampleEvents: Event[] = [
  {
    id: '1',
    slug: 'telugu-cultural-festival-2024',
    title: 'Telugu Cultural Festival 2024',
    shortDescription: 'A celebration of Telugu heritage and traditions',
    description: 'Join us for an incredible evening celebrating Telugu culture, featuring traditional dance performances, music, authentic cuisine, and cultural exhibitions. This event brought together over 500 members of our community.',
    date: '2024-03-15',
    location: 'Dallas Convention Center, Dallas, TX',
    status: 'past',
    images: [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=4',
      'https://picsum.photos/800/600?random=5'
    ],
    testimonials: [
      {
        id: '1',
        name: 'Priya Sharma',
        role: 'Community Member',
        content: 'This was an absolutely amazing event! The cultural performances were breathtaking and it felt so good to connect with my Telugu roots. The organization was flawless.',
        rating: 5
      },
      {
        id: '2', 
        name: 'Ravi Kumar',
        role: 'Parent',
        content: 'My children loved the cultural exhibitions and learned so much about our heritage. This event really brought our community together. Thank you TYA!',
        rating: 5
      },
      {
        id: '3',
        name: 'Lakshmi Reddy',
        role: 'Volunteer',
        content: 'Being part of organizing this event was such a rewarding experience. Seeing families come together and celebrate our culture was truly heartwarming.',
        rating: 5
      }
    ]
  },
  {
    id: '2',
    slug: 'youth-leadership-summit',
    title: 'Youth Leadership Summit',
    shortDescription: 'Empowering the next generation of Telugu leaders',
    description: 'An inspiring day-long summit focused on leadership development, career guidance, and networking opportunities for Telugu youth across America.',
    date: '2024-01-20',
    location: 'Austin Community Center, Austin, TX',
    status: 'past',
    images: [
      'https://picsum.photos/800/600?random=6',
      'https://picsum.photos/800/600?random=7',
      'https://picsum.photos/800/600?random=8'
    ],
    testimonials: [
      {
        id: '4',
        name: 'Arjun Patel',
        role: 'College Student',
        content: 'The mentorship opportunities and networking at this summit were incredible. I made connections that will help me throughout my career.',
        rating: 5
      },
      {
        id: '5',
        name: 'Meera Chandra', 
        role: 'Young Professional',
        content: 'As a young professional, this summit gave me valuable insights into leadership and how to give back to our community.',
        rating: 4
      }
    ]
  },
  {
    id: '3',
    slug: 'spring-networking-mixer-2025',
    title: 'Spring Networking Mixer 2025',
    shortDescription: 'Connect with Telugu professionals and entrepreneurs',
    description: 'An exciting networking opportunity for Telugu professionals, entrepreneurs, and students. Join us for an evening of meaningful connections and community building.',
    date: '2025-04-15',
    location: 'Houston Business District, Houston, TX',
    status: 'upcoming',
    images: [
      'https://picsum.photos/800/600?random=9'
    ],
    testimonials: []
  }
];

export function getEventBySlug(slug: string): Event | undefined {
  return sampleEvents.find(event => event.slug === slug);
}

export function getEventsByStatus(status: 'upcoming' | 'past'): Event[] {
  return sampleEvents.filter(event => event.status === status);
}
