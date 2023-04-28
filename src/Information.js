function Information({city, country, temp, humidity, pressure, clouds}) {
    return(
        <div>
            <div className="city_position">
        <h2>Город: {city}</h2>
        <h3>Страна: {country}</h3>
        </div>
        <div className="information_order"> 
        <p className="item">Температура: {Math.round(temp)}<span>°</span></p>
        <p className="item">Влажность: {humidity}</p>
        <p className="item">Давление: {pressure}</p>
        <p className="item">{clouds}</p>
        </div>
    </div>
        
        )

  
}
export default Information;