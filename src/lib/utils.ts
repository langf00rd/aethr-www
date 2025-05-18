import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { adverbs, objects, subjects, verbs, wordList } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomWord(options?: { length?: number }): string {
  const { length } = options || {};
  const filtered = length
    ? wordList.filter((word) => word.length === length)
    : wordList;
  if (filtered.length === 0) {
    throw new Error(`No words found with length ${length}`);
  }
  const randIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randIndex];
}

export function getInitials(input: string): string {
  if (!input || typeof input !== "string") return "";
  const words = input.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return words.map((word) => word.charAt(0).toUpperCase()).join("");
}

export function generateRandomSentence(): string {
  const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  const sentence = `${rand(subjects)} ${rand(verbs)} ${rand(objects)} ${rand(adverbs)} ${rand(subjects)} ${rand(verbs)} ${rand(objects)} ${rand(adverbs)} ${rand(subjects)} ${rand(verbs)} ${rand(objects)} ${rand(adverbs)}.`;
  return sentence;
}

export function getTodayDate() {
  return new Date().toString().substring(0, 15);
}
