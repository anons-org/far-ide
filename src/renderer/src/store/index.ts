import { create } from "zustand";

interface UseProjectFilesState {
  /** 文件列表 */
  files: FileInfo[];
  /** 当前激活的文件索引 */
  currentActiveFileIndex: number;
}
interface UseProjectFilesActions {
  /** 设置文件列表 */
  setFiles: (files: FileInfo[]) => void;
  /** 设置当前激活的文件索引 */
  setCurrentActiveFileIndex: (index: number) => void;
}

export const useProjectFiles = create<
  UseProjectFilesState & UseProjectFilesActions
>()((set, get) => ({
  files: [],
  currentActiveFileIndex: -1,
  setFiles: (files: FileInfo[]) => set({ files }),
  setCurrentActiveFileIndex: (index: number) => {
    const files = get().files;
    // 设置当前激活的文件索引
    set({ currentActiveFileIndex: index });
    // 如果当前文件是目录，则展开或折叠目录
    if (files[index].isDir) {
      set({
        files: files.map((file, key) => ({
          ...file,
          isOpen: key === index ? !file.isOpen : false,
        })),
      });
    }
  },
}));
