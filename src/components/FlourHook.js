////////////////////////////FlourHook.js 
import React from 'react'; 

function FlourHook(props) { 
    return ( 
        <div className="tortilla flour" onClick={props.handleClickFlour} > 
            <p>Flour</p>
            {props.tacoIngredientStack} 
        </div> 
    );
    } 
    
export default FlourHook; 