import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-md text-amber-900 py-4 sm:py-6 mt-12 border-t border-amber-200 px-0">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left gap-2 sm:gap-0">
        <p className="text-sm sm:text-base">
          Weather Data Provided By{' '}
          <a
            href="https://openweathermap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-amber-700 transition-colors"
          >
            OpenWeather API
          </a>
        </p>
        <p>
          Kunj Viroja
        </p>
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} WeatherNow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
