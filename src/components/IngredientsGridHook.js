////////////////////////////IngredientsGridHook.js 
import React from 'react'; 

function BRed(props) { 
    return ( 
        <button className="red" onClick={props.handleClickIngred}>Red</button> 
    ); 
} 
function BBlue(props) { 
    return ( 
        <button className="blue" onClick={props.handleClickIngred}>Blue</button> 
        ); 
    } 
function BGreen(props) {
    return ( 
        <button className="green" onClick={props.handleClickIngred}>Green</button> 
    ); 
} 

function IngredientsGridHook(props) { 
    return ( 
        <div className="ingredientsStyle">
            <BRed handleClickIngred={props.handleClickIngred}/> 
            <BBlue handleClickIngred={props.handleClickIngred}/> 
            <BGreen handleClickIngred={props.handleClickIngred}/> 
        </div> 
    ); 
} 

export default IngredientsGridHook; 
