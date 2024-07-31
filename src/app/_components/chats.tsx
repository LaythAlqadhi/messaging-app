import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { fetchChats } from './fetchChats'

async function ChatsUi() {
  const chats = await fetchChats();

  return (
    <nav className="divide-y">
      {chats.map((chat) => (
        <Link
          href="#"
          key={chat.id}
          className="flex items-center gap-3 px-4 py-3 hover:bg-muted"
          prefetch={false}
        >
          <Avatar className="w-10 h-10 border">
            <AvatarImage src={chat.avatar || "/placeholder-user.jpg"} />
            <AvatarFallback>{chat.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 truncate">
            <div className="font-medium">{chat.name}</div>
            <div className="text-sm text-muted-foreground truncate">
              {chat.lastMessage}
            </div>
          </div>
          <div className="text-xs text-muted-foreground">{chat.time}</div>
        </Link>
      ))}
    </nav>
  )
}

export default function Chats({ onChatSelect }) {
  
  return (
    <div className="w-full h-full border-r bg-muted/40 sm:w-64">
      <div className="flex h-14 items-center border-b px-4">
        <h2 className="text-lg font-semibold">Chats</h2>
      </div>
      <div className="flex-1 overflow-auto">
        <ChatsUi />
      </div>
    </div>
  );
}
