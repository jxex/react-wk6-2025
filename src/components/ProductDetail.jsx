import AddToBasket from "./AddToBasket";

function ProductDetail({ book }){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
            <div className="lg:col-span-6 lg:col-start-3">
                <img
                    alt={book.title}
                    src={book.cover}
                    className="w-full aspectRatio-[2/3] object-cover object-center rounded-md"
                />
            </div>
            <div className="lg:col-span-14 px-4">
                <h2 className="text-white opacity-40 mb-1 text-lg">{book.author}</h2>
                <h1 className="text-white text-2xl font-bold mb-2">{book.title}</h1>
                <p className="text-white opacity-60 mb-4 text-base">{book.summary}</p>
                
                <div className="flex flex-col gap-8 mt-30">
                    <p className="text-white text-2xl font-semibold">US${book.price}.00</p>
                    <AddToBasket />
                </div>
            </div>
        </div>
    );

}

export default ProductDetail;