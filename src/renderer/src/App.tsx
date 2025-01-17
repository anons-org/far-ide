import SplitPane, { Pane } from "react-split-pane";
import Tabbar from "./components/tabbar";

export default function App() {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <Tabbar />
      <div className="flex-1 overflow-hidden relative">
        {/* @ts-ignore */}
        <SplitPane
          split="vertical"
          style={{ height: "100%" }}
          resizerClassName="w-[2px]"
          resizerStyle={{ backgroundColor: "yellow" }}
        >
          <Pane className="h-full bg-red-500">1</Pane>
          <Pane className="h-full bg-blue-500">2</Pane>
        </SplitPane>
      </div>
    </div>
  );
}
