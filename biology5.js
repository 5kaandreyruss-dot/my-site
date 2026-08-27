/* Биология, 5 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Новый предмет для 5 класса: введение в биологию, царства живой природы, клетка, растения. */

const BIOLOGY5_MOD = [

{ n:"Что изучает биология",
  explain:"<b>Биология</b> — наука о живой природе: о растениях, животных, грибах, бактериях и человеке. Слово «биология» переводится с греческого как «наука о жизни».",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <rect x="4" y="4" width="232" height="112" rx="12" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="45" y="60" font-size="30" text-anchor="middle">🌳</text>
  <text x="105" y="60" font-size="30" text-anchor="middle">🐦</text>
  <text x="165" y="60" font-size="30" text-anchor="middle">🍄</text>
  <text x="45" y="95" font-size="11" text-anchor="middle" fill="#2B2A26">растения</text>
  <text x="105" y="95" font-size="11" text-anchor="middle" fill="#2B2A26">животные</text>
  <text x="165" y="95" font-size="11" text-anchor="middle" fill="#2B2A26">грибы</text>
  <text x="210" y="60" font-size="26" text-anchor="middle">🔬</text>
  <text x="210" y="95" font-size="11" text-anchor="middle" fill="#2B2A26">биолог</text>
  </svg>`,
  bank:[
    {p:"Что изучает биология?",opts:["Живую природу","Только звёзды и планеты","Только историю"],correct:0},
    {p:"Как переводится слово «биология»?",opts:["Наука о жизни","Наука о числах","Наука о камнях"],correct:0},
    {p:"Учёного, изучающего живую природу, называют...",opts:["Биолог","Географ","Астроном"],correct:0}
  ]},

{ n:"Царства живой природы",
  explain:"Живую природу делят на царства: <b>растения</b>, <b>животные</b>, <b>грибы</b> и <b>бактерии</b>. Каждое царство отличается строением и способом питания своих организмов.",
  svg:`<svg viewBox="0 0 220 220" width="220">
  <circle cx="110" cy="110" r="88" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="3 6"/>
  <path d="M110 22a88 88 0 0 1 88 88h-88z" fill="#5F9A5C" opacity="0.85"/>
  <path d="M198 110a88 88 0 0 1 -88 88v-88z" fill="#D6524F" opacity="0.85"/>
  <path d="M110 198a88 88 0 0 1 -88 -88h88z" fill="#E3922E" opacity="0.85"/>
  <path d="M22 110a88 88 0 0 1 88 -88v88z" fill="#3E8F86" opacity="0.85"/>
  <circle cx="110" cy="110" r="30" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="110" y="115" font-size="11" text-anchor="middle" fill="#2B2A26">царства</text>
  <text x="150" y="60" font-size="18" text-anchor="middle">🌳</text>
  <text x="160" y="150" font-size="18" text-anchor="middle">🐺</text>
  <text x="110" y="185" font-size="18" text-anchor="middle">🍄</text>
  <text x="60" y="150" font-size="14" text-anchor="middle">🦠</text>
  </svg>`,
  bank:[
    {p:"Сколько основных царств живой природы обычно выделяют?",opts:["Четыре","Два","Десять"],correct:0},
    {p:"К какому царству относится берёза?",opts:["Растения","Животные","Грибы"],correct:0},
    {p:"К какому царству относится волк?",opts:["Животные","Растения","Бактерии"],correct:0},
    {p:"К какому царству относится подберёзовик?",opts:["Грибы","Растения","Животные"],correct:0},
    {p:"Какие организмы из перечисленных состоят всего из одной клетки и невидимы без микроскопа?",opts:["Бактерии","Деревья","Слоны"],correct:0}
  ]},

{ n:"Клетка — единица жизни",
  explain:"<b>Клетка</b> — самая маленькая единица строения живых организмов. Одни организмы состоят из одной клетки (бактерии), другие — из миллиардов клеток (человек).",
  svg:`<svg viewBox="0 0 260 140" width="260">
  <circle cx="65" cy="70" r="50" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="65" cy="70" r="18" fill="#9973B8" stroke="#725189" stroke-width="1.5"/>
  <text x="65" y="130" font-size="11" text-anchor="middle" fill="#2B2A26">одна клетка</text>
  <circle cx="170" cy="45" r="16" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="170" cy="45" r="6" fill="#9973B8"/>
  <circle cx="205" cy="55" r="16" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="205" cy="55" r="6" fill="#9973B8"/>
  <circle cx="185" cy="85" r="16" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="185" cy="85" r="6" fill="#9973B8"/>
  <circle cx="220" cy="90" r="16" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="220" cy="90" r="6" fill="#9973B8"/>
  <text x="195" y="130" font-size="11" text-anchor="middle" fill="#2B2A26">миллиарды клеток</text>
  </svg>`,
  bank:[
    {p:"Как называется самая маленькая единица строения живого организма?",opts:["Клетка","Атом","Молекула"],correct:0},
    {p:"Из скольких клеток может состоять организм человека?",opts:["Из миллиардов клеток","Только из одной","Из десяти"],correct:0},
    {p:"Каким прибором учёные рассматривают клетки?",opts:["Микроскопом","Телескопом","Барометром"],correct:0},
    {p:"Организм, состоящий всего из одной клетки, называют...",opts:["Одноклеточным","Многоклеточным"],correct:0}
  ]},

{ n:"Среды обитания живых организмов",
  explain:"Живые организмы обитают в разных средах: <b>наземно-воздушной</b> (суша и воздух), <b>водной</b> (реки, моря), <b>почвенной</b> (в земле) и даже внутри других организмов.",
  svg:`<svg viewBox="0 0 240 160" width="240">
  <rect x="0" y="0" width="240" height="40" fill="#DCE9F6"/>
  <rect x="0" y="40" width="240" height="35" fill="#FFF3C9"/>
  <rect x="0" y="75" width="240" height="45" fill="#3B6EA5" opacity="0.25"/>
  <rect x="0" y="120" width="240" height="40" fill="#B96F16" opacity="0.3"/>
  <text x="30" y="26" font-size="18">🐦</text>
  <text x="80" y="64" font-size="18">🦌</text>
  <text x="140" y="105" font-size="18">🐟</text>
  <text x="190" y="150" font-size="18">🪱</text>
  <text x="230" y="26" font-size="10" text-anchor="end" fill="#2B2A26">воздух</text>
  <text x="230" y="64" font-size="10" text-anchor="end" fill="#2B2A26">суша</text>
  <text x="230" y="105" font-size="10" text-anchor="end" fill="#2B2A26">вода</text>
  <text x="230" y="150" font-size="10" text-anchor="end" fill="#2B2A26">почва</text>
  </svg>`,
  bank:[
    {p:"В какой среде обитания живёт рыба?",opts:["В водной","В наземно-воздушной","В почвенной"],correct:0},
    {p:"В какой среде обитания живёт дождевой червь?",opts:["В почвенной","В водной","В наземно-воздушной"],correct:0},
    {p:"В какой среде обитания живёт большинство птиц?",opts:["В наземно-воздушной","В почвенной","В водной"],correct:0},
    {p:"Организмы, которые живут внутри других живых организмов, называют...",opts:["Паразитами","Хищниками","Растениями"],correct:0}
  ]},

{ n:"Строение растения",
  explain:"У большинства растений есть <b>корень</b> (держит в почве и берёт воду), <b>стебель</b> (проводит вещества), <b>листья</b> (улавливают свет для питания) и <b>цветок</b>, из которого позже образуется плод с семенами.",
  svg:`<svg viewBox="0 0 200 220" width="200">
  <line x1="10" y1="150" x2="190" y2="150" stroke="#B96F16" stroke-width="2" stroke-dasharray="4 4"/>
  <circle cx="100" cy="55" r="14" fill="#D6524F" opacity="0.9"/>
  <circle cx="82" cy="48" r="11" fill="#E3922E" opacity="0.9"/>
  <circle cx="118" cy="48" r="11" fill="#E3922E" opacity="0.9"/>
  <circle cx="100" cy="42" r="8" fill="#FFDE59"/>
  <line x1="100" y1="65" x2="100" y2="148" stroke="#3F7A3D" stroke-width="6" stroke-linecap="round"/>
  <path d="M100 90c-20-4-32 8-36 20 16 6 30-4 36-20z" fill="#5F9A5C"/>
  <path d="M100 115c20-4 32 8 36 20-16 6-30-4-36-20z" fill="#5F9A5C"/>
  <path d="M100 150c-6 14-4 30 2 40M100 150c6 14 4 30-2 40M100 150c-14 8-20 22-18 36M100 150c14 8 20 22 18 36" stroke="#B96F16" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="140" y="50" font-size="11" fill="#2B2A26">цветок</text>
  <text x="140" y="100" font-size="11" fill="#2B2A26">лист</text>
  <text x="112" y="130" font-size="11" fill="#2B2A26">стебель</text>
  <text x="118" y="200" font-size="11" fill="#2B2A26">корень</text>
  </svg>`,
  bank:[
    {p:"Какая часть растения удерживает его в почве и впитывает воду?",opts:["Корень","Лист","Цветок"],correct:0},
    {p:"Какая часть растения улавливает свет для питания?",opts:["Лист","Корень","Стебель"],correct:0},
    {p:"Из чего позже образуется плод с семенами?",opts:["Из цветка","Из корня","Из стебля"],correct:0},
    {p:"Какая часть растения проводит воду и питательные вещества от корня к листьям?",opts:["Стебель","Цветок","Плод"],correct:0},
    {p:"Процесс, при котором растения на свету создают себе пищу, называется...",opts:["Фотосинтез","Дыхание","Опыление"],correct:0}
  ]},

{ n:"Грибы",
  explain:"Грибы — отдельное царство живой природы, они не растения и не животные. У грибов нет листьев и цветков, а размножаются они <b>спорами</b>. Некоторые грибы съедобные, а некоторые — ядовитые.",
  svg:`<svg viewBox="0 0 180 180" width="180">
  <ellipse cx="90" cy="70" rx="55" ry="32" fill="#D6524F" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="65" cy="60" r="5" fill="#FFDE59"/>
  <circle cx="100" cy="50" r="4" fill="#FFDE59"/>
  <circle cx="120" cy="70" r="5" fill="#FFDE59"/>
  <rect x="75" y="85" width="30" height="55" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <path d="M40 155c30-15 70-15 100 0" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="2 4"/>
  <circle cx="45" cy="160" r="1.5" fill="#736C5E"/><circle cx="60" cy="165" r="1.5" fill="#736C5E"/>
  <circle cx="135" cy="160" r="1.5" fill="#736C5E"/><circle cx="120" cy="165" r="1.5" fill="#736C5E"/>
  <text x="90" y="80" font-size="10" text-anchor="middle" fill="#fff">шляпка</text>
  <text x="90" y="115" font-size="10" text-anchor="middle" fill="#2B2A26">ножка</text>
  <text x="90" y="175" font-size="10" text-anchor="middle" fill="#736C5E">споры</text>
  </svg>`,
  bank:[
    {p:"Грибы относятся к растениям или к отдельному царству?",opts:["К отдельному царству","К растениям","К животным"],correct:0},
    {p:"Чем размножаются грибы?",opts:["Спорами","Семенами","Цветами"],correct:0},
    {p:"Все ли грибы можно есть?",opts:["Нет, некоторые ядовиты","Да, все съедобны"],correct:0},
    {p:"Есть ли у грибов листья и цветки?",opts:["Нет","Да"],correct:0}
  ]},

{ n:"Бактерии",
  explain:"<b>Бактерии</b> — самые маленькие живые организмы, состоят из одной клетки и невидимы без микроскопа. Одни бактерии полезны человеку (помогают пищеварению), другие могут вызывать болезни.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <circle cx="90" cy="75" r="60" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <line x1="133" y1="118" x2="180" y2="150" stroke="#2B2A26" stroke-width="8" stroke-linecap="round"/>
  <rect x="55" y="55" width="26" height="10" rx="5" fill="#5F9A5C" transform="rotate(-20 68 60)"/>
  <rect x="90" y="80" width="26" height="10" rx="5" fill="#5F9A5C" transform="rotate(15 103 85)"/>
  <circle cx="70" cy="95" r="7" fill="#3E8F86"/>
  <circle cx="115" cy="55" r="6" fill="#3E8F86"/>
  <text x="90" y="150" font-size="11" text-anchor="middle" fill="#2B2A26">под микроскопом</text>
  </svg>`,
  bank:[
    {p:"Из скольких клеток состоит бактерия?",opts:["Из одной","Из тысячи","Из миллиона"],correct:0},
    {p:"Можно ли увидеть бактерию невооружённым глазом?",opts:["Нет, нужен микроскоп","Да, легко"],correct:0},
    {p:"Все ли бактерии вредны для человека?",opts:["Нет, некоторые полезны","Да, все вредны"],correct:0},
    {p:"Что могут вызывать некоторые вредные бактерии?",opts:["Болезни","Радугу","Дождь"],correct:0}
  ]},

{ n:"Питание и дыхание живых организмов",
  explain:"Все живые организмы питаются и дышат. Растения сами создают себе пищу на свету, а животные питаются готовой пищей — растениями или другими животными.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <text x="35" y="35" font-size="20">☀️</text>
  <path d="M35 45v20" stroke="#E3922E" stroke-width="2"/>
  <path d="M40 80c-14-4-22 6-25 18 12 4 22-4 25-18z" fill="#5F9A5C"/>
  <line x1="40" y1="80" x2="40" y2="125" stroke="#3F7A3D" stroke-width="5" stroke-linecap="round"/>
  <text x="40" y="138" font-size="6" text-anchor="middle" fill="#2B2A26">растение питается светом</text>
  <text x="180" y="45" font-size="26" text-anchor="middle">🐇</text>
  <path d="M150 80c-10-3-16 4-18 13 9 3 16-3 18-13z" fill="#5F9A5C"/>
  <path d="M155 70l15 5" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="2 2"/>
  <text x="180" y="138" font-size="10" text-anchor="middle" fill="#2B2A26">животное ест растения</text>
  </svg>`,
  bank:[
    {p:"Могут ли растения сами создавать себе пищу?",opts:["Да, на свету (фотосинтез)","Нет, только едят готовую пищу"],correct:0},
    {p:"Чем питаются животные?",opts:["Готовой пищей — растениями или другими животными","Только солнечным светом"],correct:0},
    {p:"Животное, которое питается только растениями, называют...",opts:["Травоядным","Хищником","Паразитом"],correct:0},
    {p:"Животное, которое питается другими животными, называют...",opts:["Хищником","Травоядным","Грибом"],correct:0},
    {p:"Нужен ли кислород живым организмам для дыхания?",opts:["Да, почти всем","Нет, никому не нужен"],correct:0}
  ]},

{ n:"Признаки живых организмов",
  explain:"Все живые организмы обладают общими признаками: они <b>питаются, дышат, растут, размножаются</b> и реагируют на окружающую среду.",
  svg:`<svg viewBox="0 0 260 100" width="260">
  <g font-size="24" text-anchor="middle">
  <text x="30" y="45">🍽️</text>
  <text x="85" y="45">💨</text>
  <text x="140" y="45">🌱</text>
  <text x="195" y="45">🐣</text>
  <text x="245" y="45">⚡</text>
  </g>
  <g font-size="9" text-anchor="middle" fill="#2B2A26">
  <text x="30" y="70">питание</text>
  <text x="85" y="70">дыхание</text>
  <text x="140" y="70">рост</text>
  <text x="195" y="70">размн.</text>
  <text x="245" y="70">реакция</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что из этого — признак живого организма?",opts:["Рост и размножение","Только неподвижность","Отсутствие всяких изменений"],correct:0},
    {p:"Реагируют ли живые организмы на окружающую среду?",opts:["Да, реагируют","Нет, никогда"],correct:0},
    {p:"Является ли размножение признаком живого?",opts:["Да, является","Нет, не является"],correct:0}
  ]},

