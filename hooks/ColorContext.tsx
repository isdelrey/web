import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export enum ColorMode {
  light = "light",
  dark = "dark",
}

const ColorModeValues: string[] = Object.values(ColorMode);

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    if (media.matches) return ColorMode.dark;
  }

  return ColorMode.light;
};

export const ColorContext = createContext(null);

export function ColorProvider({ children }) {
  const [colorMode, setColorMode] = useState(getInitialTheme);

  function switchColorMode() {
    const getNextColor = (mode: ColorMode) =>
      ColorModeValues[
        (ColorModeValues.findIndex((v) => v == mode) + 1) %
          ColorModeValues.length
      ] as ColorMode;

    setColorMode(getNextColor);
  }

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(...ColorModeValues);
    root.classList.add(colorMode);
  }, [colorMode]);



  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const watch = event => {
      if (event.matches) 
        setColorMode(ColorMode.dark)
       else
        setColorMode(ColorMode.light)
    }
    
    media
      .addEventListener('change', watch)

    return () => media.removeEventListener('change', watch)
  }, []);

  return (
    <ColorContext.Provider value={{ colorMode, setColorMode, switchColorMode }}>
      {children}
    </ColorContext.Provider>
  );
}

export const useColorMode: () => {
  setColorMode: Dispatch<SetStateAction<ColorMode>>;
  switchColorMode: () => null;
  mode: ColorMode;
} = () => useContext(ColorContext);
