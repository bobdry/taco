const Header = ({params}) => {
    const home = Object.keys(params).length ? "" : "home";
    return (     
        <div className={`header ${home}`}>
            <a href="/">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 32 32" xmlSpace="preserve">
                <path d="M29.7,16.2l-4.4-4.8V4.7c0-0.6-0.4-1-0.9-1h-1.9c-0.5,0-0.9,0.5-0.9,1v2.6l-4.3-4.7c-0.7-0.8-1.9-0.8-2.6,0L2.3,16.2
	            c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.3,0l1.2-1.3v10.7c0,1.7,1.3,3,2.8,3h4.9V17.8h7v12.3h4.9c1.5,0,2.8-1.4,2.8-3V16.3l1.2,1.3
	            c0.4,0.4,1,0.4,1.3,0C30.1,17.2,30.1,16.6,29.7,16.2z"/>
                </svg>
            </a>
            <a href="#">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xmlSpace="preserve">
                <path d="M22,12c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6S22,8.7,22,12"/>
                <path d="M0,16C0,7.2,7.2,0,16,0s16,7.2,16,16s-7.2,16-16,16S0,24.8,0,16 M16,2C8.3,2,2,8.3,2,16c0,3.2,1.1,6.3,3.1,8.7C6.5,22.5,9.6,20,16,20s9.5,2.5,10.9,4.7c4.8-6,3.8-14.8-2.2-19.7C22.3,3.1,19.2,2,16,2"/>
                </svg>
            </a>
            <h1>TacoStack</h1>
            <h2>A simple app for taco customization.</h2>
        </div> 
    ); 
} 

export default Header;