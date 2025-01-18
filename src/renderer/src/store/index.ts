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
  },
  currentActiveTreeFile: [],
  setProjectInfo: (projectInfo: FileInfo) => set({ projectInfo }),
  // setCurrentActiveTreeFile: (name: string, rootName: string) => {
  //   if (get().currentActiveTreeFile.includes(rootName)) {
  //     set({ currentActiveTreeFile: [name] });
  //   } else {
  //     set({ currentActiveTreeFile: [rootName, name] });
  //   }
  // },
  // setExpandOrCollapseFile: (index: number) => {
  //   const files = get().projectInfo.files;

  // }
  // files: [],
  // name: "",
  // currentActiveFileIndex: -1,
  // setFiles: (files: FileInfo[]) => set({ files }),
  // setProjectInfo: (projectInfo: ProjectInfo) =>
  //   set({ name: projectInfo.name, files: projectInfo.files }),
  // setCurrentActiveFileIndex: (index: number) => {
  //   const files = get().files;
  //   // 设置当前激活的文件索引
  //   set({ currentActiveFileIndex: index });
  //   // 如果当前文件是目录，则展开或折叠目录
  //   if (files[index].isDir) {
  //     set({
  //       files: files.map((file, key) => ({
  //         ...file,
  //         isOpen: key === index ? !file.isOpen : false,
  //       })),
  //     });
  //   }
  // },
}));
