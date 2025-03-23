'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from './landingpage/first-layer/theme-togle';
import { NavLinks } from './landingpage/first-layer/nav-link';
import { MobileMenu } from './landingpage/first-layer/mobile-menu';
import { Container } from './landingpage/first-layer/container';
import { useTheme } from 'next-themes';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Tentukan logo berdasarkan tema
  const logo = theme === 'dark' ? '/landing/Logo.png' : '/landing/Logo.png';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-24 items-center justify-between">
          {' '}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Site Logo"
                width={200}
                height={80}
                className="h-16 w-auto"
                priority
              />
              <span className="ml-2 text-2xl font-bold">Auriga Sakti Teknologi</span>{' '}
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks className="flex items-center gap-6" />
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                size="sm"
                className="hidden md:flex bg-[#5ABEE6] hover:bg-[#4AB1E6] text-white dark:bg-white dark:text-black dark:hover:bg-gray-300"
              >
                Contact Us
              </Button>
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
