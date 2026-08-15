import { create } from "zustand";
import { mockConversations } from "../data";
import type { Conversation } from "../types";

interface MessagesState {
  conversations: Conversation[];
  activeConversationId: string | null;
  selectConversation: (id: string) => void;
  sendMessage: (conversationId: string, senderId: string, body: string) => void;
}

export const useMessages = create<MessagesState>((set) => ({
  conversations: mockConversations,
  activeConversationId: mockConversations[0]?.id ?? null,

  selectConversation: (id) => set({ activeConversationId: id }),

  sendMessage: (conversationId, senderId, body) =>
    set((state) => ({
      conversations: state.conversations.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                { id: `MSG-${Date.now()}`, senderId, body, sentAt: new Date().toISOString() },
              ],
            }
          : conversation
      ),
    })),
}));
