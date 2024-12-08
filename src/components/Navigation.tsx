import React from 'react';
import { Moon, Hash, Info } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeTab, 
  onTabChange 
}) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl">
      <ul className="flex items-center gap-8">
        <li>
          <button 
            onClick={() => onTabChange('moon')}
            className={`flex flex-col items-center gap-1 transition group ${
              activeTab === 'moon' ? 'text-white' : 'text-purple-200 hover:text-white'
            }`}
          >
            <Moon className="w-6 h-6 group-hover:scale-110 transition" />
            <span className="text-xs">Moon Sign</span>
          </button>
        </li>
        <li>
          <button 
            onClick={() => onTabChange('numerology')}
            className={`flex flex-col items-center gap-1 transition group ${
              activeTab === 'numerology' ? 'text-white' : 'text-purple-200 hover:text-white'
            }`}
          >
            <Hash className="w-6 h-6 group-hover:scale-110 transition" />
            <span className="text-xs">Numerology</span>
          </button>
        </li>
        <li>
          <button 
            onClick={() => onTabChange('about')}
            className={`flex flex-col items-center gap-1 transition group ${
              activeTab === 'about' ? 'text-white' : 'text-purple-200 hover:text-white'
            }`}
          >
            <Info className="w-6 h-6 group-hover:scale-110 transition" />
            <span className="text-xs">About</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};