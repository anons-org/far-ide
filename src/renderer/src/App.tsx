import { Tabbar } from "@common";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./assets/iconfont.js";

export default function App() {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <Tabbar />
      <div className="flex-1">
        <Allotment defaultSizes={[160, 200]}>
          <Allotment.Pane minSize={160}>
            <div>11</div>
          </Allotment.Pane>
          <Allotment.Pane>
            <div>22</div>
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  );
}
