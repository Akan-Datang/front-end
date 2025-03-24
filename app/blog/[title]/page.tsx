// app/blog/[title]/page.tsx
import { getAllBlogPosts, getBlogPostBySlug, titleToSlug } from "@/lib/api/blog";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react"; // Impor ikon CalendarDays

// Tipe untuk params
type Params = Promise<{ title: string }>;

// Generate metadata untuk SEO
export async function generateMetadata({ params }: { params: Params }) {
  const { title } = await params; // Menggunakan await untuk mengakses params
  const post = getBlogPostBySlug(title);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

}

// Generate static paths
export async function generateStaticParams() {
  const blogPosts = getAllBlogPosts();
  return blogPosts.map((post) => ({
    title: titleToSlug(post.title),
  }));
}

// Komponen halaman blog post
export default async function BlogPostPage({ params }: { params: Params }) {
  const { title } = await params;
  const post = getBlogPostBySlug(title);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden dark:bg-background-dark dark:text-foreground-dark">
        {/* Tombol "Back to Blog" di pojok kanan atas dengan jarak yang cukup */}
        <CardHeader className="p-6 pb-4 flex justify-end">
          <Button variant="outline" size="sm" asChild className="w-fit">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </CardHeader>

        {/* Gambar dengan ukuran yang disesuaikan */}
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative max-h-[400px]">
            <Image
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>

        {/* Konten utama */}
        <CardContent className="p-6 space-y-4">
          {/* Judul dan tanggal */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <CalendarDays className="h-4 w-4" /> {/* Ikon tanggal */}
            <span>{post.date}</span> {/* Teks tanggal */}
          </div>

          {/* Konten blog */}
          <div
            className="prose lg:prose-xl dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </CardContent>
      </Card>
    </div>
  );
}