/* Музыка, основы для начальной школы. Формат совпадает с русским/английским модулями:
   {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Движок сам случайно выбирает вопрос из bank при каждом показе урока. */

const MUSIC_MOD = [

{ n:"Семь нот",
  explain:"В музыке всего <b>7 нот</b>: <b>до, ре, ми, фа, соль, ля, си</b>. Потом ряд начинается снова с «до», только выше.",
  svg:`<svg viewBox="0 0 340 110" width="340">
  <g stroke="#D0D0D8" stroke-width="1.5">
  <line x1="15" y1="15" x2="325" y2="15"/><line x1="15" y1="25" x2="325" y2="25"/>
  <line x1="15" y1="35" x2="325" y2="35"/><line x1="15" y1="45" x2="325" y2="45"/><line x1="15" y1="55" x2="325" y2="55"/>
  </g>
  <g font-family="sans-serif" font-size="11" fill="#6E6E73" text-anchor="middle">
  <text x="30" y="102">до</text><text x="75" y="102">ре</text><text x="120" y="102">ми</text>
  <text x="165" y="102">фа</text><text x="210" y="102">соль</text><text x="255" y="102">ля</text><text x="300" y="102">си</text>
  </g>
  <g>
  <ellipse cx="30" cy="70" rx="9" ry="7" fill="#007AFF" transform="rotate(-18 30 70)"/>
  <ellipse cx="75" cy="62" rx="9" ry="7" fill="#30B0C7" transform="rotate(-18 75 62)"/>
  <ellipse cx="120" cy="54" rx="9" ry="7" fill="#34C759" transform="rotate(-18 120 54)"/>
  <ellipse cx="165" cy="46" rx="9" ry="7" fill="#FFCC00" transform="rotate(-18 165 46)"/>
  <ellipse cx="210" cy="38" rx="9" ry="7" fill="#FF9500" transform="rotate(-18 210 38)"/>
  <ellipse cx="255" cy="30" rx="9" ry="7" fill="#FF2D55" transform="rotate(-18 255 30)"/>
  <ellipse cx="300" cy="22" rx="9" ry="7" fill="#AF52DE" transform="rotate(-18 300 22)"/>
  </g>
  </svg>`,
  bank:[
    {p:"Сколько всего нот в музыкальном ряду?",opts:["5","7","8","12"],correct:1},
    {p:"Какая нота идёт первой?",opts:["ре","до","си","фа"],correct:1},
    {p:"Какая нота идёт последней?",opts:["си","ре","соль","ми"],correct:0},
    {p:"Какая нота идёт сразу после «до»?",opts:["ре","ми","си","фа"],correct:0},
    {p:"Какая нота идёт сразу после «ми»?",opts:["соль","ре","фа","ля"],correct:2},
    {p:"Какая нота идёт перед «соль»?",opts:["фа","ля","си","до"],correct:0},
    {p:"Какая нота идёт между «ля» и «до»?",opts:["ре","си","фа","ми"],correct:1},
    {p:"Какая нота стоит в середине ряда (четвёртая)?",opts:["ми","фа","соль","ля"],correct:1},
    {p:"Сколько нот стоит между «до» и «соль» (не считая их самих)?",opts:["2","3","4","5"],correct:1},
    {p:"Как называется значок, на котором записывают ноты?",opts:["Нотный стан","Ритм","Аккорд","Такт"],correct:0}
  ]},

{ n:"Семьи инструментов",
  explain:"Инструменты делят на семьи: <b>струнные</b> (звук извлекают из струн — скрипка, гитара), <b>духовые</b> (дуют — труба, флейта), <b>ударные</b> (стучат — барабан, тарелки) и <b>клавишные</b> (нажимают клавиши — пианино).",
  svg:`<svg viewBox="0 0 320 100" width="320">
  <g transform="translate(8,10)">
    <rect width="64" height="64" rx="14" fill="#007AFF"/>
    <path d="M16 12 L44 18 L44 46 L16 52 Z" fill="none" stroke="white" stroke-width="1.7" stroke-linejoin="round"/>
    <line x1="22" y1="16" x2="22" y2="48" stroke="white" stroke-width="1.3"/>
    <line x1="30" y1="15" x2="30" y2="49" stroke="white" stroke-width="1.3"/>
    <line x1="38" y1="17" x2="38" y2="47" stroke="white" stroke-width="1.3"/>
  </g>
  <text x="40" y="92" font-family="sans-serif" font-size="10" fill="#6E6E73" text-anchor="middle">Струнные</text>
  
  <g transform="translate(88,10)">
    <rect width="64" height="64" rx="14" fill="#30B0C7"/>
    <rect x="10" y="30" width="38" height="7" rx="3.5" fill="none" stroke="white" stroke-width="1.6"/>
    <circle cx="20" cy="33.5" r="1.7" fill="white"/><circle cx="29" cy="33.5" r="1.7" fill="white"/><circle cx="38" cy="33.5" r="1.7" fill="white"/>
    <circle cx="13.5" cy="33.5" r="3" fill="white"/>
  </g>
  <text x="120" y="92" font-family="sans-serif" font-size="10" fill="#6E6E73" text-anchor="middle">Духовые</text>
  
  <g transform="translate(168,10)">
    <rect width="64" height="64" rx="14" fill="#FF9500"/>
    <rect x="16" y="28" width="32" height="18" rx="4" stroke="white" stroke-width="1.6" fill="none"/>
    <ellipse cx="32" cy="28" rx="16" ry="5" stroke="white" stroke-width="1.6" fill="none"/>
    <line x1="18" y1="18" x2="30" y2="30" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="46" y1="18" x2="34" y2="30" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
  </g>
  <text x="200" y="92" font-family="sans-serif" font-size="10" fill="#6E6E73" text-anchor="middle">Ударные</text>
  
  <g transform="translate(248,10)">
    <rect width="64" height="64" rx="14" fill="#AF52DE"/>
    <rect x="14" y="22" width="36" height="24" rx="3" stroke="white" stroke-width="1.6" fill="none"/>
    <line x1="21" y1="22" x2="21" y2="46" stroke="white" stroke-width="1.1"/>
    <line x1="28" y1="22" x2="28" y2="46" stroke="white" stroke-width="1.1"/>
    <line x1="35" y1="22" x2="35" y2="46" stroke="white" stroke-width="1.1"/>
    <line x1="42" y1="22" x2="42" y2="46" stroke="white" stroke-width="1.1"/>
    <rect x="18" y="22" width="5" height="13" fill="white"/><rect x="32" y="22" width="5" height="13" fill="white"/>
  </g>
  <text x="280" y="92" font-family="sans-serif" font-size="10" fill="#6E6E73" text-anchor="middle">Клавишные</text>
  </svg>`,
  bank:[
    {p:"К какой семье относится скрипка?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:0},
    {p:"К какой семье относится труба?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:1},
    {p:"К какой семье относится барабан?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:2},
    {p:"К какой семье относится пианино?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:3},
    {p:"К какой семье относится гитара?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:0},
    {p:"К какой семье относится флейта?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:1},
    {p:"К какой семье относятся тарелки (ударный инструмент)?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:2},
    {p:"К какой семье относится виолончель?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:0},
    {p:"К какой семье относится саксофон?",opts:["Струнные","Духовые","Ударные","Клавишные"],correct:1},
    {p:"Как называют звук, который получают, задевая струну?",opts:["Струнный","Ударный","Духовой","Клавишный"],correct:0}
  ]},

{ n:"Громко и тихо",
  explain:"«<b>Форте</b>» (forte) значит играть или петь <b>громко</b>. «<b>Пиано</b>» (piano) значит играть <b>тихо</b>. Эти слова придумали в Италии, поэтому они звучат необычно.",
  svg:`<svg viewBox="0 0 300 110" width="300">
  <g transform="translate(20,30)">
    <path d="M0 15h10l14-12v34l-14-12H0z" fill="#FF3B30"/>
    <path d="M28 8a20 20 0 0 1 0 24" stroke="#FF3B30" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M34 0a30 30 0 0 1 0 40" stroke="#FF3B30" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.55"/>
  </g>
  <text x="70" y="95" font-family="sans-serif" font-size="12" font-weight="700" fill="#D70015" text-anchor="middle">ФОРТЕ — громко</text>
  
  <g transform="translate(190,38)">
    <path d="M0 8h7l9-8v22l-9-8H0z" fill="#007AFF"/>
    <path d="M18 5a10 10 0 0 1 0 12" stroke="#007AFF" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <text x="230" y="95" font-family="sans-serif" font-size="12" font-weight="700" fill="#0062CC" text-anchor="middle">ПИАНО — тихо</text>
  </svg>`,
  bank:[
    {p:"Что означает слово «форте»?",opts:["Громко","Тихо","Быстро","Медленно"],correct:0},
    {p:"Что означает слово «пиано»?",opts:["Громко","Тихо","Быстро","Медленно"],correct:1},
    {p:"Как называется значок «громко» в нотах?",opts:["Форте","Пиано","Ритм","Пауза"],correct:0},
    {p:"Гроза за окном — это громкий звук. Как это назвать по-музыкальному?",opts:["Форте","Пиано"],correct:0},
    {p:"Шёпот друга — это тихий звук. Как это назвать по-музыкальному?",opts:["Форте","Пиано"],correct:1},
    {p:"Колыбельную поют обычно...",opts:["Тихо (пиано)","Громко (форте)"],correct:0},
    {p:"Салют и барабанный марш обычно звучат...",opts:["Тихо (пиано)","Громко (форте)"],correct:1},
    {p:"Слово «форте» пришло из какого языка?",opts:["Из итальянского","Из английского","Из немецкого"],correct:0}
  ]},

{ n:"Быстро и медленно",
  explain:"Скорость музыки называют <b>темпом</b>. «<b>Аллегро</b>» — это быстрый темп, «<b>адажио</b>» — медленный, спокойный темп.",
  svg:`<svg viewBox="0 0 300 115" width="300">
  <g transform="translate(75,10)">
    <path d="M-16 70 L0 0 L16 70 Z" fill="none" stroke="#AF52DE" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="0" y1="62" x2="0" y2="10" stroke="#AF52DE" stroke-width="3" stroke-linecap="round" transform="rotate(12 0 62)"/>
    <circle cx="0" cy="62" r="3" fill="#AF52DE"/>
  </g>
  <text x="75" y="108" font-family="sans-serif" font-size="12" font-weight="700" fill="#8E3FB5" text-anchor="middle">адажио — медленно</text>
  
  <g transform="translate(225,10)">
    <path d="M-16 70 L0 0 L16 70 Z" fill="none" stroke="#FF9500" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="0" y1="62" x2="0" y2="10" stroke="#FF9500" stroke-width="3" stroke-linecap="round" transform="rotate(-32 0 62)"/>
    <circle cx="0" cy="62" r="3" fill="#FF9500"/>
    <path d="M24 30q7 -4 7 -14M24 42q11 -5 11 -20" stroke="#FF9500" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.55"/>
  </g>
  <text x="225" y="108" font-family="sans-serif" font-size="12" font-weight="700" fill="#CC7A00" text-anchor="middle">аллегро — быстро</text>
  </svg>`,
  bank:[
    {p:"Как называется скорость музыки?",opts:["Темп","Тон","Тембр","Такт"],correct:0},
    {p:"Что означает «аллегро»?",opts:["Быстро","Медленно","Громко","Тихо"],correct:0},
    {p:"Что означает «адажио»?",opts:["Быстро","Медленно","Громко","Тихо"],correct:1},
    {p:"Марш, под который идут строем, обычно звучит...",opts:["В быстром, чётком темпе","Очень медленно и тягуче"],correct:0},
    {p:"Колыбельная перед сном обычно звучит...",opts:["Очень быстро","Медленно и плавно"],correct:1},
    {p:"Танец, под который весело прыгают, скорее всего...",opts:["Быстрый (аллегро)","Медленный (адажио)"],correct:0},
    {p:"Если музыкант играет медленнее, темп...",opts:["Замедляется","Ускоряется","Не меняется"],correct:0}
  ]},

{ n:"Высокие и низкие звуки",
  explain:"Звуки бывают <b>высокими</b> (тонкими, как писк) и <b>низкими</b> (густыми, как гул). Маленькие инструменты и тонкие струны обычно звучат выше, большие — ниже.",
  svg:`<svg viewBox="0 0 300 110" width="300">
  <path d="M10,30 Q20,15 30,30 T50,30 T70,30 T90,30 T110,30 T130,30 T150,30 T170,30 T190,30 T210,30 T230,30 T250,30 T270,30 T290,30"
    stroke="#30B0C7" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="10" y="50" font-family="sans-serif" font-size="12" fill="#268EA1">Высокий звук (писк, птичка)</text>
  
  <path d="M10,85 Q45,55 80,85 T150,85 T220,85 T290,85"
    stroke="#AF52DE" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <text x="10" y="105" font-family="sans-serif" font-size="12" fill="#8E3FB5">Низкий звук (гул, барабан)</text>
  </svg>`,
  bank:[
    {p:"Голос маленькой птички обычно...",opts:["Высокий","Низкий"],correct:0},
    {p:"Гудок большого корабля обычно...",opts:["Высокий","Низкий"],correct:1},
    {p:"Звук большого барабана обычно...",opts:["Высокий","Низкий"],correct:1},
    {p:"Звук маленького колокольчика обычно...",opts:["Высокий","Низкий"],correct:0},
    {p:"У кого голос ниже: у медведя или у мышки?",opts:["У медведя","У мышки"],correct:0},
    {p:"Тонкая натянутая струна звучит обычно...",opts:["Выше","Ниже"],correct:0},
    {p:"Толстая струна контрабаса звучит обычно...",opts:["Выше","Ниже"],correct:1}
  ]},

{ n:"Хор и оркестр",
  explain:"<b>Хор</b> — это когда много людей поют вместе. <b>Оркестр</b> — это когда много музыкантов вместе играют на инструментах. Если поёт или играет один человек — это <b>соло</b>, если двое — <b>дуэт</b>.",
  svg:`<svg viewBox="0 0 300 110" width="300">
  <g>
    <circle cx="30" cy="35" r="13" fill="#FF2D55"/><path d="M24 38q6 6 12 0" stroke="white" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle cx="55" cy="25" r="13" fill="#FF6482"/><path d="M49 28q6 6 12 0" stroke="white" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="35" r="13" fill="#FF2D55"/><path d="M74 38q6 6 12 0" stroke="white" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle cx="42" cy="52" r="13" fill="#D4184A"/><path d="M36 55q6 6 12 0" stroke="white" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle cx="67" cy="52" r="13" fill="#D4184A"/><path d="M61 55q6 6 12 0" stroke="white" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </g>
  <text x="55" y="95" font-family="sans-serif" font-size="12" font-weight="700" fill="#D4184A" text-anchor="middle">Хор</text>
  
  <g transform="translate(195,14)">
    <rect x="0" y="0" width="34" height="34" rx="9" fill="#007AFF"/>
    <path d="M8 6 L24 10 L24 26 L8 30 Z" fill="none" stroke="white" stroke-width="1.3" stroke-linejoin="round"/>
    <line x1="12" y1="9" x2="12" y2="27" stroke="white" stroke-width="1"/>
    <line x1="17" y1="8" x2="17" y2="28" stroke="white" stroke-width="1"/>
    <line x1="21" y1="9" x2="21" y2="27" stroke="white" stroke-width="1"/>
  </g>
  <g transform="translate(233,14)">
    <rect x="0" y="0" width="34" height="34" rx="9" fill="#30B0C7"/>
    <rect x="6" y="16" width="21" height="4" rx="2" fill="none" stroke="white" stroke-width="1.2"/>
    <circle cx="12" cy="18" r="1" fill="white"/><circle cx="17" cy="18" r="1" fill="white"/><circle cx="22" cy="18" r="1" fill="white"/>
    <circle cx="8" cy="18" r="1.9" fill="white"/>
  </g>
  <g transform="translate(271,14)">
    <rect x="0" y="0" width="34" height="34" rx="9" fill="#FF9500"/>
    <rect x="9" y="16" width="16" height="10" rx="3" stroke="white" stroke-width="1.2" fill="none"/>
    <line x1="10" y1="10" x2="15" y2="16" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="24" y1="10" x2="19" y2="16" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
  </g>
  <text x="252" y="95" font-family="sans-serif" font-size="12" font-weight="700" fill="#268EA1" text-anchor="middle">Оркестр</text>
  </svg>`,
  bank:[
    {p:"Как называют группу людей, которые поют вместе?",opts:["Хор","Оркестр","Дуэт","Соло"],correct:0},
    {p:"Как называют группу музыкантов, которые играют вместе на инструментах?",opts:["Хор","Оркестр","Соло","Дуэт"],correct:1},
    {p:"Как называют выступление одного исполнителя?",opts:["Соло","Дуэт","Хор","Оркестр"],correct:0},
    {p:"Как называют выступление двух исполнителей вместе?",opts:["Соло","Дуэт","Трио","Хор"],correct:1},
    {p:"Как называют выступление трёх исполнителей вместе?",opts:["Дуэт","Трио","Соло","Квартет"],correct:1},
    {p:"Человек, который управляет оркестром взмахами палочки, называется...",opts:["Дирижёр","Композитор","Солист"],correct:0},
    {p:"Человек, который сочиняет музыку, называется...",opts:["Дирижёр","Композитор","Слушатель"],correct:1}
  ]},

{ n:"Композиторы России",
  explain:"<b>Композитор</b> — человек, который сочиняет музыку. Пётр Ильич <b>Чайковский</b> — русский композитор, он написал знаменитые балеты «Щелкунчик» и «Лебединое озеро».",
  svg:`<svg viewBox="0 0 260 110" width="260">
  <g transform="translate(75,8)">
    <path d="M20 0c14 0 22 10 22 22 0 8-4 14-4 20 0 4 3 6 3 6H14s6-4 6-12c-8 0-14-7-14-15C6 9 12 0 20 0z"
      fill="#5856D6"/>
    <circle cx="30" cy="18" r="2.4" fill="white"/>
  </g>
  <g transform="translate(150,14)">
    <ellipse cx="0" cy="46" rx="9" ry="7" fill="#FFCC00" transform="rotate(-18 0 46)"/>
    <line x1="7" y1="43" x2="7" y2="2" stroke="#FFCC00" stroke-width="2.6"/>
    <path d="M7 2q15 3 11 16" stroke="#FFCC00" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <g transform="translate(178,30)" opacity="0.85">
    <ellipse cx="0" cy="30" rx="6" ry="4.6" fill="#FF9500" transform="rotate(-18 0 30)"/>
    <line x1="5" y1="28" x2="5" y2="0" stroke="#FF9500" stroke-width="2.2"/>
    <path d="M5 0q10 2 8 11" stroke="#FF9500" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <text x="130" y="102" font-family="sans-serif" font-size="12" font-weight="700" fill="#5A3E8E" text-anchor="middle">Композитор сочиняет музыку</text>
  </svg>`,
  bank:[
    {p:"Кто такой композитор?",opts:["Тот, кто сочиняет музыку","Тот, кто танцует балет","Тот, кто продаёт инструменты"],correct:0},
    {p:"Как звали известного русского композитора, автора «Щелкунчика»?",opts:["Пётр Чайковский","Александр Пушкин","Илья Репин"],correct:0},
    {p:"«Лебединое озеро» — это знаменитый...",opts:["Балет Чайковского","Мультфильм","Учебник"],correct:0},
    {p:"«Щелкунчик» чаще всего показывают в театре под какой праздник?",opts:["Новый год","День рождения","1 сентября"],correct:0},
    {p:"Чем композитор в первую очередь занимается?",opts:["Сочиняет мелодии и записывает их нотами","Чинит инструменты","Продаёт билеты в театр"],correct:0}
  ]},

{ n:"Музыкальные жанры",
  explain:"Музыку сочиняют для разных случаев. <b>Марш</b> — чтобы под него чётко шагать. <b>Колыбельная</b> — чтобы убаюкать перед сном. <b>Танец</b> — чтобы под него танцевать.",
  svg:`<svg viewBox="0 0 320 100" width="320">
  <g transform="translate(14,18)">
    <path d="M4 26c0-5 3-8 7-8s6 3 5 7c-1 4-5 5-8 4-3-1-4-2-4-3z" fill="#007AFF"/>
    <circle cx="9" cy="14" r="3" fill="#007AFF"/>
    <path d="M22 10c0-5 3-8 7-8s6 3 5 7c-1 4-5 5-8 4-3-1-4-2-4-3z" fill="#007AFF" opacity="0.55"/>
    <circle cx="27" cy="-2" r="3" fill="#007AFF" opacity="0.55"/>
  </g>
  <text x="30" y="92" font-family="sans-serif" font-size="10" fill="#6E6E73" text-anchor="middle">Марш</text>
  
  <g transform="translate(105,18)">
    <path d="M14 2a15 15 0 1 0 0 30 12 12 0 0 1 0-30z" fill="#5856D6"/>
    <text x="30" y="10" font-family="sans-serif" font-size="9" font-weight="700" fill="#5856D6">z</text>
    <text x="35" y="4" font-family="sans-serif" font-size="7" font-weight="700" fill="#5856D6">z</text>
  </g>
  <text x="120" y="92" font-family="sans-serif" font-size="10" fill="#6E6E73" text-anchor="middle">Колыбельная</text>
  
  <g transform="translate(190,10)">
    <circle cx="14" cy="6" r="5" fill="#FF2D55"/>
    <path d="M14 11v16M14 17l-9 8M14 17l10 10M14 27l-6 12M14 27l7 12" stroke="#FF2D55" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <text x="205" y="92" font-family="sans-serif" font-size="10" fill="#6E6E73" text-anchor="middle">Танец</text>
  
  <g transform="translate(270,12)">
    <line x1="4" y1="4" x2="4" y2="46" stroke="#8E5A2B" stroke-width="3" stroke-linecap="round"/>
    <path d="M4 6h30l-8 9 8 9H4z" fill="#FFCC00"/>
    <path d="M12 12l3 4-3 4-3-4z" fill="white"/>
  </g>
  <text x="290" y="92" font-family="sans-serif" font-size="10" fill="#6E6E73" text-anchor="middle">Гимн</text>
  </svg>`,
  bank:[
    {p:"Под какую музыку удобнее всего маршировать строем?",opts:["Марш","Колыбельная","Вальс"],correct:0},
    {p:"Какую музыку поют малышам перед сном?",opts:["Марш","Колыбельная","Гимн"],correct:1},
    {p:"Музыка, под которую танцуют, называется...",opts:["Танец","Марш","Колыбельная"],correct:0},
    {p:"Торжественная песня страны называется...",opts:["Гимн","Колыбельная","Марш"],correct:0},
    {p:"Колыбельная обычно звучит...",opts:["Тихо и медленно","Громко и быстро"],correct:0},
    {p:"Марш обычно звучит...",opts:["Чётко и бодро","Очень тихо и вяло"],correct:0},
    {p:"Вальс — это музыка, под которую...",opts:["Кружатся в танце","Маршируют строем","Засыпают"],correct:0}
  ]},

{ n:"Ритм",
  explain:"<b>Ритм</b> — это чередование долгих и коротких звуков во времени, как стук сердца или шаги. Ритм есть в каждой песне, даже без слов.",
  svg:`<svg viewBox="0 0 300 110" width="300">
  <line x1="6" y1="80" x2="294" y2="80" stroke="#2B2A26" stroke-width="2"/>
  <rect x="10" y="46" width="18" height="34" rx="4" fill="#3B6EA5"/>
  <rect x="36" y="46" width="18" height="34" rx="4" fill="#3E8F86"/>
  <rect x="62" y="24" width="40" height="56" rx="4" fill="#3B6EA5"/>
  <rect x="110" y="46" width="18" height="34" rx="4" fill="#3E8F86"/>
  <rect x="136" y="24" width="40" height="56" rx="4" fill="#3B6EA5"/>
  <rect x="184" y="24" width="40" height="56" rx="4" fill="#3E8F86"/>
  <text x="19" y="98" font-size="8" text-anchor="middle" fill="#2B2A26">короткий</text>
  <text x="82" y="98" font-size="11" text-anchor="middle" fill="#2B2A26">длинный</text>
  <text x="255" y="55" font-size="26" text-anchor="middle">❤️</text>
  <text x="255" y="98" font-size="11" text-anchor="middle" fill="#2B2A26">как стук сердца</text>
  </svg>`,
  bank:[
    {p:"Что такое ритм в музыке?",opts:["Чередование долгих и коротких звуков","Только громкость","Только цвет ноты"],correct:0},
    {p:"Похож ли ритм музыки на стук сердца или шаги?",opts:["Да, похож — тоже чередование","Нет, ничего общего"],correct:0},
    {p:"Можно ли прохлопать ритм песни в ладоши?",opts:["Да, можно","Нет, невозможно"],correct:0},
    {p:"Что помогает музыкантам играть слаженно вместе?",opts:["Общий ритм","Разный ритм у каждого","Отсутствие ритма"],correct:0}
  ]},

{ n:"Русские народные инструменты",
  explain:"У русского народа есть свои традиционные инструменты: <b>балалайка</b> (треугольная, струнная), <b>гармонь</b> (с мехами и кнопками) и <b>ложки</b> (ударный инструмент — стучат друг о друга).",
  svg:`<svg viewBox="0 0 260 100" width="260">
  <g transform="translate(4,10)">
    <rect width="64" height="64" rx="14" fill="#3B6EA5"/>
    <path d="M32 14 L50 46 L14 46 Z" fill="none" stroke="white" stroke-width="1.8" stroke-linejoin="round"/>
    <line x1="24" y1="46" x2="24" y2="16" stroke="white" stroke-width="1.2"/>
    <line x1="32" y1="46" x2="32" y2="12" stroke="white" stroke-width="1.2"/>
    <line x1="40" y1="46" x2="40" y2="16" stroke="white" stroke-width="1.2"/>
    <line x1="32" y1="12" x2="32" y2="4" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </g>
  <text x="36" y="92" font-size="10" text-anchor="middle" fill="#2B2A26">Балалайка</text>

  <g transform="translate(98,10)">
    <rect width="64" height="64" rx="14" fill="#E3922E"/>
    <rect x="14" y="14" width="14" height="36" rx="2" fill="none" stroke="white" stroke-width="1.6"/>
    <rect x="36" y="14" width="14" height="36" rx="2" fill="none" stroke="white" stroke-width="1.6"/>
    <path d="M28 18h8M28 26h8M28 34h8M28 42h8" stroke="white" stroke-width="1.4"/>
    <circle cx="18" cy="20" r="1.4" fill="white"/><circle cx="18" cy="28" r="1.4" fill="white"/><circle cx="18" cy="36" r="1.4" fill="white"/>
  </g>
  <text x="130" y="92" font-size="10" text-anchor="middle" fill="#2B2A26">Гармонь</text>

  <g transform="translate(192,10)">
    <rect width="64" height="64" rx="14" fill="#3E8F86"/>
    <g transform="rotate(-25 32 32)">
      <ellipse cx="24" cy="18" rx="8" ry="11" fill="none" stroke="white" stroke-width="1.8"/>
      <line x1="24" y1="28" x2="24" y2="50" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    </g>
    <g transform="rotate(25 32 32)">
      <ellipse cx="40" cy="18" rx="8" ry="11" fill="none" stroke="white" stroke-width="1.8"/>
      <line x1="40" y1="28" x2="40" y2="50" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    </g>
  </g>
  <text x="224" y="92" font-size="10" text-anchor="middle" fill="#2B2A26">Ложки</text>
  </svg>`,
  bank:[
    {p:"Какой формы корпус у балалайки?",opts:["Треугольной","Круглой","Квадратной"],correct:0},
    {p:"К какой семье инструментов относится балалайка?",opts:["Струнные","Духовые","Ударные"],correct:0},
    {p:"Чем играют на деревянных ложках как на инструменте?",opts:["Стучат ими друг о друга","Дуют в них","Трогают струны"],correct:0},
    {p:"Гармонь — какой это инструмент?",opts:["Русский народный","Только зарубежный"],correct:0}
  ]}

];
