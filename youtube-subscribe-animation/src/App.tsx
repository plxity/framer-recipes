import {
  useAnimate,
  AnimatePresence,
  motion,
  AnimationSequence,
} from 'framer-motion';
import Particles from './Particles';
import './index.css';
import { useState } from 'react';

const colors = ['#32a852', '#ebe121', '#7c21eb', '#21b1eb'];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function App() {
  const [scope, animate] = useAnimate();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onButtonClick = () => {
    const animationElements = new Array(15).fill(0);

    const animationReset = animationElements.flatMap((_, index) => {
      const animattionArray: AnimationSequence = [
        [
          `.star-${index}`,
          {
            x: 0,
            y: 0,
          },
          {
            duration: 0.000001,
          },
        ],
        [
          `.sparkle-${index}`,
          {
            x: 0,
            y: 0,
          },
          {
            duration: 0.000001,
          },
        ],
        [
          `.star-four-${index}`,
          {
            x: 0,
            y: 0,
          },
          {
            duration: 0.000001,
          },
        ],
        [
          `.circle-${index}`,
          {
            x: 0,
            y: 0,
          },
          {
            duration: 0.000001,
          },
        ],
      ];
      return animattionArray;
    });

    const animationBegin: AnimationSequence = animationElements.flatMap(
      (_, index) => {
        const animationArray: AnimationSequence = [
          [
            `.star-${index}`,
            {
              x: randomNumber(-150, 150),
              y: randomNumber(-70, 60),
              scale: randomNumber(0.1, 0.3),
              width: 16,
              height: 16,
              opacity: 1,
              fill: randomColor(),
            },
            {
              duration: 0.5,
              at: '<',
            },
          ],
          [
            `.circle-${index}`,
            {
              x: randomNumber(-150, 150),
              y: randomNumber(-80, 20),
              scale: randomNumber(0.1, 0.3),
              width: 16,
              height: 16,
              opacity: 1,
              fill: randomColor(),
            },
            {
              duration: 0.5,
              at: '<',
            },
          ],
          [
            `.sparkle-${index}`,
            {
              x: randomNumber(-150, 150),
              y: randomNumber(-60, 70),
              scale: randomNumber(0.1, 0.3),
              width: 16,
              height: 16,
              opacity: 1,
              fill: randomColor(),
            },
            {
              duration: 0.5,
              at: '<',
            },
          ],
          [
            `.star-four-${index}`,
            {
              x: randomNumber(-150, 150),
              y: randomNumber(-30, 50),
              scale: randomNumber(0.1, 0.3),
              width: 16,
              height: 16,
              opacity: 1,
              fill: randomColor(),
            },
            {
              duration: 0.5,
              at: '<',
            },
          ],
        ];
        return animationArray;
      }
    );

    const animationFadeOut = animationElements.flatMap((_, index) => {
      const animationArray: AnimationSequence = [
        [
          `.star-${index}`,
          {
            opacity: 0,
            scale: 0,
          },
          {
            duration: 0.6,
            at: '<',
          },
        ],
        [
          `.sparkle-${index}`,
          {
            opacity: 0,
            scale: 0,
          },
          {
            duration: 0.6,
            at: '<',
          },
        ],
        [
          `.star-four-${index}`,
          {
            opacity: 0,
            scale: 0,
          },
          {
            duration: 0.6,
            at: '<',
          },
        ],
        [
          `.circle-${index}`,
          {
            opacity: 0,
            scale: 0,
          },
          {
            duration: 0.6,
            at: '<',
          },
        ],
      ];
      return animationArray;
    });

    setIsSubscribed(true);

    const sequence: AnimationSequence = [
      ...animationReset,
      ['button', { scale: 0.8 }],
      ...animationBegin,
      ['button', { scale: 1.2 }],
      ...animationFadeOut,
      ['button', { scale: 1 }, { duration: 0.4, at: '<' }],
    ];

    animate(sequence);

    setTimeout(() => {
      setIsSubscribed(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div ref={scope}>
        <button
          onClick={onButtonClick}
          className="relative rounded-full border-2 px-6 py-2 flex justify-center items-center text-lg text-zinc-900 transition-colors bg-slate-50 hover:bg-gray-300"
        >
          <span
            className="block overflow-hidden flex items-center gap-2"
            aria-hidden
          >
            {isSubscribed && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="bell-icon opacity-0"
                fill="#000000"
                height="20"
                width="20"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  rotate: [-20, 0, 20, 0, -20, 0, -10, 0, 10, 0, -10, 0],
                }}
                transition={{ duration: 0.6 }}
                exit={{ opacity: 0 }}
                viewBox="0 0 256 256"
              >
                <path d="M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z"></path>
              </motion.svg>
            )}
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 block"
          >
            <Particles />
          </span>
        </button>
      </div>
    </AnimatePresence>
  );
}

export default App;
