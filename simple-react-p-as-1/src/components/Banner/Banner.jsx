import React from 'react';
import './Banner.css'
import cricketbannerlogo from '../../assets/images/cr-bn-logo-removebg-preview.png'
const Banner = ({handelcoin}) => {
    return (
        <div className='banner-contaienr  mx-13'>
            <img src={cricketbannerlogo} alt="" />
            <h3 className='text-4xl font-bold '>Bangladesh Premier League Cricket Team 11</h3>
            <button onClick={handelcoin} className='claim-button text-2xl'>Claim Free Coins</button>
        </div>
    );
};

export default Banner;