{ n:"Разнообразие растений",
  explain:"Растения делят на группы: водоросли (живут в воде, без корня и листьев), мхи, папоротники, хвойные (шишки и иголки) и цветковые (цветок и плод).",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <path d="M10 60c10-15 20 15 30 0s20 15 30 0" fill="none" stroke="#3E8F86" stroke-width="3"/>
  <text x="40" y="100" font-size="9" text-anchor="middle" fill="#2B2A26">водоросли</text>
  <circle cx="100" cy="60" r="4" fill="#5F9A5C"/><circle cx="108" cy="55" r="4" fill="#5F9A5C"/><circle cx="112" cy="63" r="4" fill="#5F9A5C"/>
  <text x="106" y="100" font-size="9" text-anchor="middle" fill="#2B2A26">мхи</text>
  <path d="M150 75c0-25 15-40 15-40s-5 20-2 40" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1"/>
  <text x="158" y="100" font-size="9" text-anchor="middle" fill="#2B2A26">папоротники</text>
  <ellipse cx="200" cy="60" rx="9" ry="16" fill="#3F7A3D"/>
  <text x="200" y="100" font-size="9" text-anchor="middle" fill="#2B2A26">хвойные</text>
  <circle cx="240" cy="55" r="8" fill="#D9679A"/><circle cx="234" cy="62" r="8" fill="#D9679A"/><circle cx="246" cy="62" r="8" fill="#D9679A"/>
  <text x="240" y="100" font-size="7" text-anchor="middle" fill="#2B2A26">цветковые</text>
  </svg>`,
  bank:[
    {p:"У какой группы растений нет настоящего корня, и они живут в воде?",opts:["Водоросли","Хвойные","Цветковые"],correct:0},
    {p:"У какой группы растений есть шишки вместо цветков?",opts:["Хвойные","Цветковые","Мхи"],correct:0},
    {p:"Самая многочисленная группа растений на Земле — это...",opts:["Цветковые","Водоросли","Мхи"],correct:0}
  ]},

{ n:"Значение растений в природе и жизни человека",
  explain:"Растения выделяют кислород, необходимый для дыхания, служат пищей животным и человеку, а также используются для получения древесины, лекарств и других материалов.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <path d="M40 90c-16-4-26 8-30 22 14 6 26-4 30-22z" fill="#5F9A5C"/>
  <line x1="40" y1="90" x2="40" y2="112" stroke="#3F7A3D" stroke-width="4"/>
  <text x="40" y="35" font-size="14" text-anchor="middle" fill="#3B6EA5" font-weight="700">O₂</text>
  <path d="M40 55v25" stroke="#3B6EA5" stroke-width="2"/>
  <circle cx="120" cy="70" r="18" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <path d="M120 52c3-6 8-6 8-6" stroke="#3F7A3D" stroke-width="2" fill="none"/>
  <text x="120" y="105" font-size="9" text-anchor="middle" fill="#2B2A26">пища</text>
  <rect x="180" y="55" width="45" height="18" rx="4" fill="#B96F16"/>
  <ellipse cx="180" cy="64" rx="6" ry="9" fill="#E3922E"/>
  <text x="202" y="90" font-size="9" text-anchor="middle" fill="#2B2A26">древесина</text>
  </svg>`,
  bank:[
    {p:"Что выделяют растения в процессе фотосинтеза, необходимое для дыхания?",opts:["Кислород","Углекислый газ","Азот"],correct:0},
    {p:"Для чего люди используют древесину?",opts:["Для строительства и производства бумаги","Только для еды","Только для одежды"],correct:0}
  ]}

];
