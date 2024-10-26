import { CtaButton } from "@/components/cta-button";
import { Text } from "@/components/text";
import Image from "next/image";

export function Header() {
  return (
    <nav className="flex items-center justify-between gap-4 py-8 px-20">
      <div className="flex gap-10 items-center">
        <Text variant="highlight" className="text-[2rem]">
          soller
        </Text>
        <ul className="flex items-center gap-4">
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
      <ul className="flex items-center gap-2">
        <Image
          src="/assets/icons/headset.svg"
          height={24}
          width={24}
          alt="Headset"
        />
        <li>
          <Text variant="small" className="leading-[1.5] text-light-blue">
            555 818 282
          </Text>
        </li>
        <li className="ml-6">
          <CtaButton title="Request a Quote" />
        </li>
      </ul>
    </nav>
  );
}
