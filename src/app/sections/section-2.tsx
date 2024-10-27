import Image from "next/image";
import { Text } from "@/components/text";

export function Section2() {
  return (
    <section className="relative flex flex-col items-center px-4 py-12 sm:p-20">
      <Image
        src="/assets/images/yellow-circle.svg"
        alt="Yellow Circle"
        width={710}
        height={710}
        className="absolute w-4/12 sm:w-3/12 -left-12 sm:left-0 bottom-40 -z-10"
      />
      <Image
        src="/assets/images/purple-circle.svg"
        alt="Purple Circle"
        width={596}
        height={596}
        className="absolute w-4/12 sm:w-3/12 -right-12 sm:right-0 bottom-40 -z-10"
      />
      <div className="text-center max-w-[900px] mx-auto">
        <Text variant="subheading">No more waste</Text>
        <Text variant="heading" className="mt-2 mb-6">
          Pick the Sun
        </Text>
        <Text variant="description">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </Text>
      </div>
      <Image
        src="/assets/images/desktop.svg"
        alt="Desktop"
        height={904}
        width={1560}
        priority
        className="w-full sm:w-11/12 mt-16 sm:mt-20"
      />
    </section>
  );
}
