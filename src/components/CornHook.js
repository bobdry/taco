////////////////////////////CornHook.js 
import React from 'react'; 

function CornHook(props) { 
    return ( 
        <div className="cornStyle" onClick={props.handleClickCorn} > 
            {props.tacoIngredientStack} 
        </div> 
    ); 
} 

export default CornHook; 
