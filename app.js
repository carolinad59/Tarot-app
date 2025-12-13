const cartasTarot = [
  { id: 0, nombre: "El Loco", imagen: "./0 Loco.jpg" },
  { id: 1, nombre: "El Mago", imagen: "./1 Mago.jpg" },
  { id: 2, nombre: "La Papisa", imagen: "./2 Papisa.jpg" },
  { id: 3, nombre: "La Emperatriz", imagen: "./3 Emperatriz.jpg" },
  { id: 4, nombre: "El Emperador", imagen: "./4 Emperador.jpg" },
  { id: 5, nombre: "El Papa", imagen: "./5 Papa.jpg" },
  { id: 6, nombre: "Los Enamorados", imagen: "./6 Enamorado.jpg" },
  { id: 7, nombre: "El Carro", imagen: "./7 Carro.jpg" },
  { id: 8, nombre: "La Justicia", imagen: "./8 Justicia.jpg" },
  { id: 9, nombre: "El Ermitaño", imagen: "./9 Ermitano.jpg" },
  { id: 10, nombre: "La Rueda de la Fortuna", imagen: "./10 Rueda Fortuna.jpg" },
  { id: 11, nombre: "La Fuerza", imagen: "./11 Fuerza.jpg" },
  { id: 12, nombre: "El Colgado", imagen: "./12 Colgado.jpg" },
  { id: 13, nombre: "La Muerte", imagen: "./13 Muerta.jpg" },
  { id: 14, nombre: "La Templanza", imagen: "./14 Templanza.jpg" },
  { id: 15, nombre: "El Diablo", imagen: "./15 Diablo.jpg" },
  { id: 16, nombre: "La Torre", imagen: "./16 Casa Dios.jpg" },
  { id: 17, nombre: "La Estrella", imagen: "./17 Estrella.jpg" },
  { id: 18, nombre: "La Luna", imagen: "./18 Luna.jpg" },
  { id: 19, nombre: "El Sol", imagen: "./19 Sol.jpg" },
  { id: 20, nombre: "El Juicio", imagen: "./20 Juicio.jpg" },
  { id: 21, nombre: "El Mundo", imagen: "./21 Mundo.jpg" }
];

const toUrl = (path) => encodeURI(path);
const cardBackImage = toUrl("./back classic .jpg");

function barajarBaraja(baraja) {
  const copia = [...baraja]; // no tocamos el original

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

  const buttons = document.querySelectorAll('.tirada-btn[data-cards]');
    const pantallaTiradas = document.getElementById('pantalla-tiradas');
    const pantallaBaraja = document.getElementById('pantalla-baraja');
    const btnVolver = document.getElementById('btn-volver');
    const pageTitle = document.getElementById('page-title');
    const subtitle = document.querySelector('.subtitle');
    const footerHint = document.querySelector('.footer-hint');

    let numCartasTirada = 0;
    let nombreTirada = '';

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            numCartasTirada = Number(btn.dataset.cards);
            nombreTirada = btn.querySelector('.tirada-title')?.textContent || 'Tarot';

            pantallaTiradas.style.display = 'none';
            pantallaBaraja.style.display = 'block';
            btnVolver.style.display = 'inline';
            subtitle.style.display = 'none';
            footerHint.style.display = 'none';

            // Cambiar título a nombre de la tirada
            const titulo = btn.querySelector('.tirada-title')?.textContent || 'Tarot';
            pageTitle.textContent = titulo;

            console.log('Cartas de la tirada:', numCartasTirada);
        });
    });


    const btnBarajar = document.getElementById('btn-barajar');
    const debugCarta = document.getElementById('debug-carta');
    const barajaCerrada = document.getElementById('baraja-cerrada');
    const mesaCartas = document.getElementById('mesa-cartas');
    const btnInterpretar = document.getElementById('btn-interpretar');
    const pantallaInterpretacion = document.getElementById('pantalla-interpretacion');
    const cartasInterpretacion = document.getElementById('cartas-interpretacion');

    let barajaActual = [];
    let cartasSeleccionadas = [];

    btnBarajar.addEventListener('click', () => {
      // Animación visual del mazo: 5 movimientos y vuelve al origen
      barajaCerrada.classList.remove('barajando');
      void barajaCerrada.offsetWidth; // reflow para reiniciar animación
      barajaCerrada.classList.add('barajando');

      // Re-barajar datos
      barajaActual = barajarBaraja(cartasTarot);
      console.log("Nueva baraja:", barajaActual.map(c => c.nombre));
    });

