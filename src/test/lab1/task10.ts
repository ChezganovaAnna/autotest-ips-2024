function countdown() {
    let seconds: number = 0;

    function tick() {
        seconds++
        console.log(seconds)
        setTimeout(tick, 1000)
    }
    
    tick()
}

countdown()