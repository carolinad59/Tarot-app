const cartasTarot = [
  { id: 0, nombre: "El Loco" },
  { id: 1, nombre: "El Mago" },
  { id: 2, nombre: "La Papisa" },
  { id: 3, nombre: "La Emperatriz" },
  { id: 4, nombre: "El Emperador" },
  { id: 5, nombre: "El Papa" },
  { id: 6, nombre: "Los Enamorados" },
  { id: 7, nombre: "El Carro" },
  { id: 8, nombre: "La Justicia" },
  { id: 9, nombre: "El Ermitaño" },
  { id: 10, nombre: "La Rueda de la Fortuna" },
  { id: 11, nombre: "La Fuerza" },
  { id: 12, nombre: "El Colgado" },
  { id: 13, nombre: "La Muerte" },
  { id: 14, nombre: "La Templanza" },
  { id: 15, nombre: "El Diablo" },
  { id: 16, nombre: "La Torre" },
  { id: 17, nombre: "La Estrella" },
  { id: 18, nombre: "La Luna" },
  { id: 19, nombre: "El Sol" },
  { id: 20, nombre: "El Juicio" },
  { id: 21, nombre: "El Mundo" }
];

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
    
    // Crear el diseño de la parte trasera
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    const pattern = document.createElement('div');
    pattern.classList.add('card-back-pattern');
    cardBack.appendChild(pattern);
    divCarta.appendChild(cardBack);

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
    divCarta.textContent = carta.nombre;
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
  contenido += '<div style="margin-top: 20px; border-top: 1px solid var(--dorado); padding-top: 16px;">';
  
  cartasSeleccionadas.forEach((carta, index) => {
    contenido += `<p style="margin: 12px 0;"><strong>${index + 1}. ${carta.nombre}</strong></p>`;
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

