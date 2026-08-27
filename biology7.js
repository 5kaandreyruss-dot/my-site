/* Биология. Животные, 7 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 5-6 классов (ботаника) — теперь зоология: царство животных. */

const BIOLOGY7_MOD = [

{ n:"Царство животных",
  explain:"Животные — царство живой природы. В отличие от растений, животные не создают себе пищу сами, а питаются готовыми органическими веществами и могут активно двигаться.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <path d="M40 90c-16-4-26 8-30 22 14 6 26-4 30-22z" fill="#5F9A5C"/>
  <line x1="40" y1="90" x2="40" y2="112" stroke="#3F7A3D" stroke-width="4"/>
  <text x="40" y="40" font-size="12" text-anchor="middle" fill="#2B2A26">неподвижно</text>
  <text x="150" y="50" font-size="28" text-anchor="middle">🐇</text>
  <path d="M110 95l20-6M170 95l20-6" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="2 2"/>
  <text x="150" y="112" font-size="12" text-anchor="middle" fill="#2B2A26">двигается, ест пищу</text>
  </svg>`,
  bank:[
    {p:"Могут ли животные, в отличие от растений, сами создавать себе пищу на свету?",opts:["Нет, они питаются готовой пищей","Да, все животные это умеют"],correct:0},
    {p:"Какая особенность отличает большинство животных от растений?",opts:["Способность активно двигаться","Наличие клеток"],correct:0}
  ]},

{ n:"Простейшие",
  explain:"<b>Простейшие</b> — одноклеточные животные, невидимые без микроскопа, например амёба и инфузория-туфелька. Они живут в воде и влажной почве.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <circle cx="100" cy="70" r="65" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M55 60c-8-10 4-22 16-18-2-10 12-16 18-6 8-10 22-2 18 10 12 0 14 16 2 20 6 10-6 20-16 14 0 10-14 14-20 4-10 6-20-4-14-14-10-2-10-14-4-10z" fill="#9973B8" opacity="0.85" stroke="#725189" stroke-width="1.5"/>
  <ellipse cx="140" cy="95" rx="22" ry="10" fill="#3E8F86" opacity="0.85" stroke="#2C6D66" stroke-width="1.5"/>
  <text x="55" y="115" font-size="9" fill="#2B2A26">амёба</text>
  <text x="140" y="115" font-size="9" fill="#2B2A26">инфузория</text>
  </svg>`,
  bank:[
    {p:"Из скольких клеток состоят простейшие животные?",opts:["Из одной","Из тысячи"],correct:0},
    {p:"Какое из этих названий — простейшее животное?",opts:["Амёба","Волк","Дуб"],correct:0},
    {p:"Где обычно обитают простейшие?",opts:["В воде и влажной почве","Только в пустыне"],correct:0}
  ]},

{ n:"Черви",
  explain:"Черви делятся на группы: плоские, круглые и кольчатые. Дождевой червь (кольчатый) рыхлит почву, что полезно для растений.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <path d="M15 40c30 0 30 10 60 10s30-10 60-10 30 10 55 10" fill="none" stroke="#D6524F" stroke-width="6" stroke-linecap="round"/>
  <text x="110" y="20" font-size="9" text-anchor="middle" fill="#2B2A26">плоский</text>
  <path d="M15 70c40 0 40 0 80 0s40 0 80 0" fill="none" stroke="#E3922E" stroke-width="4" stroke-linecap="round"/>
  <text x="110" y="88" font-size="9" text-anchor="middle" fill="#2B2A26">круглый</text>
  <path d="M15 100c8 0 8-6 16-6s8 6 16 6 8-6 16-6 8 6 16 6 8-6 16-6 8 6 16 6 8-6 16-6 8 6 16 6 8-6 16-6" fill="none" stroke="#B96F16" stroke-width="5" stroke-linecap="round"/>
  <text x="110" y="118" font-size="9" text-anchor="middle" fill="#2B2A26">кольчатый (дождевой)</text>
  </svg>`,
  bank:[
    {p:"На какие основные группы делят червей?",opts:["Плоские, круглые, кольчатые","Только на плоские и круглые"],correct:0},
    {p:"К какой группе относится дождевой червь?",opts:["К кольчатым","К плоским"],correct:0},
    {p:"Чем полезен дождевой червь для почвы?",opts:["Рыхлит её","Уплотняет её"],correct:0}
  ]},

{ n:"Моллюски",
  explain:"<b>Моллюски</b> — мягкотелые животные, многие из них имеют раковину для защиты: улитки, мидии, осьминоги (хотя у осьминога раковины нет).",
  svg:`<svg viewBox="0 0 180 140" width="180">
  <circle cx="70" cy="70" r="30" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <path d="M70 70m-22 0a22 22 0 1 1 44 0a15 15 0 1 1 -30 0a9 9 0 1 1 18 0" fill="none" stroke="#B96F16" stroke-width="1.5"/>
  <path d="M45 95c-15 8-20 20-18 30" fill="none" stroke="#2B2A26" stroke-width="4" stroke-linecap="round"/>
  <line x1="27" y1="98" x2="20" y2="88" stroke="#2B2A26" stroke-width="2" stroke-linecap="round"/>
  <line x1="30" y1="105" x2="22" y2="98" stroke="#2B2A26" stroke-width="2" stroke-linecap="round"/>
  <text x="80" y="130" font-size="10" text-anchor="middle" fill="#2B2A26">раковина защищает тело</text>
  </svg>`,
  bank:[
    {p:"Как называют мягкотелых животных, часто с раковиной?",opts:["Моллюски","Черви","Насекомые"],correct:0},
    {p:"Что из этого — моллюск?",opts:["Улитка","Дождевой червь","Бабочка"],correct:0},
    {p:"Есть ли раковина у осьминога?",opts:["Нет, у него нет раковины","Да, всегда есть"],correct:0}
  ]},

{ n:"Членистоногие: насекомые",
  explain:"<b>Насекомые</b> — самая многочисленная группа животных на Земле. У них тело разделено на голову, грудь и брюшко, а ног обычно шесть.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <circle cx="40" cy="60" r="14" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="80" cy="60" rx="22" ry="16" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="135" cy="60" rx="38" ry="20" fill="#D9679A" stroke="#2B2A26" stroke-width="2"/>
  <g stroke="#2B2A26" stroke-width="2" stroke-linecap="round">
  <line x1="70" y1="68" x2="55" y2="90"/><line x1="80" y1="74" x2="70" y2="95"/><line x1="92" y1="70" x2="90" y2="92"/>
  </g>
  <text x="40" y="35" font-size="9" text-anchor="middle" fill="#2B2A26">голова</text>
  <text x="80" y="35" font-size="9" text-anchor="middle" fill="#2B2A26">грудь</text>
  <text x="135" y="35" font-size="9" text-anchor="middle" fill="#2B2A26">брюшко</text>
  <text x="70" y="110" font-size="9" text-anchor="middle" fill="#2B2A26">6 ног</text>
  </svg>`,
  bank:[
    {p:"Сколько ног обычно у насекомых?",opts:["Шесть","Четыре","Восемь"],correct:0},
    {p:"На какие части разделено тело насекомого?",opts:["Голова, грудь, брюшко","Только голова и хвост"],correct:0},
    {p:"Какая группа животных самая многочисленная на Земле?",opts:["Насекомые","Млекопитающие"],correct:0}
  ]},

{ n:"Рыбы",
  explain:"<b>Рыбы</b> дышат жабрами и передвигаются с помощью плавников. Они первыми среди позвоночных животных освоили жизнь в воде.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <path d="M20 60c30-30 100-30 130 0-30 30-100 30-130 0z" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <path d="M150 60l35-22v44z" fill="#284D77" stroke="#2B2A26" stroke-width="2"/>
  <path d="M70 35l10-18 10 20" fill="#284D77" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M55 85l-6 16 14-10z" fill="#284D77" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="45" cy="55" r="4" fill="#2B2A26"/>
  <path d="M55 55c5 8 5 14 0 20" fill="none" stroke="#284D77" stroke-width="2"/>
  <text x="55" y="45" font-size="9" fill="#2B2A26">жабры</text>
  <text x="150" y="100" font-size="9" text-anchor="middle" fill="#2B2A26">плавник</text>
  </svg>`,
  bank:[
    {p:"Чем дышат рыбы?",opts:["Жабрами","Лёгкими","Кожей только"],correct:0},
    {p:"С помощью чего передвигаются рыбы?",opts:["Плавников","Ног","Крыльев"],correct:0}
  ]},

{ n:"Земноводные и пресмыкающиеся",
  explain:"<b>Земноводные</b> (лягушки) живут и в воде, и на суше, размножаются в воде. <b>Пресмыкающиеся</b> (ящерицы, змеи) более приспособлены к суше, имеют сухую чешуйчатую кожу.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <ellipse cx="55" cy="70" rx="30" ry="20" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="40" cy="55" r="8" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="70" cy="55" r="8" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <rect x="20" y="90" width="70" height="15" fill="#DCE9F6"/>
  <text x="55" y="120" font-size="9" text-anchor="middle" fill="#2B2A26">лягушка (вода+суша)</text>
  <path d="M140 80c30-10 55-5 65 5" fill="none" stroke="#E3922E" stroke-width="10" stroke-linecap="round"/>
  <circle cx="140" cy="78" r="12" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <path d="M130 70l4 6M136 68l3 7M144 68l1 8" stroke="#B96F16" stroke-width="1"/>
  <text x="175" y="120" font-size="7" text-anchor="middle" fill="#2B2A26">ящерица (суша, чешуя)</text>
  </svg>`,
  bank:[
    {p:"Где размножаются земноводные, например лягушки?",opts:["В воде","Только на суше"],correct:0},
    {p:"Какая кожа у пресмыкающихся (например, у ящериц)?",opts:["Сухая, чешуйчатая","Влажная, гладкая"],correct:0},
    {p:"Что из этого — земноводное?",opts:["Лягушка","Змея","Орёл"],correct:0}
  ]},

{ n:"Птицы",
  explain:"<b>Птицы</b> — единственные животные с перьями, большинство умеет летать. Тело птиц приспособлено к полёту: лёгкие кости, крылья.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <ellipse cx="100" cy="70" rx="35" ry="25" fill="#D6524F" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="150" cy="50" r="14" fill="#D6524F" stroke="#2B2A26" stroke-width="2"/>
  <path d="M162 50l14-4-14 10z" fill="#E3922E"/>
  <path d="M75 60c-20-10-35 0-30 20 15 5 30-5 30-20z" fill="#A83836" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M75 55c8 2 12 2 20 0M75 62c8 2 14 2 22 0" stroke="#2B2A26" stroke-width="1" fill="none"/>
  <text x="100" y="110" font-size="9" text-anchor="middle" fill="#2B2A26">перья и крылья</text>
  </svg>`,
  bank:[
    {p:"Какая особенность есть только у птиц среди всех животных?",opts:["Перья","Четыре ноги"],correct:0},
    {p:"Какими костями обладают птицы, что облегчает полёт?",opts:["Лёгкими, полыми костями","Очень тяжёлыми костями"],correct:0}
  ]},

{ n:"Млекопитающие",
  explain:"<b>Млекопитающие</b> вскармливают детёнышей молоком и обычно покрыты шерстью. К ним относится и человек. Это самая высокоразвитая группа животных.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <ellipse cx="90" cy="75" rx="45" ry="25" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="145" cy="55" r="18" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <path d="M138 42l-4-10 8 6zM152 42l4-10-8 6z" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <g stroke="#B96F16" stroke-width="1" fill="none"><path d="M60 65c4 4 4 8 0 12M75 60c4 4 4 8 0 12M90 58c4 4 4 8 0 12"/></g>
  <line x1="60" y1="100" x2="55" y2="120" stroke="#2B2A26" stroke-width="4" stroke-linecap="round"/>
  <line x1="110" y1="100" x2="115" y2="120" stroke="#2B2A26" stroke-width="4" stroke-linecap="round"/>
  <text x="90" y="125" font-size="9" text-anchor="middle" fill="#2B2A26">шерсть, кормит молоком</text>
  </svg>`,
  bank:[
    {p:"Чем кормят своих детёнышей млекопитающие?",opts:["Молоком","Только травой"],correct:0},
    {p:"Что обычно покрывает тело млекопитающих?",opts:["Шерсть","Перья","Чешуя"],correct:0},
    {p:"К какой группе животных относится человек?",opts:["К млекопитающим","К пресмыкающимся"],correct:0}
  ]},

{ n:"Кишечнополостные",
  explain:"<b>Кишечнополостные</b> (медузы, кораллы, гидры) — простые многоклеточные животные с телом в форме мешка и щупальцами, обитают в воде.",
  svg:`<svg viewBox="0 0 180 140" width="180">
  <path d="M40 60a50 30 0 0 1 100 0z" fill="#9973B8" opacity="0.85" stroke="#725189" stroke-width="2"/>
  <path d="M55 60c0 20-5 35-2 55M75 60c0 25-3 40 0 60M95 60c0 22 4 38 1 58M115 60c0 18 6 32 4 52" stroke="#725189" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
  <text x="90" y="125" font-size="10" text-anchor="middle" fill="#2B2A26">медуза, щупальца</text>
  </svg>`,
  bank:[
    {p:"Что из этого — кишечнополостное животное?",opts:["Медуза","Волк","Орёл"],correct:0},
    {p:"Где обитают кишечнополостные животные?",opts:["В воде","На суше"],correct:0},
    {p:"Что часто есть у кишечнополостных для захвата пищи?",opts:["Щупальца","Крылья"],correct:0}
  ]},

{ n:"Паукообразные",
  explain:"<b>Паукообразные</b> (пауки, клещи, скорпионы) — членистоногие животные с восемью ногами, в отличие от насекомых с шестью ногами.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <circle cx="100" cy="55" r="16" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="100" cy="90" rx="26" ry="22" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <g stroke="#2B2A26" stroke-width="2" fill="none" stroke-linecap="round">
  <path d="M78 75c-15-5-25-2-35 5"/><path d="M78 85c-15 0-28 8-33 18"/><path d="M78 95c-12 6-22 16-24 28"/><path d="M82 105c-8 10-14 20-13 30"/>
  <path d="M122 75c15-5 25-2 35 5"/><path d="M122 85c15 0 28 8 33 18"/><path d="M122 95c12 6 22 16 24 28"/><path d="M118 105c8 10 14 20 13 30"/>
  </g>
  <text x="100" y="20" font-size="10" text-anchor="middle" fill="#2B2A26">8 ног</text>
  </svg>`,
  bank:[
    {p:"Сколько ног у паукообразных?",opts:["Восемь","Шесть"],correct:0},
    {p:"Что из этого — паукообразное?",opts:["Паук","Бабочка","Пчела"],correct:0},
    {p:"Чем паукообразные отличаются от насекомых по числу ног?",opts:["У паукообразных на два больше","У них одинаковое число ног"],correct:0}
  ]},

{ n:"Поведение животных",
  explain:"Поведение животных бывает <b>врождённым</b> (инстинкты, не требуют обучения) и <b>приобретённым</b> (появляется в результате обучения и опыта).",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <text x="55" y="50" font-size="28" text-anchor="middle">🐦</text>
  <path d="M30 75c10-8 50-8 60 0" fill="none" stroke="#B96F16" stroke-width="3" stroke-dasharray="3 3"/>
  <text x="55" y="105" font-size="10" text-anchor="middle" fill="#2B2A26">инстинкт: гнездо</text>
  <text x="165" y="50" font-size="28" text-anchor="middle">🐕</text>
  <text x="165" y="25" font-size="14" text-anchor="middle">🎓</text>
  <text x="165" y="105" font-size="10" text-anchor="middle" fill="#2B2A26">обучение: трюк</text>
  </svg>`,
  bank:[
    {p:"Что такое врождённое поведение?",opts:["Инстинкты, не требующие обучения","То, чему специально учат"],correct:0},
    {p:"Что такое приобретённое поведение?",opts:["Поведение, появившееся в результате обучения","Только врождённые рефлексы"],correct:0}
  ]}

];
