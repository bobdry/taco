///////////////////////TacoHookjs 
import React, { useState } from 'react'; 
import FlourHook from "./components/FlourHook"; 
import CornHook from "./components/CornHook"; 
import IngredientsGridHook from './components/IngredientsGridHook'; 
import SubmitBoxes from './components/SubmitBoxes'; 

function TacoHook() { 
    const [tacoChildren, setTacoChildren] = useState([]); 
    const [isHidden, setIsHidden] = useState(true);
    const [isComplete, setIsComplete] = useState(true); 
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
            if (e.target.className === 'Chicken') { 
                setTacoIngredientStack([...tacoIngredientStack, <TastyRed key={idx}/>]); 
            } 
            if (e.target.className === 'Beef') { 
                setTacoIngredientStack([...tacoIngredientStack, <TastyBlue key={idx}/>]); 
            } 
            if (e.target.className === 'al Pastor') { 
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
            //alert(submittedBox);
            setIsComplete(false);
        }
        else {
            alert('add pills');
        }
    }

    return ( 
        <div> 
        <div className={`torts ${isHidden ? "down" : "up"}`}>
            <h1 className="screen-one">Taco Time</h1>
            <p className="screen-one">Pick you torrilla!</p> 
            <FlourHook handleClickFlour={handleClickFlour}/> 
            <CornHook handleClickCorn={handleClickCorn}/> 
            <p className="screen-one">Welcome</p>
            <p className="screen-one">This is a Taco app using React Hooks for fun :)</p>
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
            <div className={`order-complete ${isComplete ? "undone" : "done"}`}>
                <div className="tacoIngredientContainer"> 
                <ul>
                {tacoIngredientStack.map((item, idx) => ( 
                    <li key={idx}>
                        {item}
                    </li>
                ))}
                </ul>
                </div> 
                {tacoChildren} 
                <p>Thank you!</p>
            </div> 
        </div> 
    ); 
} 
        
export default TacoHook; 