import type { BusinessHours, ResponseTime, ContactChannel } from "../types";

export const businessHours: BusinessHours[] = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM ET" },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM ET" },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM ET" },
  { day: "Thursday", hours: "9:00 AM – 6:00 PM ET" },
  { day: "Friday", hours: "9:00 AM – 6:00 PM ET" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

export const responseTimes: ResponseTime[] = [
  { label: "General inquiries", time: "Within 1 business day" },
  { label: "Support tickets", time: "Within 4–8 business hours" },
  { label: "Development & technical issues", time: "Within 24–48 hours" },
];

export const contactChannels: ContactChannel[] = [
  {
    label: "Submit a Ticket",
    description: "Report an issue or request support and we'll track it to resolution.",
    to: "/contact/submit-ticket",
  },
  {
    label: "Request a Callback",
    description: "Share a few details and a team member will call you back.",
    to: "/contact/request-callback",
  },
  {
    label: "Email Us",
    description: "Reach the right team directly by email.",
    to: "/contact/email",
  },
];
