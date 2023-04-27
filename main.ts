

const m1 = PCAmotor.Motors.M1
const m4 = PCAmotor.Motors.M4

basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)


    input.onButtonPressed(Button.A, function () {
        PCAmotor.MotorRun(m1, 500)
        PCAmotor.MotorRun(m4, 500)
    })

    input.onButtonPressed(Button.B, function () {
        
        PCAmotor.MotorStopAll()
    })
})
