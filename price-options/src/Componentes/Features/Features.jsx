import PropTypes from 'prop-types';
import React from 'react';
import { PiSignOutBold } from "react-icons/pi";
const Features = ({feature}) => {
    return (
        <div>
            <h4  className="text-2xl flex items-center "><PiSignOutBold className='mx-4 text-green-500'></PiSignOutBold>{feature}</h4>
        </div>
    );
};
Features.porpsType = {
    feature : PropTypes.string
}
export default Features;