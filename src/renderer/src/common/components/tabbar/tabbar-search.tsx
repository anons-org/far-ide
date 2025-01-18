import { useProject } from "@/store";
import { IconFont } from "@common";

export default function TabbarSearch() {
  const name = useProject((state) => state.projectInfo).name;
  return (
    <div className="flex items-center justify-center h-[25px] border border-gray-500/30 w-[36%] rounded-md">
      <IconFont name="search" size={14} className="mr-1" />
      {name ?? "Search"}
    </div>
  );
}
