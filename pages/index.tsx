import type { NextPage } from 'next';

import Header from "../components/header/header";
import Projects from "../components/projects/projects";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import ModalProvider from "../contexts/modalcontext";

const Home: NextPage = () => {
  return (
    <div className="App">
      <ModalProvider>
        <Header />
        <Projects />
        <About />
        <Footer />
        <Contact />
      </ModalProvider>
    </div>
  )
}

export default Home

