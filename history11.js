/* История, 11 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Россия и мир в XX–XXI веках: революция 1917, ВОВ, распад СССР, современная Россия. */

const HISTORY11_MOD = [

{ n:"Октябрьская революция 1917 года",
  explain:"В октябре 1917 года в России произошла революция под руководством партии большевиков во главе с Владимиром Лениным, в результате которой было свергнуто Временное правительство и установлена советская власть.",
  svg:`<svg viewBox="0 0 160 150" width="160">
  <line x1="50" y1="20" x2="50" y2="140" stroke="#2B2A26" stroke-width="4"/>
  <path d="M50 25l70 20-70 20z" fill="#A83836" stroke="#2B2A26" stroke-width="2"/>
  <text x="90" y="130" font-size="14" text-anchor="middle" font-weight="700">1917</text>
  </svg>`,
  bank:[
    {p:"В каком году произошла Октябрьская революция?",opts:["1917 год","1905 год"],correct:0},
    {p:"Кто руководил партией большевиков во время революции?",opts:["Владимир Ленин","Николай II"],correct:0}
  ]},

{ n:"Гражданская война в России",
  explain:"После революции в России началась <b>Гражданская война</b> (1918–1922) между сторонниками советской власти (красными) и их противниками (белыми).",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <line x1="20" y1="100" x2="200" y2="100" stroke="#736C5E" stroke-width="2" stroke-dasharray="3 5"/>
  <line x1="60" y1="100" x2="60" y2="40" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="60,42 95,55 60,68" fill="#A83836"/>
  <text x="60" y="115" font-size="10" text-anchor="middle" fill="#A83836">красные</text>
  <line x1="160" y1="100" x2="160" y2="40" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="160,42 125,55 160,68" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="160" y="115" font-size="10" text-anchor="middle" fill="#2B2A26">белые</text>
  </svg>`,
  bank:[
    {p:"Между какими силами шла Гражданская война в России?",opts:["Между красными и белыми","Между Россией и Китаем"],correct:0}
  ]},

{ n:"Образование СССР",
  explain:"В 1922 году был образован <b>Союз Советских Социалистических Республик (СССР)</b>, объединивший несколько советских республик.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <g fill="#A83836" opacity="0.6" stroke="#2B2A26" stroke-width="1.5">
    <rect x="20" y="15" width="26" height="26"/>
    <rect x="20" y="50" width="26" height="26"/>
    <rect x="20" y="85" width="26" height="26"/>
  </g>
  <line x1="55" y1="60" x2="90" y2="60" stroke="#2B2A26" stroke-width="3"/>
  <polygon points="88,54 103,60 88,66" fill="#2B2A26"/>
  <circle cx="150" cy="60" r="45" fill="#A83836" opacity="0.85" stroke="#2B2A26" stroke-width="2"/>
  <text x="150" y="65" font-size="12" text-anchor="middle" font-weight="700" fill="#FFDE59">СССР</text>
  <text x="150" y="118" font-size="10" text-anchor="middle">1922</text>
  </svg>`,
  bank:[
    {p:"В каком году был образован СССР?",opts:["1922 год","1917 год"],correct:0}
  ]},

{ n:"Индустриализация и коллективизация в СССР",
  explain:"В конце 1920-х — 1930-е годы в СССР проводились <b>индустриализация</b> (ускоренное строительство заводов) и <b>коллективизация</b> сельского хозяйства (объединение крестьян в колхозы).",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <rect x="20" y="60" width="80" height="50" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
  <rect x="35" y="30" width="12" height="35" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <rect x="60" y="20" width="12" height="45" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <rect x="140" y="60" width="90" height="50" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
  <line x1="150" y1="60" x2="150" y2="110" stroke="#3F7A3D" stroke-width="2"/>
  <line x1="185" y1="60" x2="185" y2="110" stroke="#3F7A3D" stroke-width="2"/>
  <path d="M150 65c8-10 16-10 24 0M185 65c8-10 16-10 24 0" fill="none" stroke="#5F9A5C" stroke-width="3"/>
  </svg>`,
  bank:[
    {p:"Что такое индустриализация в СССР?",opts:["Ускоренное строительство заводов и промышленности","Возврат к ручному труду"],correct:0},
    {p:"Что такое коллективизация?",opts:["Объединение крестьянских хозяйств в колхозы","Раздача земли только богатым помещикам"],correct:0}
  ]},

{ n:"Великая Отечественная война: начало",
  explain:"22 июня 1941 года нацистская Германия напала на СССР — началась <b>Великая Отечественная война</b>, часть Второй мировой войны.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <ellipse cx="150" cy="70" rx="60" ry="45" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <text x="150" y="30" font-size="10" text-anchor="middle" fill="#284D77">СССР</text>
  <line x1="20" y1="65" x2="150" y2="70" stroke="#A83836" stroke-width="3"/>
  <polygon points="145,64 160,70 145,76" fill="#A83836"/>
  <text x="90" y="50" font-size="10" text-anchor="middle" fill="#A83836">22 июня 1941</text>
  </svg>`,
  bank:[
    {p:"Когда началась Великая Отечественная война?",opts:["22 июня 1941 года","1 сентября 1939 года"],correct:0},
    {p:"Какая страна напала на СССР в 1941 году?",opts:["Нацистская Германия","Франция"],correct:0}
  ]},

{ n:"Ключевые сражения Великой Отечественной войны",
  explain:"Переломными сражениями войны стали битва под Москвой (1941-42), Сталинградская битва (1942-43) и Курская битва (1943), после которых инициатива перешла к советским войскам.",
  svg:`<svg viewBox="0 0 300 90" width="300">
  <line x1="15" y1="45" x2="285" y2="45" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="60" cy="45" r="5" fill="#3B6EA5"/><text x="60" y="66" font-size="10" text-anchor="middle">Москва</text><text x="60" y="28" font-size="9" text-anchor="middle">1941–42</text>
  <circle cx="170" cy="45" r="5" fill="#A83836"/><text x="170" y="66" font-size="10" text-anchor="middle">Сталинград</text><text x="170" y="28" font-size="9" text-anchor="middle">1942–43</text>
  <circle cx="260" cy="45" r="5" fill="#E3922E"/><text x="260" y="66" font-size="10" text-anchor="middle">Курск</text><text x="260" y="28" font-size="9" text-anchor="middle">1943</text>
  </svg>`,
  bank:[
    {p:"Какая битва считается одной из переломных в войне?",opts:["Сталинградская битва","Куликовская битва"],correct:0}
  ]},

{ n:"Победа в Великой Отечественной войне",
  explain:"9 мая 1945 года Германия капитулировала, война в Европе завершилась победой СССР и союзников. Этот день отмечают как <b>День Победы</b>.",
  svg:`<svg viewBox="0 0 160 150" width="160">
  <polygon points="80,15 95,55 138,55 103,80 116,120 80,96 44,120 57,80 22,55 65,55" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="80" y="140" font-size="14" text-anchor="middle" font-weight="700">9 мая 1945</text>
  </svg>`,
  bank:[
    {p:"Когда отмечают День Победы?",opts:["9 мая","1 сентября"],correct:0}
  ]},

{ n:"Холодная война",
  explain:"После Второй мировой войны началось многолетнее противостояние между СССР и США с их союзниками — <b>холодная война</b>, включавшая гонку вооружений без прямого военного столкновения сверхдержав.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="20" y="30" width="80" height="70" fill="#A83836" opacity="0.6" stroke="#2B2A26" stroke-width="2"/>
  <text x="60" y="70" font-size="11" text-anchor="middle" fill="#FFFEF8">СССР</text>
  <rect x="120" y="30" width="80" height="70" fill="#3B6EA5" opacity="0.6" stroke="#2B2A26" stroke-width="2"/>
  <text x="160" y="70" font-size="11" text-anchor="middle" fill="#FFFEF8">США</text>
  <line x1="110" y1="20" x2="110" y2="110" stroke="#2B2A26" stroke-width="4" stroke-dasharray="6 4"/>
  </svg>`,
  bank:[
    {p:"Между какими странами шла холодная война?",opts:["Между СССР и США","Между Россией и Швецией"],correct:0}
  ]},

{ n:"Распад СССР",
  explain:"В 1991 году СССР прекратил своё существование, распавшись на независимые государства, включая Российскую Федерацию — правопреемницу СССР.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <circle cx="70" cy="65" r="40" fill="#A83836" opacity="0.5" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <g fill="#A83836" opacity="0.75" stroke="#2B2A26" stroke-width="1.5">
    <rect x="130" y="15" width="24" height="24"/>
    <rect x="170" y="40" width="24" height="24"/>
    <rect x="130" y="75" width="24" height="24"/>
    <rect x="175" y="90" width="24" height="24"/>
  </g>
  <text x="70" y="120" font-size="12" text-anchor="middle" font-weight="700">1991</text>
  </svg>`,
  bank:[
    {p:"В каком году распался СССР?",opts:["1991 год","1945 год"],correct:0},
    {p:"Какое государство стало правопреемником СССР?",opts:["Российская Федерация","Германия"],correct:0}
  ]},

{ n:"Новая экономическая политика (НЭП)",
  explain:"В 1921 году советское правительство ввело <b>НЭП</b> — новую экономическую политику, частично допускавшую рыночные отношения и частную торговлю для восстановления разрушенной войной экономики.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <rect x="30" y="60" width="70" height="50" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25 60l40-25 40 25z" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="150" cy="85" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="168" cy="95" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="150" y="90" font-size="12" text-anchor="middle" fill="#B96F16" font-weight="700">₽</text>
  </svg>`,
  bank:[
    {p:"В каком году была введена НЭП?",opts:["1921 год","1941 год"],correct:0},
    {p:"Что частично допускала НЭП?",opts:["Рыночные отношения и частную торговлю","Полный запрет любой торговли"],correct:0}
  ]},

{ n:"Полёт Юрия Гагарина",
  explain:"12 апреля 1961 года Юрий Гагарин стал первым человеком, совершившим полёт в космос — важнейшее достижение СССР в освоении космоса.",
  svg:`<svg viewBox="0 0 180 160" width="180">
  <circle cx="90" cy="120" r="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <ellipse cx="90" cy="100" rx="70" ry="30" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="3 4"/>
  <g transform="translate(150,55) rotate(30)">
    <path d="M0 -30c8 0 14 10 14 25 0 8-4 14-14 20-10-6-14-12-14-20 0-15 6-25 14-25z" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
    <polygon points="-14,-5 -22,10 -14,10" fill="#D6524F"/>
    <polygon points="14,-5 22,10 14,10" fill="#D6524F"/>
    <circle cx="0" cy="-8" r="5" fill="#DCE9F6" stroke="#284D77" stroke-width="1.5"/>
  </g>
  <text x="90" y="150" font-size="11" text-anchor="middle" font-weight="700">1961</text>
  </svg>`,
  bank:[
    {p:"Кто стал первым человеком в космосе?",opts:["Юрий Гагарин","Владимир Ленин"],correct:0},
    {p:"В каком году состоялся первый полёт человека в космос?",opts:["1961 год","1917 год"],correct:0}
  ]},

{ n:"Перестройка",
  explain:"<b>Перестройка</b> — политика реформ в СССР во второй половине 1980-х годов, начатая Михаилом Горбачёвым, включавшая гласность и попытки экономических преобразований.",
  svg:`<svg viewBox="0 0 180 150" width="180">
  <rect x="30" y="20" width="70" height="110" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="100,20 150,35 150,115 100,130" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="140" cy="75" r="3" fill="#2B2A26"/>
  <path d="M150 35c15 5 15 75 0 80" fill="#FFDE59" opacity="0.35"/>
  </svg>`,
  bank:[
    {p:"Кто начал политику перестройки в СССР?",opts:["Михаил Горбачёв","Юрий Гагарин"],correct:0},
    {p:"Что включала перестройка, помимо экономических реформ?",opts:["Гласность (открытость информации)","Полное закрытие границ"],correct:0}
  ]},

{ n:"Современная Россия",
  explain:"После 1991 года Россия строила новую государственность как независимая страна, переживая экономические и политические изменения на пути к современному устройству.",
  svg:`<svg viewBox="0 0 160 120" width="160">
  <rect x="20" y="10" width="120" height="80" stroke="#2B2A26" stroke-width="2" fill="#FFFEF8"/>
  <rect x="20" y="36" width="120" height="27" fill="#3B6EA5"/>
  <rect x="20" y="63" width="120" height="27" fill="#A83836"/>
  <line x1="10" y1="5" x2="10" y2="115" stroke="#2B2A26" stroke-width="4"/>
  </svg>`,
  bank:[
    {p:"Какой стала Россия после 1991 года?",opts:["Независимым государством","Частью другой страны"],correct:0}
  ]}

];
