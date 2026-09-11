import React from 'react';
import { Booking } from '../types';

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
