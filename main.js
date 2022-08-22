
const playerList = []

function display(players) {

    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    for (let i = 0; i < playerList.length; i++) {
        const playerName = playerList[i].playerName;
        const order = document.createElement('div');
        order.innerHTML = `
        <li>${playerName}</li>
      
        `;
        orderList.appendChild(order);

    }
}


function getSelect(elementId) {
    const playerName = elementId.parentNode.children[0].innerText;

    const playerOjt = {
        playerName: playerName,
    };
    playerList.push(playerOjt);

    display(playerList);

};
