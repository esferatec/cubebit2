/**
 * Display blocks
 */
//% groups=['LCD1602']
//% weight=100 color=#cccc00 icon="\uf108" advanced=true
namespace lcd {
    let _lcdI2cAddr = 0x3e;
    let _displayfunction = 0;
    let _displaycontrol = 0;
    let _displaymode = 0;

    function i2c_send_byte(buf: Buffer) {
        pins.i2cWriteBuffer(_lcdI2cAddr, buf, false);
    }

    function lcd_send_cmd(cmd: number) {
        let buf: Buffer = pins.createBuffer(2);
        buf[0] = 0x80;
        buf[1] = cmd;
        i2c_send_byte(buf);
    }

    function lcd_send_data(data: number) {
        let buf: Buffer = pins.createBuffer(2);
        buf[0] = 0x40;
        buf[1] = data;
        i2c_send_byte(buf);
    }

    function lcd_set_cursor(col: number, row: number) {
        let buf: Buffer = pins.createBuffer(2);
        col = (row == 0 ? col | 0x80 : col | 0xc0);
        buf[0] = 0x80;
        buf[1] = col;
        i2c_send_byte(buf);
    }

    /**
     * initialize LCD
     */
    //% group="LCD1602"
    //% block="[LCD] initialize"
    export function init(): void {
        _displayfunction |= 0x08;
        lcd_send_cmd(0x20 | _displayfunction); // set command sequence

        _displaycontrol = 0x04 | 0x00 | 0x00;
        lcd_send_cmd(0x08 | _displaycontrol); // set display control

        _displaymode = 0x02 | 0x00;
        lcd_send_cmd(0x04 | _displaymode); // set display mode

        clearDisplay();
    }

    /**
     * show a number at a given position
     * @param n is number will be show, eg: 10, 100, 200
     * @param x is column position, eg: 0
     * @param y is row position, eg: 0
     */
    //% group="LCD1602"
    //% block="[LCD] show number %n|at x %x|y %y"
    //% x.min=0 x.max=15 x.defl=0
    //% y.min=0 y.max=1 y.defl=0
    export function showNumber(n: number, x: number, y: number): void {
        let s = n.toString()
        showString(s, x, y)
    }

    /**
     * show a string at a given position
     * @param s is string will be show, eg: "Hello"
     * @param x is column position, [0 - 15], eg: 0
     * @param y is row position, [0 - 1], eg: 0
     */
    //% group="LCD1602"
    //% block="[LCD] show string %n|at x %x|y %y"
    //% x.min=0 x.max=15 x.defl=0
    //% y.min=0 y.max=1 y.defl=0
    export function showString(s: string, x: number, y: number): void {
        lcd_set_cursor(x, y);
        for (let i = 0; i < s.length; i++) {
            lcd_send_data(s.charCodeAt(i))
        }
    }

    /**
     * turn on display
     */
    //% group="LCD1602"
    //% block="[LCD] trun on display"
    export function turnOnDisplay(): void {
        _displaycontrol |= 0x04;
        lcd_send_cmd(0x08 | _displaycontrol);
    }

    /**
     * turn off display
     */
    //% group="LCD1602"
    //% block="[LCD] trun off display"
    export function trunOffDisplay(): void {
        _displaycontrol &= ~0x04;
        lcd_send_cmd(0x08 | _displaycontrol);
    }

    /**
     * turn on cursor
     */
    //% group="LCD1602"
    //% block="[LCD] trun on cursor"
    export function turnOnCursor(): void {
        _displaycontrol |= 0x02;
        lcd_send_cmd(0x08 | _displaycontrol);
    }

    /**
     * turn off cursor
     */
    //% group="LCD1602"
    //% block="[LCD] trun off cursor"
    export function turnOffCursor(): void {
        _displaycontrol &= ~0x02;
        lcd_send_cmd(0x08 | _displaycontrol);
    }

    /**
     * turn on blink
     */
    //% group="LCD1602"
    //% block="[LCD] trun on blink"
    export function trunOnBlink(): void {
        _displaycontrol |= 0x01;
        lcd_send_cmd(0x08 | _displaycontrol);
    }

    /**
     * turn off blink
     */
    //% group="LCD1602"
    //% block="[LCD] trun off blink"
    export function turnOffBlink(): void {
        _displaycontrol &= ~0x01;
        lcd_send_cmd(0x08 | _displaycontrol);
    }

    /**
     * clear all content and set cursor position to zero
     */
    //% group="LCD1602"
    //% block="[LCD] clear display"
    export function clearDisplay(): void {
        lcd_send_cmd(0x01);
        basic.pause(2);
    }

    /**
     * set cursor position to zero
     */
    //% group="LCD1602"
    //% block="[LCD] return home"
    export function returnHome(): void {
        lcd_send_cmd(0x02);
        basic.pause(2);
    }
}
