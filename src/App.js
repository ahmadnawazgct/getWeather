import React from 'react';

import Titles from './components/title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "2644591c8e968a48e7ed9aede3794409";

class App extends React.Component {
  state = {
    city:undefined,
    country:undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    longitude:undefined,
    latitude:undefined,
    pressure:undefined,
    temp_min:undefined,
    temp_max:undefined,
    sunrise:undefined,
    speed:undefined,
    deg:undefined,
    error:undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country ) {
      console.log(data);
      this.setState({
      city:data.name,
      country:data.sys.country,
      temperature:data.main.temp,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      longitude:data.coord.lon,
      latitude:data.coord.lat,
      pressure:data.main.pressure,
      temp_min:data.main.temp_min,
      temp_max:data.main.temp_max,
      sunrise:data.sys.sunrise,
      speed:data.wind.speed,
      deg:data.wind.deg,
        error:""
    })
    } else {
      this.setState({
        city:undefined,
        country:undefined,
        temperature:undefined,
        humidity:undefined,
        description:undefined,
        longitude:undefined,
        latitude:undefined,
        pressure:undefined,
        temp_min:undefined,
        temp_max:undefined,
        sunrise:undefined,
        speed:undefined,
        deg:undefined,
        error:"please enter city, country and then press the button"
      })
    } 
    
     }
       render() {
    return(
        <div id="weatherfinder">
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 title-container">
                  <Titles />
                  </div>
                  <div className="col-xl-7 form-container">
                      <Form  getWeatherdata= {this.getWeather}/>
                      
                      <Weather 
                      temperature={this.state.temperatur}
                      city= {this.state.city}
                      country={ this.state.country }
                      humidity = {this.state.humidity}
                      description = {this.state.description}
                      longitude = { this.state.longitude}
                      latitude = { this.state.latitude}
                      pressure = { this.state.pressure}
                      temp_min = { this.state.temp_min}
                      temp_max = { this.state.temp_max}
                      sunrise = { this.state.sunrise}
                      speed = { this.state.sunrise}
                      deg = { this.state.deg}

                      error= {this.state.error}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default App