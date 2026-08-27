/* География, 10 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Экономическая и социальная география мира: страны, регионы, глобальные проблемы. */

const GEOGRAPHY10_MOD = [

{ n:"Политическая карта мира",
  explain:"<b>Политическая карта мира</b> отражает границы государств. В мире существует около 190–200 независимых государств, различающихся по форме правления и территориальному устройству.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="6" y="6" width="208" height="118" rx="8" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M14 60c14-10 26 4 40-4s24 8 36-2 30 6 42-4 30 8 40-2v58H14z" fill="#E3922E" opacity="0.55" stroke="#2B2A26" stroke-width="1.3"/>
  <line x1="54" y1="56" x2="50" y2="118" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="90" y1="54" x2="94" y2="118" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="126" y1="58" x2="130" y2="118" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="166" y1="56" x2="170" y2="118" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="110" y="95" font-size="9" text-anchor="middle" fill="#2B2A26">~190 государств</text>
  </svg>`,
  bank:[
    {p:"Что отражает политическая карта мира?",opts:["Границы государств","Только рельеф"],correct:0}
  ]},

{ n:"Типы стран по уровню развития",
  explain:"Страны мира делят на <b>развитые</b> (высокий уровень экономики и доходов) и <b>развивающиеся</b> (менее развитая экономика, часто с растущим населением).",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <line x1="15" y1="115" x2="190" y2="115" stroke="#2B2A26" stroke-width="2"/>
  <rect x="35" y="25" width="34" height="90" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="52" y="126" font-size="9" text-anchor="middle" fill="#2B2A26">развитые</text>
  <rect x="120" y="70" width="34" height="45" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="137" y="126" font-size="8" text-anchor="middle" fill="#2B2A26">развивающиеся</text>
  <path d="M120 68c6-6 12-2 14-10" stroke="#3F7A3D" stroke-width="2" fill="none" marker-end="url(#a10)"/>
  <defs><marker id="a10" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#3F7A3D"/></marker></defs>
  </svg>`,
  bank:[
    {p:"Какие два основных типа стран по уровню развития выделяют?",opts:["Развитые и развивающиеся","Только большие и маленькие"],correct:0}
  ]},

{ n:"Природные ресурсы мира",
  explain:"<b>Природные ресурсы</b> — это то, что человек использует из природы: полезные ископаемые, вода, лес, почва. Ресурсы делят на исчерпаемые (нефть, уголь) и неисчерпаемые (солнечная энергия, ветер).",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <circle cx="55" cy="45" r="24" fill="#2B2A26" opacity="0.8"/>
  <text x="55" y="80" font-size="9" text-anchor="middle" fill="#2B2A26">нефть, уголь</text>
  <text x="55" y="112" font-size="9" text-anchor="middle" fill="#A83836">исчерпаемые</text>
  <circle cx="165" cy="45" r="22" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <g stroke="#C99A00" stroke-width="2" stroke-linecap="round">
  <line x1="165" y1="14" x2="165" y2="4"/><line x1="165" y1="76" x2="165" y2="86"/>
  <line x1="134" y1="45" x2="124" y2="45"/><line x1="196" y1="45" x2="206" y2="45"/>
  </g>
  <text x="165" y="112" font-size="9" text-anchor="middle" fill="#3F7A3D">неисчерпаемые</text>
  </svg>`,
  bank:[
    {p:"Какие ресурсы называют исчерпаемыми?",opts:["Те, что могут закончиться, например нефть","Те, что никогда не заканчиваются"],correct:0},
    {p:"Что относится к неисчерпаемым ресурсам?",opts:["Солнечная энергия","Уголь"],correct:0}
  ]},

{ n:"Население мира",
  explain:"Население Земли превышает 8 миллиардов человек. Наибольший рост населения сейчас происходит в развивающихся странах Азии и Африки.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <line x1="15" y1="105" x2="210" y2="105" stroke="#2B2A26" stroke-width="2"/>
  <path d="M15 100c40-4 80-40 100-70s60-15 95-20" fill="none" stroke="#D6524F" stroke-width="4" stroke-linecap="round"/>
  <text x="180" y="20" font-size="6" fill="#2B2A26">Азия, Африка</text>
  <text x="60" y="118" font-size="9" fill="#736C5E">рост населения ↑</text>
  </svg>`,
  bank:[
    {p:"Где сейчас происходит наибольший рост населения?",opts:["В развивающихся странах Азии и Африки","В большинстве развитых стран Европы"],correct:0}
  ]},

{ n:"Урбанизация в мире",
  explain:"<b>Урбанизация</b> — рост городов и городского населения. В XXI веке больше половины людей на Земле живут в городах.",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <circle cx="70" cy="60" r="52" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M70 8a52 52 0 0 1 45 78l-45-26z" fill="#3B6EA5"/>
  <path d="M70 8a52 52 0 0 0 -45 78l45-26z" fill="#5F9A5C"/>
  <text x="90" y="60" font-size="9" fill="#FFFEF8">города &gt;50%</text>
  <rect x="140" y="30" width="14" height="50" fill="#3B6EA5"/><rect x="158" y="20" width="14" height="60" fill="#3B6EA5"/><rect x="176" y="40" width="14" height="40" fill="#3B6EA5"/>
  <line x1="135" y1="80" x2="195" y2="80" stroke="#2B2A26" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Где живёт больше половины людей на Земле сейчас?",opts:["В городах","Только в деревнях"],correct:0}
  ]},

