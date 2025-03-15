import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface SuccessProps {
    message: string;
}

const Success: React.FC<SuccessProps> = ({message}) => {
    return (
        <div className="fixed top-6/7 left-54 transform -translate-x-1/2 -translate-y-1/2 bg-[#2ccc13]/70 border-b-2 border-[#2ccc13] p-8 rounded-lg text-white">
            <FontAwesomeIcon icon={faCheck} className="text-[#2ccc13]" size="xl"/>
            {message}
        </div>
    );
}
export default Success;