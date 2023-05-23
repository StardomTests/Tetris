document.addEventListener('DOMContentLoaded', (event) => {
    const gameBoard = document.getElementById('game-board');
    const gridSizeX = Math.floor(window.innerWidth / 20);
    const gridSizeY = Math.floor(window.innerHeight / 20);

    let block = { x: Math.floor(gridSizeX / 2), y: 0 };

    function drawBlock() {
        const blockElement = document.createElement('div');
        blockElement.style.gridColumnStart = block.x;
        blockElement.style.gridRowStart = block.y;
        blockElement.classList.add('cell', 'block');
        gameBoard.appendChild(blockElement);
    }

    function moveBlock(dx) {
        block.x += dx;

        if (block.x < 0) block.x = 0;
        if (block.x >= gridSizeX) block.x = gridSizeX - 1;
    }

    function dropBlock() {
        block.y += 1;

        if (block.y >= gridSizeY) {
            block.y = 0;
            block.x = Math.floor(gridSizeX / 2);
        }
    }

    function gameLoop() {
        gameBoard.innerHTML = '';
        drawBlock();
        dropBlock();
    }

    setInterval(gameLoop, 1000);

    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowLeft':
            case 'a':
                moveBlock(-1);
                break;
            case 'ArrowRight':
            case 'd':
                moveBlock(1);
                break;
        }
    });
});
