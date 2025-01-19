import { Tabbar, MainEmpty } from "@common";
import { useProject } from "./store";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./assets/iconfont.js";
import Editor from "./layout/editor/index";
import Slider from "./layout/slider";

export default function App() {
  const isEmptyProject =
    useProject((state) => state.projectInfo.files).length === 0;

  return (
    <div className="bg-primary h-screen flex flex-col">
      <Tabbar />
      <div className="flex-1">
        <Allotment defaultSizes={[250, 500]}>
          <Allotment.Pane minSize={160} visible={!isEmptyProject}>
            <Slider />
          </Allotment.Pane>
          <Allotment.Pane minSize={220}>
            {isEmptyProject ? <MainEmpty /> : <Editor />}
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
}
