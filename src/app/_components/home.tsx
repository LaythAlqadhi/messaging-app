

import { Suspense } from "react";

import useSwipeNavigate from "@/hooks/useSwipeNavigate";

import Chats from "./chats";
import Chat from "./chat";

export default function Home() {
  //const { ref, style } = useSwipeNavigate();
  const ref = null;
  const style = {
    left: "0"
  }

  const handleChatSelect = (chatId) => {
    //setSelectedChatId(chatId);
  };

  return (
    <div ref={ref} className="flex h-dvh w-full bg-background">
      <Suspense fallback={<div>loading...</div>}>
        <Chats onChatSelect={handleChatSelect} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <Chat chatId={1} style={style} />
      </Suspense>
    </div>
  );
}
