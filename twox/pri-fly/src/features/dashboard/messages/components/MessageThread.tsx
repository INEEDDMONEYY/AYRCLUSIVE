import type { Conversation } from "../types";

interface MessageThreadProps {
  conversation: Conversation;
}

export default function MessageThread({ conversation }: MessageThreadProps) {
  return (
    <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
      {conversation.messages.map((message) => {
        // Anything not sent by the other participant is assumed to be the signed-in user's own message.
        const isOwn = message.senderId !== conversation.participant.id;
        return (
          <div key={message.id} className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] rounded-xl px-4 py-2 text-sm ${
                isOwn
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--background-secondary)] text-[var(--text-primary)]"
              }`}
            >
              <p>{message.body}</p>
              <p className={`mt-1 text-[11px] ${isOwn ? "text-white/70" : "text-[var(--text-muted)]"}`}>
                {new Date(message.sentAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
