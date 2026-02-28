// ==========================================
// 1. LÓGICA DE LA PORTADA FALSA Y REPRODUCTOR
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const fakePoster = document.getElementById('fake-poster');
    const liveIframe = document.getElementById('live-iframe');

    if(fakePoster && liveIframe) { 
        fakePoster.addEventListener('click', function() {
            fakePoster.style.display = 'none';
            liveIframe.src = "https://la14hd.com/vivo/canales.php?stream=liga1max";
            liveIframe.style.display = 'block';
        });
    }
});

// ==========================================
// 2. LÓGICA DEL CONTADOR (CRISTAL VS CARABOBO)
// ==========================================
const calendarioPartidos = [
    { rival: "Carabobo", inicio: new Date("March 04, 2026 17:00:00").getTime(), fin: new Date("March 04, 2026 19:00:00").getTime() },
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

// ==========================================
// 4. LÓGICA DEL POPUP DE JUGADORES (MODAL)
// ==========================================
function abrirModal(nombre, numero, posicion, descripcion, imagenUrl) {
    const modal = document.getElementById("playerModal");
    
    // Asignamos la información al HTML del Modal
    document.getElementById("modalNombre").innerText = nombre;
    document.getElementById("modalNum").innerText = numero;
    document.getElementById("modalPos").innerText = posicion;
    document.getElementById("modalDesc").innerText = descripcion;
    document.getElementById("modalImg").src = imagenUrl;
    
    // Mostramos el Modal
    modal.style.display = "flex";
}

function cerrarModal() {
    const modal = document.getElementById("playerModal");
    modal.style.display = "none";
}
