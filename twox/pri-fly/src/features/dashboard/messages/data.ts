import type { Conversation } from "./types";

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000).toISOString();

// Sample threads until this is wired to the backend messaging API.
export const mockConversations: Conversation[] = [
  {
    id: "CONV-1",
    participant: { id: "USER-BROKER-1", name: "Skyline Brokerage", role: "BROKER" },
    relatedRfqId: "RFQ-2201",
    messages: [
      { id: "MSG-1", senderId: "USER-BROKER-1", body: "Hi, is N425AL still available for the TEB → MIA leg on Aug 22?", sentAt: minutesAgo(180) },
      { id: "MSG-2", senderId: "USER-OPERATOR-1", body: "Yes, it's open. I'll have a quote over shortly.", sentAt: minutesAgo(170) },
      { id: "MSG-3", senderId: "USER-BROKER-1", body: "Great, thank you.", sentAt: minutesAgo(165) },
    ],
  },
  {
    id: "CONV-2",
    participant: { id: "USER-BROKER-2", name: "Apex Air Charter", role: "BROKER" },
    relatedRfqId: "RFQ-2198",
    messages: [
      { id: "MSG-4", senderId: "USER-BROKER-2", body: "Can you confirm passenger capacity on the Challenger 350?", sentAt: minutesAgo(60) },
      { id: "MSG-5", senderId: "USER-OPERATOR-1", body: "9 passengers, confirmed.", sentAt: minutesAgo(55) },
    ],
  },
  {
    id: "CONV-3",
    participant: { id: "USER-BROKER-3", name: "Bluewater Aviation", role: "BROKER" },
    messages: [
      { id: "MSG-6", senderId: "USER-BROKER-3", body: "Following up on the OPF → TEB quote from yesterday.", sentAt: minutesAgo(20) },
    ],
  },
];
