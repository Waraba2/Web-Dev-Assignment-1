import React from 'react';
import {Link} from "react-router-dom";
import './Page2Link.css'
const Page2Link = () => {
    return (
        <div className="Page2Link">
            <Link to={"/Page2"}>Wara</Link>
        </div>
    );
};

export default Page2Link;
