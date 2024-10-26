import Image from "next/image";
import { Text } from "@/components/text";
import { CtaButton } from "@/components/cta-button";

export function Section1() {
  return (
    <section className="flex flex-col pb-16 pt-7 px-20">
      <div className="flex flex-col gap-32 w-full max-w-[600px]">
        <div className="flex flex-col gap-6 items-start">
          <Text variant="headline">Get the Sun to Power Your Home</Text>
          <Text variant="highlight" className="font-normal leading-medium">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </Text>
          <CtaButton title="Request a Quote" />
        </div>
        <div className="flex flex-col gap-4">
          <Text>
            &quot;Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
            viverra orci dui consequat turpis scelerisque faucibus.&quot;
          </Text>
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/rwanda-metflor.jpeg"
              alt="Rwanda Metflor"
              width={64}
              height={64}
              className="rounded-full h-16 w-16 object-cover"
            />
            <div>
              <Text>Rwanda Metflor</Text>
              <Text variant="small">zerowaste.com</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}