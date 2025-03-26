import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

function Home(){
    return (
        <div className="container mx-auto main-layout">
            <Header 
                title="Bookstore"
                slogan="If you love books, books love you too."
            />
            <ProductList />
            <Footer />
        </div>
    );
}

export default Home;