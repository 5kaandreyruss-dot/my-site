/* Биология, 10 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Углублённая цитология, обмен веществ, размножение и индивидуальное развитие организмов. */

const BIOLOGY10_MOD = [

{ n:"Химический состав клетки",
  explain:"Клетка состоит из неорганических (вода, минеральные соли) и органических веществ (белки, жиры, углеводы, нуклеиновые кислоты). Вода составляет большую часть массы клетки.",
  svg:`<svg viewBox="0 0 214 120" width="214">
  <rect x="10" y="20" width="180" height="30" fill="#3B6EA5" opacity="0.85"/>
  <rect x="10" y="55" width="120" height="20" fill="#5F9A5C" opacity="0.85"/>
  <rect x="10" y="80" width="40" height="20" fill="#E3922E" opacity="0.85"/>
  <text x="195" y="40" font-size="9" text-anchor="end" fill="#fff">вода ~70%</text>
  <text x="135" y="70" font-size="6" fill="#2B2A26">белки, жиры, углеводы</text>
  <text x="55" y="95" font-size="9" fill="#2B2A26">соли</text>
  </svg>`,
  bank:[
    {p:"Какого вещества больше всего по массе в клетке?",opts:["Воды","Минеральных солей"],correct:0},
    {p:"Что из этого — органическое вещество клетки?",opts:["Белок","Вода"],correct:0}
  ]},

{ n:"Функции белков в клетке",
  explain:"Белки выполняют множество функций: строительную (образуют структуры клетки), ферментативную (ускоряют реакции), транспортную (переносят вещества) и другие.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <path d="M40 60c10-15 25-15 30 0s20 15 25 0" fill="none" stroke="#D9679A" stroke-width="4" stroke-linecap="round"/>
  <circle cx="55" cy="55" r="5" fill="#A8447A"/><circle cx="75" cy="65" r="5" fill="#A8447A"/><circle cx="95" cy="55" r="5" fill="#A8447A"/>
  <text x="65" y="90" font-size="9" text-anchor="middle" fill="#2B2A26">белок</text>
  <line x1="105" y1="60" x2="125" y2="60" stroke="#2B2A26" stroke-width="1.5"/>
  <g font-size="9" fill="#2B2A26">
  <text x="140" y="30">строительная</text>
  <text x="140" y="60">ферментативная</text>
  <text x="140" y="90">транспортная</text>
  </g>
  </svg>`,
  bank:[
    {p:"Какую функцию выполняют белки-ферменты?",opts:["Ускоряют химические реакции","Только придают цвет клетке"],correct:0}
  ]},

{ n:"Строение и функции клеточных органоидов",
  explain:"В клетке есть органоиды: <b>митохондрии</b> вырабатывают энергию, <b>рибосомы</b> синтезируют белки, а у растений есть ещё и <b>хлоропласты</b>, где происходит фотосинтез.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <ellipse cx="110" cy="85" rx="95" ry="65" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="110" cy="85" r="20" fill="#9973B8" opacity="0.85" stroke="#725189" stroke-width="1.5"/>
  <ellipse cx="65" cy="60" rx="16" ry="9" fill="#D6524F" opacity="0.85" stroke="#A83836" stroke-width="1.2"/>
  <ellipse cx="160" cy="55" rx="14" ry="8" fill="#5F9A5C" opacity="0.85" stroke="#3F7A3D" stroke-width="1.2"/>
  <circle cx="70" cy="120" r="4" fill="#3B6EA5"/><circle cx="82" cy="128" r="4" fill="#3B6EA5"/><circle cx="150" cy="120" r="4" fill="#3B6EA5"/>
  <text x="110" y="88" font-size="8" text-anchor="middle" fill="#fff">ядро</text>
  <text x="65" y="42" font-size="8" text-anchor="middle" fill="#2B2A26">митохондрия</text>
  <text x="160" y="40" font-size="8" text-anchor="middle" fill="#2B2A26">хлоропласт</text>
  <text x="95" y="145" font-size="8" text-anchor="middle" fill="#2B2A26">рибосомы</text>
  </svg>`,
  bank:[
    {p:"Какой органоид вырабатывает энергию в клетке?",opts:["Митохондрия","Рибосома"],correct:0},
    {p:"Какой органоид синтезирует белки?",opts:["Рибосома","Митохондрия"],correct:0},
    {p:"Где в растительной клетке происходит фотосинтез?",opts:["В хлоропластах","В ядре"],correct:0}
  ]},

{ n:"Фотосинтез",
  explain:"<b>Фотосинтез</b> — процесс, при котором растения с помощью солнечного света превращают углекислый газ и воду в органические вещества (глюкозу) и кислород.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <text x="30" y="30" font-size="13" fill="#2B2A26">☀️</text>
  <text x="30" y="60" font-size="11" fill="#736C5E">CO₂ + H₂O</text>
  <path d="M100 30h30" stroke="#2B2A26" stroke-width="2"/>
  <text x="115" y="25" font-size="9" text-anchor="middle" fill="#2B2A26">свет</text>
  <path d="M150 45c-20 10-25 35-10 50 18 10 45-5 45-25 0-18-15-30-35-25z" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="120" y="105" font-size="11" fill="#B96F16">глюкоза + O₂</text>
  <path d="M155 95h-30" stroke="#2B2A26" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Что нужно растению для фотосинтеза?",opts:["Свет, углекислый газ и воду","Только тепло"],correct:0},
    {p:"Что выделяется в атмосферу в результате фотосинтеза?",opts:["Кислород","Углекислый газ"],correct:0}
  ]},

