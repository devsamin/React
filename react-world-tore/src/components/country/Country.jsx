import React, { useState } from 'react';
import './country.css'
const Country = ({country,handelvisitedcountry,addvisitedflag }) => {
    // console.log(country)
    const {name,flags,population, cca3} = country
    const [visited, setVisited] = useState(false)
    const HandelVisited = ()=>{
        setVisited(!visited)
    }
    // console.log(handelvisitedcountry)
   
    return (
        <div className={`country ${visited?'visited-country': 'non-visited'}`}>
            <h3>
                name : {name?.common}
            </h3>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <p>            <small>Code : {cca3}</small>
            </p>
            <button onClick={HandelVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'I have visited this country' : 'I want to go this country'}
            <button onClick={()=>handelvisitedcountry(country)}>MarkVisited</button>
            <button onClick={()=>addvisitedflag(country.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country;