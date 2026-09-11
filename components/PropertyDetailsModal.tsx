import React, { useState } from 'react';
import { Stay } from '../types';

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
