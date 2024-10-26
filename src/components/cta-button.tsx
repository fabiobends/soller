import Image from "next/image";
import { Text } from "./text";

const variants = {
  purple: "border-primary text-primary",
  yellow: "border-tertiary text-tertiary",
};

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: keyof typeof variants;
}

const config = {
  height: 24,
  width: 24,
};

export function CtaButton({ title, color = "purple", ...props }: Props) {
  const className = `${variants[color]} border-2 rounded-full flex justify-between h-16 w-[306px] items-center gap-2 px-6 ${props.className}`;

  return (
    <button {...props} className={className}>
      <p className="text-2xl font-bold text-center flex-1 leading-0">{title}</p>
      <Image
        src={`/assets/icons/arrow-right-${color}.svg`}
        alt="Arrow Right"
        {...config}
      />
    </button>
  );
}
