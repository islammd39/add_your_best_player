

document.getElementById('btn-calculate').addEventListener('click',function(){
    const playerCost = nameOfPlayer('Per-Player');
    const totalPlayerCost = playerCost * playerList.length;
    getText('player-expenses',totalPlayerCost);

})



document.getElementById('btn-total').addEventListener('click',function(){
    const managerCost = nameOfPlayer('manager-cost');
    const chochCost = nameOfPlayer('choch-cost');
    const clubExpeneses = managerCost + chochCost;
    const totalPlayerExpeneses = playerList.length + clubExpeneses;


    getText('total',totalPlayerExpeneses);

});



function nameOfPlayer(input) {
    const PerPlayer = document.getElementById(input);
    const costOf = PerPlayer.value;
    const string = parseInt(costOf);
    PerPlayer.value = '';
    return string;
};

function getText(text, innerText) {
    const textElement = document.getElementById(text);
    textElement.innerText = innerText;        
};