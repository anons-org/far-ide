import { useProjectFiles } from "@/store";
import IconFont from "../icon-font";
import { cn } from "@/common/utils";

export default function Slider() {
  const files = useProjectFiles((state) => state.files);
  const currentActiveFileIndex = useProjectFiles(
    (state) => state.currentActiveFileIndex
  );
  const setCurrentActiveFileIndex = useProjectFiles(
    (state) => state.setCurrentActiveFileIndex
  );

  const handleSingleClick = (index: number) => {
    setCurrentActiveFileIndex(index);
  };
  const handleDoubleClick = (index: number) => {
    setCurrentActiveFileIndex(index);
  };
  return (
    // 文件列表
    <div className="py-4 h-full overflow-y-auto">
      {files.map((file, index) => {
        return (
          // 文件项
          <div
            key={file.name}
            className={cn("flex items-center gap-1.5 px-4", {
              "bg-bg_active": index === currentActiveFileIndex,
              "hover:bg-bg_hover": index !== currentActiveFileIndex,
            })}
            onClick={() => handleSingleClick(index)}
            onDoubleClick={() => handleDoubleClick(index)}
          >
            {/* 目录展开图标 */}
            <IconFont
              name="arrow"
              className={cn("text-white invisible", {
                visible: file.isDir && !file.isEmpty,
                "rotate-90": file.isOpen,
              })}
            />
            {/* 文件图标 */}
            <IconFont
              name={
                file.isDir
                  ? `dir_${file.isOpen ? "expand" : "collapse"}`
                  : "file"
              }
              className="text-white"
            />
            {/* 文件名 */}
            <span
              className="flex-1 select-none block text-ellipsis whitespace-nowrap overflow-hidden"
              title={file.name}
            >
              {file.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
