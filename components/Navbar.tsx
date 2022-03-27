export const Navbar = () => {

    return (
        <div id="nav-container">
            <div className="bg"></div>
            <div className="button" tabIndex={0}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </div>
            <div id="nav-content" tabIndex={0}>
                <ul>
                    <li><a href="#0">Home</a></li>
                    <li><a href="#0">Work history</a></li>
                    <li><a href="#0">Projects</a></li>
                    <li><a href="#0">About</a></li>
                    <li><a href="#0">Contact</a></li>
                    <li className="small"><a href="https://www.linkedin.com/in/krishan-v-884172a4/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                </ul>
            </div>
        </div >
    );


}