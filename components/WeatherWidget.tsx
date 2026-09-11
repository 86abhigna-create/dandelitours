import React from 'react';

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
