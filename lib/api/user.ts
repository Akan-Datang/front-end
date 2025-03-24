import { NextResponse } from "next/server"

// Extended user type with testimonial data
export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
  comment: string;
  rating: number;
}

// Export the dummy data with testimonial information
export const users: User[] = [
  {
    id: "1",
    name: "Michael Thompson",
    avatar: "/user/pfp1.jpeg",
    role: "Startup Founder",
    comment: "Absolutely thrilled with the website redesign! The team was professional, fast, and exceeded our expectations in every way.",
    rating: 5
  },
  {
    id: "2",
    name: "Samantha Lee",
    avatar: "/user/pfp2.jpeg",
    role: "Marketing Director",
    comment: "Their expertise in UX/UI made a huge difference for our e-commerce platform. Sales have noticeably increased since the launch.",
    rating: 5
  },
  {
    id: "3",
    name: "David Chen",
    avatar: "/user/pfp3.jpeg",
    role: "Tech Entrepreneur",
    comment: "Security and performance were our top priorities, and they delivered flawlessly. Highly recommend for any serious business.",
    rating: 5
  },
  {
    id: "4",
    name: "Emily Roberts",
    avatar: "/user/pfp4.jpeg",
    role: "Small Business Owner",
    comment: "From the initial consultation to the final product, the entire experience was seamless. Our customers love the new design!",
    rating: 4
  },
]

export async function GET() {
  return NextResponse.json({ users })
}
