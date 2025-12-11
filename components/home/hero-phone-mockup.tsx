import { ChatBubble } from "./hero-chat-bubble"

const CHAT_MESSAGES = [
  { message: "Hi! How can I help you today?", isUser: false },
  { message: "I need to book an appointment", isUser: true },
  { message: "Great! What date works for you?", isUser: false },
]

export function HeroPhoneMockup() {
  return (
    <div className="relative aspect-[9/16] max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] shadow-2xl shadow-primary/20 border-8 border-slate-700">
        {/* Screen content */}
        <div className="absolute inset-2 bg-slate-950 rounded-[2.5rem] overflow-hidden">
          {/* Chat UI mockup */}
          <div className="h-full flex flex-col p-4 space-y-3">
            {CHAT_MESSAGES.map((chat, index) => (
              <ChatBubble key={index} message={chat.message} isUser={chat.isUser} />
            ))}
            <ChatBubble message="" isTyping />
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-[3rem] blur-2xl -z-10" />
    </div>
  )
}
