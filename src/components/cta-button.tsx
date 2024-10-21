import Image from "next/image";
import { Text } from "./text";

const variants = {
  purple: "border-[#581C87] text-[#581C87]",
  yellow: "border-[#FCD34D] text-[#FCD34D]",
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
      <Text variant="highlight" className="text-center flex-1 leading-0">
        {title}
      </Text>
      <Image
        src={`/assets/icons/arrow-right-${color}.svg`}
        {...config}
        alt="Arrow Right"
      />
    </button>
  );
}
