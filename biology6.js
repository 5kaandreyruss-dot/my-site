/* Биология, 6 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение программы 5 класса: подробное строение растений (ботаника). */

const BIOLOGY6_MOD = [

{ n:"Клеточное строение растений",
  explain:"Растения, как и все живые организмы, состоят из <b>клеток</b>. У растительной клетки есть плотная <b>клеточная стенка</b> и зелёные тельца — <b>хлоропласты</b>, где происходит фотосинтез.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <rect x="10" y="10" width="200" height="140" rx="10" fill="#FFFEF8" stroke="#2B2A26" stroke-width="3"/>
  <rect x="20" y="20" width="180" height="120" rx="8" fill="none" stroke="#5F9A5C" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="70" cy="90" r="22" fill="#9973B8" opacity="0.85" stroke="#725189" stroke-width="1.5"/>
  <ellipse cx="140" cy="55" rx="14" ry="9" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1.2"/>
  <ellipse cx="165" cy="90" rx="14" ry="9" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1.2"/>
  <ellipse cx="135" cy="120" rx="14" ry="9" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1.2"/>
  <text x="20" y="10" font-size="9" fill="#2B2A26">клеточная стенка</text>
  <text x="70" y="94" font-size="9" text-anchor="middle" fill="#fff">ядро</text>
  <text x="165" y="145" font-size="9" text-anchor="middle" fill="#2B2A26">хлоропласты</text>
  </svg>`,
  bank:[
    {p:"Из чего состоят растения на клеточном уровне?",opts:["Из клеток","Из одного сплошного вещества"],correct:0},
    {p:"Что придаёт растительной клетке прочность и форму?",opts:["Клеточная стенка","Хлоропласт","Ядро"],correct:0},
    {p:"В каких частях клетки происходит фотосинтез?",opts:["В хлоропластах","В клеточной стенке","В ядре"],correct:0},
    {p:"Какой цвет обычно имеют хлоропласты?",opts:["Зелёный","Красный","Синий"],correct:0}
  ]},

{ n:"Ткани растений",
  explain:"<b>Ткань</b> — группа клеток со схожим строением и функцией. У растений есть покровная (защита), проводящая (перенос воды), основная и образовательная (рост) ткани.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <rect x="5" y="10" width="50" height="50" rx="6" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <rect x="65" y="10" width="50" height="50" rx="6" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <rect x="125" y="10" width="50" height="50" rx="6" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <rect x="185" y="10" width="50" height="50" rx="6" fill="#D9679A" stroke="#2B2A26" stroke-width="2"/>
  <text x="30" y="80" font-size="9" text-anchor="middle" fill="#2B2A26">покровная</text>
  <text x="90" y="80" font-size="9" text-anchor="middle" fill="#2B2A26">проводящая</text>
  <text x="150" y="80" font-size="9" text-anchor="middle" fill="#2B2A26">основная</text>
  <text x="210" y="80" font-size="9" text-anchor="middle" fill="#2B2A26">образоват.</text>
  <text x="30" y="95" font-size="8" text-anchor="middle" fill="#736C5E">защита</text>
  <text x="90" y="95" font-size="8" text-anchor="middle" fill="#736C5E">вода</text>
  <text x="150" y="95" font-size="8" text-anchor="middle" fill="#736C5E">запас</text>
  <text x="210" y="95" font-size="8" text-anchor="middle" fill="#736C5E">рост</text>
  </svg>`,
  bank:[
    {p:"Что такое ткань в биологии?",opts:["Группа клеток со схожим строением и функцией","Один орган","Одна клетка"],correct:0},
    {p:"Какая ткань защищает растение снаружи?",opts:["Покровная","Проводящая","Образовательная"],correct:0},
    {p:"Какая ткань переносит воду и питательные вещества по растению?",opts:["Проводящая","Покровная"],correct:0},
    {p:"Благодаря какой ткани растение растёт?",opts:["Образовательной","Покровной"],correct:0}
  ]},

{ n:"Корень: строение и функции",
  explain:"<b>Корень</b> закрепляет растение в почве и всасывает воду с минеральными веществами. У растений различают <b>стержневую</b> (один главный корень) и <b>мочковатую</b> (много одинаковых корней) корневые системы.",
  svg:`<svg viewBox="0 0 240 160" width="240">
  <line x1="60" y1="20" x2="60" y2="40" stroke="#3F7A3D" stroke-width="4"/>
  <path d="M60 40c0 40-4 60-4 90M60 40c6 30 12 55 18 85M60 40c-10 25 4 60-14 88M60 40c10 20 2 50 12 86" stroke="#B96F16" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="60" y="150" font-size="10" text-anchor="middle" fill="#2B2A26">стержневая</text>
  <line x1="180" y1="20" x2="180" y2="40" stroke="#3F7A3D" stroke-width="4"/>
  <path d="M180 40c-6 20-16 40-30 65M180 40c-2 25-6 50-14 80M180 40c4 22 10 45 6 78M180 40c8 20 18 45 30 68M180 40c2 25 8 52 20 78" stroke="#B96F16" stroke-width="2" fill="none" stroke-linecap="round"/>
  <text x="180" y="150" font-size="10" text-anchor="middle" fill="#2B2A26">мочковатая</text>
  </svg>`,
  bank:[
    {p:"Какие две главные функции выполняет корень?",opts:["Закрепление в почве и всасывание воды","Фотосинтез и дыхание","Размножение"],correct:0},
    {p:"Корневая система с одним главным корнем называется...",opts:["Стержневая","Мочковатая"],correct:0},
    {p:"Корневая система из множества похожих корешков без главного называется...",opts:["Мочковатая","Стержневая"],correct:0}
  ]},

{ n:"Побег: стебель и почки",
  explain:"<b>Побег</b> состоит из стебля, листьев и почек. <b>Стебель</b> — опорная и проводящая часть растения. <b>Почка</b> — зачаток нового побега, листа или цветка.",
  svg:`<svg viewBox="0 0 180 200" width="180">
  <line x1="90" y1="20" x2="90" y2="180" stroke="#3F7A3D" stroke-width="6" stroke-linecap="round"/>
  <path d="M90 60c-20-4-32 8-36 20 16 6 30-4 36-20z" fill="#5F9A5C"/>
  <path d="M90 100c20-4 32 8 36 20-16 6-30-4-36-20z" fill="#5F9A5C"/>
  <circle cx="90" cy="35" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <circle cx="90" cy="150" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <text x="120" y="38" font-size="10" fill="#2B2A26">почка</text>
  <text x="130" y="72" font-size="10" fill="#2B2A26">лист</text>
  <text x="20" y="120" font-size="10" fill="#2B2A26">стебель</text>
  </svg>`,
  bank:[
    {p:"Из чего состоит побег растения?",opts:["Из стебля, листьев и почек","Только из корня","Только из цветка"],correct:0},
    {p:"Какую роль выполняет стебель?",opts:["Опорную и проводящую","Только украшает растение"],correct:0},
    {p:"Что такое почка растения?",opts:["Зачаток нового побега, листа или цветка","Плод","Корень"],correct:0}
  ]},

{ n:"Лист и фотосинтез",
  explain:"<b>Лист</b> улавливает солнечный свет для <b>фотосинтеза</b> — процесса, при котором растение создаёт себе питательные вещества из углекислого газа и воды, выделяя кислород.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <path d="M110 30c-40 10-55 45-40 80 30 10 65-10 75-45 6-20 0-30-35-35z" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <path d="M110 32c-10 25-18 50-30 75" stroke="#3F7A3D" stroke-width="1.5" fill="none"/>
  <text x="30" y="30" font-size="13" text-anchor="middle">☀️</text>
  <path d="M45 40l40 15" stroke="#E3922E" stroke-width="1.5" stroke-dasharray="2 2"/>
  <text x="30" y="90" font-size="11" fill="#2B2A26">CO₂→</text>
  <text x="30" y="130" font-size="11" fill="#3B6EA5">H₂O→</text>
  <text x="185" y="70" font-size="12" fill="#284D77" font-weight="700">O₂</text>
  <path d="M150 75l25-5" stroke="#3B6EA5" stroke-width="1.5"/>
  </svg>`,
  bank:[
    {p:"Какая часть растения главным образом отвечает за фотосинтез?",opts:["Лист","Корень","Плод"],correct:0},
    {p:"Что растение выделяет в процессе фотосинтеза?",opts:["Кислород","Углекислый газ","Азот"],correct:0},
    {p:"Что нужно растению для фотосинтеза, помимо света?",opts:["Углекислый газ и вода","Только почва","Только тепло"],correct:0}
  ]},

{ n:"Цветок и плод",
  explain:"<b>Цветок</b> — орган размножения растения. После опыления и оплодотворения на месте цветка образуется <b>плод</b> с семенами внутри.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <circle cx="60" cy="60" r="14" fill="#D6524F"/><circle cx="45" cy="50" r="11" fill="#D9679A"/><circle cx="75" cy="50" r="11" fill="#D9679A"/><circle cx="45" cy="72" r="11" fill="#D9679A"/><circle cx="75" cy="72" r="11" fill="#D9679A"/>
  <line x1="60" y1="74" x2="60" y2="120" stroke="#3F7A3D" stroke-width="4"/>
  <line x1="100" y1="60" x2="130" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <text x="115" y="52" font-size="14" text-anchor="middle">→</text>
  <ellipse cx="180" cy="60" rx="32" ry="24" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <circle cx="170" cy="55" r="4" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1"/>
  <circle cx="188" cy="65" r="4" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1"/>
  <circle cx="180" cy="48" r="4" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1"/>
  <text x="60" y="135" font-size="10" text-anchor="middle" fill="#2B2A26">цветок</text>
  <text x="180" y="100" font-size="10" text-anchor="middle" fill="#2B2A26">плод с семенами</text>
  </svg>`,
  bank:[
    {p:"Для чего растению нужен цветок?",opts:["Для размножения","Только для красоты"],correct:0},
    {p:"Что образуется на месте цветка после опыления?",opts:["Плод с семенами","Новый корень","Новый стебель"],correct:0},
    {p:"Перенос пыльцы с одного цветка на другой называется...",opts:["Опыление","Фотосинтез","Дыхание"],correct:0}
  ]},

{ n:"Размножение растений",
  explain:"Растения размножаются <b>семенами</b> (половое размножение) или <b>вегетативно</b> — частями растения: черенками, клубнями, усами (например, у клубники).",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <ellipse cx="60" cy="60" rx="14" ry="20" fill="#B96F16"/>
  <text x="60" y="100" font-size="10" text-anchor="middle" fill="#2B2A26">семя</text>
  <line x1="150" y1="40" x2="150" y2="90" stroke="#3F7A3D" stroke-width="4"/>
  <path d="M150 90c20 5 35 20 40 35" stroke="#3F7A3D" stroke-width="3" fill="none" stroke-dasharray="3 3"/>
  <circle cx="192" cy="126" r="10" fill="#5F9A5C"/>
  <text x="150" y="115" font-size="10" text-anchor="middle" fill="#2B2A26">ус (вегетативно)</text>
  </svg>`,
  bank:[
    {p:"Каким способом размножается растение с помощью семян?",opts:["Половым (семенами)","Только вегетативным"],correct:0},
    {p:"Как называется размножение частями растения (черенками, клубнями)?",opts:["Вегетативное","Половое"],correct:0},
    {p:"Клубника часто размножается с помощью...",opts:["Усов","Семян только"],correct:0}
  ]},

{ n:"Систематика растений",
  explain:"Учёные распределяют растения по группам: <b>вид</b> (например, ромашка аптечная), затем <b>род</b>, <b>семейство</b> и так далее — от более узких к более широким группам.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <rect x="90" y="10" width="60" height="26" rx="6" fill="#D9679A" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="120" y="27" font-size="10" text-anchor="middle" fill="#fff">семейство</text>
  <line x1="120" y1="36" x2="70" y2="60" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="120" y1="36" x2="170" y2="60" stroke="#2B2A26" stroke-width="1.5"/>
  <rect x="40" y="60" width="60" height="26" rx="6" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="70" y="77" font-size="10" text-anchor="middle" fill="#fff">род</text>
  <rect x="140" y="60" width="60" height="26" rx="6" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5" opacity="0.5"/>
  <line x1="70" y1="86" x2="70" y2="108" stroke="#2B2A26" stroke-width="1.5"/>
  <rect x="40" y="108" width="60" height="26" rx="6" fill="#5F9A5C" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="70" y="125" font-size="10" text-anchor="middle" fill="#fff">вид</text>
  </svg>`,
  bank:[
    {p:"Как называется наука о распределении организмов по группам?",opts:["Систематика","Фотосинтез","География"],correct:0},
    {p:"Какая единица классификации самая узкая?",opts:["Вид","Семейство","Царство"],correct:0},
    {p:"Что объединяет в себе род растений?",opts:["Несколько похожих видов","Только одно растение"],correct:0}
  ]},

{ n:"Мхи и папоротники",
  explain:"<b>Мхи</b> — низкорослые растения без настоящих корней, растущие во влажных местах. <b>Папоротники</b> — более сложно устроенные растения с листьями, но тоже размножаются спорами, а не семенами.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <ellipse cx="60" cy="110" rx="40" ry="10" fill="#3F7A3D" opacity="0.3"/>
  <circle cx="40" cy="95" r="10" fill="#5F9A5C"/><circle cx="55" cy="88" r="10" fill="#5F9A5C"/><circle cx="70" cy="96" r="10" fill="#5F9A5C"/><circle cx="85" cy="90" r="9" fill="#5F9A5C"/>
  <text x="60" y="130" font-size="10" text-anchor="middle" fill="#2B2A26">мох</text>
  <path d="M150 120c0-40 20-70 25-80s-8 30-4 55c4-25 20-45 20-45s-12 35-6 65" fill="none" stroke="#3F7A3D" stroke-width="2"/>
  <path d="M150 120c0-40 20-70 25-80" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="160" y="135" font-size="10" text-anchor="middle" fill="#2B2A26">папоротник</text>
  </svg>`,
  bank:[
    {p:"Есть ли у мхов настоящие корни?",opts:["Нет","Да, хорошо развитые"],correct:0},
    {p:"Где обычно растут мхи?",opts:["Во влажных местах","В пустыне"],correct:0},
    {p:"Чем размножаются папоротники?",opts:["Спорами","Семенами"],correct:0}
  ]},

{ n:"Голосеменные растения",
  explain:"<b>Голосеменные</b> растения (хвойные — ель, сосна) образуют семена, лежащие открыто в шишках, без завязи и плода, в отличие от цветковых растений.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <ellipse cx="60" cy="60" rx="22" ry="34" fill="#B96F16" stroke="#2B2A26" stroke-width="2"/>
  <path d="M45 35c5 8 5 45 0 55M60 30c3 10 3 55 0 65M75 35c-5 8-5 45 0 55" stroke="#2B2A26" stroke-width="1" fill="none" opacity="0.5"/>
  <circle cx="45" cy="50" r="2.5" fill="#FFDE59"/><circle cx="75" cy="50" r="2.5" fill="#FFDE59"/><circle cx="45" cy="70" r="2.5" fill="#FFDE59"/><circle cx="75" cy="70" r="2.5" fill="#FFDE59"/>
  <text x="60" y="115" font-size="10" text-anchor="middle" fill="#2B2A26">шишка (семена открыты)</text>
  <circle cx="170" cy="55" r="28" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="170" cy="55" r="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1"/>
  <text x="170" y="115" font-size="8" text-anchor="middle" fill="#2B2A26">плод (семена внутри)</text>
  </svg>`,
  bank:[
    {p:"Где у голосеменных растений находятся семена?",opts:["Открыто в шишках","Внутри плода"],correct:0},
    {p:"Что из этого — голосеменное растение?",opts:["Сосна","Яблоня"],correct:0},
    {p:"Есть ли у голосеменных растений настоящий плод?",opts:["Нет","Да"],correct:0}
  ]},

{ n:"Значение бактерий и грибов в природе",
  explain:"Бактерии и грибы-разрушители перерабатывают остатки мёртвых растений и животных, возвращая вещества в почву — это важно для круговорота веществ в природе.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <path d="M110 20a70 70 0 1 1 -49 20" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="3 5"/>
  <text x="150" y="15" font-size="16">🍂</text>
  <text x="185" y="70" font-size="16">🍄</text>
  <text x="110" y="130" font-size="16">🌱</text>
  <text x="45" y="70" font-size="11" fill="#2B2A26">почва</text>
  </svg>`,
  bank:[
    {p:"Что делают бактерии и грибы-разрушители с остатками мёртвых организмов?",opts:["Перерабатывают их, возвращая вещества в почву","Ничего не делают"],correct:0},
    {p:"Важна ли эта работа для круговорота веществ в природе?",opts:["Да, очень важна","Нет, она бесполезна"],correct:0}
  ]}

];
