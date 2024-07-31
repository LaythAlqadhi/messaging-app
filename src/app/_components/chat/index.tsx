import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageForm } from "./form";
import { fetchChat } from "./fetchChat";

async function ChatUi() {
  const chat = await fetchChat(1);
  
  return (
    <>
      <div className="flex h-14 items-center border-b px-4 bg-muted/40">
        <Avatar className="w-10 h-10 border mr-3">
          <AvatarImage src={chat.avatar || "/placeholder-user.jpg"} />
          <AvatarFallback>{chat.initials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{chat.name}</div>
          <div className="text-sm text-muted-foreground">{chat.status}</div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          {chat.messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${message.isOwn ? 'justify-end' : ''}`}
            >
              {!message.isOwn && (
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src={chat.avatar || "/placeholder-user.jpg"} />
                  <AvatarFallback>{chat.initials}</AvatarFallback>
                </Avatar>
              )}
              <div className={`rounded-lg p-3 max-w-[75%] ${message.isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                {!message.isOwn && <div className="font-medium">{chat.name}</div>}
                <div className="text-sm">{message.text}</div>
                <div className={`text-xs mt-1 ${message.isOwn ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {message.time}
                </div>
              </div>
              {message.isOwn && (
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default async function Chat({ chatId, style }: { chatId: string | number; style: { [x: string]: string } }) {
  
  return (
    <div
      style={style}
      className="fixed flex flex-col h-full w-full bg-background z-50 sm:static"
    >
      <ChatUi />
      <div className="border-t bg-muted/40 p-4">
        <MessageForm />
      </div>
    </div>
  );
}
