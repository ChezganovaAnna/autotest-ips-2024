let sec: number = 0

function tick(): void {
    console.log(sec)
    sec++
    setTimeout(() => tick(), 1000)
}  
tick()
