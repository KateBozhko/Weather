function Buttons({weatherMinsk, weatherParis, weatherBerlin}) {
    return(
        <div className="order_buttons">
        <button onClick={() => weatherMinsk()}>Minsk</button>
        <button onClick={() => weatherParis()}>Paris</button>
        <button onClick={() => weatherBerlin()}>Berlin</button>
    </div>
    )
}

export default Buttons;