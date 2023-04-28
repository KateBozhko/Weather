function Buttons({weatherMinsk, weatherRome, weatherBerlin}) {
    return(
        <div className="order_buttons">
        <button onClick={() => weatherMinsk}>Minsk</button>
        <button onClick={() => weatherRome}>Rome</button>
        <button onClick={() => weatherBerlin}>Berlin</button>
    </div>
    )
}

export default Buttons;