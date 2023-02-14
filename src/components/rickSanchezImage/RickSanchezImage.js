import React from 'react';
import './RickSanchezImage.css'
import {rick} from '../../assets'
const RickSanchezImage = () => {
    return (
        <div className="RickSanchezImage">
            <img src={rick} alt='Rick Sanchez' style={{height:200, width:250}}/>
        </div>
    );
};

export default RickSanchezImage;
