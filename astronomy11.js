/* Астрономия, 11 класс. Новый предмет. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Солнечная система, звёзды, галактики, строение Вселенной. */

const ASTRONOMY11_MOD = [

{ n:"Солнечная система",
  explain:"<b>Солнечная система</b> включает Солнце и обращающиеся вокруг него небесные тела: 8 планет, их спутники, астероиды и кометы.",
  svg:`<svg viewBox="0 0 300 140" width="300">
  <circle cx="20" cy="70" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <ellipse cx="90" cy="70" rx="35" ry="16" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="125" cy="70" r="4" fill="#736C5E"/>
  <ellipse cx="100" cy="70" rx="55" ry="26" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="155" cy="70" r="5" fill="#E3922E"/>
  <ellipse cx="110" cy="70" rx="80" ry="38" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="190" cy="70" r="6" fill="#3B6EA5"/>
  <ellipse cx="120" cy="70" rx="105" ry="50" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="225" cy="70" r="5" fill="#D6524F"/>
  <ellipse cx="130" cy="70" rx="135" ry="62" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="265" cy="70" r="11" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <text x="150" y="128" font-size="10" text-anchor="middle" fill="#2B2A26">Солнце и 8 планет на орбитах</text>
  </svg>`,
  bank:[
    {p:"Сколько планет в Солнечной системе?",opts:["Восемь","Десять"],correct:0},
    {p:"Что находится в центре Солнечной системы?",opts:["Солнце","Земля"],correct:0}
  ]},

{ n:"Планеты земной группы и планеты-гиганты",
  explain:"Планеты делят на земную группу (Меркурий, Венера, Земля, Марс — небольшие, твёрдая поверхность) и планеты-гиганты (Юпитер, Сатурн, Уран, Нептун — крупные, газовые).",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <circle cx="30" cy="80" r="10" fill="#B0765C" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="55" cy="80" r="12" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="85" cy="80" r="12" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="112" cy="80" r="9" fill="#D6524F" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="70" y="20" font-size="8" text-anchor="middle" fill="#2B2A26">земная группа: малые, твёрдые</text>
  <circle cx="175" cy="60" r="28" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="230" cy="70" r="22" fill="#FFDE59" stroke="#2B2A26" stroke-width="1.5"/>
  <ellipse cx="230" cy="70" rx="34" ry="8" fill="none" stroke="#B96F16" stroke-width="1.5" transform="rotate(-15 230 70)"/>
  <text x="205" y="112" font-size="7" text-anchor="middle" fill="#2B2A26">гиганты: крупные, газовые</text>
  </svg>`,
  bank:[
    {p:"Какая планета относится к земной группе?",opts:["Марс","Юпитер"],correct:0},
    {p:"Какая планета — планета-гигант?",opts:["Юпитер","Земля"],correct:0}
  ]},

{ n:"Луна — спутник Земли",
  explain:"<b>Луна</b> — единственный естественный спутник Земли. Она отражает солнечный свет и вызывает приливы и отливы благодаря своему притяжению.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <circle cx="100" cy="70" r="34" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <ellipse cx="100" cy="70" rx="60" ry="26" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="160" cy="70" r="10" fill="#E9EEF3" stroke="#736C5E" stroke-width="1.5"/>
  <path d="M60 96 q40 14 80 0" fill="none" stroke="#5F9A5C" stroke-width="3" stroke-linecap="round"/>
  <path d="M60 44 q40 -14 80 0" fill="none" stroke="#5F9A5C" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  <text x="70" y="118" font-size="9" fill="#3F7A3D">прилив</text>
  <text x="100" y="125" font-size="10" text-anchor="middle" fill="#2B2A26" transform="translate(0,0)"/>
  <text x="160" y="90" font-size="9" text-anchor="middle" fill="#2B2A26">Луна</text>
  </svg>`,
  bank:[
    {p:"Что вызывает Луна на Земле своим притяжением?",opts:["Приливы и отливы","Землетрясения"],correct:0},
    {p:"Излучает ли Луна собственный свет?",opts:["Нет, она отражает солнечный свет","Да, светит сама"],correct:0}
  ]},

{ n:"Солнце — ближайшая звезда",
  explain:"<b>Солнце</b> — звезда, ближайшая к Земле, источник света и тепла для нашей планеты. Энергия Солнца выделяется за счёт термоядерных реакций в его недрах.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <circle cx="100" cy="80" r="45" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="100" cy="80" r="20" fill="#E3922E" opacity="0.7"/>
  <g stroke="#C99A00" stroke-width="3" stroke-linecap="round">
  <line x1="100" y1="18" x2="100" y2="4"/><line x1="100" y1="142" x2="100" y2="156"/>
  <line x1="38" y1="80" x2="24" y2="80"/><line x1="162" y1="80" x2="176" y2="80"/>
  <line x1="56" y1="36" x2="46" y2="26"/><line x1="144" y1="124" x2="154" y2="134"/>
  <line x1="144" y1="36" x2="154" y2="26"/><line x1="56" y1="124" x2="46" y2="134"/>
  </g>
  <text x="100" y="85" font-size="9" text-anchor="middle" fill="#A83836">термоядро</text>
  </svg>`,
  bank:[
    {p:"Чем является Солнце для Земли?",opts:["Ближайшей звездой, источником света и тепла","Ещё одной планетой"],correct:0},
    {p:"За счёт чего выделяется энергия Солнца?",opts:["Термоядерных реакций","Обычного горения угля"],correct:0}
  ]},

{ n:"Звёзды и их характеристики",
  explain:"<b>Звезда</b> — раскалённое небесное тело, излучающее собственный свет за счёт термоядерных реакций. Звёзды различаются по массе, температуре и цвету.",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <circle cx="40" cy="65" r="26" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="40" y="105" font-size="9" text-anchor="middle" fill="#2B2A26">горячая, голубая</text>
  <circle cx="125" cy="65" r="20" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="125" y="98" font-size="9" text-anchor="middle" fill="#2B2A26">Солнце, жёлтая</text>
  <circle cx="205" cy="65" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="205" y="90" font-size="9" text-anchor="middle" fill="#2B2A26">холодная, красная</text>
  </svg>`,
  bank:[
    {p:"Излучают ли звёзды собственный свет?",opts:["Да, за счёт термоядерных реакций","Нет, они только отражают чужой свет"],correct:0}
  ]},

{ n:"Галактика Млечный Путь",
  explain:"Наша Солнечная система находится в галактике <b>Млечный Путь</b>, которая содержит сотни миллиардов звёзд и имеет форму спирали.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <path d="M110 80 q40-50 -10-65 q-45 12-25 55 q15 30 55 20 q35-10 20-45" fill="none" stroke="#3B6EA5" stroke-width="3" stroke-linecap="round"/>
  <path d="M110 80 q-40 50 10 65 q45-12 25-55 q-15-30-55-20 q-35 10-20 45" fill="none" stroke="#3B6EA5" stroke-width="3" stroke-linecap="round"/>
  <circle cx="110" cy="80" r="10" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <circle cx="70" cy="55" r="1.5" fill="#2B2A26"/><circle cx="150" cy="105" r="1.5" fill="#2B2A26"/>
  <circle cx="60" cy="100" r="1.5" fill="#2B2A26"/><circle cx="160" cy="55" r="1.5" fill="#2B2A26"/>
  <circle cx="150" cy="40" r="4" fill="#E3922E"/>
  <line x1="150" y1="40" x2="130" y2="60" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="150" y="30" font-size="9" text-anchor="middle" fill="#2B2A26">Солнце</text>
  <text x="110" y="150" font-size="9" text-anchor="middle" fill="#2B2A26">спиральная галактика</text>
  </svg>`,
  bank:[
    {p:"Как называется галактика, в которой находится Солнечная система?",opts:["Млечный Путь","Туманность Андромеды"],correct:0}
  ]},

{ n:"Другие галактики",
  explain:"Помимо Млечного Пути, во Вселенной существует огромное количество других галактик, например галактика <b>Андромеды</b> — ближайшая крупная галактика к нашей.",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <path d="M55 65 q25-35 -8-45 q-32 8-18 38 q10 22 40 15 q25-7 15-32" fill="none" stroke="#3B6EA5" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="55" cy="65" r="6" fill="#FFDE59"/>
  <text x="55" y="105" font-size="9" text-anchor="middle" fill="#2B2A26">Млечный Путь</text>
  <path d="M185 55 q-20-30 8-40 q28 6 16 32 q-9 19-35 13 q-22-6-13-28" fill="none" stroke="#D6524F" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="185" cy="55" r="6" fill="#E3922E"/>
  <text x="185" y="98" font-size="9" text-anchor="middle" fill="#2B2A26">Андромеда</text>
  <line x1="90" y1="60" x2="150" y2="55" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="120" y="45" font-size="8" text-anchor="middle" fill="#736C5E">2,5 млн св. лет</text>
  </svg>`,
  bank:[
    {p:"Как называется ближайшая к нам крупная галактика, помимо нашей?",opts:["Галактика Андромеды","Солнечная система"],correct:0}
  ]},

{ n:"Теория Большого взрыва",
  explain:"Согласно современным научным представлениям, Вселенная возникла около 13,8 миллиарда лет назад в результате события, называемого <b>Большим взрывом</b>, и с тех пор непрерывно расширяется.",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <circle cx="20" cy="60" r="4" fill="#FFDE59" stroke="#C99A00" stroke-width="1"/>
  <circle cx="100" cy="60" r="22" fill="none" stroke="#3B6EA5" stroke-width="1.5" stroke-dasharray="2 3"/>
  <circle cx="90" cy="50" r="2" fill="#3B6EA5"/><circle cx="112" cy="68" r="2" fill="#3B6EA5"/><circle cx="108" cy="45" r="2" fill="#3B6EA5"/>
  <circle cx="220" cy="60" r="45" fill="none" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="2 3"/>
  <circle cx="190" cy="35" r="2.5" fill="#D6524F"/><circle cx="245" cy="80" r="2.5" fill="#D6524F"/>
  <circle cx="235" cy="30" r="2.5" fill="#D6524F"/><circle cx="195" cy="85" r="2.5" fill="#D6524F"/>
  <line x1="20" y1="90" x2="240" y2="90" stroke="#736C5E" stroke-width="1"/>
  <polygon points="240,90 232,86 232,94" fill="#736C5E"/>
  <text x="130" y="105" font-size="10" text-anchor="middle" fill="#2B2A26">время — расширение Вселенной</text>
  </svg>`,
  bank:[
    {p:"Как называется событие, с которого, по современной науке, началась Вселенная?",opts:["Большой взрыв","Ледниковый период"],correct:0},
    {p:"Что происходит со Вселенной с момента её возникновения?",opts:["Она непрерывно расширяется","Она остаётся абсолютно неизменной"],correct:0}
  ]},

{ n:"Астероиды и кометы",
  explain:"<b>Астероиды</b> — небольшие каменистые тела, вращающиеся вокруг Солнца, многие из них находятся в поясе астероидов между Марсом и Юпитером. <b>Кометы</b> состоят изо льда и пыли и образуют яркий хвост при приближении к Солнцу.",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <circle cx="30" cy="65" r="9" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <text x="30" y="90" font-size="9" text-anchor="middle" fill="#2B2A26">Марс</text>
  <g fill="#736C5E">
  <circle cx="80" cy="45" r="3"/><circle cx="95" cy="70" r="2.5"/><circle cx="70" cy="80" r="2"/>
  <circle cx="105" cy="50" r="2.5"/><circle cx="90" cy="30" r="2"/><circle cx="115" cy="75" r="3"/>
  <circle cx="60" cy="55" r="2"/>
  </g>
  <text x="90" y="105" font-size="9" text-anchor="middle" fill="#736C5E">пояс астероидов</text>
  <circle cx="160" cy="60" r="14" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <text x="160" y="90" font-size="9" text-anchor="middle" fill="#2B2A26">Юпитер</text>
  <circle cx="220" cy="35" r="6" fill="#3E8F86" stroke="#2C6D66" stroke-width="1.5"/>
  <path d="M220 35 q25 15 40 30" fill="none" stroke="#3E8F86" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  <text x="235" y="20" font-size="6" fill="#2C6D66">комета</text>
  </svg>`,
  bank:[
    {p:"Где находится пояс астероидов?",opts:["Между Марсом и Юпитером","Между Землёй и Луной"],correct:0},
    {p:"Из чего в основном состоят кометы?",opts:["Изо льда и пыли","Из чистого железа"],correct:0}
  ]},

{ n:"Затмения",
  explain:"<b>Солнечное затмение</b> происходит, когда Луна оказывается между Землёй и Солнцем. <b>Лунное затмение</b> — когда Земля оказывается между Солнцем и Луной.",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <g transform="translate(0,0)">
    <circle cx="20" cy="35" r="14" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
    <circle cx="65" cy="35" r="6" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
    <circle cx="110" cy="35" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
    <text x="65" y="60" font-size="9" text-anchor="middle" fill="#2B2A26">солнечное затмение</text>
  </g>
  <g transform="translate(0,70)">
    <circle cx="20" cy="35" r="14" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
    <circle cx="70" cy="35" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
    <circle cx="120" cy="35" r="6" fill="#E9EEF3" stroke="#736C5E" stroke-width="1.5"/>
    <text x="70" y="58" font-size="9" text-anchor="middle" fill="#2B2A26">лунное затмение</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что происходит при солнечном затмении?",opts:["Луна оказывается между Землёй и Солнцем","Земля оказывается между Солнцем и Луной"],correct:0},
    {p:"Что происходит при лунном затмении?",opts:["Земля оказывается между Солнцем и Луной","Луна закрывает Солнце"],correct:0}
  ]},

