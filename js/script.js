// User Interface
const inputArea = document.getElementById("input");
const stackDiv = document.getElementById("stack");
function printStack() {
    let rs = STACK.reverse();
    let s = "";
    for (let i in rs) {
        s += `${i}: ${print(rs[i])}\n`;
    }
    return s.slice(0, -1);
}
inputArea.onkeyup = function() {
    STACK = []; SETTINGS = {};
    try {
        exe(parse(token(inputArea.value)));
        stackDiv.innerHTML = printStack();
    } catch (e) {
        stackDiv.innerHTML = e.message;
    }
}
window.onload = function() {
    inputArea.focus();
}