import React, { useState } from 'react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  onBook: (activity: Activity) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onBook }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const difficultyColor =
    activity.difficulty === 'Intense'
      ? 'bg-[#ffdad6] text-[#93000a]'
      : activity.difficulty === 'Moderate'
      ? 'bg-[#c2e8ff] text-[#004d68]'
      : 'bg-[#c1ecd4] text-[#002114]';

  return (
    <article className="bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(27,67,50,0.06)] hover:shadow-[0_12px_28px_-4px_rgba(27,67,50,0.1)] overflow-hidden flex flex-col transition-all border border-[rgba(27,67,50,0.06)]">
      <div className="relative w-full h-48 overflow-hidden bg-[#dde2f3]">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/70 via-transparent to-transparent"></div>

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#012d1d] text-[12px] font-semibold flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-[#006688]">kayaking</span>
            {activity.category}
          </span>
          <span className={`px-2.5 py-1 rounded-full backdrop-blur-md text-[12px] font-bold shadow-sm ${difficultyColor}`}>
            {activity.difficulty}
          </span>
        </div>

        <button
          aria-label="Save to Wishlist"
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#414844] hover:text-[#ba1a1a] active:scale-90 transition-all shadow-sm"
          type="button"
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
        </button>

        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-[#1b4332]/90 backdrop-blur-md text-white text-[12px] font-semibold flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-amber-300" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span>{activity.rating}</span>
            <span className="text-[#c1ecd4] text-[11px]">({activity.reviewCount})</span>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#161c27] text-[12px] font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#006688]">schedule</span>
            {activity.duration}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <h3 className="font-epilogue text-[18px] font-bold text-[#161c27] leading-snug">
          {activity.title}
        </h3>
        <p className="text-[13px] text-[#414844] line-clamp-2">
          {activity.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {activity.highlights.map((h, i) => (
            <span key={i} className="px-2 py-0.5 rounded bg-[#f1f3ff] text-[#414844] text-[11px] font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] text-[#012d1d]">check</span>
              {h}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between pt-3 border-t border-[rgba(27,67,50,0.06)] mt-auto">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#414844]">Per person rate</span>
            <div className="flex items-baseline gap-1">
              <span className="font-epilogue text-[22px] font-bold text-[#012d1d]">
                ₹{activity.price.toLocaleString()}
              </span>
              <span className="text-[13px] text-[#414844]">/ slot</span>
            </div>
          </div>

          <button
            onClick={() => onBook(activity)}
            className="px-4 py-2.5 rounded-xl bg-[#006688] hover:bg-[#005370] text-white font-semibold text-[14px] shadow-md active:scale-95 transition-all"
            type="button"
          >
            Reserve Slot
          </button>
        </div>
      </div>
    </article>
  );
};
