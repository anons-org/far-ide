import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并tailwind类名
 * @param inputs 类名列表
 */
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
