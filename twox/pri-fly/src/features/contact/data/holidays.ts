import type { Holiday } from "../types";

const YEAR = new Date().getFullYear();

// Placeholder US holiday schedule — update dates/labels as needed.
export const holidays: Holiday[] = [
  { label: "New Year's Day", date: new Date(YEAR, 0, 1) },
  { label: "Memorial Day", date: new Date(YEAR, 4, 25) },
  { label: "Independence Day", date: new Date(YEAR, 6, 4) },
  { label: "Labor Day", date: new Date(YEAR, 8, 7) },
  { label: "Thanksgiving Day", date: new Date(YEAR, 10, 26) },
  { label: "Christmas Day", date: new Date(YEAR, 11, 25) },
];
