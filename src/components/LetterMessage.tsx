"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type LetterMessageProps = {
    nextScene: () => void;
};

const LetterMessage: React.FC<LetterMessageProps> = ({ nextScene }) => {
    return (
        <div
            className="relative flex flex-col items-start justify-center h-screen w-screen bg-cover bg-center text-black p-6 md:p-12"
            style={{ backgroundImage: "url(/letter.png)" }}
        >
            {/* Poetic Message */}
            <div className="max-w-3xl text-2xl md:text-4xl font-serif italic leading-relaxed">
                Aaj ka din likha hi nahi gaya tha... <br />
                Shayad duniya bhoolne lagi thi. <br />
                Par ek ladaki jo sirf lafzon mein mili thi, <br />
                usne ek din ko waapas dhoondh liya.
            </div>

            {/* Lottie Animation */}
            <div className="mt-6">
                <DotLottieReact
                    src="https://lottie.host/5b584110-5def-423b-9791-0d648fe8ee27/In8qBEYcp6.lottie"
                    loop
                    autoplay
                    style={{ width: "60%", height: "auto" }}
                />
            </div>

            {/* Action Button */}
            <div className="absolute bottom-24 right-10">
                <button
                    onClick={nextScene}
                    className="text-black font-serif border italic border-black px-6 py-3 transition hover:bg-black hover:text-white"
                >
                    Khojne Chalein?
                </button>
            </div>
        </div>
    );
};

export default LetterMessage;
