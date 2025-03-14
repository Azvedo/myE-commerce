import React from 'react';

const Header : React.FC = () => {
    return (
        <header className="flex justify-around items-center w-full h-32 bg-[#dadada] text-white">
            <img className="w-64" src="/E-commerce.png" alt="logo" />
        </header>
    );
}

export default Header;