import { useAuthStore } from "../../../store/authStore";
import { useMessages } from "../messages/hooks/useMessages";
import ConversationList from "../messages/components/ConversationList";
import MessageThread from "../messages/components/MessageThread";
import MessageComposer from "../messages/components/MessageComposer";

export default function MessagesPage() {
  const user = useAuthStore((state) => state.user);
  const { conversations, activeConversationId, selectConversation, sendMessage } = useMessages();

  const activeConversation = conversations.find((c) => c.id === activeConversationId) ?? conversations[0] ?? null;

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Messages</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Direct conversations between brokers and operators, tied to their RFQs and quotes.
        </p>
      </div>

      <div className="flex h-[calc(100vh-260px)] min-h-[420px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="w-72 shrink-0 border-r border-[var(--border)]">
          <ConversationList
            conversations={conversations}
            activeId={activeConversation?.id ?? null}
            onSelect={selectConversation}
          />
        </div>

        <div className="flex flex-1 flex-col">
          {activeConversation ? (
            <>
              <div className="border-b border-[var(--border)] px-4 py-3">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{activeConversation.participant.name}</p>
                {activeConversation.relatedRfqId && (
                  <p className="text-xs text-[var(--text-muted)]">Re: {activeConversation.relatedRfqId}</p>
                )}
              </div>
              <MessageThread conversation={activeConversation} />
              <MessageComposer
                onSend={(body) => sendMessage(activeConversation.id, user?.id ?? "me", body)}
              />
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-sm text-[var(--text-muted)]">
              No conversations yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
