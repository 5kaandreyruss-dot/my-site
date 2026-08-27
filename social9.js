/* Обществознание, 9 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 8 класса: право, государство, Конституция РФ, права человека. */

const SOCIAL9_MOD = [

{ n:"Право и закон",
  explain:"<b>Право</b> — система обязательных правил поведения, установленных государством и обеспеченных его силой. Основной источник права в России — законы.",
  svg:`<svg viewBox="0 0 160 180" width="160">
  <rect x="20" y="10" width="120" height="160" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="3"/>
  <line x1="38" y1="40" x2="122" y2="40" stroke="#736C5E" stroke-width="3"/>
  <line x1="38" y1="60" x2="122" y2="60" stroke="#736C5E" stroke-width="3"/>
  <line x1="38" y1="80" x2="90" y2="80" stroke="#736C5E" stroke-width="3"/>
  <circle cx="105" cy="120" r="28" fill="none" stroke="#D6524F" stroke-width="4"/>
  <text x="105" y="124" font-size="11" text-anchor="middle" font-weight="700" fill="#D6524F">ЗАКОН</text>
  </svg>`,
  bank:[
    {p:"Кто устанавливает нормы права?",opts:["Государство","Каждый человек для себя сам"],correct:0},
    {p:"Является ли соблюдение права обязательным?",opts:["Да, обязательно","Нет, по желанию"],correct:0}
  ]},

{ n:"Конституция РФ",
  explain:"<b>Конституция</b> — основной закон государства, обладающий высшей юридической силой. Все остальные законы России не должны противоречить Конституции.",
  svg:`<svg viewBox="0 0 220 170" width="220">
  <polygon points="110,10 160,50 60,50" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="110" y="40" font-size="9" text-anchor="middle" fill="#fff">Конституция</text>
  <polygon points="60,50 160,50 190,100 30,100" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="110" y="80" font-size="9" text-anchor="middle" fill="#fff">Федеральные законы</text>
  <polygon points="30,100 190,100 215,155 5,155" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="110" y="132" font-size="9" text-anchor="middle" fill="#fff">Подзаконные акты</text>
  </svg>`,
  bank:[
    {p:"Что такое Конституция?",opts:["Основной закон государства","Один из второстепенных документов"],correct:0},
    {p:"Могут ли обычные законы противоречить Конституции?",opts:["Нет, не должны","Да, свободно могут"],correct:0}
  ]},

{ n:"Права человека",
  explain:"<b>Права человека</b> — это возможности, принадлежащие каждому от рождения: право на жизнь, свободу, образование, труд. Они закреплены в Конституции и международных документах.",
  svg:`<svg viewBox="0 0 240 200" width="240">
  <circle cx="120" cy="100" r="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="120" y="97" font-size="9" text-anchor="middle" fill="#fff">Права</text>
  <text x="120" y="108" font-size="9" text-anchor="middle" fill="#fff">человека</text>
  <rect x="10" y="10" width="70" height="26" rx="6" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="45" y="27" font-size="9" text-anchor="middle" fill="#fff">жизнь</text>
  <rect x="160" y="10" width="70" height="26" rx="6" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="195" y="27" font-size="9" text-anchor="middle" fill="#fff">свобода</text>
  <rect x="10" y="164" width="70" height="26" rx="6" fill="#9973B8" stroke="#725189" stroke-width="2"/>
  <text x="45" y="181" font-size="9" text-anchor="middle" fill="#fff">образов.</text>
  <rect x="160" y="164" width="70" height="26" rx="6" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <text x="195" y="181" font-size="8" text-anchor="middle" fill="#fff">труд</text>
  <line x1="95" y1="88" x2="60" y2="40" stroke="#2B2A26" stroke-width="2"/>
  <line x1="145" y1="88" x2="180" y2="40" stroke="#2B2A26" stroke-width="2"/>
  <line x1="95" y1="112" x2="60" y2="160" stroke="#2B2A26" stroke-width="2"/>
  <line x1="145" y1="112" x2="180" y2="160" stroke="#2B2A26" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"С какого момента у человека есть права человека?",opts:["С рождения","Только с 18 лет"],correct:0},
    {p:"Что из этого относится к правам человека?",opts:["Право на образование","Обязанность платить штрафы"],correct:0}
  ]},

{ n:"Гражданство",
  explain:"<b>Гражданство</b> — устойчивая правовая связь человека с государством, дающая права и обязанности. Гражданин России имеет паспорт, подтверждающий его гражданство.",
  svg:`<svg viewBox="0 0 140 180" width="140">
  <rect x="10" y="10" width="120" height="160" rx="10" fill="#A83836" stroke="#2B2A26" stroke-width="3"/>
  <circle cx="70" cy="70" r="26" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <polygon points="70,52 76,66 91,66 79,75 84,90 70,81 56,90 61,75 49,66 64,66" fill="#A83836"/>
  <line x1="30" y1="130" x2="110" y2="130" stroke="#FFDE59" stroke-width="3"/>
  <line x1="30" y1="145" x2="90" y2="145" stroke="#FFDE59" stroke-width="3"/>
  </svg>`,
  bank:[
    {p:"Что такое гражданство?",opts:["Правовая связь человека с государством","Просто место рождения"],correct:0}
  ]},

{ n:"Отрасли права",
  explain:"Право делится на отрасли: <b>гражданское</b> (имущественные отношения), <b>уголовное</b> (преступления и наказания), <b>трудовое</b> (отношения работника и работодателя) и другие.",
  svg:`<svg viewBox="0 0 260 140" width="260">
  <rect x="90" y="8" width="80" height="30" rx="6" fill="#2B2A26" stroke="#2B2A26" stroke-width="2"/>
  <text x="130" y="28" font-size="11" text-anchor="middle" fill="#fff">Право</text>
  <line x1="130" y1="38" x2="130" y2="54" stroke="#2B2A26" stroke-width="2"/>
  <line x1="40" y1="54" x2="220" y2="54" stroke="#2B2A26" stroke-width="2"/>
  <line x1="40" y1="54" x2="40" y2="70" stroke="#2B2A26" stroke-width="2"/>
  <line x1="130" y1="54" x2="130" y2="70" stroke="#2B2A26" stroke-width="2"/>
  <line x1="220" y1="54" x2="220" y2="70" stroke="#2B2A26" stroke-width="2"/>
  <rect x="4" y="70" width="72" height="44" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="40" y="96" font-size="9" text-anchor="middle" fill="#fff">Гражданск.</text>
  <rect x="94" y="70" width="72" height="44" rx="6" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="130" y="96" font-size="9" text-anchor="middle" fill="#fff">Уголовное</text>
  <rect x="184" y="70" width="72" height="44" rx="6" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="220" y="96" font-size="9" text-anchor="middle" fill="#fff">Трудовое</text>
  </svg>`,
  bank:[
    {p:"Какая отрасль права регулирует преступления и наказания?",opts:["Уголовное право","Гражданское право"],correct:0},
    {p:"Какая отрасль регулирует отношения работника и работодателя?",opts:["Трудовое право","Уголовное право"],correct:0}
  ]},

{ n:"Правонарушение и ответственность",
  explain:"<b>Правонарушение</b> — виновное противоправное деяние, нарушающее нормы права. За правонарушения предусмотрена юридическая ответственность — от штрафа до лишения свободы, в зависимости от тяжести.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <rect x="20" y="20" width="120" height="120" rx="10" fill="#FFFEF8" stroke="#2B2A26" stroke-width="3"/>
  <line x1="35" y1="50" x2="125" y2="50" stroke="#736C5E" stroke-width="3"/>
  <line x1="35" y1="70" x2="125" y2="70" stroke="#736C5E" stroke-width="3"/>
  <line x1="35" y1="90" x2="90" y2="90" stroke="#736C5E" stroke-width="3"/>
  <line x1="30" y1="30" x2="130" y2="130" stroke="#D6524F" stroke-width="6"/>
  <line x1="130" y1="30" x2="30" y2="130" stroke="#D6524F" stroke-width="6"/>
  </svg>`,
  bank:[
    {p:"Что такое правонарушение?",opts:["Виновное нарушение норм права","Просто случайная ошибка без вины"],correct:0}
  ]},

{ n:"Разделение властей",
  explain:"Государственная власть в России делится на три ветви: <b>законодательную</b> (принимает законы), <b>исполнительную</b> (исполняет законы) и <b>судебную</b> (разрешает споры и наказывает нарушителей).",
  svg:`<svg viewBox="0 0 260 140" width="260">
  <rect x="90" y="10" width="80" height="34" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="130" y="32" font-size="11" text-anchor="middle" fill="#fff">Власть</text>
  <line x1="130" y1="44" x2="130" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <line x1="40" y1="60" x2="220" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <line x1="40" y1="60" x2="40" y2="76" stroke="#2B2A26" stroke-width="2"/>
  <line x1="130" y1="60" x2="130" y2="76" stroke="#2B2A26" stroke-width="2"/>
  <line x1="220" y1="60" x2="220" y2="76" stroke="#2B2A26" stroke-width="2"/>
  <rect x="4" y="76" width="72" height="34" rx="6" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="40" y="98" font-size="10" text-anchor="middle" fill="#fff">Законод.</text>
  <rect x="94" y="76" width="72" height="34" rx="6" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="130" y="98" font-size="10" text-anchor="middle" fill="#fff">Исполн.</text>
  <rect x="184" y="76" width="72" height="34" rx="6" fill="#9973B8" stroke="#725189" stroke-width="2"/>
  <text x="220" y="98" font-size="10" text-anchor="middle" fill="#fff">Судебн.</text>
  </svg>`,
  bank:[
    {p:"Сколько ветвей власти обычно выделяют?",opts:["Три","Одну"],correct:0},
    {p:"Какая ветвь власти принимает законы?",opts:["Законодательная","Судебная"],correct:0}
  ]},

{ n:"Гражданское общество",
  explain:"<b>Гражданское общество</b> — объединения граждан (организации, союзы), действующие независимо от государства для защиты своих интересов и решения общих проблем.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <rect x="80" y="60" width="60" height="45" rx="6" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <text x="110" y="86" font-size="9" text-anchor="middle" fill="#fff">Гос-во</text>
  <circle cx="30" cy="30" r="18" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <circle cx="190" cy="30" r="18" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <circle cx="30" cy="130" r="18" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="190" cy="130" r="18" fill="#9973B8" stroke="#725189" stroke-width="2"/>
  <line x1="30" y1="30" x2="190" y2="30" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="30" y1="130" x2="190" y2="130" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="30" y1="30" x2="30" y2="130" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="190" y1="30" x2="190" y2="130" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="3 3"/>
  </svg>`,
  bank:[
    {p:"Что такое гражданское общество?",opts:["Объединения граждан вне государства","Часть государственного аппарата"],correct:0}
  ]},

{ n:"Трудовые правоотношения",
  explain:"Трудовое право регулирует отношения между работником и работодателем: приём на работу, рабочее время, отпуск, увольнение — всё это оформляется трудовым договором.",
  svg:`<svg viewBox="0 0 200 150" width="200">
  <rect x="15" y="15" width="90" height="120" rx="6" fill="#FFFEF8" stroke="#2B2A26" stroke-width="3"/>
  <line x1="30" y1="40" x2="90" y2="40" stroke="#736C5E" stroke-width="3"/>
  <line x1="30" y1="60" x2="90" y2="60" stroke="#736C5E" stroke-width="3"/>
  <path d="M30 100l50-50 15 15-50 50-20 5z" fill="#E3922E" stroke="#B96F16" stroke-width="2" stroke-linejoin="round"/>
  <rect x="120" y="60" width="70" height="50" rx="8" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="145" y="48" width="20" height="16" rx="4" fill="none" stroke="#284D77" stroke-width="3"/>
  <line x1="120" y1="85" x2="190" y2="85" stroke="#284D77" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Каким документом оформляются отношения работника и работодателя?",opts:["Трудовым договором","Устным обещанием"],correct:0},
    {p:"Что регулирует трудовое право?",opts:["Отношения работника и работодателя","Только отношения в семье"],correct:0}
  ]},