{ n:"Мировое хозяйство",
  explain:"<b>Мировое хозяйство</b> — совокупность национальных экономик всех стран мира, связанных международной торговлей и разделением труда.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <circle cx="100" cy="80" r="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M40 55c14-8 26 4 40-2s26-8 38 0" fill="none" stroke="#5F9A5C" stroke-width="6" stroke-linecap="round"/>
  <path d="M35 95c12 6 24-2 38 4s24 4 36-2" fill="none" stroke="#5F9A5C" stroke-width="6" stroke-linecap="round"/>
  <path d="M50 40c-16 14-16 66 0 80M150 40c16 14 16 66 0 80" fill="none" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 4" opacity="0.5"/>
  <circle cx="60" cy="50" r="5" fill="#D6524F"/><circle cx="140" cy="60" r="5" fill="#D6524F"/><circle cx="80" cy="105" r="5" fill="#D6524F"/><circle cx="130" cy="100" r="5" fill="#D6524F"/>
  <path d="M60 50l140 60M60 50l80 105M140 60l-60 45M140 60l80-10" stroke="#D6524F" stroke-width="1" opacity="0.5"/>
  </svg>`,
  bank:[
    {p:"Что связывает национальные экономики в мировое хозяйство?",opts:["Международная торговля и разделение труда","Полная изоляция стран друг от друга"],correct:0}
  ]},

{ n:"Топливная промышленность мира",
  explain:"Основные мировые запасы нефти сосредоточены на Ближнем Востоке, в России и в Северной Америке. Топливная промышленность включает добычу нефти, газа и угля.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="6" y="6" width="208" height="118" rx="8" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="50" cy="45" r="12" fill="#2B2A26"/>
  <text x="50" y="70" font-size="8" text-anchor="middle" fill="#2B2A26">Сев. Америка</text>
  <circle cx="120" cy="65" r="14" fill="#2B2A26"/>
  <text x="120" y="90" font-size="8" text-anchor="middle" fill="#2B2A26">Ближний Восток</text>
  <circle cx="170" cy="35" r="12" fill="#2B2A26"/>
  <text x="170" y="20" font-size="8" text-anchor="middle" fill="#2B2A26">Россия</text>
  </svg>`,
  bank:[
    {p:"В каком регионе сосредоточены крупнейшие запасы нефти?",opts:["На Ближнем Востоке","В Антарктиде"],correct:0}
  ]},

