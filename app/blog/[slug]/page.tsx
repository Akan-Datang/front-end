import { Container } from "@/components/ui/container"
import { getBlogPostBySlug, titleToSlug, getAllBlogPosts } from "@/lib/api/blog"
import { ArrowLeft, Calendar, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <Container className="max-w-4xl">
        <div className="space-y-8">
          {/* Improved back button with better dark/light mode support */}
          <div>
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="group hover:bg-transparent"
            >
              <Link href="/blog/all-blog" className="flex items-center gap-2 text-foreground dark:text-foreground">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium">Back to all posts</span>
              </Link>
            </Button>
          </div>

          {/* Category badge with animation */}
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className="rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            >
              <Star className="w-3.5 h-3.5 mr-1.5 fill-yellow-400 stroke-yellow-500" />
              {post.category}
            </Badge>
            
            {/* Date with icon */}
            <div className="flex items-center text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1.5" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>

          {/* Post header with improved typography */}
          <div className="space-y-4">
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold",
              "tracking-tight leading-tight md:leading-tight lg:leading-tight",
              "bg-clip-text text-transparent bg-gradient-to-r",
              "from-foreground to-foreground/80 dark:from-foreground dark:to-foreground/80"
            )}>
              {post.title}
            </h1>
          </div>

          {/* Featured image with skeleton loading effect */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted/30 animate-in fade-in duration-500">
            <Image 
              src={post.imageUrl || "/placeholder.svg"} 
              alt={post.title} 
              fill 
              className="object-cover transition-all duration-500 hover:scale-105" 
              priority 
            />
          </div>

          {/* Post content with improved styling */}
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          </article>

          {/* Divider */}
          <hr className="border-border/50 my-8" />
        </div>
      </Container>
    </div>
  )
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: titleToSlug(post.title),
  }))
}