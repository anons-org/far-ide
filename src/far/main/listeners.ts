import { dialog, ipcMain } from "electron";

/**
 * 打开文件
 */
ipcMain.handle("open-file", () => {
  const root = dialog.showOpenDialogSync({
    // 只能选择文件夹
    properties: ["openDirectory"],
  });
  if (root && Array.isArray(root) && root.length > 0) {
    return root[0];
  }
  return "";
});
