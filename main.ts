radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showIcon(IconNames.Yes)
    } else if (receivedNumber == 2) {
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 3) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        basic.showIcon(IconNames.Asleep)
    } else if (receivedNumber == 4) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber == 5) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.showIcon(IconNames.Pitchfork)
    } else if (receivedNumber == 6) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
    basic.showString("You Rock!")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(5)
    basic.showString("Let´s Dance!")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(3)
    basic.showString("Jump!")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(4)
    basic.showString("Nice Moves!")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(6)
    basic.showString("Shake it")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(2)
    basic.showString("Awsome")
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(55)
basic.forever(function () {
	
})
