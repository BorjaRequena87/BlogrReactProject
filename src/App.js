import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import DesignSection from "./components/DesignSection";
import MiddleSection from "./components/MiddleSection";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <DesignSection />
      <MiddleSection />
      <SecondSection />
      <Footer />   
    </>
  );
}

export default App;
