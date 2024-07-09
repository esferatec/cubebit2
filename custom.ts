/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    function compassDirectionText() {
        let bearing = input.compassHeading();
        let directions = ["N", "NE", "NE", "E", "E", "SE", "SE", "S", "S", "SW", "SW", "W", "W", "NW", "NW", "N"];
        let index = Math.floor((bearing % 360) / 22.5);
        return directions[index];
    }

    function compassDirectionNorth() {
        const bearing = input.compassHeading();
        return (bearing < 5 || bearing > 355) ? "north" : "not north";
    }

    /**
     * shows temperature current, min and max
     */
    //% block="[LCD] show temperature"
    export function showTemperature(): void {
        lcd.clearDisplay()
        lcd.showString("temperature", 0, 0)
        lcd.showString("c", 0, 1)
        lcd.showNumber(temperature_cur, 1, 1)
        lcd.showString("i", 6, 1)
        lcd.showNumber(temperature_min, 7, 1)
        lcd.showString("a", 12, 1)
        lcd.showNumber(temperature_max, 13, 1)
    }

    /**
     * shows temperature current, min and max
     */
    //% block="[LCD] show sound level"
    export function showSoundLevel(): void {
        lcd.clearDisplay()
        lcd.showString("sound level", 0, 0)
        lcd.showString("c", 0, 1)
        lcd.showNumber(soundlevel_cur, 1, 1)
        lcd.showString("i", 6, 1)
        lcd.showNumber(soundlevel_min, 7, 1)
        lcd.showString("a", 12, 1)
        lcd.showNumber(soundlevel_max, 13, 1)
    }

    /**
     * shows compass direction
     */
    //% block="[LCD] show compass direction"
    export function showCompasssDirection(): void {
        lcd.clearDisplay()
        lcd.showString("compass", 0, 0)
        lcd.showNumber(input.compassHeading(), 0, 1)
        lcd.showString(compassDirectionText(), 4, 1)
    }

    /**
     * shows compass north
     */
    //% block="[LCD] show compass north"
    export function showCompasssNorth(): void {
        lcd.clearDisplay()
        lcd.showString("compass", 0, 0)
        lcd.showString(compassDirectionNorth(), 0, 1)
    }

    /**
     * shows dice
     */
    //% block="[LCD] show dice"
    export function showDice(): void {
        lcd.clearDisplay()
        lcd.showString("dice", 0, 0)
    }
}
