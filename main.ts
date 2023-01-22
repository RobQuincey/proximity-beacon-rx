radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    signal = Math.map(signal, -95, -42, 0, 9)
    led.plotBarGraph(
    signal,
    9
    )
    if (signal < 4) {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
    } else if (signal < 7) {
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
    } else {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
    }
})
let signal = 0
radio.setGroup(1)
