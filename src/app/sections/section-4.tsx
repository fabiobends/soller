import Image from "next/image";
import { Text } from "@/components/text";

export function Section4() {
  return (
    <section className="relative py-12 sm:py-20 md:p-20 md:pr-0 flex flex-col items-center md:items-start md:flex-row lg:gap-16 gap-6">
      <div className="flex-1 px-4 sm:px-20 md:px-0 flex text-center sm:text-start flex-col gap-16 sm:gap-12">
        <div>
          <Text variant="subheading">System features</Text>
          <Text variant="heading" className="mt-2 mb-6">
            Powerful features
          </Text>
          <Text variant="description">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </Text>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">Erat sit</Text>
            <Text>
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </Text>
          </div>
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">Ullamcorper arcu</Text>
            <Text>
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </Text>
          </div>
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">Et pellentesque</Text>
            <Text>
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </Text>
          </div>
          <div className="relative pt-20 flex flex-col items-center sm:items-start gap-4">
            <div className="absolute sm:left-8 top-10 bg-light-purple h-[3px] w-[3px] rounded-full" />
            <Text variant="highlight">Amet egestas</Text>
            <Text>
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12 relative flex items-center justify-center">
        <Image
          src="/assets/images/yellow-deformed-rectangle.svg"
          alt=""
          height={1001}
          width={574}
          priority
        />
        <Image
          src="/assets/images/mobile-app-2.svg"
          alt="Mobile app"
          height={950}
          width={460}
          priority
          className="absolute w-9/12 sm:w-8/12 md:w-11/12 right-8"
        />
      </div>
    </section>
  );
}
