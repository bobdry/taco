/////////////////////// Taco 
import React, { useState } from 'react'; 
import Flour from "./components/Flour"; 
import Corn from "./components/Corn"; 
import Ingredient from "./components/Ingredient"; 
import IngredientGrid from './components/IngredientGrid'; 
import SubmitBoxes from './components/SubmitBoxes';
import ResetOrder from './components/ResetOrder';  

function Taco() { 
    const [tacoChildren, setTacoChildren] = useState([]); 
    const [isHidden, setIsHidden] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(true); 
    const [tacoIngredientStack, setTacoIngredientStack] = useState([]); 
    
    function handleClickFlour () { 
        setTacoChildren([<Flour key= { 0} />]); 
        setIsHidden(false); 
    } 
    
    function handleClickCorn () { 
        setTacoChildren([<Corn key={ 1 }/>]); 
        setIsHidden(false); 
    } 
    
    function handleClickRemove () { 
        setTacoChildren([]); 
        setTacoIngredientStack([]); 
        setIsHidden(true); 
    } 

    function handleClickReset () { 
        setTacoIngredientStack([]); 
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
            setTacoIngredientStack([...tacoIngredientStack, <Ingredient handleIngChoice={handleIngChoice} key= {idx}/>]);  
        } 
        else { 
            alert('Your Taco is FULL!'); 
        } 
    } 

    function handleSubmitOrder() {
        let submittedBox = [];
        if (tacoIngredientStack.length > 0) {
            submittedBox.push(tacoChildren[0].type.name);
            tacoIngredientStack.forEach(function (item) { 
                submittedBox.push(item.type.name);
            });
            setIsSubmitted(false);
            window.scrollTo(0,0);
        }
        else {
            alert('Add some tasty ingredients.');
        }
    }

    function handleResetOrder() {
        setTacoChildren([]); 
        setTacoIngredientStack([]); 
        setIsHidden(true); 
        setIsSubmitted(true);
        window.scrollTo(0,0);
    }

    return ( 
        <div> 
        <div className={`torts ${isHidden ? "down" : "up"}`}>
            <div className="taco-title">
                <h1>Taco Stack</h1>
                <p>A simple app for taco customization.</p>
            </div>
            <Flour handleClickFlour={handleClickFlour}/> 
            <Corn handleClickCorn={handleClickCorn}/> 
        </div> 
        <div className="tacoContainer"> 
            {!isHidden && <button className="removeB taco-back" onClick={handleClickRemove}></button>} 
            {!isHidden && <button className="removeB taco-reset" onClick={handleClickReset}></button>} 
            <div className={`tacoIngredientContainer ${isHidden ? "hide" : "show"}`}> 
                <ul>
                {tacoIngredientStack.map((item, idx) => ( 
                    <li key={idx} onClick={() => handleClickRemoveIngred(idx)}>
                        {item}
                    </li>
                ))}
                </ul>
            </div> 
            {tacoChildren} 
            <div className={`ingreds-vis ${isHidden ? "hide" : "show"}`}> 
                {!isHidden && <IngredientGrid handleClickIngred={handleClickIngred}/>}
                {!isHidden && <SubmitBoxes handleSubmitOrder={handleSubmitOrder}/>} 
            </div>
            <div className={`order-submitted ${isSubmitted ? "hide" : "show"}`}>
                <div className="rims">
                    <div className="taco-rim"></div>
                    <div className="taco-rim-blue"></div>
                </div>
                <h3><em>What a delicious taco!</em></h3>
                <ResetOrder handleResetOrder={handleResetOrder}/>
            </div>
        </div> 
        <div className="monkik-icons">
            <p>tacostack.app = react + gh-pages</p>
            <p>icons by <a href="https://www.flaticon.com/authors/monkik" title="monkik" target="_blank" rel="noopener noreferrer">monkik</a></p>
        </div>
        </div> 
    ); 
} 
        
export default Taco; 