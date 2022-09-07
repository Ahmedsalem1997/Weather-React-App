const CurrentWeather = ({data}) => {
  return (
    <div className="w-[300px] shadow-lg bg-black text-white mx-auto mt-5 mb-0 p-5 pt-0">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg leading-4 m-0 tracking-wide">{data.city}</p>
          <p className="font-medium text-sm leading-8 m-0 text-slate-300">{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="w-24"/>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-6xl w-auto tracking-tighter my-2 mx-0">{Math.round(data.main.temp)}°C</p>
        <div className="w-full pl-7">
            <div className="parameter-row">
                <span className="parameter-label bg-slate-200 text-black p-1 rounded mb-1">Details</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Feels Like</span>
                <span className="parameter-value">{Math.round(data.main.feels_like)} °C</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
