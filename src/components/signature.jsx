import TacoContainer from "./../components/tacoContainer";

const defaultTacos = [
    {
        "id": "r19su60",
        "createdAt": 1710248735002,
        "taconame": "The Western",
        "postOptions": "Beef,Onions,Beef,Onions,Beef,Brown Rice,Pinto Beans,Red Salsa,Crema,Cheese"
    },
    {
        "id": "736mhvy",
        "createdAt": 1710248821930,
        "taconame": "The Tapatio",
        "postOptions": "al Pastor,al Pastor,al Pastor,Onions,Cilantro,Lettuce,Tomatoes,Green Salsa,Guacamole,Crema"
    },
    {
        "id": "8rov8es",
        "createdAt": 1710248837341,
        "taconame": "The Pacifico",
        "postOptions": "Shrimp,Shrimp,Shrimp,Shrimp,Lettuce,Onions,Cilantro,Tomatoes,Crema,Green Salsa"
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