import React, { useState } from 'react';

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
