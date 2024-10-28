import { CtaButton } from "@/components/cta-button";
import { Text } from "@/components/text";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <nav className="absolute md:relative flex items-center justify-between gap-4 sm:py-8 pt-4 sm:px-20 px-4">
      <div className="flex gap-10 items-center">
        <Link href="#">
          <p className="text-[2rem] leading-small font-bold">soller</p>
        </Link>
        <ul className="hidden sm:flex items-center gap-4">
          <li>
            <Text variant="small">Products</Text>
          </li>
          <li>
            <Text variant="small">Solutions</Text>
          </li>
          <li>
            <Text variant="small">Services</Text>
          </li>
          <li>
            <Text variant="small">Configure</Text>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center px-2 py-3">
          <Image
            src="/assets/icons/headset.svg"
            height={24}
            width={24}
            alt="Headset"
          />
          <Text
            variant="small"
            className="leading-[1.5] w-[127px] text-center text-light-blue"
          >
            555 818 282
          </Text>
        </div>
        <CtaButton title="Request a Quote" className="hidden lg:flex" />
      </div>
    </nav>
  );
}
