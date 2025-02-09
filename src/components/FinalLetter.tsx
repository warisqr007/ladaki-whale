"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type FinalLetterProps = {
    nextScene: () => void;
};

const FinalLetter: React.FC<FinalLetterProps> = ({ nextScene }) => {
    const backgroundStyle = {
        backgroundImage: 'url(/corridor.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
    };

    const textStyle = {
        paddingLeft: '5%',
        paddingRight: '25%',
        paddingTop: '60%',
    };

    return (
        <div className="absolute center" style={backgroundStyle}>
            <div className="text-white text-2xl md:text-4xl font-serif italic" style={textStyle}>
                Kuch rishte sirf milne se nahi bante… <br />
                Kabhi kabhi, sirf lafzon se bhi duniya jee sakti hai. <br />
                Aur kabhi kabhi… <br />
                ek ladaki jo sirf lafzon mein mili thi, <br />
                usne ek din ko waapas dhoondh liya. <br />

            </div>
            
            {/* Action Button */}
            <div className="absolute bottom-24 right-10">
                <button
                    onClick={nextScene}
                    className="text-black font-serif border italic border-black px-6 py-3 transition hover:bg-black hover:text-white"
                >
                    Ek baar phir?
                </button>
            </div>
        </div>
    );
};

export default FinalLetter;