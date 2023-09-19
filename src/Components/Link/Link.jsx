import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='text-bold hover:bg-yellow-800 text-xl hover:text-white'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object
};

export default Link;