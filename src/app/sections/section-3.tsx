import Image from "next/image";
import { Text } from "@/components/text";
import { getTranslations } from "next-intl/server";

export async function Section3() {
  const t = await getTranslations("main.section3");

  return (
    <section className="relative py-12 sm:py-20 md:p-20 md:pl-0 flex flex-col-reverse md:flex-row items-center lg:gap-16 gap-6">
      <div className="w-full md:w-4/12 relative flex items-center justify-center">
        <Image
          src="/assets/images/purple-deformed-rectangle.svg"
          alt=""
          height={1001}
          width={574}
          loading="lazy"
        />
        <Image
          src="/assets/images/mobile-app-1.svg"
          alt="Mobile app"
          height={950}
          width={460}
          loading="lazy"
          className="absolute w-9/12 sm:w-8/12 md:w-11/12 lg:left-20"
        />
      </div>
      <div className="flex-1 px-4 sm:px-20 md:px-0 flex text-center sm:text-start flex-col gap-16 sm:gap-12">
        <div>
          <Text variant="subheading">{t("subheading")}</Text>
          <Text variant="heading" className="mb-6 mt-2">
            {t("heading")}
          </Text>
          <Text variant="description">{t("description")}</Text>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">{t("topics.topic1")}</Text>
            <Text>{t("topics.description1")}</Text>
          </div>
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">{t("topics.topic2")}</Text>
            <Text>{t("topics.description2")}</Text>
          </div>
          <div className="pt-20 flex flex-col gap-4">
            <Text variant="highlight">{t("topics.topic3")}</Text>
            <Text>{t("topics.description3")}</Text>
          </div>
          <div className="relative pt-20 flex flex-col items-center sm:items-start gap-4">
            <div className="absolute sm:left-8 top-10 bg-light-purple h-[3px] w-[3px] rounded-full" />
            <Text variant="highlight">{t("topics.topic4")}</Text>
            <Text>{t("topics.description4")}</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
