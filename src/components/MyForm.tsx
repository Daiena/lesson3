import { useState } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import { IProduct } from "../types";
import { useProductDispatch } from "../hooks/useProductDispatch";
import { useListProduct } from "../hooks/useListProduct";
import { flushSync } from "react-dom";


const initValue:IProduct={
    id:0,
    count:1,
    inCart:false,
    name:"",
    price:0,
}

// interface MyFormProps{
//     addProduct: (product:IProduct)=>void;
// }

type TStatusForm = "empty" | "typing" | "submitting" | "success" | "error";

const MyForm=()=>{ 
    const dispatch=useProductDispatch();
    const listRef=useListProduct();
    const [status, setStatus]=useState<TStatusForm>("empty");
    const [product, setProduct]=useState<IProduct>(initValue);
    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
       if (e.target.value.length !==0) {
        setStatus("typing")
       } else {
        setStatus("empty")
       }
        setProduct({
        ...product,
        [e.target.name]:e.target.value,
       });   
       console.log(product);
    };
    const handleSubmit:React.FormEventHandler<HTMLFormElement>=(e)=>{
        e.preventDefault();
        flushSync(()=>{
            dispatch({
                type: "add",
                payload: product,
              })
        })
        setProduct(initValue);
        listRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        })
    };
    return(
        <>
        <h2>Добавление товаров</h2>
        <form onSubmit={handleSubmit}>
            <MyInput
                handleChange={handleChange} 
                name="name" 
                value={product.name} 
                placeholder="Название товара"
            />
            <MyInput 
                type="number" 
                handleChange={handleChange} 
                name="count" 
                value={product.count} 
                placeholder="Количество"  
            />
            <MyInput 
                type="number" 
                handleChange={handleChange} 
                name="price" value={product.price} 
                placeholder="Цена" 
            />
            <MyButton disabled={status !=="typing"} type="submit">Добавить товар</MyButton>
        </form>
        </>
       
    )
}

export default MyForm;