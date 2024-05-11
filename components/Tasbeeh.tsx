"use client";
import { useState, useEffect, MouseEvent } from "react";
import {
  Check,
  Plus,
  Trash2,
  Vibrate,
  VibrateOff,
  Volume2,
  VolumeX,
} from "lucide-react";
import "./css/tasbeeh.css";
// import CustomPrompt from "./AzkarForm";

const audioPath = "/beep.mp3";

export interface Dua {
  arabicDua: string;
  tarjuma: string;
}

const CustomPrompt = ({
  onSubmit,
}: {
  onSubmit: (arabicDua: string, tarjuma: string) => void;
}) => {
  const [arabicDua, setArabicDua] = useState("");
  const [tarjuma, setTarjuma] = useState("");

  const handleSubmit = () => {
    onSubmit(arabicDua, tarjuma);
    setArabicDua("");
    setTarjuma("");
  };

  return (
    <div className="dark-overlay grid place-items-center">
      <div className="modal max-w-[400px] flex flex-col gap-4 text-center">
        <input
          className="text-center bg-transparent placeholder:text-gray-300 border border-white rounded-md p-3"
          type="text"
          placeholder="تسبیح عربی میں درج کریں"
          value={arabicDua}
          onChange={(e) => setArabicDua(e.target.value)}
        />
        <input
          className="text-center bg-transparent placeholder:text-gray-300 border border-white rounded-md p-3"
          type="text"
          placeholder="تسبیح کا ترجمہ درجھ کریں"
          value={tarjuma}
          onChange={(e) => setTarjuma(e.target.value)}
        />
        <button className="bg-blue-600 p-2 rounded-md" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

const TasbeehCounter = () => {
  const [target, setTarget] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTarget = localStorage.getItem("target");
      return savedTarget !== null && savedTarget !== "" && savedTarget !== "[]"
        ? Number(savedTarget)
        : 33;
    } else {
      return 33;
    }
  });
  const [count, setCount] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCount = localStorage.getItem("count");
      return savedCount !== null && savedCount !== "" && savedCount !== "[]"
        ? Number(savedCount)
        : 0;
    } else {
      return 0;
    }
  });
  const [darkMode, setDarkMode] = useState(false);
  const [sound, setSound] = useState(true);
  const [vibrate, setVibrate] = useState(true);
  const [modleOpen, setModleOpen] = useState(false);
  const [clientSide, setClientSide] = useState(false);
  const initialDuaen: Dua[] = [
    {
      arabicDua:
        "أَسْتَغْفِرُ اللَّهَ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ الْحَىُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
      tarjuma:
        "میں اللہ سے اپنے گناہوں کی بخشش مانگتا ہوں، جس کے سوا کوئی عبادت کے لائق نہیں، جو زندہ اور ہمیشہ رہنے والا ہے اور میں اس کی طرف توبہ کرتا ہوں۔",
    },
  ];
  const [duwaen, setDuwaen] = useState<Dua[]>(() => {
    if (typeof window !== "undefined") {
      const savedDuwaen = localStorage.getItem("duwaen");
      return savedDuwaen !== null && savedDuwaen !== "" && savedDuwaen !== "[]"
        ? JSON.parse(savedDuwaen)
        : initialDuaen;
    } else {
      return initialDuaen;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDuwaen = localStorage.getItem("duwaen");
      if (savedDuwaen) {
        setDuwaen(JSON.parse(savedDuwaen));
      }
      setClientSide(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("duwaen", JSON.stringify(duwaen));
    }
  }, [duwaen]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("target", target.toString());
    }
  }, [target]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("count", count.toString());
    }
  }, [count]);

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === target) {
      if (vibrate && navigator.vibrate) {
        navigator.vibrate(300);
        const vibrateInterval = setInterval(() => {
          navigator.vibrate(300);
        }, 800);
        setTimeout(() => {
          clearInterval(vibrateInterval);
        }, 1000);
      } else {
        console.log("Vibration API is not supported or vibration mode is off");
      }
      if (sound) {
        const audio = new Audio(audioPath);
        audio.play(); // Play the beep sound when target is reached
        const soundInterval = setInterval(() => {
          audio.play(); // Play the beep sound again after 500 milliseconds
        }, 300);
        setTimeout(() => {
          clearInterval(soundInterval);
        }, 1000);
      }
      setTimeout(() => {
        setCount(0);
      }, 1000);
    }
  };

  const handleChangeTarget = (newTarget: number) => {
    setTarget(newTarget);
    setCount(0);
  };

  const handleAddDua = (arabicDua: string, tarjuma: string) => {
    if (arabicDua && tarjuma) {
      const newDuwaen = [...duwaen, { arabicDua, tarjuma }];
      setDuwaen(newDuwaen);
    }
    setModleOpen(false);
  };

  const openModel = () => {
    setModleOpen(true);
  };

  const handleDeleteDua = (index: number) => {
    // Create a copy of the duwaen array without the dua at the specified index
    if (confirm("کیا آپ سچ میں یہ دعا ڈلیٹ کرنا چاہتے ہیں؟")) {
      const updatedDuwaen = [
        ...duwaen.slice(0, index),
        ...duwaen.slice(index + 1),
      ];
      // Update the state with the updated array
      setDuwaen(updatedDuwaen);
    }
  };

  const handleDarkMode = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== document.getElementById("counter-button")) {
      darkMode && setDarkMode(false);
    }
  };

  return (
    <div
      onClick={(e) => handleDarkMode(e)}
      className={`flex relative mx-auto flex-col items-center h-screen max-w-[450px] overflow-hidden pt-[70px]`}
    >
      {modleOpen && (
        <div>
          <CustomPrompt onSubmit={handleAddDua} />
        </div>
      )}
      <div
        onClick={() => setSound(!sound)}
        className="absolute left-1 bottom-80 bg-black rounded-full w-[60px] h-[60px] grid place-items-center z-[105]"
      >
        {sound ? <Volume2 /> : <VolumeX />}
      </div>
      <div
        onClick={() => setVibrate(!vibrate)}
        className="absolute right-1 bottom-80 bg-black rounded-full w-[60px] h-[60px] grid place-items-center"
      >
        {vibrate ? <Vibrate /> : <VibrateOff />}
      </div>
      <div
        onClick={(e) => handleDarkMode(e)}
        className={`pointer-events-none ${darkMode ? "dark-overlay" : ""}`}
      ></div>
      <div className="mb-3 text-3xl font-bold">
        {clientSide && `Target: ${target}`}
      </div>
      <div className="head mb-3">ازکار و تسبیحات</div>
      <div className="overflow-x-auto" dir="rtl">
        {clientSide && (
          <div className="flex gap-4 min-h-[215px] px-4">
            {/* Render existing duaen */}
            {duwaen.map((dua, index) => (
              <div
                key={index}
                className="flex-shrink-0 max-w-80 w-[85%] h-auto rounded-lg border border-gray-600 flex flex-col items-center justify-center"
              >
                <div className="arabic text-right p-4">{dua.arabicDua}</div>
                <div className="divider w-[90%] bg-gray-300 h-[2px]"></div>
                <div className="tarjuma text-right p-4">{dua.tarjuma}</div>
                <div
                  onClick={() => handleDeleteDua(index)}
                  id="dltbtn"
                  className="absolute top-0 right-0 p-1"
                >
                  <Trash2 size={20} />
                </div>
              </div>
            ))}
            <div className="min-w-16 min-h-16 rounded-lg border border-gray-600 flex items-center justify-center">
              <Plus size={40} strokeWidth={3} onClick={openModel} />
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          {clientSide &&
            [7, 10, 33, 34, 40, 100].map((value) => (
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
      <div onClick={(e) => setDarkMode(true)}>
        {darkMode ? "Turn the screen on" : "Turn the screen off"}
      </div>
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
          {clientSide && count}
        </div>
      </div>
    </div>
  );
};

export default TasbeehCounter;
