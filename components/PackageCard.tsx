import React from 'react';
import { PackageItem } from '../types';

interface PackageCardProps {
  pkg: PackageItem;
  onBook: (pkg: PackageItem) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onBook }) => {
  return (
    <article className="bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(27,67,50,0.06)] hover:shadow-[0_12px_28px_-4px_rgba(27,67,50,0.1)] overflow-hidden flex flex-col transition-all border border-[rgba(27,67,50,0.06)]">
      <div className="relative w-full h-52 overflow-hidden bg-[#dde2f3]">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/70 via-transparent to-transparent"></div>

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#1b4332]/90 backdrop-blur-md text-white text-[12px] font-semibold flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-[#c1ecd4]">local_activity</span>
            {pkg.duration}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-[#1b4332]/90 backdrop-blur-md text-white text-[12px] font-semibold flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-amber-300" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span>{pkg.rating}</span>
            <span className="text-[#c1ecd4] text-[11px]">({pkg.reviewCount})</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <h3 className="font-epilogue text-[20px] font-bold text-[#161c27] leading-snug">
          {pkg.title}
        </h3>
        <p className="text-[13px] text-[#414844]">
          {pkg.description}
        </p>

        <div className="bg-[#f1f3ff] rounded-xl p-3 flex flex-col gap-1.5">
          <span className="text-[12px] font-bold text-[#012d1d] uppercase tracking-wider">Package Inclusions:</span>
          <div className="grid grid-cols-1 gap-1">
            {pkg.inclusions.map((inc, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[13px] text-[#414844]">
                <span className="material-symbols-outlined text-[15px] text-[#1b4332]">check_circle</span>
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between pt-3 border-t border-[rgba(27,67,50,0.06)] mt-auto">
          <div className="flex flex-col">
            {pkg.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="line-through text-[#414844] text-[12px]">₹{pkg.originalPrice.toLocaleString()}</span>
                <span className="bg-[#ffdad2] text-[#3c0700] text-[11px] px-1.5 py-0.2 rounded-full font-bold">Best Value</span>
              </div>
            )}
            <div className="flex items-baseline gap-1">
              <span className="font-epilogue text-[24px] font-bold text-[#012d1d]">
                ₹{pkg.price.toLocaleString()}
              </span>
              <span className="text-[13px] text-[#414844]">/ package</span>
            </div>
          </div>

          <button
            onClick={() => onBook(pkg as any)}
            className="px-5 py-2.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md active:scale-95 transition-all"
            type="button"
          >
            Book Package
          </button>
        </div>
      </div>
    </article>
  );
};
