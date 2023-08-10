import './Cart.css';

const Cart = ({cart, removeFromCart}) => {

    return (
        <div>
            <h3>Order Quantity: {cart.length}</h3>
            {
                cart.map(tshirt => <div className='cart-item' key={tshirt._id}>
                    <p>{tshirt.name}</p>
                    <button onClick={() => removeFromCart(tshirt._id)}>X</button>
                    </div>)
            }
        </div>
    );
};

export default Cart;