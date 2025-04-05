import AddToBasket from "./AddToBasket";
import { useState } from 'react';

function ProductDetail({ book, qty, setQty }){
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
                
                <div className="flex flex-col gap-3 mt-10">
                    <p className="text-white text-2xl font-semibold">US${book.price}.00</p>
                    <p className="font-bold text-white opacity-60">
                        <span>Status</span>: {book.stock > 0 ? "In Stock" : "Unavailable"}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-white opacity-60">Qty:</span>
                        <select
                            className="select select-bordered w-20 bg-[#111818] text-white"
                            value={qty}
                            onChange={event => setQty(event.target.value)}
                        >
                            {[...Array(book.stock).keys()].map((x) => (
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p className="text-white opacity-60 font-bold">
                        <span>Total Price</span>: {book.price * qty}
                    </p>
                    <AddToBasket book={book} qty={qty}/>
                </div>
            </div>
        </div>
    );

}

export default ProductDetail;