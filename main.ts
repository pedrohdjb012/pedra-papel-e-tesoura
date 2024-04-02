let sla = 0
input.onGesture(Gesture.Shake, function () {
    sla = randint(0, 2)
    if (sla == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        if (sla == 1) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
    }
})
