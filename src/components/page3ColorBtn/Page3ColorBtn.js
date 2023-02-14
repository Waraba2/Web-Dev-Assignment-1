import React from 'react';
import './Page3ColorBtn.css'
const Page3ColorBtn = () => {
    function changeColor() {
	let color = document.getElementById("rick").style.color;
	if (color === 'blue') {
		document.getElementById("rick").style.color = 'red';
	} else {
		document.getElementById("rick").style.color = 'blue';
	}
}
    return (
        <div className="Page3ColorBtn">
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Page3ColorBtn;
