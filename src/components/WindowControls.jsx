import useWindowStore from "#store/window";
import { Minus, Plus, X } from "lucide-react";

// eslint-disable-next-line react/prop-types
const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}>
        <X size={8} strokeWidth={4} className="text-black/60" />
      </div>
      <div className="minimize" onClick={() => minimizeWindow(target)}>
        <Minus size={8} strokeWidth={4} className="text-black/60" />
      </div>
      <div className="maximize" onClick={() => maximizeWindow(target)}>
        <Plus size={8} strokeWidth={4} className="text-black/60" />
      </div>
    </div>
  );
};

export default WindowControls;
