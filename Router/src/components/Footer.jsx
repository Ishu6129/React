import React, { useContext } from "react";
import { themecontext } from "../context/Themecontext.jsx";

const Footer = () => {
  const [mode, setmode] = useContext(themecontext);
  const isDark = mode === "dark";

  return (
    <div className="absolute bottom-0 w-full flex px-2 justify-center border-t-2 pt-4 py-2">

      <h1 className="text-xl font-medium">
        This is just a Footer
      </h1>

      <button
        className="absolute right-2 p-1 rounded-sm uppercase"
        onClick={() => setmode(isDark ? "light" : "dark")}
      >
        {mode}
      </button>
    </div>
  );
};

export default Footer;
