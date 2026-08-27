/* Обществознание, 10 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 9 класса: философия, экономика, социальные отношения углублённо. */

const SOCIAL10_MOD = [

{ n:"Общество как система",
  explain:"<b>Общество</b> рассматривают как систему, состоящую из взаимосвязанных сфер (экономической, политической, социальной, духовной), где изменения в одной сфере влияют на другие.",
  svg:`<svg viewBox="0 0 220 200" width="220">
  <rect x="70" y="10" width="80" height="34" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="110" y="32" font-size="10" text-anchor="middle" fill="#fff">экономика</text>
  <rect x="10" y="80" width="80" height="34" rx="6" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="50" y="102" font-size="10" text-anchor="middle" fill="#fff">политика</text>
  <rect x="130" y="80" width="80" height="34" rx="6" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="170" y="102" font-size="9" text-anchor="middle" fill="#fff">социум</text>
  <rect x="70" y="150" width="80" height="34" rx="6" fill="#9973B8" stroke="#725189" stroke-width="2"/>
  <text x="110" y="172" font-size="9" text-anchor="middle" fill="#fff">культура</text>
  <line x1="110" y1="44" x2="50" y2="80" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="110" y1="44" x2="170" y2="80" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="50" y1="114" x2="110" y2="150" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="170" y1="114" x2="110" y2="150" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="90" y1="97" x2="130" y2="97" stroke="#2B2A26" stroke-width="1.5"/>
  </svg>`,
  bank:[
    {p:"Почему общество называют системой?",opts:["Его сферы взаимосвязаны и влияют друг на друга","Потому что оно состоит только из одной части"],correct:0}
  ]},

{ n:"Истина и её критерии",
  explain:"<b>Истина</b> — знание, соответствующее действительности. Главный критерий истины — практика: проверка знаний на опыте.",
  svg:`<svg viewBox="0 0 180 160" width="180">
  <circle cx="80" cy="70" r="50" fill="none" stroke="#3B6EA5" stroke-width="6"/>
  <line x1="115" y1="105" x2="160" y2="150" stroke="#3B6EA5" stroke-width="10" stroke-linecap="round"/>
  <path d="M60 75l14 14 28-28" fill="none" stroke="#5F9A5C" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  bank:[
    {p:"Что такое истина?",opts:["Знание, соответствующее действительности","Любое чужое мнение"],correct:0},
    {p:"Какой главный критерий истины называют в философии?",opts:["Практика (проверка опытом)","Личное убеждение без проверки"],correct:0}
  ]},

{ n:"Виды деятельности человека",
  explain:"Деятельность человека делят на труд, игру, учение и общение. Каждый вид деятельности имеет свою цель и средства достижения.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <rect x="10" y="10" width="85" height="85" rx="8" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="52" y="58" font-size="11" text-anchor="middle" fill="#fff">труд</text>
  <rect x="105" y="10" width="85" height="85" rx="8" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="147" y="58" font-size="11" text-anchor="middle" fill="#fff">игра</text>
  <rect x="10" y="105" width="85" height="85" rx="8" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="52" y="153" font-size="11" text-anchor="middle" fill="#fff">учение</text>
  <rect x="105" y="105" width="85" height="85" rx="8" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <text x="147" y="153" font-size="10" text-anchor="middle" fill="#fff">общение</text>
  </svg>`,
  bank:[
    {p:"Что из этого — вид деятельности человека?",opts:["Труд","Только сон"],correct:0}
  ]},

{ n:"Экономические системы",
  explain:"Различают несколько типов экономических систем: <b>рыночную</b> (решения принимает рынок), <b>командную</b> (решения принимает государство) и <b>смешанную</b> (сочетание обеих).",
  svg:`<svg viewBox="0 0 260 100" width="260">
  <line x1="20" y1="70" x2="240" y2="70" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="240,70 230,64 230,76" fill="#2B2A26"/>
  <circle cx="40" cy="70" r="14" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="130" cy="70" r="14" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <circle cx="220" cy="70" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="40" y="40" font-size="9" text-anchor="middle" fill="#2B2A26">рыночная</text>
  <text x="130" y="40" font-size="9" text-anchor="middle" fill="#2B2A26">смешанная</text>
  <text x="220" y="40" font-size="9" text-anchor="middle" fill="#2B2A26">командная</text>
  </svg>`,
  bank:[
    {p:"Кто принимает основные экономические решения в рыночной экономике?",opts:["Рынок (спрос и предложение)","Только государство"],correct:0},
    {p:"Что сочетает смешанная экономическая система?",opts:["Черты рыночной и командной экономики","Только элементы командной экономики"],correct:0}
  ]},

{ n:"Факторы производства",
  explain:"К <b>факторам производства</b> относят труд, капитал, землю (природные ресурсы) и предпринимательские способности — всё, что нужно для создания товаров и услуг.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <rect x="5" y="10" width="48" height="48" rx="8" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="60" y="10" width="48" height="48" rx="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <rect x="115" y="10" width="48" height="48" rx="8" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <rect x="170" y="10" width="48" height="48" rx="8" fill="#9973B8" stroke="#725189" stroke-width="2"/>
  <text x="29" y="90" font-size="8" text-anchor="middle" fill="#2B2A26">труд</text>
  <text x="84" y="90" font-size="8" text-anchor="middle" fill="#2B2A26">капитал</text>
  <text x="139" y="90" font-size="8" text-anchor="middle" fill="#2B2A26">земля</text>
  <text x="194" y="90" font-size="7" text-anchor="middle" fill="#2B2A26">предприн.</text>
  </svg>`,
  bank:[
    {p:"Что из этого — фактор производства?",opts:["Труд","Только реклама товара"],correct:0}
  ]},

{ n:"Социальная мобильность",
  explain:"<b>Социальная мобильность</b> — перемещение людей между социальными группами и слоями (например, повышение по карьерной лестнице).",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <rect x="10" y="120" width="40" height="30" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <rect x="55" y="90" width="40" height="60" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="100" y="60" width="40" height="90" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <rect x="145" y="30" width="40" height="120" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <circle cx="30" cy="105" r="10" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <path d="M30 95c30-30 90-60 135-70" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <polygon points="165,25 160,15 175,20" fill="#2B2A26"/>
  </svg>`,
  bank:[
    {p:"Что такое социальная мобильность?",opts:["Перемещение между социальными группами","Только физическое перемещение по городу"],correct:0}
  ]},

{ n:"Социальный конфликт",
  explain:"<b>Социальный конфликт</b> — столкновение интересов разных групп или людей. Конфликты можно решать через переговоры, компромисс или посредничество третьей стороны.",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <circle cx="45" cy="60" r="35" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="155" cy="60" r="35" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <polygon points="100,20 85,60 100,55 90,100 115,55 100,60" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  </svg>`,
  bank:[
    {p:"Что можно использовать для решения социального конфликта?",opts:["Переговоры и компромисс","Только полное игнорирование проблемы"],correct:0}
  ]},

{ n:"Молодёжь как социальная группа",
  explain:"<b>Молодёжь</b> — социальная группа, проходящая период становления личности, выбора профессии и формирования собственных взглядов на жизнь.",
  svg:`<svg viewBox="0 0 220 100" width="220">
  <path d="M10 80 Q110 20 210 80" fill="none" stroke="#736C5E" stroke-width="10" stroke-dasharray="14 10"/>
  <circle cx="10" cy="80" r="10" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <circle cx="110" cy="35" r="10" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <circle cx="210" cy="80" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Какой процесс проходит молодёжь как социальная группа?",opts:["Становление личности и выбор профессии","Полное завершение карьеры"],correct:0}
  ]},

