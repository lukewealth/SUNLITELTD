import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg';
  lightText?: boolean;
}

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

export const SunliteLogo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  lightText = true,
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative ${iconSizes[size]} shrink-0`}>
        <img
          src="/sun-lite-logo-exact.svg"
          alt="SUN LITE LTD Logo"
          className="w-full h-full object-contain"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
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