{ n:"Жизненный цикл звёзд",
  explain:"Звёзды рождаются из облаков газа и пыли, проходят стадию стабильного горения, а затем в зависимости от массы превращаются в белого карлика, нейтронную звезду или чёрную дыру.",
  svg:`<svg viewBox="0 0 280 110" width="280">
  <ellipse cx="30" cy="55" rx="20" ry="16" fill="#9973B8" opacity="0.5"/>
  <text x="30" y="90" font-size="8" text-anchor="middle" fill="#725189">облако газа</text>
  <line x1="55" y1="55" x2="80" y2="55" stroke="#736C5E" stroke-width="1.5"/><polygon points="80,55 72,51 72,59" fill="#736C5E"/>
  <circle cx="105" cy="55" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="105" y="90" font-size="8" text-anchor="middle" fill="#2B2A26">звезда</text>
  <line x1="122" y1="55" x2="145" y2="55" stroke="#736C5E" stroke-width="1.5"/><polygon points="145,55 137,51 137,59" fill="#736C5E"/>
  <circle cx="175" cy="55" r="6" fill="#E9EEF3" stroke="#736C5E" stroke-width="1.5"/>
  <text x="175" y="90" font-size="8" text-anchor="middle" fill="#2B2A26">белый карлик</text>
  <line x1="182" y1="50" x2="200" y2="35" stroke="#736C5E" stroke-width="1.2"/><polygon points="200,35 191,36 195,44" fill="#736C5E"/>
  <line x1="182" y1="60" x2="200" y2="75" stroke="#736C5E" stroke-width="1.2"/><polygon points="200,75 191,74 195,66" fill="#736C5E"/>
  <circle cx="220" cy="28" r="3" fill="#3B6EA5"/>
  <text x="220" y="15" font-size="8" text-anchor="middle" fill="#284D77">нейтронная звезда</text>
  <circle cx="220" cy="82" r="10" fill="#2B2A26"/>
  <text x="220" y="100" font-size="8" text-anchor="middle" fill="#2B2A26">чёрная дыра</text>
  </svg>`,
  bank:[
    {p:"Из чего рождаются звёзды?",opts:["Из облаков газа и пыли","Из твёрдого камня"],correct:0},
    {p:"Во что может превратиться звезда в конце жизненного цикла?",opts:["В белого карлика, нейтронную звезду или чёрную дыру","Она никогда не меняется"],correct:0}
  ]},

{ n:"Освоение космоса человеком",
  explain:"Человечество активно осваивает космос: запускает спутники, отправляет космонавтов на орбитальные станции и исследует другие планеты с помощью автоматических аппаратов.",
  svg:`<svg viewBox="0 0 220 150" width="220">
  <path d="M0 130 A110 110 0 0 1 220 130" fill="#5F9A5C" opacity="0.3"/>
  <circle cx="110" cy="140" r="30" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <ellipse cx="110" cy="70" rx="70" ry="30" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="180" cy="70" r="6" fill="#E9EEF3" stroke="#736C5E" stroke-width="1.5"/>
  <text x="180" y="55" font-size="8" text-anchor="middle" fill="#2B2A26">спутник</text>
  <g transform="translate(110,140) rotate(-45)">
    <polygon points="0,-45 8,-20 8,10 -8,10 -8,-20" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
    <polygon points="0,10 -14,25 14,25" fill="#E3922E"/>
  </g>
  <text x="150" y="20" font-size="9" text-anchor="middle" fill="#2B2A26">запуск ракеты</text>
  </svg>`,
  bank:[
    {p:"Чем занимаются автоматические космические аппараты?",opts:["Исследуют другие планеты","Только развлекают людей"],correct:0}
  ]}

];
