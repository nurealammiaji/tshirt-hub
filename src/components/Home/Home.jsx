import './Home.css';
import { useLoaderData } from "react-router-dom";
import TShirt from '../TShirt/TShirt';

const Home = () => {

    const tshirts = useLoaderData();
    console.log(tshirts);

    return (
        <div className="home-layout">
            <div className="tshirt-area">
                <div className="tshirt-container">
                    {
                        tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt}></TShirt>)
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