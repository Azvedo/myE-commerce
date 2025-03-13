const Header = () => {
    return (
        <header className="flex justify-around items-center w-full h-20 bg-gray-800 text-white">
            <img className="w-64" src="/E-commerce.png" alt="logo" />
            <ul className="flex justify-around items-center w-1/4">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    );
}

export default Header;