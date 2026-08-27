/* Логика, 1 класс. Упрощённый уровень по сравнению со 2 классом. */

const LOGIC1_MOD = [

{ n:"Найди пару",
  explain:"Найди предмет, который подходит к первому по смыслу или по группе.",
  svg:`<svg viewBox="0 0 200 90" width="200">
  <circle cx="40" cy="45" r="18" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="160" cy="45" r="18" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <line x1="58" y1="45" x2="142" y2="45" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="40" y="80" font-size="10" text-anchor="middle" fill="#736C5E">пара</text>
  <text x="160" y="80" font-size="10" text-anchor="middle" fill="#736C5E">пара</text>
  </svg>`,
  bank:[
    {p:"🧦 подходит к",opts:["🧦","🍎","🚗"],correct:0},
    {p:"☂️ нужен, когда идёт",opts:["Дождь","Солнце","Снег"],correct:0},
    {p:"🔑 нужен, чтобы открыть",opts:["Дверь","Небо","Облако"],correct:0},
    {p:"🖊️ нужна, чтобы",opts:["Писать","Летать","Плавать"],correct:0},
    {p:"🧸 это какая вещь?",opts:["Игрушка","Еда","Одежда"],correct:0}
  ]},

{ n:"Найди лишнее",
  explain:"В каждой группе есть один предмет, который не подходит к остальным.",
  svg:`<svg viewBox="0 0 200 90" width="200">
  <circle cx="35" cy="45" r="16" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <circle cx="85" cy="45" r="16" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <rect x="118" y="27" width="34" height="34" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="185" cy="45" r="16" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"🍎 🍌 🍊 🚗 — что лишнее?",opts:["🍎","🍌","🍊","🚗"],correct:3},
    {p:"🐶 🐱 🐦 🪑 — что лишнее?",opts:["🐶","🐱","🐦","🪑"],correct:3},
    {p:"⚽ 🏀 🍕 🎾 — что лишнее?",opts:["⚽","🏀","🍕","🎾"],correct:2},
    {p:"👕 👖 🧦 🍌 — что лишнее?",opts:["👕","👖","🧦","🍌"],correct:3},
    {p:"🚗 🚕 🚌 🐘 — что лишнее?",opts:["🚗","🚕","🚌","🐘"],correct:3},
    {p:"🌹 🌷 🌻 🥕 — что лишнее?",opts:["🌹","🌷","🌻","🥕"],correct:3}
  ]},

{ n:"Сортировка по признаку",
  explain:"Предметы можно объединять в группы по цвету, форме или размеру.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <circle cx="60" cy="55" r="50" fill="#D6524F" opacity="0.12" stroke="#A83836" stroke-width="2" stroke-dasharray="3 4"/>
  <circle cx="40" cy="45" r="9" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="70" cy="55" r="9" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="55" cy="75" r="9" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="165" cy="55" r="50" fill="#3B6EA5" opacity="0.12" stroke="#284D77" stroke-width="2" stroke-dasharray="3 4"/>
  <circle cx="145" cy="45" r="9" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="175" cy="55" r="9" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="160" cy="75" r="9" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"🔴🔴🔴🔵 — какого цвета больше всего?",opts:["Красного","Синего","Поровну"],correct:0},
    {p:"Что объединяет 🍎🍓🍒 в одну группу?",opts:["Все они красные","Все они квадратные","Все они большие"],correct:0},
    {p:"⚪⚪⚫⚪ — какого цвета меньше всего?",opts:["Чёрного","Белого","Поровну"],correct:0},
    {p:"Что объединяет 🐘🦏🐋 в одну группу?",opts:["Все они большие животные","Все они летают","Все они маленькие"],correct:0},
    {p:"🟦🟦🟨🟦 — какого цвета больше?",opts:["Синего","Жёлтого","Поровну"],correct:0}
  ]},

{ n:"Что сначала, что потом",
  explain:"У многих событий есть порядок — что происходит раньше, а что позже.",
  svg:`<svg viewBox="0 0 220 80" width="220">
  <line x1="20" y1="40" x2="200" y2="40" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="200,40 190,34 190,46" fill="#2B2A26"/>
  <circle cx="55" cy="40" r="12" fill="#E3922E" stroke="#B96F16" stroke-width="2"/><text x="55" y="44" font-size="9" text-anchor="middle" fill="#FFFEF8">1</text>
  <circle cx="160" cy="40" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/><text x="160" y="44" font-size="9" text-anchor="middle" fill="#FFFEF8">2</text>
  </svg>`,
  bank:[
    {p:"Что было раньше: ты проснулся или ты позавтракал?",opts:["Проснулся","Позавтракал"],correct:0},
    {p:"Что было раньше: посадили семечко или выросло дерево?",opts:["Посадили семечко","Выросло дерево"],correct:0},
    {p:"Что было раньше: испекли пирог или съели пирог?",opts:["Испекли пирог","Съели пирог"],correct:0},
    {p:"Что было раньше: вылупился цыплёнок или курица снесла яйцо?",opts:["Курица снесла яйцо","Цыплёнок вылупился"],correct:0},
    {p:"Что было раньше: намочил руки или помыл руки мылом?",opts:["Намочил руки","Помыл руки мылом"],correct:0}
  ]},

{ n:"Больше или меньше",
  explain:"Посчитай предметы в каждой группе и сравни, где их больше.",
  svg:`<svg viewBox="0 0 220 90" width="220">
  <circle cx="30" cy="50" r="10" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <circle cx="55" cy="50" r="10" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <circle cx="80" cy="50" r="10" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="55" y="80" font-size="10" text-anchor="middle" fill="#736C5E">3</text>
  <circle cx="140" cy="50" r="10" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="165" cy="50" r="10" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="152" y="80" font-size="10" text-anchor="middle" fill="#736C5E">2</text>
  <text x="105" y="55" font-size="16" text-anchor="middle" fill="#2B2A26">&gt;</text>
  </svg>`,
  bank:[
    {p:"🍎🍎🍎 и 🍎🍎 — где яблок больше?",opts:["Слева (3)","Справа (2)","Поровну"],correct:0},
    {p:"⭐⭐ и ⭐⭐⭐⭐ — где звёзд больше?",opts:["Справа (4)","Слева (2)","Поровну"],correct:0},
    {p:"🐟🐟🐟 и 🐟🐟🐟 — где рыбок больше?",opts:["Поровну","Слева больше","Справа больше"],correct:0},
    {p:"🎈🎈🎈🎈🎈 и 🎈🎈 — где шариков больше?",opts:["Слева (5)","Справа (2)","Поровну"],correct:0},
    {p:"🟢🟢 и 🟢🟢🟢 — где кружков меньше?",opts:["Слева (2)","Справа (3)","Поровну"],correct:0}
  ]},

{ n:"Продолжи ряд",
  explain:"Посмотри на повторяющийся узор и угадай, что будет дальше.",
  svg:`<svg viewBox="0 0 220 80" width="220">
  <circle cx="30" cy="40" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="70" cy="40" r="14" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="110" cy="40" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="150" cy="40" r="14" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="195" cy="40" r="14" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="195" y="45" font-size="14" text-anchor="middle" fill="#2B2A26">?</text>
  </svg>`,
  bank:[
    {p:"🔴🔵🔴🔵🔴 — дальше?",opts:["🔴","🔵","🟢"],correct:1},
    {p:"⭐🌙⭐🌙⭐ — дальше?",opts:["⭐","🌙","☀️"],correct:1},
    {p:"1,2,3,4,?",opts:["5","6","3"],correct:0},
    {p:"🍎🍌🍎🍌🍎 — дальше?",opts:["🍎","🍌","🍊"],correct:1},
    {p:"10,9,8,7,?",opts:["6","5","8"],correct:0}
  ]},

{ n:"Загадки для малышей",
  explain:"Отгадай простую загадку — подумай, о ком или о чём идёт речь.",
  svg:`<svg viewBox="0 0 160 120" width="160">
  <path d="M20 20h120v60H70l-15 20v-20H20z" fill="#FFDE59" stroke="#C99A00" stroke-width="2.5"/>
  <text x="80" y="60" font-size="30" text-anchor="middle" fill="#2B2A26" font-weight="700">?</text>
  </svg>`,
  bank:[
    {p:"Мяукает и ловит мышей. Кто это?",opts:["Кошка","Собака","Корова"],correct:0},
    {p:"Даёт молоко и говорит «му». Кто это?",opts:["Корова","Кошка","Курица"],correct:0},
    {p:"Жёлтый, круглый, светит днём. Что это?",opts:["Солнце","Луна","Звезда"],correct:0},
    {p:"Белый и холодный, падает зимой. Что это?",opts:["Снег","Дождь","Песок"],correct:0},
    {p:"Кукарекает по утрам. Кто это?",opts:["Петух","Утка","Гусь"],correct:0},
    {p:"Прыгает и любит морковку. Кто это?",opts:["Заяц","Медведь","Волк"],correct:0}
  ]},

{ n:"Простая задачка на подумать",
  explain:"Читай внимательно и представляй ситуацию перед ответом.",
  svg:`<svg viewBox="0 0 200 90" width="200">
  <circle cx="35" cy="45" r="16" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <circle cx="75" cy="45" r="16" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <text x="105" y="52" font-size="18" text-anchor="middle" fill="#2B2A26">+</text>
  <circle cx="140" cy="45" r="16" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <text x="170" y="52" font-size="18" text-anchor="middle" fill="#2B2A26">=?</text>
  </svg>`,
  bank:[
    {p:"У Кати было 2 шарика, ей подарили ещё 1. Сколько шариков стало?",opts:["3","2","1"],correct:0},
    {p:"На столе 3 яблока, одно съели. Сколько осталось?",opts:["2","3","1"],correct:0},
    {p:"У собаки 4 лапы. Сколько лап у двух собак?",opts:["8","4","6"],correct:0},
    {p:"В коробке было 5 карандашей, добавили 2. Сколько стало?",opts:["7","5","2"],correct:0},
    {p:"У мальчика было 4 конфеты, он отдал 1 другу. Сколько осталось?",opts:["3","4","1"],correct:0}
  ]},

{ n:"Кто где живёт",
  explain:"У каждого животного есть свой дом в природе или рядом с человеком.",
  svg:`<svg viewBox="0 0 240 100" width="240">
  <path d="M10 60c40-15 60 15 100 0s60-15 100 0" fill="none" stroke="#3B6EA5" stroke-width="3"/>
  <circle cx="45" cy="50" r="6" fill="#3B6EA5" opacity="0.5"/>
  <text x="45" y="85" font-size="9" text-anchor="middle" fill="#736C5E">вода</text>
  <path d="M110 60c0-16 12-26 20-26s20 10 20 26z" fill="#B96F16" opacity="0.5" stroke="#B96F16" stroke-width="2"/>
  <text x="130" y="85" font-size="9" text-anchor="middle" fill="#736C5E">гнездо</text>
  <path d="M195 65a20 15 0 0 1 40 0z" fill="#736C5E" opacity="0.5" stroke="#2B2A26" stroke-width="2"/>
  <text x="215" y="85" font-size="9" text-anchor="middle" fill="#736C5E">нора</text>
  </svg>`,
  bank:[
    {p:"Где живёт рыба?",opts:["В воде","На дереве","В норе"],correct:0},
    {p:"Где живёт птица, которая вьёт гнездо?",opts:["В гнезде на дереве","В воде","Под землёй"],correct:0},
    {p:"Где живёт медведь зимой?",opts:["В берлоге","В гнезде","В воде"],correct:0},
    {p:"Где живёт пчела?",opts:["В улье","В норе","В гнезде на земле"],correct:0},
    {p:"Где живёт крот?",opts:["Под землёй, в норе","На дереве","В воде"],correct:0}
  ]},

{ n:"Форма предметов",
  explain:"Предметы вокруг нас имеют разную форму: круглую, квадратную, треугольную.",
  svg:`<svg viewBox="0 0 220 80" width="220">
  <circle cx="40" cy="40" r="22" fill="#3B6EA5" stroke="#284D77" stroke-width="2.5"/>
  <polygon points="110,18 132,58 88,58" fill="#E3922E" stroke="#B96F16" stroke-width="2.5"/>
  <rect x="160" y="20" width="40" height="40" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2.5"/>
  </svg>`,
  bank:[
    {p:"⚽ какой формы этот мяч?",opts:["Круглый","Квадратный","Треугольный"],correct:0},
    {p:"🔺 какой это формы?",opts:["Треугольник","Круг","Квадрат"],correct:0},
    {p:"📦 какой формы эта коробка?",opts:["Квадратная (кубическая)","Круглая","Треугольная"],correct:0},
    {p:"🍕 один кусок пиццы какой формы?",opts:["Треугольный","Круглый","Квадратный"],correct:0}
  ]},

{ n:"Сравнение по количеству и размеру",
  explain:"Считай внимательно и сравнивай не только количество, но и размер предметов.",
  svg:`<svg viewBox="0 0 200 100" width="200">
  <ellipse cx="60" cy="60" rx="45" ry="30" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="160" cy="75" rx="15" ry="10" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="60" y="20" font-size="10" text-anchor="middle" fill="#736C5E">большой</text>
  <text x="160" y="55" font-size="10" text-anchor="middle" fill="#736C5E">маленький</text>
  </svg>`,
  bank:[
    {p:"Кто тяжелее: слон или кошка?",opts:["Слон","Кошка","Одинаково"],correct:0},
    {p:"Что легче: пёрышко или камень?",opts:["Пёрышко","Камень","Одинаково"],correct:0},
    {p:"Что выше: пятиэтажный дом или один этаж?",opts:["Пятиэтажный дом","Один этаж","Одинаково"],correct:0},
    {p:"Кто быстрее бегает: черепаха или гепард?",opts:["Гепард","Черепаха","Одинаково"],correct:0}
  ]},

{ n:"Что нужно для дела",
  explain:"Для каждого дела нужен свой инструмент или предмет.",
  svg:`<svg viewBox="0 0 220 90" width="220">
  <line x1="20" y1="60" x2="55" y2="25" stroke="#E3922E" stroke-width="8" stroke-linecap="round"/>
  <polygon points="52,22 60,14 66,20 58,28" fill="#736C5E"/>
  <text x="40" y="80" font-size="9" text-anchor="middle" fill="#736C5E">карандаш</text>
  <rect x="95" y="20" width="10" height="40" rx="4" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="88" y="15" width="24" height="10" rx="3" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="100" y="80" font-size="9" text-anchor="middle" fill="#736C5E">щётка</text>
  <path d="M170 20c-6 0-10 8-10 16 0 6 4 10 8 12v22h4V48c4-2 8-6 8-12 0-8-4-16-10-16z" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <text x="170" y="80" font-size="9" text-anchor="middle" fill="#736C5E">ложка</text>
  </svg>`,
  bank:[
    {p:"Что нужно, чтобы порисовать?",opts:["Карандаши и бумага","Ложка","Зонт"],correct:0},
    {p:"Что нужно, чтобы почистить зубы?",opts:["Зубная щётка","Молоток","Расчёска"],correct:0},
    {p:"Что нужно, чтобы съесть суп?",opts:["Ложка","Расчёска","Карандаш"],correct:0},
    {p:"Что нужно, чтобы причесаться?",opts:["Расчёска","Ложка","Молоток"],correct:0}
  ]}

];
