function Information({city, country, temp, humidity, pressure, clouds}) {
    return(
        <div>
        <h2>Город: {city}</h2>
        <h3>Страна: {country}</h3>
        <p>Температура: {Math.round(temp)}<span>°</span></p>
        <p>Влажность: {humidity}</p>
        <p>Давление: {pressure}</p>
        <p>{clouds}</p>
    </div>
        
        )

  
}
export default Information;