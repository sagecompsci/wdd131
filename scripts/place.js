const temp = document.querySelector("#temp")
const speed = document.querySelector("#speed")
const chill = document.querySelector("#chill")

temp.value = 10
temp.textContent = temp.value

speed.value = 5
speed.textContent = speed.value

function calculateWindChill(temp, speed, tempUnit = "f", speedUnit = "mph") {
    let f_temp = 0
    if (tempUnit === 'c') {
        f_temp = (temp * (9/5)) + 32
    }
    else if (tempUnit === "f") {
        f_temp = temp
    }

    let m_speed = 0
    if (speedUnit === 'kmh'){
        m_speed = speed * 0.621371
    }
    else if (speedUnit === "mph"){
        m_speed = speed
    }

    let f_chill = 35.74 + (0.6215 * f_temp) - (35.75 * (m_speed**0.16)) + (0.4275 * f_temp * (m_speed**0.16))

    if (tempUnit === 'c') {
        f_chill = (f_chill - 32) * (5/9)
    }

    return f_chill
}

chill.value = calculateWindChill(temp.value, speed.value, "c", "kmh")
chill.textContent = chill.value.toFixed(1)
