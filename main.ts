function setTemperature () {
    temperature_cur = 0
    temperature_max = 0
    temperature_min = 0
}
input.onButtonPressed(Button.A, function () {
    lcd_page += -1
    if (lcd_page < lcd_page_min) {
        lcd_page = lcd_page_max
    }
})
input.onButtonPressed(Button.AB, function () {
    setTemperature()
    setSoundLevel()
    lcd_page = 0
})
input.onButtonPressed(Button.B, function () {
    lcd_page += 1
    if (lcd_page > lcd_page_max) {
        lcd_page = lcd_page_min
    }
})
function checkTemperature () {
    temperature_cur = input.temperature()
    if (temperature_cur < temperature_min) {
        temperature_min = temperature_cur
    }
    if (temperature_cur > temperature_max) {
        temperature_max = temperature_cur
    }
}
function setSoundLevel () {
    soundlevel_cur = 0
    soundlevel_min = 0
    soundlevel_max = 0
}
function checkSoundLevel () {
    soundlevel_cur = input.soundLevel()
    if (soundlevel_cur < soundlevel_min) {
        soundlevel_min = soundlevel_cur
    }
    if (soundlevel_cur > soundlevel_max) {
        soundlevel_max = soundlevel_cur
    }
}
let soundlevel_max = 0
let soundlevel_min = 0
let soundlevel_cur = 0
let temperature_min = 0
let temperature_max = 0
let temperature_cur = 0
let lcd_page = 0
let lcd_page_max = 0
let lcd_page_min = 0
lcd.init()
lcd_page_min = 0
lcd_page_max = 6
lcd_page = 0
setTemperature()
setSoundLevel()
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
        custom.showTemperature()
    }
    if (lcd_page == 4) {
        custom.showCompasssDirection()
    }
    if (lcd_page == 5) {
        custom.showCompasssNorth()
    }
})
