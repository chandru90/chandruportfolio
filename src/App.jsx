import Hero from "./components/Hero";
import Internships from "./components/Internships";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Certifications from "./components/certifications";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Internships />
      <Certifications />
      <Projects />
    </>
  );
};
export default App;
