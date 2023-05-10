
// format komunikace "XYABL012"


function car_motor(lw: number = 0 , rw:number = 0){
    const ul = Math.map(lw, -100, 100, -255, 255)
    const ur = Math.map(rw, -100, 100, -215, 215)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul) 
    PCAmotor.MotorRun(PCAmotor.Motors.M4, ur)

}




basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    radio.setGroup(23)
    
   
radio.onReceivedString(function(receivedString: string) {
    basic.showString("Hello!")
})

})
