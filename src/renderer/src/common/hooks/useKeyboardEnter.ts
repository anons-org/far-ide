import { useRef } from "react";

export default function useKeyboardEnter(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  const handleKeyboardEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
    if (e.key === "Enter") {
      callback?.();
    }
  };

  return handleKeyboardEnter;
}
