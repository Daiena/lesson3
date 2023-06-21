import { createContext } from "react";
import { TTheme } from "../../types";

export const ThemeContext= createContext<TTheme>("ligth");
export const ThemeDispatchContext= createContext<React.Dispatch<React.SetStateAction<TTheme>>>(()=>{});