barajaCerrada.addEventListener('click', () => {
  // Segundo menú: mostrar grid dentro del área fija
  barajaCerrada.style.display = 'none';
  btnBarajar.style.display = 'none';
  mesaCartas.innerHTML = '';
  mesaCartas.classList.add('active');

  // Nos aseguramos de que hay baraja mezclada
  if (barajaActual.length === 0) {
    barajaActual = barajarBaraja(cartasTarot);
  }

  // Creamos las 22 cartas boca abajo dentro del área fija
  barajaActual.forEach((carta, index) => {
    const divCarta = document.createElement('div');
    divCarta.classList.add('carta');
    divCarta.style.backgroundImage = `url("${cardBackImage}")`;
    divCarta.dataset.front = toUrl(carta.imagen);

    // animación de reparto secuencial desde el mazo
    divCarta.classList.add('repartiendo');
    setTimeout(() => {
      divCarta.classList.remove('repartiendo');
      divCarta.classList.add('repartida');
    }, 120 + index * 120);

    divCarta.addEventListener('click', () => seleccionarCarta(divCarta, carta));

    mesaCartas.appendChild(divCarta);
  });
});

function seleccionarCarta(divCarta, carta) {
  if (cartasSeleccionadas.length >= numCartasTirada) return;

  if (divCarta.classList.contains('seleccionada')) return;

  // Flip lento
  divCarta.classList.add('flip-slow');
  divCarta.classList.add('seleccionada');
  setTimeout(() => {
    divCarta.style.backgroundImage = `url("${divCarta.dataset.front}")`;
  }, 450); // texto aparece tras iniciar giro

  cartasSeleccionadas.push(carta);

  if (cartasSeleccionadas.length === numCartasTirada) {
    btnInterpretar.classList.add('visible');
  }
}

// Mostrar pantalla de interpretación
btnInterpretar.addEventListener('click', () => {
  // Ocultar todo excepto el volver y la pantalla de interpretación
  pantallaBaraja.style.display = 'none';
  pantallaTiradas.style.display = 'none';
  pantallaInterpretacion.style.display = 'block';
  btnInterpretar.classList.remove('visible');
  pageTitle.style.display = 'none';
  subtitle.style.display = 'none';
  footerHint.style.display = 'none';

  // Mostrar encabezado con nombre de tirada y cartas seleccionadas
  let contenido = '<h3 style="color: var(--dorado); margin-bottom: 16px; font-size: 1.1rem;">' + nombreTirada + '</h3>';
  contenido += '<div class="interpret-grid">';

  cartasSeleccionadas.forEach((carta, index) => {
    const src = toUrl(carta.imagen);
    contenido += `
      <div class="interpret-card">
        <img src="${src}" alt="${carta.nombre}" loading="lazy" />
        <div class="interpret-name">${index + 1}. ${carta.nombre}</div>
      </div>
    `;
  });

  contenido += '</div>';

  cartasInterpretacion.innerHTML = contenido;
});

// Volver al menú principal
btnVolver.addEventListener('click', () => {
  // reset vistas
  pantallaBaraja.style.display = 'none';
  pantallaTiradas.style.display = 'grid';
  pantallaInterpretacion.style.display = 'none';
  btnVolver.style.display = 'none';
  subtitle.style.display = 'block';
  footerHint.style.display = 'block';
  pageTitle.style.display = 'block';

  // restaurar mazo y controles
  barajaCerrada.style.display = 'flex';
  btnBarajar.style.display = 'block';
  mesaCartas.classList.remove('active');
  mesaCartas.innerHTML = '';
  btnInterpretar.classList.remove('visible');
  cartasSeleccionadas = [];
  barajaActual = [];
  debugCarta.textContent = '';

  // Título vuelve a Tarot
  pageTitle.textContent = '🔮 Tarot';
});

