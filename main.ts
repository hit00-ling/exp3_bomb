basic.showLeds(`
    . # # # .
    # # # # #
    . . # . .
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    10000,
    10000,
    10000,
    10000,
    10000,
    SoundExpressionEffect.Warble,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    led.setBrightness(255)
    basic.pause(100)
    led.setBrightness(led.brightness() / 2)
    basic.pause(100)
    led.setBrightness(led.brightness() / 2)
    basic.pause(100)
})
basic.forever(function () {
	
})
