import MyButton from "./MyButton";

export interface IProduct{
    id: number,
    name: string,
    count: number,
    price: number,
    inCart: boolean,
}
interface ProductProps{
    product: IProduct,
    updateProduct: (product:IProduct)=>void;
    deleteProduct: (product:IProduct)=>void;
}

const Product=({product, updateProduct, deleteProduct}: ProductProps)=>{
const {count, inCart, name,price}=product;
const handleIncrement=()=>{
  updateProduct({
    ...product,
    count: product.count +1
  });
};
const handleDecrement=()=>{
    updateProduct({
        ...product,
        count: product.count -1
      });
   };
const handleDelete=()=>{
    deleteProduct(product);
}

const toggleCart=()=>{
    updateProduct({
        ...product,
       inCart: !product.inCart
      });
}

    return (
    <div>
        <span className="span">{inCart && "✔"}</span>
        <span className="span">{name}</span>
        <span className="span">{count}</span>
        <span className="span">{price}</span>
        <span className="span">{price*count}</span>
        <MyButton onClick={toggleCart}>В корзине</MyButton>
        <MyButton onClick={handleIncrement}>+1</MyButton>
        <MyButton onClick={handleDecrement}>-1</MyButton>
        <MyButton onClick={handleDelete}>Удалить</MyButton>
    </div>
   )
}

export default Product;