{ n:"Деление клетки: митоз",
  explain:"<b>Митоз</b> — процесс деления клетки, при котором из одной клетки образуются две дочерние клетки с точно таким же набором хромосом, как у исходной.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <circle cx="45" cy="60" r="35" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <line x1="35" y1="55" x2="35" y2="70" stroke="#D6524F" stroke-width="3"/><line x1="55" y1="55" x2="55" y2="70" stroke="#D6524F" stroke-width="3"/>
  <path d="M90 60h20" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="160" cy="35" r="26" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <line x1="153" y1="30" x2="153" y2="42" stroke="#D6524F" stroke-width="2.5"/><line x1="167" y1="30" x2="167" y2="42" stroke="#D6524F" stroke-width="2.5"/>
  <circle cx="160" cy="90" r="26" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <line x1="153" y1="85" x2="153" y2="97" stroke="#D6524F" stroke-width="2.5"/><line x1="167" y1="85" x2="167" y2="97" stroke="#D6524F" stroke-width="2.5"/>
  <text x="160" y="115" font-size="9" text-anchor="middle" fill="#2B2A26">две одинаковые клетки</text>
  </svg>`,
  bank:[
    {p:"Сколько дочерних клеток образуется в результате митоза?",opts:["Две","Четыре"],correct:0},
    {p:"Одинаков ли набор хромосом у дочерних клеток и исходной?",opts:["Да, одинаков","Нет, вдвое меньше"],correct:0}
  ]},

{ n:"Мейоз",
  explain:"<b>Мейоз</b> — особый вид деления клетки, при котором образуются половые клетки с уменьшенным вдвое набором хромосом, что важно для полового размножения.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <circle cx="40" cy="70" r="32" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <line x1="30" y1="65" x2="30" y2="78" stroke="#D6524F" stroke-width="3"/><line x1="50" y1="65" x2="50" y2="78" stroke="#D6524F" stroke-width="3"/>
  <path d="M78 70h15" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="130" cy="30" r="18" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="1.5"/><line x1="130" y1="25" x2="130" y2="35" stroke="#D6524F" stroke-width="2"/>
  <circle cx="130" cy="70" r="18" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="1.5"/><line x1="130" y1="65" x2="130" y2="75" stroke="#D6524F" stroke-width="2"/>
  <circle cx="130" cy="110" r="18" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="1.5"/><line x1="130" y1="105" x2="130" y2="115" stroke="#D6524F" stroke-width="2"/>
  <circle cx="185" cy="50" r="18" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="1.5"/><line x1="185" y1="45" x2="185" y2="55" stroke="#D6524F" stroke-width="2"/>
  <text x="150" y="135" font-size="6" text-anchor="middle" fill="#2B2A26">4 половые клетки, хромосом вдвое меньше</text>
  </svg>`,
  bank:[
    {p:"Для образования каких клеток нужен мейоз?",opts:["Половых клеток","Обычных клеток кожи"],correct:0},
    {p:"Что происходит с числом хромосом в результате мейоза?",opts:["Уменьшается вдвое","Удваивается"],correct:0}
  ]},

