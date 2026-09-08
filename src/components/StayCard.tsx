import React, { useState } from 'react';
import { Stay } from '../types';

interface StayCardProps {
  stay: Stay;
  onSelect: (stay: Stay) => void;
  onBook: (stay: Stay) => void;
}

export const StayCard: React.FC<StayCardProps> = ({ stay, onSelect, onBook }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <article
      onClick={() => onSelect(stay)}
      className="bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(27,67,50,0.06)] hover:shadow-[0_12px_28px_-4px_rgba(27,67,50,0.1)] overflow-hidden flex flex-col transition-all cursor-pointer max-w-7xl mx-auto w-full border border-[rgba(27,67,50,0.06)]"
    >
      {/* Media Header */}
      <div className="relative w-full h-52 overflow-hidden bg-[#dde2f3]">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={stay.image}
          alt={stay.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/70 via-transparent to-transparent"></div>

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {stay.badges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-1 rounded-full backdrop-blur-md text-[12px] font-semibold flex items-center gap-1 shadow-sm ${
                badge === 'Riverfront'
                  ? 'bg-white/90 text-[#012d1d]'
                  : badge === 'Featured'
                  ? 'bg-[#5dcafd]/90 text-[#001e2c]'
                  : 'bg-white/90 text-[#012d1d]'
              }`}
            >
              {badge === 'Riverfront' && <span className="material-symbols-outlined text-[14px] text-[#006688]">water</span>}
              {badge}
            </span>
          ))}
        </div>

        {/* Wishlist Button */}
        <button
          aria-label="Save to Wishlist"
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
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

        {/* Rating pill on bottom of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-[#1b4332]/90 backdrop-blur-md text-white text-[12px] font-semibold flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-amber-300" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span>{stay.rating}</span>
            <span className="text-[#c1ecd4] text-[11px]">({stay.reviewCount})</span>
          </div>
        </div>

        {/* Photo Pagination Dots indicator */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex flex-col">
          <h2 className="font-epilogue text-[20px] font-bold text-[#161c27] leading-snug">
            {stay.title}
          </h2>
          <span className="font-semibold text-[15px] text-[#012d1d] mt-0.5">
            {stay.subtitle}
          </span>
          <span className="text-[13px] text-[#414844] flex items-center gap-1 mt-1">
            <span className="material-symbols-outlined text-[15px] text-[#006688]">king_bed</span>
            {stay.features.join(' • ')}
          </span>
        </div>

        {/* Property Highlights Tags */}
        <div className="flex flex-wrap gap-1.5">
          {stay.amenities.slice(0, 3).map((amenity, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-[#f1f3ff] text-[#414844] text-[12px] font-medium flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px] text-[#1b4332]">check_circle</span>
              {amenity}
            </span>
          ))}
        </div>

        {/* Scarcity & Policy Alerts */}
        {(stay.scarcityText || stay.policyText) && (
          <div className="bg-[#f1f3ff] rounded-xl p-2.5 flex flex-col gap-1 text-[12px]">
            {stay.scarcityText && (
              <div className="flex items-center gap-1.5 text-[#ba1a1a] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-ping inline-block shrink-0"></span>
                <span>{stay.scarcityText}</span>
              </div>
            )}
            {stay.policyText && (
              <div className="flex items-center gap-1.5 text-[#274e3d] font-medium">
                <span className="material-symbols-outlined text-[14px] text-[#1b4332]">verified</span>
                <span>{stay.policyText}</span>
              </div>
            )}
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-end justify-between pt-2 border-t border-[rgba(27,67,50,0.06)]">
          <div className="flex flex-col">
            {stay.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="line-through text-[#414844] text-[12px]">
                  ₹{stay.originalPrice.toLocaleString()}
                </span>
                <span className="bg-[#ffdad2] text-[#3c0700] text-[11px] px-1.5 py-0.2 rounded-full font-bold">
                  Discount
                </span>
              </div>
            )}
            <div className="flex items-baseline gap-1">
              <span className="font-epilogue text-[24px] font-bold text-[#012d1d]">
                ₹{stay.price.toLocaleString()}
              </span>
              <span className="text-[13px] text-[#414844]">{stay.priceUnit}</span>
            </div>
            <span className="text-[11px] text-[#414844]">{stay.taxesText}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(stay);
              }}
              className="px-3 py-2 text-[#012d1d] font-semibold text-[13px] hover:underline"
              type="button"
            >
              Details
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBook(stay);
              }}
              className="px-4 py-2.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md active:scale-95 transition-all"
              type="button"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
