import { CategoryOption } from './types';

export const RANDOM_CATEGORY_ID = 'random_mode';
export const AI_CATEGORY_ID = 'ai_generated';

const createWord = (word: string, hint: string) => ({ word, hint });

export const DEFAULT_CATEGORIES: CategoryOption[] = [
  {
    id: 'food',
    name: 'Comida',
    icon: '🍔',
    words: [
      createWord('Pizza', 'Tortuga'), // Ninja Turtles
      createWord('Sushi', 'California'), // California Roll
      createWord('Tacos', 'Martes'), // Taco Tuesday
      createWord('Paella', 'Domingo'), // Tradición
      createWord('Hamburguesa', 'Payaso'), // Ronald McDonald
      createWord('Espaguetis', 'Vagabundo'), // La Dama y el...
      createWord('Helado', 'Cerebro'), // Brain freeze
      createWord('Chocolate', 'Billete'), // Billete dorado (Charlie)
      createWord('Ensalada', 'César'), // Julio César
      createWord('Sopa', 'Mafalda'), // Odia la sopa
      createWord('Pan', 'Vino'), // Pan y Vino
      createWord('Queso', 'Foto'), // "Digan patata/queso"
      createWord('Manzana', 'Pecado'), // Adán y Eva
      createWord('Plátano', 'Mario'), // Mario Kart
      createWord('Huevo', 'Gallina'), // Dilema filosófico
      createWord('Café', 'Colombia'), // Origen famoso
      createWord('Cerveza', 'Rubia'), // Tipo de cerveza
      createWord('Vino', 'Sangre'), // Sangre de Cristo
      createWord('Agua', 'Marte'), // Hay agua en Marte
      createWord('Leche', 'Vía'), // Vía Láctea
      createWord('Arroz', 'Boda'), // Se tira en bodas
      createWord('Pollo', 'Calle'), // Cruzar la calle
      createWord('Pescado', 'Nemo'), // Buscando a Nemo
      createWord('Carne', 'Débil'), // La carne es débil
      createWord('Patatas', 'Sofá'), // Couch potato
      createWord('Tarta', 'Mentira'), // The cake is a lie (Portal)
      createWord('Galleta', 'Monstruo'), // Barrio Sésamo
      createWord('Miel', 'Oso'), // Winnie
      createWord('Sal', 'Sueldo'), // Origen de salario
      createWord('Pimienta', 'Beatles'), // Sgt Pepper
      createWord('Aceite', 'Codo'), // Hincar codos
      createWord('Limón', 'Coche'), // "Lemon" (coche defectuoso en inglés) o "Media"
      createWord('Naranja', 'Mecánica'), // Película
      createWord('Fresa', 'Amor'), // Fruta de la pasión/amor?
      createWord('Sandía', 'Dirty'), // Dirty Dancing
      createWord('Melón', 'Diesel'), // Vin Diesel
      createWord('Piña', 'Mar'), // Bob Esponja
      createWord('Coco', 'Chanel'), // Coco Chanel
      createWord('Kiwi', 'Pájaro'), // El animal
      createWord('Mango', 'Ropa'), // Mango (tienda)
      createWord('Pera', 'Limonera'), // La repera
      createWord('Nueces', 'Adán'), // Nuez de Adán
      createWord('Maíz', 'Cine'), // Palomitas
      createWord('Uvas', 'Ira'), // Libro
      createWord('Cebolla', 'Shrek'), // Capas
      createWord('Ajo', 'Victoria'), // Beckham
      createWord('Zanahoria', 'Bugs'), // Bugs Bunny
      createWord('Espinacas', 'Fuerza'), // Popeye
      createWord('Chicle', 'Globo'), // Hacer globos
      createWord('Mantequilla', 'Tango'), // Último tango
    ]
  },
  {
    id: 'places',
    name: 'Lugares',
    icon: '🌍',
    words: [
      createWord('Hospital', 'Anatomía'), // Grey's Anatomy
      createWord('Escuela', 'Rock'), // School of Rock
      createWord('Playa', 'Vigilantes'), // Baywatch
      createWord('Cine', 'Séptimo'), // Séptimo arte
      createWord('Aeropuerto', 'Amor'), // Love Actually intro
      createWord('Biblioteca', 'Silencio'), // Tópico
      createWord('Gimnasio', 'Pokémon'), // Gimnasio Pokemon
      createWord('Parque', 'Jurásico'), // Jurassic Park
      createWord('Restaurante', 'Universo'), // Guía del autoestopista
      createWord('Hotel', 'California'), // Canción Eagles
      createWord('Museo', 'Noche'), // Noche en el museo
      createWord('Estadio', 'Ola'), // Hacer la ola
      createWord('Farmacia', 'Guardia'), // De guardia
      createWord('Supermercado', 'Carro'), // Manolo Escobar
      createWord('Banco', 'Parque'), // Polisemia
      createWord('Iglesia', 'Domingo'), // Día
      createWord('Cementerio', 'Animales'), // Stephen King
      createWord('Cárcel', 'Roca'), // La Roca
      createWord('Bosque', 'Animado'), // Libro/Peli
      createWord('Desierto', 'Tabernas'), // Almería
      createWord('Montaña', 'Mahoma'), // Refrán
      createWord('Isla', 'Tesoro'), // Libro
      createWord('Castillo', 'Naipe'), // Castillo de naipes
      createWord('Puente', 'Río'), // Kwai
      createWord('Túnel', 'Luz'), // Al final del túnel
      createWord('Casino', 'Royale'), // Bond
      createWord('Discoteca', 'Fiebre'), // Fiebre del sábado
      createWord('Zoo', 'Ilegal'), // A veces
      createWord('Circo', 'Sol'), // Cirque du Soleil
      createWord('Teatro', 'Sueño'), // Sueño de una noche...
      createWord('Oficina', 'Papel'), // The Office
      createWord('Laboratorio', 'Dexter'), // Dibujos
      createWord('Puerto', 'Pirata'), // Puerto pirata
      createWord('Estación', 'Esperanza'), // Nombre
      createWord('Gasolinera', 'Precios'), // Tópico
      createWord('Jardín', 'Delicias'), // El Bosco
      createWord('Ascensor', 'Social'), // Ascensor social
      createWord('Balcón', 'Julieta'), // Romeo y Julieta
      createWord('Sótano', 'Miedo'), // Tópico terror
      createWord('Ático', 'Lujo'), // Penthouse
      createWord('Cocina', 'Infierno'), // Hell's Kitchen
      createWord('Baño', 'Psicosis'), // Escena ducha
      createWord('Dormitorio', 'Monstruo'), // Debajo de la cama
      createWord('Salón', 'Oeste'), // Saloon
      createWord('Garaje', 'Silicon'), // Origen startups
      createWord('Calle', 'Sésamo'), // Barrio Sésamo
      createWord('Carretera', 'Manta'), // Carretera y manta
      createWord('Pueblo', 'Duerme'), // Pueblo duerme (juego)
      createWord('Ciudad', 'Dios'), // Película
      createWord('Universo', 'Marvel'), // MCU
    ]
  },
  {
    id: 'animals',
    name: 'Animales',
    icon: '🦁',
    words: [
      createWord('Elefante', 'Dumbo'), // Orejas
      createWord('Perro', 'Pavlov'), // Reflejo condicionado
      createWord('Gato', 'Schrödinger'), // Vivo y muerto
      createWord('Tiburón', 'Spielberg'), // Jaws
      createWord('Pingüino', 'Batman'), // Villano
      createWord('León', 'Metro'), // MGM
      createWord('Tigre', 'Bengala'), // Fuego artificial
      createWord('Jirafa', 'Dalí'), // Jirafa ardiendo
      createWord('Mono', 'Espacio'), // Primeros astronautas
      createWord('Serpiente', 'Ikea'), // Peluches? No, manzana (pecado)
      createWord('Águila', 'Roja'), // Serie
      createWord('Delfín', 'Flipper'), // Serie
      createWord('Ballena', 'Jonas'), // Biblia
      createWord('Caballo', 'Troya'), // Madera
      createWord('Vaca', 'Sagrada'), // India
      createWord('Cerdo', 'Valiente'), // Babe
      createWord('Oveja', 'Negra'), // La distinta
      createWord('Lobo', 'WallStreet'), // Película
      createWord('Oso', 'Yogi'), // Dibujos
      createWord('Canguro', 'Jack'), // Canguro Jack
      createWord('Cocodrilo', 'Lacoste'), // Marca
      createWord('Tortuga', 'Ninja'), // TMNT
      createWord('Rana', 'Príncipe'), // Cuento
      createWord('Mariposa', 'Efecto'), // Teoría del caos
      createWord('Araña', 'Hombre'), // Spiderman
      createWord('Hormiga', 'Atómica'), // Dibujos
      createWord('Abeja', 'Maya'), // Dibujos
      createWord('Mosca', 'Sopa'), // Hay una mosca en mi sopa
      createWord('Mosquito', 'Tigre'), // Variedad
      createWord('Cebra', 'Paso'), // Paso de cebra
      createWord('Panda', 'KungFu'), // Po
      createWord('Koala', 'Eucalipto'), // Comida única
      createWord('Zorro', 'Máscara'), // El Zorro
      createWord('Búho', 'Carta'), // Harry Potter
      createWord('Murciélago', 'Covid'), // Origen teoría
      createWord('Camello', 'Rey'), // Reyes Magos
      createWord('Loro', 'Pirata'), // Hombro
      createWord('Cisne', 'Negro'), // Cisne Negro
      createWord('Pato', 'Lucas'), // Looney Tunes
      createWord('Gallo', 'Claudio'), // Looney Tunes
      createWord('Gallina', 'Piel'), // Piel de gallina
      createWord('Pavo', 'Navidad'), // Cena
      createWord('Ratón', 'Pérez'), // Dientes
      createWord('Rata', 'Cocinero'), // Ratatouille
      createWord('Conejo', 'Suerte'), // Pata de conejo
      createWord('Toro', 'Sentado'), // Indio
      createWord('Burro', 'Shrek'), // Personaje
      createWord('Cabra', 'Legión'), // Mascota
      createWord('Dragón', 'Bolas'), // Dragon Ball
      createWord('Unicornio', 'Empresa'), // Startup > 1B
    ]
  },
  {
    id: 'objects',
    name: 'Objetos',
    icon: '💡',
    words: [
      createWord('Teléfono', 'Roto'), // Juego
      createWord('Silla', 'Juego'), // Juego de las sillas
      createWord('Reloj', 'Arena'), // Tiempo
      createWord('Llave', 'Judo'), // Arte marcial
      createWord('Libro', 'Selva'), // El libro de la selva
      createWord('Cama', 'Elástica'), // Saltar
      createWord('Mesa', 'Redonda'), // Arturo
      createWord('Cuchillo', 'Mantequilla'), // Corta poco
      createWord('Tenedor', 'ToyStory'), // Forky
      createWord('Cuchara', 'Matrix'), // No hay cuchara
      createWord('Vaso', 'Medio'), // Optimismo
      createWord('Plato', 'Volador'), // OVNI
      createWord('Ordenador', 'Manzana'), // Apple
      createWord('Pantalla', 'Azul'), // Error Windows
      createWord('Ratón', 'Mickey'), // Disney
      createWord('Lápiz', 'Ikea'), // Pequeños
      createWord('Bolígrafo', 'Bic'), // Naranja o cristal
      createWord('Goma', 'Pelo'), // Accesorio
      createWord('Papel', 'Tijera'), // Piedra, papel...
      createWord('Tijeras', 'Eduardo'), // Manostijeras
      createWord('Mochila', 'Dora'), // Exploradora
      createWord('Gafas', 'Harry'), // Potter
      createWord('Espejo', 'Negro'), // Black Mirror
      createWord('Peine', 'Calvo'), // Inútil
      createWord('Cepillo', 'Dientes'), // Higiene
      createWord('Grapadora', 'Robo'), // Office Space (Milton) o Disparo
      createWord('Clip', 'MacGyver'), // Herramienta universal
      createWord('Calculadora', 'Casio'), // Reloj/Calculadora
      createWord('Calendario', 'Pirelli'), // Fotos
      createWord('Mapa', 'Dora'), // Soy el mapa
      createWord('Brújula', 'Sparrow'), // Jack Sparrow
      createWord('Linterna', 'Verde'), // Superhéroe
      createWord('Paraguas', 'Mary'), // Poppins
      createWord('Maleta', 'Pulp'), // Pulp Fiction (contenido brillante)
      createWord('Cartera', 'Ministro'), // Cargo
      createWord('Moneda', 'Cara'), // Cruz
      createWord('Billete', 'Avión'), // Viaje
      createWord('Tarjeta', 'Roja'), // Fútbol
      createWord('Anillo', 'Gollum'), // Mi tesoro
      createWord('Collar', 'Perlas'), // Marge Simpson
      createWord('Pulsera', 'Todo'), // Todo Incluido
      createWord('Botella', 'Mensaje'), // Náufrago
      createWord('Lata', 'Sopa'), // Warhol
      createWord('Caja', 'Gato'), // Schrödinger
      createWord('Bolsa', 'Valores'), // Wall Street
      createWord('Saco', 'Papá'), // Noel
      createWord('Pañuelo', 'Llorar'), // Moco
      createWord('Toalla', 'Portugal'), // Clásico
      createWord('Jabón', 'Club'), // Club de la lucha
      createWord('Esponja', 'Bob'), // Pantalones cuadrados
    ]
  },
  {
    id: 'professions',
    name: 'Profesiones',
    icon: '💼',
    words: [
      createWord('Médico', 'House'), // Serie
      createWord('Bombero', 'Torero'), // Bombero Torero
      createWord('Policía', 'Sting'), // The Police
      createWord('Profesor', 'X'), // X-Men
      createWord('Cocinero', 'Rata'), // Ratatouille
      createWord('Abogado', 'Diablo'), // Pactar
      createWord('Juez', 'Dredd'), // Yo soy la ley
      createWord('Piloto', 'Automático'), // Película
      createWord('Astronauta', 'Mono'), // Primeros
      createWord('Carpintero', 'José'), // Biblia
      createWord('Fontanero', 'Mario'), // Nintendo
      createWord('Electricista', 'AC/DC'), // Grupo
      createWord('Mecánico', 'Naranja'), // La Naranja Mecánica
      createWord('Peluquero', 'Sweeney'), // Todd
      createWord('Actor', 'Bob'), // Actor secundario Bob
      createWord('Cantante', 'Ducha'), // Amateur
      createWord('Pintor', 'Brocha'), // Gorda
      createWord('Escritor', 'Fantasma'), // Ghost writer
      createWord('Periodista', 'Kent'), // Clark Kent
      createWord('Fotógrafo', 'Araña'), // Peter Parker
      createWord('Camarero', 'Bote'), // Propina
      createWord('Granjero', 'Busca'), // Esposa
      createWord('Pescador', 'Marlin'), // Pez
      createWord('Soldado', 'Ryan'), // Salvar al soldado
      createWord('Payaso', 'IT'), // Stephen King
      createWord('Mago', 'Oz'), // Película
      createWord('Detective', 'Conan'), // Anime
      createWord('Espía', 'Austin'), // Powers
      createWord('Pirata', 'Sombrero'), // Luffy
      createWord('Vaquero', 'Espacial'), // Cowboy Bebop
      createWord('Ninja', 'Fruta'), // Fruit Ninja
      createWord('Samurái', 'Jack'), // Cartoon Network
      createWord('Vikingo', 'Abeja'), // Vickie
      createWord('Caballero', 'Zodiaco'), // Serie
      createWord('Rey', 'Burger'), // King
      createWord('Reina', 'Freddie'), // Queen
      createWord('Princesa', 'Chicle'), // Hora de aventuras
      createWord('Presidente', 'Lincoln'), // Sombrero
      createWord('Albañil', 'Escote'), // Tópico
      createWord('Jardinero', 'Fiel'), // El jardinero fiel
      createWord('Carnicero', 'Gangs'), // of New York
      createWord('Panadero', 'Barrio'), // Barrio Sésamo (Panadero)
      createWord('Sastre', 'Panamá'), // El sastre de Panamá
      createWord('Zapatero', 'Prodigioso'), // Cuento
      createWord('Relojero', 'Conejo'), // Alicia
      createWord('Minero', 'Minecraft'), // Juego
      createWord('Leñador', 'Dexter'), // Final serie
      createWord('Cazador', 'Bambi'), // Tristeza
      createWord('Cura', 'Exorcista'), // Película
      createWord('Monja', 'Hábito'), // El hábito no hace al monje
    ]
  },
  {
    id: 'sports',
    name: 'Deportes',
    icon: '⚽',
    words: [
      createWord('Fútbol', 'Oliver'), // y Benji
      createWord('Baloncesto', 'Space'), // Jam
      createWord('Tenis', 'Codo'), // Lesión
      createWord('Natación', 'Tiburón'), // Miedo
      createWord('Atletismo', 'Forrest'), // Gump
      createWord('Ciclismo', 'E.T.'), // Volar
      createWord('Boxeo', 'Rocky'), // Balboa
      createWord('Golf', 'Mini'), // Minigolf
      createWord('Voleibol', 'Wilson'), // Náufrago
      createWord('Béisbol', 'Bate'), // American Psycho
      createWord('Rugby', 'Haka'), // Baile
      createWord('Hockey', 'Máscara'), // Jason Voorhees
      createWord('Esquí', 'Flanders'), // Estúpido y sensual
      createWord('Surf', 'Plata'), // Silver Surfer
      createWord('Kárate', 'Kid'), // Película
      createWord('Judo', 'Putin'), // Practicante
      createWord('Gimnasia', 'Rítmica'), // Cinta
      createWord('Escalada', 'Roca'), // Dwayne Johnson
      createWord('Patinaje', 'Barbie'), // Patinadora
      createWord('Bádminton', 'Mosquito'), // Matar
      createWord('Ping-Pong', 'Gump'), // Forrest
      createWord('Ajedrez', 'Gambito'), // Serie
      createWord('Dardos', 'Bar'), // Deporte de bar
      createWord('Bolos', 'Lebowski'), // El Nota
      createWord('Billar', 'Color'), // Del dinero
      createWord('Póker', 'Mentiroso'), // Farol
      createWord('Dominó', 'Efecto'), // Caída
      createWord('Parchís', 'Puente'), // Comer una
      createWord('Oca', 'Tiro'), // Y tiro porque me toca
      createWord('Monopoly', 'Amistad'), // Rompe amistades
      createWord('Risk', 'Australia'), // Estrategia
      createWord('Cluedo', 'Candelabro'), // Arma
      createWord('Scrabble', 'Letras'), // Puntos
      createWord('Bingo', 'Señora'), // Tópico
      createWord('Lotería', 'Calvo'), // Navidad
      createWord('Casino', 'DeNiro'), // Película
      createWord('Apuesta', 'Pascal'), // Filosofía
      createWord('Carrera', 'Autos'), // Locos
      createWord('Maratón', 'Filípides'), // Historia
      createWord('Triatlón', 'Ironman'), // Prueba
      createWord('Olimpiadas', 'Anillos'), // Sonic
      createWord('Mundial', 'Waka'), // Shakira
      createWord('Champions', 'Himno'), // La la la
      createWord('Liga', 'Justicia'), // DC
      createWord('Copa', 'Pistón'), // Cars
      createWord('Medalla', 'Muttley'), // Patán
      createWord('Trofeo', 'Caza'), // Depredador
      createWord('Récord', 'Guinness'), // Cerveza
      createWord('Árbitro', 'Comprado'), // Queja
      createWord('Entrenador', 'Pokemon'), // Ash
    ]
  },
  {
    id: 'characters',
    name: 'Personajes',
    icon: '🎭',
    words: [
      createWord('Batman', 'Cueva'),
      createWord('Superman', 'Gafas'), // Disfraz
      createWord('Spiderman', 'Tío'), // Ben
      createWord('Joker', 'Carta'),
      createWord('Harry Potter', 'Rayo'), // Cicatriz
      createWord('Voldemort', 'Nariz'), // Sin nariz
      createWord('Darth Vader', 'Padre'),
      createWord('Yoda', 'Revés'), // Hablar
      createWord('Mario', 'Fontanero'),
      createWord('Luigi', 'Verde'),
      createWord('Sonic', 'Erizo'),
      createWord('Pikachu', 'Ketchup'), // Ash Ketchum
      createWord('Goku', 'Bola'),
      createWord('Vegeta', 'Príncipe'),
      createWord('Naruto', 'Relleno'), // Anime
      createWord('Luffy', 'Goma'),
      createWord('Bob Esponja', 'Cangreburguer'),
      createWord('Patrick', 'Estrella'),
      createWord('Homer', 'Rosquilla'),
      createWord('Bart', 'Pizarra'),
      createWord('Mickey', 'Guantes'),
      createWord('Donald', 'Pantalones'), // No lleva
      createWord('Goofy', 'Perro'),
      createWord('Shrek', 'Cebolla'),
      createWord('Fiona', 'Ogros'),
      createWord('Elsa', 'Hielo'),
      createWord('Ana Frozen', 'hermana'), // Love is an open door
      createWord('Olaf', 'Verano'),
      createWord('Simba', 'Ciclo'),
      createWord('Aladdín', 'Alfombra'),
      createWord('Genio', 'Lámpara'),
      createWord('Peter Pan', 'Sombra'),
      createWord('Campanilla', 'Polvo'), // De hadas
      createWord('Capitán Garfio', 'Cocodrilo'),
      createWord('Alicia', 'País'),
      createWord('Sombrerero', 'Loco'),
      createWord('Gato Cheshire', 'Sonrisa'),
      createWord('Sherlock', 'Elemental'),
      createWord('Watson', 'Médico'),
      createWord('Drácula', 'Espejo'),
      createWord('Frankenstein', 'Tornillos'),
      createWord('Hombre Lobo', 'Plata'),
      createWord('Momia', 'Papel'),
      createWord('Zombi', 'Cerebro'),
      createWord('Bruja', 'Verruga'),
      createWord('Fantasma', 'Sábana'),
      createWord('Alien', 'Octavo'), // Pasajero
      createWord('Depredador', 'Rastas'),
      createWord('Terminator', 'Volveré'),
      createWord('Rambo', 'Cinta'),
    ]
  }
];