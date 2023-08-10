import './Home.css';
import { useLoaderData } from "react-router-dom";
import TShirt from '../TShirt/TShirt';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {

    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const addToCart = (tshirt) => {
        const existing = cart.find(ts => ts._id === tshirt._id);
        if (existing) {
            toast('T-Shirt already added !');
        }
        else {
            let newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const removeFromCart = (id) => {
        let remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining);
    }

    return (
        <div className="home-layout">
            <div className="tshirt-area">
                <div className="tshirt-container">
                    {
                        tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} addToCart={addToCart}></TShirt>)
                    }
                </div>
            </div>
            <div className="cart-area">
                <div className='cart-container'>
                    {
                        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;