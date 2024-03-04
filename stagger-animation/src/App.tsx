import { stagger, useAnimate, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ListBulletIcon } from "@heroicons/react/24/outline";

const originalItems = [
  {
    id: "1",
    text: "Complete side project",
    checked: false,
  },
  { id: "2", text: "Go to gym", checked: false },
  { id: "3", text: "Read books", checked: false },
  { id: "4", text: "Clean room", checked: false },
  { id: "5", text: "Buy vegetables", checked: false },
];

function App() {
  let [items, setItems] = useState(originalItems);
  let [ref, animate] = useAnimate();

  function handleChange(id: string) {
    let newItems = items.map((item) => ({
      ...item,
      checked: item.id === id ? !item.checked : item.checked,
    }));

    setItems(newItems);
    const isEveryElementChecked = newItems.every((item) => item.checked);

    if (!isEveryElementChecked) {
      animate(
        "input",
        { accentColor: ["inherit"] },
        {
          duration: 0.4,
        }
      );
    }

    if (isEveryElementChecked) {
      animate(
        "input",
        {
          rotate: [0, -10, 0],
          scale: [1, 1.2, 1],
          accentColor: ["default", "#16a34a"],
        },

        {
          duration: 0.4,
          delay: stagger(0.07, { ease: "easeOut" }),
        }
      );
    }
  }

  const containerAnimation = {
    show: {
      transition: {
        delayChildren: 0,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  const taskAnimation = {
    hidden: { opacity: 0, y: -15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.2 },
        y: { duration: 0.2 },
        layout: { duration: 0.2 },
      },
    },
  };

  return (
    <div className="p-20">
      <div className="flex w-full max-w-sm flex-col rounded px-3 py-4">
        <p className="ml-2 flex items-center text-lg font-semibold text-gray-700">
          <ListBulletIcon className="mr-3 h-5 w-5" />
          Todo list
        </p>

        <motion.div
          ref={ref}
          className="mt-4"
          initial="hidden"
          variants={containerAnimation}
          animate="show"
        >
          {items.map((item) => (
            <motion.div key={item.id}>
              <motion.div
                variants={taskAnimation}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                key={item.id}
                className="flex hover:bg-gray-200 bg-gray-100 mt-1 fix-height"
              >
                <div
                  key={item.id}
                  className={`group flex w-full select-none items-center rounded p-2 text-sm font-medium transition-colors duration-300 checked:text-gray-300 ${
                    item.checked
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }`}
                >
                  <motion.input
                    onChange={() => handleChange(item.id)}
                    checked={item.checked}
                    type="checkbox"
                    className="mr-4 h-4 w-4 rounded-sm border-2 border-gray-300 text-sky-600 transition-colors duration-300 focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-sky-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 group-active:border-sky-600 group-active:checked:text-sky-600/25 cursor-pointer"
                  />
                  {item.text}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
