import { useProjectFiles } from "@/store";
import IconFont from "../icon-font";
import { cn } from "@/common/utils";

export default function Slider() {
  const files = useProjectFiles((state) => state.files);
  return (
    <div className="p-4 h-full overflow-y-auto">
      {files.map((file) => {
        return (
          <div key={file.name} className="flex items-center gap-1">
            <IconFont
              name="arrow"
              className={cn("text-white invisible", {
                visible: file.isDir && !file.isEmpty,
              })}
            />
            <IconFont
              name={file.isDir ? "dir" : "file"}
              className="text-white"
            />
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
