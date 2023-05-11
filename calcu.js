function insert(n) {
    result.value += n
}

//eval method
function calculate() {
    result.value = eval(result.value)
}

function clearScreen() {
    result.value = ""
}

//slice(strating index and ending index)
//s="hello"

//hel s.slice(0,1)

function backspace() {
    result.value = result.value.slice(0, -1)
}
