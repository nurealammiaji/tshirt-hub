import './Home.css';
import { useLoaderData } from "react-router-dom";
import TShirt from '../TShirt/TShirt';
import { useState } from 'react';

const Home = () => {

    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        console.log(id, 'button clicked')
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
                <h3>Cart Area</h3>
            </div>
        </div>
    );
};

export default Home;