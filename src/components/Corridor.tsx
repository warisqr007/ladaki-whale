"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type CorridorProps = {
    nextScene: () => void;
};

const Corridor: React.FC<CorridorProps> = ({ nextScene }) => {
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
                Kya kabhi tumne socha hai… <br />
                ki hum sirf kahaniyon mein zinda hain? <br />
                Ya shayad… <br />
                kahaniyaan sirf tabhi zinda hoti hain jab tum ho. <br />
            </div>

            {/* Action Button */}
            <div className="absolute bottom-24 right-10" onClick={nextScene}>
                <DotLottieReact
                    src="https://lottie.host/14b6e40d-4c22-4dc0-b8a2-d84ed6ad0218/QZsHzWzoeQ.lottie"
                    loop
                    autoplay
                    style={{ width: '40%' }}
                />
            </div>
        </div>
    );
};

export default Corridor;