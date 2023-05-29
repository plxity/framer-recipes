import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Fuse from 'fuse.js';
import { motion } from 'framer-motion';

// please ignore all the any type :p 
// didn't want to spend time on TS

let data = [
  {
    item: {
      name: 'Cailin Park',
    },
  },
  {
    item: {
      name: 'Apoorv Taneja',
    },
  },
  {
    item: {
      name: 'Abhijeet Mishra',
    },
  },
  {
    item: {
      name: 'Oliver Good',
    },
  },
  {
    item: {
      name: 'Fatima Cross',
    },
  },
  {
    item: {
      name: 'Darius King',
    },
  },
  {
    item: {
      name: 'Paul Russo',
    },
  },
  {
    item: {
      name: 'Traun Gupta',
    },
  },
  {
    item: {
      name: 'Rishit Sahu',
    },
  },
  {
    item: {
      name: 'Apoorv Sharma',
    },
  },
  {
    item: {
      name: 'Apoorv Singh',
    },
  },
  {
    item: {
      name: 'Tarun Apoorv',
    },
  },
  {
    item: {
      name: 'Tarun Taneja',
    },
  },
];

const options = {
  includeScore: true,
  keys: [['item', 'name']],
};

const fuse = new Fuse(data, options);

function App() {
  const [results, setResults] = useState<any>([]);
  const [searchValue, setSearchValue] = useState('');

  const searchQuery = useDebounce(searchValue, 300) || '';

  useEffect(() => {
    if (searchQuery.length > 0) {
      const result = fuse.search(searchQuery);
      const modifiedResult = result.map((res) => res.item) || [];
      setResults(modifiedResult);
    }
  }, [searchQuery]);

  const renderData = () => {
    if (results.length === 0) {
      return;
    }
    return results.map((res: any) => {
      return (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="py-3 px-4 shadow-md"
          key={res?.item.name}
          layoutId={res?.item.name}
        >
          <div className="flex items-center justify-between">
            <div className="mt-1 text-gray-600 ">{res?.item.name}</div>
          </div>
        </motion.div>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center my-10 mx-20">
      <h1 className="text-white text-3xl mb-8 center">fuzzy search</h1>
      <motion.div className="w-5/12 ">
        <div className="mb-8 px-6 py-2 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center">
          <button className="focus:outline-none">
            <MagnifyingGlassIcon className="w-4 h-4" />
          </button>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            value={searchValue}
            className="w-full bg-transparent text-base focus:outline-none"
            placeholder="Search..."
          />
        </div>

        <motion.div
          className="flex flex-col mb-8 divide-y text-base text-gray-800 w-full border rounded-md"
          layout
        >
          {renderData()}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
