import TacoContainer from "./../components/tacoContainer";

const defaultTacos = [
    {
        "id": "r19su60",
        "createdAt": 1710248735002,
        "taconame": "The Western",
        "postOptions": "Cheese,Cheese,Crema,Red Salsa,Pinto Beans,Brown Rice,Beef,Onions,Beef,Onions,Beef,Onions,Beef"
    },
    {
        "id": "736mhvy",
        "createdAt": 1710248821930,
        "taconame": "The Tapatio",
        "postOptions": "Crema,Guacamole,Green Salsa,Tomatoes,Lettuce,Cilantro,Cilantro,Onions,Onions,al Pastor,al Pastor,al Pastor,al Pastor"
    },
    {
        "id": "8rov8es",
        "createdAt": 1710248837341,
        "taconame": "The Pacifico",
        "postOptions": "Crema,Crema,Green Salsa,Green Salsa,Tomatoes,Lettuce,Cilantro,Onions,Black Beans,White Rice,Shrimp,Shrimp,Shrimp"
    }
  ]

const Signature = () => {
    return (     
        <>
            <h3>Signature Tacos</h3>
            <ul className="taco-row signature-tacos">
                {defaultTacos.map((taco) => {
                    const optionsArr = taco.postOptions?.length ? taco.postOptions.split(',') : [];
                    return <li key={taco.id}>
                    <TacoContainer name={taco.taconame} selection={optionsArr}/>
                    </li>
                }
                )}
            </ul>
        </> 
    ); 
} 

export default Signature;