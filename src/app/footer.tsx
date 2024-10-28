import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/text";
import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  const tGlobal = await getTranslations("global");

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-20 py-6 sm:py-8 gap-6 md:gap-0">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4">
        <Link className="flex items-center gap-2" href="#">
          <Image
            aria-hidden
            src="/assets/icons/soller-logo.svg"
            alt="Logo"
            width={33}
            height={56}
          />
          <p className="text-2xl leading-small font-bold">{tGlobal("logo")}</p>
        </Link>
        <Text variant="small">{t("rights")}</Text>
      </div>
      <div>
        <ul className="flex items-center gap-6">
          <li>
            <Text variant="small">{t("terms")}</Text>
          </li>
          <li>
            <Text variant="small">{t("privacy")}</Text>
          </li>
          <li>
            <Text variant="small">{t("cookies")}</Text>
          </li>
        </ul>
      </div>
    </footer>
  );
}
