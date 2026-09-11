import React from 'react';
import { Stay } from '../types';

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
