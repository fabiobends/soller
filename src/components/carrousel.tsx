"use client";
import Image from "next/image";
import { useState } from "react";
import { Card, CardItem } from "./card";

interface CarrouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CardItem[];
}

const imageConfig = {
  width: 24,
  height: 24,
};

export function Carrousel({ items, ...props }: CarrouselProps) {
  const [data, setData] = useState(items);

  const onClickGoForward = () => {
    setData((prev) => {
      const newData = [...prev];
      const firstElement = newData.shift();
      if (!firstElement) return prev;
      newData.push(firstElement);
      return newData;
    });
  };

  const onClickGoBack = () => {
    setData((prev) => {
      const newData = [...prev];
      const lastElement = newData.pop();
      if (!lastElement) return prev;
      newData.unshift(lastElement);
      return newData;
    });
  };

  return (
    <div
      {...props}
      className={`flex flex-col gap-16 sm:gap-20 ${props.className}`}
    >
      <div className="grid grid-rows-1 overflow-x-hidden pl-8 sm:pl-20">
        <div className="flex items-center gap-6">
          {data.map((item, index) => (
            <Card
              key={`${item.id}-${index}`}
              {...item}
              isExpanded={index === 0}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-6 sm:pl-20">
        <button
          className="p-3 color-tertiary border-2 rounded-full border-tertiary hover:brightness-75"
          onClick={onClickGoBack}
        >
          <Image
            src="/assets/icons/arrow-left-yellow.svg"
            alt="arrow-left"
            {...imageConfig}
          />
        </button>
        <button
          className="p-3 color-tertiary border-2 rounded-full border-tertiary hover:brightness-75"
          onClick={onClickGoForward}
        >
          <Image
            src="/assets/icons/arrow-right-yellow.svg"
            alt="arrow-left"
            {...imageConfig}
          />
        </button>
      </div>
    </div>
  );
}
