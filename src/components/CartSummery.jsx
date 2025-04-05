import CartIcon from "./CartIcon";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice"
import BasketModal from "./BasketModal";

function CartSummery(){
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0) : 0;
    const toggleOpen = () => setIsOpen(!isOpen);

    return(
        <>
            <nav onClick={toggleOpen} className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer">
                <div className="indicator">
                    {count > 0 && <span className="indicator-item badge badge-primary text-white">{count}</span>}
                    <CartIcon size={32} color="white" />
                </div>
                <p className="text-xs opacity-60 mt-[-4px] text-white">Shopping bag</p>
            </nav>
            <BasketModal
                isOpen={isOpen}
                toggleModal={toggleOpen}
            />
        </>
    );

}

export default CartSummery;