{ n:"Формы размножения организмов",
  explain:"Размножение бывает <b>бесполое</b> (участвует одна особь, потомство генетически идентично родителю) и <b>половое</b> (участвуют две особи, потомство сочетает признаки обоих родителей).",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <circle cx="50" cy="45" r="16" fill="#3B6EA5"/>
  <path d="M50 61v12" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="35" cy="85" r="11" fill="#3B6EA5"/><circle cx="65" cy="85" r="11" fill="#3B6EA5"/>
  <text x="50" y="105" font-size="9" text-anchor="middle" fill="#2B2A26">бесполое: 1 особь</text>
  <circle cx="160" cy="40" r="14" fill="#D6524F"/><circle cx="195" cy="40" r="14" fill="#3B6EA5"/>
  <circle cx="177" cy="85" r="13" fill="#9973B8"/>
  <text x="177" y="105" font-size="9" text-anchor="middle" fill="#2B2A26">половое: 2 особи</text>
  </svg>`,
  bank:[
    {p:"Сколько особей участвует в бесполом размножении?",opts:["Одна","Две"],correct:0},
    {p:"Почему потомство при половом размножении отличается генетически от родителей?",opts:["Оно сочетает признаки обоих родителей","Оно точная копия одного родителя"],correct:0}
  ]},

{ n:"Индивидуальное развитие организма (онтогенез)",
  explain:"<b>Онтогенез</b> — индивидуальное развитие организма от момента зарождения (оплодотворения) до конца жизни, включающее эмбриональный и постэмбриональный периоды.",
  svg:`<svg viewBox="0 0 240 100" width="240">
  <line x1="15" y1="60" x2="225" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="30" cy="60" r="6" fill="#D6524F"/>
  <circle cx="100" cy="60" r="8" fill="#E3922E"/>
  <circle cx="220" cy="60" r="10" fill="#3B6EA5"/>
  <text x="30" y="30" font-size="7" text-anchor="middle" fill="#2B2A26">оплодотворение</text>
  <text x="65" y="85" font-size="8" text-anchor="middle" fill="#2B2A26">эмбриональный период</text>
  <text x="175" y="85" font-size="8" text-anchor="middle" fill="#2B2A26">постэмбриональный период</text>
  </svg>`,
  bank:[
    {p:"С какого момента начинается онтогенез?",opts:["С момента зарождения (оплодотворения)","Только с рождения"],correct:0}
  ]},

{ n:"Углеводы и липиды в клетке",
  explain:"<b>Углеводы</b> служат источником энергии и строительным материалом (у растений — целлюлоза). <b>Липиды (жиры)</b> запасают энергию и входят в состав клеточных мембран.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <g stroke="#E3922E" stroke-width="3" fill="none" stroke-linecap="round">
  <line x1="47" y1="45" x2="53" y2="45"/><line x1="67" y1="45" x2="73" y2="45"/><line x1="87" y1="45" x2="93" y2="45"/>
  </g>
  <circle cx="40" cy="45" r="7" fill="#E3922E"/><circle cx="60" cy="45" r="7" fill="#E3922E"/><circle cx="80" cy="45" r="7" fill="#E3922E"/><circle cx="100" cy="45" r="7" fill="#E3922E"/>
  <text x="70" y="80" font-size="9" text-anchor="middle" fill="#2B2A26">углеводы — энергия</text>
  <path d="M170 30c15 15 15 30 0 40s-15-25 0-40z" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="170" y="80" font-size="9" text-anchor="middle" fill="#2B2A26">липиды — мембраны</text>
  </svg>`,
  bank:[
    {p:"Какую роль в основном играют углеводы?",opts:["Источник энергии и строительный материал","Только хранение наследственной информации"],correct:0},
    {p:"Во что входят липиды в клетке, кроме запаса энергии?",opts:["В состав клеточных мембран","Только в ядро"],correct:0}
  ]},

{ n:"Ферменты",
  explain:"<b>Ферменты</b> — белки-катализаторы, ускоряющие химические реакции в клетке во много раз, при этом сами не расходуются.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <path d="M20 100c40-70 80-70 100-70" fill="none" stroke="#A83836" stroke-width="2" stroke-dasharray="4 3"/>
  <path d="M20 100c60-20 100-20 130 0" fill="none" stroke="#3F7A3D" stroke-width="2"/>
  <text x="70" y="20" font-size="9" fill="#A83836">без фермента</text>
  <text x="70" y="110" font-size="9" fill="#3F7A3D">с ферментом — быстрее</text>
  </svg>`,
  bank:[
    {p:"Что делают ферменты в клетке?",opts:["Ускоряют химические реакции","Замедляют все реакции"],correct:0},
    {p:"Расходуются ли ферменты в ходе реакции?",opts:["Нет, не расходуются","Да, полностью расходуются"],correct:0}
  ]},

{ n:"Вирусы",
  explain:"<b>Вирусы</b> — неклеточные формы жизни, способные размножаться только внутри клеток других организмов, используя их ресурсы.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <circle cx="55" cy="55" r="22" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <g stroke="#2B2A26" stroke-width="2"><line x1="55" y1="33" x2="55" y2="20"/><line x1="55" y1="77" x2="55" y2="90"/><line x1="33" y1="55" x2="20" y2="55"/><line x1="77" y1="55" x2="90" y2="55"/><line x1="39" y1="39" x2="29" y2="29"/><line x1="71" y1="71" x2="81" y2="81"/><line x1="39" y1="71" x2="29" y2="81"/><line x1="71" y1="39" x2="81" y2="29"/></g>
  <text x="55" y="105" font-size="9" text-anchor="middle" fill="#2B2A26">вирус</text>
  <circle cx="165" cy="60" r="45" fill="#5F9A5C" fill-opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="165" cy="60" r="16" fill="#9973B8" opacity="0.85"/>
  <path d="M100 55l30 5" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="2 2"/>
  <text x="165" y="115" font-size="9" text-anchor="middle" fill="#2B2A26">клетка-хозяин</text>
  </svg>`,
  bank:[
    {p:"Являются ли вирусы клеточными организмами?",opts:["Нет, они неклеточные","Да, состоят из клеток"],correct:0},
    {p:"Где вирусы способны размножаться?",opts:["Только внутри клеток других организмов","Самостоятельно, вне клеток"],correct:0}
  ]}

];
