/* Химия, 8 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Новый предмет для 8 класса: атомы, элементы, периодическая таблица, вещества, реакции, кислоты и основания. */

const CHEMISTRY8_MOD = [

{ n:"Что изучает химия",
  explain:"<b>Химия</b> — наука о веществах, их составе, строении и превращениях друг в друга. Всё вокруг нас состоит из веществ: вода, воздух, металлы, пластик.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <path d="M40 20c14 18 20 30 20 40a20 20 0 1 1 -40 0c0-10 6-22 20-40z" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="40" y="100" font-size="11" text-anchor="middle" fill="#2B2A26">вода</text>
  <rect x="95" y="35" width="50" height="30" rx="4" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <line x1="95" y1="45" x2="145" y2="45" stroke="#FFFEF8" stroke-width="2" opacity="0.5"/>
  <text x="120" y="100" font-size="11" text-anchor="middle" fill="#2B2A26">металл</text>
  <circle cx="185" cy="35" r="3" fill="#3E8F86"/><circle cx="200" cy="45" r="3" fill="#3E8F86"/>
  <circle cx="210" cy="30" r="3" fill="#3E8F86"/><circle cx="195" cy="60" r="3" fill="#3E8F86"/>
  <circle cx="215" cy="55" r="3" fill="#3E8F86"/>
  <ellipse cx="200" cy="45" rx="35" ry="28" fill="none" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="3 4"/>
  <text x="200" y="100" font-size="11" text-anchor="middle" fill="#2B2A26">газ</text>
  </svg>`,
  bank:[
    {p:"Что изучает химия?",opts:["Вещества и их превращения","Только живые организмы","Только звёзды"],correct:0},
    {p:"Из чего состоит всё вокруг нас, с точки зрения химии?",opts:["Из веществ","Из ничего"],correct:0},
    {p:"Учёного, который занимается химией, называют...",opts:["Химик","Биолог"],correct:0}
  ]},

{ n:"Атомы и молекулы",
  explain:"<b>Атом</b> — мельчайшая частица вещества. <b>Молекула</b> — частица, состоящая из нескольких атомов, соединённых химической связью, например молекула воды H₂O состоит из двух атомов водорода и одного атома кислорода.",
  svg:`<svg viewBox="0 0 280 150" width="280">
  <circle cx="60" cy="75" r="11" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <ellipse cx="60" cy="75" rx="48" ry="20" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="3 4"/>
  <ellipse cx="60" cy="75" rx="30" ry="46" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="3 4" transform="rotate(60 60 75)"/>
  <circle cx="108" cy="75" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <circle cx="42" cy="32" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <text x="60" y="135" font-size="12" text-anchor="middle" fill="#2B2A26">атом</text>
  <line x1="200" y1="60" x2="175" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <line x1="200" y1="60" x2="225" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="200" cy="60" r="15" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="175" cy="95" r="9" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="225" cy="95" r="9" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="200" y="45" font-size="11" text-anchor="middle" fill="#2B2A26">O</text>
  <text x="175" y="99" font-size="10" text-anchor="middle" fill="#FFFEF8">H</text>
  <text x="225" y="99" font-size="10" text-anchor="middle" fill="#FFFEF8">H</text>
  <text x="200" y="135" font-size="12" text-anchor="middle" fill="#2B2A26">молекула H₂O</text>
  </svg>`,
  bank:[
    {p:"Что такое атом?",opts:["Мельчайшая частица вещества","Самая большая частица"],correct:0},
    {p:"Из скольких атомов водорода состоит молекула воды H₂O?",opts:["Из двух","Из одного","Из трёх"],correct:0},
    {p:"Сколько атомов кислорода в молекуле воды H₂O?",opts:["Один","Два"],correct:0}
  ]},

{ n:"Химические элементы",
  explain:"<b>Химический элемент</b> — вид атомов с одинаковым зарядом ядра. Каждый элемент обозначается символом, например O (кислород), H (водород), Fe (железо).",
  svg:`<svg viewBox="0 0 260 100" width="260">
  <rect x="10" y="10" width="65" height="75" rx="6" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="18" y="26" font-size="10" fill="#736C5E">1</text>
  <text x="42" y="60" font-size="26" text-anchor="middle" fill="#3B6EA5" font-weight="700">H</text>
  <text x="42" y="78" font-size="9" text-anchor="middle" fill="#2B2A26">водород</text>
  <rect x="97" y="10" width="65" height="75" rx="6" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="105" y="26" font-size="10" fill="#736C5E">8</text>
  <text x="129" y="60" font-size="26" text-anchor="middle" fill="#D6524F" font-weight="700">O</text>
  <text x="129" y="78" font-size="9" text-anchor="middle" fill="#2B2A26">кислород</text>
  <rect x="184" y="10" width="65" height="75" rx="6" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="192" y="26" font-size="10" fill="#736C5E">26</text>
  <text x="216" y="60" font-size="24" text-anchor="middle" fill="#9973B8" font-weight="700">Fe</text>
  <text x="216" y="78" font-size="9" text-anchor="middle" fill="#2B2A26">железо</text>
  </svg>`,
  bank:[
    {p:"Что определяет, к какому химическому элементу относится атом?",opts:["Заряд ядра атома","Цвет атома"],correct:0},
    {p:"Каким символом обозначается кислород?",opts:["O","K","Q"],correct:0},
    {p:"Каким символом обозначается железо?",opts:["Fe","Fr","Ir"],correct:0},
    {p:"Каким символом обозначается водород?",opts:["H","В","W"],correct:0}
  ]},

{ n:"Периодическая система Менделеева",
  explain:"Русский учёный Дмитрий <b>Менделеев</b> открыл периодический закон и создал таблицу, где химические элементы расположены по возрастанию их атомной массы и свойств.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <text x="100" y="14" font-size="11" text-anchor="middle" fill="#736C5E">Периодическая таблица</text>
  <rect x="20" y="24" width="20" height="20" fill="#3B6EA5" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="46" y="24" width="20" height="20" fill="#5F9A5C" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="72" y="24" width="20" height="20" fill="#E3922E" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="98" y="24" width="20" height="20" fill="#9973B8" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="124" y="24" width="20" height="20" fill="#3E8F86" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="20" y="50" width="20" height="20" fill="#D6524F" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="46" y="50" width="20" height="20" fill="#FFDE59" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="72" y="50" width="20" height="20" fill="#D9679A" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="98" y="50" width="20" height="20" fill="#3B6EA5" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="124" y="50" width="20" height="20" fill="#5F9A5C" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="20" y="76" width="20" height="20" fill="#E3922E" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="46" y="76" width="20" height="20" fill="#9973B8" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="72" y="76" width="20" height="20" fill="#FFDE59" stroke="#2B2A26" stroke-width="2.5"/>
  <rect x="98" y="76" width="20" height="20" fill="#3E8F86" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="124" y="76" width="20" height="20" fill="#D6524F" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="20" y="102" width="20" height="20" fill="#3B6EA5" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="46" y="102" width="20" height="20" fill="#D9679A" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="72" y="102" width="20" height="20" fill="#5F9A5C" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="98" y="102" width="20" height="20" fill="#E3922E" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <rect x="124" y="102" width="20" height="20" fill="#9973B8" opacity="0.5" stroke="#2B2A26" stroke-width="1"/>
  <text x="82" y="90" font-size="10" text-anchor="middle" fill="#2B2A26" font-weight="700">Mn</text>
  <text x="160" y="90" font-size="7" fill="#736C5E">Менделеев</text>
  </svg>`,
  bank:[
    {p:"Кто создал периодическую систему химических элементов?",opts:["Дмитрий Менделеев","Исаак Ньютон","Альберт Эйнштейн"],correct:0},
    {p:"По какому принципу расположены элементы в таблице Менделеева?",opts:["По возрастанию атомной массы и свойств","В алфавитном порядке названий"],correct:0},
    {p:"Гражданином какой страны был Менделеев?",opts:["России","Германии"],correct:0}
  ]},

{ n:"Простые и сложные вещества",
  explain:"<b>Простое вещество</b> состоит из атомов одного элемента (кислород O₂, железо Fe). <b>Сложное вещество</b> (соединение) состоит из атомов разных элементов (вода H₂O, соль NaCl).",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <line x1="50" y1="60" x2="80" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="50" cy="60" r="13" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="80" cy="60" r="13" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="65" y="100" font-size="12" text-anchor="middle" fill="#2B2A26">простое: O₂</text>
  <line x1="180" y1="45" x2="160" y2="75" stroke="#2B2A26" stroke-width="2"/>
  <line x1="180" y1="45" x2="200" y2="75" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="180" cy="45" r="13" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="160" cy="75" r="8" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="200" cy="75" r="8" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="180" y="100" font-size="12" text-anchor="middle" fill="#2B2A26">сложное: H₂O</text>
  </svg>`,
  bank:[
    {p:"Из атомов скольких элементов состоит простое вещество?",opts:["Одного","Двух и более"],correct:0},
    {p:"Вода H₂O — простое или сложное вещество?",opts:["Сложное","Простое"],correct:0},
    {p:"Кислород O₂ — простое или сложное вещество?",opts:["Простое","Сложное"],correct:0}
  ]},

{ n:"Химические реакции",
  explain:"<b>Химическая реакция</b> — превращение одних веществ в другие. Признаки реакции: изменение цвета, выделение газа, образование осадка, выделение или поглощение тепла.",
  svg:`<svg viewBox="0 0 280 120" width="280">
  <circle cx="30" cy="60" r="16" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="30" y="65" font-size="9" text-anchor="middle" fill="#FFFEF8">A</text>
  <circle cx="70" cy="60" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="70" y="65" font-size="9" text-anchor="middle" fill="#2B2A26">B</text>
  <line x1="105" y1="60" x2="165" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="165,60 155,54 155,66" fill="#2B2A26"/>
  <circle cx="210" cy="60" r="18" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="210" y="65" font-size="9" text-anchor="middle" fill="#FFFEF8">AB</text>
  <circle cx="245" cy="35" r="4" fill="#3E8F86" opacity="0.7"/>
  <circle cx="255" cy="45" r="3" fill="#3E8F86" opacity="0.7"/>
  <circle cx="238" cy="25" r="2.5" fill="#3E8F86" opacity="0.7"/>
  <text x="140" y="30" font-size="10" text-anchor="middle" fill="#736C5E">реакция</text>
  <text x="253" y="20" font-size="9" fill="#2B2A26">газ</text>
  </svg>`,
  bank:[
    {p:"Что такое химическая реакция?",opts:["Превращение одних веществ в другие","Просто перемешивание без изменений"],correct:0},
    {p:"Что из этого может быть признаком химической реакции?",opts:["Выделение газа","Ничего из перечисленного"],correct:0},
    {p:"Может ли химическая реакция сопровождаться выделением тепла?",opts:["Да, может","Нет, никогда"],correct:0}
  ]},

{ n:"Кислоты",
  explain:"<b>Кислоты</b> — вещества, которые при растворении в воде образуют ионы водорода. Многие кислоты имеют кислый вкус (например, лимонная кислота) и изменяют цвет индикаторов.",
  svg:`<svg viewBox="0 0 260 90" width="260">
  <rect x="10" y="30" width="240" height="18" rx="4" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <rect x="10" y="30" width="34" height="18" fill="#D6524F"/>
  <rect x="44" y="30" width="34" height="18" fill="#E3922E"/>
  <rect x="78" y="30" width="34" height="18" fill="#FFDE59"/>
  <rect x="112" y="30" width="34" height="18" fill="#5F9A5C"/>
  <rect x="146" y="30" width="34" height="18" fill="#3E8F86"/>
  <rect x="180" y="30" width="34" height="18" fill="#3B6EA5"/>
  <rect x="214" y="30" width="36" height="18" fill="#284D77"/>
  <polygon points="30,30 25,18 35,18" fill="#A83836"/>
  <text x="30" y="14" font-size="10" text-anchor="middle" fill="#A83836">кислота</text>
  <text x="10" y="66" font-size="9" fill="#2B2A26">0</text>
  <text x="126" y="66" font-size="9" text-anchor="middle" fill="#2B2A26">7 нейтр.</text>
  <text x="242" y="66" font-size="9" fill="#2B2A26">14</text>
  </svg>`,
  bank:[
    {p:"Какой вкус часто имеют кислоты?",opts:["Кислый","Сладкий"],correct:0},
    {p:"Что образуют кислоты при растворении в воде?",opts:["Ионы водорода","Только соль"],correct:0},
    {p:"Что из этого — пример кислоты?",opts:["Лимонная кислота","Поваренная соль"],correct:0}
  ]},

{ n:"Основания (щёлочи)",
  explain:"<b>Основания</b> — вещества, противоположные кислотам по свойствам. Растворимые в воде основания называются <b>щелочами</b>, они часто имеют мыльную, скользкую на ощупь среду.",
  svg:`<svg viewBox="0 0 260 90" width="260">
  <rect x="10" y="30" width="240" height="18" rx="4" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <rect x="10" y="30" width="34" height="18" fill="#D6524F"/>
  <rect x="44" y="30" width="34" height="18" fill="#E3922E"/>
  <rect x="78" y="30" width="34" height="18" fill="#FFDE59"/>
  <rect x="112" y="30" width="34" height="18" fill="#5F9A5C"/>
  <rect x="146" y="30" width="34" height="18" fill="#3E8F86"/>
  <rect x="180" y="30" width="34" height="18" fill="#3B6EA5"/>
  <rect x="214" y="30" width="36" height="18" fill="#284D77"/>
  <polygon points="230,30 225,18 235,18" fill="#284D77"/>
  <text x="230" y="14" font-size="10" text-anchor="middle" fill="#284D77">щёлочь</text>
  <text x="10" y="66" font-size="9" fill="#2B2A26">0</text>
  <text x="126" y="66" font-size="9" text-anchor="middle" fill="#2B2A26">7 нейтр.</text>
  <text x="242" y="66" font-size="9" fill="#2B2A26">14</text>
  </svg>`,
  bank:[
    {p:"Как называются растворимые в воде основания?",opts:["Щёлочи","Кислоты"],correct:0},
    {p:"Основания по свойствам противоположны...",opts:["Кислотам","Металлам"],correct:0}
  ]},

{ n:"Индикаторы",
  explain:"<b>Индикаторы</b> — вещества, которые меняют цвет в зависимости от среды раствора: например, лакмус становится красным в кислоте и синим в щёлочи.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <path d="M50 20v70a20 20 0 0 0 40 0V20z" fill="#FDECC8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="46" y="14" width="48" height="10" rx="2" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <path d="M54 55v35a16 16 0 0 0 32 0V55z" fill="#D6524F" opacity="0.85"/>
  <text x="70" y="130" font-size="11" text-anchor="middle" fill="#2B2A26">кислота</text>
  <path d="M140 20v70a20 20 0 0 0 40 0V20z" fill="#FDECC8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="136" y="14" width="48" height="10" rx="2" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <path d="M144 55v35a16 16 0 0 0 32 0V55z" fill="#3B6EA5" opacity="0.85"/>
  <text x="160" y="130" font-size="11" text-anchor="middle" fill="#2B2A26">щёлочь</text>
  <text x="70" y="46" font-size="9" text-anchor="middle" fill="#2B2A26">лакмус</text>
  <text x="160" y="46" font-size="9" text-anchor="middle" fill="#FFFEF8">лакмус</text>
  </svg>`,
  bank:[
    {p:"Для чего используют индикаторы?",opts:["Чтобы определить, кислая или щелочная среда раствора","Чтобы взвесить вещество"],correct:0},
    {p:"Каким цветом становится лакмус в кислоте?",opts:["Красным","Синим"],correct:0},
    {p:"Каким цветом становится лакмус в щёлочи?",opts:["Синим","Красным"],correct:0}
  ]},

{ n:"Соли",
  explain:"<b>Соли</b> образуются при взаимодействии кислот с основаниями. Самая известная соль — поваренная соль (хлорид натрия, NaCl), которую мы используем в пище.",
  svg:`<svg viewBox="0 0 280 110" width="280">
  <circle cx="30" cy="55" r="15" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="30" y="59" font-size="8" text-anchor="middle" fill="#FFFEF8">HCl</text>
  <text x="55" y="59" font-size="14" fill="#2B2A26">+</text>
  <circle cx="80" cy="55" r="15" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="80" y="59" font-size="7" text-anchor="middle" fill="#FFFEF8">NaOH</text>
  <line x1="105" y1="55" x2="150" y2="55" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="150,55 140,49 140,61" fill="#2B2A26"/>
  <circle cx="185" cy="55" r="15" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="185" y="59" font-size="8" text-anchor="middle" fill="#2B2A26">NaCl</text>
  <text x="205" y="59" font-size="14" fill="#2B2A26">+</text>
  <circle cx="230" cy="55" r="12" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <text x="230" y="59" font-size="8" text-anchor="middle" fill="#FFFEF8">H₂O</text>
  <text x="150" y="90" font-size="10" text-anchor="middle" fill="#736C5E">кислота + основание → соль + вода</text>
  </svg>`,
  bank:[
    {p:"При взаимодействии чего образуются соли?",opts:["Кислот с основаниями","Только воды с воздухом"],correct:0},
    {p:"Как называется поваренная соль по-химически?",opts:["Хлорид натрия (NaCl)","Оксид натрия"],correct:0},
    {p:"Для чего мы используем поваренную соль в быту?",opts:["В пище","Только в лаборатории"],correct:0}
  ]},

{ n:"Оксиды",
  explain:"<b>Оксиды</b> — соединения химического элемента с кислородом. Например, вода H₂O — оксид водорода, углекислый газ CO₂ — оксид углерода.",
  svg:`<svg viewBox="0 0 260 100" width="260">
  <circle cx="30" cy="50" r="14" fill="#2B2A26" stroke="#2B2A26" stroke-width="2"/>
  <text x="30" y="54" font-size="10" text-anchor="middle" fill="#FFFEF8">C</text>
  <text x="52" y="54" font-size="14" fill="#2B2A26">+</text>
  <line x1="80" y1="50" x2="105" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="70" cy="50" r="11" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="105" cy="50" r="11" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="87" y="30" font-size="9" text-anchor="middle" fill="#736C5E">O₂</text>
  <line x1="130" y1="50" x2="170" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="170,50 160,44 160,56" fill="#2B2A26"/>
  <circle cx="200" cy="50" r="12" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="222" cy="50" r="14" fill="#2B2A26" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="244" cy="50" r="12" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <line x1="212" y1="50" x2="222" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <line x1="222" y1="50" x2="234" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <text x="222" y="88" font-size="6" text-anchor="middle" fill="#736C5E">CO₂ — оксид углерода</text>
  </svg>`,
  bank:[
    {p:"С каким элементом соединяется вещество, образуя оксид?",opts:["С кислородом","С водородом"],correct:0},
    {p:"Является ли углекислый газ CO₂ оксидом?",opts:["Да, это оксид углерода","Нет"],correct:0}
  ]},

{ n:"Валентность",
  explain:"<b>Валентность</b> — число, показывающее, сколько химических связей может образовать атом элемента. Например, у водорода валентность обычно I, у кислорода — II.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <circle cx="60" cy="60" r="16" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="60" y="65" font-size="12" text-anchor="middle" fill="#FFFEF8">H</text>
  <line x1="76" y1="60" x2="100" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <text x="60" y="100" font-size="10" text-anchor="middle" fill="#736C5E">валентность I</text>
  <circle cx="180" cy="60" r="18" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="180" y="65" font-size="12" text-anchor="middle" fill="#FFFEF8">O</text>
  <line x1="198" y1="52" x2="222" y2="42" stroke="#2B2A26" stroke-width="2"/>
  <line x1="198" y1="68" x2="222" y2="78" stroke="#2B2A26" stroke-width="2"/>
  <text x="180" y="100" font-size="10" text-anchor="middle" fill="#736C5E">валентность II</text>
  </svg>`,
  bank:[
    {p:"Что показывает валентность атома?",opts:["Сколько связей может образовать атом","Цвет атома"],correct:0},
    {p:"Какая обычная валентность у кислорода?",opts:["II","I"],correct:0}
  ]},

{ n:"Масса вещества и моль",
  explain:"<b>Моль</b> — единица количества вещества в химии, содержащая огромное фиксированное число частиц (постоянная Авогадро). Она позволяет удобно считать очень маленькие частицы вещества.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <path d="M50 30h100v80a10 10 0 0 1 -10 10H60a10 10 0 0 1 -10-10z" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="45" y="20" width="110" height="14" rx="3" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="65" cy="50" r="3" fill="#3B6EA5"/><circle cx="80" cy="60" r="3" fill="#D6524F"/>
  <circle cx="95" cy="45" r="3" fill="#5F9A5C"/><circle cx="110" cy="58" r="3" fill="#E3922E"/>
  <circle cx="125" cy="48" r="3" fill="#9973B8"/><circle cx="140" cy="62" r="3" fill="#3E8F86"/>
  <circle cx="70" cy="75" r="3" fill="#FFDE59"/><circle cx="90" cy="80" r="3" fill="#D9679A"/>
  <circle cx="108" cy="76" r="3" fill="#3B6EA5"/><circle cx="128" cy="82" r="3" fill="#D6524F"/>
  <circle cx="60" cy="95" r="3" fill="#5F9A5C"/><circle cx="82" cy="98" r="3" fill="#E3922E"/>
  <circle cx="100" cy="94" r="3" fill="#9973B8"/><circle cx="120" cy="99" r="3" fill="#3E8F86"/>
  <circle cx="140" cy="92" r="3" fill="#FFDE59"/>
  <text x="100" y="132" font-size="10" text-anchor="middle" fill="#736C5E">1 моль — очень много частиц</text>
  </svg>`,
  bank:[
    {p:"Что такое моль в химии?",opts:["Единица количества вещества","Единица длины"],correct:0},
    {p:"Зачем нужна единица «моль»?",opts:["Чтобы удобно считать огромное число мельчайших частиц","Чтобы измерять температуру"],correct:0}
  ]},

{ n:"Металлы и неметаллы",
  explain:"Химические элементы делят на <b>металлы</b> (блестят, проводят ток и тепло, ковкие) и <b>неметаллы</b> (обычно не блестят, плохо проводят ток).",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <line x1="30" y1="30" x2="60" y2="30" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="60" y1="30" x2="90" y2="30" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="30" y1="60" x2="60" y2="60" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="60" y1="60" x2="90" y2="60" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="30" y1="30" x2="30" y2="60" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="60" y1="30" x2="60" y2="60" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="90" y1="30" x2="90" y2="60" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="30" y1="60" x2="30" y2="90" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="60" y1="60" x2="60" y2="90" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="90" y1="60" x2="90" y2="90" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="30" y1="90" x2="60" y2="90" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="60" y1="90" x2="90" y2="90" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="30" cy="30" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="60" cy="30" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="90" cy="30" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="30" cy="60" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="60" cy="60" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="90" cy="60" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="30" cy="90" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="60" cy="90" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="90" cy="90" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="60" y="115" font-size="11" text-anchor="middle" fill="#2B2A26">металл</text>
  <circle cx="170" cy="35" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="200" cy="50" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="230" cy="30" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="185" cy="75" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="220" cy="70" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="245" cy="60" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="200" cy="95" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <text x="205" y="115" font-size="11" text-anchor="middle" fill="#2B2A26">неметалл</text>
  </svg>`,
  bank:[
    {p:"Что характерно для металлов?",opts:["Блеск, проводимость тока и тепла","Отсутствие блеска"],correct:0},
    {p:"Как обычно неметаллы проводят электрический ток?",opts:["Плохо","Отлично"],correct:0}
  ]}

];
