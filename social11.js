/* Обществознание, 11 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Итоговое обобщение курса: политика, право, экономика, международные отношения. */

const SOCIAL11_MOD = [

{ n:"Политическая система общества",
  explain:"<b>Политическая система</b> включает государство, политические партии, общественные организации, участвующие в управлении обществом и борьбе за власть.",
  svg:`<svg viewBox="0 0 260 140" width="260">
  <rect x="90" y="8" width="80" height="30" rx="6" fill="#2B2A26" stroke="#2B2A26" stroke-width="2"/>
  <text x="130" y="28" font-size="9" text-anchor="middle" fill="#fff">Полит. система</text>
  <line x1="130" y1="38" x2="130" y2="54" stroke="#2B2A26" stroke-width="2"/>
  <line x1="40" y1="54" x2="220" y2="54" stroke="#2B2A26" stroke-width="2"/>
  <line x1="40" y1="54" x2="40" y2="70" stroke="#2B2A26" stroke-width="2"/>
  <line x1="130" y1="54" x2="130" y2="70" stroke="#2B2A26" stroke-width="2"/>
  <line x1="220" y1="54" x2="220" y2="70" stroke="#2B2A26" stroke-width="2"/>
  <rect x="4" y="70" width="72" height="44" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="40" y="96" font-size="9" text-anchor="middle" fill="#fff">Гос-во</text>
  <rect x="94" y="70" width="72" height="44" rx="6" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="130" y="90" font-size="8" text-anchor="middle" fill="#fff">Партии</text>
  <rect x="184" y="70" width="72" height="44" rx="6" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="220" y="90" font-size="7" text-anchor="middle" fill="#fff">Организации</text>
  </svg>`,
  bank:[
    {p:"Что входит в политическую систему общества?",opts:["Государство и политические партии","Только семья одного человека"],correct:0}
  ]},

{ n:"Формы государственного правления",
  explain:"Основные формы правления — <b>монархия</b> (власть передаётся по наследству) и <b>республика</b> (власть избирается на определённый срок).",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <polygon points="30,80 20,40 45,55 60,25 75,55 100,40 90,80" fill="#FFDE59" stroke="#C99A00" stroke-width="2" stroke-linejoin="round"/>
  <rect x="20" y="80" width="70" height="14" fill="#C99A00"/>
  <text x="55" y="120" font-size="10" text-anchor="middle" fill="#2B2A26">монархия</text>
  <rect x="150" y="50" width="60" height="40" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="3"/>
  <rect x="168" y="35" width="24" height="16" fill="#284D77"/>
  <text x="180" y="120" font-size="10" text-anchor="middle" fill="#2B2A26">республика</text>
  </svg>`,
  bank:[
    {p:"Как передаётся власть в монархии?",opts:["По наследству","Всегда путём выборов"],correct:0},
    {p:"Как формируется власть в республике?",opts:["Путём выборов на определённый срок","Только по наследству"],correct:0}
  ]},

{ n:"Избирательная система",
  explain:"<b>Выборы</b> — способ формирования органов власти путём голосования граждан. В России выборы проводятся на основе всеобщего, равного и прямого избирательного права при тайном голосовании.",
  svg:`<svg viewBox="0 0 180 160" width="180">
  <rect x="20" y="20" width="140" height="100" rx="6" fill="none" stroke="#2B2A26" stroke-width="3"/>
  <rect x="70" y="70" width="40" height="50" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <path d="M75 95l10 10 20-20" fill="none" stroke="#FFFEF8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="20" y1="140" x2="160" y2="140" stroke="#736C5E" stroke-width="6"/>
  </svg>`,
  bank:[
    {p:"Каким образом формируются органы власти на выборах?",opts:["Путём голосования граждан","Путём случайной жеребьёвки"],correct:0}
  ]},

{ n:"Рыночная экономика: спрос, предложение, конкуренция",
  explain:"В условиях рыночной экономики цены формируются под влиянием спроса и предложения, а конкуренция между производителями стимулирует улучшение качества товаров.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <line x1="20" y1="30" x2="120" y2="30" stroke="#3B6EA5" stroke-width="6" stroke-linecap="round"/>
  <polygon points="120,24 135,30 120,36" fill="#3B6EA5"/>
  <line x1="20" y1="65" x2="150" y2="65" stroke="#5F9A5C" stroke-width="6" stroke-linecap="round"/>
  <polygon points="150,59 165,65 150,71" fill="#5F9A5C"/>
  <line x1="20" y1="100" x2="100" y2="100" stroke="#E3922E" stroke-width="6" stroke-linecap="round"/>
  <polygon points="100,94 115,100 100,106" fill="#E3922E"/>
  </svg>`,
  bank:[
    {p:"Что стимулирует конкуренция между производителями?",opts:["Улучшение качества товаров","Полный застой производства"],correct:0}
  ]},

{ n:"Инфляция",
  explain:"<b>Инфляция</b> — устойчивое повышение общего уровня цен в экономике, при котором на одну и ту же сумму денег со временем можно купить меньше товаров.",
  svg:`<svg viewBox="0 0 180 150" width="180">
  <path d="M20 130L70 80 100 100 160 30" fill="none" stroke="#D6524F" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="140,25 165,25 165,50" fill="#D6524F"/>
  <text x="40" y="60" font-size="20" font-weight="700" fill="#D6524F">₽</text>
  <text x="70" y="145" font-size="20" font-weight="700" fill="#D6524F">₽₽</text>
  </svg>`,
  bank:[
    {p:"Что происходит с ценами при инфляции?",opts:["Они устойчиво растут","Они всегда падают"],correct:0}
  ]},

{ n:"Безработица",
  explain:"<b>Безработица</b> — ситуация, когда часть трудоспособного населения, желающего работать, не может найти работу. Разные виды безработицы связаны с разными причинами.",
  svg:`<svg viewBox="0 0 160 170" width="160">
  <circle cx="80" cy="45" r="24" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <path d="M40 130c6-35 30-45 40-45s34 10 40 45" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <rect x="55" y="130" width="50" height="30" rx="4" fill="none" stroke="#2B2A26" stroke-width="3"/>
  <text x="80" y="20" font-size="24" text-anchor="middle" font-weight="700" fill="#D6524F">?</text>
  </svg>`,
  bank:[
    {p:"Кого считают безработным?",opts:["Трудоспособного человека, желающего работать, но не нашедшего работу","Любого человека без работы, даже если он не ищет её"],correct:0}
  ]},

{ n:"Международные отношения",
  explain:"<b>Международные отношения</b> — взаимодействие государств и международных организаций в политической, экономической и других сферах на мировой арене.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <circle cx="100" cy="80" r="70" fill="#DCE9F6" stroke="#284D77" stroke-width="2"/>
  <circle cx="55" cy="55" r="8" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <circle cx="145" cy="55" r="8" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1.5"/>
  <circle cx="100" cy="115" r="8" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <line x1="55" y1="55" x2="145" y2="55" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="55" y1="55" x2="100" y2="115" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="145" y1="55" x2="100" y2="115" stroke="#2B2A26" stroke-width="1.5"/>
  </svg>`,
  bank:[
    {p:"Кто является основными участниками международных отношений?",opts:["Государства и международные организации","Только отдельные семьи"],correct:0}
  ]},

{ n:"Глобализация",
  explain:"<b>Глобализация</b> — процесс усиления взаимосвязи стран мира в экономике, культуре и политике, стирающий многие прежние границы между национальными рынками.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="55" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="3"/>
  <path d="M60 70c20-15 60-15 80 0M55 100h90M60 130c20 15 60 15 80 0" fill="none" stroke="#FFFEF8" stroke-width="2" opacity="0.8"/>
  <path d="M20 20l30 30M180 20l-30 30M20 180l30-30M180 180l-30-30" stroke="#2B2A26" stroke-width="3" stroke-linecap="round"/>
  <polygon points="46,46 30,30 46,30" fill="#2B2A26"/>
  <polygon points="154,46 170,30 154,30" fill="#2B2A26"/>
  <polygon points="46,154 30,170 46,154" fill="#2B2A26"/>
  <polygon points="154,154 170,170 154,170" fill="#2B2A26"/>
  </svg>`,
  bank:[
    {p:"Что усиливает глобализация?",opts:["Взаимосвязь стран мира","Полную изоляцию каждой страны"],correct:0}
  ]},

{ n:"Правовое государство",
  explain:"<b>Правовое государство</b> — государство, где власть ограничена законом, соблюдаются права человека, а все, включая само государство, подчиняются закону.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <line x1="100" y1="10" x2="100" y2="35" stroke="#2B2A26" stroke-width="3"/>
  <line x1="70" y1="20" x2="130" y2="20" stroke="#2B2A26" stroke-width="3"/>
  <path d="M55 20a15 10 0 0 0 30 0z" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <path d="M115 20a15 10 0 0 0 30 0z" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <polygon points="100,45 175,85 25,85" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="10" y="175" width="180" height="12" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="90" width="14" height="80" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="63" y="90" width="14" height="80" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="123" y="90" width="14" height="80" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="156" y="90" width="14" height="80" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Чему подчиняется власть в правовом государстве?",opts:["Закону","Только личным желаниям правителя"],correct:0},
    {p:"Соблюдаются ли права человека в правовом государстве?",opts:["Да, это ключевой признак","Нет, права не важны"],correct:0}
  ]},

