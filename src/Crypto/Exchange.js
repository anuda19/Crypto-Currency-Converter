import React from 'react';
import '../index.css'

const Exchange = ({exchangeRate}) => {
    return( 
    <div className='exc'>
    {exchangeRate}
    </div>);
}


export default Exchange;