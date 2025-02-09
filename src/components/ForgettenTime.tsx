"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type ForgettenTimeProps = {
    nextScene: () => void;
};

const ForgettenTime: React.FC<ForgettenTimeProps> = ({ nextScene }) => {
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
            <div className="text-white text-xl md:text-2xl font-serif italic" style={textStyle}>
                Jis din tum aayi thi, us din hawa bhi alag chal rahi thi… <br />
                Jaise kisi ne kahaniyon mein ek naya raag likh diya ho. <br />
                Kabhi kisi ne mehendi se likh diya tha ek naam… <br />
                Tumhare hone se hi waqt ka matlab hai. <br />
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

export default ForgettenTime;