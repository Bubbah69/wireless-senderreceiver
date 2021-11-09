input.onButtonPressed(Button.A, function () {
    radio.sendString("L")
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("B")
    basic.showIcon(IconNames.Sword)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("S")
    basic.showIcon(IconNames.No)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("F")
    basic.showIcon(IconNames.Triangle)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . # .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
