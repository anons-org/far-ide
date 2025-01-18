import { create } from "zustand";

interface UseProjectFilesState {
  files: FileInfo[];
}
interface UseProjectFilesActions {
  setFiles: (files: FileInfo[]) => void;
}

export const useProjectFiles = create<
  UseProjectFilesState & UseProjectFilesActions
>()((set, get) => ({
  files: [],
  setFiles: (files: FileInfo[]) => set({ files }),
}));
