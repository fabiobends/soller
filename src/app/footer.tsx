import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/text";

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-20 py-8">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2" href="#">
          <Image
            aria-hidden
            src="/assets/icons/soller-logo.svg"
            alt="Logo"
            width={33}
            height={56}
          />
          <Text variant="highlight">soller</Text>
        </Link>
        <Text variant="small">@ 2023 Soller, Inc. All rights reserved.</Text>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <Text variant="small">Terms</Text>
          </li>
          <li>
            <Text variant="small">Privacy</Text>
          </li>
          <li>
            <Text variant="small">Cookies</Text>
          </li>
        </ul>
      </div>
    </footer>
  );
}
