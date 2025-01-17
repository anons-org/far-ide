import { cn } from "@common";
interface IconFontProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export default function IconFont(props: IconFontProps) {
  const handleClick = () => {};
  return (
    <svg
      onClick={handleClick}
      className={cn(
        "custom-icon-font text-18px",
        props?.className,
        props?.size ? `text-${props.size}px` : ""
      )}
      aria-hidden="true"
      style={props?.style}
    >
      <use xlinkHref={`#icon_${props.name}`}></use>
    </svg>
  );
}
