import { createContext } from "react";
import { IProduct, IActionProduct } from "../../types/products";
export const ProductsContext=createContext<IProduct[]>([]);
export const ProductsDispatchContext=createContext<React.Dispatch<IActionProduct>>(()=>{});