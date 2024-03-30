import "../css/actionBtn.css";
import Star from "./star";
interface ActionButtonProps {
  text: string;
}


// export const svg = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlSpace="preserve"
//     version="1.1"
//     style={{
//       shapeRendering: "geometricPrecision",
//       textRendering: "geometricPrecision",
//       imageRendering: "auto",
//       fillRule: "evenodd",
//       clipRule: "evenodd",
//     }}
//     viewBox="0 0 784.11 815.53"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//   >
//     <defs></defs>
//     <g id="Layer_x0020_1">
//       <metadata id="CorelCorpID_0Corel-Layer"></metadata>
//       <path
//         className="fil0"
//         d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
//       ></path>
//     </g>
//   </svg>
// );

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  return (
    <button>
      {text}
      <div className="star-1"><Star color="fill-white"/></div>
      <div className="star-2"><Star color="fill-white"/></div>
      <div className="star-3"><Star color="fill-white"/></div>
      <div className="star-4"><Star color="fill-white"/></div>
      <div className="star-5"><Star color="fill-white"/></div>
      <div className="star-6"><Star color="fill-white"/></div>
    </button>
  );
};

export default ActionButton;
