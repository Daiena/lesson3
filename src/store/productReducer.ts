import { IActionProduct, IProduct } from "../types/products";



export const productReducer=(products:IProduct[], {type, payload:product}: IActionProduct)=>{
    switch (type) {
        case "add" : {
            return [...products,{
                ...product,
                id: Date.now(),
                count: +product.count,
                price: +product.price,
            }];
        }
        case "update":{
            return products.map(p=> p.id === product.id ? product : p);
        }
        case "delete":{
            return products.filter(p=> p.id !== product.id);
        }
        default:{
            return products;
        }
    }
}