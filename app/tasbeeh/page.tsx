"use client";
import { useState } from "react";
import { Check } from "lucide-react";
const audioPath = "/beep.mp3";

const TasbeehCounter = () => {
  const [target, setTarget] = useState(33);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === target) {
      if (navigator.vibrate) {
        // Check if the Vibration API is supported by the browser
        navigator.vibrate(500); // Vibrate for 500 milliseconds
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
    }
  };

  const handleChangeTarget = (newTarget: number) => {
    setTarget(newTarget);
    setCount(0); // Reset count when target changes
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen pt-28">
      <div className="mb-8 text-3xl font-bold">Target: {target}</div>

      <div className="mt-8 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          {[7, 10, 33, 34, 40, 100].map((value) => (
            <button
              key={value}
              className={`${
                value === target ? "bg-blue-500" : "bg-gray-300"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
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
      {count === target && (
        <div className="flex items-center mt-4 text-green-500">
          <Check className="mr-2" />
          Target Reached!
        </div>
      )}
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