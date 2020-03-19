///////////////////////TacoHookjs 
import React, { useState } from 'react'; 
import FlourHook from "./components/FlourHook"; 
import CornHook from "./components/CornHook"; 
import IngHook from "./components/IngHook"; 
import IngredientsGridHook from './components/IngredientsGridHook'; 
import SubmitBoxes from './components/SubmitBoxes';
import ResetOrder from './components/ResetOrder';  

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
        let handleIngChoice = e.target.className;
        if (idx < 9) { 
            setTacoIngredientStack([...tacoIngredientStack, <IngHook handleIngChoice={handleIngChoice} key= {idx}/>]);  
        } 
        else { 
            alert('Your Taco is FULL!'); 
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
            alert('Add some tasty ingredients.');
        }
    }

    function handleResetOrder() {
        setTacoChildren([]); 
        setTacoIngredientStack([]); 
        setIsHidden(true);
        setIsComplete(true); 
    }

    return ( 
        <div> 
        <div className={`torts ${isHidden ? "down" : "up"}`}>
            <h1>Taco Time</h1>
            <p>Pick your tortilla!</p> 
            <FlourHook handleClickFlour={handleClickFlour}/> 
            <CornHook handleClickCorn={handleClickCorn}/> 
            <p><strong>Welcome</strong></p>
            <p>A Taco app using React Hooks for fun :)</p>
        </div> 
        <div className="tacoContainer"> 
            {!isHidden && <button className="removeB" onClick={handleClickRemove}>X</button>} 
            <div className="tacoIngredientContainer"> 
            <ul>
            {tacoIngredientStack.map((item, idx) => ( 
                <li key={idx} onClick={() => handleClickRemoveIngred(idx)}>
                    {item}
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
                <h3><em>What a delicious taco!</em></h3>
                <ResetOrder handleResetOrder={handleResetOrder}/>
                <div className="taco-rim"></div>
            </div> 

            <div className="monkik-icons">Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  
        </div> 
    ); 
} 
        
export default TacoHook; 