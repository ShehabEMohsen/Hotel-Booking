import React from 'react';

const RibbonBanner = () => {
  return (
    <div className="w-full relative">
      <div className="relative h-20 bg-black text-6xl">
        <div 
          className="absolute inset-0 shadow-lg transform skew-y-4 origin-top-left bg-[#1f8f69]"
        >
          <div className="transform h-full flex items-center justify-around px-8 relative">
            <div className="text-center relative">
              <div className="text-white text-4xl font-bold tracking-wide drop-shadow-md">
                Luxury Hotel
              </div>
              <div className="absolute -top-1 -right-32">
                <svg className="w-12 h-12 text-white fill-current drop-shadow-sm" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="text-center relative">
              <div className="text-white text-4xl font-bold tracking-wide drop-shadow-md">
                Holiday Booking
              </div>
              <div className="absolute -top-1 -right-32">
                <svg className="w-12 h-12 text-white fill-current drop-shadow-sm" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="text-center relative">
              <div className="text-white text-4xl font-bold tracking-wide drop-shadow-md">
                Holiday Booking
              </div>
              <div className="absolute -top-1 -right-32">
                <svg className="w-12 h-12 text-white fill-current drop-shadow-sm" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>

            <div className="text-center relative">
              <div className="text-white text-4xl font-bold tracking-wide drop-shadow-md">
                Hotel
              </div>
              <div className="absolute -top-1 -right-32">
                <svg className="w-12 h-12 text-white fill-current drop-shadow-sm" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

        <div 
          className="absolute left-0 top-0 w-0 h-0"
          style={{
            borderTop: '40px solid #065f46',
            borderLeft: '15px solid transparent',
            transform: 'skewY(-2deg)'
          }}
        ></div>
        <div 
          className="absolute right-0 top-0 w-0 h-0"
          style={{
            borderTop: '40px solid #065f46',
            borderRight: '15px solid transparent',
            transform: 'skewY(-2deg)'
          }}
        ></div>
        
      </div>
    </div>
  );
};

export default RibbonBanner;