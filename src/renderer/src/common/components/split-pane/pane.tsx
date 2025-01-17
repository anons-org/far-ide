interface PaneProps {
  className?: string;
}
export function Pane(props: React.PropsWithChildren<PaneProps>) {
  return <div className={props.className}>{props.children}</div>;
}
