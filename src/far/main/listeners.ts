import { dialog, ipcMain } from "electron";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { isEmptyDir } from "./utils";
import { randomUUID } from "node:crypto";

function getFileInfo(rootName = ""): FileInfo["files"] {
  // 查看当前根目录的文件
  const filesWithType = fs.readdirSync(rootName, { withFileTypes: true });
  // 判断每一个子文件是否是文件夹，如果是文件夹，则判断是否是空文件夹
  const dirFiles: FileInfo[] = [];
  const fileFiles: FileInfo[] = [];
  filesWithType.forEach((file) => {
    const isDir = file.isDirectory();
    (isDir ? dirFiles : fileFiles).push({
      name: file.name,
      parentPath: rootName,
      path: path.join(rootName, file.name),
      isDir: isDir,
      isEmpty: isDir ? isEmptyDir(path.join(rootName, file.name)) : false,
      isActive: false,
      files: [],
      id: randomUUID(),
    });
  });
  // 对dirFiles进行排序
  dirFiles.sort((a, b) => a.name.localeCompare(b.name));
  // 对fileFiles进行排序
  fileFiles.sort((a, b) => a.name.localeCompare(b.name));
  return [...dirFiles, ...fileFiles];
}
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
    const files = getFileInfo(root[0]);

    // 获取根目录名称
    const name = path.basename(root[0]);

    return {
      name,
      parentPath: "",
      path: root[0],
      isDir: true,
      isEmpty: false,
      isActive: true,
      files,
      id: randomUUID(),
    };
  }
  return {
    name: "",
    parentPath: "",
    path: "",
    isDir: false,
    isEmpty: false,
    isActive: true,
    files: [] as FileInfo[],
    id: randomUUID(),
  };
});

/**
 * 展开或折叠文件夹
 */
ipcMain.handle("expand-or-collapse-file", (_, rootName: string) => {
  console.log("rootName", rootName);
  return getFileInfo(rootName);
});
