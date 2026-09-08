import React from 'react';
import { TabType } from '../types';

interface MenuDrawerProps {
  onClose: () => void;
  setActiveTab: (tab: TabType) => void;
  onOpenAiConcierge: () => void;
  onOpenMap?: () => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  onClose,
  setActiveTab,
  onOpenAiConcierge,
  onOpenMap,
  isDarkMode = false,
  onToggleTheme
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-start animate-in fade-in duration-200">
      <div className="bg-white w-80 h-full shadow-2xl flex flex-col p-6 justify-between overflow-y-auto animate-in slide-in-from-left duration-200">
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-[#1b4332] flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[24px]">kayaking</span>
              </div>
              <span className="font-epilogue text-[18px] font-bold text-[#012d1d]">DandeliTours</span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#f1f3ff] hover:bg-[#e3e8f9] flex items-center justify-center text-[#161c27] transition-all"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <div className="bg-[#f1f3ff] rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#012d1d] font-bold text-[14px]">
              <span className="material-symbols-outlined text-[20px]">smart_toy</span>
              <span>Dandeli AI Trip Guide</span>
            </div>
            <p className="text-[13px] text-[#414844]">Get personalized 3-day adventure itineraries and rafting safety tips instantly.</p>
            <button
              onClick={() => {
                onClose();
                onOpenAiConcierge();
              }}
              className="mt-1 py-2 px-4 rounded-xl bg-[#012d1d] text-white font-semibold text-[13px] shadow-sm hover:bg-[#1b4332] transition-all"
              type="button"
            >
              Launch AI Concierge 🤖
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            <button
              onClick={() => { setActiveTab('explore'); onClose(); }}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all"
            >
              <span className="material-symbols-outlined text-[#006688]">home</span>
              <span>Home</span>
            </button>
            <button
              onClick={() => { setActiveTab('stays'); onClose(); }}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all"
            >
              <span className="material-symbols-outlined text-[#006688]">cottage</span>
              <span>Stays & Resorts</span>
            </button>
            <button
              onClick={() => { setActiveTab('activities'); onClose(); }}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all"
            >
              <span className="material-symbols-outlined text-[#006688]">kayaking</span>
              <span>Rafting & Activities</span>
            </button>
            <button
              onClick={() => { setActiveTab('packages'); onClose(); }}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all"
            >
              <span className="material-symbols-outlined text-[#006688]">local_activity</span>
              <span>All-Inclusive Packages</span>
            </button>
            <button
              onClick={() => { setActiveTab('my-bookings'); onClose(); }}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all"
            >
              <span className="material-symbols-outlined text-[#006688]">confirmation_number</span>
              <span>My Bookings & E-Tickets</span>
            </button>
            <button
              onClick={() => { setActiveTab('about'); onClose(); }}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all"
            >
              <span className="material-symbols-outlined text-[#006688]">info</span>
              <span>About DandeliTours</span>
            </button>
            <button
              onClick={() => {
                if (onOpenMap) onOpenMap();
                onClose();
              }}
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all"
            >
              <span className="material-symbols-outlined text-[#006688]">map</span>
              <span>View Map</span>
            </button>
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-[#f1f3ff] text-[#161c27] font-semibold text-[15px] transition-all"
                type="button"
              >
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${isDarkMode ? 'text-amber-400' : 'text-[#012d1d]'}`}>
                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                  </span>
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
                <span className="text-[12px] px-2.5 py-1 rounded-full bg-[#e8eeff] text-[#012d1d] font-bold">
                  {isDarkMode ? 'Dark 🌙' : 'Light ☀️'}
                </span>
              </button>
            )}
            <a
              href="https://wa.me/919480123456?text=Hello%20DandeliTours!%20I%20would%20like%20to%20inquire%20about%20stays%20and%20rafting%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[#25D366]/15 text-[#161c27] font-semibold text-[15px] transition-all"
            >
              <img src="/assets/whatsapp_logo.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <div className="flex flex-col">
                <span>WhatsApp Support</span>
                <span className="text-[11px] text-[#075e54] font-medium">+91 94801 23456</span>
              </div>
            </a>
          </nav>
        </div>

        <div className="pt-4 border-t border-[rgba(27,67,50,0.08)] flex flex-col gap-2 text-[12px] text-[#414844]">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#1b4332]">verified</span>
            <span>Government Certified Eco-Tourism Partner</span>
          </div>
          <span>© 2026 DandeliTours Wild & Adventure</span>
        </div>

      </div>
    </div>
  );
};
