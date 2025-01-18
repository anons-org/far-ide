import { Fragment, useState } from "react";
import { useProject } from "@/store";
import IconFont from "../icon-font";
import { cn } from "@/common/utils";
import { expandOrCollapseFile } from "@/ipc";

export default function Slider() {
  const projectInfo = useProject((state) => state.projectInfo);

  return (
    // 文件列表
    <div className="py-2 h-full overflow-y-auto">
      {[projectInfo].map((file) => (
        <Fragment key={file.name}>
          <FileItem
            file={file}
            isActive={file.isActive}
            index={0}
            defaultFiles={file.files}
          />
          {/* <div className="pl-4">
            {file.files?.map((file, index) => (
              <FileItem
                file={file}
                isActive={file.isActive}
                key={file.name}
                index={index}
              />
            ))}
          </div> */}
        </Fragment>
      ))}
      {/* {projectInfo.files.map((file, index) => {
        return <FileItem file={file} index={index} />;
      })} */}
    </div>
  );
}

interface FileItemProps {
  file: FileInfo;
  isActive: boolean;
  index: number;
  defaultFiles?: FileInfo[];
}
function FileItem(props: FileItemProps) {
  const [isOpen, setIsOpen] = useState(props.isActive);
  const [childFiles, setChildFiles] = useState<FileInfo[]>(
    props.defaultFiles || []
  );
  const handleSingleClick = async () => {
    if (!isOpen && props.file.isDir) {
      // 展开状态，查询所有子文件数量
      const files = await expandOrCollapseFile(props.file.path);
      setChildFiles(files);
    }
    setIsOpen(!isOpen);
  };
  const handleDoubleClick = () => {
    // setIsOpen(is);
    // setCurrentActiveFileIndex([index]);
  };

  return (
    // 文件项
    <>
      <div
        className={cn("flex items-center gap-1.5 px-4", {
          "bg-bg_active": isOpen,
          "hover:bg-bg_hover": !isOpen,
        })}
        onClick={handleSingleClick}
        onDoubleClick={handleDoubleClick}
      >
        {/* 目录展开图标 */}
        <IconFont
          name="arrow"
          className={cn("text-white invisible", {
            visible: props.file.isDir && !props.file.isEmpty,
            "rotate-90": isOpen,
          })}
        />
        {/* 文件图标 */}
        <IconFont
          name={
            props.file.isDir ? `dir_${isOpen ? "expand" : "collapse"}` : "file"
          }
          className="text-white"
        />
        {/* 文件名 */}
        <span
          className="flex-1 select-none block text-ellipsis whitespace-nowrap overflow-hidden"
          title={props.file.name}
        >
          {props.file.name}
        </span>
      </div>
      <div className="pl-4">
        {/* 子文件 */}
        {isOpen &&
          childFiles.map((file) => (
            <FileItem
              file={file}
              isActive={file.isActive}
              key={file.name}
              index={props.index}
            />
          ))}
      </div>
    </>
  );
}
