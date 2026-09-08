import React, { useState } from 'react';
import { SearchParams } from '../types';

interface InlineSearchBarProps {
  searchParams: SearchParams;
  onUpdateParams: (newParams: SearchParams) => void;
}

export const InlineSearchBar: React.FC<InlineSearchBarProps> = ({
  searchParams,
  onUpdateParams
}) => {
  const [location, setLocation] = useState(searchParams.location);
  const [checkIn, setCheckIn] = useState(searchParams.checkIn);
  const [checkOut, setCheckOut] = useState(searchParams.checkOut);
  const [guests, setGuests] = useState(searchParams.guests);
  const [rooms, setRooms] = useState(searchParams.rooms);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateParams({ location, checkIn, checkOut, guests, rooms });
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-[rgba(27,67,50,0.1)] my-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[20px] text-[#012d1d]">search</span>
        <h3 className="font-epilogue text-[16px] font-bold text-[#161c27]">Search Resorts, Jungle Camps & Packages</h3>
      </div>

      <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-[#414844] uppercase tracking-wider">Destination</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-[#f9f9ff] border border-[rgba(27,67,50,0.15)] text-[13px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-[#414844] uppercase tracking-wider">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-[#f9f9ff] border border-[rgba(27,67,50,0.15)] text-[13px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-[#414844] uppercase tracking-wider">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-[#f9f9ff] border border-[rgba(27,67,50,0.15)] text-[13px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-[#414844] uppercase tracking-wider">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="px-3 py-2.5 rounded-xl bg-[#f9f9ff] border border-[rgba(27,67,50,0.15)] text-[13px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-[#414844] uppercase tracking-wider">Rooms</label>
            <select
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="px-3 py-2.5 rounded-xl bg-[#f9f9ff] border border-[rgba(27,67,50,0.15)] text-[13px] font-medium text-[#161c27] outline-none focus:border-[#012d1d]"
            >
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-[14px] shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">search</span>
          <span>Update Search</span>
        </button>
      </form>
    </div>
  );
};
