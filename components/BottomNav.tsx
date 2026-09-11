import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  bookingsCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  bookingsCount
}) => {
  const tabs: { id: TabType; label: string; icon: string; hasBadge?: boolean }[] = [
    { id: 'explore', label: 'Explore', icon: 'explore' },
    { id: 'stays', label: 'Stays', icon: 'cottage' },
    { id: 'activities', label: 'Activities', icon: 'kayaking' },
    { id: 'packages', label: 'Packages', icon: 'local_activity' },
    { id: 'my-bookings', label: 'Bookings', icon: 'confirmation_number', hasBadge: true },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#f9f9ff]/90 backdrop-blur-xl shadow-[0_-8px_24px_-6px_rgba(27,67,50,0.08)]">
      <div className="flex items-center justify-around h-16 px-2 max-w-7xl mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center w-14 h-12 gap-0.5 transition-colors ${
                isActive
                  ? 'text-[#1b4332] font-semibold'
                  : 'text-[#414844] hover:text-[#012d1d]'
              }`}
              type="button"
            >
              <span className="relative">
                <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
                {tab.hasBadge && bookingsCount > 0 && (
                  <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-[#006688] ring-1 ring-white"></span>
                )}
              </span>
              <span className="text-[11px] leading-tight font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
