"use client";

import { useState } from "react";
import Prologue from "@/components/Prologue";
import LetterMessage from "@/components/LetterMessage";
import Corridor from "@/components/Corridor";
import ForgettenTime from "@/components/ForgettenTime";
import Gatekeeper from "@/components/Gatekeeper";
import Birthday from "@/components/Birthday";
import FinalLetter from "@/components/FinalLetter";

const Home = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => setScene((scene + 1)%7);

  return (
    <main className="flex items-center justify-center w-full h-screen">
      {scene === 0 && <Prologue nextScene={nextScene} />}
      {scene === 1 && <LetterMessage nextScene={nextScene} />}
      {scene === 2 && <Corridor nextScene={nextScene} />}
      {scene === 3 && <Gatekeeper nextScene={nextScene} />}
      {scene === 4 && <ForgettenTime nextScene={nextScene} />}
      {scene === 5 && <Birthday nextScene={nextScene} />}
      {scene === 6 && <FinalLetter nextScene={nextScene} />}
    </main>
  );
};

export default Home;
