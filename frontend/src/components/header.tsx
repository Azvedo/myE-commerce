import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Header : React.FC = () => {
    return (
        <header className="flex justify-around items-center w-full h-32 bg-[#d9dcde] text-white">
            <img className="w-64" src="/E-commerce.png" alt="logo" />
            <div>
                <FontAwesomeIcon icon={faUserAlt} />
                <FontAwesomeIcon icon={faSignInAlt} />
            </div>
        </header>
    );
}

export default Header;