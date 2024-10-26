import Image from "next/image";
import { Text } from "@/components/text";

export function Section4() {
  return (
    <section className="relative py-12 sm:p-20 sm:pr-0 flex flex-col sm:flex-row gap-16">
      <div className="flex-1 px-4 sm:px-0 flex text-center sm:text-start flex-col gap-16 sm:gap-12">
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
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">Amet egestas</Text>
            <Text>
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </Text>
          </div>
        </div>
      </div>
      <div className="sm:w-4/12 w-full relative flex items-center justify-center">
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
          className="absolute w-11/12 right-0 sm:right-8"
        />
      </div>
    </section>
  );
}
