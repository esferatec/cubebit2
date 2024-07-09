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
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
})
let dice = 0
let lcd_page = 0
let lcd_page_max = 0
let lcd_page_min = 0
lcd_page_min = 1
lcd_page_max = 6
lcd_page = 1
dice = 0
let cur_soundlevel = input.soundLevel()
let min_soundlevel = cur_soundlevel
let max_soundlevel = cur_soundlevel
let cur_temperature = input.temperature()
let min_temperature = cur_temperature
let max_temperature = cur_temperature
lcd.init()
lcd.showString("Hello cube:bit", 1, 0)
basic.forever(function () {
    basic.showNumber(lcd_page)
    cur_temperature = input.temperature()
    if (cur_temperature < min_temperature) {
        min_temperature = cur_temperature
    }
    if (cur_temperature > max_temperature) {
        max_temperature = cur_temperature
    }
    cur_soundlevel = input.soundLevel()
    if (cur_soundlevel < min_soundlevel) {
        min_soundlevel = cur_soundlevel
    }
    if (cur_soundlevel > max_soundlevel) {
        max_soundlevel = cur_soundlevel
    }
    if (lcd_page == 1) {
        lcd.clearDisplay()
        lcd.showString("temperature", 0, 0)
        lcd.showNumber(cur_temperature, 1, 1)
        lcd.showNumber(min_temperature, 5, 1)
        lcd.showNumber(max_temperature, 9, 1)
    }
    if (lcd_page == 2) {
        lcd.clearDisplay()
        lcd.showString("sound level", 0, 0)
        lcd.showNumber(cur_soundlevel, 0, 1)
        lcd.showNumber(min_soundlevel, 5, 1)
        lcd.showNumber(max_soundlevel, 10, 1)
    }
    if (lcd_page == 4) {
        custom.showCompasssDirection()
    }
    if (lcd_page == 5) {
        custom.showCompasssNorth()
    }
    if (lcd_page == 6) {
        lcd.clearDisplay()
        lcd.showString("dice", 0, 0)
        lcd.showNumber(dice, 0, 1)
    }
})
