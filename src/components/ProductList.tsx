import { useProducts } from "../hooks/useProducts";
import Product from "./Product";


// interface ProductListProps{
//     products: IProduct[];
//     updateProduct: (product:IProduct)=>void;
//     deleteProduct: (product:IProduct)=>void;
// }

const ProductList=()=>{
    const products= useProducts();
    return (
        <table className="table table-bordered">
            {products.length >0 ? products.map((product) =>(
                <Product
                 key={product.id} 
                 product={product}
                 />
            )) 
            : (
                <tr>
                    <td>
                        <h2> Добавьте товары</h2>
                    </td>
                </tr>
                
            )
            }          
        </table>
    );
};

export default ProductList;