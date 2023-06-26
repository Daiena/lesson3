import { MutableRefObject, createContext } from "react";
import { IProduct, IActionProduct } from "../../types/products";
export const ProductsContext=createContext<IProduct[]>([]);
export const ProductsDispatchContext=createContext<React.Dispatch<IActionProduct>>(()=>{});
export const ListProductContext=createContext<MutableRefObject<HTMLTableSectionElement | null>>({current:null});