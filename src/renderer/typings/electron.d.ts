interface FileInfo {
  name: string;
  parentPath: string;
  path: string;
  isDir: boolean;
  isEmpty: boolean;
}
interface InvokeChannelMap {
  "open-file": [[], FileInfo[]];
}

interface IpcRenderer extends Omit<IpcRenderer, "invoke" | "send"> {
  invoke: <T extends keyof InvokeChannelMap>(
    channel: T,
    ...args: InvokeChannelMap[T][0]
  ) => Promise<InvokeChannelMap[T][1]>;
  // send: <T extends keyof SendChannelMap>(channel: T, ...args: SendChannelMap[T]) => Promise<any>;
  on: <T extends keyof OnChannelMap>(
    channel: T,
    listener: OnChannelMap[T]
  ) => void;
  // off: <T extends keyof OnChannelMap>(channel: T, listener: OnChannelMap[T]) => void;
}
