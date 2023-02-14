import React from 'react';
import './Page2BodyTable.css'
import {lion, puma, jaguar}  from '../../assets'
const Page2BodyTable = () => {
    return (
        <div className="Page2BodyTable">
            <table className="caption_table">
                <tr>
                    <td><img src={lion} alt='lion' style={{height:250, width:250}}/></td>
                    <td><img src={jaguar} alt='puma' style={{height:250, width:250}}/></td>
                    <td><img src={puma} alt='Jaguar' style={{height:250, width:250}}/></td>
                </tr>
                <tr>
                    <td><p>Lion</p></td>
                    <td><p>Puma</p></td>
                    <td><p>Jaguar</p></td>
                </tr>
            </table>
        </div>
    );
};

export default Page2BodyTable;
