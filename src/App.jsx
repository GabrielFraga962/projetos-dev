import { Welcome, Navbar, Dock } from "./components";
import Terminal from "./windows/Terminal";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Safari from "./windows/Safari";
import Resume from "./windows/Resume";

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
    </main>
  );
};

export default App;
