/* Химия, 9 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 8 класса: металлы, неметаллы, электролитическая диссоциация, классификация реакций, введение в органику. */

const CHEMISTRY9_MOD = [

{ n:"Металлы: общие свойства",
  explain:"<b>Металлы</b> — химические элементы, которые обычно блестят, хорошо проводят тепло и электричество, ковкие. В химических реакциях металлы обычно отдают электроны.",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <circle cx="70" cy="60" r="20" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="70" y="65" font-size="11" text-anchor="middle" fill="#2B2A26">Me</text>
  <circle cx="140" cy="30" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <text x="140" y="18" font-size="9" text-anchor="middle" fill="#2B2A26">e⁻</text>
  <line x1="92" y1="48" x2="128" y2="34" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="132,32 122,30 128,40" fill="#2B2A26"/>
  <text x="90" y="105" font-size="11" text-anchor="middle" fill="#736C5E">металл отдаёт электрон</text>
  </svg>`,
  bank:[
    {p:"Что обычно хорошо проводят металлы?",opts:["Тепло и электричество","Только свет"],correct:0},
    {p:"Что обычно делают металлы в химических реакциях с электронами?",opts:["Отдают электроны","Только принимают электроны"],correct:0}
  ]},

{ n:"Неметаллы: общие свойства",
  explain:"<b>Неметаллы</b> — элементы, которые обычно не блестят, плохо проводят тепло и электричество (кроме графита). В реакциях неметаллы чаще принимают электроны.",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <circle cx="130" cy="60" r="20" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <text x="130" y="65" font-size="10" text-anchor="middle" fill="#FFFEF8">НеМе</text>
  <circle cx="60" cy="30" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="60" y="18" font-size="9" text-anchor="middle" fill="#2B2A26">e⁻</text>
  <line x1="66" y1="38" x2="105" y2="52" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="108,54 98,50 100,60" fill="#2B2A26"/>
  <text x="110" y="105" font-size="11" text-anchor="middle" fill="#736C5E">неметалл принимает электрон</text>
  </svg>`,
  bank:[
    {p:"Как неметаллы обычно проводят электричество?",opts:["Плохо (за редкими исключениями)","Всегда отлично"],correct:0},
    {p:"Что неметаллы чаще делают с электронами в реакциях?",opts:["Принимают электроны","Только отдают электроны"],correct:0}
  ]},

{ n:"Электролитическая диссоциация",
  explain:"<b>Электролитическая диссоциация</b> — распад вещества на ионы при растворении в воде. Вещества, распадающиеся на ионы, называют <b>электролитами</b> — их растворы проводят электрический ток.",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <rect x="20" y="30" width="60" height="60" fill="none" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="20" cy="30" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="80" cy="30" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="20" cy="90" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="80" cy="90" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="50" cy="30" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="50" cy="90" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="20" cy="60" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="80" cy="60" r="7" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <circle cx="50" cy="60" r="7" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="50" y="108" font-size="10" text-anchor="middle" fill="#736C5E">кристалл NaCl</text>
  <line x1="100" y1="60" x2="140" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="140,60 130,54 130,66" fill="#2B2A26"/>
  <text x="120" y="45" font-size="9" text-anchor="middle" fill="#736C5E">вода</text>
  <circle cx="170" cy="35" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="170" y="39" font-size="8" text-anchor="middle" fill="#2B2A26">Na⁺</text>
  <circle cx="210" cy="55" r="8" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <text x="210" y="59" font-size="8" text-anchor="middle" fill="#FFFEF8">Cl⁻</text>
  <circle cx="180" cy="85" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="180" y="89" font-size="8" text-anchor="middle" fill="#2B2A26">Na⁺</text>
  <circle cx="225" cy="95" r="8" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <text x="225" y="99" font-size="8" text-anchor="middle" fill="#FFFEF8">Cl⁻</text>
  <text x="200" y="112" font-size="10" text-anchor="middle" fill="#736C5E">ионы в растворе</text>
  </svg>`,
  bank:[
    {p:"Что происходит с веществом при электролитической диссоциации?",opts:["Оно распадается на ионы в растворе","Оно испаряется"],correct:0},
    {p:"Как называют вещества, распадающиеся на ионы в растворе?",opts:["Электролиты","Катализаторы"],correct:0}
  ]},

{ n:"Кислоты с точки зрения диссоциации",
  explain:"С точки зрения электролитической диссоциации <b>кислота</b> — вещество, которое при растворении в воде образует ионы водорода H⁺.",
  svg:`<svg viewBox="0 0 220 100" width="220">
  <circle cx="40" cy="50" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="40" y="54" font-size="8" text-anchor="middle" fill="#FFFEF8">H</text>
  <line x1="52" y1="50" x2="70" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="80" cy="50" r="14" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <text x="80" y="54" font-size="8" text-anchor="middle" fill="#FFFEF8">Cl</text>
  <line x1="100" y1="50" x2="130" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="130,50 120,44 120,56" fill="#2B2A26"/>
  <circle cx="160" cy="35" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="160" y="39" font-size="8" text-anchor="middle" fill="#FFFEF8">H⁺</text>
  <circle cx="185" cy="65" r="12" fill="#3E8F86" stroke="#2C6D66" stroke-width="2"/>
  <text x="185" y="69" font-size="8" text-anchor="middle" fill="#FFFEF8">Cl⁻</text>
  <text x="160" y="90" font-size="10" text-anchor="middle" fill="#736C5E">HCl → H⁺ + Cl⁻</text>
  </svg>`,
  bank:[
    {p:"Какие ионы образует кислота при растворении в воде?",opts:["Ионы водорода H⁺","Ионы кислорода O²⁻"],correct:0}
  ]},

{ n:"Основания с точки зрения диссоциации",
  explain:"<b>Основание</b> — вещество, которое при растворении в воде образует гидроксид-ионы OH⁻. Растворимые основания называют щелочами.",
  svg:`<svg viewBox="0 0 220 100" width="220">
  <circle cx="40" cy="50" r="13" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="40" y="54" font-size="8" text-anchor="middle" fill="#2B2A26">Na</text>
  <line x1="53" y1="50" x2="70" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="82" cy="50" r="11" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="82" y="54" font-size="7" text-anchor="middle" fill="#FFFEF8">O</text>
  <circle cx="100" cy="50" r="8" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="100" y="54" font-size="7" text-anchor="middle" fill="#FFFEF8">H</text>
  <line x1="112" y1="50" x2="140" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="140,50 130,44 130,56" fill="#2B2A26"/>
  <circle cx="168" cy="35" r="11" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="168" y="39" font-size="8" text-anchor="middle" fill="#2B2A26">Na⁺</text>
  <circle cx="188" cy="68" r="12" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="188" y="72" font-size="7" text-anchor="middle" fill="#FFFEF8">OH⁻</text>
  <text x="160" y="92" font-size="10" text-anchor="middle" fill="#736C5E">NaOH → Na⁺ + OH⁻</text>
  </svg>`,
  bank:[
    {p:"Какие ионы образует основание при растворении в воде?",opts:["Гидроксид-ионы OH⁻","Ионы водорода H⁺"],correct:0},
    {p:"Как называют растворимые в воде основания?",opts:["Щёлочи","Кислоты"],correct:0}
  ]},

{ n:"Реакции обмена в растворах",
  explain:"<b>Реакция обмена</b> между растворами электролитов идёт до конца, если образуется осадок, газ или малодиссоциирующее вещество (например, вода).",
  svg:`<svg viewBox="0 0 180 130" width="180">
  <path d="M40 20v75a20 20 0 0 0 40 0V20z" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="34" y="14" width="52" height="10" rx="2" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <path d="M46 75c4 8 8 12 14 12s10-4 14-12" fill="#9973B8" opacity="0.85"/>
  <ellipse cx="60" cy="88" rx="18" ry="6" fill="#725189" opacity="0.6"/>
  <text x="60" y="115" font-size="10" text-anchor="middle" fill="#2B2A26">осадок</text>
  <circle cx="110" cy="40" r="4" fill="#3E8F86"/><circle cx="120" cy="55" r="3" fill="#3E8F86"/>
  <text x="115" y="20" font-size="9" fill="#736C5E">или газ ↑</text>
  </svg>`,
  bank:[
    {p:"При каком условии реакция обмена в растворе идёт до конца?",opts:["Если образуется осадок, газ или вода","Только если ничего не меняется"],correct:0}
  ]},

{ n:"Классификация химических реакций",
  explain:"Реакции делят по разным признакам: по числу веществ — соединения, разложения, замещения, обмена; по выделению/поглощению тепла — экзотермические и эндотермические.",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <circle cx="20" cy="35" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="45" cy="35" r="10" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <line x1="58" y1="35" x2="80" y2="35" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="80,35 70,29 70,41" fill="#2B2A26"/>
  <circle cx="100" cy="35" r="13" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="55" y="15" font-size="9" text-anchor="middle" fill="#736C5E">соединение</text>
  <circle cx="100" cy="90" r="13" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <line x1="115" y1="90" x2="140" y2="90" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="140,90 130,84 130,96" fill="#2B2A26"/>
  <circle cx="158" cy="90" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="182" cy="90" r="10" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="140" y="112" font-size="9" text-anchor="middle" fill="#736C5E">разложение</text>
  </svg>`,
  bank:[
    {p:"Как называют реакцию, где из нескольких веществ образуется одно?",opts:["Реакция соединения","Реакция разложения"],correct:0},
    {p:"Как называют реакцию, идущую с выделением тепла?",opts:["Экзотермическая","Эндотермическая"],correct:0}
  ]},

{ n:"Периодический закон: повторение и углубление",
  explain:"Свойства химических элементов и их соединений находятся в периодической зависимости от заряда ядра атома — это <b>периодический закон</b> Д. И. Менделеева.",
  svg:`<svg viewBox="0 0 260 110" width="260">
  <circle cx="45" cy="55" r="8" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <ellipse cx="45" cy="55" rx="26" ry="14" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="2 4"/>
  <text x="45" y="90" font-size="10" text-anchor="middle" fill="#2B2A26">+1</text>
  <circle cx="135" cy="55" r="11" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <ellipse cx="135" cy="55" rx="34" ry="18" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="2 4"/>
  <text x="135" y="90" font-size="10" text-anchor="middle" fill="#2B2A26">+2</text>
  <circle cx="225" cy="55" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <ellipse cx="225" cy="55" rx="42" ry="22" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="2 4"/>
  <text x="225" y="90" font-size="10" text-anchor="middle" fill="#2B2A26">+3</text>
  <text x="135" y="14" font-size="10" text-anchor="middle" fill="#736C5E">рост заряда ядра → изменение свойств</text>
  </svg>`,
  bank:[
    {p:"От чего зависят свойства элементов согласно периодическому закону?",opts:["От заряда ядра атома","От цвета вещества"],correct:0},
    {p:"Кто открыл периодический закон?",opts:["Д. И. Менделеев","Э. Резерфорд"],correct:0}
  ]},

{ n:"Введение в органическую химию",
  explain:"<b>Органическая химия</b> изучает соединения углерода. Простейшие органические соединения — <b>углеводороды</b>, состоящие только из атомов углерода и водорода, например метан CH₄.",
  svg:`<svg viewBox="0 0 200 180" width="200">
  <circle cx="100" cy="90" r="20" fill="#2B2A26" stroke="#2B2A26" stroke-width="2"/>
  <text x="100" y="95" font-size="13" text-anchor="middle" fill="#FFFEF8">C</text>
  <line x1="100" y1="70" x2="100" y2="22" stroke="#2B2A26" stroke-width="2"/>
  <line x1="118" y1="78" x2="165" y2="48" stroke="#2B2A26" stroke-width="2"/>
  <line x1="118" y1="102" x2="165" y2="138" stroke="#2B2A26" stroke-width="2"/>
  <line x1="82" y1="102" x2="35" y2="138" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="100" cy="22" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="100" y="26" font-size="9" text-anchor="middle" fill="#FFFEF8">H</text>
  <circle cx="165" cy="48" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="165" y="52" font-size="9" text-anchor="middle" fill="#FFFEF8">H</text>
  <circle cx="165" cy="138" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="165" y="142" font-size="9" text-anchor="middle" fill="#FFFEF8">H</text>
  <circle cx="35" cy="138" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="35" y="142" font-size="9" text-anchor="middle" fill="#FFFEF8">H</text>
  <text x="100" y="170" font-size="12" text-anchor="middle" fill="#2B2A26">метан CH₄</text>
  </svg>`,
  bank:[
    {p:"Соединения какого элемента изучает органическая химия?",opts:["Углерода","Кислорода"],correct:0},
    {p:"Из каких атомов состоят углеводороды?",opts:["Углерода и водорода","Только кислорода"],correct:0},
    {p:"Какое из этих веществ — простейший углеводород (метан)?",opts:["CH₄","NaCl"],correct:0}
  ]},

{ n:"Скорость химической реакции",
  explain:"Скорость реакции зависит от концентрации реагирующих веществ, температуры, площади соприкосновения веществ и наличия катализатора.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <path d="M30 30v70a20 20 0 0 0 40 0V30z" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="40" cy="60" r="3" fill="#3E8F86"/><circle cx="55" cy="70" r="2.5" fill="#3E8F86"/>
  <text x="50" y="118" font-size="10" text-anchor="middle" fill="#2B2A26">холодно</text>
  <rect x="10" y="30" width="8" height="50" rx="4" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <path d="M150 30v70a20 20 0 0 0 40 0V30z" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="158" cy="70" r="3" fill="#3E8F86"/><circle cx="168" cy="55" r="3" fill="#3E8F86"/>
  <circle cx="178" cy="75" r="2.5" fill="#3E8F86"/><circle cx="163" cy="40" r="2.5" fill="#3E8F86"/>
  <circle cx="180" cy="50" r="3" fill="#3E8F86"/><circle cx="172" cy="90" r="2.5" fill="#3E8F86"/>
  <text x="170" y="118" font-size="10" text-anchor="middle" fill="#2B2A26">горячо</text>
  <rect x="205" y="20" width="8" height="60" rx="4" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <text x="120" y="14" font-size="9" text-anchor="middle" fill="#736C5E">чем выше температура — тем быстрее реакция</text>
  </svg>`,
  bank:[
    {p:"Что из этого влияет на скорость химической реакции?",opts:["Температура","Только время суток"],correct:0},
    {p:"Как обычно влияет повышение температуры на скорость реакции?",opts:["Ускоряет реакцию","Всегда замедляет реакцию"],correct:0}
  ]},

{ n:"Катализаторы",
  explain:"<b>Катализатор</b> — вещество, ускоряющее химическую реакцию, но не расходующееся в ходе неё. Катализаторы широко применяются в промышленности и в живых организмах (ферменты).",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <line x1="20" y1="110" x2="220" y2="110" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="110" x2="20" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <text x="10" y="20" font-size="9" fill="#736C5E">E</text>
  <path d="M30 90c40-10 60-70 80-70s40 60 80 70" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <path d="M30 90c40-4 60-40 80-40s40 36 80 40" fill="none" stroke="#5F9A5C" stroke-width="2.5"/>
  <text x="185" y="30" font-size="6" fill="#A83836">без катализатора</text>
  <text x="185" y="105" font-size="6" fill="#3F7A3D">с катализатором</text>
  <text x="120" y="125" font-size="9" text-anchor="middle" fill="#736C5E">ход реакции</text>
  </svg>`,
  bank:[
    {p:"Расходуется ли катализатор в ходе реакции?",opts:["Нет, не расходуется","Да, полностью расходуется"],correct:0},
    {p:"Как называют биологические катализаторы в живых организмах?",opts:["Ферменты","Соли"],correct:0}
  ]},

{ n:"Генетическая связь между классами неорганических веществ",
  explain:"Металлы, оксиды, основания, кислоты и соли связаны друг с другом цепочками химических превращений: например, металл → оксид → основание → соль.",
  svg:`<svg viewBox="0 0 280 90" width="280">
  <rect x="5" y="25" width="55" height="34" rx="6" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <text x="32" y="47" font-size="10" text-anchor="middle" fill="#FFFEF8">металл</text>
  <line x1="60" y1="42" x2="80" y2="42" stroke="#2B2A26" stroke-width="2"/><polygon points="80,42 72,37 72,47" fill="#2B2A26"/>
  <rect x="82" y="25" width="55" height="34" rx="6" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="109" y="47" font-size="10" text-anchor="middle" fill="#FFFEF8">оксид</text>
  <line x1="137" y1="42" x2="157" y2="42" stroke="#2B2A26" stroke-width="2"/><polygon points="157,42 149,37 149,47" fill="#2B2A26"/>
  <rect x="159" y="25" width="55" height="34" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="186" y="47" font-size="9" text-anchor="middle" fill="#FFFEF8">основание</text>
  <line x1="214" y1="42" x2="234" y2="42" stroke="#2B2A26" stroke-width="2"/><polygon points="234,42 226,37 226,47" fill="#2B2A26"/>
  <rect x="236" y="25" width="42" height="34" rx="6" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="257" y="47" font-size="10" text-anchor="middle" fill="#2B2A26">соль</text>
  </svg>`,
  bank:[
    {p:"Связаны ли между собой классы неорганических веществ химическими превращениями?",opts:["Да, связаны цепочками реакций","Нет, они полностью независимы"],correct:0}
  ]},

{ n:"Химия и повседневная жизнь",
  explain:"Химические знания применяются в быту повсеместно: моющие средства, лекарства, продукты питания, топливо — всё это результат химических процессов и открытий.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <circle cx="40" cy="55" r="26" fill="#3B6EA5" opacity="0.25" stroke="#284D77" stroke-width="2"/>
  <circle cx="30" cy="45" r="6" fill="#FFFEF8" opacity="0.8"/>
  <text x="40" y="95" font-size="9" text-anchor="middle" fill="#2B2A26">моющие средства</text>
  <rect x="95" y="40" width="50" height="22" rx="11" fill="#D9679A" stroke="#A8447A" stroke-width="2"/>
  <line x1="120" y1="40" x2="120" y2="62" stroke="#A8447A" stroke-width="2"/>
  <text x="120" y="95" font-size="10" text-anchor="middle" fill="#2B2A26">лекарства</text>
  <path d="M175 60c0-16 14-28 30-28s30 12 30 28z" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="205" y="95" font-size="10" text-anchor="middle" fill="#2B2A26">продукты</text>
  </svg>`,
  bank:[
    {p:"Где применяются химические знания в повседневной жизни?",opts:["В моющих средствах, лекарствах, продуктах","Химия не связана с бытом"],correct:0}
  ]}

];
