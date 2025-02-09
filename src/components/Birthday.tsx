"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

type BirthdayProps = {
    nextScene: () => void;
};

const Birthday: React.FC<BirthdayProps> = ({ nextScene }) => {
    const [showTextIndex, setShowTextIndex] = useState(0);
    const [showFireworks, setShowFireworks] = useState(false);
    const [showBirthday, setShowBirthday] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    // Background fade-in effect
    useEffect(() => {
        const textSequence = async () => {
            await new Promise((res) => setTimeout(res, 1000));
            setShowTextIndex(1); // Show first text
            await new Promise((res) => setTimeout(res, 2000));
            setShowTextIndex(2); // Show second text
            await new Promise((res) => setTimeout(res, 2000));
            setShowTextIndex(3); // Show third text
            await new Promise((res) => setTimeout(res, 2000));
            setShowTextIndex(0); // Hide text
            
            setShowFireworks(true); // Show fireworks
            await new Promise((res) => setTimeout(res, 4000));
            setShowFireworks(false); // Hide fireworks
            
            setShowBirthday(true); // Show Happy Birthday animation
            await new Promise((res) => setTimeout(res, 3000));
            setShowArrow(true); // Show arrow button
        };

        textSequence();
    }, []);

    return (
        <motion.div
            className="w-screen h-screen flex items-center justify-center flex-col"
            initial={{ opacity: 0, backgroundColor: "#000" }}
            animate={{ opacity: 1, backgroundColor: "#eda56b" }}
            transition={{ duration: 2 }}
        >
            {/* Text Sequence */}
            <AnimatePresence>
                {showTextIndex === 1 && (
                    <motion.div
                        className="text-white text-2xl md:text-4xl font-serif italic absolute"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Duniya ka sabse khoobsurat pal wahi hota hai jab tum muskurati ho.
                    </motion.div>
                )}
                {showTextIndex === 2 && (
                    <motion.div
                        className="text-white text-2xl md:text-4xl font-serif italic absolute"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Agar tum na hoti…
                    </motion.div>
                )}
                {showTextIndex === 3 && (
                    <motion.div
                        className="text-white text-2xl md:text-4xl font-serif italic absolute"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Toh yeh din bhi na hota.
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fireworks Animation */}
            {showFireworks && (
                <DotLottieReact
                    src="https://lottie.host/604cfe9f-6fb5-4fc2-80de-cbcdea88bb4c/zEGfCmvSlv.lottie"
                    autoplay
                    style={{
                        width: "100vw",
                        height: "100vh",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                />
            )}

            {/* Happy Birthday Animation */}
            {showBirthday && (
                <DotLottieReact
                    src="https://lottie.host/dfaa535b-526c-4efe-97f0-f1cfec4db4cc/1wd8bHC8ls.lottie"
                    autoplay
                    style={{ width: "80%", position: "absolute" }}
                />
            )}

            {/* Action Button */}
            {showArrow && (
                <div className="absolute bottom-10" onClick={nextScene}>
                    <DotLottieReact
                        src="https://lottie.host/14b6e40d-4c22-4dc0-b8a2-d84ed6ad0218/QZsHzWzoeQ.lottie"
                        autoplay
                        style={{ width: "30%" }}
                    />
                </div>
            )}
        </motion.div>
    );
};

export default Birthday;
