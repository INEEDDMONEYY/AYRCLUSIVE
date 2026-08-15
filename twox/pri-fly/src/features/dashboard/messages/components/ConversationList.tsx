import type { Conversation } from "../types";

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function ConversationList({ conversations, activeId, onSelect }: ConversationListProps) {
  return (
    <div className="flex flex-col divide-y divide-[var(--border)] overflow-y-auto">
      {conversations.map((conversation) => {
        const lastMessage = conversation.messages[conversation.messages.length - 1];
        const isActive = conversation.id === activeId;

        return (
          <button
            key={conversation.id}
            type="button"
            onClick={() => onSelect(conversation.id)}
            className={`flex flex-col gap-1 px-4 py-3 text-left transition-colors ${
              isActive ? "bg-[var(--background-secondary)]" : "hover:bg-[var(--surface-hover)]"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-[var(--text-primary)]">{conversation.participant.name}</p>
              {lastMessage && (
                <span className="shrink-0 text-[11px] text-[var(--text-muted)]">
                  {new Date(lastMessage.sentAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
                </span>
              )}
            </div>
            {lastMessage && <p className="truncate text-xs text-[var(--text-muted)]">{lastMessage.body}</p>}
          </button>
        );
      })}
    </div>
  );
}
