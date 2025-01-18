import { useProjectFiles } from "@/store";
import IconFont from "../icon-font";

export default function Slider() {
  const files = useProjectFiles((state) => state.files);
  return (
    <div className="p-4 h-full overflow-y-auto">
      {files.map((file) => {
        return (
          <div key={file.name} className="flex items-center gap-2">
            <IconFont
              name={file.isDir ? "dir" : "file"}
              className="text-white"
            />
            <span className="flex-1 text-white whitespace-nowrap overflow-hidden">
              {file.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
