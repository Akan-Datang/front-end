"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ArrowLeft, Construction, Home } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")

    if (header) header.style.display = "none"
    if (footer) footer.style.display = "none"

    return () => {
      if (header) header.style.display = ""
      if (footer) footer.style.display = ""
    }
  }, [])

  const goBack = () => {
    router.back()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md animate-in fade-in-50 slide-in-from-bottom-8 duration-700 border-2">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Construction className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Site Under Maintenance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 rounded-lg bg-muted p-2 text-sm">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>404 - Page Not Found</span>
          </div>
          <p className="text-muted-foreground">
            We&apos;re currently performing scheduled maintenance on our website. Please check back soon. We apologize for
            any inconvenience.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 sm:flex-row">
          <Button onClick={goBack} className="w-full" variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home Page
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

