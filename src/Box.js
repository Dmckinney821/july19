import React from 'react';


function printMessage() {
    console.log('hello from the box!!! let me out')
}

const Box = (props) => {
    return (
        <div className='box'>
        {props.message}
        <button onClick={printMessage}>click me!</button>
        </div>


    );
}
















export default Box;