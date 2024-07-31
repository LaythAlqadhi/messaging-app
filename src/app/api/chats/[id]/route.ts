import { NextResponse } from 'next/server'

const fakeChat = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    initials: "JD",
    status: "Online",
    messages: [
      {
        text: "Hey, how are you?",
        time: "10:30 AM",
        isOwn: false,
      },
      {
        text: "I'm good, thanks! How about you?",
        time: "10:32 AM",
        isOwn: true,
      },
      {
        text: "Doing well, just working on some projects.",
        time: "10:33 AM",
        isOwn: false,
      },
      {
        text: "That sounds great!",
        time: "10:34 AM",
        isOwn: true,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://via.placeholder.com/150",
    initials: "JS",
    status: "Offline",
    messages: [
      {
        text: "Let's meet up later.",
        time: "9:45 AM",
        isOwn: false,
      },
      {
        text: "Sure, what time works for you?",
        time: "9:46 AM",
        isOwn: true,
      },
      {
        text: "How about 6 PM?",
        time: "9:47 AM",
        isOwn: false,
      },
      {
        text: "Perfect, see you then!",
        time: "9:48 AM",
        isOwn: true,
      },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "https://via.placeholder.com/150",
    initials: "BJ",
    status: "Busy",
    messages: [
      {
        text: "Got the documents, thanks!",
        time: "8:20 AM",
        isOwn: false,
      },
      {
        text: "You're welcome. Let me know if you need anything else.",
        time: "8:21 AM",
        isOwn: true,
      },
      {
        text: "Will do!",
        time: "8:22 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 4,
    name: "Alice Brown",
    avatar: "https://via.placeholder.com/150",
    initials: "AB",
    status: "Away",
    messages: [
      {
        text: "See you tomorrow.",
        time: "Yesterday",
        isOwn: false,
      },
      {
        text: "Looking forward to it!",
        time: "Yesterday",
        isOwn: true,
      },
    ],
  },
  {
    id: 5,
    name: "Charlie Davis",
    avatar: "https://via.placeholder.com/150",
    initials: "CD",
    status: "Online",
    messages: [
      {
        text: "Call me when you can.",
        time: "Monday",
        isOwn: false,
      },
      {
        text: "Will do, just a bit busy right now.",
        time: "Monday",
        isOwn: true,
      },
    ],
  },
];

export function GET({ params }: { params: { id: string }}) {
  const data = fakeChat[1]
  
  return NextResponse.json({ data });
}
