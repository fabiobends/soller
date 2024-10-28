import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
