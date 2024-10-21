import Image from "next/image";
import { Text } from "@/components/text";

export function Section3() {
  return (
    <section className="relative p-20 flex justify-between items-center gap-10">
      <Image
        src="/assets/images/purple-deformed-rectangle.svg"
        alt=""
        height={1001}
        width={574}
        priority
        className="absolute left-0 w-3/12 -z-10"
      />
      <div className="w-3/12">
        <Image
          src="/assets/images/mobile-app-1.svg"
          alt=""
          height={950}
          width={460}
          priority
        />
      </div>
      <div className="flex-1 flex flex-col gap-12">
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
