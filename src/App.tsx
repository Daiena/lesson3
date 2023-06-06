import MyButton from './components/MyButton';
import Profile from './components/Profile';
import Product, { IProduct } from "./components/Product";
import ProductList from './components/ProductList';
import Counter from './components/Counter';
import { useState } from 'react';
import MyInput from './components/MyInput';

function App() {
  const products: IProduct[]=[
    {
      id: 1,
      name: "Яблоки",
      count: 2,
      price: 100,
      inCart: true,
  },
  {
    id: 1,
    name: "Груши",
    count: 3,
    price:200,
    inCart: true,
}
  ]
 
  const showAlert=()=>{
    alert ("Нажата кнопка 1");
  }
  const showAlert2=()=>{
    alert ("Нажата кнопка 2");
  }
  const [count, setCount]=useState<number>(0);
  const onIncrement=()=>{
      setCount(count+1);
  };
  return (
    <div>
      <h1>Мое первое приложение на React</h1>
      <Profile />
      <MyButton onClick={showAlert}>кнопка</MyButton>
      <MyButton onClick={showAlert2}>кнопка 2</MyButton>
      <ProductList products={products} />
      <Counter count={count} onIncrement={onIncrement} />
      <Counter count={count} onIncrement={onIncrement} />
      <MyInput />
    </div>
  );
}

export default App;
