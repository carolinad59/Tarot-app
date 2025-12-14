const cartasTarot = [
  {
    id: 0,
    nombre: "El Loco",
    imagen: "./fotos/0 Loco.jpg",
    interpretacion:
      "El Loco representa el comienzo de un nuevo viaje, lleno de posibilidades y libertad. Es la carta de la espontaneidad, la aventura y el impulso. Simboliza desprenderse de lo conocido y la valentía para explorar lo desconocido confiando en la intuición.",
    consejo:
      "No temas dar el primer paso. Confía en el proceso y en tu intuición, aceptando la incertidumbre como parte del viaje."
  },
  {
    id: 1,
    nombre: "El Mago",
    imagen: "./fotos/1 Mago.jpg",
    interpretacion:
      "El Mago simboliza la manifestación de la voluntad y la habilidad de transformar ideas en realidad. Es la carta de la creatividad, la destreza y la acción enfocada.",
    consejo:
      "Aprovecha tus habilidades y mantén la confianza en ti. Actúa y concéntrate para materializar tus objetivos."
  },
  {
    id: 2,
    nombre: "La Papisa",
    imagen: "./fotos/2 Papisa.jpg",
    interpretacion:
      "La Papisa es la guardiana del conocimiento interior y la intuición. Representa sabiduría, introspección y conexión espiritual, invitando a buscar respuestas dentro de uno mismo.",
    consejo:
      "Escucha tu voz interior y confía en tu intuición. La verdadera sabiduría nace de la introspección."
  },
  {
    id: 3,
    nombre: "La Emperatriz",
    imagen: "./fotos/3 Emperatriz.jpg",
    interpretacion:
      "La Emperatriz personifica la abundancia, fertilidad y creatividad. Habla de crecimiento, nutrición y manifestación de belleza y naturaleza.",
    consejo:
      "Nutre tus ideas y relaciones con amor y paciencia. La abundancia surge del cuidado constante."
  },
  {
    id: 4,
    nombre: "El Emperador",
    imagen: "./fotos/4 Emperador.jpg",
    interpretacion:
      "El Emperador simboliza autoridad, estructura y orden. Representa estabilidad, liderazgo y construcción de bases sólidas.",
    consejo:
      "Establece estructuras claras y mantén la disciplina. Lidera con firmeza para alcanzar el éxito."
  },
  {
    id: 5,
    nombre: "El Papa",
    imagen: "./fotos/5 Papa.jpg",
    interpretacion:
      "El Papa representa la tradición, la espiritualidad y la guía moral. Habla de fe, ética y sabiduría transmitida.",
    consejo:
      "Busca orientación en la tradición y la sabiduría espiritual. La fe y la ética son pilares."
  },
  {
    id: 6,
    nombre: "Los Enamorados",
    imagen: "./fotos/6 Enamorado.jpg",
    interpretacion:
      "Los Enamorados representan unión, elección y armonía. Carta del amor, las relaciones y decisiones del corazón.",
    consejo:
      "Escucha a tu corazón y decide con conciencia. La armonía se basa en sinceridad y conexión genuina."
  },
  {
    id: 7,
    nombre: "El Carro",
    imagen: "./fotos/7 Carro.jpg",
    interpretacion:
      "El Carro simboliza victoria, determinación y control. Habla de superar obstáculos con voluntad y disciplina.",
    consejo:
      "Mantén determinación y control. El enfoque y la perseverancia traen el triunfo."
  },
  {
    id: 8,
    nombre: "La Justicia",
    imagen: "./fotos/8 Justicia.jpg",
    interpretacion:
      "La Justicia representa equilibrio, verdad y responsabilidad. Invita a la objetividad y a actuar con integridad.",
    consejo:
      "Sé justo y objetivo. La verdad y el equilibrio son esenciales para la armonía."
  },
  {
    id: 9,
    nombre: "El Ermitaño",
    imagen: "./fotos/9 Ermitano.jpg",
    interpretacion:
      "El Ermitaño simboliza introspección y búsqueda de la verdad interior. Invita a la reflexión y retiro constructivo.",
    consejo:
      "Tómate tiempo para reflexionar. La sabiduría llega en el silencio y la introspección."
  },
  {
    id: 10,
    nombre: "La Rueda de la Fortuna",
    imagen: "./fotos/10 Rueda Fortuna.jpg",
    interpretacion:
      "La Rueda de la Fortuna representa ciclos de cambio, destino y evolución. Recuerda la naturaleza cambiante de la vida.",
    consejo:
      "Acepta el cambio con flexibilidad y confianza. Adáptate para aprovechar las oportunidades."
  },
  {
    id: 11,
    nombre: "La Fuerza",
    imagen: "./fotos/11 Fuerza.jpg",
    interpretacion:
      "La Fuerza simboliza coraje, resiliencia y autocontrol. Supera desafíos con fortaleza interior y paciencia.",
    consejo:
      "Confía en tu fuerza interior y mantén la calma. Valentía y paciencia son claves."
  },
  {
    id: 12,
    nombre: "El Colgado",
    imagen: "./fotos/12 Colgado.jpg",
    interpretacion:
      "El Colgado representa pausa, sacrificio y nueva perspectiva. Invita a ver desde otro ángulo y aceptar la espera.",
    consejo:
      "Acepta la pausa y busca nuevas perspectivas. El sacrificio puede traer claridad."
  },
  {
    id: 13,
    nombre: "La Muerte",
    imagen: "./fotos/13 Muerta.jpg",
    interpretacion:
      "La Muerte simboliza transformación, cierre de ciclo y renacimiento. Dejar ir lo viejo para abrir paso a lo nuevo.",
    consejo:
      "Abraza la transformación y suelta lo que no sirve. La renovación abre oportunidades."
  },
  {
    id: 14,
    nombre: "La Templanza",
    imagen: "./fotos/14 Templanza.jpg",
    interpretacion:
      "La Templanza representa equilibrio, armonía y moderación. Integra opuestos y busca serenidad.",
    consejo:
      "Busca equilibrio y moderación. La paz interior nace de la paciencia."
  },
  {
    id: 15,
    nombre: "El Diablo",
    imagen: "./fotos/15 Diablo.jpg",
    interpretacion:
      "El Diablo simboliza tentación, ataduras y obsesiones. Habla de cadenas e influencias que limitan.",
    consejo:
      "Reconoce las ataduras y libérate. La libertad llega al superar tentaciones y límites."
  },
  {
    id: 16,
    nombre: "La Torre",
    imagen: "./fotos/16 Casa Dios.jpg",
    interpretacion:
      "La Torre representa ruptura, revelación y cambio inesperado. Destruye estructuras falsas para que surja la verdad.",
    consejo:
      "Acepta cambios abruptos como oportunidades de renovación. La verdad surge tras la caída de lo falso."
  },
  {
    id: 17,
    nombre: "La Estrella",
    imagen: "./fotos/17 Estrella.jpg",
    interpretacion:
      "La Estrella simboliza esperanza, inspiración y claridad. Guía y luz en tiempos oscuros, renovación y optimismo.",
    consejo:
      "Mantén la fe y sigue con esperanza. La luz interior te guía al futuro brillante."
  },
  {
    id: 18,
    nombre: "La Luna",
    imagen: "./fotos/18 Luna.jpg",
    interpretacion:
      "La Luna representa intuición, emociones e ilusiones. Invita a discernir entre realidad y apariencia.",
    consejo:
      "Confía en tu intuición y observa las ilusiones. La claridad llega con introspección."
  },
  {
    id: 19,
    nombre: "El Sol",
    imagen: "./fotos/19 Sol.jpg",
    interpretacion:
      "El Sol simboliza alegría, éxito y vitalidad. Habla de claridad, energía positiva y realización personal.",
    consejo:
      "Disfruta tus logros y comparte tu luz. La positividad y claridad te guían."
  },
  {
    id: 20,
    nombre: "El Juicio",
    imagen: "./fotos/20 Juicio.jpg",
    interpretacion:
      "El Juicio representa renovación, evaluación y despertar. Reflexiona sobre el pasado para decidir el futuro.",
    consejo:
      "Aprende de tus experiencias y decide con conciencia. La renovación nace de la claridad."
  },
  {
    id: 21,
    nombre: "El Mundo",
    imagen: "./fotos/21 Mundo.jpg",
    interpretacion:
      "El Mundo simboliza plenitud, realización e integración. Habla de cierre de ciclo y armonía universal.",
    consejo:
      "Celebra tus logros y reconoce tu crecimiento. La plenitud llega con integración y armonía."
  }
];

