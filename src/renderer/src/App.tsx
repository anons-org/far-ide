import { Tabbar, MainEmpty } from "@common";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./assets/iconfont.js";

export default function App() {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <Tabbar />
      <div className="flex-1">
        <Allotment>
          <Allotment.Pane minSize={160}>
            <div>Slider</div>
          </Allotment.Pane>
          <Allotment.Pane minSize={220}>
            <MainEmpty />
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
}
