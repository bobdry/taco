let isChoice = ['Chicken','Beef','al Pastor','Fish','Shrimp','Tofu','Black Beans','Pinto Beans','Brown Rice','White Rice','Quinoa','Cilantro','Lettuce','Tomatoes','Onions','Cheese','Crema','Guacamole','Red Salsa','Green Salsa']

const TacoOptions = ({addOption}) => {
    return (     
        <div className="ingredients">
            <ul>
            {isChoice.map((choice, idx) => ( 
                <li key={idx}>
                    <button 
                    type="button" 
                    className={choice}
                    onClick={addOption}
                    >
                    {choice}
                    </button> 
                </li>
            ))}
            </ul>
        </div> 
    ); 
} 

export default TacoOptions;