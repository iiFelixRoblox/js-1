input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("New game")
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(1)
