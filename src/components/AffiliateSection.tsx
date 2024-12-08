import React, { useState } from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

export const AffiliateSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl mt-8">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingBag className="w-6 h-6 text-purple-300" />
        <h2 className="text-2xl font-bold">Enhance Your Spiritual Journey</h2>
      </div>

      <div className="space-y-6">
        <div className="relative group">
          <a 
            href="https://mabelloveco.com/collections/new-jewelry" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent z-10"></div>
              {!imageError ? (
                <img 
                  src="https://cdn.shopify.com/s/files/1/0081/9464/7915/files/Aurora_Collection_Desktop_2048x2048.jpg?v=1710341869"
                  alt="Aurora Jewelry Collection" 
                  className={`w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-300 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[400px] bg-purple-900/30 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-purple-300" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow-200" />
                  <span className="text-yellow-200 font-semibold">Aurora Collection</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Celestial Jewelry Collection</h3>
                <p className="text-gray-200 mb-6 max-w-2xl">Discover our exquisite Aurora collection featuring stunning celestial-inspired pieces. Each item is carefully crafted to enhance your spiritual connection and personal energy.</p>
                <button className="px-8 py-3 bg-white text-purple-900 hover:bg-purple-100 rounded-lg transition duration-200 transform group-hover:translate-x-2 font-medium">
                  Explore Collection
                </button>
              </div>
            </div>
          </a>
        </div>

        <div className="p-4 bg-purple-900/30 rounded-lg">
          <p className="text-sm text-purple-200">
            <strong>✨ Special Offer:</strong> Each piece from the Aurora collection comes with a special meaning card and a luxury gift box, perfect for treating yourself or someone special.
          </p>
        </div>
      </div>
    </div>
  );
};