const Header = ({params}) => {
    const home = Object.keys(params).length ? "" : "home";
    return (     
        <div className={`header ${home}`}>
            <h1>TacoStack</h1>
            <h2>A simple app for taco customization.</h2>
        </div> 
    ); 
} 

export default Header;