import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import Image from "next/image";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container>
      <div className="relative sm:absolute flex justify-end w-full right-0 top-0 -z-10 pb-8 sm:pb-0">
        <Image
          src="/assets/images/solar-pv-installer.svg"
          alt="Solar PV Installer"
          width={673}
          height={694}
          priority
          className="absolute w-4/5 sm:w-auto"
        />
        <Image
          src="/assets/images/drop.svg"
          alt="Drop"
          width={673}
          height={694}
          priority
          className="w-4/5 sm:w-auto"
        />
        <Image
          src="/assets/images/small-drop.svg"
          alt="Small Drop"
          width={31}
          height={20}
          priority
          className="absolute bottom-5 right-20 sm:top-32 sm:right-80 sm:w-auto"
        />
      </div>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
