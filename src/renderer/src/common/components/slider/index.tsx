import { Fragment } from "react";
import { useProject } from "@/store";
import IconFont from "../icon-font";
import { cn } from "@/common/utils";

export default function Slider() {
  const projectInfo = useProject((state) => state.projectInfo);

  return (
    // 文件列表
    <div className="py-2 h-full overflow-y-auto">
      {[projectInfo].map((file) => (
        <Fragment key={file.name}>
          <FileItem file={file} index={0} />
          <div className="pl-4">
            {file.isOpen &&
              file.files.map((file, index) => (
                <FileItem file={file} index={index} key={file.name} />
              ))}
          </div>
        </Fragment>
      ))}
      {/* {projectInfo.files.map((file, index) => {
        return <FileItem file={file} index={index} />;
      })} */}
    </div>
  );
}

function FileItem({ file, index }: { file: FileInfo; index: number }) {
  const currentActiveFileIndex = useProject(
    (state) => state.currentActiveFileIndex
  );
  const setCurrentActiveFileIndex = useProject(
    (state) => state.setCurrentActiveFileIndex
  );

  const handleSingleClick = (index: number) => {
    setCurrentActiveFileIndex([index]);
  };
  const handleDoubleClick = (index: number) => {
    setCurrentActiveFileIndex([index]);
  };

  return (
    // 文件项
    <div
      key={file.name}
      className={cn("flex items-center gap-1.5 px-4", {
        "bg-bg_active": index === currentActiveFileIndex[0],
        "hover:bg-bg_hover": index !== currentActiveFileIndex[0],
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
          file.isDir ? `dir_${file.isOpen ? "expand" : "collapse"}` : "file"
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
}
