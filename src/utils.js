export function isValidNumberInput(e) {
    if (isNaN(parseInt(e.key, 10)) === true) return e.preventDefault();
    return true;
}

//parseInt(e.key, 10)
// pierwszy argument to jest to, co chcemy sprawdzić - w tym przypadku event na przycisku
// drugi argument - to system 10, czyli system, w którym chcemy sprawdzić

//isNaN = sprawdza boolowsko czy coś jest NaN (nie jest liczbą) -  wtedy daje true.
// Jeśli jest liczbą daje false 

//I tu dzieje się tak: jeśli coś nie jest liczbą to zablokuj (e.preventDefault())
// standardowe zachowanie - czyliw  tym przypadku możliwość wpisywania w formularz

//nazwa funkcji zaczyna się od "is" - jeśli funkcja ma zwracać true/false


export function parseInputAsNumber(val) {
    if (val === "") return -1;
    return parseInt(val, 10);
}

export function isValidName(val) {
    if (val.length > 0) return true;
    return false;
}

export function isValidHour(val) {
    if (val >= 0 && val <= 23) return true;
    return false;
}
export function isValidMinutes(val) {
    if (val >= 0 && val <= 59) return true;
    return false;
}
export function hourMinuteToSeconds(h, m){
    return h * 3600 + m * 60;
}
export function secondsToHourMinuteSecond(s) {
    let seconds = s;
    const hour = Math.floor(seconds / 3600).toString().padStart(2, 0);
    seconds = seconds - hour * 3600;
    const minute = Math.floor(seconds / 60).toString().padStart(2, 0);
    seconds -= minute * 60;
    seconds = seconds.toString().padStart(2, 0);
    return `${hour}:${minute}:${seconds}`
}
