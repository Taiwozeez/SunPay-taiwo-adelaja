"use client";

import { usePathname } from "next/navigation";
import Header from './components/header';
import Footer from './components/footer';
import FloatingChat from './components/FloatingChat';
import NotificationSystem from './components/NotificationSystem';

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
//   const hideLayout = pathname === '/login';
const hideLayout = ['/login', '/sign-up', '/forgot-password'].includes(pathname);

  return (
    <>
      {/* Hide all layout UI on login page */}
      {!hideLayout && <Header />}
      {!hideLayout && <NotificationSystem />}

      {children}

      {!hideLayout && <Footer />}
      {!hideLayout && <FloatingChat />}
    </>
  );
}
