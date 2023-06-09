import Product, { IProduct } from "./Product";

interface ProductListProps{
    products: IProduct[];
    updateProduct: (product:IProduct)=>void;
    deleteProduct: (product:IProduct)=>void;
}

const ProductList=({products, updateProduct, deleteProduct}: ProductListProps)=>{
    return (
        <div>
            {products.length >0 ? products.map((product) =>(
                <Product
                 key={product.id} 
                 product={product}
                 updateProduct={updateProduct}
                 deleteProduct={deleteProduct}
                 />
            )) 
            : (
                <h2> Добавьте товары</h2>
            )
            }          
        </div>
    );
};

export default ProductList;