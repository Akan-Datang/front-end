"use client"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 transform",
        shouldAnimate ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
      )}
    >
      <Container>
        <div className="flex flex-wrap gap-2 justify-center py-6">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            className="rounded-full"
            onClick={() => onCategoryChange(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </Container>
    </div>
  )
}

