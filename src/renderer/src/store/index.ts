import { create } from "zustand";

interface UseProjectFilesState {
  projectInfo: FileInfo;
  /** 当前激活的文件索引 */
  currentActiveFileIndex: number[];
}
interface UseProjectFilesActions {
  /** 设置项目信息 */
  setProjectInfo: (projectInfo: FileInfo) => void;
  /** 设置当前激活的文件索引 */
  setCurrentActiveFileIndex: (index: number[]) => void;
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
    isOpen: true,
    files: [],
  },
  currentActiveFileIndex: [0],
  setProjectInfo: (projectInfo: FileInfo) => set({ projectInfo }),
  setCurrentActiveFileIndex: (index: number[]) =>
    set({ currentActiveFileIndex: index }),
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
