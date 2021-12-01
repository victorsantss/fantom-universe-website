import { Container, SubTitle } from "./styles";
import twitterLogo from "../../assets/twitter-logo.png";

export function Footer() {
  return (
    <>
      <Container>
        <SubTitle>Follow us</SubTitle>
        <a href="https://twitter.com/fantom_universe?t=akCLHIpspyjsRc59vJOp9g&s=08">
          <img src={twitterLogo} alt="Fantom Universe Twitter" />
        </a>
      </Container>
    </>
  );
}
