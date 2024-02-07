////////////////////////////CornHook.js 
import React from 'react'; 

function CornHook(props) { 
    return ( 
        <div className="tortilla corn" onClick={props.handleClickCorn} > 
        <p>Corn</p>
            {props.tacoIngredientStack} 
        </div> 
    ); 
} 

export default CornHook; 
