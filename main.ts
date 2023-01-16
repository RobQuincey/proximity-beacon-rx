radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
    if (signal < -80) {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
    } else if (signal < -50) {
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
    } else {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
    }
})
let signal = 0
radio.setGroup(1)
