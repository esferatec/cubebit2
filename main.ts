input.onButtonPressed(Button.A, function () {
    lcd_page += -1
    if (lcd_page < lcd_page_min) {
        lcd_page = lcd_page_max
    }
})
input.onButtonPressed(Button.B, function () {
    lcd_page += 1
    if (lcd_page > lcd_page_max) {
        lcd_page = lcd_page_min
    }
})
let lcd_page = 0
let lcd_page_max = 0
let lcd_page_min = 0
lcd_page_min = 1
lcd_page_max = 4
lcd_page = 1
lcd.init()
lcd.showString("Hello cube:bit", 1, 0)
basic.forever(function () {
    basic.showNumber(lcd_page)
    if (lcd_page == 2) {
        lcd.clearDisplay()
    } else if (lcd_page == 3) {
        lcd.clearDisplay()
    } else {
        lcd.clearDisplay()
        lcd.showString("Hello cube:bit", 1, 0)
    }
    if (lcd_page == 4) {
        custom.showCompasssDirection()
    }
})