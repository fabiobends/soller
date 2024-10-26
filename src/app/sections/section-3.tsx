import Image from "next/image";
import { Text } from "@/components/text";

export function Section3() {
  return (
    <section className="relative py-12 sm:p-20 sm:pl-0 flex flex-col-reverse sm:flex-row items-center gap-16">
      <div className="sm:w-4/12 w-full relative flex items-center justify-center">
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
          className="absolute w-11/12 left-10 sm:left-20"
        />
      </div>
      <div className="flex-1 px-4 sm:px-0 flex text-center sm:text-start flex-col gap-16 sm:gap-12">
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
          <div className="pt-20 flex flex-col gap-4">
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
