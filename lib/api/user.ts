import { NextResponse } from "next/server"

// Export the dummy data so it can be imported directly
export const users = [
  {
    id: "1",
    name: "Jane Doe",
    avatar: "/profile/pfp.avif",
  },
  {
    id: "2",
    name: "John Smith",
    avatar: "/profile/pfp.avif",
  },
  {
    id: "3",
    name: "Alice Johnson",
    avatar: "/profile/pfp.avif",
  },
  {
    id: "4",
    name: "Bob Brown",
    avatar: "/profile/pfp.avif",
  },
]

export async function GET() {
  return NextResponse.json({ users })
}

