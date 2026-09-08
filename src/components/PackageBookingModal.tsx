import React, { useState } from 'react';
import { PackageItem } from '../types';

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
