import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { StatsCard } from "./stats-card"
import { users } from "@/lib/api/user"

export function HwoWeAre() {
  // Get first 2 users for the clients card
  const clientUsers = users.slice(0, 4)


  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
            ⭐ About Us
          </div>
          <h1 className="mt-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl">Who We Are & What We Do</h1>

          <div className="mt-16 grid w-full gap-8 lg:grid-cols-2">
            {/* Left Column */}
            <div className="flex flex-col">
              <div className="border-b pb-6">
                <p className="text-lg text-muted-foreground">
                  We specialize in website development and cyber security, helping businesses grow with secure,
                  high-performing digital solutions. From stunning websites to top-tier protection, we ensure your
                  success in the digital world.
                </p>
              </div>
              <Button
                className="mt-8 self-start bg-[#5CC1E0] text-white hover:bg-[#4BA8C7] dark:bg-white dark:text-black dark:hover:bg-gray-300"
                size="lg"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right Column */}
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
              <StatsCard
                title="Clients"
                description="100+ Happy Clients Worldwide"
                images={clientUsers.map((user) => user.avatar)}
              />

              <StatsCard title="Project" description="100+ Projects Completed" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

