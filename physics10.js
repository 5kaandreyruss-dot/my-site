/* Физика, 10 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Молекулярная физика, термодинамика, электростатика, законы постоянного тока. */

const PHYSICS10_MOD = [

{ n:"Молекулярно-кинетическая теория",
  explain:"<b>МКТ</b> утверждает: все вещества состоят из мельчайших частиц (молекул), эти частицы постоянно и хаотично движутся, а между ними существуют силы притяжения и отталкивания.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="10" y="10" width="200" height="100" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="50" cy="40" r="6" fill="#3B6EA5"/><circle cx="110" cy="30" r="6" fill="#3B6EA5"/>
  <circle cx="160" cy="60" r="6" fill="#3B6EA5"/><circle cx="70" cy="85" r="6" fill="#3B6EA5"/>
  <circle cx="150" cy="90" r="6" fill="#3B6EA5"/>
  <path d="M50 40 q10 -12 20 -6" fill="none" stroke="#736C5E" stroke-width="1.3"/>
  <path d="M110 30 q20 12 28 20" fill="none" stroke="#736C5E" stroke-width="1.3"/>
  <path d="M70 85 q30 -18 60 -18" fill="none" stroke="#736C5E" stroke-width="1.3"/>
  <text x="110" y="122" font-size="9" text-anchor="middle" fill="#2B2A26">хаотичное движение и взаимодействие молекул</text>
  </svg>`,
  bank:[
    {p:"Из чего, согласно МКТ, состоят все вещества?",opts:["Из мельчайших частиц — молекул","Из сплошной непрерывной массы"],correct:0},
    {p:"Как движутся молекулы согласно МКТ?",opts:["Постоянно и хаотично","Полностью неподвижны"],correct:0}
  ]},

{ n:"Броуновское движение",
  explain:"<b>Броуновское движение</b> — беспорядочное движение мелких частиц, взвешенных в жидкости или газе, вызванное ударами молекул среды. Это движение — доказательство существования молекул.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <circle cx="30" cy="70" r="4" fill="#736C5E"/><circle cx="80" cy="40" r="4" fill="#736C5E"/>
  <circle cx="140" cy="90" r="4" fill="#736C5E"/><circle cx="190" cy="35" r="4" fill="#736C5E"/>
  <circle cx="55" cy="110" r="4" fill="#736C5E"/><circle cx="170" cy="115" r="4" fill="#736C5E"/>
  <path d="M110 70 L30 70 L80 40 L140 90 L55 110 L190 35 L170 115 L110 70" fill="none" stroke="#D6524F" stroke-width="1.5"/>
  <circle cx="110" cy="70" r="8" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <text x="110" y="20" font-size="10" text-anchor="middle" fill="#2B2A26">частица под ударами молекул</text>
  </svg>`,
  bank:[
    {p:"Чем вызвано броуновское движение?",opts:["Ударами молекул среды о частицу","Ветром снаружи сосуда"],correct:0},
    {p:"Что доказывает броуновское движение?",opts:["Существование молекул","Что молекул не существует"],correct:0}
  ]},

{ n:"Температура и её измерение",
  explain:"<b>Температура</b> характеризует степень нагретости тела и связана со средней кинетической энергией движения молекул. Измеряется в градусах Цельсия (°C) или в кельвинах (K).",
  svg:`<svg viewBox="0 0 160 150" width="160">
  <rect x="65" y="15" width="20" height="90" rx="10" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="75" cy="115" r="16" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <rect x="70" y="40" width="10" height="65" fill="#D6524F"/>
  <line x1="90" y1="30" x2="105" y2="30" stroke="#2B2A26" stroke-width="1"/>
  <text x="112" y="34" font-size="9" fill="#2B2A26">100°C</text>
  <line x1="90" y1="90" x2="105" y2="90" stroke="#2B2A26" stroke-width="1"/>
  <text x="112" y="94" font-size="9" fill="#2B2A26">0°C</text>
  <text x="10" y="34" font-size="9" fill="#736C5E">373 K</text>
  <text x="10" y="94" font-size="9" fill="#736C5E">273 K</text>
  </svg>`,
  bank:[
    {p:"С чем связана температура тела?",opts:["Со средней кинетической энергией молекул","Только с цветом тела"],correct:0}
  ]},

{ n:"Идеальный газ. Уравнение состояния",
  explain:"<b>Идеальный газ</b> — модель газа, в которой пренебрегают размерами молекул и силами взаимодействия между ними (кроме ударов). Состояние идеального газа описывает уравнение Менделеева-Клапейрона.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <rect x="20" y="20" width="120" height="90" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <rect x="140" y="20" width="16" height="90" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="45" cy="40" r="3" fill="#E3922E"/><circle cx="80" cy="55" r="3" fill="#E3922E"/>
  <circle cx="110" cy="35" r="3" fill="#E3922E"/><circle cx="60" cy="80" r="3" fill="#E3922E"/>
  <circle cx="100" cy="90" r="3" fill="#E3922E"/><circle cx="35" cy="90" r="3" fill="#E3922E"/>
  <text x="80" y="122" font-size="11" text-anchor="middle" fill="#2B2A26">pV = νRT</text>
  </svg>`,
  bank:[
    {p:"Чем пренебрегают в модели идеального газа?",opts:["Размерами молекул и силами взаимодействия","Температурой газа"],correct:0}
  ]},

{ n:"Первый закон термодинамики",
  explain:"<b>Первый закон термодинамики</b>: изменение внутренней энергии тела равно сумме количества теплоты, переданного телу, и работы, совершённой над телом. Это форма закона сохранения энергии.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <rect x="70" y="30" width="80" height="60" fill="#FDE3DC" stroke="#2B2A26" stroke-width="2"/>
  <text x="110" y="65" font-size="12" text-anchor="middle" fill="#2B2A26">ΔU</text>
  <line x1="10" y1="60" x2="65" y2="60" stroke="#D6524F" stroke-width="2.5"/>
  <polygon points="65,60 55,55 55,65" fill="#D6524F"/>
  <text x="35" y="50" font-size="10" fill="#A83836">Q (теплота)</text>
  <line x1="155" y1="45" x2="205" y2="45" stroke="#3B6EA5" stroke-width="2.5"/>
  <polygon points="205,45 195,40 195,50" fill="#3B6EA5"/>
  <text x="180" y="35" font-size="6" fill="#284D77">A (работа)</text>
  <text x="110" y="108" font-size="11" text-anchor="middle" fill="#2B2A26">ΔU = Q + A</text>
  </svg>`,
  bank:[
    {p:"Какой более общий закон отражает первый закон термодинамики?",opts:["Закон сохранения энергии","Закон всемирного тяготения"],correct:0}
  ]},

{ n:"Электрический заряд",
  explain:"<b>Электрический заряд</b> — физическая величина, определяющая силу электромагнитного взаимодействия. Заряды бывают положительными и отрицательными; одноимённые заряды отталкиваются, разноимённые притягиваются.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <circle cx="60" cy="55" r="18" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="60" y="61" font-size="16" text-anchor="middle" fill="#FFFEF8">+</text>
  <path d="M85 40 q30-15 55-2" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <path d="M85 55 q30 0 55 0" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <path d="M85 70 q30 15 55 2" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="140" y1="38" x2="152" y2="26" stroke="#736C5E" stroke-width="1"/>
  <polygon points="152,26 143,28 149,34" fill="#736C5E"/>
  <text x="60" y="90" font-size="10" text-anchor="middle" fill="#A83836">заряд создаёт поле</text>
  </svg>`,
  bank:[
    {p:"Что происходит с одноимёнными зарядами?",opts:["Они отталкиваются","Они притягиваются"],correct:0},
    {p:"Что происходит с разноимёнными зарядами?",opts:["Они притягиваются","Они отталкиваются"],correct:0}
  ]},

{ n:"Закон Кулона",
  explain:"<b>Закон Кулона</b> описывает силу взаимодействия двух точечных зарядов: сила прямо пропорциональна произведению зарядов и обратно пропорциональна квадрату расстояния между ними.",
  svg:`<svg viewBox="0 0 220 100" width="220">
  <circle cx="40" cy="50" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="40" y="55" font-size="13" text-anchor="middle" fill="#FFFEF8">q₁</text>
  <circle cx="180" cy="50" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="180" y="55" font-size="13" text-anchor="middle" fill="#FFFEF8">q₂</text>
  <line x1="54" y1="35" x2="166" y2="35" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="110" y="28" font-size="10" text-anchor="middle" fill="#2B2A26">r</text>
  <line x1="20" y1="50" x2="0" y2="50" stroke="#A83836" stroke-width="2"/><polygon points="0,50 10,46 10,54" fill="#A83836"/>
  <line x1="200" y1="50" x2="220" y2="50" stroke="#A83836" stroke-width="2"/><polygon points="220,50 210,46 210,54" fill="#A83836"/>
  <text x="110" y="90" font-size="11" text-anchor="middle" fill="#2B2A26">F = k·q₁q₂ / r²</text>
  </svg>`,
  bank:[
    {p:"От чего зависит сила взаимодействия зарядов по закону Кулона?",opts:["От величины зарядов и расстояния между ними","Только от цвета зарядов"],correct:0}
  ]},

{ n:"Сила тока и напряжение",
  explain:"<b>Сила тока</b> — величина заряда, проходящего через сечение проводника за единицу времени (измеряется в амперах). <b>Напряжение</b> — работа по перемещению единичного заряда (измеряется в вольтах).",
  svg:`<svg viewBox="0 0 220 100" width="220">
  <rect x="20" y="40" width="10" height="20" fill="#736C5E"/>
  <line x1="30" y1="50" x2="200" y2="50" stroke="#2B2A26" stroke-width="4"/>
  <circle cx="70" cy="50" r="3" fill="#3B6EA5"/><circle cx="100" cy="50" r="3" fill="#3B6EA5"/><circle cx="130" cy="50" r="3" fill="#3B6EA5"/>
  <line x1="70" y1="50" x2="85" y2="50" stroke="#284D77" stroke-width="2"/><polygon points="85,50 78,46 78,54" fill="#284D77"/>
  <text x="100" y="30" font-size="10" text-anchor="middle" fill="#2B2A26">I — заряд за секунду через сечение</text>
  <text x="70" y="80" font-size="9" fill="#A83836">U — работа на перенос заряда</text>
  </svg>`,
  bank:[
    {p:"В каких единицах измеряют силу тока?",opts:["В амперах","В вольтах"],correct:0},
    {p:"В каких единицах измеряют напряжение?",opts:["В вольтах","В амперах"],correct:0}
  ]},

{ n:"Закон Ома для участка цепи",
  explain:"<b>Закон Ома</b>: сила тока в участке цепи прямо пропорциональна напряжению на этом участке и обратно пропорциональна его сопротивлению: I = U/R.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <line x1="20" y1="20" x2="20" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="120" x2="200" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <text x="5" y="20" font-size="10" fill="#2B2A26">I</text>
  <text x="195" y="135" font-size="10" fill="#2B2A26">U</text>
  <line x1="20" y1="120" x2="150" y2="30" stroke="#3B6EA5" stroke-width="2.5"/>
  <line x1="20" y1="120" x2="130" y2="90" stroke="#D6524F" stroke-width="2.5"/>
  <text x="150" y="25" font-size="9" fill="#284D77">малое R</text>
  <text x="132" y="95" font-size="9" fill="#A83836">большое R</text>
  </svg>`,
  bank:[
    {p:"Как звучит формула закона Ома?",opts:["I = U/R","U = I + R"],correct:0},
    {p:"Что произойдёт с силой тока, если увеличить сопротивление при том же напряжении?",opts:["Сила тока уменьшится","Сила тока увеличится"],correct:0}
  ]},

{ n:"Изопроцессы в газах",
  explain:"<b>Изотермический</b> процесс идёт при постоянной температуре, <b>изобарный</b> — при постоянном давлении, <b>изохорный</b> — при постоянном объёме газа.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <line x1="30" y1="15" x2="30" y2="110" stroke="#2B2A26" stroke-width="2"/>
  <line x1="30" y1="110" x2="210" y2="110" stroke="#2B2A26" stroke-width="2"/>
  <text x="10" y="20" font-size="10" fill="#2B2A26">p</text>
  <text x="200" y="125" font-size="10" fill="#2B2A26">V</text>
  <path d="M40 30 Q90 60 180 100" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <text x="150" y="90" font-size="6" fill="#284D77">изотерма (T=const)</text>
  <line x1="70" y1="25" x2="70" y2="105" stroke="#D6524F" stroke-width="2"/>
  <text x="75" y="35" font-size="9" fill="#A83836">изохора (V=const)</text>
  <line x1="40" y1="55" x2="200" y2="55" stroke="#3F7A3D" stroke-width="2"/>
  <text x="130" y="50" font-size="9" fill="#3F7A3D">изобара (p=const)</text>
  </svg>`,
  bank:[
    {p:"Что остаётся постоянным при изотермическом процессе?",opts:["Температура","Объём"],correct:0},
    {p:"Что остаётся постоянным при изохорном процессе?",opts:["Объём","Давление"],correct:0},
    {p:"Что остаётся постоянным при изобарном процессе?",opts:["Давление","Температура"],correct:0}
  ]},

{ n:"Влажность воздуха",
  explain:"<b>Влажность воздуха</b> показывает содержание водяного пара в воздухе. Относительная влажность выражается в процентах от максимально возможного количества пара при данной температуре.",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <rect x="20" y="20" width="160" height="60" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="45" cy="40" r="4" fill="#3B6EA5"/><circle cx="80" cy="55" r="4" fill="#3B6EA5"/>
  <circle cx="120" cy="35" r="4" fill="#3B6EA5"/><circle cx="150" cy="60" r="4" fill="#3B6EA5"/>
  <circle cx="60" cy="65" r="4" fill="#3B6EA5"/>
  <rect x="20" y="90" width="160" height="14" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.5"/>
  <rect x="20" y="90" width="110" height="14" fill="#3E8F86"/>
  <text x="100" y="100" font-size="9" text-anchor="middle" fill="#2B2A26">относительная влажность 70%</text>
  </svg>`,
  bank:[
    {p:"Что показывает влажность воздуха?",opts:["Содержание водяного пара в воздухе","Только температуру воздуха"],correct:0},
    {p:"В чём измеряется относительная влажность?",opts:["В процентах","В метрах"],correct:0}
  ]},

{ n:"Электрическое поле",
  explain:"<b>Электрическое поле</b> — особый вид материи, окружающий заряженные тела и передающий действие силы на другие заряды. Его характеризует напряжённость.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <circle cx="100" cy="80" r="14" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="100" y="86" font-size="13" text-anchor="middle" fill="#FFFEF8">+</text>
  <g stroke="#736C5E" stroke-width="1.5">
    <line x1="100" y1="80" x2="100" y2="20"/><polygon points="100,20 96,30 104,30" fill="#736C5E"/>
    <line x1="100" y1="80" x2="100" y2="140"/><polygon points="100,140 96,130 104,130" fill="#736C5E"/>
    <line x1="100" y1="80" x2="40" y2="80"/><polygon points="40,80 50,76 50,84" fill="#736C5E"/>
    <line x1="100" y1="80" x2="160" y2="80"/><polygon points="160,80 150,76 150,84" fill="#736C5E"/>
    <line x1="100" y1="80" x2="58" y2="38"/><polygon points="58,38 66,42 62,50" fill="#736C5E"/>
    <line x1="100" y1="80" x2="142" y2="38"/><polygon points="142,38 134,42 138,50" fill="#736C5E"/>
    <line x1="100" y1="80" x2="58" y2="122"/><polygon points="58,122 62,112 66,118" fill="#736C5E"/>
    <line x1="100" y1="80" x2="142" y2="122"/><polygon points="142,122 138,112 134,118" fill="#736C5E"/>
  </g>
  </svg>`,
  bank:[
    {p:"Что окружает заряженное тело?",opts:["Электрическое поле","Только воздух"],correct:0},
    {p:"Чем характеризуется электрическое поле?",opts:["Напряжённостью","Только цветом"],correct:0}
  ]},

{ n:"Последовательное и параллельное соединение проводников: обобщение",
  explain:"При последовательном соединении общее сопротивление равно сумме сопротивлений участков. При параллельном соединении общее сопротивление меньше сопротивления любого из участков.",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <g transform="translate(0,10)">
    <line x1="10" y1="40" x2="30" y2="40" stroke="#2B2A26" stroke-width="2"/>
    <path d="M30 40 l6-14 8 20 8-20 8 20 8-20 6 14" fill="none" stroke="#2B2A26" stroke-width="2"/>
    <line x1="74" y1="40" x2="94" y2="40" stroke="#2B2A26" stroke-width="2"/>
    <path d="M94 40 l6-14 8 20 8-20 8 20 8-20 6 14" fill="none" stroke="#2B2A26" stroke-width="2"/>
    <line x1="138" y1="40" x2="150" y2="40" stroke="#2B2A26" stroke-width="2"/>
    <text x="80" y="70" font-size="10" text-anchor="middle" fill="#2B2A26">R = R1 + R2</text>
  </g>
  <g transform="translate(0,80)">
    <rect x="30" y="0" width="120" height="45" fill="none" stroke="#2B2A26" stroke-width="2"/>
    <line x1="10" y1="22" x2="30" y2="22" stroke="#2B2A26" stroke-width="2"/>
    <line x1="150" y1="22" x2="170" y2="22" stroke="#2B2A26" stroke-width="2"/>
    <path d="M55 8 l6-8 8 16 8-16 8 16 8-16 6 8" fill="none" stroke="#2B2A26" stroke-width="2"/>
    <path d="M55 37 l6-8 8 16 8-16 8 16 8-16 6 8" fill="none" stroke="#2B2A26" stroke-width="2"/>
    <text x="90" y="62" font-size="10" text-anchor="middle" fill="#2B2A26">R меньше R1 и R2</text>
  </g>
  </svg>`,
  bank:[
    {p:"Как находят общее сопротивление при последовательном соединении?",opts:["Складывают сопротивления участков","Делят сопротивления"],correct:0},
    {p:"Больше или меньше общее сопротивление при параллельном соединении по сравнению с любым участком?",opts:["Меньше","Больше"],correct:0}
  ]}

];
