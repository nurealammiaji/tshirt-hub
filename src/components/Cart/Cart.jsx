import './Cart.css';

const Cart = ({cart, removeFromCart}) => {

    let massage;
    if (cart.length === 0) {
        massage = "Please buy somthing !!";
    }

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
            {massage}
            {
                cart.map(tshirt => <div className='cart-item' key={tshirt._id}>
                    <img src={tshirt.picture} alt="" />
                    <p>{tshirt.name}</p>
                    <button onClick={() => removeFromCart(tshirt._id)}>X</button>
                    </div>)
            }
        </div>
    );
};

export default Cart;