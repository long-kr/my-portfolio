import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isAlphabetChar(str: string, index: number): boolean {
  const char = str.charCodeAt(index);
  return char >= 65 && char <= 122;
}
export function toTitleCase(text: string): string {
  if (typeof text !== 'string') return text;

  for (let i = 0; i < text.length; i++) {
    if (isAlphabetChar(text, i)) {
      const toTitle = text.slice(0, i) + text.charAt(i).toUpperCase() + text.slice(i + 1, text.length);
      text = toTitle;
      break;
    }
  }

  return text
}