{ n:"Глобальные проблемы человечества",
  explain:"К глобальным проблемам относят изменение климата, истощение ресурсов, загрязнение окружающей среды, бедность — их решение требует сотрудничества всех стран мира.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <circle cx="100" cy="80" r="46" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M60 60c14-8 26 4 40-2s26-8 38 0" fill="none" stroke="#5F9A5C" stroke-width="4" stroke-linecap="round"/>
  <path d="M56 100c12 6 24-2 38 4s24 4 34-2" fill="none" stroke="#5F9A5C" stroke-width="4" stroke-linecap="round"/>
  <rect x="10" y="6" width="26" height="26" rx="4" fill="#D6524F" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="23" y="24" font-size="12" text-anchor="middle" fill="#FFFEF8">🌡</text>
  <rect x="164" y="6" width="26" height="26" rx="4" fill="#736C5E" stroke="#2B2A26" stroke-width="1.3"/>
  <path d="M170 24c4-8 2-12 6-18M180 24c2-8 4-12 2-18" stroke="#FFFEF8" stroke-width="2" fill="none"/>
  <rect x="10" y="128" width="26" height="26" rx="4" fill="#E3922E" stroke="#2B2A26" stroke-width="1.3"/>
  <rect x="164" y="128" width="26" height="26" rx="4" fill="#9973B8" stroke="#2B2A26" stroke-width="1.3"/>
  </svg>`,
  bank:[
    {p:"Что нужно для решения глобальных проблем человечества?",opts:["Сотрудничество всех стран мира","Действия одной отдельной страны"],correct:0},
    {p:"Что из этого — глобальная проблема?",opts:["Изменение климата","Личное расписание одного человека"],correct:0}
  ]},

{ n:"Международная торговля",
  explain:"<b>Международная торговля</b> — обмен товарами и услугами между странами. Страны экспортируют то, что производят эффективнее, и импортируют то, чего им не хватает.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <rect x="10" y="30" width="50" height="50" rx="6" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <text x="35" y="98" font-size="9" text-anchor="middle" fill="#2B2A26">страна А</text>
  <rect x="160" y="30" width="50" height="50" rx="6" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <text x="185" y="98" font-size="9" text-anchor="middle" fill="#2B2A26">страна Б</text>
  <rect x="80" y="35" width="20" height="16" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.3"/>
  <path d="M65 43h30" stroke="#2B2A26" stroke-width="2" marker-end="url(#e10)"/>
  <rect x="120" y="60" width="20" height="16" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.3"/>
  <path d="M155 68h-30" stroke="#2B2A26" stroke-width="2" marker-end="url(#e10)"/>
  <defs><marker id="e10" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#2B2A26"/></marker></defs>
  <text x="80" y="30" font-size="7" fill="#2B2A26">экспорт</text>
  <text x="120" y="94" font-size="7" fill="#2B2A26">импорт</text>
  </svg>`,
  bank:[
    {p:"Что такое экспорт?",opts:["Вывоз товаров из страны","Ввоз товаров в страну"],correct:0},
    {p:"Что такое импорт?",opts:["Ввоз товаров в страну","Вывоз товаров из страны"],correct:0}
  ]},

{ n:"Интеграционные объединения",
  explain:"Страны иногда объединяются в экономические и политические союзы для более тесного сотрудничества, например, Европейский союз объединяет множество европейских государств.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="70" fill="#DCE9F6" stroke="#284D77" stroke-width="2"/>
  <g fill="#FFDE59">
  <circle cx="100" cy="42" r="6"/><circle cx="133" cy="52" r="6"/><circle cx="155" cy="80" r="6"/>
  <circle cx="155" cy="120" r="6"/><circle cx="133" cy="148" r="6"/><circle cx="100" cy="158" r="6"/>
  <circle cx="67" cy="148" r="6"/><circle cx="45" cy="120" r="6"/><circle cx="45" cy="80" r="6"/>
  <circle cx="67" cy="52" r="6"/>
  </g>
  <text x="100" y="105" font-size="10" text-anchor="middle" fill="#284D77" font-weight="700">союз</text>
  </svg>`,
  bank:[
    {p:"Зачем страны создают интеграционные объединения?",opts:["Для более тесного экономического и политического сотрудничества","Чтобы полностью изолироваться друг от друга"],correct:0}
  ]},

{ n:"Демографическая ситуация в мире",
  explain:"В разных странах разная демографическая ситуация: в одних странах рождаемость высокая и население растёт быстро, в других — население стареет и почти не растёт.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <line x1="15" y1="115" x2="185" y2="115" stroke="#2B2A26" stroke-width="1.5"/>
  <polygon points="55,115 30,115 42,20" fill="#5F9A5C" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="42" y="126" font-size="8" text-anchor="middle" fill="#2B2A26">рождаемость высокая</text>
  <polygon points="150,115 175,115 172,80 153,80 156,50 168,50 165,20 158,20" fill="#9973B8" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="162" y="126" font-size="8" text-anchor="middle" fill="#2B2A26">стареющее</text>
  </svg>`,
  bank:[
    {p:"Что происходит с населением там, где рождаемость высокая?",opts:["Население растёт быстро","Население быстро сокращается"],correct:0},
    {p:"Что происходит с населением в странах, где оно стареет?",opts:["Рост населения замедляется или останавливается","Население быстро растёт"],correct:0}
  ]}

];
