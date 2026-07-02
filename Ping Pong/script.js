const raquete1 = document.getElementById('raquete1'); // Obtém a referência a raquete 1 pelo o id do HTML
const raquete2 = document.getElementById('raquete2'); // Obtém a referência a raquete 2 pelo o id do HTML


// Posições iniciais
let raquete1Y = 200, raquete2Y = 200; // Posições iniciais das duas raquetes

// Teclas pressionadas


// =============================================================
// | constante para armazenar o estado das teclas pressionadas |
// =============================================================

const keys = {}; 
document.addEventListener('keydown', (e) => keys[e.key] = true); // Atualiza o estado das teclas pressionadas
document.addEventListener('keyup', (e) => keys[e.key] = false); // Atualiza o estado das teclas pressionadas


// Atualiza o movimento das raquetes
function moverRaquetes() {

    if (keys["w"] && raquete1Y > 0) raquete1Y -= 8; // se a tecla w estiver pressionada e a raquete 1 não estiver no topo, move para cima
    if (keys["s"] && raquete1Y < 310) raquete1Y += 8; // se a tecla s estiver pressionada e a raquete 1 não estiver no fundo, move para baixo

    if (keys["ArrowUp"] && raquete2Y > 0) raquete2Y -= 8; // se a seta de cima estiver pressionada e a raquete 2 não estiver no topo, move para cima
    if (keys["ArrowDown"] && raquete2Y < 310) raquete2Y += 8; // se a seta de baixo estiver pressionada e a raquete 2 não estiver no fundo, move para baixo

    raquete1.style.top = raquete1Y + "px"; // Atualiza a posição da raquete 1 no CSS
    raquete2.style.top = raquete2Y + "px"; // Atualiza a posição da raquete 2 no CSS

    console.log(`Raquete 1 Y: ${raquete1Y}, Raquete 2 Y: ${raquete2Y}`); // Loga a posição das raquetes no console

    return { raquete1Y, raquete2Y }; // Retorna a posição das duas raquetes
}

setInterval(moverRaquetes, 20); // Atualiza 20 vezes por segundo