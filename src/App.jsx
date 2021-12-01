import { useEffect, useState } from "react";
import { Collection } from "./components/Collection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectInfo } from "./components/ProjectInfo";
import { Timer } from "./components/Timer";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ transform: `translateY(-${offsetY * 1}px)` }}>
      <GlobalStyle />
      <Header />
      <Timer />
      <Collection />
      <ProjectInfo />
      <Footer />
    </div>
  );
}
