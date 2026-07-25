function createDollar() {
    const dollar = document.createElement('div');
    dollar.classList.add('dollar');
    
    const symbols = ['$$$', '💰', '💵', '🪙'];
    dollar.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    dollar.style.left = Math.random() * 100 + 'vw';
    dollar.style.animationDuration = Math.random() * 3 + 2 + 's';
    dollar.style.fontSize = Math.random() * 25 + 15 + 'px';
    
    document.getElementById('dollars-container').appendChild(dollar);

    setTimeout(() => {
        dollar.remove();
    }, 5000);
}

setInterval(createDollar, 100);
