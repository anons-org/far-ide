import Logger from "electron-log";
import fs from "node:fs";
/**
 * 判断一个文件夹是否为空
 * @param dir 文件夹路径
 * @returns 是否为空
 */
export function isEmptyDir(dir: string) {
  try {
    return fs.readdirSync(dir).length === 0;
  } catch (error) {
    Logger.error(error);
    return false;
  }
}
