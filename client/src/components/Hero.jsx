import React, { useState } from 'react';

const Hero = () => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between px-5 sm:px-6 md:px-10 lg:px-14 pt-24 pb-4 text-white overflow-hidden">
      <!-- Full-Bleed CloudFront Background Video -->
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 h-full w-full object-cover lg:scale-[1.2] pointer-events-none z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4"
          type="video/mp4"
        />
      </video>

      <!-- Content Container above video -->
      <div className="relative z-10 flex flex-col justify-between min-h-[calc(100vh-6rem)]">

        <!-- 2. FOUR-COLUMN META GRID -->
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

          <!-- COL 1 -->
          <div>
            <h2 className="text-lg md:text-xl tracking-wide leading-tight font-normal">
              Sarthak<br />
              <span class="font-pixel text-2xl md:text-3xl">Kanoi</span>
            </h2>
            <span className="text-[10px] text-white/50 mt-3 block">*</span>
            <p className="font-pixel mt-1 text-xs text-white/60 leading-relaxed">
              Grilled Pixels is my<br />
              personal brand - I came up<br />
              with it in 2004 based on<br />
              "cooking up ideas"
            </p>
          </div>

          <!-- COL 2 -->
          <div className="text-right lg:text-left">
            <h2 className="text-lg md:text-xl tracking-wide leading-tight font-normal">
              DESIGN &<br />
              <span className="font-pixel text-2xl md:text-3xl">ENGINEERING</span>
            </h2>
          </div>

          <!-- COL 3 -->
          <div>
            <div className="font-pixel text-base tracking-widest text-white/50 uppercase mb-3">What I Do</div>
            <p className="text-sm text-white/90 leading-relaxed max-w-[220px]">
              I create the top 1% of experiences for brands and digital products
            </p>
          </div>

          <!-- COL 4 -->
          <div className="text-right lg:text-left">
            <div className="font-pixel text-base tracking-widest text-white/50 uppercase mb-3">Services</div>
            <ul className="text-sm text-white/90 leading-relaxed space-y-0.5">
              <li>Branding</li>
              <li>Creative Direction & Strategy</li>
              <li>UX/UI Design</li>
              <li>Web Development (React/Nextjs)</li>
              <li>3D, WebGL / Photography</li>
              <li>Video & Animation</li>
            </ul>
          </div>

        </div>

        <!-- 3. FLEX SPACER -->
        <div className="flex-1 min-h-[40px]"></div>

        <!-- 4. BOTTOM SECTION -->
        <div className="pb-4">
          <!-- ROW A -->
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end">

            <!-- Left Headline -->
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal text-white"
                style={{ lineHeight: 0.72 }}
              >
                I BRING THE<br />
                <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline text-white">UNEXPECTED</span> TO<br />
                BRAND & DIGITAL<br />
                <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline text-white">EXPERIENCES</span>
              </h1>
            </div>

            <!-- Right Column (Showreel + Awards) -->
            <div className="flex flex-col gap-4 sm:gap-6 justify-end items-start lg:items-end">

              <!-- Play Showreel Button -->
              <button
                onClick={() => setShowreelOpen(true)}
                className="flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors uppercase tracking-wider text-sm self-start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>PLAY SHOWREEL</span>
              </button>

              <!-- Awards Row -->
              <div className="flex flex-wrap items-stretch gap-2 sm:gap-3 text-sm text-white/80 self-start lg:self-end">
                <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2 border border-white/10 rounded-sm">
                  <span className="font-bold text-sm sm:text-base tracking-tight text-white">FWA</span>
                  <span className="text-white/50 text-xs">x1</span>
                </div>
                <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2 border border-white/10 rounded-sm">
                  <span className="font-bold text-lg sm:text-xl text-white">W.</span>
                  <span className="text-white/50 text-xs">x7</span>
                </div>
                <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2 border border-white/10 rounded-sm">
                  <span className="font-bold text-[10px] sm:text-xs tracking-tight text-white">CSSDesignAwards</span>
                  <span className="text-white/50 text-xs">x22</span>
                </div>
              </div>

            </div>

          </div>

          <!-- ROW B: Footer Strip -->
          <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4 border-t border-white/10">
            <div className="text-xs text-white/60">
              Open to freelance, contract or full-time.
              <a href="#contact" className="text-red-500 hover:text-red-400 transition-colors ml-1 font-medium">Schedule a call</a>
            </div>
            <div className="text-xs text-white/60 sm:text-right">
              5 full cases &bull; 82 archive fragments &bull; 22 catalog items
            </div>
          </div>
        </div>

      </div>

      <!-- Showreel Video Modal -->
      {showreelOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowreelOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black border border-white/20 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowreelOpen(false)}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="aspect-video w-full">
              <video controls autoPlay className="w-full h-full object-cover">
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
