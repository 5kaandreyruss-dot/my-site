/* Окружающий мир, 1 класс. Тот же формат, что у остальных предметов-тестов. */

const WORLD1_MOD = [

{ n:"Я и моя семья",
  explain:"Семья — самые близкие люди: мама, папа, братья, сёстры, бабушки и дедушки. Важно заботиться друг о друге.",
  svg:`<svg viewBox="0 0 240 150" width="240">
  <path d="M20 60L120 10L220 60" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="120" y="35" font-size="20" text-anchor="middle">❤️</text>
  <g stroke="#2B2A26" stroke-width="2">
  <circle cx="50" cy="90" r="14" fill="#3B6EA5"/><rect x="38" y="104" width="24" height="36" rx="8" fill="#3B6EA5"/>
  <circle cx="100" cy="85" r="16" fill="#D6524F"/><rect x="86" y="101" width="28" height="42" rx="9" fill="#D6524F"/>
  <circle cx="150" cy="95" r="12" fill="#5F9A5C"/><rect x="140" y="107" width="20" height="30" rx="7" fill="#5F9A5C"/>
  <circle cx="192" cy="100" r="10" fill="#E3922E"/><rect x="184" y="110" width="16" height="24" rx="6" fill="#E3922E"/>
  </g>
  </svg>`,
  bank:[
    {p:"Кто обычно самый близкий человек для ребёнка?",opts:["Члены семьи","Незнакомые люди","Соседи по улице"],correct:0},
    {p:"Как зовут маму мамы или маму папы?",opts:["Бабушка","Тётя","Сестра"],correct:0},
    {p:"Как зовут папу мамы или папу папы?",opts:["Дедушка","Дядя","Брат"],correct:0},
    {p:"Что важно делать в семье друг для друга?",opts:["Заботиться и помогать","Ссориться","Ничего не делать"],correct:0},
    {p:"Как называют детей одних родителей?",opts:["Братья и сёстры","Соседи","Друзья"],correct:0}
  ]},

{ n:"Живая и неживая природа",
  explain:"Живая природа растёт и дышит: растения, животные, люди. Неживая природа не растёт: солнце, камни, вода, воздух.",
  svg:`<svg viewBox="0 0 240 150" width="240">
  <line x1="120" y1="10" x2="120" y2="140" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="60" y="30" font-size="13" text-anchor="middle" fill="#3F7A3D" font-weight="700">живая</text>
  <text x="180" y="30" font-size="13" text-anchor="middle" fill="#736C5E" font-weight="700">неживая</text>
  <text x="45" y="90" font-size="30">🌳</text>
  <text x="80" y="110" font-size="26">🐦</text>
  <text x="160" y="90" font-size="30">🪨</text>
  <text x="195" y="115" font-size="26">☀️</text>
  </svg>`,
  bank:[
    {p:"🐦",em:1,opts:["Живая природа","Неживая природа"],correct:0},
    {p:"🪨",em:1,opts:["Живая природа","Неживая природа"],correct:1},
    {p:"🌳",em:1,opts:["Живая природа","Неживая природа"],correct:0},
    {p:"☀️",em:1,opts:["Живая природа","Неживая природа"],correct:1},
    {p:"🐕",em:1,opts:["Живая природа","Неживая природа"],correct:0},
    {p:"⛰️",em:1,opts:["Живая природа","Неживая природа"],correct:1}
  ]},

{ n:"Времена года",
  explain:"В году четыре времени года, и они всегда сменяют друг друга в одном и том же порядке: зима, весна, лето, осень.",
  svg:`<svg viewBox="0 0 280 130" width="280">
  <line x1="0" y1="110" x2="280" y2="110" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="35" cy="60" r="30" fill="none" stroke="#3B6EA5" stroke-width="2" stroke-dasharray="3 4"/>
  <text x="35" y="70" font-size="26" text-anchor="middle">❄️</text>
  <text x="35" y="105" font-size="11" text-anchor="middle" fill="#2B2A26">зима</text>
  <circle cx="105" cy="60" r="30" fill="none" stroke="#5F9A5C" stroke-width="2" stroke-dasharray="3 4"/>
  <text x="105" y="70" font-size="26" text-anchor="middle">🌱</text>
  <text x="105" y="105" font-size="11" text-anchor="middle" fill="#2B2A26">весна</text>
  <circle cx="175" cy="60" r="30" fill="none" stroke="#FFDE59" stroke-width="2" stroke-dasharray="3 4"/>
  <text x="175" y="70" font-size="26" text-anchor="middle">☀️</text>
  <text x="175" y="105" font-size="11" text-anchor="middle" fill="#2B2A26">лето</text>
  <circle cx="245" cy="60" r="30" fill="none" stroke="#E3922E" stroke-width="2" stroke-dasharray="3 4"/>
  <text x="245" y="70" font-size="26" text-anchor="middle">🍂</text>
  <text x="245" y="105" font-size="11" text-anchor="middle" fill="#2B2A26">осень</text>
  </svg>`,
  bank:[
    {p:"Когда на улице лежит снег?",opts:["Зимой","Летом","Осенью"],correct:0},
    {p:"Когда тает снег и появляется первая трава?",opts:["Весной","Зимой","Летом"],correct:0},
    {p:"Когда на улице теплее всего?",opts:["Летом","Зимой","Осенью"],correct:0},
    {p:"Когда листья на деревьях желтеют?",opts:["Осенью","Летом","Весной"],correct:0},
    {p:"Какое время года идёт сразу после зимы?",opts:["Весна","Лето","Осень"],correct:0},
    {p:"Какое время года идёт сразу после лета?",opts:["Осень","Зима","Весна"],correct:0}
  ]},

{ n:"Части суток",
  explain:"Сутки делятся на четыре части: утро, день, вечер, ночь.",
  svg:`<svg viewBox="0 0 280 120" width="280">
  <line x1="0" y1="100" x2="280" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <path d="M10 90 Q140 10 270 90" fill="none" stroke="#E3922E" stroke-width="2" stroke-dasharray="3 5"/>
  <text x="35" y="50" font-size="24" text-anchor="middle">🌅</text>
  <text x="35" y="95" font-size="11" text-anchor="middle" fill="#2B2A26">утро</text>
  <text x="105" y="45" font-size="24" text-anchor="middle">☀️</text>
  <text x="105" y="95" font-size="11" text-anchor="middle" fill="#2B2A26">день</text>
  <text x="175" y="50" font-size="24" text-anchor="middle">🌇</text>
  <text x="175" y="95" font-size="11" text-anchor="middle" fill="#2B2A26">вечер</text>
  <text x="245" y="45" font-size="24" text-anchor="middle">🌙</text>
  <text x="245" y="95" font-size="11" text-anchor="middle" fill="#2B2A26">ночь</text>
  </svg>`,
  bank:[
    {p:"Когда мы просыпаемся и завтракаем?",opts:["Утром","Ночью","Вечером"],correct:0},
    {p:"Когда чаще всего бывают уроки в школе?",opts:["Днём","Ночью","В сумерках"],correct:0},
    {p:"Когда обычно ужинают и готовятся ко сну?",opts:["Вечером","Утром","Днём"],correct:0},
    {p:"Когда люди обычно спят?",opts:["Ночью","Днём","Утром"],correct:0},
    {p:"Какая часть суток идёт после утра?",opts:["День","Ночь","Вечер"],correct:0}
  ]},

{ n:"Дикие и домашние животные",
  explain:"Домашних животных выращивает и кормит человек. Дикие животные сами находят себе еду в природе.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <line x1="120" y1="10" x2="120" y2="130" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M30 60L60 30L90 60" fill="none" stroke="#B96F16" stroke-width="2"/>
  <rect x="40" y="60" width="40" height="40" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
  <text x="60" y="90" font-size="22" text-anchor="middle">🐄</text>
  <path d="M150 100c0-30 10-50 30-60 20 10 30 30 30 60z" fill="#5F9A5C" opacity="0.85"/>
  <text x="180" y="90" font-size="22" text-anchor="middle">🦊</text>
  <text x="60" y="125" font-size="11" text-anchor="middle" fill="#2B2A26">домашние</text>
  <text x="180" y="125" font-size="11" text-anchor="middle" fill="#2B2A26">дикие</text>
  </svg>`,
  bank:[
    {p:"🐄",em:1,opts:["Домашнее","Дикое"],correct:0},
    {p:"🐻",em:1,opts:["Домашнее","Дикое"],correct:1},
    {p:"🐕",em:1,opts:["Домашнее","Дикое"],correct:0},
    {p:"🦊",em:1,opts:["Домашнее","Дикое"],correct:1},
    {p:"🐑",em:1,opts:["Домашнее","Дикое"],correct:0},
    {p:"🐺",em:1,opts:["Домашнее","Дикое"],correct:1}
  ]},

{ n:"Растения вокруг нас",
  explain:"У большинства растений есть корень, стебель, листья и цветок. Деревья, кусты и травы — всё это растения.",
  svg:`<svg viewBox="0 0 180 190" width="180">
  <line x1="10" y1="150" x2="170" y2="150" stroke="#B96F16" stroke-width="2" stroke-dasharray="4 4"/>
  <circle cx="90" cy="55" r="14" fill="#D6524F"/>
  <circle cx="72" cy="45" r="11" fill="#E3922E"/>
  <circle cx="108" cy="45" r="11" fill="#E3922E"/>
  <circle cx="90" cy="40" r="8" fill="#FFDE59"/>
  <line x1="90" y1="63" x2="90" y2="148" stroke="#3F7A3D" stroke-width="6" stroke-linecap="round"/>
  <path d="M90 95c-20-4-30 8-34 20 16 6 28-4 34-20z" fill="#5F9A5C"/>
  <path d="M90 115c20-4 30 8 34 20-16 6-28-4-34-20z" fill="#5F9A5C"/>
  <path d="M90 150c-6 12-4 26 2 34M90 150c6 12 4 26-2 34" stroke="#B96F16" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,
  bank:[
    {p:"Какая часть растения находится под землёй?",opts:["Корень","Лист","Цветок"],correct:0},
    {p:"🌳",em:1,opts:["Это растение","Это не растение"],correct:0},
    {p:"🌸",em:1,opts:["Это растение","Это не растение"],correct:0},
    {p:"🚗",em:1,opts:["Это не растение","Это растение"],correct:0},
    {p:"Что нужно растению, чтобы расти?",opts:["Вода и свет","Только темнота","Ничего не нужно"],correct:0}
  ]},

{ n:"Правила поведения в школе",
  explain:"В школе важно соблюдать правила: слушать учителя, не перебивать, поднимать руку перед ответом, быть вежливым с другими.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <rect x="30" y="90" width="140" height="14" rx="4" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <line x1="45" y1="104" x2="45" y2="140" stroke="#2B2A26" stroke-width="4"/>
  <line x1="155" y1="104" x2="155" y2="140" stroke="#2B2A26" stroke-width="4"/>
  <circle cx="100" cy="55" r="18" fill="#FFDE59" stroke="#2B2A26" stroke-width="2"/>
  <rect x="86" y="73" width="28" height="30" rx="8" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <line x1="114" y1="80" x2="128" y2="45" stroke="#3B6EA5" stroke-width="6" stroke-linecap="round"/>
  <circle cx="128" cy="42" r="5" fill="#FFDE59" stroke="#2B2A26" stroke-width="1.5"/>
  </svg>`,
  bank:[
    {p:"Что нужно сделать, если хочешь ответить на уроке?",opts:["Поднять руку","Крикнуть с места","Встать и уйти"],correct:0},
    {p:"Как нужно вести себя, когда говорит учитель?",opts:["Слушать внимательно","Разговаривать с соседом","Играть в телефон"],correct:0},
    {p:"Что нужно сказать, если случайно толкнул одноклассника?",opts:["Извините","Ничего не говорить","Обидеться самому"],correct:0},
    {p:"Как правильно вести себя на перемене?",opts:["Спокойно играть, не толкаться","Бегать и толкать всех","Кричать громко"],correct:0}
  ]},

{ n:"Безопасность дома",
  explain:"Дома важно быть осторожным: не трогать острые предметы, не включать плиту без взрослых, не открывать дверь незнакомцам.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <path d="M20 80L100 20L180 80" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <rect x="35" y="80" width="130" height="70" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
  <rect x="90" y="105" width="24" height="24" rx="3" fill="#FFFEF8" stroke="#A83836" stroke-width="2"/>
  <circle cx="98" cy="117" r="2" fill="#A83836"/><circle cx="106" cy="117" r="2" fill="#A83836"/>
  <polygon points="150,95 165,120 135,120" fill="#FFDE59" stroke="#A83836" stroke-width="2"/>
  <text x="150" y="116" font-size="13" text-anchor="middle" font-weight="700" fill="#A83836">!</text>
  </svg>`,
  bank:[
    {p:"Можно ли ребёнку одному включать плиту?",opts:["Нет, только со взрослыми","Да, всегда можно","Да, если очень хочется"],correct:0},
    {p:"Что делать, если в дверь звонит незнакомый человек?",opts:["Не открывать и позвать взрослого","Сразу открыть дверь","Впустить, если вежливо просит"],correct:0},
    {p:"Можно ли играть с ножницами без присмотра взрослых?",opts:["Нет, это опасно","Да, если аккуратно","Да, всегда"],correct:0},
    {p:"Что делать, если увидел дома розетку с проводом без изоляции?",opts:["Не трогать и сказать взрослым","Потрогать пальцем","Засунуть туда предмет"],correct:0}
  ]},

{ n:"Мой город и моя страна",
  explain:"Каждый человек живёт в определённом городе или селе, а город находится в стране. Наша страна называется Россия, а столица России — Москва.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <path d="M20 40 Q60 20 100 40 T180 45 L175 130 Q100 150 30 125 Z" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="90" cy="80" r="6" fill="#D6524F"/>
  <line x1="90" y1="80" x2="90" y2="40" stroke="#2B2A26" stroke-width="2"/>
  <rect x="90" y="20" width="26" height="18" fill="#3B6EA5"/>
  <rect x="90" y="20" width="26" height="6" fill="#FFFEF8"/>
  <rect x="90" y="32" width="26" height="6" fill="#D6524F"/>
  </svg>`,
  bank:[
    {p:"Как называется наша страна?",opts:["Россия","Франция","Китай"],correct:0},
    {p:"Как называется столица России?",opts:["Москва","Санкт-Петербург","Казань"],correct:0},
    {p:"Что больше — город или страна?",opts:["Страна","Город","Они одинаковые"],correct:0},
    {p:"Как называют место, где человек родился и живёт с детства?",opts:["Родина","Чужбина","Гостиница"],correct:0}
  ]},

{ n:"Профессии людей",
  explain:"Люди разных профессий помогают друг другу: врач лечит, учитель учит, повар готовит еду, водитель водит транспорт.",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <circle cx="40" cy="40" r="28" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="40" y="50" font-size="26" text-anchor="middle">👩‍⚕️</text>
  <circle cx="120" cy="40" r="28" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="120" y="50" font-size="26" text-anchor="middle">👨‍🏫</text>
  <circle cx="200" cy="40" r="28" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="200" y="50" font-size="26" text-anchor="middle">👨‍🍳</text>
  <circle cx="80" cy="100" r="28" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="80" y="110" font-size="26" text-anchor="middle">🧑‍🚒</text>
  <circle cx="160" cy="100" r="28" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="160" y="110" font-size="26" text-anchor="middle">👷</text>
  </svg>`,
  bank:[
    {p:"Кто лечит людей?",opts:["Врач","Повар","Водитель"],correct:0},
    {p:"Кто учит детей в школе?",opts:["Учитель","Врач","Строитель"],correct:0},
    {p:"Кто готовит еду в кафе?",opts:["Повар","Учитель","Пожарный"],correct:0},
    {p:"Кто тушит пожары?",opts:["Пожарный","Повар","Учитель"],correct:0},
    {p:"Кто строит дома?",opts:["Строитель","Врач","Продавец"],correct:0}
  ]},

{ n:"Транспорт",
  explain:"Транспорт бывает наземный (машина, автобус), водный (корабль, лодка) и воздушный (самолёт, вертолёт).",
  svg:`<svg viewBox="0 0 240 150" width="240">
  <rect x="0" y="0" width="240" height="45" fill="#DCE9F6"/>
  <rect x="0" y="45" width="240" height="55" fill="#FFFEF8"/>
  <rect x="0" y="100" width="240" height="50" fill="#3E8F86"/>
  <text x="60" y="30" font-size="24" text-anchor="middle">✈️</text>
  <text x="180" y="30" font-size="24" text-anchor="middle">🚁</text>
  <text x="60" y="80" font-size="24" text-anchor="middle">🚗</text>
  <text x="180" y="80" font-size="24" text-anchor="middle">🚌</text>
  <text x="60" y="132" font-size="24" text-anchor="middle">🚢</text>
  <text x="180" y="132" font-size="24" text-anchor="middle">⛵</text>
  </svg>`,
  bank:[
    {p:"🚗",em:1,opts:["Наземный транспорт","Водный транспорт","Воздушный транспорт"],correct:0},
    {p:"✈️",em:1,opts:["Воздушный транспорт","Наземный транспорт","Водный транспорт"],correct:0},
    {p:"🚢",em:1,opts:["Водный транспорт","Наземный транспорт","Воздушный транспорт"],correct:0},
    {p:"🚌",em:1,opts:["Наземный транспорт","Водный транспорт","Воздушный транспорт"],correct:0},
    {p:"🚁",em:1,opts:["Воздушный транспорт","Наземный транспорт","Водный транспорт"],correct:0}
  ]},

{ n:"Правила дорожного движения",
  explain:"Переходить дорогу нужно по пешеходному переходу и на зелёный сигнал светофора. Красный свет светофора означает «стой».",
  svg:`<svg viewBox="0 0 180 180" width="180">
  <rect x="10" y="110" width="160" height="70" fill="#736C5E" opacity="0.25"/>
  <g stroke="#FFFEF8" stroke-width="8">
  <line x1="20" y1="120" x2="20" y2="170"/>
  <line x1="45" y1="120" x2="45" y2="170"/>
  <line x1="70" y1="120" x2="70" y2="170"/>
  <line x1="95" y1="120" x2="95" y2="170"/>
  <line x1="120" y1="120" x2="120" y2="170"/>
  <line x1="145" y1="120" x2="145" y2="170"/>
  </g>
  <rect x="70" y="10" width="40" height="90" rx="8" fill="#2B2A26"/>
  <circle cx="90" cy="30" r="12" fill="#D6524F"/>
  <circle cx="90" cy="55" r="12" fill="#FFDE59"/>
  <circle cx="90" cy="80" r="12" fill="#5F9A5C"/>
  </svg>`,
  bank:[
    {p:"Где нужно переходить дорогу?",opts:["По пешеходному переходу","Где угодно","Между машинами"],correct:0},
    {p:"На какой сигнал светофора можно идти?",opts:["На зелёный","На красный","На жёлтый"],correct:0},
    {p:"Что означает красный сигнал светофора?",opts:["Стой","Иди","Беги быстрее"],correct:0},
    {p:"Перед переходом дороги нужно",opts:["Посмотреть по сторонам","Сразу бежать","Закрыть глаза"],correct:0}
  ]},

{ n:"Части тела человека",
  explain:"У человека есть голова, туловище, руки и ноги. Органы чувств помогают узнавать мир: глаза видят, уши слышат, нос чувствует запах.",
  svg:`<svg viewBox="0 0 160 220" width="160">
  <circle cx="80" cy="40" r="30" fill="#FFDE59" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="70" cy="35" r="3" fill="#2B2A26"/><circle cx="90" cy="35" r="3" fill="#2B2A26"/>
  <path d="M68 50q12 8 24 0" stroke="#2B2A26" stroke-width="2" fill="none"/>
  <rect x="55" y="70" width="50" height="70" rx="14" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <line x1="55" y1="85" x2="20" y2="120" stroke="#3B6EA5" stroke-width="10" stroke-linecap="round"/>
  <line x1="105" y1="85" x2="140" y2="120" stroke="#3B6EA5" stroke-width="10" stroke-linecap="round"/>
  <line x1="65" y1="140" x2="55" y2="205" stroke="#284D77" stroke-width="12" stroke-linecap="round"/>
  <line x1="95" y1="140" x2="105" y2="205" stroke="#284D77" stroke-width="12" stroke-linecap="round"/>
  <text x="130" y="45" font-size="8" fill="#2B2A26">голова</text>
  <text x="115" y="105" font-size="10" fill="#2B2A26">руки</text>
  <text x="115" y="180" font-size="10" fill="#2B2A26">ноги</text>
  </svg>`,
  bank:[
    {p:"Чем мы видим?",opts:["Глазами","Ушами","Носом"],correct:0},
    {p:"Чем мы слышим?",opts:["Ушами","Глазами","Языком"],correct:0},
    {p:"Чем мы чувствуем запах?",opts:["Носом","Ушами","Руками"],correct:0},
    {p:"Чем мы ощущаем вкус еды?",opts:["Языком","Носом","Ушами"],correct:0}
  ]}

];
