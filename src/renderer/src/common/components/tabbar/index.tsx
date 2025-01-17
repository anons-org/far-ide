import TabbarSearch from "./tabbar-search";

export default function Tabbar() {
  return (
    <div className="drag flex items-center justify-center bg-primary h-[35px] border-b border-gray-500/30">
      <TabbarSearch />
    </div>
  );
}
