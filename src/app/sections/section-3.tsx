import Image from "next/image";
import { Text } from "@/components/text";

export function Section3() {
  return (
    <section className="relative py-12 sm:py-20 md:p-20 md:pl-0 flex flex-col-reverse md:flex-row items-center lg:gap-16 gap-6">
      <div className="w-full md:w-4/12 relative flex items-center justify-center">
        <Image
          src="/assets/images/purple-deformed-rectangle.svg"
          alt=""
          height={1001}
          width={574}
          priority
        />
        <Image
          src="/assets/images/mobile-app-1.svg"
          alt="Mobile app"
          height={950}
          width={460}
          priority
          className="absolute w-9/12 sm:w-8/12 md:w-11/12 lg:left-20"
        />
      </div>
      <div className="flex-1 px-4 sm:px-20 md:px-0 flex text-center sm:text-start flex-col gap-16 sm:gap-12">
        <div>
          <Text variant="subheading">Services</Text>
          <Text variant="heading" className="mb-6 mt-2">
            Personalized services
          </Text>
          <Text variant="description">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </Text>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">Et mauris</Text>
            <Text>
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </Text>
          </div>
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">Eget sit</Text>
            <Text>
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </Text>
          </div>
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">Imperdiet pellentesque</Text>
            <Text>
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
              viverra parturient tristique nulla.
            </Text>
          </div>
          <div className="relative pt-20 flex flex-col items-center sm:items-start gap-4">
            <div className="absolute sm:left-8 top-10 bg-light-purple h-[3px] w-[3px] rounded-full" />
            <Text variant="highlight">Non libero</Text>
            <Text>
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
              viverra parturient tristique nulla.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
