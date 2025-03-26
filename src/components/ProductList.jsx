import ProductItem from "./ProductItem"
import products from "../json/books.json";

function ProductList(){
    return (
        <div className="flex flex-wrap">
            {
                products.map((product) => (
                    <ProductItem key={product.ID} product={product} />
                ))
            }
        </div>
    );
}

export default ProductList;