{ n:"Административное право",
  explain:"<b>Административное право</b> регулирует отношения в сфере государственного управления, включая административные правонарушения (например, нарушение ПДД) и наказания за них — штрафы.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <circle cx="55" cy="45" r="35" fill="#FFFEF8" stroke="#D6524F" stroke-width="6"/>
  <line x1="30" y1="45" x2="80" y2="45" stroke="#D6524F" stroke-width="6"/>
  <rect x="120" y="20" width="65" height="90" rx="6" fill="#FFFEF8" stroke="#2B2A26" stroke-width="3"/>
  <line x1="132" y1="45" x2="173" y2="45" stroke="#736C5E" stroke-width="3"/>
  <line x1="132" y1="62" x2="173" y2="62" stroke="#736C5E" stroke-width="3"/>
  <text x="152" y="90" font-size="14" text-anchor="middle" font-weight="700" fill="#D6524F">₽</text>
  </svg>`,
  bank:[
    {p:"Что регулирует административное право?",opts:["Отношения в сфере государственного управления","Только семейные отношения"],correct:0},
    {p:"Что из этого — административное правонарушение?",opts:["Нарушение ПДД","Дружеская ссора без последствий"],correct:0}
  ]},

{ n:"Избирательное право",
  explain:"<b>Избирательное право</b> — право граждан участвовать в выборах: избирать (голосовать) и быть избранными на определённые должности при достижении установленного возраста.",
  svg:`<svg viewBox="0 0 180 160" width="180">
  <rect x="30" y="70" width="120" height="80" rx="8" fill="#3B6EA5" stroke="#284D77" stroke-width="3"/>
  <rect x="55" y="55" width="70" height="20" fill="#284D77"/>
  <rect x="80" y="0" width="20" height="60" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <path d="M83 25l6 8 12-16" fill="none" stroke="#5F9A5C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  bank:[
    {p:"Что даёт гражданам избирательное право?",opts:["Право голосовать и быть избранными","Право не платить налоги"],correct:0}
  ]}

];
