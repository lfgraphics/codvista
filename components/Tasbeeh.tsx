"use client";
import { useEffect, useState } from "react";
import { Check, Plus } from "lucide-react";
const audioPath = "/beep.mp3";
import "./css/tasbeeh.css";

const TasbeehCounter = () => {
  const [target, setTarget] = useState(33);
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("#counter-button")) {
        setDarkMode(false);
      }
    };

    if (darkMode) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [darkMode]);

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
    }
  };

  const handleChangeTarget = (newTarget: number) => {
    setTarget(newTarget);
    setCount(0); // Reset count when target changes
  };

  return (
    <div
      className={`flex relative mx-auto flex-col items-center h-screen max-w-[450px] pt-[70px]`}
    >
      <div
        className={`pointer-events-none ${darkMode ? "dark-overlay" : ""}`}
      ></div>
      <div className="mb-3 text-3xl font-bold">Target: {target}</div>
      <div className="head mb-3">ازکار و تسبیحات</div>
      <div className="flex gap-4 flex-row max-w-full px-4 min-h-28 overflow-x-scroll">
        <div className="min-w-80 min-h-16 rounded-lg border border-gray-600 flex items-center justify-center">
          <div className="arabic"></div>
          <div className="divider w-[90%] bg-gray-300 h-[2px]"></div>
          <div className="tarjuma"></div>
        </div>
        <div className="min-w-16 min-h-16 rounded-lg border border-gray-600 flex items-center justify-center">
          <Plus size={40} strokeWidth={3} />
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
