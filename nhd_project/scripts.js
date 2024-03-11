let lsl = {x: 0, y: 0};
let nextDistance = 0;
let lastTimestamp = 0;
let timeStampDelay = 333;

window.onerror = e => alert(e)

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
}

window.onmousemove = e =>
    mouseMoveHandler(e.pageX, e.pageY);

setTimeout(spawnRandomBubbleLoop, 500);

function spawnRandomBubbleLoop() {
    setTimeout(spawnRandomBubbleLoop,
        getRandom(500, 2000));
    
    const els = 
        document.querySelectorAll('.molasses');
        
    for (let i = 0; i < els.length; i++) {
        const bcr = els[i].getBoundingClientRect();
        
        const x = bcr.x;
        const y = bcr.y;
        const w = bcr.width;
        const h = bcr.height;
        
        spawnBubble(
            getRandom(x, x+w), y+h+17, els[i]);
    }
}

function mouseMoveHandler(mouseX, mouseY) {
    const els = 
        document.querySelectorAll('.molasses:hover');
    
    if ((els.length >= 1 && getDistance(
        mouseX, mouseY,
        lsl.x, lsl.y) > nextDistance) || (
        Date.now() - lastTimestamp > timeStampDelay
        )) {
            
        lastTimestamp = Date.now();

        lsl.x = mouseX;
        lsl.y = mouseY;
        
        nextDistance = getRandom(20, 80);
        
        spawnBubble(mouseX, mouseY, els[0]);
    }
}

function spawnBubble(x, y, element) {
    const newBubble = document.createElement('div');
    const size = getRandom(5, 15);
    const borderWidth = 2;
    newBubble.classList.add('bubble');
    
    newBubble.style.top =
        y - size/2 - borderWidth + 'px';
    newBubble.style.left =
        x - size/2 - borderWidth + 'px';
    newBubble.style.width = size + 'px';
    newBubble.style.height = size + 'px';
    newBubble.style.borderWidth = borderWidth + 'px';
    
    try {
    element.appendChild(newBubble);
    } catch (err) {}
    
    setTimeout(() => {
        newBubble.remove()
    }, 5500);
}

function menuClick() {
    const menuButton =
        document.querySelector('#menuButton');
    const menu =
        document.querySelector('#menu');
    
    menuButton.classList.toggle('openMenu');
    menu.classList.toggle('openMenu');
}
