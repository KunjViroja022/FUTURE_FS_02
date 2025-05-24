// import React, { useContext } from 'react';
// import { format, isSameHour } from 'date-fns';
// import { WeatherContext } from '../contexts/WeatherContext';
// import { FaTint, FaWind, FaCloudRain } from 'react-icons/fa';

// const HourlyForecast = () => {
//   const { forecastData, unit } = useContext(WeatherContext);
//   if (!forecastData || !forecastData.list) return null;

//   const unitSymbol = unit === 'metric' ? '°C' : '°F';

//   const hourlyData = forecastData.list.slice(0, 9).map((item) => {
//     const date = new Date(item.dt * 1000);
//     return {
//       time: format(date, 'h a'),
//       temp: Math.round(item.main.temp),
//       condition: item.weather[0].description,
//       rain: Math.round((item.pop ?? 0) * 100),
//       humidity: item.main.humidity,
//       wind: item.wind.speed,
//       isCurrent: isSameHour(date, new Date()),
//     };
//   });

//   return (
//     <div className="bg-white dark:bg-blue-100 rounded-lg shadow p-4 mb-6 max-w-full">
//       <div className="flex overflow-x-auto space-x-4 sm:space-x-4 pb-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
//         {hourlyData.map((hour, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 w-28 sm:w-37 p-4 rounded-lg text-center transition-shadow duration-300
//               ${hour.isCurrent ? 'shadow-lg font-semibold ring-2 ring-blue-500' : ''}
//               bg-white dark:bg-blue-50 text-gray-900 dark:text-gray-800
//             `}
//           >
//             <p className="text-base sm:text-lg font-semibold mb-1 text-blue-700">{hour.time}</p>

//             <p className="text-2xl sm:text-3xl font-extrabold mb-1">
//               {hour.temp}{unitSymbol}
//             </p>

//             <p className="text-xs sm:text-sm capitalize mb-3 font-semibold truncate" title={hour.condition}>
//               {hour.condition}
//             </p>

//             <div className="flex flex-col justify-items-center text-xs sm:text-sm text-gray-600 dark:text-gray-700 space-y-2">
//               <div className="flex items-center justify-center gap-1 sm:gap-2">
//                 <FaTint className="text-blue-500" />
//                 <span>{hour.humidity}%</span>
//               </div>
//               <div className="flex items-center justify-center gap-1 sm:gap-2">
//                 <FaWind className="text-gray-500" />
//                 <span>{hour.wind} m/s</span>
//               </div>
//               <div className="flex items-center justify-center gap-1 sm:gap-2">
//                 <FaCloudRain className="text-blue-400" />
//                 <span>{hour.rain}%</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HourlyForecast;


import React, { useContext } from 'react';
import { format, isSameHour } from 'date-fns';
import { WeatherContext } from '../contexts/WeatherContext';
import { FaTint, FaWind, FaCloudRain } from 'react-icons/fa';

const HourlyForecast = () => {
  const { forecastData, unit } = useContext(WeatherContext);
  if (!forecastData || !forecastData.list) return null;

  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  const hourlyData = forecastData.list.slice(0, 9).map((item) => {
    const date = new Date(item.dt * 1000);
    return {
      time: format(date, 'h a'),
      temp: Math.round(item.main.temp),
      condition: item.weather[0].description,
      rain: Math.round((item.pop ?? 0) * 100),
      humidity: item.main.humidity,
      wind: item.wind.speed,
      isCurrent: isSameHour(date, new Date()),
    };
  });

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-md p-4 mb-6 max-w-full">
      <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-amber-100">
        {hourlyData.map((hour, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-28 sm:w-36 p-4 rounded-lg text-center transition-shadow duration-300
              ${hour.isCurrent ? 'shadow-lg font-semibold ring-2 ring-amber-500 bg-amber-100' : 'bg-amber-50'}
              text-amber-900
            `}
          >
            <p className="text-base sm:text-lg font-semibold mb-1">{hour.time}</p>

            <p className="text-2xl sm:text-3xl font-extrabold mb-1">
              {hour.temp}{unitSymbol}
            </p>

            <p
              className="text-xs sm:text-sm capitalize mb-3 font-semibold truncate"
              title={hour.condition}
            >
              {hour.condition}
            </p>

            <div className="flex flex-col text-xs sm:text-sm text-amber-700 space-y-2">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <FaTint className="text-amber-500" />
                <span>{hour.humidity}%</span>
              </div>
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <FaWind className="text-amber-700" />
                <span>{hour.wind} m/s</span>
              </div>
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <FaCloudRain className="text-amber-400" />
                <span>{hour.rain}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;



// import React, { useContext } from 'react';
// import { format, isSameHour } from 'date-fns';
// import { WeatherContext } from '../contexts/WeatherContext';
// import { FaTint, FaWind, FaCloudRain } from 'react-icons/fa';
// import { motion as Motion, AnimatePresence } from 'framer-motion';

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15, // delay between children animations
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: 40 },
//   visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
// };

// const HourlyForecast = () => {
//   const { forecastData, unit } = useContext(WeatherContext);
//   if (!forecastData || !forecastData.list) return null;

//   const unitSymbol = unit === 'metric' ? '°C' : '°F';

//   const hourlyData = forecastData.list.slice(0, 9).map((item) => {
//     const date = new Date(item.dt * 1000);
//     return {
//       time: format(date, 'h a'),
//       temp: Math.round(item.main.temp),
//       condition: item.weather[0].description,
//       rain: Math.round((item.pop ?? 0) * 100),
//       humidity: item.main.humidity,
//       wind: item.wind.speed,
//       isCurrent: isSameHour(date, new Date()),
//     };
//   });

//   return (
//     <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-md p-4 mb-6 max-w-full">
//       <Motion.div
//         className="flex overflow-x-auto space-x-4 pb-2 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-amber-100"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <AnimatePresence>
//           {hourlyData.map((hour, index) => (
//             <Motion.div
//               key={index}
//               className={`flex-shrink-0 w-28 sm:w-36 p-4 rounded-lg text-center transition-shadow duration-300
//                 ${hour.isCurrent ? 'shadow-lg font-semibold ring-2 ring-amber-500 bg-amber-100' : 'bg-amber-50'}
//                 text-amber-900
//               `}
//               variants={itemVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//             >
//               <p className="text-base sm:text-lg font-semibold mb-1">{hour.time}</p>

//               <p className="text-2xl sm:text-3xl font-extrabold mb-1">
//                 {hour.temp}{unitSymbol}
//               </p>

//               <p
//                 className="text-xs sm:text-sm capitalize mb-3 font-semibold truncate"
//                 title={hour.condition}
//               >
//                 {hour.condition}
//               </p>

//               <div className="flex flex-col text-xs sm:text-sm text-amber-700 space-y-2">
//                 <div className="flex items-center justify-center gap-1 sm:gap-2">
//                   <FaTint className="text-amber-500" />
//                   <span>{hour.humidity}%</span>
//                 </div>
//                 <div className="flex items-center justify-center gap-1 sm:gap-2">
//                   <FaWind className="text-amber-700" />
//                   <span>{hour.wind} m/s</span>
//                 </div>
//                 <div className="flex items-center justify-center gap-1 sm:gap-2">
//                   <FaCloudRain className="text-amber-400" />
//                   <span>{hour.rain}%</span>
//                 </div>
//               </div>
//             </Motion.div>
//           ))}
//         </AnimatePresence>
//       </Motion.div>
//     </div>
//   );
// };

// export default HourlyForecast;
