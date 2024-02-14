function Header(){
    return (
    
        <header>
            <img src='data:image/png;base64,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' alt="React logo"/>
            <nav>
                <ul className="navList">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
)
}
export default Header;