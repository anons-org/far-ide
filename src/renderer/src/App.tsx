import { Tabbar, MainEmpty, Slider } from "@common";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./assets/iconfont.js";

export default function App() {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <Tabbar />
      <div className="flex-1">
        <Allotment defaultSizes={[160, 220]}>
          <Allotment.Pane minSize={160}>
            <Slider />
          </Allotment.Pane>
          <Allotment.Pane minSize={220}>
            <MainEmpty />
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
}
