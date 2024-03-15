const TacoContainer = ({name, selection}) => {
    return (     
        <div className="taco-container">
            <div className="taco-top"></div>
            <ul>
            {selection.map((choice, idx) => ( 
                <li className={choice} key={idx}>
                    {choice} 
                </li>
            ))}
            </ul>
            <p className="taco-name">{name}</p>
        </div> 
    ); 
} 

export default TacoContainer;