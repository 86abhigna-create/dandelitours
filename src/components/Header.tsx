import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenSearch?: () => void;
  onOpenAiConcierge: () => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  bookingsCount: number;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenSearch,
  onOpenAiConcierge,
  setActiveTab,
  bookingsCount,
  isDarkMode = false,
  onToggleTheme
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f9f9ff]/85 backdrop-blur-xl pt-safe shadow-[0_4px_20px_-4px_rgba(27,67,50,0.06)]">
      <div className="h-16 px-4 flex items-center justify-between gap-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <button
            aria-label="Navigation Menu"
            onClick={onOpenMenu}
            className="w-11 h-11 flex items-center justify-center rounded-xl text-[#161c27] hover:bg-[#e8eeff] active:scale-95 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <a
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab('explore')}
          >
            <div className="h-8 w-8 rounded-lg bg-[#1b4332] flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[20px]">kayaking</span>
            </div>
            <div className="flex flex-col">
              <span className="font-epilogue text-[16px] font-bold text-[#012d1d] leading-tight tracking-tight">
                DandeliTours
              </span>
              <div className="flex items-center gap-1 text-[#006688]">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                <span className="text-[12px] font-medium text-[#414844]">Dandeli, Karnataka</span>
              </div>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-2">
          {/* Light / Dark Mode Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="px-2.5 sm:px-3 py-1.5 rounded-full bg-[rgba(27,67,50,0.08)] hover:bg-[rgba(27,67,50,0.15)] text-[#161c27] flex items-center gap-1.5 font-semibold text-[13px] active:scale-95 transition-all shadow-sm"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Light and Dark Mode"
              type="button"
            >
              <span className={`material-symbols-outlined text-[18px] ${isDarkMode ? 'text-amber-400' : 'text-[#012d1d]'}`}>
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
              <span className="hidden sm:inline text-[12px]">
                {isDarkMode ? 'Light' : 'Dark'}
              </span>
            </button>
          )}

          {/* AI Trip Assistant Button */}
          <button
            onClick={onOpenAiConcierge}
            className="px-3 py-1.5 rounded-full bg-[#1b4332]/10 hover:bg-[#1b4332]/20 text-[#1b4332] flex items-center gap-1.5 font-semibold text-[13px] active:scale-95 transition-all shadow-sm"
            title="Ask AI Trip Guide"
          >
            <span className="material-symbols-outlined text-[18px] text-[#1b4332]">smart_toy</span>
            <span className="hidden sm:inline">AI Guide</span>
          </button>

          {/* Profile / Bookings badge */}
          <div className="relative flex items-center">
            <button
              onClick={() => setActiveTab('my-bookings')}
              className="w-11 h-11 flex items-center justify-center rounded-full p-0.5 hover:bg-[#e8eeff] transition-all"
              title="My Bookings"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover shadow-[0_2px_6px_rgba(27,67,50,0.15)]"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              />
            </button>
            {bookingsCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#e76f51] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                {bookingsCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
