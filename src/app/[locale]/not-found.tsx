import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const tGlobal = await getTranslations("global");
  const t = await getTranslations("notFound");

  return (
    <Container>
      <div className="flex flex-col items-center justify-start gap-8 h-screen text-center">
        <Image
          src="/assets/images/solar-pv-installer.webp"
          alt="Solar PV Installer"
          width={673}
          height={694}
          priority
          className="w-1/2 lg:w-1/3"
        />
        <Text variant="headline">{t("headline")}</Text>
        <Text variant="intro">{t("intro")}</Text>
        <Link href="/">
          <Text className="hover:text-primary underline">
            {tGlobal("backHome")}
          </Text>
        </Link>
      </div>
    </Container>
  );
}
