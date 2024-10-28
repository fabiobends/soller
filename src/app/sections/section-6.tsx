import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { Text } from "@/components/text";

export function Section6() {
  return (
    <section className="bg-light-purple relative">
      <Image
        src="/assets/images/light-purple-circle-up.svg"
        alt="Purple Circle"
        height={438}
        width={706}
        priority
        className="hidden lg:block absolute top-0 right-0 w-2/5"
      />
      <Image
        src="/assets/images/light-purple-circle-down.svg"
        alt="Purple Circle"
        height={181}
        width={191}
        priority
        className="lg:hidden absolute bottom-0 left-0 w-1/2"
      />
      <div className="py-12 sm:py-20 sm:px-0 sm:p-20 flex flex-col items-center pb-0">
        <div className="px-4 sm:px-20 flex flex-col lg:flex-row w-full justify-between text-center sm:text-start z-10">
          <div className="max-w-[894px]">
            <Text variant="subheading" className="text-tertiary">
              Get the Sun to power your home
            </Text>
            <Text variant="heading" className="text-white mt-2">
              All the power that you need for your house is now available
            </Text>
          </div>
          <div className="flex flex-col sm:self-start items-center gap-4">
            <CtaButton
              title="Request a Quote"
              className="mt-6 sm:mt-10"
              color="yellow"
            />
            <Text className="text-white">Egestas fringilia aliquam leo</Text>
          </div>
        </div>
        <Image
          src="/assets/images/laptop.svg"
          alt="Laptop"
          height={904}
          width={1560}
          className="w-full md:w-4/5 mt-16 sm:mt-20 z-10"
        />
      </div>
    </section>
  );
}
