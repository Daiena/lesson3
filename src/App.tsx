// import MyButton from './components/MyButton';
// import Profile from './components/Profile';
// import Product, { IProduct } from "./components/Product";
// import ProductList from './components/ProductList';
// import Counter from './components/Counter';
// import { useState } from 'react';
// import MyInput from './components/MyInput';
// import MyForm from './components/MyForm';
import HomePage from './pages/HomePage';

// const initialState=[
//   {id:1, count:1, name:"Бананы", inCart:false, price:1000},
// ]

function App() {
//   const products: IProduct[]=[
//     {
//       id: 1,
//       name: "Яблоки",
//       count: 2,
//       price: 100,
//       inCart: true,
//   },
//   {
//     id: 1,
//     name: "Груши",
//     count: 3,
//     price:200,
//     inCart: true,
// }
//   ]
// const [productList, setProductList]=useState<IProduct[]>(initialState);

// const addProduct=(product:IProduct)=>{
//   product.id=Math.max(...productList.map(p=>p.id), 0)+1;
//   setProductList([...productList, product]);
// };

// const updateProduct=(product:IProduct):void=>{
//   setProductList(productList.map(p =>p.id === product.id? product : p))
// }

// const deleteProduct=(product:IProduct):void=>{
//   setProductList(productList.filter(p =>p.id !== product.id))
// }

  return(
    <div className='container'>
    <HomePage />
    </div>
    // <div>
    //   <MyForm addProduct={addProduct} />
    //   <ProductList products={productList}
    //   updateProduct={updateProduct}
    //   deleteProduct={deleteProduct}
    //   />
    // </div>
  )
};

  // const showAlert=()=>{
  //   alert ("Нажата кнопка 1");
  // }
  // const showAlert2=()=>{
  //   alert ("Нажата кнопка 2");
  // }
  // const [count, setCount]=useState<number>(0);
  // const onIncrement=()=>{
  //     setCount(count+1);
  // };
  // return (
  //   <div>
  //     <MyForm />
  //   </div>
    // <div>
    //   {/* <h1>Мое первое приложение на React</h1>
    //   <Profile />
    //   <MyButton onClick={showAlert}>кнопка</MyButton>
    //   <MyButton onClick={showAlert2}>кнопка 2</MyButton>
    //   <ProductList products={products} />
    //   <Counter count={count} onIncrement={onIncrement} />
    //   <Counter count={count} onIncrement={onIncrement} /> */}
    //   <MyForm />
    // </div>
//   );
// }

export default App;
