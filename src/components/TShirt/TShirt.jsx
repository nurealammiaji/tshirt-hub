import './TShirt.css';

const TShirt = ({tshirt, addToCart}) => {

    const {_id, name, picture, price} = tshirt;

    return (
        <div className='tshirt-card'>
            <div className="tshirt-image">
                <img src={picture} alt="" />
            </div>
            <div className='tshirt-details'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button className='tshirt-btn' onClick={() => addToCart(tshirt)}>Buy Now</button>
            </div>
        </div>
    );
};

export default TShirt;