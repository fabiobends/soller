import Image from "next/image";
import { Text } from "@/components/text";
import { getTranslations } from "next-intl/server";

export async function Section2() {
  const t = await getTranslations("main.section2");

  return (
    <section className="relative flex flex-col items-center px-4 py-12 sm:p-20">
      <Image
        src="/assets/images/yellow-circle.svg"
        alt="Yellow Circle"
        width={710}
        height={710}
        className="absolute w-4/12 sm:w-3/12 left-0 bottom-36 md:bottom-56 xl:bottom-96 -z-10"
      />
      <Image
        src="/assets/images/purple-circle.svg"
        alt="Purple Circle"
        width={596}
        height={596}
        className="absolute w-4/12 sm:w-3/12 right-0 bottom-36 md:bottom-56 xl:bottom-96 -z-10"
      />
      <div className="text-center max-w-[900px] mx-auto">
        <Text variant="subheading">{t("subheading")}</Text>
        <Text variant="heading" className="mt-2 mb-6">
          {t("heading")}
        </Text>
        <Text variant="description">{t("description")}</Text>
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
