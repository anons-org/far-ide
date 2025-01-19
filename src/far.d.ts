declare global {
  interface FileInfo {
    name: string;
    parentPath: string;
    path: string;
    isDir: boolean;
    isEmpty: boolean;
    isActive: boolean;
    id: string;
    files: FileInfo[];
  }
}
export {};
