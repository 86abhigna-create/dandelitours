import React, { useState } from 'react';
import { SearchParams } from '../types';

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
