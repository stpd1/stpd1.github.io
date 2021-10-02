// User Interface
const inputArea = document.getElementById("input");
const stackDiv = document.getElementById("stack");
function printStack() {
    let s = "";
    for (let i in rs) {
        s += `${i}: ${print(STACK[i])}\n`;
    }
    return s.slice(0, -1);
}
inputArea.onkeyup = function() {
    STACK = []; 
    SETT = defaultSett;
    ENV = defaultEnv;
    try {
        ;
        stackDiv.innerHTML = print(eval(read(inputArea.value)));
    } catch (e) {
        stackDiv.innerHTML = e.message;
    }
}