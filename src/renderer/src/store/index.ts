import { create } from "zustand";

interface UseProjectFilesState {
  /** 项目信息 */
  projectInfo: FileInfo;
  /** 当前激活的树文件夹 */
  currentActiveTreeFile: string[][];
}
interface UseProjectFilesActions {
  /** 设置项目信息 */
  setProjectInfo: (projectInfo: FileInfo) => void;
  // /** 设置当前激活的树文件夹 */
  // setCurrentActiveTreeFile: (name: string, rootName: string) => void;
  // /** 设置展开或者折叠的文件的状态 */
  // setExpandOrCollapseFile: (index: string) => void;
}

export const useProject = create<
  UseProjectFilesState & UseProjectFilesActions
>()((set, get) => ({
  projectInfo: {
    name: "",
    parentPath: "",
    path: "",
    isDir: false,
    isEmpty: false,
    isActive: true,
    files: [],
    id: "",
  },
  currentActiveTreeFile: [],
  setProjectInfo: (projectInfo: FileInfo) => set({ projectInfo }),
}));
