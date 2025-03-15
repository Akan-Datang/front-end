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
    name: "Jane Doe",
    avatar: "/profile/pfp.avif",
    role: "Business Owner",
    comment: "The team developed a stunning, high-performance website for our business. Their attention to detail and responsiveness made the process smooth and hassle-free. Highly recommended!",
    rating: 5
  },
  {
    id: "2",
    name: "John Smith",
    avatar: "/profile/pfp.avif",
    role: "Business Owner",
    comment: "Our website is now faster, more secure, and much more user-friendly thanks to their expertise.",
    rating: 5
  },
  {
    id: "3",
    name: "Alice Johnson",
    avatar: "/profile/pfp.avif",
    role: "Business Owner",
    comment: "They helped us identify cyber threats and keep our data safe effortlessly.",
    rating: 5
  },
  {
    id: "4",
    name: "Bob Brown",
    avatar: "/profile/pfp.avif",
    role: "Business Owner",
    comment: "Working with this team transformed our online presence. Couldn't be happier with the results.",
    rating: 5
  },
]

export async function GET() {
  return NextResponse.json({ users })
}