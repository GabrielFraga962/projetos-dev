/* eslint-disable react/prop-types */
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <span className="font-semibold text-gray-500">{data.name}</span>
      </div>

      <div className="p-6 overflow-y-auto h-full bg-white max-h-[60vh]">
        <div className="flex flex-col gap-4">
          {data.image && (
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto rounded-md"
            />
          )}

          {data.subtitle && (
            <h2 className="text-xl font-bold text-gray-800">{data.subtitle}</h2>
          )}

          {data.description &&
            Array.isArray(data.description) &&
            data.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-sm">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default WindowWrapper(Text, "txtfile");
