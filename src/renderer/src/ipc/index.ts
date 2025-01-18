/**
 * 打开工程文件夹
 * @returns 文件夹信息
 */
export async function openFile(): Promise<FileInfo> {
  const fileRes = await window.ipcRenderer.invoke("open-file");
  return fileRes;
}

/**
 * 展开或折叠文件夹
 * @param rootName 文件夹名称
 * @returns 文件夹信息
 */
export async function expandOrCollapseFile(
  rootName: string
): Promise<FileInfo[]> {
  const filesRes = await window.ipcRenderer.invoke(
    "expand-or-collapse-file",
    rootName
  );
  return filesRes;
}
