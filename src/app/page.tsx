import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import Image from "next/image";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container>
      <Image
        src="/assets/images/solar-pv-installer.svg"
        alt="Solar PV Installer"
        width={673}
        height={694}
        priority
        className="absolute right-0 top-0 -z-10"
      />{" "}
      <Image
        src="/assets/images/drip.svg"
        alt=""
        width={673}
        height={694}
        priority
        className="absolute right-0 top-0 -z-20"
      />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
