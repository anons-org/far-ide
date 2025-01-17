declare module "react-split-pane" {
  export type PaneProps = {
    className?: string;
    size?: Size;
    split?: Split;
    style?: React.CSSProperties;
    eleRef?: (el: HTMLDivElement) => void;
  };
  export const Pane: React.FC<React.PropsWithChildren<PaneProps>>;
}
