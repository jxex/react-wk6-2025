import { useParams, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import books from "../json/books.json";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";

function Product(){
    const { productId } = useParams();
    const book = books.find(
        (x) => x.ID === Number(productId)
    );

    const [searchParams] = useSearchParams();
    const [qty, setQty] = useState(1);

    useEffect(() =>{
        const qtyFromBasket = searchParams.get('qtyFromBasket');
        const parsedQty = qtyFromBasket ? Number(qtyFromBasket) : (book.stock > 0 ? 1 : 0);
        setQty(isNaN(parsedQty) || parsedQty < 0 ? 0 : parsedQty);
    }, [searchParams, book.stock]);

    return (
        <div className="container mx-auto main-layout">
            <Header
                title="Books Detail"
                slogan="If you love books, books love you too."
            />
            <ProductDetail book={book} qty={qty} setQty={setQty} />
            <Footer />
        </div>
    );
}

export default Product;