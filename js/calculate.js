
function nameOfPlayer(input) {
    const PerPlayer = document.getElementById(input);
    const costOf = PerPlayer.value;
    const string = parseInt(costOf);
    return string;
};

function getText(text, innerText) {
    const textElement = document.getElementById(text);
    textElement.innerText = innerText;        
};





