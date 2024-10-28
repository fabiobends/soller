import Image from "next/image";
import { Text } from "./text";

export interface CardItem {
  id: string;
  name: string;
  description: string;
  body: string;
  imageUrl: string;
}

interface CardProps extends CardItem {
  isExpanded: boolean;
}

export function Card({
  name,
  description,
  body,
  imageUrl,
  isExpanded,
}: CardProps) {
  return (
    <div
      className={`transition px-8 w-[358px] sm:[364px] bg-white rounded-[10px] shadow-normal flex flex-col justify-end gap-8 ${
        isExpanded
          ? "h-[359px] sm:h-[490px] pb-8 sm:pb-14"
          : "h-[311px] sm:h-[442px] pb-8"
      }`}
    >
      <Text>{body}</Text>
      <div className="flex gap-4 items-center">
        <Image
          src={imageUrl}
          alt={name}
          height={64}
          width={64}
          className="rounded-full h-12 w-12 sm:h-16 sm:w-16 object-cover"
        />
        <div>
          <Text>{name}</Text>
          <Text variant="small">{description}</Text>
        </div>
      </div>
    </div>
  );
}
