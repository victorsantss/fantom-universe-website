import { Container, Img, SubTitle } from "./styles";
import logoImg from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Img src={logoImg} alt="Fantom Universe" />
      <SubTitle>Explore and discover the NFT Cosmos</SubTitle>
    </Container>
  );
}
