import React from 'react';

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
