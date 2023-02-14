import React from 'react';
import {Link} from "react-router-dom";
import './HomeLink.css'
const HomeLink = () => {
    return (
        <div class="HomeLink">
            <Link to={'/'}>Back to Home</Link>
        </div>
    );
};

export default HomeLink;
