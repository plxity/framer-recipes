import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
} from 'framer-motion';

const sentence = `There's something magical about rain—the way it transforms the mundane into a symphony of sights, sounds, and scents. As droplets cascade from the heavens, they paint the world in shimmering hues. `;

const wordsArray = sentence.split(' ');

function App() {
  const { scrollYProgress } = useScroll();
  const [scope, animate] = useAnimate();
  let coveredIndex = 0;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const coveredWordNumber = Math.floor(latest * wordsArray.length);
    if (coveredWordNumber > wordsArray.length) {
      return;
    }
    for (; coveredIndex < coveredWordNumber; coveredIndex++) {
      animate(scope.current.children[coveredIndex], { opacity: 1 });
    }
  });

  const renderWords = () => {
    return wordsArray.map((word, i) => {
      return (
        <motion.span className="opacity-20" key={i}>
          {word}{' '}
        </motion.span>
      );
    });
  };
  
  return (
    <main className="main-container relative">
      <motion.p
        className="text-white tracking-wide text-5xl leading-12 sticky top-1/3"
        ref={scope}
      >
        {renderWords()}
      </motion.p>
    </main>
  );
}

export default App;
