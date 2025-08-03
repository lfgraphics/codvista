import Link from "next/link";
import "../css/actionBtn.css";
import Star from "./star";
interface ActionButtonProps {
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  return (
    <Link href="#contact">
    <button>
      {text}
      <div className="star-1"><Star color="fill-white"/></div>
      <div className="star-2"><Star color="fill-white"/></div>
      <div className="star-3"><Star color="fill-white"/></div>
      <div className="star-4"><Star color="fill-white"/></div>
      <div className="star-5"><Star color="fill-white"/></div>
      <div className="star-6"><Star color="fill-white"/></div>
    </button>
    </Link>
  );
};

export default ActionButton;
