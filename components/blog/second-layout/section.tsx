"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { type BlogPost, getBlogPostsGroupedByCategory, titleToSlug  } from "@/lib/api/blog"

interface CategoryBadgeProps {
  category: string
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  // Set once to false to make animation replay when scrolling back
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 transform",
        shouldAnimate ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
      )}
    >
      <Badge
        variant="outline"
        className="rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
      >
        <Star className="w-3.5 h-3.5 mr-1.5 fill-yellow-400 stroke-yellow-500" />
        {category}
      </Badge>
    </div>
  )
}

interface BlogCardProps {
  post: BlogPost
  index: number
}

function BlogCard({ post, index }: BlogCardProps) {
  // Set once to false to make animation replay when scrolling back
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  // Calculate delay based on index (0.1s between each card)
  const delay = `${0.1 + index * 0.1}s`

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-600 transform h-full",
        "transition-delay-[var(--delay)]",
        shouldAnimate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
      style={{ "--delay": delay } as React.CSSProperties}
    >
      <Card className="overflow-hidden border border-border/40 hover:border-border/80 transition-colors h-full">
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative">
            <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </CardHeader>
        <CardContent className="p-5 space-y-4">
          <div className="space-y-3">
            <Badge variant="outline" className="rounded-full px-3 py-0.5 text-xs border-border/60">
              {post.category}
            </Badge>
            <h3 className="font-semibold text-lg md:text-xl">{post.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <Button variant="link" className="px-0 text-primary" asChild>
          <Link href={`/blog/${titleToSlug(post.title)}`}>

              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

interface HeadingProps {
  children: React.ReactNode
}

function AnimatedHeading({ children }: HeadingProps) {
  // Set once to false to make animation replay when scrolling back
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-800 delay-100 transform",
        shouldAnimate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
    >
      {children}
    </div>
  )
}

interface CategorySectionProps {
  category: string
  posts: BlogPost[]
  isFirst?: boolean
}

function CategorySection({ category, posts, isFirst = false }: CategorySectionProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <CategoryBadge category={category} />
        {isFirst ? (
          <AnimatedHeading>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Protecting Your Digital World with Cutting-Edge Security
            </h1>
          </AnimatedHeading>
        ) : (
          <AnimatedHeading>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Latest in {category}</h2>
          </AnimatedHeading>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  )
}

export function BlogSection() {
  const groupedPosts = getBlogPostsGroupedByCategory()
  const categories = Object.keys(groupedPosts)

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-20">
          {categories.map((category, index) => (
            <CategorySection key={category} category={category} posts={groupedPosts[category]} isFirst={index === 0} />
          ))}
        </div>
      </Container>
    </section>
  )
}

