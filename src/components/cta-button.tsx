"use client";
import { forwardRef, useRef } from "react";

const svgColors = {
  purple: "#581C87",
  yellow: "#FCD34D",
};

interface ArrowRightIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  color?: keyof typeof svgColors;
}

const ArrowRightIcon = forwardRef<SVGSVGElement, ArrowRightIconProps>(
  ({ color = "purple", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        stroke={svgColors[color]}
      >
        <path d="M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12ZM18.5 12L12.5 18L18.5 12Z" />
        <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" strokeWidth="1.5" />
      </svg>
    );
  }
);

ArrowRightIcon.displayName = "ArrowRightIcon";

const variants = {
  purple: "border-primary text-primary hover:bg-primary hover:text-tertiary",
  yellow: "border-tertiary text-tertiary hover:bg-tertiary hover:text-primary",
};

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: keyof typeof variants;
}

export function CtaButton({ title, color = "purple", ...props }: Props) {
  const pathRef = useRef<SVGSVGElement>(null);

  const className = `${variants[color]} border-2 rounded-full flex justify-between h-16 w-[306px] items-center gap-2 px-6 hover:transition-all duration-150 ease-out hover:ease-in ${props.className}`;

  const handleMouseEnter = () => {
    if (pathRef.current) {
      pathRef.current.style.stroke =
        color === "purple" ? svgColors.yellow : svgColors.purple;
    }
  };

  const handleMouseLeave = () => {
    if (pathRef.current) {
      pathRef.current.style.stroke =
        color === "purple" ? svgColors.purple : svgColors.yellow;
    }
  };

  return (
    <button
      {...props}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-2xl font-bold text-center flex-1 leading-0">{title}</p>
      <ArrowRightIcon ref={pathRef} color={color} />
    </button>
  );
}
