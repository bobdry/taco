///////////////////////TacoHookjs 
import React, { useState } from 'react'; 
import FlourHook from "./components/FlourHook"; 
import CornHook from "./components/CornHook"; 
import IngredientsGridHook from './components/IngredientsGridHook'; 
import SubmitBoxes from './components/SubmitBoxes'; 

function TacoHook() { 
    const [tacoChildren, setTacoChildren] = useState([]); 
    const [isHidden, setIsHidden] = useState(true); 
    const [tacoIngredientStack, setTacoIngredientStack] = useState([]); 
    
    function handleClickFlour () { 
        setTacoChildren([<FlourHook key= { 0} />]); 
        setIsHidden(false); 
    } 
    
    function handleClickCorn () { 
        setTacoChildren([<CornHook key={ 1 }/>]); 
        setIsHidden(false); 
    } 
    
    function handleClickRemove () { 
        setTacoChildren([]); 
        setTacoIngredientStack([]); 
        setIsHidden(true); 
    } 

//ingredient components 
function TastyRed() { 
    return ( 
    <div className="ingIng redIng">RED</div> 
    ); 
} 
function TastyBlue() { 
    return ( 
    <div className="ingIng blueIng">BLUE</div> 
    ); 
} 
function TastyGreen() { 
    return ( <div className="ingIng greenIng">GREEN</div> 
    ); 
} 

function handleClickRemoveIngred (idx) {
// assigning the list to temp variable 
const temp = [...tacoIngredientStack]; 
// removing the element using splice 
temp.splice(idx, 1); 
// updating the list 
setTacoIngredientStack(temp); 
} 

function handleClickIngred (e) {
    let idx = tacoIngredientStack.length; 
    if (idx < 12) { 
        if (e.target.className === 'red') { 
            setTacoIngredientStack([...tacoIngredientStack, <TastyRed key={idx}/>]); 
        } 
        if (e.target.className === 'blue') { 
            setTacoIngredientStack([...tacoIngredientStack, <TastyBlue key={idx}/>]); 
        } 
        if (e.target.className === 'green') { 
            setTacoIngredientStack([...tacoIngredientStack, <TastyGreen key= { idx}/>]); 
        } 
    } 
    else { 
        alert('The BOX is FULL!'); 
    } 
} 

function handleSubmitBoxes() {
    let submittedBox = [];
    if (tacoIngredientStack.length > 0) {
        submittedBox.push(tacoChildren[0].type.name);
        tacoIngredientStack.forEach(function (item) { 
            submittedBox.push(item.type.name);
        });
        alert(submittedBox);
    }
    else {
        alert('add pills');
    }
}

return ( 
<div> 
    <div className={`torts ${isHidden ? "down" : "up"}`}> 
        <FlourHook handleClickFlour={handleClickFlour}/> 
        <CornHook handleClickCorn={handleClickCorn}/> 
    </div> 
    <div className="tacoContainer"> 
        {!isHidden && <button className="removeB" onClick={handleClickRemove}>X</button>} 
        <div className="tacoIngredientContainer"> 
        <ul>
        {tacoIngredientStack.map((item, idx) => ( 
            <li key={idx}>
                {item} <button onClick={() => handleClickRemoveIngred(idx)}>X</button>
            </li>
        ))}
        </ul>
        </div> 
        {tacoChildren} 
        </div> 
    <div className={`ingreds-vis ${isHidden ? "hide" : "show"}`}> 
        {!isHidden && <IngredientsGridHook handleClickIngred={handleClickIngred}/>}
        {!isHidden && <SubmitBoxes handleSubmitBoxes={handleSubmitBoxes}/>} 
    </div> 
</div> 
); 
} 
        
export default TacoHook; 