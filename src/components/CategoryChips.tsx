import React from 'react';

interface CategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  counts: Record<string, number>;
}

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  selectedCategory,
  onSelectCategory,
  counts
}) => {
  const categories = [
    'All',
    'Luxury Resorts',
    'Riverside Camps',
    'Cozy Homestays',
    'Jungle Cottages',
    'Budget Hotels'
  ];

  return (
    <section className="py-2 bg-[#f9f9ff]">
      <div className="flex items-center gap-2 overflow-x-auto px-4 scrollbar-none py-1 max-w-7xl mx-auto">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = cat === 'All' ? 48 : counts[cat] || 10;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-2 rounded-full font-semibold text-[13px] whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 transition-all shadow-sm ${
                isSelected
                  ? 'bg-[#012d1d] text-white shadow-md'
                  : 'bg-[#e8eeff] text-[#414844] hover:text-[#161c27]'
              }`}
              type="button"
            >
              <span>{cat}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[11px] font-bold ${
                isSelected ? 'bg-[#1b4332] text-[#c1ecd4]' : 'text-[#006688]'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
