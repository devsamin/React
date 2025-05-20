import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name, path} = route
  return (
    
    <li className="mr-6 hover:bg-gray-500">
    <a href={path}>{name}</a>
  </li>
  );
};
Link.propTypes = {
  route : PropTypes.object
} 
export default Link;
