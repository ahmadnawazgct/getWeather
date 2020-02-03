import React from 'react';

const Weather = props  => (
            <div className="weather__info">
             { 
                 props.city && props.country && <p className="weather__key">Location: 
                 <span className="weather__value">{props.city},{props.country}</span></p>
                 } 
             {
                 props.temperature && <p className="weather__key">Temperature:
                 <span className="weather__value">{props.temperature} Celsius</span>
                 </p>
             }  
             { 
                 props.humidity && <p className="weather__key">Humidity:
                 <span className="weather__value">{props.humidity} (g/m3)</span>
                 </p> 
             }   
             { 
                 props.description && <p className="weather__key">Condition:
                 <span className="weather__value">{props.description}</span>
                 </p> 
             }
             { 
                 props.longitude && <p className="weather__key">Longitude:
                 <span className="weather__value">{props.longitude} degrees</span>
                 </p> 
             }
             { 
                 props.latitude && <p className="weather__key">Latitude:
                 <span className="weather__value">{props.latitude} degrees </span>
                 </p> 
             }
             { 
                 props.pressure && <p className="weather__key">Air Pressure:
                 <span className="weather__value">{props.pressure} Pa</span>
                 </p> 
             }
             { 
                 props.temp_max && <p className="weather__key">Maximum Temperature:
                 <span className="weather__value">{props.temp_max} Celsius</span>
                 </p> 
             }
             { 
                 props.temp_min && <p className="weather__key">Minimum Temperature:
                 <span className="weather__value">{props.temp_min} Celsius</span>
                 </p> 
             }
             { 
                 props.sunrise && <p className="weather__key">Sunrise At:
                 <span className="weather__value">      {props.sunrise}</span>
                 </p> 
             }
             { 
                 props.speed && <p className="weather__key">Wind Speed:
                 <span className="weather__value">{props.speed} m/s</span>
                 </p> 
             }
             { 
                 props.deg && <p className="weather__key">Wind Direction:
                 <span className="weather__value">{props.deg} degrees</span>
                 </p> 
             }   
             { 
                props.error && <p className="weather__error">{props.error}</p>
             }
            </div>
        );

export default Weather