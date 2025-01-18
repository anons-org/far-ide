import { openFile } from "@/ipc";
import { useProjectFiles } from "@/store";

export default function MainEmpty() {
  const { setFiles } = useProjectFiles();

  const handleOpenFile = async () => {
    const files = await openFile();
    console.log(files);
    setFiles(files);
  };
  return (
    <div className="h-full all_flex">
      <div className="">
        {/* open btn */}
        <div
          role="button"
          className="all_flex select-none w-170px bg-blue-500 p-4 rounded-md text-white text-xl hover:bg-blue-500/80 hover:text-white/80 transition-all duration-300"
          onClick={handleOpenFile}
        >
          Open a folder
        </div>
      </div>
      <div></div>
    </div>
  );
}
