import React, { useState } from 'react';
import { Share2, Check, Link, Facebook, Twitter } from 'lucide-react';

interface ShareResultProps {
  moonSign: string;
}

export const ShareResult: React.FC<ShareResultProps> = ({ moonSign }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = `✨ I just discovered my ${moonSign}! Check out this amazing calculator! 🌙`;
  const shareUrl = window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setShowMenu(false);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Astrology Calculator',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      setShowMenu(!showMenu);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="px-8 py-2 bg-white text-purple-900 hover:bg-purple-100 rounded-lg transition duration-200 min-w-[120px] flex items-center justify-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </button>

      {!navigator.share && showMenu && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-3 z-50">
          <div className="space-y-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition group"
              onClick={() => setShowMenu(false)}
            >
              <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:scale-110 transition" />
              <span>Share on Twitter</span>
            </a>
            
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition group"
              onClick={() => setShowMenu(false)}
            >
              <Facebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition" />
              <span>Share on Facebook</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition group"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Link className="w-5 h-5 group-hover:scale-110 transition" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};