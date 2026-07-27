import React from 'react';
import FadeIn from './FadeIn';

const CompetitiveStatsSection = () => {
  return (
    <section id="cp-stats" className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] text-[clamp(2.5rem,8vw,120px)] leading-none mb-16">
            Competitive Programming
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LeetCode Card */}
          <FadeIn delay={0.1} y={30}>
            <div className="bg-[#0C0C0C] text-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-2xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                      LC
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-white">LeetCode</h3>
                      <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Knight Badge (Top 6% Globally)</span>
                    </div>
                  </div>

                  <a
                    href="https://leetcode.com/u/sarthak_1712/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-white/20 text-xs font-medium text-white hover:bg-white hover:text-black transition-all"
                  >
                    View Profile &rarr;
                  </a>
                </div>

                {/* Rating Banner */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-widest block">Contest Rating</span>
                    <span className="text-3xl sm:text-4xl font-black text-amber-400">1,874</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white/50 text-xs uppercase tracking-widest block">Global Rank</span>
                    <span className="text-xl sm:text-2xl font-bold text-white">Top 6%</span>
                  </div>
                </div>

                {/* Problem Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-emerald-400">Easy Solved</span>
                    <span className="text-white">276</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[65%]"></div>
                  </div>

                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-amber-400">Medium Solved</span>
                    <span className="text-white">404</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-[85%]"></div>
                  </div>

                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-red-400">Hard Solved</span>
                    <span className="text-white">27</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-400 h-full w-[35%]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-white/50">
                <span>Total Solved: <strong className="text-white">874+</strong></span>
                <span>Active Submissions: <strong className="text-white font-pixel">Daily Streak</strong></span>
              </div>
            </div>
          </FadeIn>

          {/* Codeforces Card */}
          <FadeIn delay={0.2} y={30}>
            <div className="bg-[#0C0C0C] text-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-2xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl">
                      CF
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-white">Codeforces</h3>
                      <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Candidate Master</span>
                    </div>
                  </div>

                  <a
                    href="https://codeforces.com/profile/Sarthak1712"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-white/20 text-xs font-medium text-white hover:bg-white hover:text-black transition-all"
                  >
                    View Profile &rarr;
                  </a>
                </div>

                {/* Peak Rating Banner */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-widest block">Peak Rating</span>
                    <span className="text-3xl sm:text-4xl font-black text-cyan-400">1,935</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white/50 text-xs uppercase tracking-widest block">Title</span>
                    <span className="text-xl sm:text-2xl font-bold text-cyan-400">Candidate Master</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <span className="text-white/50 text-xs uppercase block mb-1">Contributions</span>
                    <span className="text-2xl font-black text-white">4,513</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <span className="text-white/50 text-xs uppercase block mb-1">Max Streak</span>
                    <span className="text-2xl font-black text-emerald-400">132 Days</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-white/50">
                <span>Handle: <strong className="text-cyan-400">Sarthak1712</strong></span>
                <span>Division: <strong className="text-white">Div 1 / Div 2</strong></span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveStatsSection;
