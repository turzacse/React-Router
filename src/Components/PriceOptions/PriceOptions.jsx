import PropTypes from 'prop-types';
const PriceOptions = (option) => {
    const {name, price, features} = option.option;
    console.log(name, price);
    return (
        <div className=' bg-green-600 p-4 rounded-lg'>
            <h2 className='text-center mb-3'>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h5 className='text-3xl font-bold text-center mb-2 '>{name}</h5>
            <hr />
            <div className='mt-2'>
                {
                    features.map(feature => <p>{feature}</p>)
                }
            </div>
            <button className='btn mt-4 bg-blue-400 border-none capitalize text-lg'>Purches</button>
        </div>
    );
};

PriceOptions.propTypes = {
    option: PropTypes.object
};
export default PriceOptions;