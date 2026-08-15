export interface BusinessHours {
  day: string;
  hours: string;
}

export interface ResponseTime {
  label: string;
  time: string;
}

export interface Holiday {
  label: string;
  date: Date;
}

export interface ContactChannel {
  label: string;
  description: string;
  to: string;
}
