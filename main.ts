input.onButtonPressed(Button.A, function () {
    lcd_page += -1
    if (lcd_page < lcd_page_min) {
        lcd_page = lcd_page_max
    }
})
input.onButtonPressed(Button.AB, function () {
    cur_soundlevel = 0
    min_soundlevel = 0
    max_soundlevel = 0
    lcd_page = 0
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
function checkTemperature () {
    cur_temperature = input.temperature()
    if (cur_temperature < min_temperature) {
        min_temperature = cur_temperature
    }
    if (cur_temperature > max_temperature) {
        max_temperature = cur_temperature
    }
}
function checkSoundLevel () {
    cur_soundlevel = input.soundLevel()
    if (cur_soundlevel < min_soundlevel) {
        min_soundlevel = cur_soundlevel
    }
    if (cur_soundlevel > max_soundlevel) {
        max_soundlevel = cur_soundlevel
    }
}
let max_temperature = 0
let min_temperature = 0
let cur_temperature = 0
let max_soundlevel = 0
let min_soundlevel = 0
let cur_soundlevel = 0
let dice = 0
let lcd_page = 0
let lcd_page_max = 0
let lcd_page_min = 0
lcd_page_min = 0
lcd_page_max = 6
lcd_page = 0
dice = 0
cur_soundlevel = 0
min_soundlevel = 0
max_soundlevel = 0
cur_temperature = 0
min_temperature = 0
max_temperature = 0
lcd.init()
basic.forever(function () {
    basic.showNumber(lcd_page)
    checkTemperature()
    checkSoundLevel()
    if (lcd_page == 0) {
        lcd.clearDisplay()
        lcd.showString("Hello cube:bit", 1, 0)
    }
    if (lcd_page == 1) {
        custom.showTemperature()
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
