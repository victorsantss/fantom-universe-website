import { Collection } from "./components/Collection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectInfo } from "./components/ProjectInfo";
import { Timer } from "./components/Timer";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Timer />
      <Collection />
      <ProjectInfo />
      <Footer />
    </>
  );
}
