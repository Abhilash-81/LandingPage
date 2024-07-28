import { useState } from "react";
import BlankPage from "./components/BlankPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page6 from "./components/Page6";
import Portfolio from "./components/Portfolio";
import Faq from "./components/Faq";
import Logos from "./components/Logos";
import Contact from "./components/Contact";
import Investors from "./components/Investors";

function App() {
  return (
    <div className="bg-[f4f5f7]">
      <Page1 />
      <BlankPage />
      <Page2 />
      <BlankPage />
      <BlankPage />
      <Page3 />
      <BlankPage />
      <Page4 />
      <Logos />
      <BlankPage />
      <Page6 />
      <BlankPage />
      <Investors />
      <BlankPage />
      <Portfolio />
      <BlankPage />
      <Faq />
      <BlankPage />
      <Contact />
    </div>
  );
}

export default App;
