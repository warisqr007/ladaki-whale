"use client";

import { useState } from "react";

type GatekeeperProps = {
    nextScene: () => void;
};

const Gatekeeper: React.FC<GatekeeperProps> = ({ nextScene }) => {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // List of valid names (all in lowercase for case-insensitive checking)
    const validNames = ["aneet", "ladaki", "blue whale", "vampire", "pathar dil"];

    // Function to handle input validation
    const handleCheckName = () => {
        if (validNames.includes(inputValue.toLowerCase())) {
            nextScene(); // Move to the next scene if correct
        } else {
            setErrorMessage("Wrong answer. Try again!"); // Show error if incorrect
        }
    };

    // const backgroundStyle = {
    //     backgroundImage: 'url(/corridor.png)',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     textAlign: 'center',
    // };
    const backgroundStyle: React.CSSProperties = {
        backgroundImage: 'url(/corridor.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column' as const, // Explicitly specify type
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    };
    

    return (
        <div className="absolute inset-0" style={backgroundStyle}>
            {/* Question */}
            <div className="text-white text-xl md:text-2xl font-serif italic mb-6">
                Naam sirf ek awaaz hai, <br />
                tareekh sirf ek ginti… <br />
                Par tum jo ho… <br />
                kya ek ladaki ho? <br />
                Ek vampire? <br />
                Ek pathar dil? <br />
                Ya woh jo blue whale bhi kehlati hai? <br />
            </div>

            {/* Input Field + Button */}
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        setErrorMessage(""); // Reset error message when typing
                    }}
                    className="p-2 border border-white rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Your answer..."
                />
                <button
                    onClick={handleCheckName}
                    className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-300 transition"
                >
                    Submit
                </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
                <div className="text-red-500 mt-2">{errorMessage}</div>
            )}

        </div>
    );
};

export default Gatekeeper;
