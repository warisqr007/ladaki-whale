// "use client";

// import { useEffect, useState } from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// import Image from "next/image";

// type PrologueProps = {
//     nextScene: () => void;
// };

// const Prologue: React.FC<PrologueProps> = ({ nextScene }) => {
//     const [opacity, setOpacity] = useState(0);
//     const [showText, setShowText] = useState(false);
//     const [typedText, setTypedText] = useState("");
//     const [showAnimation, setShowAnimation] = useState(false);
//     const [started, setStarted] = useState(false); // Ensures interaction before playing sound
//     const text = "Kabhi kabhi lagta hai ki kuch log bas lafzon mein baste hain… aur phir pata chalta hai ki lafzon mein bhi ek duniya hoti hai.";

//     const startPrologue = () => {
//         setStarted(true);

//         // Start fade-in effect
//         const fadeInterval = setInterval(() => {
//             setOpacity((prev) => Math.min(prev + 0.02, 1));
//         }, 100);

//         // Play the sound
//         const audio = new Audio("/temp.mp3");
//         audio.play().catch(() => console.log("Autoplay prevented"));

//         // When sound reaches halfway, start typing effect
//         audio.ontimeupdate = () => {
//             if (audio.currentTime >= audio.duration / 2) {
//             setShowText(true);
//             audio.ontimeupdate = null; // Remove the event listener
//             }
//         };

//         return () => clearInterval(fadeInterval);
//     };

//     useEffect(() => {
//         if (showText) {
//             let index = 0;
//             const typingInterval = setInterval(() => {
//                 if (index < text.length) {
//                     setTypedText((prev) => prev + text[index]);
//                     index++;
//                 } else {
//                     clearInterval(typingInterval);
//                     //   setTimeout(nextScene, 2000);
//                     setTimeout(() => {
//                         setShowAnimation(true);
//                         // const audio2 = new Audio("/temp.mp3");
//                         // audio2.play();
//                     }, 1000);
//                 }
//             }, 200);
//             return () => clearInterval(typingInterval);
//         }
//     }, [showText]);

//     return (
//         <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
//             {/* Click to Start Overlay */}
//             {!started && (
//                 <div
//                     className="absolute w-full h-full bg-black flex items-center justify-center text-white text-2xl cursor-pointer"
//                     onClick={startPrologue}
//                 >
//                     Tap to Start
//                 </div>
//             )}

//             {/* Background Image with Fade-In Effect */}
//             {started && (
//                 <div
//                     className="absolute w-full h-full transition-opacity duration-1000"
//                     style={{ opacity }}
//                 >
//                     <Image
//                         src="/candle.png"
//                         alt="Candle"
//                         fill
//                         className="object-cover"
//                     />
//                 </div>
//             )}

//             {/* Poetic Text with Typewriter Effect */}
//             <div className="absolute flex flex-col items-end text-right pr-[5%] pl-[25%]">
//                 {showText && (
//                     <p className="text-white text-3xl md:text-5xl font-serif italic">
//                         {typedText}
//                     </p>
//                 )}

//                 {/* Lottie Animation (Right Below Text) */}
//                 {showAnimation && (
//                     <div className="w-32 h-32 cursor-pointer mt-4" onClick={nextScene}>
//                         <DotLottieReact
//                             src="https://lottie.host/08cd5728-a838-43ea-ac0c-ab6e5edcf404/UkIOj0x2B7.lottie"
//                             loop
//                             autoplay
//                         />
//                     </div>
//                 )}
//             </div>
            
//         </div>
//     );
// };

// export default Prologue;

"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

type PrologueProps = {
    nextScene: () => void;
};

const Prologue: React.FC<PrologueProps> = ({ nextScene }) => {
    const [opacity, setOpacity] = useState(0);
    const [showText, setShowText] = useState(false);
    const [typedWords, setTypedWords] = useState<string[]>([]);
    const [showAnimation, setShowAnimation] = useState(false);
    const [started, setStarted] = useState(false); // Ensures interaction before playing sound
    const text =
        "Kabhi kabhi lagta hai ki kuch log bas lafzon mein baste hain… aur phir pata chalta hai ki lafzon mein bhi ek duniya hoti hai.";

    const wordsArray = text.split(" ");

    const startPrologue = () => {
        setStarted(true);

        // Start fade-in effect
        const fadeInterval = setInterval(() => {
            setOpacity((prev) => Math.min(prev + 0.02, 1));
        }, 100);

        // Play the sound
        const audio = new Audio("/temp.mp3");
        audio.play().catch(() => console.log("Autoplay prevented"));

        // When sound reaches halfway, start word-by-word effect
        audio.ontimeupdate = () => {
            if (audio.currentTime >= audio.duration / 2) {
                setShowText(true);
                audio.ontimeupdate = null; // Remove the event listener
            }
        };

        return () => clearInterval(fadeInterval);
    };

    useEffect(() => {
        if (showText) {
            let index = 0;
            const typingInterval = setInterval(() => {
                if (index < wordsArray.length) {
                    setTypedWords((prev) => [...prev, wordsArray[index]]);
                    index++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        setShowAnimation(true);
                    }, 1000);
                }
            }, 400); // Word-by-word effect every 400ms
            return () => clearInterval(typingInterval);
        }
    }, [showText]);

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Click to Start Overlay */}
            {!started && (
                <div
                    className="absolute w-full h-full bg-black flex items-center justify-center text-white text-2xl cursor-pointer"
                    onClick={startPrologue}
                >
                    Tap to Start
                </div>
            )}

            {/* Background Image with Fade-In Effect */}
            {started && (
                <div
                    className="absolute w-full h-full transition-opacity duration-1000"
                    style={{ opacity }}
                >
                    <Image
                        src="/candle.png"
                        alt="Candle"
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Poetic Text with Word-by-Word Effect */}
            <div className="absolute flex flex-col items-end text-right px-8 md:px-20">
                {showText && (
                    <p className="text-white text-2xl md:text-4xl font-serif italic leading-relaxed">
                        {typedWords.join(" ")}
                    </p>
                )}

                {/* Lottie Animation (Appears Below Text) */}
                {showAnimation && (
                    <div className="w-24 md:w-32 h-24 md:h-32 cursor-pointer mt-4" onClick={nextScene}>
                        <DotLottieReact
                            src="https://lottie.host/08cd5728-a838-43ea-ac0c-ab6e5edcf404/UkIOj0x2B7.lottie"
                            autoplay
                            loop
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Prologue;
