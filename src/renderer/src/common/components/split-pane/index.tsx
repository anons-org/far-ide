import { Pane } from "./pane";

interface SplitPaneProps {}
function SplitPane(props: React.PropsWithChildren<SplitPaneProps>) {
  return <div>{props.children}</div>;
}

export default Object.assign(SplitPane, { Pane });
