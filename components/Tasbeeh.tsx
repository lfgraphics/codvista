"use client";
import { useState, useEffect } from "react";
import { Check, Plus } from "lucide-react";
import "./css/tasbeeh.css";

const audioPath = "/beep.mp3";

interface Dua {
  arabicDua: string;
  tarjuma: string;
}

const TasbeehCounter = () => {
  const [target, setTarget] = useState(33);
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [duwaen, setDuwaen] = useState<Dua[]>(() => {
  if (typeof window !== 'undefined') {
    const savedDuwaen = localStorage.getItem("duwaen");
    return savedDuwaen ? JSON.parse(savedDuwaen) : [];
  } else {
    return [];
  }
});

useEffect(() => {
  if (typeof window !== 'undefined') {
    const savedDuwaen = localStorage.getItem("duwaen");
    if (savedDuwaen) {
      setDuwaen(JSON.parse(savedDuwaen));
    }
  }
}, []);

useEffect(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("duwaen", JSON.stringify(duwaen));
  }
}, [duwaen]);

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === target) {
  if (navigator.vibrate) {
    navigator.vibrate(300); // Vibrate for 500 milliseconds
    const vibrateInterval = setInterval(() => {
      // Check if the Vibration API is supported by the browser
      navigator.vibrate(300); // Vibrate for 500 milliseconds
    }, 800);
    setTimeout(() => {
      clearInterval(vibrateInterval); // Stop the interval after 1 second (2 repetitions)
    }, 1000);
  } else {
    console.log("Vibration API is not supported");
    // Fallback to other feedback mechanism if the Vibration API is not supported
  }
  const audio = new Audio(audioPath);
  audio.play(); // Play the beep sound when target is reached
  const intervalId = setInterval(() => {
    audio.play(); // Play the beep sound again after 500 milliseconds
  }, 300);
  setTimeout(() => {
    clearInterval(intervalId); // Stop the interval after 1 second (2 repetitions)
  }, 1000);
  setTimeout(() => {
    setCount(0);
  }, 1000);
}};
  
  const handleChangeTarget = (newTarget: number) => {
    setTarget(newTarget);
    setCount(0);
  };

  const handleAddDua = () => {
    const arabicDua = prompt("تسبیح عربی میں درج کریں");
    const tarjuma = prompt("تسبیح کا ترجمہ درجھ کریں");
    if (arabicDua && tarjuma) {
      const newDuwaen = [...duwaen, { arabicDua, tarjuma }];
      setDuwaen(newDuwaen);
    }
  };

  return (
    <div
      className={`flex relative mx-auto flex-col items-center h-screen max-w-[450px] overflow-hidden pt-[70px]`}
    >
      <div
        className={`pointer-events-none ${darkMode ? "dark-overlay" : ""}`}
      ></div>
      <div className="mb-3 text-3xl font-bold">Target: {target}</div>
      <div className="head mb-3">ازکار و تسبیحات</div>
      <div
        className="flex items-center gap-4 flex-row min-h-[215px] min-w-[95%] px-4 overflow-scroll"
        dir="rtl"
      >
        {/* Render existing duaen */}
        {duwaen.map((dua, index) => (
          <div
            key={index}
            className="max-w-80 min-w-[85%] h-auto rounded-lg border border-gray-600 flex flex-col flex-nowrap items-center justify-center"
          >
            <div className="arabic text-right p-4">{dua.arabicDua}</div>
            <div className="divider w-[90%] bg-gray-300 h-[2px]"></div>
            <div className="tarjuma text-right p-4">{dua.tarjuma}</div>
          </div>
        ))}
        <div className="min-w-16 min-h-16 rounded-lg border border-gray-600 flex items-center justify-center">
          <Plus size={40} strokeWidth={3} onClick={handleAddDua} />
        </div>
      </div>
      <div className="mt-3 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          {[7, 10, 33, 34, 40, 100].map((value) => (
            <button
              key={value}
              className={`${
                value === target ? "bg-blue-500 text-white" : "bg-gray-600"
              } active:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
              onClick={() => handleChangeTarget(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <input
          type="number"
          id="manual-input"
          className="mt-4 p-2 border border-gray-300 rounded bg-transparent outline-none"
          placeholder="Enter custom count"
          value={target}
          onChange={(e) => handleChangeTarget(parseInt(e.target.value))}
        />
      </div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Turn the screen on" : "Turn the screen off"}
      </button>
      <div className="flex min-h-6 items-center mt-4 text-green-500">
        {count === target && (
          <>
            <Check className="mr-2" />
            Target Reached!
          </>
        )}
      </div>
      <div
        className="button w-full flex items-center justify-center text-center h-[50svh] rounded-tl-full rounded-tr-full bg-green-800 bg-opacity-40 backdrop-blur-lg"
        id="counter-button"
        onClick={handleCount}
      >
        <div id="counter" className="text-6xl mb-4">
          {count}
        </div>
      </div>
    </div>
  );
};

export default TasbeehCounter;
