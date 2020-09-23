let age = 20
basic.forever(function () {
    if (age >= 18) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
