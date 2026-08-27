/* Химия, 10 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Органическая химия: углеводороды, спирты, кислоты, жиры, углеводы, белки. */

const CHEMISTRY10_MOD = [

{ n:"Теория строения органических соединений",
  explain:"Основы теории строения органических веществ заложил А. М. Бутлеров: свойства вещества зависят не только от состава, но и от порядка соединения атомов в молекуле.",
  svg:`<svg viewBox="0 0 220 100" width="220">
  <polyline points="20,70 50,40 80,70 110,40 140,70 170,40" fill="none" stroke="#2B2A26" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="20" cy="70" r="5" fill="#2B2A26"/><circle cx="50" cy="40" r="5" fill="#2B2A26"/>
  <circle cx="80" cy="70" r="5" fill="#2B2A26"/><circle cx="110" cy="40" r="5" fill="#2B2A26"/>
  <circle cx="140" cy="70" r="5" fill="#2B2A26"/><circle cx="170" cy="40" r="5" fill="#2B2A26"/>
  <text x="95" y="95" font-size="10" text-anchor="middle" fill="#736C5E">порядок соединения атомов С важен</text>
  </svg>`,
  bank:[
    {p:"Кто заложил основы теории строения органических веществ?",opts:["А. М. Бутлеров","Д. И. Менделеев"],correct:0},
    {p:"От чего, согласно теории Бутлерова, зависят свойства вещества?",opts:["От состава и порядка соединения атомов","Только от цвета вещества"],correct:0}
  ]},

{ n:"Алканы (предельные углеводороды)",
  explain:"<b>Алканы</b> — углеводороды, в молекулах которых атомы углерода соединены только одинарными связями. Общая формула CₙH₂ₙ₊₂. Простейший алкан — метан CH₄.",
  svg:`<svg viewBox="0 0 200 90" width="200">
  <line x1="70" y1="45" x2="130" y2="45" stroke="#2B2A26" stroke-width="3"/>
  <circle cx="70" cy="45" r="10" fill="#2B2A26"/>
  <circle cx="130" cy="45" r="10" fill="#2B2A26"/>
  <text x="70" y="49" font-size="9" text-anchor="middle" fill="#FFFEF8">C</text>
  <text x="130" y="49" font-size="9" text-anchor="middle" fill="#FFFEF8">C</text>
  <text x="100" y="20" font-size="11" text-anchor="middle" fill="#736C5E">одинарная связь C–C</text>
  <text x="100" y="75" font-size="11" text-anchor="middle" fill="#2B2A26">этан C₂H₆ (алкан)</text>
  </svg>`,
  bank:[
    {p:"Какие связи между атомами углерода у алканов?",opts:["Только одинарные","Двойные и тройные"],correct:0},
    {p:"Какой алкан простейший?",opts:["Метан CH₄","Этен C₂H₄"],correct:0}
  ]},

{ n:"Алкены (непредельные углеводороды)",
  explain:"<b>Алкены</b> — углеводороды с одной двойной связью между атомами углерода. Общая формула CₙH₂ₙ. Простейший алкен — этен (этилен) C₂H₄.",
  svg:`<svg viewBox="0 0 200 90" width="200">
  <line x1="70" y1="42" x2="130" y2="42" stroke="#2B2A26" stroke-width="3"/>
  <line x1="70" y1="50" x2="130" y2="50" stroke="#2B2A26" stroke-width="3"/>
  <circle cx="70" cy="46" r="10" fill="#2B2A26"/>
  <circle cx="130" cy="46" r="10" fill="#2B2A26"/>
  <text x="70" y="50" font-size="9" text-anchor="middle" fill="#FFFEF8">C</text>
  <text x="130" y="50" font-size="9" text-anchor="middle" fill="#FFFEF8">C</text>
  <text x="100" y="20" font-size="11" text-anchor="middle" fill="#736C5E">двойная связь C=C</text>
  <text x="100" y="78" font-size="11" text-anchor="middle" fill="#2B2A26">этен C₂H₄ (алкен)</text>
  </svg>`,
  bank:[
    {p:"Сколько двойных связей у алкенов?",opts:["Одна","Ни одной"],correct:0}
  ]},

{ n:"Спирты",
  explain:"<b>Спирты</b> — органические вещества, содержащие гидроксильную группу −OH, связанную с атомом углерода. Простейший спирт — метанол CH₃OH, этиловый спирт — этанол C₂H₅OH.",
  svg:`<svg viewBox="0 0 220 90" width="220">
  <line x1="40" y1="50" x2="90" y2="50" stroke="#2B2A26" stroke-width="2.5"/>
  <line x1="90" y1="50" x2="140" y2="50" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="40" cy="50" r="10" fill="#2B2A26"/><text x="40" y="54" font-size="8" text-anchor="middle" fill="#FFFEF8">C</text>
  <circle cx="90" cy="50" r="10" fill="#2B2A26"/><text x="90" y="54" font-size="8" text-anchor="middle" fill="#FFFEF8">C</text>
  <circle cx="140" cy="50" r="11" fill="#D6524F" stroke="#A83836" stroke-width="2"/><text x="140" y="54" font-size="8" text-anchor="middle" fill="#FFFEF8">O</text>
  <circle cx="168" cy="35" r="8" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/><text x="168" y="39" font-size="7" text-anchor="middle" fill="#FFFEF8">H</text>
  <line x1="150" y1="42" x2="162" y2="38" stroke="#2B2A26" stroke-width="2"/>
  <text x="105" y="78" font-size="11" text-anchor="middle" fill="#2B2A26">этанол C₂H₅OH (−OH группа)</text>
  </svg>`,
  bank:[
    {p:"Какую группу содержат спирты?",opts:["Гидроксильную группу −OH","Только атомы углерода"],correct:0},
    {p:"Как называется этиловый спирт по-научному?",opts:["Этанол","Метан"],correct:0}
  ]},

{ n:"Карбоновые кислоты",
  explain:"<b>Карбоновые кислоты</b> содержат карбоксильную группу −COOH. Простейшая — муравьиная кислота HCOOH, уксусная кислота — CH₃COOH.",
  svg:`<svg viewBox="0 0 200 100" width="200">
  <circle cx="90" cy="55" r="11" fill="#2B2A26"/><text x="90" y="59" font-size="8" text-anchor="middle" fill="#FFFEF8">C</text>
  <line x1="98" y1="45" x2="120" y2="25" stroke="#2B2A26" stroke-width="2.5"/>
  <line x1="102" y1="50" x2="124" y2="30" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="128" cy="20" r="10" fill="#D6524F" stroke="#A83836" stroke-width="2"/><text x="128" y="24" font-size="7" text-anchor="middle" fill="#FFFEF8">O</text>
  <line x1="98" y1="63" x2="120" y2="80" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="128" cy="88" r="10" fill="#D6524F" stroke="#A83836" stroke-width="2"/><text x="128" y="92" font-size="7" text-anchor="middle" fill="#FFFEF8">O</text>
  <circle cx="155" cy="95" r="8" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/><text x="155" y="99" font-size="7" text-anchor="middle" fill="#FFFEF8">H</text>
  <line x1="138" y1="90" x2="148" y2="93" stroke="#2B2A26" stroke-width="2"/>
  <text x="60" y="55" font-size="8" fill="#736C5E">R–</text>
  <text x="95" y="15" font-size="10" text-anchor="middle" fill="#736C5E">карбоксильная группа −COOH</text>
  </svg>`,
  bank:[
    {p:"Какую группу содержат карбоновые кислоты?",opts:["Карбоксильную группу −COOH","Гидроксильную группу"],correct:0},
    {p:"Формула уксусной кислоты?",opts:["CH₃COOH","C₂H₅OH"],correct:0}
  ]},

{ n:"Жиры",
  explain:"<b>Жиры</b> — сложные эфиры глицерина и высших карбоновых (жирных) кислот. Играют важную роль в питании и обмене веществ живых организмов.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <line x1="30" y1="20" x2="30" y2="90" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="30" cy="20" r="5" fill="#E3922E"/><circle cx="30" cy="55" r="5" fill="#E3922E"/><circle cx="30" cy="90" r="5" fill="#E3922E"/>
  <polyline points="30,20 60,25 80,15 100,20 120,10 140,15" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <polyline points="30,55 60,58 80,50 100,55 120,48 140,52" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <polyline points="30,90 60,92 80,85 100,90 120,84 140,88" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="30" y="105" font-size="9" text-anchor="middle" fill="#736C5E">глицерин</text>
  <text x="150" y="60" font-size="9" fill="#736C5E">жирные кислоты</text>
  </svg>`,
  bank:[
    {p:"Из чего состоят жиры?",opts:["Из глицерина и жирных кислот","Из чистого углерода"],correct:0}
  ]},

{ n:"Углеводы",
  explain:"<b>Углеводы</b> — органические вещества, к которым относятся глюкоза, сахароза, крахмал, целлюлоза. Служат основным источником энергии для живых организмов.",
  svg:`<svg viewBox="0 0 180 130" width="180">
  <polygon points="90,20 140,45 140,90 90,115 40,90 40,45" fill="none" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="90" cy="20" r="4" fill="#D6524F"/>
  <circle cx="140" cy="45" r="4" fill="#2B2A26"/>
  <circle cx="140" cy="90" r="4" fill="#2B2A26"/>
  <circle cx="90" cy="115" r="4" fill="#2B2A26"/>
  <circle cx="40" cy="90" r="4" fill="#2B2A26"/>
  <circle cx="40" cy="45" r="4" fill="#2B2A26"/>
  <text x="90" y="128" font-size="10" text-anchor="middle" fill="#736C5E">глюкоза C₆H₁₂O₆</text>
  </svg>`,
  bank:[
    {p:"Какое вещество относится к углеводам?",opts:["Глюкоза","Этанол"],correct:0},
    {p:"Какую роль обычно играют углеводы в организме?",opts:["Источник энергии","Только строительный материал"],correct:0}
  ]},

{ n:"Белки",
  explain:"<b>Белки</b> — сложные органические вещества, состоящие из аминокислот, соединённых пептидными связями. Белки выполняют строительную, ферментативную и другие функции в организме.",
  svg:`<svg viewBox="0 0 240 90" width="240">
  <line x1="30" y1="45" x2="190" y2="45" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="30" cy="45" r="14" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <circle cx="70" cy="45" r="14" fill="#9973B8" stroke="#725189" stroke-width="2"/>
  <circle cx="110" cy="45" r="14" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="150" cy="45" r="14" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <circle cx="190" cy="45" r="14" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="110" y="75" font-size="9" text-anchor="middle" fill="#736C5E">аминокислоты, связанные пептидной связью</text>
  </svg>`,
  bank:[
    {p:"Из чего состоят белки?",opts:["Из аминокислот, соединённых пептидными связями","Из чистого сахара"],correct:0}
  ]},

{ n:"Полимеры",
  explain:"<b>Полимеры</b> — вещества, молекулы которых состоят из множества повторяющихся звеньев (мономеров). Примеры: полиэтилен, каучук, целлюлоза.",
  svg:`<svg viewBox="0 0 220 90" width="220">
  <line x1="10" y1="45" x2="200" y2="45" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="30" width="30" height="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="75" y="30" width="30" height="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="120" y="30" width="30" height="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="165" y="30" width="30" height="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="45" y="50" font-size="10" text-anchor="middle" fill="#FFFEF8">M</text>
  <text x="90" y="50" font-size="10" text-anchor="middle" fill="#FFFEF8">M</text>
  <text x="135" y="50" font-size="10" text-anchor="middle" fill="#FFFEF8">M</text>
  <text x="180" y="50" font-size="10" text-anchor="middle" fill="#FFFEF8">M</text>
  <text x="110" y="78" font-size="10" text-anchor="middle" fill="#736C5E">повторяющиеся звенья мономера (n раз)</text>
  </svg>`,
  bank:[
    {p:"Из чего состоят молекулы полимера?",opts:["Из множества повторяющихся звеньев","Из одного единственного атома"],correct:0},
    {p:"Что из этого является примером полимера?",opts:["Полиэтилен","Поваренная соль"],correct:0}
  ]},

{ n:"Изомерия органических соединений",
  explain:"<b>Изомеры</b> — вещества с одинаковой молекулярной формулой, но разным строением молекулы, из-за чего у них разные свойства.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <polyline points="20,50 45,30 70,50 95,30" fill="none" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="20" cy="50" r="5" fill="#2B2A26"/><circle cx="45" cy="30" r="5" fill="#2B2A26"/>
  <circle cx="70" cy="50" r="5" fill="#2B2A26"/><circle cx="95" cy="30" r="5" fill="#2B2A26"/>
  <text x="55" y="75" font-size="9" text-anchor="middle" fill="#736C5E">н-бутан</text>
  <line x1="150" y1="50" x2="175" y2="50" stroke="#2B2A26" stroke-width="2.5"/>
  <line x1="150" y1="50" x2="150" y2="25" stroke="#2B2A26" stroke-width="2.5"/>
  <line x1="150" y1="50" x2="125" y2="65" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="150" cy="50" r="6" fill="#2B2A26"/>
  <circle cx="175" cy="50" r="5" fill="#2B2A26"/>
  <circle cx="150" cy="25" r="5" fill="#2B2A26"/>
  <circle cx="125" cy="65" r="5" fill="#2B2A26"/>
  <text x="150" y="88" font-size="9" text-anchor="middle" fill="#736C5E">изобутан (та же C₄H₁₀)</text>
  </svg>`,
  bank:[
    {p:"Что общего у изомеров?",opts:["Одинаковая молекулярная формула","Одинаковое строение молекулы"],correct:0},
    {p:"Одинаковы ли свойства у изомеров?",opts:["Нет, могут отличаться из-за разного строения","Да, всегда одинаковы"],correct:0}
  ]},

{ n:"Алкины",
  explain:"<b>Алкины</b> — углеводороды с одной тройной связью между атомами углерода. Простейший алкин — ацетилен (этин) C₂H₂, используемый, например, при сварке металлов.",
  svg:`<svg viewBox="0 0 200 90" width="200">
  <line x1="70" y1="40" x2="130" y2="40" stroke="#2B2A26" stroke-width="2.5"/>
  <line x1="70" y1="46" x2="130" y2="46" stroke="#2B2A26" stroke-width="2.5"/>
  <line x1="70" y1="52" x2="130" y2="52" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="70" cy="46" r="10" fill="#2B2A26"/><text x="70" y="50" font-size="8" text-anchor="middle" fill="#FFFEF8">C</text>
  <circle cx="130" cy="46" r="10" fill="#2B2A26"/><text x="130" y="50" font-size="8" text-anchor="middle" fill="#FFFEF8">C</text>
  <text x="100" y="20" font-size="11" text-anchor="middle" fill="#736C5E">тройная связь C≡C</text>
  <text x="100" y="78" font-size="11" text-anchor="middle" fill="#2B2A26">ацетилен C₂H₂ (алкин)</text>
  </svg>`,
  bank:[
    {p:"Сколько тройных связей у алкинов?",opts:["Одна","Ни одной"],correct:0},
    {p:"Где применяется ацетилен?",opts:["При сварке металлов","Только в пище"],correct:0}
  ]},

{ n:"Ароматические углеводороды",
  explain:"<b>Ароматические углеводороды</b> (арены) содержат в молекуле бензольное кольцо. Простейший представитель — бензол C₆H₆.",
  svg:`<svg viewBox="0 0 160 150" width="160">
  <polygon points="80,15 130,42 130,95 80,122 30,95 30,42" fill="none" stroke="#2B2A26" stroke-width="2.5"/>
  <circle cx="80" cy="68" r="35" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <text x="80" y="140" font-size="10" text-anchor="middle" fill="#736C5E">бензол C₆H₆</text>
  </svg>`,
  bank:[
    {p:"Что содержат молекулы ароматических углеводородов?",opts:["Бензольное кольцо","Только одинарные связи без колец"],correct:0},
    {p:"Как называется простейший ароматический углеводород?",opts:["Бензол","Метан"],correct:0}
  ]},

{ n:"Нуклеиновые кислоты",
  explain:"<b>Нуклеиновые кислоты</b> (ДНК и РНК) — сложные органические вещества, хранящие и передающие наследственную информацию в живых организмах.",
  svg:`<svg viewBox="0 0 160 150" width="160">
  <path d="M30 10c40 20 40 40 0 60s-40 40 0 60" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <path d="M130 10c-40 20-40 40 0 60s40 40 0 60" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <line x1="30" y1="25" x2="130" y2="25" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="30" y1="45" x2="130" y2="45" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="35" y1="70" x2="125" y2="70" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="30" y1="95" x2="130" y2="95" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="30" y1="115" x2="130" y2="115" stroke="#736C5E" stroke-width="1.5"/>
  <text x="80" y="140" font-size="10" text-anchor="middle" fill="#736C5E">двойная спираль ДНК</text>
  </svg>`,
  bank:[
    {p:"Что хранят и передают нуклеиновые кислоты?",opts:["Наследственную информацию","Только энергию"],correct:0},
    {p:"Какие два вида нуклеиновых кислот существуют?",opts:["ДНК и РНК","Только ДНК"],correct:0}
  ]}

];
