import { useParams } from "react-router";
import Header from "../components/Header";
import books from "../json/books.json";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

function Product(){
    const { productId } = useParams();
    const book = books.find(
        (x) => x.ID === Number(productId)
    );

    return (
        <div className="container mx-auto main-layout">
            <Header
                title="Books Detail"
                slogan="If you love books, books love you too."
            />
            <ProductDetail book={book} />
            <Footer />
        </div>
    );
}

export default Product;