const toUrl = (path) => encodeURI(path);

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
    const tiradaTitle = document.getElementById('tirada-title');
    const subtitle = document.querySelector('.subtitle');
    const footerHint = document.querySelector('.footer-hint');

    let numCartasTirada = 0;
    let nombreTirada = '';
    let significadosPosiciones = [];

    // Define meanings for each spread
    const spreadsConfig = {
      'Sí o No': [],
      'Carta del día': [],
      'Problema y solución': ['Problema', 'Solución'],
      'Pasado, presente y futuro': ['Pasado', 'Presente', 'Futuro'],
      'La cruz celta': [
        'Situación actual',
        'Obstáculo(s)',
        'Reacción personal',
        'Influencias pasadas',
        'Factores ocultos',
        'Futuro cercano',
        'Tu actitud',
        'Entorno y ambiente',
        'Camino del destino',
        'Resultado final'
      ]
    };

    // Yes/No answers and explanations for each card
    const yesNoAnswers = {
      'El Loco': { answer: 'Sí', text: 'Nueva oportunidad y libertad de acción.' },
      'El Mago': { answer: 'Sí', text: 'Capacidad de actuar y manifestar resultados.' },
      'La Papisa': { answer: 'Sí', text: 'Sabiduría e intuición para tomar la decisión correcta.' },
      'La Emperatriz': { answer: 'Sí', text: 'Crecimiento, creatividad y abundancia.' },
      'El Emperador': { answer: 'Sí', text: 'Estabilidad y control sobre la situación.' },
      'El Papa': { answer: 'Sí', text: 'Guía y consejos sabios que favorecen la acción.' },
      'Los Enamorados': { answer: 'Sí', text: 'Unión, armonía y elección positiva.' },
      'El Carro': { answer: 'Sí', text: 'Avance, victoria y control de la situación.' },
      'La Justicia': { answer: 'Sí', text: 'Decisión justa y claridad en el resultado.' },
      'El Ermitaño': { answer: 'Neutral', text: 'Se requiere reflexión e introspección antes de decidir.' },
      'La Rueda de la Fortuna': { answer: 'Sí', text: 'Cambios positivos y oportunidad que llega.' },
      'La Fuerza': { answer: 'Sí', text: 'Valentía y perseverancia para superar obstáculos.' },
      'El Colgado': { answer: 'Neutral', text: 'Pausa y espera necesaria antes de actuar.' },
      'La Muerte': { answer: 'No', text: 'Final doloroso o transformación inevitable.' },
      'La Templanza': { answer: 'Sí', text: 'Armonía y equilibrio que favorecen el éxito.' },
      'El Diablo': { answer: 'No', text: 'Ataduras, manipulación o situaciones dañinas.' },
      'La Torre': { answer: 'No', text: 'Ruptura, crisis y cambio drástico.' },
      'La Estrella': { answer: 'Sí', text: 'Esperanza y claridad para avanzar.' },
      'La Luna': { answer: 'No', text: 'Confusión, engaño o incertidumbre.' },
      'El Sol': { answer: 'Sí', text: 'Éxito, claridad y resultados positivos.' },
      'El Juicio': { answer: 'Sí', text: 'Decisión acertada y liberación.' },
      'El Mundo': { answer: 'Sí', text: 'Culminación, logro y plenitud.' }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cardsValue = btn.dataset.cards;
            numCartasTirada = cardsValue === 'yesno' ? 1 : Number(cardsValue);
            nombreTirada = btn.querySelector('.tirada-title')?.textContent || 'Tarot';
            significadosPosiciones = spreadsConfig[nombreTirada] || [];

            pantallaTiradas.style.display = 'none';
            pantallaBaraja.style.display = 'block';
            btnVolver.style.display = 'inline';
            subtitle.style.display = 'none';
            footerHint.style.display = 'none';

            // Cambiar título a nombre de la tirada
            const titulo = btn.querySelector('.tirada-title')?.textContent || 'Tarot';
            if (tiradaTitle) tiradaTitle.textContent = titulo;

            // Aplicar gradiente según tirada
            document.body.classList.remove('tirada-menu', 'tirada-1', 'tirada-2', 'tirada-3', 'tirada-10', 'tirada-yesno');
            const gradientClass = cardsValue === 'yesno' ? 'tirada-yesno' : `tirada-${numCartasTirada}`;
            document.body.classList.add(gradientClass);

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
    let interpretIndex = 0;
    let repartiendo = false;

    btnBarajar.addEventListener('click', () => {
      // Animación visual del mazo: 5 movimientos y vuelve al origen
      barajaCerrada.classList.remove('barajando');
      void barajaCerrada.offsetWidth; // reflow para reiniciar animación
      barajaCerrada.classList.add('barajando');

      // Re-barajar datos
      barajaActual = barajarBaraja(cartasTarot);
      console.log("Nueva baraja:", barajaActual.map(c => c.nombre));
    });

function crearCartaElemento(carta) {
  const divCarta = document.createElement('div');
  divCarta.classList.add('carta');
  divCarta.style.backgroundImage = 'none';
  divCarta.dataset.front = toUrl(carta.imagen);
  divCarta.addEventListener('click', () => seleccionarCarta(divCarta, carta));
  return divCarta;
}

function repartirDesdeMazo() {
  // Show initial counter for multi-card spreads
  const cardCounter = document.getElementById('card-counter');
  if (numCartasTirada > 1 && cardCounter) {
    cardCounter.style.display = 'block';
    cardCounter.textContent = `Quedan ${numCartasTirada} cartas`;
  }
  
  // posición actual del mazo (ya movido)
  const deckRect = barajaCerrada.getBoundingClientRect();
  const deckCenter = {
    x: deckRect.left + deckRect.width / 2,
    y: deckRect.top + deckRect.height / 2
  };

  barajaActual.forEach((carta, index) => {
    const divCarta = crearCartaElemento(carta);
    divCarta.style.opacity = 0;
    divCarta.style.transform = 'translate(0,0) scale(1)';
    mesaCartas.appendChild(divCarta);

    // medir posición final
    const cardRect = divCarta.getBoundingClientRect();
    const cardCenter = {
      x: cardRect.left + cardRect.width / 2,
      y: cardRect.top + cardRect.height / 2
    };
    const dx = deckCenter.x - cardCenter.x;
    const dy = deckCenter.y - cardCenter.y;

    // posición inicial: desde el mazo
    divCarta.style.transform = `translate(${dx}px, ${dy}px) scale(0.9)`;
    divCarta.style.transition = 'transform 0.65s ease, opacity 0.65s ease';

    setTimeout(() => {
      divCarta.style.transform = 'translate(0px, 0px) scale(1)';
      divCarta.style.opacity = 1;
    }, 80 + index * 140);
  });

  // ocultar el mazo al terminar de repartir
  const totalMs = 80 + barajaActual.length * 140 + 300;
  setTimeout(() => {
    barajaCerrada.style.opacity = 0;
    barajaCerrada.style.pointerEvents = 'none';
  }, totalMs);
}

barajaCerrada.addEventListener('click', () => {
  if (repartiendo) return;
  repartiendo = true;

  // asegurar que el mazo esté visible al iniciar
  barajaCerrada.style.opacity = 1;
  barajaCerrada.style.pointerEvents = 'auto';

  // mostrar grid dentro del área fija, mantener mazo visible
  mesaCartas.innerHTML = '';
  mesaCartas.classList.add('active');
  btnBarajar.style.display = 'none';

  // Nos aseguramos de que hay baraja mezclada
  if (barajaActual.length === 0) {
    barajaActual = barajarBaraja(cartasTarot);
  }

  // mover el mazo a esquina inferior derecha y luego repartir
  barajaCerrada.classList.add('deck-final');
  setTimeout(() => {
    repartirDesdeMazo();
    setTimeout(() => { repartiendo = false; }, 80 + barajaActual.length * 140 + 400);
  }, 450);
});

function seleccionarCarta(divCarta, carta) {
  if (cartasSeleccionadas.length >= numCartasTirada) return;

  if (divCarta.classList.contains('seleccionada')) return;
  
  const cardCounter = document.getElementById('card-counter');

  // Flip lento con glow místico
  divCarta.classList.add('flip-slow');
  setTimeout(() => {
    divCarta.style.backgroundImage = `url("${divCarta.dataset.front}")`;
  }, 700); // imagen aparece en el medio del giro (1.4s / 2)
  setTimeout(() => {
    divCarta.classList.add('seleccionada');
  }, 10); // aplicar clase para activar glow

  cartasSeleccionadas.push(carta);
  
  // Update counter
  const remaining = numCartasTirada - cartasSeleccionadas.length;
  if (numCartasTirada > 1) {
    cardCounter.style.display = 'block';
    if (remaining > 0) {
      cardCounter.textContent = `Quedan ${remaining} ${remaining === 1 ? 'carta' : 'cartas'}`;
    } else {
      cardCounter.textContent = '¡Todas las cartas seleccionadas!';
    }
  }

  if (cartasSeleccionadas.length === numCartasTirada) {
    btnInterpretar.classList.add('visible');
  }
}

function renderInterpretacion() {
  if (!cartasSeleccionadas.length) return;
  const carta = cartasSeleccionadas[interpretIndex];
  const src = toUrl(carta.imagen);
  const hasPrev = interpretIndex > 0;
  const hasNext = interpretIndex < cartasSeleccionadas.length - 1;

  let contenido = '<div class="interpret-stage">';
  
  // Check if this is a yes/no spread
  const isYesNo = nombreTirada === 'Sí o No';
  
  if (isYesNo) {
    // Yes/No spread: show answer prominently
    const answerData = yesNoAnswers[carta.nombre];
    const answer = answerData.answer;
    const answerText = answerData.text;
    const answerColor = answer === 'Sí' ? '#4ade80' : answer === 'No' ? '#f87171' : '#fbbf24';
    contenido += `<h2 style="color: ${answerColor}; font-size: 3rem; margin-bottom: 8px;">${answer}</h2>`;
    contenido += `<h3 style="color: var(--dorado); margin-bottom: 8px;">${carta.nombre}</h3>`;
    contenido += `<img class="interpret-image" src="${src}" alt="${carta.nombre}" loading="lazy" style="margin-bottom: 8px;" />`;
    contenido += '<div class="interpret-text-block">';
    contenido += `<p class="interpret-text" style="text-align: center; font-size: 1.1rem; margin-top: 4px;">${answerText}</p>`;
    contenido += '</div>'; // text block
  } else {
    // Regular spread: use position meaning
    const positionMeaning = significadosPosiciones[interpretIndex];
    const cardTitle = positionMeaning ? `${positionMeaning}: ${carta.nombre}` : carta.nombre;
    
    contenido += `<h2 style="color: var(--dorado); margin-bottom: 8px;">${cardTitle}</h2>`;
    contenido += `<img class="interpret-image" src="${src}" alt="${carta.nombre}" loading="lazy" />`;
    contenido += '<div class="interpret-text-block">';
    contenido += '<div class="interpret-label">Interpretación</div>';
    contenido += `<p class="interpret-text">${carta.interpretacion}</p>`;
    contenido += '<div class="interpret-label" style="margin-top:8px;">Consejo</div>';
    contenido += `<p class="interpret-text">${carta.consejo}</p>`;
    contenido += '</div>'; // text block
  }
  contenido += '</div>'; // stage

  if (hasPrev) {
    contenido += '<button class="interpret-arrow left" aria-label="Anterior">←</button>';
  }
  if (hasNext) {
    contenido += '<button class="interpret-arrow right" aria-label="Siguiente">→</button>';
  }

  cartasInterpretacion.innerHTML = contenido;

  const prevBtn = cartasInterpretacion.querySelector('.interpret-arrow.left');
  const nextBtn = cartasInterpretacion.querySelector('.interpret-arrow.right');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      interpretIndex = Math.max(interpretIndex - 1, 0);
      renderInterpretacion();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      interpretIndex = Math.min(interpretIndex + 1, cartasSeleccionadas.length - 1);
      renderInterpretacion();
    });
  }
}

