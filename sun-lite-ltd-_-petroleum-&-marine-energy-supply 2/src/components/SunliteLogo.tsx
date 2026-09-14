import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg';
  lightText?: boolean;
}

export const SunliteLogo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  lightText = true,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base font-extrabold tracking-tight',
    md: 'text-xl font-black tracking-tight',
    lg: 'text-2xl font-black tracking-tight',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Precision Industrial SVG Emblem: Golden Drop + Sunburst Horizon + Precision Ring */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-xl bg-gradient-to-br from-[#0D2430] to-[#07141D] p-2 border border-[#F3B51B]/40 shadow-lg flex items-center justify-center group-hover:border-[#F3B51B] transition-all`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Cog Marks / Energy Orbit */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#F3B51B"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            className="opacity-70"
          />
          {/* Radiating Sun Rays */}
          <path
            d="M50 12 L50 20 M50 80 L50 88 M12 50 L20 50 M80 50 L88 50 M24 24 L30 30 M70 70 L76 76 M24 76 L30 70 M70 24 L76 30"
            stroke="#F3B51B"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-60"
          />
          {/* Horizon Arc / Fluid Base */}
          <path
            d="M20 58 C32 50 68 50 80 58 C74 74 62 82 50 82 C38 82 26 74 20 58 Z"
            fill="url(#goldGradient)"
          />
          {/* Golden Petroleum Droplet */}
          <path
            d="M50 24 C50 24 35 44 35 53 C35 61.28 41.72 68 50 68 C58.28 68 65 61.28 65 53 C65 44 50 24 50 24 Z"
            fill="url(#dropletGradient)"
          />
          {/* Droplet Highlight */}
          <path
            d="M44 46 C42 50 43 55 46 58"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-80"
          />
          <defs>
            <linearGradient id="goldGradient" x1="20" y1="50" x2="80" y2="82" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3B51B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="dropletGradient" x1="50" y1="24" x2="50" y2="68" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD76A" />
              <stop offset="0.6" stopColor="#F3B51B" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant !== 'icon' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`${titleSizes[size]} ${
                lightText ? 'text-white' : 'text-[#07141D]'
              } uppercase tracking-wider font-display`}
            >
              SUN LITE <span className="text-[#F3B51B]">LTD</span>
            </span>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#F3B51B]/90">
            Energy · Logistics · Marine
          </span>
        </div>
      )}
    </div>
  );
};
