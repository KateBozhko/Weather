function Information({city, country, temp, humidity, pressure, clouds}) {
    return(
        <div>
            <div className="city_position">
        <h2>City: {city}</h2>
        <h3>Country: {country}</h3>
        </div>
        <div className="information_order"> 
        <p className="item">Temperature: {Math.round(temp)}<span>°</span></p>
        <p className="item">Humidity: {humidity}</p>
        <p className="item">Pressure: {pressure}</p>
        <p className="item">{clouds}</p>
        </div>
    </div>
        
        )

  
}
export default Information;