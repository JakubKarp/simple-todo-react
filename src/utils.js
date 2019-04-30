export function isValidNumberInput(e) {
    if (isNaN(parseInt(e.key, 10)) === true) return e.preventDefault();
    return true;
}

//parseInt(e.key, 10)
// pierwszy argument to jest to, co chcemy sprawdzić - w tym przypadku event na przycisku
// drugi argument - to sysstem 10, czyli system, w którym chcemy sprawdzić

//isNaN = sprawdza boolowsko czy coś jest NaN (nie jest liczbą) -  wtedy daje true.
// Jeśli jest liczbą daje false 

//I tu dzieje się tak: jeśli coś nie jest liczbą to zablokuj (e.preventDefault())
// standardowe zachowanie - czyliw  tym przypadku możliwość wpisywania w formularz
