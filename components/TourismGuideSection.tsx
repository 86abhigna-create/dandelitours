import React, { useState } from 'react';

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
