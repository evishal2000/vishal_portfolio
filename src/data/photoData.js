export const photographerInfo = {
  name: "Vishal Elaka",
  title: "Visual Storyteller",
  tagline:
    "Capturing authentic moments and raw emotions through the lens. Specializing in urban landscapes, intimate portraits, and architectural geometry.",
  email: "elakavishal@gmail.com",
  instagram: "lightandlensz",
  instaURL: "https://www.instagram.com/lightandlensz?igsh=aHlwajI2ZXc1eHgz",
  location: "US",
  specialties: [
    "Urban Photography",
    "Portraiture",
    "Architecture",
    "Street Photography",
  ],
  bio: "By day, I architect distributed systems. By night, I chase light and shadow. My photography explores the intersection of human emotion and urban geometry. Based in the US, available for assignments globally.",
  gear: [
    "Sony A7R V",
    "Sony 24-70mm GM II",
    "Sony 85mm f/1.4",
    "DJI Mavic 3 Pro",
  ],
  services: [
    {
      title: "Portrait Sessions",
      description:
        "Individual, couple, and family portraits with natural lighting expertise.",
      price: "Starting at $500",
      duration: "2 hours",
    },
    {
      title: "Event Coverage",
      description: "Corporate events, conferences, and private celebrations.",
      price: "Starting at $1,500",
      duration: "Full day",
    },
    {
      title: "Commercial",
      description: "Product photography and brand storytelling for businesses.",
      price: "Custom quote",
      duration: "Project based",
    },
  ],
};

export const photoCategories = [
  { id: "all", name: "All Work", count: 24 },
  { id: "urban", name: "Urban Life", count: 8 },
  { id: "portrait", name: "Portraits", count: 6 },
  { id: "architecture", name: "Architecture", count: 5 },
  { id: "nature", name: "Nature", count: 3 },
  { id: "street", name: "Street", count: 2 },
];

export const photos = [
  {
    id: 1,
    category: "urban",
    src: "/images/photography/urban-1.jpg",
    title: "Midnight in Manhattan",
    location: "New York, USA",
    camera: "Sony A7R V",
    settings: "24mm, f/2.8, 1/60s, ISO 3200",
    description:
      "The city that never sleeps, captured during blue hour. The contrast between warm street lights and cool sky creates a cinematic atmosphere.",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    category: "portrait",
    src: "/images/photography/portrait-1.jpg",
    title: "Golden Hour Contemplation",
    location: "San Francisco, USA",
    camera: "Sony A7R V",
    settings: "85mm, f/1.4, 1/500s, ISO 100",
    description:
      "Natural light portrait during the golden hour. The subject lost in thought against the Pacific backdrop.",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    category: "architecture",
    src: "/images/photography/arch-1.jpg",
    title: "Geometric Harmony",
    location: "Dubai, UAE",
    camera: "Sony A7R V",
    settings: "16mm, f/8, 1/200s, ISO 100",
    description:
      "The Museum of the Future, exploring the intersection of traditional Islamic geometry and futuristic design.",
    featured: true,
    year: "2023",
  },
  {
    id: 4,
    category: "street",
    src: "/images/photography/street-1.jpg",
    title: "Monsoon Market",
    location: "Mumbai, India",
    camera: "Sony A7R V",
    settings: "35mm, f/2.0, 1/250s, ISO 800",
    description:
      "Candid street photography during monsoon season. The rain creates natural reflections and mood.",
    featured: false,
    year: "2023",
  },
  {
    id: 5,
    category: "nature",
    src: "/images/photography/nature-1.jpg",
    title: "Alpine Awakening",
    location: "Swiss Alps",
    camera: "Sony A7R V",
    settings: "70mm, f/5.6, 1/125s, ISO 200",
    description:
      "First light hitting the Matterhorn. Woke up at 4 AM for this shot, absolutely worth it.",
    featured: true,
    year: "2024",
  },
  {
    id: 6,
    category: "urban",
    src: "/images/photography/urban-2.jpg",
    title: "Neon Dreams",
    location: "Tokyo, Japan",
    camera: "Sony A7R V",
    settings: "35mm, f/1.4, 1/125s, ISO 1600",
    description:
      "Shinjuku at night. The cyberpunk aesthetic of Tokyo is unmatched.",
    featured: false,
    year: "2023",
  },
];

export const clientTestimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director, TechCorp",
    text: "Vishal captured our company retreat beautifully. His ability to catch candid moments while maintaining a professional aesthetic was impressive.",
    image: "/images/clients/sarah.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "Architect, Johnson & Associates",
    text: "The architectural photography exceeded our expectations. He understands light and geometry in a way that showcases our designs perfectly.",
    image: "/images/clients/marcus.jpg",
  },
];
