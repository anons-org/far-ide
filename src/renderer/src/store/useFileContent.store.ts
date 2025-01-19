import { create } from "zustand";

interface FileContentState {
  fileContent: string;
  selectedFileInfo: {
    id: string;
    name: string;
    path: string;
    type?: string;
  };
}
interface FileContentActions {
  setFileContent: (fileContent: string) => void;
  setSelectedFileInfo: (
    selectedFileInfo: FileContentState["selectedFileInfo"]
  ) => void;
}

export const useFileContent = create<FileContentState & FileContentActions>()(
  (set) => ({
    fileContent: "",
    selectedFileInfo: {
      id: "",
      name: "",
      path: "",
    },
    setFileContent: (fileContent: string) => set({ fileContent }),
    setSelectedFileInfo: (
      selectedFileInfo: FileContentState["selectedFileInfo"]
    ) => set({ selectedFileInfo }),
  })
);
