import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberWithCommas( number: number) {
  const formatter = new Intl.NumberFormat('en-US');
  const formattedNumber = formatter.format(number);
  return formattedNumber;
}