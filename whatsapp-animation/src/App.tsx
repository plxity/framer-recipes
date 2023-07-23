import { useState, useEffect, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DocumentMinusIcon,
  CameraIcon,
  UserIcon,
  PhotoIcon,
  ShareIcon,
  PaperClipIcon,
} from "@heroicons/react/24/solid";

const Icons = [DocumentMinusIcon, CameraIcon, UserIcon, PhotoIcon, ShareIcon];

const listOptions = {
  open: {
    y: 50,
    scale: 0.6,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  animate: {
    y: 0,
    scale: 1,
  },
  close: {
    y: 15,
    opacity: 0,
    scale: 0.7,
  },
};

const colors = [
  "bg-green-300",
  "bg-red-300",
  "bg-blue-300",
  "bg-yellow-300",
  "bg-purple-300",
];

function App() {
  const optionContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        optionContainerRef.current &&
        !optionContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const renderOptions = () => {
    return Icons.map((Icon, i) => {
      return (
        <motion.li
          className="mt-4 cursor-pointer"
          variants={listOptions}
          key={i}
        >
          <span
            className={`flex ${colors[i]} w-14 h-14 justify-center items-center rounded-full`}
          >
            <Icon className="w-6 h-6" />
          </span>
        </motion.li>
      );
    });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="main-container relative flex-col">
      <motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul initial="open" animate="animate" exit="close">
              {renderOptions()}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>

      <div
        ref={optionContainerRef}
        className="option-container mt-6 cursor-pointer w-16 h-16 bg-gray-300 rounded-full"
        onClick={handleToggle}
      >
        <PaperClipIcon
          className={`h-6 w-6 transition-all ${isOpen ? "rotate-6" : ""}`}
        />
      </div>
    </main>
  );
}

export default App;
