import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface SuccessProps {
    message: string;
}

const Error: React.FC<SuccessProps> = ({message}) => {
    return (
        <div className="fixed top-6/7 left-54 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/70 border-b-2 border-red-700 p-8 rounded-lg text-white">
            <FontAwesomeIcon icon={faXmark} className="text-red-500" size="xl"/>
            {message}
        </div>
    );
}
export default Error;