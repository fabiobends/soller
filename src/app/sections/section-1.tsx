import Image from "next/image";
import { Text } from "@/components/text";
import { CtaButton } from "@/components/cta-button";
import { getTranslations } from "next-intl/server";

export async function Section1() {
  const t = await getTranslations("main.section1");
  const tGlobal = await getTranslations("global");

  return (
    <section className="flex flex-col-reverse lg:flex-row relative pb-12 sm:pb-16">
      <div className="flex flex-col sm:gap-32 gap-16 w-full items-stretch max-w-[600px] sm:pl-20 md:pl-0 md:ml-20 pt-12 md:pt-0 lg:pt-7 px-4 sm:px-0">
        <div className="flex flex-col gap-6 items-center text-center sm:text-start sm:items-start">
          <Text variant="headline">{t("headline")}</Text>
          <Text variant="intro">{t("intro")}</Text>
          <CtaButton title={tGlobal("cta")} />
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
      <div className="relative xl:absolute flex justify-end w-full md:-top-32 -z-10 mb-7 md:-mb-32 lg:mb-0">
        <Image
          src="/assets/images/solar-pv-installer.svg"
          alt="Solar PV Installer"
          width={673}
          height={694}
          priority
          className="lg:absolute w-4/5 sm:w-3/5 lg:w-full xl:w-1/3"
        />
        <Image
          src="/assets/images/drop.svg"
          alt="Drop"
          width={673}
          height={694}
          priority
          className="absolute w-4/5 sm:w-3/5 lg:w-full xl:w-1/3 -z-10"
        />
        <Image
          src="/assets/images/small-drop.svg"
          alt="Small Drop"
          width={31}
          height={20}
          priority
          className="absolute w-auto bottom-0 right-28 md:top-24 md:right-64 lg:top-28"
        />
      </div>
    </section>
  );
}