{ n:"Мировоззрение",
  explain:"<b>Мировоззрение</b> — система взглядов человека на мир и своё место в нём, включающая убеждения, ценности и идеалы.",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <path d="M10 60c30-35 150-35 180 0-30 35-150 35-180 0z" fill="#FFFEF8" stroke="#2B2A26" stroke-width="3"/>
  <circle cx="100" cy="60" r="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <path d="M75 50c10-6 20 4 25 10M80 72c8 6 22 2 30-6" stroke="#DCE9F6" stroke-width="2" fill="none"/>
  </svg>`,
  bank:[
    {p:"Что такое мировоззрение?",opts:["Система взглядов на мир и своё место в нём","Только список фактов"],correct:0}
  ]},

{ n:"Свобода и ответственность",
  explain:"<b>Свобода</b> человека в обществе неразрывно связана с <b>ответственностью</b> — свобода одного человека не должна нарушать права и свободы других людей.",
  svg:`<svg viewBox="0 0 220 170" width="220">
  <line x1="110" y1="15" x2="110" y2="140" stroke="#2B2A26" stroke-width="4"/>
  <line x1="45" y1="45" x2="175" y2="45" stroke="#2B2A26" stroke-width="4"/>
  <line x1="45" y1="45" x2="30" y2="90" stroke="#2B2A26" stroke-width="2"/>
  <line x1="45" y1="45" x2="60" y2="90" stroke="#2B2A26" stroke-width="2"/>
  <path d="M20 90a25 16 0 0 0 50 0z" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="45" y="115" font-size="9" text-anchor="middle" fill="#2B2A26">свобода</text>
  <line x1="175" y1="45" x2="160" y2="90" stroke="#2B2A26" stroke-width="2"/>
  <line x1="175" y1="45" x2="190" y2="90" stroke="#2B2A26" stroke-width="2"/>
  <path d="M150 90a25 16 0 0 0 50 0z" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="175" y="115" font-size="8" text-anchor="middle" fill="#2B2A26">ответств.</text>
  <polygon points="110,140 92,158 128,158" fill="#736C5E"/>
  </svg>`,
  bank:[
    {p:"С чем неразрывно связана свобода человека в обществе?",opts:["С ответственностью","С полной вседозволенностью"],correct:0},
    {p:"Может ли свобода одного человека нарушать права других?",opts:["Не должна нарушать","Может нарушать без ограничений"],correct:0}
  ]},

{ n:"Социальные нормы",
  explain:"<b>Социальные нормы</b> — правила поведения, принятые в обществе: обычаи, традиции, мораль, право. Они регулируют поведение людей в обществе.",
  svg:`<svg viewBox="0 0 200 170" width="200">
  <rect x="30" y="10" width="140" height="34" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="100" y="32" font-size="10" text-anchor="middle" fill="#fff">обычаи</text>
  <rect x="30" y="50" width="140" height="34" rx="6" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="100" y="72" font-size="10" text-anchor="middle" fill="#fff">традиции</text>
  <rect x="30" y="90" width="140" height="34" rx="6" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="100" y="112" font-size="10" text-anchor="middle" fill="#fff">мораль</text>
  <rect x="30" y="130" width="140" height="34" rx="6" fill="#9973B8" stroke="#725189" stroke-width="2"/>
  <text x="100" y="152" font-size="10" text-anchor="middle" fill="#fff">право</text>
  </svg>`,
  bank:[
    {p:"Что такое социальные нормы?",opts:["Правила поведения, принятые в обществе","Только законы физики"],correct:0},
    {p:"Что из этого — пример социальной нормы?",opts:["Традиция","Химическая формула"],correct:0}
  ]}

];
