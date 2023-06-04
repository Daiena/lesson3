import MyButton from './components/MyButton';
import Profile from './components/Profile';
import Product, { IProduct } from "./components/Product";
import ProductList from './components/ProductList';

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
 
  return (
    <div>
      <h1>Мое первое приложение на React</h1>
      <Profile />
      <MyButton />
      <ProductList products={products} />
    </div>
  );
}

export default App;
