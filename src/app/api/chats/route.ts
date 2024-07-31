import { NextResponse } from 'next/server'

const fakeChats = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    initials: "JD",
    lastMessage: "Hey, how are you?",
    time: "10:30 AM",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "",
    initials: "JS",
    lastMessage: "Let's meet up later.",
    time: "9:45 AM",
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "https://via.placeholder.com/150",
    initials: "BJ",
    lastMessage: "Got the documents, thanks!",
    time: "8:20 AM",
  },
  {
    id: 4,
    name: "Alice Brown",
    avatar: "",
    initials: "AB",
    lastMessage: "See you tomorrow.",
    time: "Yesterday",
  },
  {
    id: 5,
    name: "Charlie Davis",
    avatar: "https://via.placeholder.com/150",
    initials: "CD",
    lastMessage: "Call me when you can.",
    time: "Monday",
  },
];

export function GET() {
  return NextResponse.json({ data: fakeChats });
}
