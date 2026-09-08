import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface AiConciergeModalProps {
  onClose: () => void;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState('Create a 3-day itinerary for white water rafting and jungle stay in Dandeli');
  const [travelDates] = useState('18 Oct - 20 Oct 2026');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRecommendation(null);
    try {
      const res = await fetch('/api/ai-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, travelDates, groupSize: '2 guests' })
      });
      const data = await res.json();
      if (data.recommendation) {
        setRecommendation(data.recommendation);
      } else {
        setRecommendation(data.error || 'Failed to generate recommendation.');
      }
    } catch (err: any) {
      setRecommendation('Network error or AI service unavailable. Please check your Gemini API key configuration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[rgba(27,67,50,0.08)] flex items-center justify-between bg-[#012d1d] text-white">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-[#c1ecd4]">smart_toy</span>
            <div>
              <h2 className="font-epilogue text-[18px] font-bold">Dandeli Wilds & Waters AI Trip Guide</h2>
              <span className="text-[12px] text-[#c1ecd4]">Powered by Google Gemini</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto flex-grow">
          <form onSubmit={handleAskAI} className="flex flex-col gap-3">
            <label className="text-[13px] font-bold text-[#161c27]">What would you like to know about your Dandeli trip?</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Best rapids for rafting in October..."
                className="flex-grow px-4 py-3 rounded-xl bg-[#f1f3ff] border border-[rgba(27,67,50,0.2)] text-[14px] text-[#161c27] outline-none focus:border-[#012d1d]"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-3 rounded-xl bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-[14px] shadow-md transition-all disabled:opacity-50 shrink-0"
              >
                {loading ? 'Thinking...' : 'Ask AI'}
              </button>
            </div>
          </form>

          {loading && (
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <div className="w-8 h-8 rounded-full border-4 border-[#012d1d] border-t-transparent animate-spin"></div>
              <span className="text-[14px] text-[#414844]">Consulting local naturalists and river rafting guides...</span>
            </div>
          )}

          {recommendation && !loading && (
            <div className="bg-[#f1f3ff] rounded-2xl p-5 border border-[rgba(27,67,50,0.1)] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#012d1d] font-bold text-[15px]">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                <span>AI Expert Recommendations</span>
              </div>
              <div className="prose text-[14px] text-[#161c27] leading-relaxed">
                <ReactMarkdown>{recommendation}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
