/**
 * 打开工程文件夹
 * @returns 文件夹路径
 */
export async function openFile(): Promise<FileInfo[]> {
  const root = await window.ipcRenderer.invoke("open-file");
  return root;
}
