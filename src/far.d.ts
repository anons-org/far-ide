declare global {
  interface FileInfo {
    name: string;
    parentPath: string;
    path: string;
    isDir: boolean;
    isEmpty: boolean;
  }
}
export {};