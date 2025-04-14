export type ComponentType = 'all' | 'navbar' | 'hero' | 'about' | 'contact' | 'footer';

interface Component {
  title: string;
  description: string;
  image: string;
  previewUrl: string;
  sourceUrl: string;
}

export const components: Record<Exclude<ComponentType, 'all'>, Component[]> = {
  navbar: [
    {
      title: 'Simple Navigation',
      description: 'A clean and minimal navigation bar with responsive menu.',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800',
      previewUrl: '/Navbars/SimpleNavigation',
      sourceUrl: '#',
    },
    {
      title: 'Enterprise Nav',
      description: 'Feature-rich navigation with dropdowns and search.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
    {
      title: 'Modern Header',
      description: 'Contemporary design with smooth animations.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
  ],
  hero: [
    {
      title: 'Gradient Hero',
      description: 'Beautiful gradient background with compelling CTA.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
    {
      title: 'Split Hero',
      description: 'Split-screen layout with image and content.',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
  ],
  about: [
    {
      title: 'Team Grid',
      description: 'Display your team members in a responsive grid.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
    {
      title: 'Story Timeline',
      description: 'Share your company story with an interactive timeline.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
  ],
  contact: [
    {
      title: 'Simple Contact',
      description: 'Clean contact form with validation.',
      image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
    {
      title: 'Map Contact',
      description: 'Contact form with integrated map.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
  ],
  footer: [
    {
      title: 'Simple Footer',
      description: 'Minimal footer with essential links.',
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
    {
      title: 'Mega Footer',
      description: 'Comprehensive footer with multiple sections.',
      image: 'https://images.unsplash.com/photo-1462206092226-f46025ffe607?auto=format&fit=crop&q=80&w=800',
      previewUrl: '#',
      sourceUrl: '#',
    },
  ],
};