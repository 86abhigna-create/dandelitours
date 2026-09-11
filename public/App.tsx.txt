import React, { useState, useEffect } from 'react';
import { TabType, Stay, Activity, PackageItem, Booking, SearchParams } from './types';
import { INITIAL_STAYS, INITIAL_ACTIVITIES, INITIAL_PACKAGES, INITIAL_BOOKINGS } from './mockData';
const heroBannerImage = "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1800&q=80";

// --- Header ---

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

// --- SearchSummaryBar ---

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

// --- CategoryChips ---

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

// --- FilterSortBar ---

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

// --- HomeQuickHighlights ---

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

// --- WeatherWidget ---

export const WeatherWidget: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#1b4332] to-[#012d1d] rounded-2xl p-4 sm:p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 my-4">
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-300">
          <span className="material-symbols-outlined text-[28px]">wb_sunny</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-epilogue text-[18px] font-bold">Dandeli, Karnataka</span>
            <span className="px-2 py-0.5 rounded-full bg-[#c1ecd4] text-[#012d1d] text-[11px] font-bold">Live 28°C</span>
          </div>
          <span className="text-[13px] text-[#e8eeff]/80">Partly cloudy • Ideal for White-Water Rafting & Jungle Safari</span>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto justify-around">
        <div className="flex flex-col items-center">
          <span className="text-[11px] text-[#c1ecd4] font-semibold uppercase">Kali River Flow</span>
          <span className="font-epilogue font-bold text-[15px] text-white">Grade III (Optimal)</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[11px] text-[#c1ecd4] font-semibold uppercase">Air Quality</span>
          <span className="font-epilogue font-bold text-[15px] text-white">Excellent (AQI 32)</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[11px] text-[#c1ecd4] font-semibold uppercase">Humidity</span>
          <span className="font-epilogue font-bold text-[15px] text-white">68%</span>
        </div>
      </div>
    </div>
  );
};

// --- TourismGuideSection ---

