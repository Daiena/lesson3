import React, { useReducer } from "react";
import MyButton from "../components/MyButton";
import Profile from "../components/Profile";
import Product, { IProduct } from "../components/Product";
import ProductList from "../components/ProductList";
import Counter from "../components/Counter";
import { useState } from 'react';
import MyInput from '../components/MyInput';
import MyForm from '../components/MyForm';
import { productReducer } from "../store/productReducer";
import ThemesChanger from "../components/ThemesChanger";

const initialState=[
    {id:1, count:1, name:"Бананы", inCart:false, price:1000},
  ]

const HomePage=()=>{

// const [productList, setProductList]=useState<IProduct[]>(initialState);
const [productList, dispatch]=useReducer(productReducer, initialState);
const addProduct=(product:IProduct)=>{
  dispatch({
    type: "add",
    payload: product,
  })
  // product.id=Math.max(...productList.map(p=>p.id), 0)+1;
  // setProductList([...productList, product]);
};

const updateProduct=(product:IProduct):void=>{
  dispatch({
    type: "update",
    payload: product,
  })
  // setProductList(productList.map(p =>p.id === product.id? product : p))
}

const deleteProduct=(product:IProduct):void=>{
  dispatch({
    type: "delete",
    payload: product,
  })
  // setProductList(productList.filter(p =>p.id !== product.id))
}
    return(
    <>
        <div className="row">
            <div className="col-12">
            <ThemesChanger />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
            <MyForm addProduct={addProduct} />
            </div>           
        </div>
        <div className="row">
            <div className="col-12">
            <ProductList products={productList}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
            />
            </div>           
        </div>
    </> 
    );
};

export default HomePage;