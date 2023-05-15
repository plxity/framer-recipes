import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  BookmarkIcon,
  HomeIcon,
  InboxIcon,
  ShareIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

let tabs = [
  { id: 'home', icon: HomeIcon },
  { id: 'bookmark', icon: BookmarkIcon },
  { id: 'share', icon: ShareIcon },
  { id: 'inbox', icon: InboxIcon },
  { id: 'settings', icon: WrenchScrewdriverIcon },
];

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="h-full flex items-center justify-center bg-neutral-600">
      <div className="flex space-x-1 bg-black p-4 rounded-2xl z-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'relative ' : 'hover:text-white/60'
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 -z-10 bg-black inner-circle"
                style={{ borderRadius: 9999, top: -22 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div>
              <tab.icon
                className={`transition-top duration-300 relative h-5 w-5 ${
                  activeTab === tab.id
                    ? 'text-blue-500  -top-1'
                    : 'text-gray-400 top-0 mix-blend-normal '
                }`}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTabs;
