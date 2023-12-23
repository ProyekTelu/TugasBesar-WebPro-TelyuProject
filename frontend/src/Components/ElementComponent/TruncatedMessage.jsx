import React, { useState } from 'react';

const TruncatedMessage = ({ message, maxLength, textClass }) => {
    const [isFullMessageVisible, setFullMessageVisible] = useState(false);

    const truncatedMessage = isFullMessageVisible
        ? message
        : message.length > maxLength
            ? `${message.slice(0, maxLength)}...`
            : message;

    const handleClick = () => {
        setFullMessageVisible(!isFullMessageVisible);
    };

    return (
        <div>
            <p className={`whitespace-pre-wrap`}>{truncatedMessage}</p>
            {message.length > maxLength && (
                <button
                    onClick={handleClick}
                    className="text-tertiary hover:text-tertiaryAlternative underline cursor-pointer"
                >
                    {isFullMessageVisible ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
};

export default TruncatedMessage;