// Mostrar pantalla de interpretación
btnInterpretar.addEventListener('click', () => {
  pantallaBaraja.style.display = 'none';
  pantallaTiradas.style.display = 'none';
  pantallaInterpretacion.style.display = 'block';
  btnInterpretar.classList.remove('visible');
  pageTitle.style.display = 'none';
  subtitle.style.display = 'none';
  footerHint.style.display = 'none';

  // Reset índice y render
  interpretIndex = 0;
  renderInterpretacion();
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

  // Volver al gradiente del menú
  document.body.classList.remove('tirada-1', 'tirada-2');
  document.body.classList.add('tirada-menu');

  // restaurar mazo y controles
  barajaCerrada.style.display = 'flex';
  barajaCerrada.style.opacity = 1;
  barajaCerrada.style.pointerEvents = 'auto';
  barajaCerrada.classList.remove('deck-final');
  barajaCerrada.classList.remove('barajando');
  btnBarajar.style.display = 'block';
  mesaCartas.classList.remove('active');
  mesaCartas.innerHTML = '';
  btnInterpretar.classList.remove('visible');
  cartasSeleccionadas = [];
  barajaActual = [];
  debugCarta.textContent = '';
  interpretIndex = 0;
  repartiendo = false;

  // Reset counter
  const cardCounter = document.getElementById('card-counter');
  if (cardCounter) {
    cardCounter.style.display = 'none';
    cardCounter.textContent = '';
  }

  // Título vuelve a Tarot
  pageTitle.textContent = '🔮 Tarot';
});

