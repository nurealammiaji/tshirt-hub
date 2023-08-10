import './Cart.css';

const Cart = ({cart, removeFromCart}) => {

    let massage;
    if (cart.length === 0) {
        massage = "Please buy somthing !!";
    }

    return (
        <div>
            <h3>Order Quantity: {cart.length}</h3>
            {massage}
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