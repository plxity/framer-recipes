import { motion } from 'framer-motion';
import { useState } from 'react';

const imageIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (id) => {
    setSelectedImage(id);
  };

  return (
    <div className="p-20">
      <motion.div
        className="flex flex-wrap gap-1 image-container relative"
        layout
      >
        {imageIds.map((i) => {
          return (
            <motion.div className="w-24 h-24" key={i}>
              <motion.img
                layoutId={`img-${i}`}
                src={`https://picsum.photos/id/${i}/800`}
                onClick={() => openImage(i)}
              />
            </motion.div>
          );
        })}
        {selectedImage ? (
          <motion.img
            layoutId={`img-${selectedImage}`}
            src={`https://picsum.photos/id/${selectedImage}/800`}
            className="animate-open-image"
            onClick={() => setSelectedImage(null)}
          />
        ) : null}
      </motion.div>
    </div>
  );
}

export default App;
