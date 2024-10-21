"use client";
import Image from "next/image";
import { Text } from "./text";
import { useState } from "react";

interface CardItemProps {
  id: string;
  name: string;
  description: string;
  body: string;
  imageUrl: string;
  isExpanded: boolean;
}

export type Item = Omit<CardItemProps, "isExpanded">;

function CardItem({
  name,
  description,
  body,
  imageUrl,
  isExpanded,
}: CardItemProps) {
  return (
    <div
      className={`px-8 pt-28 w-[364px] bg-white rounded-[10px] shadow-md flex flex-col justify-end gap-8 ${
        isExpanded ? "h-[490px] pb-14" : "h-[442px] pb-8"
      }`}
    >
      <Text>{body}</Text>
      <div className="flex gap-4 items-center">
        <Image
          src={imageUrl}
          alt={name}
          height={64}
          width={64}
          className="rounded-full h-16 w-16 object-cover"
        />
        <div>
          <Text>{name}</Text>
          <Text variant="small">{description}</Text>
        </div>
      </div>
    </div>
  );
}

interface CarrouselProps {
  items: Item[];
}

export function Carrousel({ items }: CarrouselProps) {
  const [data, setData] = useState(items);

  const onClickGoForward = () => {
    setData((prev) => {
      const firstElement = prev.shift();
      if (!firstElement) return prev;
      prev.push(firstElement);
      return prev.slice();
    });
  };

  const onClickGoBack = () => {
    setData((prev) => {
      const lastElement = prev.pop();
      if (!lastElement) return prev;
      prev.unshift(lastElement);
      return prev.slice();
    });
  };

  return (
    <div className="flex flex-col pl-20 gap-20">
      <div className="grid grid-rows-1 overflow-x-hidden">
        <div className="flex items-center gap-6">
          {data.map((item, index) => (
            <CardItem key={item.id} {...item} isExpanded={index === 0} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button
          className="p-3 color-tertiary border-2 rounded-full border-tertiary"
          onClick={onClickGoBack}
        >
          <Image
            src="/assets/icons/arrow-left-yellow.svg"
            alt="arrow-left"
            width={24}
            height={24}
          />
        </button>
        <button
          className="p-3 color-tertiary border-2 rounded-full border-tertiary"
          onClick={onClickGoForward}
        >
          <Image
            src="/assets/icons/arrow-right-yellow.svg"
            alt="arrow-left"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
