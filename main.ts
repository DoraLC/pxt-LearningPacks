enum d {
    //% block="Forward"
    F = 0,
    //% block="Backward"
    B = 1
}
enum leds {
    //% block="On"
    on = 1,
    //% block="Off"
    off = 0
}
enum Gate {
    //% block="Open"
    open = 90,
    //% block="Closed"
    closed = 0
}

//% weight=0 color=#2E2EFE icon="\uf1b9" block="Learning Packs"
namespace LearningPack {
    //% blockId="LED" block="Pack 1 LED |red %red_pin %red|yellow %yellow_pin %yellow|green %green_pin %green"
    //% blockGap=2 blockExternalInputs=true
    //% weight=0
    export function LED(red_pin: DigitalPin, yellow_pin: DigitalPin, green_pin: DigitalPin, red: leds, yellow: leds, green: leds): void {
        pins.digitalWritePin(red_pin, red)
        pins.digitalWritePin(yellow_pin, yellow)
        pins.digitalWritePin(green_pin, green)
    }

    //% blockId="gate" block="Pack 2 Auto gate Gate %gate"
    //% blockGap=2 blockExternalInputs=true
    //% weight=2
    export function AG(gate: Gate): void {
        pins.servoWritePin(AnalogPin.P1, gate)
    }

    //% blockId="SpeedControl" block="Pack 3 car speed |left %left|right %right|direction %d"
    //% blockGap=2 blockExternalInputs=true
    //% weight=1
    //% left.min=0 left.max=1023 right.min=0 right.max=1023
    export function SpeedControl(left: number, right: number, Direction: d): void {
        pins.digitalWritePin(DigitalPin.P12, Direction)
        pins.digitalWritePin(DigitalPin.P16, Direction)
        if (Direction == 0) {
            pins.analogWritePin(AnalogPin.P8, left)
            pins.analogWritePin(AnalogPin.P0, right)
        }
        else {
            pins.analogWritePin(AnalogPin.P8, 1023 - left)
            pins.analogWritePin(AnalogPin.P0, 1023 - right)
        }
    }
}
