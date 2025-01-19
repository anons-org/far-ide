/// <reference types="vite-electron-plugin/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    VSCODE_DEBUG?: "true";
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬ dist-electron
     * │ ├─┬ main
     * │ │ └── index.js    > Electron-Main
     * │ └─┬ preload
     * │   └── index.mjs   > Preload-Scripts
     * ├─┬ dist
     * │ └── index.html    > Electron-Renderer
     * ```
     */
    APP_ROOT: string;
    /** /dist/ or /public/ */
    VITE_PUBLIC: string;
  }
}

declare namespace Electron {
  interface IpcMain {
    handle: <T extends keyof InvokeChannelMap>(
      channel: T,
      listener: (
        event: Electron.IpcMainEvent,
        ...args: InvokeChannelMap[T][0]
      ) => Promise<InvokeChannelMap[T][1]> | InvokeChannelMap[T][1]
    ) => Promise<any>;
  }
}

interface Window {
  ipcRenderer: IpcRenderer;
}
