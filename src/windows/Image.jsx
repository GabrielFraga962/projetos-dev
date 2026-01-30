/* eslint-disable react/prop-types */
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <span className="font-semibold text-gray-500">{data.name}</span>
      </div>

      <div className="p-2 bg-gray-200 h-full flex items-center justify-center overflow-hidden">
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </>
  );
};

export default WindowWrapper(Image, "imgfile");
