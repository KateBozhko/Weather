import React from 'react';
import './App.css';
import Buttons from './Buttons';
import Information from './Information';
import Title from './Title';
import { useEffect, useState } from 'react';

const API = "bd6f67cb99bfc6e5bf17a4d863257fcc";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [clouds, setClouds] = useState('')

// запрос погоды для Минска
useEffect(() => {
  weatherMinsk();
}, [])

const weatherMinsk = async () => {
const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=minsk&APPID=${API}`);
const result = await response.json();
console.log(result)
setCity(result.name);
setCountry(result.sys.country);
setTemp(result.main.temp);
setHumidity(result.main.humidity);
setPressure(result.main.pressure);
setClouds(result.weather[0].description)
}

// запрос погоды для Рима

useEffect(() => {
  weatherRome();
}, [])

const weatherRome = async () => {
const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=rome&APPID=${API}`);
const result = await response.json();
console.log(result)
setCity(result.name);
setCountry(result.sys.country);
setTemp(result.main.temp);
setHumidity(result.main.humidity);
setPressure(result.main.pressure);
setClouds(result.weather[0].description)
}

// запрос погоды для Берлина

useEffect(() => {
  weatherBerlin();
}, [])

const weatherBerlin = async () => {
const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=berlin&APPID=${API}`);
const result = await response.json();
console.log(result)
setCity(result.name);
setCountry(result.sys.country);
setTemp(result.main.temp);
setHumidity(result.main.humidity);
setPressure(result.main.pressure);
setClouds(result.weather[0].description)
}


  return (
    <div>
    <Title/>
   <Buttons weatherMinsk = {weatherMinsk}
   weatherRome = {weatherRome}
   weatherBerlin = {weatherBerlin}/>
   <Information city = {city} 
   country = {country} 
   temp = {temp}
   humidity = {humidity}
    pressure = {pressure}
    clouds = {clouds}/>
    </div>
  );
}

export default App;
