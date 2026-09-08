import React from 'react';
import { SearchParams } from '../types';

interface SearchSummaryBarProps {
  searchParams: SearchParams;
  onModify: () => void;
}

export const SearchSummaryBar: React.FC<SearchSummaryBarProps> = ({
  searchParams,
  onModify
}) => {
  return (
    <section className="px-4 py-3 bg-[#f9f9ff]">
      <div className="bg-[#f1f3ff] rounded-xl p-3 shadow-sm flex items-center justify-between gap-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-[#e3e8f9] flex items-center justify-center text-[#006688] shrink-0">
            <span className="material-symbols-outlined text-[20px]">travel_explore</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-epilogue text-[16px] font-semibold text-[#161c27] truncate">
              {searchParams.location}
            </span>
            <span className="text-[13px] text-[#414844] truncate">
              {searchParams.checkIn} – {searchParams.checkOut} • {searchParams.guests} Guests, {searchParams.rooms} Room
            </span>
          </div>
        </div>
        <button
          onClick={onModify}
          className="px-3 py-1.5 bg-[#dde2f3] hover:bg-[#c1ecd4] active:scale-95 text-[#012d1d] font-semibold text-[13px] rounded-full transition-all shrink-0 shadow-xs"
          type="button"
        >
          Modify
        </button>
      </div>
    </section>
  );
};
