// import React, { useContext } from 'react';
// import { WeatherContext } from './contexts/WeatherContext';
// import Search from './components/Search';
// import CurrentWeather from './components/CurrentWeather';
// import HourlyForecast from './components/HourlyForecast';
// import DailyForecast from './components/DailyForecast';
// import Favorites from './components/Favorites';
// import Footer from './components/Footer';

// const App = () => {
//   const { unit, loading, error, toggleUnit } = useContext(WeatherContext);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-800 transition-colors duration-300">
//       <div className="container mx-auto p-4">
//         {/* Header with Unit Toggle */}
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold text-gray-800">
//             <span className="text-3xl font-bold text-blue-600">W</span>eather
//             <span className="text-3xl font-bold text-sky-400">Now</span>
//           </h1>
//           <button
//             onClick={toggleUnit}
//             className="p-2 rounded border-0 hover:bg-sky-100 "
//           >
//             {unit === 'metric' ? '°C' : '°F'}
//           </button>
//         </div>

//         {/* Search Component */}
//         <Search />

//         {loading && <p className="text-center text-gray-700">Loading...</p>}
//         {error && <p className="text-center text-red-500">{error}</p>}

//         {/* Weather Display */}
//         <div className="space-y-6">
//           <CurrentWeather />
//           <HourlyForecast />
//           <DailyForecast />
//           <Favorites />
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useContext } from 'react';
import { WeatherContext } from './contexts/WeatherContext';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import Favorites from './components/Favorites';
import Footer from './components/Footer';

const App = () => {
  const { unit, loading, error, toggleUnit } = useContext(WeatherContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 text-amber-900 transition-colors duration-300">
      <div className="container mx-auto p-4">
        {/* Header with Unit Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-4xl text-amber-600">Sky</span>{''}
            <span className="text-4xl text-amber-400">Mate</span>
          </h1>
          <button
            onClick={toggleUnit}
            className="px-4 py-2 rounded-lg border border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100 transition"
            aria-label="Toggle temperature unit"
          >
            {unit === 'metric' ? '°C' : '°F'}
          </button>
        </div>

        {/* Search Component */}
        <Search />

        {loading && <p className="text-center text-amber-700 font-semibold">Loading...</p>}
        {error && <p className="text-center text-red-600 font-semibold">{error}</p>}

        {/* Weather Display */}
        <div className="space-y-8">
          <CurrentWeather />
          <HourlyForecast />
          <DailyForecast />
          <Favorites />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
