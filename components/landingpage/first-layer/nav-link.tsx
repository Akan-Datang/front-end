"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface NavLinksProps {
  className?: string
  onClick?: () => void
}

export function NavLinks({ className = "", onClick }: NavLinksProps) {
  const links = ["About Us", "Services", "Project", "Story"]

  return (
    <div className={className}>
      {links.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href="#" className="text-sm font-medium hover:text-[#5AC2F7] transition-colors" onClick={onClick}>
            {item}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

