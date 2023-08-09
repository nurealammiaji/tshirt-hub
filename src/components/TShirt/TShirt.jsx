import './TShirt.css';

const TShirt = ({tshirt}) => {

    const {_id, name, picture, price} = tshirt;
    return (
        <div className='tshirt-card'>
            <div className="tshirt-image">
                <img src={picture} alt="" />
            </div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default TShirt;