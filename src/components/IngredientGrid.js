//////////////////////////// IngredientGrid 
import React from 'react'; 

let isChoice = ['Chicken','Beef','al Pastor','Fish','Shrimp','Tofu','Black Beans','Pinto Beans','Lettuce','Tomatoes','Onions','Cheese','Crema','Guacamole','Red Salsa','Green Salsa']

function IngredientsGridHook(props) { 
    return (     
        <div className="ingredients">
            <ul>
            {isChoice.map((choice, idx) => ( 
                <li key={idx}>
                    <button className={choice} onClick={props.handleClickIngred}>{choice}</button> 
                </li>
            ))}
            </ul>
        </div> 
    ); 
} 

export default IngredientsGridHook; 
