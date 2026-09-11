import React from 'react';

interface FilterSortBarProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  onOpenFilters: () => void;
  activeFilterCount: number;
}

export const FilterSortBar: React.FC<FilterSortBarProps> = ({
  sortBy,
  setSortBy,
  minRating,
  setMinRating,
  onOpenFilters,
  activeFilterCount
}) => {
  return (
    <section className="px-4 py-2 bg-[#f9f9ff] flex items-center justify-between gap-2 overflow-x-auto scrollbar-none max-w-7xl mx-auto">
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onOpenFilters}
          className="px-3.5 py-2 rounded-lg bg-[#e3e8f9] text-[#161c27] flex items-center gap-1.5 font-semibold text-[13px] active:scale-95 transition-all shadow-xs"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">tune</span>
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#006688] text-white text-[10px] flex items-center justify-center font-bold">
              {activeFilterCount}
            </span>
          )}
        </button>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#f1f3ff] text-[#161c27] font-semibold text-[13px] border-0 outline-none cursor-pointer hover:bg-[#e3e8f9] transition-all"
          >
            <option value="popularity">Sort: Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => setSortBy('price-low')}
          className="px-3 py-2 rounded-lg bg-[#f1f3ff] text-[#414844] hover:text-[#012d1d] font-semibold text-[13px] flex items-center gap-1 transition-all"
        >
          <span className="material-symbols-outlined text-[15px]">swap_vert</span>
          <span>Price</span>
        </button>
        <button
          onClick={() => setMinRating(minRating >= 4.8 ? 0 : 4.5)}
          className={`px-3 py-2 rounded-lg font-semibold text-[13px] flex items-center gap-1 transition-all ${
            minRating > 0 ? 'bg-[#c1ecd4] text-[#002114]' : 'bg-[#f1f3ff] text-[#414844]'
          }`}
        >
          <span className="material-symbols-outlined text-[15px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
          <span>4.5+</span>
        </button>
      </div>
    </section>
  );
};
