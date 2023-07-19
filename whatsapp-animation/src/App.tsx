import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DocumentMinusIcon,
  CameraIcon,
  UserIcon,
  PhotoIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';
const Icons = [DocumentMinusIcon, CameraIcon, UserIcon, PhotoIcon, ShareIcon];

const listOptions = {
  open: {
    y: 50,
    scale: 0.6,
    transition: {
      type: 'spring',
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
  'bg-green-300',
  'bg-red-300',
  'bg-blue-300',
  'bg-yellow-300',
  'bg-purple-300',
]

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const renderOptions = () => {
    return Icons.map((Icon, i) => {
      return (
        <motion.li
          className="mt-4 cursor-pointer"
          variants={listOptions}
          key={i}
        >
          <span className={`flex ${colors[i]} w-14 h-14 justify-center items-center rounded-full`}>
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
            <motion.ul
              initial="open"
              animate="animate"
              exit="close"
            >
              {renderOptions()}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>

      <div
        className="option-container mt-6 cursor-pointer w-16 h-16 bg-gray-300 rounded-full"
        onClick={handleToggle}
      >
        <span className="">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
            enable-background="new 0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"
            ></path>
          </svg>
        </span>
      </div>
    </main>
  );
}

export default App;
