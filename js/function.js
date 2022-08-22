document.getElementById('btn-calculate').addEventListener('click',function(){
    const playerCost = nameOfPlayer('Per-Player');
    const totalPlayerCost = playerCost * playerList.length;
    getText('player-expenses',totalPlayerCost);


});


function getBtn(){
    const PlayerValue = document.querySelectorAll(".value");
    const playerCost = nameOfPlayer('Per-Player');
    const managerCost = nameOfPlayer('manager-cost');
    const chochCost = nameOfPlayer('choch-cost');
    const clubExpeneses = managerCost + chochCost;
    const totalPlayerCost = playerCost * playerList.length;
    const totalPlayerExpeneses = clubExpeneses + totalPlayerCost;
    PlayerValue.forEach(PlayerValue =>{
        PlayerValue.value = "";
    });
    getText('total',totalPlayerExpeneses);
};



