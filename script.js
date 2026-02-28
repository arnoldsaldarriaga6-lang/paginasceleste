// ==========================================
// 1. LÓGICA DE LA PORTADA FALSA Y REPRODUCTOR
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const fakePoster = document.getElementById('fake-poster');
    const liveIframe = document.getElementById('live-iframe');
    const videoContainer = document.getElementById('video-container');

    if(fakePoster && liveIframe) { 
        fakePoster.addEventListener('click', function() {
            // Ocultamos la portada falsa
            fakePoster.style.display = 'none';
            // Cargamos el enlace de la transmisión
            liveIframe.src = "https://la14hd.com/vivo/canales.php?stream=liga1max";
            liveIframe.style.display = 'block';

            // TRUCO: Botón de emergencia por si la página bloquea el iframe
            if(!document.getElementById('btn-emergencia')) {
                const btn = document.createElement('a');
                btn.id = 'btn-emergencia';
                btn.href = "https://la14hd.com/vivo/canales.php?stream=liga1max";
                btn.target = "_blank"; // Abre en nueva pestaña
                btn.innerHTML = "<i class='fa-solid fa-arrow-up-right-from-square'></i> ¿La transmisión se ve negra? Haz clic aquí para ver el partido";
                btn.style.cssText = "display: block; text-align: center; background: #ef4444; color: white; padding: 12px; border-radius: 0 0 15px 15px; text-decoration: none; font-weight: 800; font-family: 'Oswald', sans-serif; margin-top: -5px; position: relative; z-index: 5;";
                
                videoContainer.after(btn);
            }
        });
    }
});

// ==========================================
// 2. LÓGICA DEL CONTADOR (CRISTAL VS CARABOBO)
// ==========================================
const calendarioPartidos = [
    // El próximo guerrero: Carabobo (4 de Marzo)
    { rival: "Carabobo", inicio: new Date("March 04, 2026 17:00:00").getTime(), fin: new Date("March 04, 2026 19:00:00").getTime() },
    // Siguiente fecha: Alianza Atlético (7 de Marzo)
    { rival: "A. Atletico", inicio: new Date("March 07, 2026 16:30:00").getTime(), fin: new Date("March 07, 2026 18:30:00").getTime() }
];

function actualizarContador() {
    const ahora = new Date().getTime();
    const titulo = document.getElementById("titulo-proximo");
    const contadorDiv = document.getElementById("countdown");

    if (!contadorDiv || !titulo) return;

    let partidoActivo = null;
    for (let i = 0; i < calendarioPartidos.length; i++) {
        if (ahora < calendarioPartidos[i].fin) { partidoActivo = calendarioPartidos[i]; break; }
    }

    if (!partidoActivo) {
        titulo.innerText = "Próximos partidos por confirmar";
        contadorDiv.innerHTML = "<span style='font-size: 1.5rem; color: var(--sc-celeste);'>⏳ Esperando programación oficial</span>";
        return;
    }

    if (ahora >= partidoActivo.inicio && ahora <= partidoActivo.fin) {
        titulo.innerText = `¡LA MÁQUINA CELESTE ESTÁ JUGANDO!`;
        contadorDiv.innerHTML = `<span style="color: #ef4444; text-shadow: 0 0 15px rgba(239, 68, 68, 0.8);">🔴 EN VIVO VS ${partidoActivo.rival}</span>`;
    } else {
        // Muestra el próximo guerrero
        titulo.innerText = `Próximo Guerrero: Cristal vs ${partidoActivo.rival}`;
        const desc = partidoActivo.inicio - ahora;
        const d = Math.floor(desc / (1000 * 60 * 60 * 24));
        const h = Math.floor((desc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((desc % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((desc % (1000 * 60)) / 1000);
        
        const dStr = d < 10 ? "0" + d : d;
        const hStr = h < 10 ? "0" + h : h;
        const mStr = m < 10 ? "0" + m : m;
        const sStr = s < 10 ? "0" + s : s;

        contadorDiv.innerHTML = `<div><span>${dStr}</span><small>DÍAS</small></div><div><span>${hStr}</span><small>HRS</small></div><div><span>${mStr}</span><small>MIN</small></div><div><span>${sStr}</span><small>SEG</small></div>`;
    }
}

if (document.getElementById("countdown")) {
    setInterval(actualizarContador, 1000);
    actualizarContador(); 
}

// ==========================================
// 3. FUNCIONES DE COPIADO (YAPE/AGORA)
// ==========================================
function copyText(text, method) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`¡Cuenta de ${method} copiada!`);
    }).catch(err => {
        const tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        showToast(`¡Cuenta de ${method} copiada!`);
    });
}

function showToast(message) {
    const toast = document.getElementById('premiumToast');
    if(toast) {
        const msgEl = document.getElementById('toastMessage');
        if(msgEl) msgEl.innerText = message;
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}
