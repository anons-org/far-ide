import { Fragment, useRef, useState } from "react";
import { useProject } from "@/store";
import IconFont from "../icon-font";
import { cn } from "@/common/utils";
import { expandOrCollapseFile } from "@/ipc";

export default function Slider() {
  const projectInfo = useProject((state) => state.projectInfo);
  const [selectedId, setSelectedId] = useState(projectInfo.id);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSelectedId = (id: string) => {
    setSelectedId(id);
  };

  return (
    // 文件列表
    <div className="py-2 h-full overflow-y-auto" ref={sliderRef}>
      {[projectInfo].map((file) => (
        <Fragment key={file.name}>
          <FileItem
            file={file}
            isActive={file.isActive}
            index={0}
            defaultFiles={file.files}
            selectedId={selectedId}
            handleSelectedId={handleSelectedId}
            sliderWidth={sliderRef.current?.clientWidth ?? 0}
          />
        </Fragment>
      ))}
    </div>
  );
}

interface FileItemProps {
  file: FileInfo;
  isActive: boolean;
  index: number;
  defaultFiles?: FileInfo[];
  selectedId: string;
  sliderWidth: number;
  handleSelectedId: (id: string) => void;
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
    props.handleSelectedId(props.file.id);
    setIsOpen(!isOpen);
  };

  const isSelected = props.selectedId === props.file.id;
  return (
    // 文件项
    <>
      <div
        className={"group flex items-center gap-1.5 px-4"}
        onClick={handleSingleClick}
      >
        <div className="flex items-center gap-1.5 w-full z-10">
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
              props.file.isDir
                ? `dir_${isOpen ? "expand" : "collapse"}`
                : "file"
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

        <div
          className={cn("h-18px bg-transparent absolute left-0", {
            "group-hover:bg-bg_hover": !isSelected,
            "bg-bg_active": isSelected,
          })}
          style={{ width: props.sliderWidth }}
        ></div>
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
              selectedId={props.selectedId}
              handleSelectedId={props.handleSelectedId}
              sliderWidth={props.sliderWidth}
            />
          ))}
      </div>
    </>
  );
}
