"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface NavLinksProps {
  className?: string
  onClick?: () => void
}

export function NavLinks({ className = "", onClick }: NavLinksProps) {
  const links = ["About Us", "Services", "Project", "Blog"]
  const pathname = usePathname()

  // Fungsi untuk mengubah teks menjadi URL yang sesuai
  const getUrl = (text: string) => {
    return `/${text.toLowerCase().replace(/\s+/g, "-")}`
  }

  // Fungsi untuk memeriksa apakah link aktif
  const isActive = (link: string) => {
    const url = getUrl(link)
    return pathname === url
  }

  return (
    <div className={className}>
      {links.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative"
        >
          <Link
            href={getUrl(item)}
            className={`text-sm font-medium transition-colors ${
              isActive(item) 
                ? "text-[#5AC2F7]" 
                : "hover:text-[#5AC2F7]"
            }`}
            onClick={onClick}
          >
            {item}
            {isActive(item) && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-[-6px] left-0 h-[2px] bg-[#5AC2F7]"
              />
            )}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}