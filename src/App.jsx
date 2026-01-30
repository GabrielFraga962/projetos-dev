import { Welcome, Navbar, Dock, Home } from "./components";
import Terminal from "./windows/Terminal";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Safari from "./windows/Safari";
import Resume from "./windows/Resume";
import Contact from "./windows/Contact";
import Finder from "./windows/Finder";
import Text from "./windows/Text";
import Image from "./windows/Image";

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Contact />
      <Finder />
      <Text />
      <Image />
      <Home />
    </main>
  );
};

export default App;
