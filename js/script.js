const button = document.getElementById('button');
const bacgroundCol = document.getElementById('div');
const text = document.getElementById('text');

button.addEventListener("click", function() {
    // Код, который нужно выполнить при нажатии на кнопку
    bacgroundCol.style.backgroundColor = generateRandomColors();
});

text.addEventListener("click", function() {
    // Код, который нужно выполнить при нажатии на кнопку
    text.textContent = generateRandomColors();
});

function generateRandomColors () {
    //RGB
    //FF0000
    //00FF00
    //0000FF
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color;
}