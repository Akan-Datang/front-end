"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-togle"
import { NavLinks } from "./nav-link"
import { MobileMenu } from "./mobile-menu"
import { Container } from "./container"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Star logo that changes color based on theme */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                className="h-6 w-6"
                fill={theme === "dark" ? "white" : "black"}
              >
                <path d="M12 2 L7 7 L2 12 L7 17 L12 22 L17 17 L22 12 L17 7 Z" />
              </svg>
              
              <Image
                src="/landing/Vector 2.png"
                alt="Site Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
              <span className="ml-0 text-xl font-bold">Linea</span>
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
                className={`hidden md:flex
                  ${theme === "dark" 
                    ? "bg-white text-black hover:bg-gray-300" 
                    : "bg-[#5ABEE6] text-white hover:bg-[#4AB1E6]"
                  }`}
              >
                Contact Us
              </Button>
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}