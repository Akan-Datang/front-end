"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NavLinks } from "./nav-link"
import { Container } from "./container"
import { useRouter } from "next/navigation"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const route = useRouter(); 
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Container>
            <div className="py-4 flex flex-col gap-4">
              <NavLinks className="flex flex-col gap-2" onClick={onClose} />
              <Button onClick={()=>route.push('/services#contact-section')} size="sm" className="bg-[#5AC2F7] hover:bg-[#4AB1E6] text-white w-full mt-2">
                Contact Us
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

