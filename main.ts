enum d {
    //% block="Forward"
    F=0,
    //% block="Backward"
    B=1
}
enum leds {
    //% block="On"
    on=1, 
    //% block="Off"
    off=0
}

//% weight=0 color=#2E2EFE icon="\uf1b9" block="Learning Packs"
namespace LearningPack{
    //% blockId="LED" block="Pack 1 LED |red %red|yellow %yellow|green %green"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function LED(red: leds, yellow: leds, green: leds): void {
        pins.digitalWritePin(DigitalPin.P0, red)
        pins.digitalWritePin(DigitalPin.P1, yellow)
        pins.digitalWritePin(DigitalPin.P2, green)
    }

    //% blockId="SpeedControl" block="Pack 3 car speed |left %left|right %right|direction %d"
    //% blockGap=2 weight=1 blockExternalInputs=true
    //% left.min=0 left.max=1023 right.min=0 right.max=1023
    export function SpeedControl(left: number, right: number, Direction: d): void {
            pins.digitalWritePin(DigitalPin.P12, Direction)
            pins.digitalWritePin(DigitalPin.P16, Direction)
            pins.analogWritePin(AnalogPin.P8, left)
            pins.analogWritePin(AnalogPin.P0, right)
    }
}
