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

    let numCartasTirada = 0;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            numCartasTirada = Number(btn.dataset.cards);

            pantallaTiradas.style.display = 'none';
            pantallaBaraja.style.display = 'block';
            btnVolver.style.display = 'inline';

            console.log('Cartas de la tirada:', numCartasTirada);
        });
    });


    const btnBarajar = document.getElementById('btn-barajar');
    const debugCarta = document.getElementById('debug-carta');
    const barajaCerrada = document.getElementById('baraja-cerrada');
    const mesaCartas = document.getElementById('mesa-cartas');
    const btnInterpretar = document.getElementById('btn-interpretar');

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
      debugCarta.textContent = `Carta superior: ${barajaActual[0].nombre}`;
    });

barajaCerrada.addEventListener('click', () => {
  // Ocultamos baraja y botón barajar
  barajaCerrada.style.display = 'none';
  btnBarajar.style.display = 'none';

  // Limpiamos mesa
  mesaCartas.innerHTML = '';
  mesaCartas.style.display = 'grid';

  // Nos aseguramos de que hay baraja mezclada
  if (barajaActual.length === 0) {
    barajaActual = barajarBaraja(cartasTarot);
  }

  // Creamos las 22 cartas boca abajo
  barajaActual.forEach((carta, index) => {
    const divCarta = document.createElement('div');
    divCarta.classList.add('carta');
    divCarta.textContent = '🂠';

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
    btnInterpretar.style.display = 'block';
  }
}

// Volver al menú principal
btnVolver.addEventListener('click', () => {
  // reset vistas
  pantallaBaraja.style.display = 'none';
  pantallaTiradas.style.display = 'grid';
  btnVolver.style.display = 'none';

  // restaurar mazo y controles
  barajaCerrada.style.display = 'flex';
  btnBarajar.style.display = 'inline-block';
  mesaCartas.style.display = 'none';
  mesaCartas.innerHTML = '';
  btnInterpretar.style.display = 'none';
  cartasSeleccionadas = [];
  barajaActual = [];
  debugCarta.textContent = '';
});

