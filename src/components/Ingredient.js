//////////////////////////// Ingredient 
import React from 'react'; 

function IngHook(props) { 
        return ( 
            <div className={`ingChoice ${props.handleIngChoice}`}>
                {props.handleIngChoice} 
            </div>
        );
    } 
    
export default IngHook; 