export const TourismGuideSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'wildlife' | 'rafting' | 'travel'>('overview');

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(27,67,50,0.08)] shadow-sm flex flex-col gap-6 my-6">
      <div className="flex flex-col gap-2">
        <span className="text-[#006688] font-semibold text-[13px] uppercase tracking-wider">Comprehensive Visitor Guide</span>
        <h2 className="font-epilogue text-[24px] sm:text-[28px] font-bold text-[#161c27]">
          Dandeli Tourism & Adventure Handbook
        </h2>
        <p className="text-[14px] text-[#414844] max-w-3xl leading-relaxed">
          Plan your escape to Karnataka's premier wildlife and whitewater destination. Explore expert insights on seasonal weather, river safety, tiger reserve guidelines, and travel itineraries.
        </p>
      </div>

      {/* Guide Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[rgba(27,67,50,0.08)] pb-4">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
            activeTab === 'overview'
              ? 'bg-[#012d1d] text-white shadow-sm'
              : 'bg-[#f1f3ff] text-[#414844] hover:bg-[#e8eeff]'
          }`}
          type="button"
        >
          🌲 Destination Overview
        </button>
        <button
          onClick={() => setActiveTab('wildlife')}
          className={`px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
            activeTab === 'wildlife'
              ? 'bg-[#012d1d] text-white shadow-sm'
              : 'bg-[#f1f3ff] text-[#414844] hover:bg-[#e8eeff]'
          }`}
          type="button"
        >
          🐅 Wildlife & Tiger Reserve
        </button>
        <button
          onClick={() => setActiveTab('rafting')}
          className={`px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
            activeTab === 'rafting'
              ? 'bg-[#012d1d] text-white shadow-sm'
              : 'bg-[#f1f3ff] text-[#414844] hover:bg-[#e8eeff]'
          }`}
          type="button"
        >
          🛶 Kali River Rafting
        </button>
        <button
          onClick={() => setActiveTab('travel')}
          className={`px-4 py-2 rounded-xl text-[14px] font-semibold transition-all ${
            activeTab === 'travel'
              ? 'bg-[#012d1d] text-white shadow-sm'
              : 'bg-[#f1f3ff] text-[#414844] hover:bg-[#e8eeff]'
          }`}
          type="button"
        >
          🚗 How to Reach & Weather
        </button>
      </div>

      {/* Guide Content Panels */}
      <div className="pt-2">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            <div className="bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-2">
              <span className="text-[12px] font-bold text-[#006688] uppercase">Location & Terrain</span>
              <h4 className="font-epilogue text-[16px] font-bold text-[#161c27]">Western Ghats Foothills</h4>
              <p className="text-[13px] text-[#414844] leading-relaxed">
                Situated on the banks of the Kali River in Uttara Kannada district, Dandeli is surrounded by dense evergreen and deciduous forests at an elevation of 1,551 ft.
              </p>
            </div>
            <div className="bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-2">
              <span className="text-[12px] font-bold text-[#006688] uppercase">Best Time to Visit</span>
              <h4 className="font-epilogue text-[16px] font-bold text-[#161c27]">October to May</h4>
              <p className="text-[13px] text-[#414844] leading-relaxed">
                Pleasant weather (18°C to 30°C) with post-monsoon lush greenery ideal for wildlife safaris, bird watching, and white-water rafting on full river flows.
              </p>
            </div>
            <div className="bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-2">
              <span className="text-[12px] font-bold text-[#006688] uppercase">Ideal Duration</span>
              <h4 className="font-epilogue text-[16px] font-bold text-[#161c27]">3 Days / 2 Nights</h4>
              <p className="text-[13px] text-[#414844] leading-relaxed">
                Perfect duration to experience a riverside eco-stay, 12km river rafting expedition, night jungle safari, and Syntheri Rocks limestone cave exploration.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'wildlife' && (
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#f1f3ff] p-6 rounded-2xl animate-in fade-in duration-200">
            <div className="flex flex-col gap-3 flex-1">
              <span className="text-[12px] font-bold text-[#1b4332] uppercase">Anshi-Dandeli Tiger Reserve</span>
              <h3 className="font-epilogue text-[20px] font-bold text-[#161c27]">Home of the Black Panther</h3>
              <p className="text-[14px] text-[#414844] leading-relaxed">
                Spanning over 834 square kilometers, the sanctuary is renowned for elusive black panthers, Bengal tigers, Indian bisons (gaur), leopards, sloth bears, and over 300 species of exotic birds such as the Great Hornbill and Malabar pied hornbill.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs">🐾 Jeep Safaris</span>
                <span className="px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs">🦜 Bird Watching</span>
                <span className="px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs">🌿 Naturalist Walks</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rafting' && (
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#f1f3ff] p-6 rounded-2xl animate-in fade-in duration-200">
            <div className="flex flex-col gap-3 flex-1">
              <span className="text-[12px] font-bold text-[#006688] uppercase">Kali River Waters</span>
              <h3 className="font-epilogue text-[20px] font-bold text-[#161c27]">Grade III Rapids Adventure</h3>
              <p className="text-[14px] text-[#414844] leading-relaxed">
                Dandeli offers one of South India's finest whitewater rafting experiences over a 12km stretch featuring exhilarating Grade II and III rapids like 'Stanley's Gap' and 'Retainer'. Supervised by international-grade instructors with complete safety gear.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs">🛶 12km Rafting Run</span>
                <span className="px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs">🦺 Certified Instructors</span>
                <span className="px-3 py-1 bg-white rounded-lg text-[13px] font-semibold text-[#161c27] shadow-xs">🌊 Kayaking & Boating</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'travel' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            <div className="bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-3">
              <h4 className="font-epilogue text-[16px] font-bold text-[#161c27] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006688]">directions_car</span>
                How to Get There
              </h4>
              <ul className="text-[14px] text-[#414844] space-y-2">
                <li>• <strong>By Air:</strong> Hubli Airport (HBX) is 75 km away; Goa International Airport (GOI) is 120 km away.</li>
                <li>• <strong>By Rail:</strong> Alnavar Junction (32 km) or Londa Junction (48 km) are the nearest railway stations.</li>
                <li>• <strong>By Road:</strong> Well connected by scenic highways from Bangalore (460 km), Goa (110 km), and Pune (450 km).</li>
              </ul>
            </div>
            <div className="bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col gap-3">
              <h4 className="font-epilogue text-[16px] font-bold text-[#161c27] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1b4332]">backpack</span>
                Travel Essentials & Tips
              </h4>
              <ul className="text-[14px] text-[#414844] space-y-2">
                <li>• Carry comfortable outdoor clothing, sturdy trekking shoes, and insect repellent.</li>
                <li>• Valid government photo ID is mandatory for forest sanctuary entry and check-in.</li>
                <li>• Pre-booking adventure activities and eco-stays ensures confirmed slots during weekends.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- TestimonialsSection ---

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Rajesh Sharma',
      role: 'Family Vacationer from Bengaluru',
      comment: 'The 12km white-water rafting on the Kali River was exhilarating! DandeliTours booked our riverside resort seamlessly and everything was exceptionally well-managed.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Priya & Karthik',
      role: 'Couple Getaway',
      comment: 'Staying in the treehouse cottage surrounded by hornbills and emerald forests was magical. The step-by-step booking and instant e-ticket made our trip stress-free.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Vikramaditya Rao',
      role: 'Wildlife Photographer',
      comment: 'Spotting the black panther in Anshi-Dandeli Tiger Reserve was a dream come true. The local naturalists provided through DandeliTours are top-tier professionals.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(27,67,50,0.08)] shadow-sm flex flex-col gap-6 my-6">
      <div className="flex flex-col gap-1">
        <span className="text-[#006688] font-semibold text-[13px] uppercase tracking-wider">Trusted by 12,500+ Adventurers</span>
        <h2 className="font-epilogue text-[24px] sm:text-[28px] font-bold text-[#161c27]">
          What Travelers Say About DandeliTours
        </h2>
        <p className="text-[14px] text-[#414844]">Real experiences from guests who explored our eco-resorts and river expeditions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#f9f9ff] p-6 rounded-2xl border border-[rgba(27,67,50,0.06)] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                ))}
              </div>
              <p className="text-[14px] text-[#414844] leading-relaxed italic">
                "{t.comment}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-[rgba(27,67,50,0.08)]">
              <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover shadow-sm" />
              <div className="flex flex-col">
                <span className="font-epilogue font-bold text-[14px] text-[#161c27]">{t.name}</span>
                <span className="text-[12px] text-[#414844]">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- StayCard ---

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

// --- ActivityCard ---

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

// --- PackageCard ---

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

// --- BookingCard ---

interface BookingCardProps {
  booking: Booking;
  onCancel: (id: string) => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({ booking, onCancel }) => {
  return (
    <article className="bg-white rounded-2xl shadow-[0_4px_16px_-2px_rgba(27,67,50,0.06)] overflow-hidden flex flex-col sm:flex-row border border-[rgba(27,67,50,0.06)] transition-all">
      <div className="relative sm:w-48 h-44 sm:h-auto bg-[#dde2f3] shrink-0">
        <img src={booking.image} alt={booking.itemName} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2">
          <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#012d1d] text-[11px] font-bold shadow-sm">
            {booking.bookingCode}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-epilogue text-[18px] font-bold text-[#161c27]">
              {booking.itemName}
            </h3>
            <span className="px-2.5 py-1 rounded-full bg-[#c1ecd4] text-[#002114] text-[11px] font-bold">
              {booking.status}
            </span>
          </div>

          <span className="text-[13px] text-[#414844] flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-[#006688]">location_on</span>
            {booking.location}
          </span>

          <div className="flex flex-wrap gap-4 mt-2 text-[13px] text-[#161c27]">
            <div className="flex items-center gap-1 bg-[#f1f3ff] px-2.5 py-1 rounded-lg">
              <span className="material-symbols-outlined text-[15px] text-[#1b4332]">calendar_month</span>
              <span>{booking.dates}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#f1f3ff] px-2.5 py-1 rounded-lg">
              <span className="material-symbols-outlined text-[15px] text-[#1b4332]">group</span>
              <span>{booking.guests}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[rgba(27,67,50,0.06)]">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#414844]">Total Paid</span>
            <span className="font-epilogue text-[20px] font-bold text-[#012d1d]">
              ₹{booking.totalPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert(`Downloading E-Ticket & Itinerary for booking ${booking.bookingCode}`)}
              className="px-3 py-1.5 rounded-lg bg-[#e8eeff] hover:bg-[#dde2f3] text-[#006688] font-semibold text-[13px] active:scale-95 transition-all"
              type="button"
            >
              Download Ticket
            </button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to cancel this booking?')) {
                  onCancel(booking.id);
                }
              }}
              className="px-3 py-1.5 rounded-lg bg-[#ffdad6]/50 hover:bg-[#ffdad6] text-[#ba1a1a] font-semibold text-[13px] active:scale-95 transition-all"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

// --- MapViewModal ---

interface MapViewModalProps {
  stays: Stay[];
  onClose: () => void;
  onSelectStay: (stay: Stay) => void;
}

export const MapViewModal: React.FC<MapViewModalProps> = ({ stays, onClose, onSelectStay }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between bg-white z-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#006688]">map</span>
            <h2 className="font-epilogue text-[20px] font-bold text-[#161c27]">Dandeli Kali River Map View</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#f1f3ff] hover:bg-[#e3e8f9] flex items-center justify-center text-[#161c27] transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Simulated Interactive Map Container */}
        <div className="relative flex-grow bg-[#1b4332] overflow-hidden flex items-center justify-center">
          {/* Map background image simulating Kali River valley */}
          <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d] via-transparent to-transparent opacity-80"></div>

          {/* River Water Graphic line simulation */}
          <div className="absolute inset-x-0 h-32 top-1/3 bg-[#006688]/30 transform -rotate-12 blur-sm"></div>

          {/* Map Pins */}
          <div className="absolute inset-0 p-8 flex flex-wrap items-center justify-around gap-6 z-10">
            {stays.map((stay, idx) => (
              <div
                key={stay.id}
                onClick={() => {
                  onSelectStay(stay);
                  onClose();
                }}
                className="bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl cursor-pointer hover:scale-110 transition-all flex items-center gap-2 border-2 border-[#012d1d]"
                style={{
                  position: 'relative',
                  top: `${(idx % 2 === 0 ? 1 : -1) * 30}px`,
                  left: `${(idx - 1) * 20}px`
                }}
              >
                <div className="w-8 h-8 rounded-full bg-[#012d1d] text-white flex items-center justify-center font-bold text-[12px]">
                  ₹{Math.round(stay.price / 1000)}k
                </div>
                <div className="flex flex-col">
                  <span className="font-epilogue text-[13px] font-bold text-[#161c27] truncate max-w-[140px]">{stay.title}</span>
                  <span className="text-[11px] text-[#006688] font-medium">⭐ {stay.rating} • Kali River</span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 inset-x-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg flex items-center justify-between text-[13px] z-20">
            <span className="font-medium text-[#161c27]">📍 Click any resort pin to view details and check-in availability</span>
            <span className="font-bold text-[#012d1d]">Kali River Basin, Karnataka</span>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- ModifySearchModal ---

interface ModifySearchModalProps {
  searchParams: SearchParams;
  onClose: () => void;
  onSave: (newParams: SearchParams) => void;
}

export const ModifySearchModal: React.FC<ModifySearchModalProps> = ({
  searchParams,
  onClose,
  onSave
}) => {
  const [location, setLocation] = useState(searchParams.location);
  const [checkIn, setCheckIn] = useState(searchParams.checkIn);
  const [checkOut, setCheckOut] = useState(searchParams.checkOut);
  const [guests, setGuests] = useState(searchParams.guests);
  const [rooms, setRooms] = useState(searchParams.rooms);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ location, checkIn, checkOut, guests, rooms });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        <div className="px-6 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between">
          <h2 className="font-epilogue text-[20px] font-bold text-[#161c27]">Modify Search & Dates</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#f1f3ff] hover:bg-[#e3e8f9] flex items-center justify-center text-[#161c27] transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-bold text-[#414844] uppercase tracking-wider">Destination</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#414844] uppercase tracking-wider">Check-in</label>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#414844] uppercase tracking-wider">Check-out</label>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#414844] uppercase tracking-wider">Guests</label>
              <input
                type="number"
                min={1}
                max={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#414844] uppercase tracking-wider">Rooms</label>
              <input
                type="number"
                min={1}
                max={5}
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.15)] text-[15px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[rgba(27,67,50,0.08)]">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#f1f3ff] text-[#414844] font-semibold text-[14px] hover:bg-[#e3e8f9] transition-all"
              type="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md transition-all"
            >
              Apply Changes
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

// --- MenuDrawer ---

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

// --- AiConciergeModal ---

interface AiConciergeModalProps {
  onClose: () => void;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState('Create a 3-day itinerary for white water rafting and jungle stay in Dandeli');
  const [travelDates] = useState('18 Oct - 20 Oct 2026');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRecommendation(null);
    try {
      const res = await fetch('/api/ai-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, travelDates, groupSize: '2 guests' })
      });
      const data = await res.json();
      if (data.recommendation) {
        setRecommendation(data.recommendation);
      } else {
        setRecommendation(data.error || 'Failed to generate recommendation.');
      }
    } catch (err: any) {
      setRecommendation('Network error or AI service unavailable. Please check your Gemini API key configuration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between bg-[#012d1d] text-white">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-[#c1ecd4]">smart_toy</span>
            <div>
              <h2 className="font-epilogue text-[18px] font-bold">Dandeli Wilds & Waters AI Trip Guide</h2>
              <span className="text-[12px] text-[#c1ecd4]">Powered by Google Gemini</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto flex-grow">
          <form onSubmit={handleAskAI} className="flex flex-col gap-3">
            <label className="text-[13px] font-bold text-[#161c27]">What would you like to know about your Dandeli trip?</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Best rapids for rafting in October..."
                className="flex-grow px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.2)] text-[14px] text-[#161c27] outline-none focus:border-[#012d1d]"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-3 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md transition-all disabled:opacity-50 shrink-0"
              >
                {loading ? 'Thinking...' : 'Ask AI'}
              </button>
            </div>
          </form>

          {loading && (
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <div className="w-8 h-8 rounded-full border-4 border-[#012d1d] border-t-transparent animate-spin"></div>
              <span className="text-[14px] text-[#414844]">Consulting local naturalists and river rafting guides...</span>
            </div>
          )}

          {recommendation && !loading && (
            <div className="bg-[#f1f3ff] rounded-2xl p-5 border border-[rgba(27,67,50,0.1)] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#012d1d] font-bold text-[15px]">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                <span>AI Expert Recommendations</span>
              </div>
              <div className="prose text-[14px] text-[#161c27] leading-relaxed whitespace-pre-wrap">
                {recommendation}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

// --- PackageBookingModal ---

interface PackageBookingModalProps {
  pkg: PackageItem;
  onClose: () => void;
  onConfirm: (bookingDetails: {
    itemName: string;
    itemType: 'stay' | 'activity' | 'package';
    image: string;
    dates: string;
    guests: string;
    totalPrice: number;
    location: string;
  }) => void;
}

export const PackageBookingModal: React.FC<PackageBookingModalProps> = ({ pkg, onClose, onConfirm }) => {
  const [guests, setGuests] = useState(2);
  const [checkInDate, setCheckInDate] = useState('18 Oct 2026');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const totalPrice = pkg.price * (guests > 0 ? guests : 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm({
      itemName: pkg.title,
      itemType: 'package',
      image: pkg.image,
      dates: `${checkInDate} (${pkg.duration})`,
      guests: `${guests} Guest${guests > 1 ? 's' : ''}`,
      totalPrice,
      location: 'Dandeli Eco-Resort & Tiger Sanctuary'
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="relative h-48 bg-[#012d1d]">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d] via-black/30 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#161c27] flex items-center justify-center shadow-md hover:bg-white"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 rounded-full bg-[#c1ecd4] text-[#012d1d] text-[12px] font-bold">
              {pkg.duration}
            </span>
            <h2 className="font-epilogue text-[20px] font-bold text-white mt-1 drop-shadow-sm">
              {pkg.title}
            </h2>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#161c27]">Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#161c27]">Email Address</label>
              <input
                type="email"
                required
                placeholder="rahul@example.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#161c27]">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#161c27]">Check-in Date</label>
              <input
                type="text"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#161c27]">Number of Guests</label>
              <input
                type="number"
                min="1"
                max="20"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                className="px-4 py-2.5 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#161c27]">Special Requests or Dietary Notes (Optional)</label>
            <textarea
              rows={2}
              placeholder="e.g. Vegetarian meals preferred, anniversary setup..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="px-4 py-2 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            ></textarea>
          </div>

          <div className="bg-[#f9f9ff] p-4 rounded-2xl flex items-center justify-between border border-[rgba(27,67,50,0.06)] mt-2">
            <div>
              <span className="text-[12px] text-[#414844] block">Total Online Price</span>
              <span className="font-epilogue text-[22px] font-bold text-[#012d1d]">₹{totalPrice.toLocaleString()}</span>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold rounded-xl text-[15px] shadow-lg active:scale-95 transition-transform"
            >
              Confirm Online Booking 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- PropertyDetailsModal ---

interface PropertyDetailsModalProps {
  stay: Stay;
  onClose: () => void;
  onConfirmBooking: (bookingData: { itemName: string; itemType: 'stay'; image: string; dates: string; guests: string; totalPrice: number; location: string }) => void;
}

export const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({
  stay,
  onClose,
  onConfirmBooking
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Booking Form State
  const [checkInDate, setCheckInDate] = useState('2026-10-18');
  const [checkOutDate, setCheckOutDate] = useState('2026-10-20');
  const [guestsCount, setGuestsCount] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);
  const [roomType, setRoomType] = useState('Standard Room (Included)');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'resort'>('upi');

  const nights = 2;
  const roomExtra = roomType.includes('Premium') ? 1000 : roomType.includes('Luxury') ? 2500 : roomType.includes('Private') ? 4000 : 0;
  const totalPrice = (stay.price + roomExtra) * nights * roomsCount + 504;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      onConfirmBooking({
        itemName: `${stay.title} - ${roomType.split('(')[0].trim()}`,
        itemType: 'stay',
        image: stay.image,
        dates: `${checkInDate} to ${checkOutDate} (${nights} Nights)`,
        guests: `${guestsCount} Guests • ${roomsCount} Room`,
        totalPrice,
        location: stay.location
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl min-h-screen sm:min-h-0 sm:max-h-[92vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Header with Step Indicator */}
        <div className="sticky top-0 z-25 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold text-[#006688] uppercase tracking-wider">Step {step} of 3</span>
              <span className="text-[12px] text-[#414844]">• {step === 1 ? 'Select Stay & Room Type' : step === 2 ? 'Guest Details & Notes' : 'Secure Payment'}</span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-[11px] font-bold">
                {stay.category}
              </span>
              <h2 className="font-epilogue text-[18px] sm:text-[20px] font-bold text-[#161c27] truncate max-w-md">
                {stay.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#f1f3ff] hover:bg-[#e3e8f9] flex items-center justify-center text-[#161c27] transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-8 flex flex-col gap-6">
          
          {/* Step Progress Bar */}
          <div className="w-full bg-[#f1f3ff] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#012d1d] h-full transition-all duration-300"
              style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
            ></div>
          </div>

          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-200">
              {/* Gallery & Overview */}
              <div className="md:col-span-2 flex flex-col gap-5">
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#dde2f3] shadow-md">
                  <img
                    src={stay.gallery[activeImageIdx] || stay.image}
                    alt={stay.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1b4332]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[12px] font-semibold">
                    Photo {activeImageIdx + 1} of {stay.gallery.length}
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {stay.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIdx === idx ? 'border-[#012d1d] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <div>
                  <h3 className="font-epilogue text-[20px] font-bold text-[#161c27]">{stay.subtitle}</h3>
                  <p className="text-[14px] text-[#414844] mt-2 leading-relaxed">{stay.description}</p>
                </div>

                <div className="bg-[#f1f3ff] rounded-2xl p-4 flex flex-col gap-3">
                  <h4 className="font-epilogue text-[16px] font-bold text-[#161c27]">Resort Amenities</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {stay.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-[13px] text-[#414844]">
                        <span className="material-symbols-outlined text-[18px] text-[#1b4332]">check_circle</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 1 Booking Widget */}
              <div className="bg-[#f9f9ff] border border-[rgba(27,67,50,0.1)] rounded-2xl p-5 shadow-lg flex flex-col gap-4 h-fit">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-epilogue text-[26px] font-bold text-[#012d1d]">
                      ₹{(stay.price + roomExtra).toLocaleString()}
                    </span>
                    <span className="text-[13px] text-[#414844]"> {stay.priceUnit}</span>
                  </div>
                  <span className="text-[12px] text-[#006688] font-semibold">Free cancellation</span>
                </div>

                <form onSubmit={handleNextStep} className="flex flex-col gap-4 pt-2">
                  {/* Room Type Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-[#414844] uppercase">Select Room / Accommodation Type</label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium focus:ring-2 focus:ring-[#1b4332]"
                    >
                      <option value="Standard Room (Included)">Standard Room (Included)</option>
                      <option value="Premium Riverside View Room (+₹1,000/night)">Premium Riverside View Room (+₹1,000/night)</option>
                      <option value="Luxury Suite with Balcony (+₹2,500/night)">Luxury Suite with Balcony (+₹2,500/night)</option>
                      <option value="Private Cottage with Jacuzzi (+₹4,000/night)">Private Cottage with Jacuzzi (+₹4,000/night)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#414844] uppercase">Check-in</label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#414844] uppercase">Check-out</label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#414844] uppercase">Guests</label>
                      <select
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(Number(e.target.value))}
                        className="px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium"
                      >
                        <option value={1}>1 Guest</option>
                        <option value={2}>2 Guests</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Guests</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-bold text-[#414844] uppercase">Rooms</label>
                      <select
                        value={roomsCount}
                        onChange={(e) => setRoomsCount(Number(e.target.value))}
                        className="px-3 py-2.5 rounded-xl bg-white border border-[rgba(27,67,50,0.2)] text-[13px] font-medium"
                      >
                        <option value={1}>1 Room</option>
                        <option value={2}>2 Rooms</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-[rgba(27,67,50,0.1)] pt-3 flex flex-col gap-1.5 text-[13px] text-[#414844]">
                    <div className="flex justify-between">
                      <span>₹{(stay.price + roomExtra).toLocaleString()} × {nights} nights × {roomsCount} room</span>
                      <span>₹{((stay.price + roomExtra) * nights * roomsCount).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Service Fees</span>
                      <span>₹504</span>
                    </div>
                    <div className="flex justify-between font-bold text-[#161c27] text-[15px] pt-2 border-t border-[rgba(27,67,50,0.1)]">
                      <span>Total Amount</span>
                      <span className="text-[#012d1d]">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-epilogue font-bold text-[16px] shadow-lg active:scale-95 transition-all mt-2 flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Guest Details</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="max-w-2xl mx-auto w-full flex flex-col gap-6 animate-in fade-in duration-200 py-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-epilogue text-[22px] font-bold text-[#161c27]">Primary Guest Information</h3>
                <p className="text-[14px] text-[#414844]">Enter lead guest contact details for booking confirmation and e-ticket dispatch.</p>
              </div>

              <div className="bg-[#f1f3ff] p-4 rounded-xl flex items-center justify-between text-[13px] text-[#161c27]">
                <span>Selected Property: <strong>{stay.title}</strong></span>
                <span className="px-2 py-0.5 bg-white rounded-md font-bold text-[#012d1d]">{roomType.split('(')[0]}</span>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-[#161c27]">Full Name (as per Govt ID)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-[#161c27]">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="anand@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-[#161c27]">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-[#161c27]">Special Requests or Dietary Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Extra mattress needed, airport pickup inquiry..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-[rgba(27,67,50,0.2)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(27,67,50,0.1)]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl bg-[#f1f3ff] text-[#161c27] font-semibold text-[14px] hover:bg-[#e3e8f9]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-[15px] shadow-lg flex items-center gap-2"
                >
                  <span>Proceed to Payment</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNextStep} className="max-w-2xl mx-auto w-full flex flex-col gap-6 animate-in fade-in duration-200 py-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-epilogue text-[22px] font-bold text-[#161c27]">Select Payment Method</h3>
                <p className="text-[14px] text-[#414844]">Choose your preferred secure payment channel to instantly confirm your reservation.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'upi' ? 'border-[#012d1d] bg-[#f1f3ff]' : 'border-[rgba(27,67,50,0.1)] bg-white hover:bg-[#fafbfc]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-[#006688]">qr_code_scanner</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-[#161c27]">UPI / QR Code</span>
                    <span className="text-[12px] text-[#414844]">GPay, PhonePe, Paytm</span>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-[#012d1d] bg-[#f1f3ff]' : 'border-[rgba(27,67,50,0.1)] bg-white hover:bg-[#fafbfc]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-[#006688]">credit_card</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-[#161c27]">Credit / Debit Card</span>
                    <span className="text-[12px] text-[#414844]">Visa, MasterCard, RuPay</span>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'netbanking' ? 'border-[#012d1d] bg-[#f1f3ff]' : 'border-[rgba(27,67,50,0.1)] bg-white hover:bg-[#fafbfc]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-[#006688]">account_balance</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-[#161c27]">Net Banking</span>
                    <span className="text-[12px] text-[#414844]">All Major Indian Banks</span>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('resort')}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'resort' ? 'border-[#012d1d] bg-[#f1f3ff]' : 'border-[rgba(27,67,50,0.1)] bg-white hover:bg-[#fafbfc]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] text-[#006688]">payments</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-[#161c27]">Pay at Resort</span>
                    <span className="text-[12px] text-[#414844]">Cash or Card upon check-in</span>
                  </div>
                </label>
              </div>

              {/* Order Summary Box */}
              <div className="bg-[#f9f9ff] p-5 rounded-2xl border border-[rgba(27,67,50,0.1)] flex flex-col gap-3">
                <span className="font-epilogue text-[15px] font-bold text-[#161c27]">Booking Summary</span>
                <div className="flex justify-between text-[13px] text-[#414844]">
                  <span>{stay.title} ({roomType.split('(')[0]}, {nights} Nights)</span>
                  <span>₹{((stay.price + roomExtra) * nights * roomsCount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[13px] text-[#414844]">
                  <span>Taxes & Fees</span>
                  <span>₹504</span>
                </div>
                <div className="flex justify-between font-bold text-[16px] text-[#012d1d] pt-2 border-t border-[rgba(27,67,50,0.1)]">
                  <span>Total Payable</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(27,67,50,0.1)]">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-xl bg-[#f1f3ff] text-[#161c27] font-semibold text-[14px] hover:bg-[#e3e8f9]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-epilogue font-bold text-[16px] shadow-xl flex items-center gap-2 active:scale-95 transition-all"
                >
                  <span>Complete Secure Booking 🎉</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

// --- AboutView ---

export const AboutView: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the best time of year to visit Dandeli?',
      a: 'The best time to visit Dandeli is between October and May. The weather is pleasant, temperatures range from 20°C to 30°C, and water levels in the Kali River are ideal for white-water rafting and water sports.'
    },
    {
      q: 'Is white-water rafting safe for beginners and non-swimmers?',
      a: 'Yes, absolutely! The Kali River rafting stretch features Grade II and III rapids, supervised by internationally certified river guides. Mandatory high-buoyancy life jackets and safety briefings are provided, and swimming is not required.'
    },
    {
      q: 'Are meals included with resort stays and adventure packages?',
      a: 'Most eco-resorts and packages include 3 nutritious meals daily (breakfast, lunch, and dinner) featuring authentic Malnad cuisine and multi-cuisine buffets, with both vegetarian and non-vegetarian options.'
    },
    {
      q: 'How do I reach Dandeli?',
      a: 'The nearest airport is Hubli (HBX) at ~75 km. The nearest major railway stations are Alnavar (55 km) and Dharwad (60 km). Overnight AC luxury buses run daily from Bengaluru, Pune, Mumbai, and Goa.'
    },
    {
      q: 'What wildlife can I expect to see in the Dandeli Wildlife Sanctuary?',
      a: 'Dandeli is part of the Anshi-Dandeli Tiger Reserve. You can spot black panthers, leopards, Indian bisons, spotted deer, crocodiles in the Kali River, and over 200 species of colorful birds including the Great Hornbill.'
    },
    {
      q: 'What is the cancellation and refund policy?',
      a: 'We offer free cancellation up to 48 hours prior to your check-in date with a 100% instant refund. Modifications to dates or guest counts can also be done anytime via your My Bookings tab.'
    }
  ];

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto flex flex-col gap-8 animate-in fade-in duration-200">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#012d1d] to-[#1b4332] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col gap-4">
        <span className="text-[#c1ecd4] font-semibold text-[13px] uppercase tracking-wider">About DandeliTours</span>
        <h1 className="font-epilogue text-[28px] sm:text-[42px] font-bold leading-tight">
          Your Gateway to the Untamed Western Ghats
        </h1>
        <p className="text-[15px] sm:text-[16px] text-[#e8eeff]/90 leading-relaxed max-w-2xl">
          Founded in the heart of Karnataka's biodiversity hotspot, DandeliTours is dedicated to sustainable eco-tourism, thrilling whitewater adventures on the Kali River, and immersive wildlife conservation.
        </p>
      </div>

      {/* Core Values / Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[rgba(27,67,50,0.06)] flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#c1ecd4] text-[#002114] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[24px]">forest</span>
          </div>
          <h3 className="font-epilogue text-[18px] font-bold text-[#161c27]">Eco-Tourism First</h3>
          <p className="text-[14px] text-[#414844] leading-relaxed">
            We partner exclusively with certified eco-resorts and local guides who protect the delicate Anshi-Dandeli Tiger Reserve and Kali River basin.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[rgba(27,67,50,0.06)] flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#c2e8ff] text-[#004d68] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[24px]">kayaking</span>
          </div>
          <h3 className="font-epilogue text-[18px] font-bold text-[#161c27]">Certified Adventure</h3>
          <p className="text-[14px] text-[#414844] leading-relaxed">
            All white-water rafting instructors hold international certifications, and every expedition follows strict safety protocols with top-tier gear.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[rgba(27,67,50,0.06)] flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#ffdad2] text-[#3c0700] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[24px]">favorite</span>
          </div>
          <h3 className="font-epilogue text-[18px] font-bold text-[#161c27]">Community Support</h3>
          <p className="text-[14px] text-[#414844] leading-relaxed">
            A portion of every booking directly supports local indigenous Malnad communities, village schools, and river cleanliness drives.
          </p>
        </div>
      </div>

      {/* Experience Statistics */}
      <div className="bg-[#f1f3ff] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
        <div className="flex flex-col">
          <span className="font-epilogue text-[32px] sm:text-[40px] font-bold text-[#012d1d]">12,500+</span>
          <span className="text-[13px] text-[#414844] font-semibold">Happy Adventurers</span>
        </div>
        <div className="flex flex-col">
          <span className="font-epilogue text-[32px] sm:text-[40px] font-bold text-[#006688]">48+</span>
          <span className="text-[13px] text-[#414844] font-semibold">Verified Eco Stays</span>
        </div>
        <div className="flex flex-col">
          <span className="font-epilogue text-[32px] sm:text-[40px] font-bold text-[#012d1d]">4.9 / 5</span>
          <span className="text-[13px] text-[#414844] font-semibold">Average Guest Rating</span>
        </div>
      </div>

      {/* Detailed FAQ Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(27,67,50,0.06)] shadow-sm flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[#006688] font-bold text-[12px] uppercase tracking-wider">Got Questions?</span>
          <h2 className="font-epilogue text-[22px] sm:text-[26px] font-bold text-[#161c27]">Frequently Asked Questions</h2>
          <p className="text-[14px] text-[#414844]">Everything you need to know about planning your Dandeli trip, safety, and online bookings.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[rgba(27,67,50,0.1)] rounded-2xl overflow-hidden transition-all bg-[#f9f9ff]"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-epilogue font-bold text-[16px] text-[#161c27] hover:bg-[#f1f3ff] transition-all"
                  type="button"
                >
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#012d1d]' : 'text-[#414844]'}`}>
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[14px] text-[#414844] leading-relaxed border-t border-[rgba(27,67,50,0.06)] pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact & Location Info */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(27,67,50,0.06)] shadow-sm flex flex-col gap-4">
        <h3 className="font-epilogue text-[20px] font-bold text-[#161c27]">Get in Touch with Our Dandeli Base</h3>
        <p className="text-[14px] text-[#414844] leading-relaxed">
          Planning a customized corporate retreat, family adventure, or romantic treehouse getaway? Our local naturalists are here to assist you 24/7.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="flex items-center gap-3 bg-[#f1f3ff] p-3.5 rounded-2xl">
            <span className="material-symbols-outlined text-[24px] text-[#006688]">location_on</span>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold text-[#414844] uppercase">Base Office</span>
              <span className="text-[14px] font-semibold text-[#161c27]">Kali River Bank, Ganeshgudi, Dandeli</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#f1f3ff] p-3.5 rounded-2xl">
            <span className="material-symbols-outlined text-[24px] text-[#1b4332]">call</span>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold text-[#414844] uppercase">Support Hotline</span>
              <span className="text-[14px] font-semibold text-[#161c27]">+91 94801 23456</span>
            </div>
          </div>
          <a
            href="https://wa.me/919480123456?text=Hello%20DandeliTours!%20I%20would%20like%20to%20inquire%20about%20stays%20and%20rafting%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#e7f9ee] hover:bg-[#d8f5e2] p-3.5 rounded-2xl border border-[#25D366]/30 transition-all group"
          >
            <img src="/assets/whatsapp_logo.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
            <div className="flex flex-col">
              <span className="text-[12px] font-bold text-[#075e54] uppercase">WhatsApp Chat</span>
              <span className="text-[14px] font-semibold text-[#161c27] group-hover:text-[#075e54] transition-colors">Instant 24x7 Help</span>
            </div>
          </a>
        </div>
      </div>

    </div>
  );
};


export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('explore');
  const [stays] = useState<Stay[]>(INITIAL_STAYS);
  const [activities] = useState<Activity[]>(INITIAL_ACTIVITIES);
  const [packages] = useState<PackageItem[]>(INITIAL_PACKAGES);
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);

  // Theme Management (Light / Dark Mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dandeli_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dandeli_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dandeli_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [minRating, setMinRating] = useState(0);

  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: 'Dandeli, Karnataka',
    checkIn: '18 Oct',
    checkOut: '20 Oct',
    guests: 2,
    rooms: 1
  });

  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [packageCategory, setPackageCategory] = useState('All');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAiConciergeOpen, setIsAiConciergeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleConfirmBooking = (bookingData: {
    itemName: string;
    itemType: 'stay' | 'activity' | 'package';
    image: string;
    dates: string;
    guests: string;
    totalPrice: number;
    location: string;
  }) => {
    const newBooking: Booking = {
      id: `bk-${Date.now()}`,
      bookingCode: `DT-${Math.floor(100000 + Math.random() * 900000)}`,
      ...bookingData,
      status: 'Confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setBookings([newBooking, ...bookings]);
    setSelectedStay(null);
    showToast(`Booking confirmed! Code: ${newBooking.bookingCode}`);
    setActiveTab('my-bookings');
  };

  const handleCancelBooking = (id: string) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: 'Cancelled' } : b));
    showToast('Booking cancelled successfully.');
  };

  // Filter & sort stays
  const filteredStays = stays.filter(stay => {
    if (selectedCategory !== 'All' && stay.category !== selectedCategory) return false;
    if (minRating > 0 && stay.rating < minRating) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  });

  const categoryCounts = stays.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-[#07130e] text-[#edf2f7]' : 'bg-[#f9f9ff] text-[#161c27]'} flex flex-col font-['Plus_Jakarta_Sans'] pb-12 transition-colors duration-200`}>
      
      {/* Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsModifyModalOpen(true)}
        onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bookingsCount={bookings.filter(b => b.status === 'Confirmed').length}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Top Navigation Bar Below Header */}
      <nav className={`sticky top-16 inset-x-0 z-40 ${isDarkMode ? 'bg-[#0a1b14]/95 border-[rgba(82,183,136,0.18)] shadow-[0_4px_16px_rgba(0,0,0,0.4)]' : 'bg-[#f9f9ff]/90 border-[rgba(27,67,50,0.06)] shadow-[0_4px_12px_-4px_rgba(27,67,50,0.04)]'} backdrop-blur-xl border-b transition-colors`}>
        <div className="flex items-center justify-around sm:justify-start gap-1 sm:gap-4 h-14 px-4 max-w-7xl mx-auto overflow-x-auto no-scrollbar">
          {[
            { id: 'explore' as TabType, label: 'Home', icon: 'home' },
            { id: 'stays' as TabType, label: 'Stays', icon: 'cottage' },
            { id: 'activities' as TabType, label: 'Activities', icon: 'kayaking' },
            { id: 'packages' as TabType, label: 'Packages', icon: 'local_activity' },
            { id: 'my-bookings' as TabType, label: 'Bookings', icon: 'confirmation_number', hasBadge: true },
            { id: 'about' as TabType, label: 'About', icon: 'info' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const confirmedCount = bookings.filter(b => b.status === 'Confirmed').length;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[14px] font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#1b4332] text-white shadow-md'
                    : isDarkMode
                    ? 'text-[#cbd5e1] hover:bg-[#132e22] hover:text-[#a7f3d0]'
                    : 'text-[#414844] hover:bg-[#e8eeff] hover:text-[#012d1d]'
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.hasBadge && confirmedCount > 0 && (
                  <span className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${isActive ? 'bg-[#c1ecd4] text-[#012d1d]' : 'bg-[#e76f51] text-white'}`}>
                    {confirmedCount}
                  </span>
                )}
              </button>
            );
          })}

          {/* View Map Option beside About */}
          <button
            onClick={() => setIsMapModalOpen(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[14px] font-semibold transition-all shrink-0 ${
              isDarkMode
                ? 'text-[#cbd5e1] hover:bg-[#132e22] hover:text-[#a7f3d0]'
                : 'text-[#414844] hover:bg-[#e8eeff] hover:text-[#012d1d]'
            } active:scale-95`}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-[#006688]">map</span>
            <span>View Map</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex flex-col relative w-full pt-4 flex-grow max-w-7xl mx-auto w-full px-4">
        
        {/* TAB 1 & 2: EXPLORE / STAYS */}
        {(activeTab === 'explore' || activeTab === 'stays') && (
          <div className="py-3 flex flex-col gap-6">
            {activeTab === 'stays' && (
              <>
                <SearchSummaryBar
                  searchParams={searchParams}
                  onModify={() => setIsModifyModalOpen(true)}
                />
                <CategoryChips
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  counts={categoryCounts}
                />
                <FilterSortBar
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  onOpenFilters={() => setIsModifyModalOpen(true)}
                  activeFilterCount={minRating > 0 ? 1 : 0}
                />
              </>
            )}

            {activeTab === 'explore' && (
              <>
                <div className="rounded-3xl overflow-hidden shadow-2xl w-full h-[340px] sm:h-[480px] bg-[#012d1d] relative flex items-center justify-center group">
                  <img
                    src="https://res.cloudinary.com/jn4npnn4/image/upload/f_auto,q_auto/karnatak"
                    alt="Dandeli Karnataka Tourism"
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = heroBannerImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#c1ecd4] text-[#002114] font-bold text-[11px] sm:text-[12px] uppercase tracking-wider shadow-sm">
                        Welcome to Dandeli
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-[12px] font-semibold">
                        Kali River & Tiger Reserve
                      </span>
                    </div>
                    <h1 className="font-epilogue text-[26px] sm:text-[42px] font-bold text-white drop-shadow-md leading-tight max-w-2xl">
                      Gateway to Wilderness & Rapids
                    </h1>
                    <p className="text-[#e8eeff]/90 text-[13px] sm:text-[15px] mt-1.5 max-w-xl hidden sm:block leading-relaxed">
                      Experience crystal-clear rapids, tranquil jungle stays, and rich Western Ghats biodiversity.
                    </p>
                  </div>
                </div>
                <WeatherWidget />
                <HomeQuickHighlights setActiveTab={setActiveTab} />
                <TourismGuideSection />
                <TestimonialsSection />
              </>
            )}

            <div className="flex items-center justify-between">
              <h2 className="font-epilogue text-[22px] font-bold text-[#161c27]">
                {activeTab === 'explore' ? 'Featured Stays & Eco Resorts' : `${selectedCategory} (${filteredStays.length})`}
              </h2>
              {activeTab === 'stays' && (
                <button
                  onClick={() => setIsMapModalOpen(true)}
                  className="flex items-center gap-1.5 text-[#006688] font-semibold text-[14px] hover:underline"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">map</span>
                  <span>View Map</span>
                </button>
              )}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStays.map((stay) => (
                <StayCard
                  key={stay.id}
                  stay={stay}
                  onSelect={(s) => setSelectedStay(s)}
                  onBook={(s) => setSelectedStay(s)}
                />
              ))}
            </div>

            {filteredStays.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 gap-3 bg-white rounded-2xl shadow-sm">
                <span className="material-symbols-outlined text-[48px] text-[#414844]">search_off</span>
                <p className="font-epilogue text-[18px] font-semibold text-[#161c27]">No stays found matching your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setMinRating(0); }}
                  className="px-4 py-2 bg-[#012d1d] text-white rounded-xl text-[13px] font-semibold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ACTIVITIES */}
        {activeTab === 'activities' && (
          <div className="px-4 py-4 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-epilogue text-[24px] font-bold text-[#161c27]">Adventure Sports & Safaris</h1>
              <p className="text-[14px] text-[#414844]">Experience Grade III whitewater rafting, jungle safaris, and coracle rides on the Kali River.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((act) => (
                <ActivityCard
                  key={act.id}
                  activity={act}
                  onBook={(a) => {
                    handleConfirmBooking({
                      itemName: a.title,
                      itemType: 'activity',
                      image: a.image,
                      dates: searchParams.checkIn + ' 2026 (09:00 AM)',
                      guests: '2 Persons',
                      totalPrice: a.price * 2,
                      location: 'Dandeli Adventure Hub'
                    });
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PACKAGES */}
        {activeTab === 'packages' && (() => {
          const filteredPackages = packages.filter(pkg => {
            if (packageCategory === 'All') return true;
            if (packageCategory === 'Student') return pkg.id.includes('student');
            if (packageCategory === 'Group') return pkg.id.includes('group');
            if (packageCategory === 'Family') return pkg.id.includes('family');
            if (packageCategory === 'Couple') return pkg.id.includes('couple');
            return true;
          });

          return (
            <div className="px-4 py-4 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h1 className="font-epilogue text-[24px] font-bold text-[#161c27]">Student, Group, Family & Couple Packages</h1>
                <p className="text-[14px] text-[#414844]">View, select, and book online curated multi-day adventure packages tailored for every group type.</p>
              </div>

              {/* Package Category Filter Chips */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                {['All', 'Student', 'Group', 'Family', 'Couple'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setPackageCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-[14px] font-semibold transition-all shrink-0 ${
                      packageCategory === cat
                        ? 'bg-[#1b4332] text-white shadow-sm'
                        : 'bg-white text-[#414844] border border-[rgba(27,67,50,0.1)] hover:bg-[#e8eeff]'
                    }`}
                    type="button"
                  >
                    {cat === 'All' ? '🌟 All Packages' : cat === 'Student' ? '🎓 Student Camp' : cat === 'Group' ? '👥 Group Pass' : cat === 'Family' ? '👨‍👩‍👧‍👦 Family Holiday' : '❤️ Couple Getaway'}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    onBook={(p) => setSelectedPackage(p)}
                  />
                ))}
              </div>
              {filteredPackages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 gap-3 bg-white rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-[48px] text-[#414844]">travel_explore</span>
                  <p className="font-epilogue text-[18px] font-semibold text-[#161c27]">No packages found for this category.</p>
                  <button
                    onClick={() => setPackageCategory('All')}
                    className="px-4 py-2 bg-[#012d1d] text-white rounded-xl text-[13px] font-semibold"
                  >
                    View All Packages
                  </button>
                </div>
              )}
            </div>
          );
        })()}

        {/* TAB 5: MY BOOKINGS */}
        {activeTab === 'my-bookings' && (
          <div className="px-4 py-4 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-epilogue text-[24px] font-bold text-[#161c27]">My Bookings & E-Tickets</h1>
              <p className="text-[14px] text-[#414844]">Manage your upcoming reservations, download e-tickets, or modify trip details.</p>
            </div>

            <div className="flex flex-col gap-4">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  onCancel={handleCancelBooking}
                />
              ))}

              {bookings.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-3 bg-white rounded-2xl shadow-sm">
                  <span className="material-symbols-outlined text-[48px] text-[#414844]">confirmation_number</span>
                  <p className="font-epilogue text-[18px] font-semibold text-[#161c27]">No active bookings found.</p>
                  <button
                    onClick={() => setActiveTab('stays')}
                    className="px-5 py-2.5 bg-[#012d1d] text-white rounded-xl text-[14px] font-semibold"
                  >
                    Explore Stays Now
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 6: ABOUT */}
        {activeTab === 'about' && <AboutView />}

      </main>

      {/* Floating WhatsApp Quick Chat Button */}
      <aside className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919480123456?text=Hello%20DandeliTours!%20I%20would%20like%20to%20inquire%20about%20stays%20and%20rafting%20packages."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] active:scale-95 transition-all duration-200"
          title="Chat with Dandeli Expert on WhatsApp (+91 94801 23456)"
        >
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/whatsapp_logo.png"
              alt="WhatsApp"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm"
            />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping"></span>
            </span>
          </div>
          <span className="hidden sm:inline font-bold text-[14px] pr-1 whitespace-nowrap tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#012d1d] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-200">
          <span className="material-symbols-outlined text-[20px] text-[#c1ecd4]">check_circle</span>
          <span className="text-[14px] font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      {selectedStay && (
        <PropertyDetailsModal
          stay={selectedStay}
          onClose={() => setSelectedStay(null)}
          onConfirmBooking={handleConfirmBooking}
        />
      )}

      {isMapModalOpen && (
        <MapViewModal
          stays={stays}
          onClose={() => setIsMapModalOpen(false)}
          onSelectStay={(s) => setSelectedStay(s)}
        />
      )}

      {isModifyModalOpen && (
        <ModifySearchModal
          searchParams={searchParams}
          onClose={() => setIsModifyModalOpen(false)}
          onSave={setSearchParams}
        />
      )}

      {isMenuOpen && (
        <MenuDrawer
          onClose={() => setIsMenuOpen(false)}
          setActiveTab={setActiveTab}
          onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
          onOpenMap={() => setIsMapModalOpen(true)}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />
      )}

      {isAiConciergeOpen && (
        <AiConciergeModal
          onClose={() => setIsAiConciergeOpen(false)}
        />
      )}

      {selectedPackage && (
        <PackageBookingModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onConfirm={(bookingData) => {
            handleConfirmBooking(bookingData);
            setSelectedPackage(null);
            showToast('Package successfully booked online! E-ticket generated.');
          }}
        />
      )}

    </div>
  );
}
