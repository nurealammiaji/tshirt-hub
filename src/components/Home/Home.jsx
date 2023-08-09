import './Home.css';
import { useLoaderData } from "react-router-dom";
import TShirt from '../TShirt/TShirt';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {

    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const addToCart = (tshirt) => {
        let newCart = [...cart, tshirt];
        setCart(newCart);
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
                <h3>Cart Area: {cart.length}</h3>
                <div>
                    {
                        cart.map(tshirt => (<Cart key={tshirt._id} cart={cart}></Cart>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;