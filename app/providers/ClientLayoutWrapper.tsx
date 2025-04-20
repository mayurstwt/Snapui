'use client';

import { usePathname } from 'next/navigation';
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hiddenRoutePrefixes = ['/Navbars/', '/Footer/', '/Bentos', '/Heros', '/Templates'];

  const shouldHide = hiddenRoutePrefixes.some(prefix => pathname.startsWith(prefix));

  return (
    <>
      {!shouldHide && <NavbarComponent />}
      {children}
      {!shouldHide && <FooterComponent />}
    </>
  );
}
