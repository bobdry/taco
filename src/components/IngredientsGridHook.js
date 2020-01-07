////////////////////////////IngredientsGridHook.js 
import React from 'react'; 

let isChoice = ['Chicken','Beef','al Pastor','Fish','Shrimp','Tofu','Cheese','Crema','Guacamole','Black Beans','Pinto Beans','Lettuce','Tomatoes','Onions','Red Salsa','Green Salsa']

function IngredientsGridHook(props) { 
    return (     
        <div className="ingredients">
            {isChoice.map((choice, idx) => ( 
                <li key={idx}>
                    <button className={choice} onClick={props.handleClickIngred}>{choice}</button> 
                </li>
            ))}
        </div> 
    ); 
} 

export default IngredientsGridHook; 
