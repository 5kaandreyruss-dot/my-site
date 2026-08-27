/* Химия, 11 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Обобщение курса: строение вещества, химические реакции, металлы/неметаллы, химия и жизнь. */

const CHEMISTRY11_MOD = [

{ n:"Строение атома: обобщение",
  explain:"Атом состоит из ядра (протоны и нейтроны) и электронов, движущихся вокруг ядра по энергетическим уровням. Число электронов на внешнем уровне определяет химические свойства элемента.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="100" y="104" font-size="9" text-anchor="middle" fill="#FFFEF8">ядро</text>
  <circle cx="100" cy="100" r="35" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="2 4"/>
  <circle cx="100" cy="100" r="60" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="2 4"/>
  <circle cx="100" cy="100" r="85" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="2 4"/>
  <circle cx="135" cy="100" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <circle cx="65" cy="100" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <circle cx="100" cy="40" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <circle cx="100" cy="160" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <circle cx="147" cy="130" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <circle cx="53" cy="70" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <circle cx="100" cy="15" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <text x="100" y="188" font-size="10" text-anchor="middle" fill="#736C5E">внешний уровень определяет свойства</text>
  </svg>`,
  bank:[
    {p:"Что определяет химические свойства элемента?",opts:["Число электронов на внешнем энергетическом уровне","Только цвет вещества"],correct:0}
  ]},

{ n:"Периодический закон: итоговое повторение",
  explain:"Периодический закон Менделеева гласит: свойства элементов находятся в периодической зависимости от заряда ядра атома. В периодической таблице элементы расположены по возрастанию заряда ядра.",
  svg:`<svg viewBox="0 0 260 90" width="260">
  <circle cx="30" cy="45" r="8" fill="#D6524F" stroke="#A83836" stroke-width="2"/><text x="30" y="70" font-size="9" text-anchor="middle" fill="#736C5E">+3</text>
  <circle cx="80" cy="45" r="10" fill="#D6524F" stroke="#A83836" stroke-width="2"/><text x="80" y="70" font-size="9" text-anchor="middle" fill="#736C5E">+11</text>
  <circle cx="140" cy="45" r="12" fill="#D6524F" stroke="#A83836" stroke-width="2"/><text x="140" y="70" font-size="9" text-anchor="middle" fill="#736C5E">+19</text>
  <circle cx="210" cy="45" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/><text x="210" y="70" font-size="9" text-anchor="middle" fill="#736C5E">+37</text>
  <line x1="15" y1="15" x2="245" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="245,15 237,11 237,19" fill="#2B2A26"/>
  <text x="130" y="10" font-size="9" text-anchor="middle" fill="#736C5E">заряд ядра растёт</text>
  </svg>`,
  bank:[
    {p:"По какому принципу расположены элементы в периодической таблице?",opts:["По возрастанию заряда ядра","По алфавиту названий"],correct:0}
  ]},

{ n:"Виды химической связи",
  explain:"Основные виды химической связи: <b>ковалентная</b> (общая электронная пара между атомами), <b>ионная</b> (притяжение противоположно заряженных ионов) и <b>металлическая</b> (в металлах).",
  svg:`<svg viewBox="0 0 280 110" width="280">
  <circle cx="35" cy="55" r="16" fill="#3B6EA5" opacity="0.7" stroke="#284D77" stroke-width="2"/>
  <circle cx="55" cy="55" r="16" fill="#3B6EA5" opacity="0.7" stroke="#284D77" stroke-width="2"/>
  <text x="45" y="95" font-size="9" text-anchor="middle" fill="#736C5E">ковалентная</text>
  <circle cx="130" cy="55" r="14" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/><text x="130" y="45" font-size="9" text-anchor="middle" fill="#2B2A26">+</text>
  <circle cx="165" cy="55" r="16" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/><text x="165" y="45" font-size="9" text-anchor="middle" fill="#FFFEF8">−</text>
  <text x="147" y="95" font-size="9" text-anchor="middle" fill="#736C5E">ионная</text>
  <circle cx="235" cy="45" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <circle cx="255" cy="45" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <circle cx="235" cy="65" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <circle cx="255" cy="65" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <circle cx="245" cy="55" r="2" fill="#3B6EA5" opacity="0.6"/><circle cx="230" cy="50" r="2" fill="#3B6EA5" opacity="0.6"/>
  <text x="245" y="95" font-size="9" text-anchor="middle" fill="#736C5E">металлическая</text>
  </svg>`,
  bank:[
    {p:"Что лежит в основе ковалентной связи?",opts:["Общая электронная пара между атомами","Притяжение целых молекул"],correct:0},
    {p:"Какая связь характерна для соединений металла и неметалла (например, соли)?",opts:["Ионная","Металлическая"],correct:0}
  ]},

{ n:"Скорость химической реакции",
  explain:"Скорость реакции зависит от концентрации реагентов, температуры и наличия катализатора. Повышение температуры обычно ускоряет реакцию.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <line x1="20" y1="100" x2="200" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="100" x2="20" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25 25c40 10 60 50 165 70" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <text x="10" y="20" font-size="9" fill="#736C5E">C</text>
  <text x="195" y="115" font-size="9" fill="#736C5E">t</text>
  <text x="110" y="112" font-size="9" text-anchor="middle" fill="#736C5E">концентрация со временем убывает</text>
  </svg>`,
  bank:[
    {p:"Что происходит со скоростью реакции при повышении температуры?",opts:["Обычно увеличивается","Обычно всегда уменьшается"],correct:0}
  ]},

{ n:"Катализаторы",
  explain:"<b>Катализатор</b> — вещество, ускоряющее химическую реакцию, но не расходующееся в ней. Катализаторы играют важную роль и в промышленности, и в живых организмах (ферменты).",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <line x1="15" y1="95" x2="205" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25 80c35-10 50-60 75-60s40 50 75 60" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <path d="M25 80c35-4 50-35 75-35s40 31 75 35" fill="none" stroke="#5F9A5C" stroke-width="2.5"/>
  <text x="165" y="25" font-size="6" fill="#A83836">без катализатора</text>
  <text x="165" y="102" font-size="6" fill="#3F7A3D">с катализатором</text>
  </svg>`,
  bank:[
    {p:"Расходуется ли катализатор в ходе реакции?",opts:["Нет, не расходуется","Да, полностью расходуется"],correct:0}
  ]},

{ n:"Металлы в химии и жизни",
  explain:"Металлы широко используются в технике и повседневной жизни. В организме человека также важны металлы: например, железо входит в состав гемоглобина крови.",
  svg:`<svg viewBox="0 0 180 140" width="180">
  <circle cx="90" cy="70" r="55" fill="#D6524F" opacity="0.15" stroke="#A83836" stroke-width="2" stroke-dasharray="3 4"/>
  <circle cx="90" cy="70" r="16" fill="#A83836" stroke="#2B2A26" stroke-width="2"/>
  <text x="90" y="75" font-size="11" text-anchor="middle" fill="#FFFEF8">Fe</text>
  <text x="90" y="130" font-size="10" text-anchor="middle" fill="#736C5E">железо в гемоглобине крови</text>
  </svg>`,
  bank:[
    {p:"Какой металл входит в состав гемоглобина крови?",opts:["Железо","Золото"],correct:0}
  ]},

{ n:"Химическое загрязнение окружающей среды",
  explain:"Промышленные выбросы, выхлопные газы автомобилей и бытовые отходы загрязняют воздух, воду и почву химическими веществами, что наносит вред живой природе и здоровью людей.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="30" y="60" width="70" height="50" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <rect x="45" y="30" width="16" height="35" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="53" cy="20" r="6" fill="#736C5E" opacity="0.6"/>
  <circle cx="60" cy="10" r="8" fill="#736C5E" opacity="0.5"/>
  <circle cx="70" cy="2" r="9" fill="#736C5E" opacity="0.4"/>
  <rect x="0" y="110" width="220" height="20" fill="#3B6EA5" opacity="0.3"/>
  <text x="115" y="124" font-size="9" fill="#284D77">загрязнённая вода</text>
  </svg>`,
  bank:[
    {p:"Что из этого — источник химического загрязнения?",opts:["Промышленные выбросы","Чистая дождевая вода"],correct:0}
  ]},

{ n:"Полимеры в повседневной жизни",
  explain:"Полимеры (пластик, каучук, синтетические волокна) широко используются в быту и промышленности, но многие из них плохо разлагаются в природе, что создаёт экологическую проблему.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <path d="M80 20h20v15l10 10v65a5 5 0 0 1 -5 5H75a5 5 0 0 1 -5-5V45l10-10z" fill="#3B6EA5" opacity="0.5" stroke="#284D77" stroke-width="2"/>
  <circle cx="150" cy="90" r="28" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="150" y1="90" x2="150" y2="72" stroke="#2B2A26" stroke-width="2"/>
  <line x1="150" y1="90" x2="163" y2="90" stroke="#2B2A26" stroke-width="2"/>
  <text x="150" y="128" font-size="8" text-anchor="middle" fill="#736C5E">разлагается сотни лет</text>
  </svg>`,
  bank:[
    {p:"Почему пластик создаёт экологическую проблему?",opts:["Он плохо разлагается в природе","Он мгновенно исчезает без следа"],correct:0}
  ]},

{ n:"Электролиз",
  explain:"<b>Электролиз</b> — химическая реакция разложения вещества под действием электрического тока. Используется для получения чистых металлов и других веществ.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <path d="M30 20v90a10 10 0 0 0 10 10h140a10 10 0 0 0 10-10V20z" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="60" y="10" width="10" height="90" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <rect x="150" y="10" width="10" height="90" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="65" y="8" font-size="10" text-anchor="middle" fill="#A83836">−</text>
  <text x="155" y="8" font-size="10" text-anchor="middle" fill="#284D77">+</text>
  <circle cx="65" cy="60" r="3" fill="#3E8F86"/><circle cx="65" cy="75" r="2.5" fill="#3E8F86"/>
  <circle cx="155" cy="55" r="3" fill="#3E8F86"/><circle cx="155" cy="70" r="2.5" fill="#3E8F86"/>
  <text x="110" y="125" font-size="9" text-anchor="middle" fill="#736C5E">ток разлагает вещество на электродах</text>
  </svg>`,
  bank:[
    {p:"Под действием чего происходит электролиз?",opts:["Электрического тока","Только тепла"],correct:0},
    {p:"Для чего применяют электролиз?",opts:["Для получения чистых металлов","Только для нагрева воды"],correct:0}
  ]},

{ n:"Коррозия металлов",
  explain:"<b>Коррозия</b> — разрушение металлов под действием окружающей среды (влаги, кислорода, химических веществ), например ржавление железа.",
  svg:`<svg viewBox="0 0 200 100" width="200">
  <rect x="30" y="45" width="120" height="14" rx="6" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="35" cy="52" r="9" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="60" cy="48" r="6" fill="#B96F16" opacity="0.8"/>
  <circle cx="90" cy="56" r="7" fill="#D6524F" opacity="0.7"/>
  <circle cx="120" cy="46" r="5" fill="#B96F16" opacity="0.8"/>
  <circle cx="140" cy="55" r="6" fill="#D6524F" opacity="0.7"/>
  <text x="100" y="85" font-size="10" text-anchor="middle" fill="#736C5E">ржавление — пример коррозии</text>
  </svg>`,
  bank:[
    {p:"Что такое коррозия?",opts:["Разрушение металлов под действием среды","Укрепление металла"],correct:0},
    {p:"Что из этого — пример коррозии?",opts:["Ржавление железа","Плавление льда"],correct:0}
  ]},

{ n:"Химическая промышленность и производство удобрений",
  explain:"Химическая промышленность производит минеральные удобрения (азотные, фосфорные, калийные), которые повышают урожайность сельскохозяйственных культур.",
  svg:`<svg viewBox="0 0 160 140" width="160">
  <line x1="80" y1="120" x2="80" y2="60" stroke="#3F7A3D" stroke-width="5" stroke-linecap="round"/>
  <path d="M80 90c-18-4-28 6-32 18 16 6 28-4 32-18z" fill="#5F9A5C"/>
  <path d="M80 70c18-4 28 6 32 18-16 6-28-4-32-18z" fill="#5F9A5C"/>
  <circle cx="80" cy="55" r="10" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="55" cy="128" r="5" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <circle cx="70" cy="132" r="5" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <circle cx="90" cy="132" r="5" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <circle cx="105" cy="128" r="5" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <text x="80" y="14" font-size="10" text-anchor="middle" fill="#736C5E">удобрения повышают урожай</text>
  </svg>`,
  bank:[
    {p:"Для чего используют минеральные удобрения?",opts:["Для повышения урожайности культур","Только для окраски растений"],correct:0}
  ]},

{ n:"Химия и медицина",
  explain:"Химические открытия лежат в основе создания лекарств — от простых анальгетиков до сложных препаратов для лечения серьёзных заболеваний.",
  svg:`<svg viewBox="0 0 180 100" width="180">
  <rect x="40" y="35" width="100" height="30" rx="15" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <line x1="90" y1="35" x2="90" y2="65" stroke="#A8447A" stroke-width="2"/>
  <rect x="40" y="35" width="50" height="30" rx="15" fill="#FFFEF8" stroke="#A8447A" stroke-width="2"/>
  <text x="90" y="88" font-size="10" text-anchor="middle" fill="#736C5E">лекарства — результат химии</text>
  </svg>`,
  bank:[
    {p:"Что лежит в основе создания лекарств?",opts:["Химические открытия и исследования","Только народные приметы"],correct:0}
  ]}

];
