import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg';
  lightText?: boolean;
}

const iconSizes = {
  sm: 'w-7 h-7',
  md: 'w-9 h-9',
  lg: 'w-11 h-11',
};

const titleSizes = {
  sm: 'text-sm font-extrabold tracking-tight',
  md: 'text-base font-black tracking-tight',
  lg: 'text-lg font-black tracking-tight',
};

export const SunliteLogo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  lightText = true,
}) => {
  return (
    <div className="flex items-center gap-2.5 select-none">
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
          <div className="flex items-center gap-1">
            <span
              className={`${titleSizes[size]} ${
                lightText ? 'text-white' : 'text-[#07141D]'
              } uppercase tracking-wider font-display`}
            >
              SUN LITE <span className="text-[#F3B51B]">LTD</span>
            </span>
          </div>
          <span className="text-[9px] tracking-[0.18em] uppercase font-bold text-[#F3B51B]/90">
            Energy · Logistics · Marine
          </span>
        </div>
      )}
    </div>
  );
};
