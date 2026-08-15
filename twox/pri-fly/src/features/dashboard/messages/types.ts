export type MessageParticipantRole = "BROKER" | "OPERATOR";

export interface MessageParticipant {
  id: string;
  name: string;
  role: MessageParticipantRole;
}

export interface Message {
  id: string;
  senderId: string;
  body: string;
  sentAt: string; // ISO timestamp
}

export interface Conversation {
  id: string;
  // The other party in the conversation, relative to the signed-in user.
  participant: MessageParticipant;
  relatedRfqId?: string;
  messages: Message[];
}
