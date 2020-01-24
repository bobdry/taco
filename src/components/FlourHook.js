////////////////////////////FlourHook.js 
import React from 'react'; 

function FlourHook(props) { 
    return ( 
        <div className="flourStyle" onClick={props.handleClickFlour} > 
            <p>Flour</p>
            {props.tacoIngredientStack} 
        </div> 
    );
    } 
    
export default FlourHook; 