import { dialog, ipcMain } from "electron";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { isEmptyDir } from "./utils";

/**
 * 打开文件
 */
ipcMain.handle("open-file", () => {
  const root = dialog.showOpenDialogSync({
    // 用户目录
    defaultPath: os.homedir(),
    // 只能选择文件夹
    properties: ["openDirectory"],
  });
  if (root && Array.isArray(root) && root.length > 0) {
    // 查看当前根目录的文件
    const filesWithType = fs.readdirSync(root[0], { withFileTypes: true });
    // 判断每一个子文件是否是文件夹，如果是文件夹，则判断是否是空文件夹
    const dirFiles: FileInfo[] = [];
    const fileFiles: FileInfo[] = [];
    filesWithType.forEach((file) => {
      const isDir = file.isDirectory();
      (isDir ? dirFiles : fileFiles).push({
        name: file.name,
        parentPath: root[0],
        path: path.join(root[0], file.name),
        isDir: isDir,
        isEmpty: isDir ? isEmptyDir(path.join(root[0], file.name)) : false,
      });
    });
    // 对dirFiles进行排序
    dirFiles.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    // 对fileFiles进行排序
    fileFiles.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    return [...dirFiles, ...fileFiles];
  }
  return [];
});
