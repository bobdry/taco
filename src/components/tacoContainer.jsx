const TacoContainer = ({name, selection, handleClick, editable = false }) => {
    return (
        <div className="taco-container">
            <div className="taco-top"></div>
            <ul>
            {selection.map((choice, idx) => ( 
                <li className={choice} key={idx}>
                    {choice} 
                    {editable && 
                        <button onClick={handleClick}>x</button>
                    }
                </li>
            ))}
            </ul>
            <p className="taco-name">{name}</p>
        </div> 
    ); 
} 

export default TacoContainer;