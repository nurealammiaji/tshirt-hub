import './Cart.css';

const Cart = ({cart, removeFromCart}) => {

    let message;
    cart.length === 0 ? message = "Please add somthing !!" : message = "";

    let plural;
    if (cart.length === 1) {
        plural = "T-Shirt";
    }
    else if (cart.length >= 1) {
        plural = "T-Shirts";
    }
    else {
        plural = "";
    }

    return (
        <div>
            <h3>Order Quantity: {cart.length} {plural}</h3>
            <hr />
            <br />
            {message}
            {
                cart.map(tshirt => <div className='cart-item' key={tshirt._id}>
                    <img src={tshirt.picture} alt="" />
                    <p>{tshirt.name}</p>
                    <button onClick={() => removeFromCart(tshirt._id)}>X</button>
                    </div>)
            }
            <br />
            {
                cart.length >= 1 && <p>Thanks for adding !!</p>
            }
        </div>
    );
};

export default Cart;