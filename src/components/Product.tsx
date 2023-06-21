import { useProductDispatch } from "../hooks/useProductDispatch";
import { IProduct } from "../types/products";
import MyButton from "./MyButton";


interface ProductProps{
    product: IProduct,
    // updateProduct: (product:IProduct)=>void;
    // deleteProduct: (product:IProduct)=>void;
}

const Product=({product}: ProductProps)=>{
const {count, inCart, name,price}=product;
const dispatch= useProductDispatch();
const handleIncrement=()=>{
    dispatch ({
        type: "update",
        payload:{
            ...product,
            count: product.count +1
          }
    });
};
const handleDecrement=()=>{
    dispatch ({
        type: "update",
        payload:{
            ...product,
            count: product.count -1
          }
    });
};
const handleDelete=()=>{
    dispatch ({
        type: "delete",
        payload: product,
    });
}

const toggleCart=()=>{
    dispatch ({
        type: "update",
        payload: {
            ...product,
            inCart: !product.inCart
        }
    });
}

    return (
        <tr>
            <td>{inCart && "✔"}</td>
            <td>{name}</td>
            <td>{count}</td>
            <td>{price}</td>
            <td>{price*count}</td>
            <td><MyButton onClick={toggleCart}>В корзине</MyButton></td>
            <td>
            <MyButton onClick={handleIncrement}>+1</MyButton>
            <MyButton onClick={handleDecrement}>-1</MyButton>
            </td>
            <td><MyButton onClick={handleDelete}>Удалить</MyButton></td>
        </tr>
   )
}

export default Product;