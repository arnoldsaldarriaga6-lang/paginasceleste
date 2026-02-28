/* ========================================== */
/* VARIABLES GLOBALES Y COLORES               */
/* ========================================== */
:root {
    --sc-celeste: #5CBFEB;
    --sc-dark-blue: #003366;
    --sc-white: #FFFFFF;
    --sc-accent-gold: #FFD700;
    --bg-deep: #001224; 
    --glass-bg: rgba(0, 51, 102, 0.85);
    --glass-border: rgba(92, 191, 235, 0.3);
    --text-dim: rgba(255, 255, 255, 0.7);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--sc-dark-blue);
    color: var(--sc-white);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}

body::before {
    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(circle at 30% 20%, rgba(92, 191, 235, 0.2) 0%, transparent 70%),
                radial-gradient(circle at 70% 80%, rgba(0, 51, 102, 0.9) 0%, transparent 70%),
                linear-gradient(135deg, #001e3c 0%, #003366 100%);
    z-index: -2;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

/* HEADER Y NAVEGACIÓN */
header { background: rgba(0, 51, 102, 0.95); backdrop-filter: blur(10px); border-bottom: 2px solid var(--sc-celeste); position: sticky; top: 0; z-index: 1000; padding: 15px 0; }
.header-content { display: flex; justify-content: space-between; align-items: center; }
.logo { font-family: 'Oswald', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--sc-white); text-decoration: none; display: flex; align-items: center; gap: 10px; }
.logo i { color: var(--sc-celeste); }

.live-badge { background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #ef4444; padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 800; display: flex; align-items: center; gap: 8px; animation: pulse 2s infinite; }
.live-dot { width: 8px; height: 8px; background: #ef4444; border-radius: 50%; }

@keyframes pulse { 
    0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 
    70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 
    100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } 
}

/* SECCIÓN REPRODUCTOR DE VIDEO */
.top-video-section { margin-top: 30px; margin-bottom: 30px; }
.Match-title { background: linear-gradient(90deg, rgba(0, 51, 102, 0.9), transparent); padding: 15px 20px; border-left: 4px solid var(--sc-celeste); font-family: 'Oswald', sans-serif; font-size: 1.5rem; color: var(--sc-celeste); margin-bottom: 20px; display: flex; align-items: center; gap: 10px; text-transform: uppercase; }
.video-frame { width: 100%; aspect-ratio: 16/9; background: #000; border-radius: 15px; overflow: hidden; border: 2px solid var(--sc-celeste); box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative; }
.fake-poster { width: 100%; height: 100%; position: absolute; top: 0; left: 0; cursor: pointer; background: #001224; display: flex; align-items: center; justify-content: center; z-index: 10; }
.fake-poster img { width: 100%; height: 100%; object-fit: contain; opacity: 0.8; transition: opacity 0.3s; }
.fake-poster:hover img { opacity: 0.5; }

.play-button { position: absolute; width: 80px; height: 80px; background: rgba(92, 191, 235, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 35px; color: var(--sc-dark-blue); box-shadow: 0 0 20px rgba(92, 191, 235, 0.6); transition: transform 0.3s; padding-left: 6px; }
.fake-poster:hover .play-button { transform: scale(1.15); background: #fff; color: var(--sc-celeste); }

/* CONTADOR REGRESIVO */
.countdown-container { text-align: center; margin: 20px 0; background: rgba(0, 51, 102, 0.5); padding: 20px; border-radius: 15px; border: 1px solid var(--glass-border); backdrop-filter: blur(10px); }
#countdown div { background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; min-width: 70px; color: white; }
#countdown span { display: block; font-size: 2.2rem; font-weight: 800; line-height: 1; }
#countdown small { font-size: 0.7rem; color: var(--sc-celeste); font-weight: 400; text-transform: uppercase; }

/* PANELES DE INFORMACIÓN Y WIDGETS */
.bottom-info-section { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; margin-bottom: 30px; }
@media (max-width: 900px) { .bottom-info-section { grid-template-columns: 1fr; } }

.glass-panel { background: var(--glass-bg); backdrop-filter: blur(12px); border: 1px solid var(--glass-border); border-radius: 20px; padding: 25px; box-shadow: 0 15px 35px rgba(0,0,0,0.3); }
.panel-header { font-family: 'Oswald', sans-serif; font-size: 1.5rem; color: var(--sc-celeste); text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
.widget-wrapper iframe { width: 100%; height: 600px; border: none; border-radius: 10px; background: #fff; }

/* SECCIÓN APOYA AL CERVECERO (YAPE/AGORA) */
.donation-desc { font-size: 0.9rem; color: var(--text-dim); margin-bottom: 15px; text-align: center; }
.donations-grid { display: flex; flex-direction: column; gap: 15px; }
.premium-card { background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2)); border: 1px solid rgba(255,255,255,0.1); border-radius: 15px; padding: 15px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: 0.3s; }
.premium-card:hover { border-color: var(--sc-celeste); background: rgba(92, 191, 235, 0.1); }
.card-left { display: flex; align-items: center; gap: 15px; }
.payment-img-box { width: 55px; height: 55px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.payment-logo { width: 100%; height: 100%; object-fit: contain; border-radius: 12px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); }
.card-details h4 { margin: 0; font-family: 'Oswald', sans-serif; font-size: 1.2rem; letter-spacing: 1px; color: var(--sc-white); }
.card-number { font-size: 0.9rem; color: var(--text-dim); font-family: monospace; letter-spacing: 1px; }
.copy-action { background: rgba(92, 191, 235, 0.2); color: var(--sc-celeste); padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 0.8rem; }

/* LISTA DE PRÓXIMOS PARTIDOS (SIDEBAR) */
.upcoming-list { display: flex; flex-direction: column; gap: 12px; }
.upcoming-item { display: flex; align-items: center; gap: 15px; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 10px; border-left: 3px solid var(--sc-celeste); }
.date-box { display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--sc-dark-blue); color: var(--sc-celeste); width: 50px; height: 50px; border-radius: 8px; font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 0.8rem; line-height: 1; border: 1px solid var(--sc-celeste); }
.date-box span { font-size: 1.3rem; color: var(--sc-white); }
.match-info { display: flex; flex-direction: column; }
.league { font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase; font-weight: 600; letter-spacing: 1px; }
.teams { font-size: 0.95rem; font-weight: 600; color: var(--sc-white); }

.action-btn { display: inline-flex; align-items: center; background: var(--sc-celeste); color: var(--sc-dark-blue); padding: 12px 25px; border-radius: 10px; font-weight: 800; text-decoration: none; text-transform: uppercase; transition: 0.3s; box-shadow: 0 5px 15px rgba(92, 191, 235, 0.4); border: none; cursor: pointer; }
.action-btn:hover { background: #fff; transform: translateY(-3px); }

/* ========================================== */
/* PLANTILLA 3D (ORDENADA POR POSICIÓN)       */
/* ========================================== */
.plantilla-header { text-align: center; margin-bottom: 40px; color: var(--sc-white); }
.plantilla-header h2 { font-family: 'Oswald', sans-serif; font-size: 2.8rem; color: var(--sc-celeste); text-transform: uppercase; margin-bottom: 5px;}

/* Títulos de Categoría (Arqueros, Defensas, etc) */
.pos-title { 
    width: 100%; text-align: center; font-family: 'Oswald', sans-serif; 
    font-size: 1.8rem; color: var(--sc-accent-gold); margin: 40px 0 20px; 
    text-transform: uppercase; letter-spacing: 2px; 
    border-bottom: 2px solid rgba(255, 215, 0, 0.3); padding-bottom: 10px; 
}

/* Grilla de Cartas por Posición */
.plantel-grid { 
    display: flex; flex-wrap: wrap; justify-content: center; 
    gap: 25px; width: 100%; margin-bottom: 20px; 
}

/* Tarjeta del DT */
.entrenador-wrapper { width: 100%; display: flex; justify-content: center; margin-bottom: 20px; }
.entrenador-card { background: linear-gradient(145deg, #002244, #001224); border: 2px solid var(--sc-accent-gold); border-radius: 20px; padding: 25px 40px; display: flex; flex-direction: row; align-items: center; gap: 30px; width: 100%; max-width: 600px; box-shadow: 0 15px 35px rgba(0,0,0,0.6); }
.entrenador-img { width: 130px; height: 130px; border-radius: 50%; object-fit: cover; border: 4px solid var(--sc-accent-gold); background: #fff; flex-shrink: 0;}
.entrenador-info { text-align: left; }
.entrenador-info h3 { font-family: 'Oswald', sans-serif; font-size: 2rem; color: var(--sc-accent-gold); margin: 0; text-transform: uppercase; line-height: 1.1;}
.entrenador-info p { font-size: 1rem; color: var(--text-dim); margin: 8px 0 0; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;}
.entrenador-info .badge-dt { display: inline-block; background: rgba(255, 215, 0, 0.2); color: var(--sc-accent-gold); padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; margin-top: 10px; border: 1px solid var(--sc-accent-gold); }

/* Contenedor Carta 3D */
.flip { width: 200px; height: 300px; perspective: 1000px; cursor: pointer; }
.flip-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
.flip:hover .flip-inner { transform: rotateY(180deg); }

/* Efecto Glow Frontal y Trasero */
.frente, .atras { 
    position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 15px; 
    overflow: hidden; border: 1px solid rgba(92, 191, 235, 0.3); 
    box-shadow: 0 0 15px rgba(92, 191, 235, 0.2), 0 10px 20px rgba(0,0,0,0.5); transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.flip:hover .frente, .flip:hover .atras { box-shadow: 0 0 35px rgba(92, 191, 235, 0.9), 0 10px 20px rgba(0,0,0,0.6); border-color: #5CBFEB; }

/* Lados de la Carta */
.frente { background: rgba(0, 51, 102, 0.85); display: flex; flex-direction: column; }
.frente img { width: 100%; height: 210px; object-fit: cover; border-bottom: 2px solid var(--sc-celeste); background: #fff;}
.info-frente { padding: 10px; text-align: center; }
.info-frente h3 { font-family: 'Oswald', sans-serif; font-size: 1rem; color: var(--sc-white); margin: 0; }
.atras { background: linear-gradient(145deg, #003366, #001e3c); transform: rotateY(180deg); display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-align: center; border: 2px solid var(--sc-celeste); }

/* ========================================== */
/* MODAL / POPUP DE JUGADOR                   */
/* ========================================== */
.popup { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,.9); backdrop-filter: blur(8px); display: none; align-items: center; justify-content: center; z-index: 2000; }
.popupContenido { background: #001e3c; border: 2px solid var(--sc-celeste); padding: 30px; border-radius: 20px; width: 90%; max-width: 450px; text-align: center; box-shadow: 0 10px 40px rgba(92, 191, 235, 0.4); position: relative; animation: fadeIn 0.3s ease-out; }
.popup-header { display: flex; align-items: center; gap: 20px; margin-bottom: 25px; text-align: left;}
.popup-header img { width: 90px; height: 90px; object-fit: cover; border-radius: 50%; border: 2px solid var(--sc-celeste); background: #fff;}
.popup-header h2 { font-family: 'Oswald', sans-serif; color: var(--sc-celeste); margin-bottom: 5px; font-size: 1.5rem; text-transform: uppercase; line-height: 1.1;}
.popup-header .num { font-family: 'Oswald', sans-serif; font-size: 1.3rem; color: var(--sc-accent-gold); }
.player-details-grid { display: grid; grid-template-columns: 1fr; gap: 15px; margin: 20px 0; background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border); text-align: left; }
.detail-item { display: flex; flex-direction: column; }
.detail-item span { font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 3px; font-weight: 600;}
.detail-item strong { font-size: 0.95rem; color: var(--sc-white); line-height: 1.4; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) { .entrenador-card { flex-direction: column; text-align: center; padding: 20px; } .entrenador-info { text-align: center; } }

/* FOOTER Y TOAST */
.site-footer { background: #001224; border-top: 2px solid var(--sc-celeste); padding: 40px 0 20px; text-align: center; }
.footer-logo { font-family: 'Oswald', sans-serif; font-size: 1.8rem; color: var(--sc-white); margin-bottom: 15px; }
.site-footer p { color: var(--text-dim); font-size: 0.9rem; margin-bottom: 20px; }

.toast-premium { 
    position: fixed; bottom: 30px; right: -300px; 
    background: rgba(0, 51, 102, 0.95); backdrop-filter: blur(10px); 
    border-left: 4px solid #10b981; color: white; padding: 15px 25px; 
    border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); 
    display: flex; align-items: center; gap: 15px; font-weight: 600; 
    transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); z-index: 9999; 
}
.toast-premium.show { right: 30px; } 
.toast-icon-success { color: #10b981; font-size: 1.5rem; }
