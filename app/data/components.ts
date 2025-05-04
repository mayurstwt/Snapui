export type ComponentType = 'all' | 'navbar' | 'hero' | 'bento' | 'contact' | 'footer';

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
      title: 'Glass Navbar Component',
      description: 'Responsive navigation with blur effect, mobile menu, and integrated authentication buttons.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745066611/navone_xmct5f.png',
      previewUrl: '/Navbars/SimpleNavbarOne',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Navbars/SimpleNavbarOne',
    },
    {
      title: 'Cosmos Gradient Navbar',
      description: 'A sleek, gradient-themed navbar with responsive design and interactive mobile menu for seamless navigation.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745066878/logotwo_ogozun.png',
      previewUrl: '/Navbars/SimpleNavbarThree',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Navbars/SimpleNavbarTwo',
    },
    {
      title: 'Minimal Dark Navbar',
      description: 'A sleek, responsive navbar with theme toggle, mobile support, and smooth user experience.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745080661/navthree_cmfzpm.png',
      previewUrl: '/Navbars/SimpleNavbarFour',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Navbars/SimpleNavbarFour',
    },
    {
      title: 'Modern Corporate Navbar',
      description: 'A responsive navbar with contact info, mobile menu, and sleek business branding.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745080789/navfour_ixpfux.png',
      previewUrl: '/Navbars/SimpleNavbarFive',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Navbars/SimpleNavbarFive',
    },
    {
      title: 'Ecommerce Search Navbar',
      description: 'Interactive navbar with search overlay, mobile drawer, and category links for ecommerce sites.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745081578/navfive_ymyrji.png',
      previewUrl: '/Navbars/SimpleNavbarSix',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Navbars/SimpleNavbarSix',
    },
    {
      title: 'Sleek Multi-Level Navbar',
      description: 'A stylish, responsive navbar with animated dropdowns, dark mode, and seamless mobile support.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745081696/navsix_ska7sl.png',
      previewUrl: '/Navbars/SimpleNavbarSeven',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Navbars/SimpleNavbarSeven',
    },
    {
      title: 'Spotify-Inspired Navbar UI',
      description: 'A responsive music app navbar with playlists, search, and sleek mobile drawer.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745081841/navseven_q4zakj.png',
      previewUrl: '/Navbars/SimpleNavbarNine',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Navbars/SimpleNavbarNine',
    },
  ],
  hero: [
    {
      title: 'Simple Hero Section',
      description: 'Beautiful gradient background with compelling CTA.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079659/Screenshot_from_2025-04-19_21-47-42_q9wmiv.png',
      previewUrl: '/Heros/SimpleHeroFour',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/SimpleHeroFour',
    },
    {
      title: 'Simple Hero Section',
      description: 'Split-screen layout with image and content.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079657/Screenshot_from_2025-04-19_21-47-46_cnbtzl.png',
      previewUrl: '/Heros/SimpleHeroFive',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/SimpleHeroFive',
    },
    {
      title: 'Eco-Friendly Hero Section',
      description: 'Split-screen layout with image and content.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079659/Screenshot_from_2025-04-19_21-47-52_j9apwg.png',
      previewUrl: '/Heros/EcoFriendlyHero',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/EcoFriendlyHero',
    },
    {
      title: 'Ecommerce Hero Section',
      description: 'Split-screen layout with image and content.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079659/Screenshot_from_2025-04-19_21-47-56_olsijd.png',
      previewUrl: '/Heros/EcommerceHero',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/EcommerceHero',
    },
    {
      title: 'Gaming Hero Section',
      description: 'Simple hero with a background image.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079658/Screenshot_from_2025-04-19_21-47-58_ppmops.png',
      previewUrl: '/Heros/GamingHero',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/GamingHero',
    },
    {
      title: 'Restaurant Hero Section',
      description: 'Simple hero with a background image.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079658/Screenshot_from_2025-04-19_21-50-28_qj9ibi.png',
      previewUrl: '/Heros/RestaurantHero',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/RestaurantHero',
    },
    {
      title: 'Saas Hero Section',
      description: 'Simple hero with a background image.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079660/Screenshot_from_2025-04-19_21-50-30_yx9bsl.png',
      previewUrl: '/Heros/SaasHero',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/SaasHero',
    },
    {
      title: 'Travel Hero Section',
      description: 'Simple hero with a background image.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079660/Screenshot_from_2025-04-19_21-50-34_z8wldz.png',
      previewUrl: '/Heros/TravelHero',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/TravelHero',
    },
    {
      title: 'Wellness Hero Section',
      description: 'Split-screen layout with image and content.',
      image: 'https://res.cloudinary.com/damr9jzpb/image/upload/v1745079661/Screenshot_from_2025-04-19_21-50-36_kudwjw.png',
      previewUrl: '/Heros/WellnessHero',
      sourceUrl: 'https://github.com/mayurstwt/Snapui/tree/main/app/Heros/WellnessHero',
    }
  ],
  bento: [
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