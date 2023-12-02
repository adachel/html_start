
function outputText(inputName) {
    let text = `Привет ${inputName}`;
    document.getElementById("name").innerHTML = text;
    // alert(text);
}
const yourName = prompt("Введите ваше имя: ", "имя...")
outputText(yourName);

