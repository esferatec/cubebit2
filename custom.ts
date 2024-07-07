/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    function compassDirectionText() {
        const bearing = input.compassHeading();
        const directions = ["N", "NE", "NE2", "E", "E2", "SE", "SE2", "S", "S2", "SW", "SW2", "W", "W2", "NW", "NW2", "N2"];
        const index = Math.floor((bearing % 360) / 22.5);
        return directions[index];
    }

    /**
     * shows compass direction
     */
    //% block="[LCD] show compass direction"
    export function showCompasssDirection(): void {
        lcd.clearDisplay()
        lcd.showString("compass direction", 0, 0)
        lcd.showNumber(input.compassHeading(), 0, 1)
        lcd.showString(compassDirectionText(), 8, 1)
    }
}
