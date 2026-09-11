import React from 'react';
import { TabType } from '../types';

interface HomeQuickHighlightsProps {
  setActiveTab: (tab: TabType) => void;
}

export const HomeQuickHighlights: React.FC<HomeQuickHighlightsProps> = ({ setActiveTab }) => {
  const highlights = [
    {
      title: 'Luxury Resorts & Stays',
      subtitle: 'Treehouses & Riverside Cottages',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      tab: 'stays' as TabType,
      badge: '48+ Eco Stays'
    },
    {
      title: 'Kali River Rafting',
      subtitle: 'Grade III Rapids & Kayaking',
      image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=80',
      tab: 'activities' as TabType,
      badge: 'Certified Experts'
    },
    {
      title: 'Student, Family & Couple Packages',
      subtitle: 'All-inclusive multi-day itineraries',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
      tab: 'packages' as TabType,
      badge: 'Best Value'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      {highlights.map((h, idx) => (
        <div
          key={idx}
          onClick={() => setActiveTab(h.tab)}
          className="group relative h-64 rounded-3xl overflow-hidden shadow-md cursor-pointer flex flex-col justify-end p-6 border border-[rgba(27,67,50,0.08)] transition-all hover:scale-[1.02] hover:shadow-xl"
        >
          <img
            src={h.image}
            alt={h.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/90 via-[#012d1d]/30 to-transparent"></div>
          
          <span className="relative z-10 w-fit px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold mb-2">
            {h.badge}
          </span>
          <div className="relative z-10 flex flex-col">
            <h3 className="font-epilogue text-[20px] font-bold text-white group-hover:text-[#c1ecd4] transition-colors">
              {h.title}
            </h3>
            <span className="text-[13px] text-[#e8eeff]/90">{h.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