{ n:"Гражданское общество и государство",
  explain:"Гражданское общество и государство взаимодействуют: гражданское общество может влиять на решения власти через общественные организации, СМИ, обращения граждан.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <rect x="80" y="60" width="60" height="45" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="110" y="86" font-size="9" text-anchor="middle" fill="#fff">Гос-во</text>
  <circle cx="30" cy="30" r="16" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <circle cx="190" cy="30" r="16" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <circle cx="30" cy="130" r="16" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <line x1="45" y1="42" x2="75" y2="65" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="70,58 78,64 68,70" fill="#2B2A26"/>
  <line x1="175" y1="42" x2="145" y2="65" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="150,58 142,64 152,70" fill="#2B2A26"/>
  <line x1="45" y1="118" x2="75" y2="98" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="70,105 78,100 72,92" fill="#2B2A26"/>
  </svg>`,
  bank:[
    {p:"Через что гражданское общество может влиять на власть?",opts:["Через общественные организации и СМИ","Только через военную силу"],correct:0}
  ]},

{ n:"Социальный конфликт и пути его разрешения",
  explain:"Крупные социальные конфликты в обществе можно урегулировать через переговоры, посредничество, реформы и компромиссы между сторонами.",
  svg:`<svg viewBox="0 0 200 100" width="200">
  <polygon points="10,35 90,35 100,50 90,65 10,65" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <polygon points="190,35 110,35 100,50 110,65 190,65" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="100" cy="50" r="12" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <path d="M94 50l4 5 8-10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  bank:[
    {p:"Что помогает урегулировать крупные социальные конфликты?",opts:["Переговоры и компромиссы","Полное игнорирование проблемы"],correct:0}
  ]},

{ n:"Итоговое обобщение курса обществознания",
  explain:"Курс обществознания рассматривает человека, общество, экономику, политику и право как взаимосвязанные части единой системы общественной жизни.",
  bank:[
    {p:"Что рассматривает курс обществознания как единую систему?",opts:["Человека, общество, экономику, политику, право","Только природные явления"],correct:0}
  ]}

];
