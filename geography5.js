/* География, 5 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Новый предмет для 5 класса: начальный курс географии. */

const GEOGRAPHY5_MOD = [

{ n:"Что изучает география",
  explain:"<b>География</b> — наука о Земле: её природе, материках, океанах, странах и народах. Слово «география» переводится с греческого как «землеописание».",
  svg:`<svg viewBox="0 0 220 180" width="220">
  <circle cx="95" cy="90" r="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M40 60c14-10 30 4 44-4s28-14 42-2" fill="none" stroke="#5F9A5C" stroke-width="7" stroke-linecap="round"/>
  <path d="M30 100c10 6 26-4 40 2s24 10 38 2 22-10 34-2" fill="none" stroke="#5F9A5C" stroke-width="7" stroke-linecap="round"/>
  <path d="M50 130c12-4 24 4 36-2" fill="none" stroke="#5F9A5C" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="95" cy="90" rx="70" ry="18" fill="none" stroke="#3B6EA5" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="95" y1="20" x2="95" y2="160" stroke="#3B6EA5" stroke-width="1" stroke-dasharray="2 4"/>
  <circle cx="165" cy="45" r="26" fill="none" stroke="#2B2A26" stroke-width="4"/>
  <line x1="184" y1="64" x2="205" y2="85" stroke="#2B2A26" stroke-width="6" stroke-linecap="round"/>
  </svg>`,
  bank:[
    {p:"Что изучает наука география?",opts:["Землю, её природу и страны","Только числа","Только живые организмы"],correct:0},
    {p:"Как переводится слово «география» с греческого?",opts:["Землеописание","Звездоописание","Числоописание"],correct:0},
    {p:"Учёного, изучающего географию, называют...",opts:["Географ","Биолог","Историк"],correct:0}
  ]},

{ n:"План и карта",
  explain:"<b>План местности</b> и <b>карта</b> показывают земную поверхность сверху в уменьшенном виде. <b>Масштаб</b> показывает, во сколько раз изображение на карте уменьшено по сравнению с реальностью.",
  svg:`<svg viewBox="0 0 240 160" width="240">
  <rect x="6" y="6" width="228" height="118" rx="6" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <path d="M20 90c20-30 40-40 60-30s30 30 55 20 40-30 60-10" fill="none" stroke="#3B6EA5" stroke-width="3"/>
  <path d="M40 30c30 10 60-6 90 4s50 20 70 6" fill="none" stroke="#5F9A5C" stroke-width="3" stroke-dasharray="5 4"/>
  <rect x="90" y="55" width="26" height="20" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <polygon points="86,55 103,42 120,55" fill="#D6524F" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="20" y1="140" x2="80" y2="140" stroke="#2B2A26" stroke-width="3"/>
  <line x1="20" y1="134" x2="20" y2="146" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="134" x2="80" y2="146" stroke="#2B2A26" stroke-width="2"/>
  <text x="50" y="156" font-size="11" text-anchor="middle" fill="#736C5E">масштаб</text>
  <polygon points="200,140 208,120 216,140" fill="none" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="208" y="118" font-size="10" text-anchor="middle" fill="#2B2A26">С</text>
  </svg>`,
  bank:[
    {p:"Что показывает масштаб карты?",opts:["Во сколько раз уменьшено изображение","Высоту гор","Название страны"],correct:0},
    {p:"План и карта показывают местность...",opts:["Сверху, в уменьшенном виде","Сбоку, в полный размер"],correct:0},
    {p:"Если масштаб карты 1:1000, то 1 см на карте равен...",opts:["1000 см в реальности","1 см в реальности","10 см в реальности"],correct:0},
    {p:"Зелёным цветом на физической карте обычно обозначают...",opts:["Низменности и леса","Горы","Океаны"],correct:0}
  ]},

{ n:"Материки и океаны",
  explain:"На Земле <b>шесть материков</b>: Евразия, Африка, Северная Америка, Южная Америка, Австралия, Антарктида — и <b>четыре (иногда пять) океанов</b>: Тихий, Атлантический, Индийский, Северный Ледовитый.",
  svg:`<svg viewBox="0 0 240 160" width="240">
  <rect x="4" y="4" width="232" height="152" rx="10" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M40 30c10-8 26-4 30 4s-4 10 6 16-2 18-14 18-24-10-26-20 0-14 4-18z" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1"/>
  <path d="M50 70c8 0 16 8 14 20s-8 26-16 24-10-16-8-26 2-18 10-18z" fill="#E3922E" stroke="#B96F16" stroke-width="1"/>
  <path d="M100 35c14-6 28 0 30 10s-6 8-4 18-14 14-24 8-14-18-10-26 4-8 8-10z" fill="#D6524F" stroke="#A83836" stroke-width="1"/>
  <path d="M150 90c10-4 20 2 18 12s-12 14-20 10-6-16 2-22z" fill="#3F7A3D" stroke="#3F7A3D" stroke-width="1"/>
  <path d="M180 40c16-4 32 2 30 12s-16 10-24 6-14-14-6-18z" fill="#9973B8" stroke="#725189" stroke-width="1"/>
  <path d="M170 120c-8 6-4 18 8 18s16-10 10-16-12-6-18-2z" fill="#FFFEF8" stroke="#3B6EA5" stroke-width="1.5"/>
  <text x="150" y="145" font-size="9" fill="#284D77">Тихий океан</text>
  </svg>`,
  bank:[
    {p:"Сколько материков на Земле?",opts:["Шесть","Четыре","Десять"],correct:0},
    {p:"Самый большой материк — это...",opts:["Евразия","Австралия","Антарктида"],correct:0},
    {p:"Самый маленький материк — это...",opts:["Австралия","Евразия","Африка"],correct:0},
    {p:"Какой материк почти полностью покрыт льдом?",opts:["Антарктида","Африка","Австралия"],correct:0},
    {p:"Самый большой океан на Земле — это...",opts:["Тихий океан","Индийский океан","Северный Ледовитый океан"],correct:0},
    {p:"Россия расположена на материке...",opts:["Евразия","Северная Америка","Африка"],correct:0}
  ]},

{ n:"Литосфера: горы и равнины",
  explain:"<b>Литосфера</b> — твёрдая каменная оболочка Земли. На суше выделяют <b>горы</b> (высокие участки с крутыми склонами) и <b>равнины</b> (ровные участки поверхности).",
  svg:`<svg viewBox="0 0 260 150" width="260">
  <rect x="4" y="4" width="252" height="142" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="20,120 55,55 90,120" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="40,120 75,40 110,120" fill="#9973B8" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="65,120 100,60 135,120" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="70,45 75,40 80,45 76,52" fill="#FFFEF8"/>
  <text x="80" y="136" font-size="11" text-anchor="middle" fill="#2B2A26">горы</text>
  <line x1="150" y1="118" x2="250" y2="118" stroke="#5F9A5C" stroke-width="5" stroke-linecap="round"/>
  <line x1="150" y1="118" x2="250" y2="118" stroke="#3F7A3D" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="200" y="136" font-size="11" text-anchor="middle" fill="#2B2A26">равнина</text>
  </svg>`,
  bank:[
    {p:"Как называется твёрдая оболочка Земли?",opts:["Литосфера","Атмосфера","Гидросфера"],correct:0},
    {p:"Высокий участок земной поверхности с крутыми склонами — это...",opts:["Гора","Равнина","Низменность"],correct:0},
    {p:"Ровный участок земной поверхности — это...",opts:["Равнина","Гора","Впадина"],correct:0},
    {p:"Самая высокая горная вершина в мире — это...",opts:["Эверест","Эльбрус","Килиманджаро"],correct:0}
  ]},

{ n:"Атмосфера: погода и климат",
  explain:"<b>Атмосфера</b> — воздушная оболочка Земли. <b>Погода</b> — это состояние атмосферы в конкретный день, а <b>климат</b> — многолетний, привычный характер погоды для данной местности.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <path d="M110 8a94 94 0 0 1 94 94h-188a94 94 0 0 1 94-94z" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <line x1="16" y1="102" x2="204" y2="102" stroke="#5F9A5C" stroke-width="5"/>
  <circle cx="70" cy="55" r="18" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <path d="M120 45c8-10 24-10 28 2 10 0 16 8 12 16h-42c-6-6-4-14 2-18z" fill="#FFFEF8" stroke="#736C5E" stroke-width="1.5"/>
  <path d="M130 68l-6 14M142 68l-6 16M154 68l-6 14" stroke="#3B6EA5" stroke-width="2" stroke-linecap="round"/>
  <rect x="18" y="60" width="10" height="42" rx="5" fill="#D6524F" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="23" cy="102" r="8" fill="#D6524F" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="110" y="150" font-size="11" text-anchor="middle" fill="#736C5E">погода сегодня · климат — много лет</text>
  </svg>`,
  bank:[
    {p:"Как называется воздушная оболочка Земли?",opts:["Атмосфера","Литосфера","Гидросфера"],correct:0},
    {p:"Чем отличается климат от погоды?",opts:["Климат — многолетний, а погода — на один день","Это одно и то же"],correct:0},
    {p:"Прибор для измерения температуры воздуха называется...",opts:["Термометр","Барометр","Компас"],correct:0},
    {p:"Прибор для определения сторон света называется...",opts:["Компас","Термометр","Телескоп"],correct:0}
  ]},

{ n:"Гидросфера: вода на Земле",
  explain:"<b>Гидросфера</b> — водная оболочка Земли: океаны, моря, реки, озёра и ледники. Большая часть воды на Земле — это солёная вода морей и океанов.",
  svg:`<svg viewBox="0 0 240 150" width="240">
  <rect x="4" y="4" width="232" height="142" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="14" y="14" width="60" height="100" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <rect x="14" y="14" width="60" height="7" fill="#DCE9F6"/>
  <text x="44" y="128" font-size="10" text-anchor="middle" fill="#2B2A26">солёная</text>
  <rect x="90" y="14" width="14" height="100" fill="#3E8F86" stroke="#2C6D66" stroke-width="1.5"/>
  <text x="97" y="128" font-size="10" text-anchor="middle" fill="#2B2A26">пресная</text>
  <path d="M150 60c10-14 26-14 34 0 12-2 20 8 16 18h-58c-6-8 0-16 8-18z" fill="#FFFEF8" stroke="#736C5E" stroke-width="1.5"/>
  <path d="M150 78c6 8 4 20-2 30M170 78c4 10 2 22-4 32M188 78c4 8 2 18-4 28" stroke="#3B6EA5" stroke-width="2" fill="none" stroke-linecap="round"/>
  <text x="172" y="128" font-size="10" text-anchor="middle" fill="#2B2A26">осадки</text>
  </svg>`,
  bank:[
    {p:"Как называется водная оболочка Земли?",opts:["Гидросфера","Атмосфера","Литосфера"],correct:0},
    {p:"Какой воды на Земле больше — солёной или пресной?",opts:["Солёной (в морях и океанах)","Пресной"],correct:0},
    {p:"Естественный поток воды, текущий в одном направлении — это...",opts:["Река","Озеро","Море"],correct:0},
    {p:"Самое глубокое озеро в мире находится в России и называется...",opts:["Байкал","Ладожское","Онежское"],correct:0}
  ]},

{ n:"Великие географические открытия",
  explain:"В эпоху географических открытий мореплаватели исследовали новые земли. <b>Христофор Колумб</b> в 1492 году достиг Америки, а экспедиция <b>Фернана Магеллана</b> первой обошла вокруг света.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <rect x="4" y="4" width="232" height="132" rx="8" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M10 100c20-8 40 8 60 0s40-8 60 0 40 8 60 0 30-6 40 0" fill="none" stroke="#3B6EA5" stroke-width="2" opacity="0.6"/>
  <path d="M40 100c-14-6-14-24 0-30" fill="none" stroke="#2B2A26" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round"/>
  <path d="M40 70c30-4 60 10 90-2s60 6 90-10" fill="none" stroke="#A83836" stroke-width="1.5" stroke-dasharray="4 4"/>
  <polygon points="35,100 45,100 40,60" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="40" y1="60" x2="40" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="20,110 62,110 55,100 27,100" fill="#D6524F" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="200" y="55" font-size="9" text-anchor="middle" fill="#2B2A26">1492</text>
  </svg>`,
  bank:[
    {p:"Кто из мореплавателей достиг Америки в 1492 году?",opts:["Христофор Колумб","Фернан Магеллан","Марко Поло"],correct:0},
    {p:"Чья экспедиция первой совершила кругосветное путешествие?",opts:["Фернана Магеллана","Христофора Колумба","Афанасия Никитина"],correct:0},
    {p:"Что доказало первое кругосветное путешествие?",opts:["Что Земля имеет форму шара","Что Земля плоская","Что Луна обитаема"],correct:0},
    {p:"Какой русский путешественник описал своё путешествие в Индию в книге «Хождение за три моря»?",opts:["Афанасий Никитин","Пётр Первый","Юрий Гагарин"],correct:0}
  ]},

{ n:"Форма и движение Земли",
  explain:"Земля имеет форму, близкую к шару, и вращается вокруг своей оси за 24 часа (сутки), а также вокруг Солнца за примерно 365 дней (год). Вращение вокруг оси создаёт смену дня и ночи.",
  svg:`<svg viewBox="0 0 260 160" width="260">
  <circle cx="30" cy="80" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <ellipse cx="150" cy="80" rx="105" ry="55" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 5"/>
  <g transform="translate(150,80) rotate(-18)">
  <circle r="36" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <path d="M-20-14c8-4 14 4 22 0s10-6 18-2" fill="none" stroke="#5F9A5C" stroke-width="5" stroke-linecap="round"/>
  <path d="M-24 8c10 4 18-4 26 2s14 6 20 0" fill="none" stroke="#5F9A5C" stroke-width="5" stroke-linecap="round"/>
  <line x1="0" y1="-48" x2="0" y2="48" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="2 3"/>
  </g>
  <path d="M195 45a48 48 0 0 1 8 22" fill="none" stroke="#2B2A26" stroke-width="2" marker-end="url(#ar5)"/>
  <defs><marker id="ar5" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#2B2A26"/></marker></defs>
  <text x="30" y="105" font-size="10" text-anchor="middle" fill="#2B2A26">Солнце</text>
  </svg>`,
  bank:[
    {p:"За сколько часов Земля совершает оборот вокруг своей оси?",opts:["24 часа","12 часов","365 часов"],correct:0},
    {p:"Что вызывает смену дня и ночи?",opts:["Вращение Земли вокруг своей оси","Вращение Луны","Движение облаков"],correct:0},
    {p:"За сколько дней примерно Земля обходит вокруг Солнца?",opts:["365 дней","30 дней","24 дня"],correct:0},
    {p:"Какую форму имеет Земля?",opts:["Форму, близкую к шару","Форму куба","Плоскую форму"],correct:0}
  ]},

{ n:"Градусная сетка: параллели и меридианы",
  explain:"На карте и глобусе проведены условные линии: <b>параллели</b> (горизонтальные, показывают широту) и <b>меридианы</b> (вертикальные, показывают долготу). Экватор — самая длинная параллель, делит Землю на два полушария.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="85" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="100" cy="55" rx="85" ry="16" fill="none" stroke="#3B6EA5" stroke-width="1.3"/>
  <ellipse cx="100" cy="145" rx="85" ry="16" fill="none" stroke="#3B6EA5" stroke-width="1.3"/>
  <ellipse cx="100" cy="100" rx="85" ry="26" fill="none" stroke="#D6524F" stroke-width="2.2"/>
  <ellipse cx="100" cy="100" rx="20" ry="85" fill="none" stroke="#5F9A5C" stroke-width="1.3"/>
  <ellipse cx="100" cy="100" rx="50" ry="85" fill="none" stroke="#5F9A5C" stroke-width="1.3"/>
  <ellipse cx="100" cy="100" rx="85" ry="85" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="100" y="104" font-size="10" fill="#A83836" text-anchor="middle">экватор</text>
  </svg>`,
  bank:[
    {p:"Как называются горизонтальные линии на глобусе?",opts:["Параллели","Меридианы","Границы"],correct:0},
    {p:"Как называются вертикальные линии, соединяющие полюса?",opts:["Меридианы","Параллели","Реки"],correct:0},
    {p:"Какая линия делит Землю на Северное и Южное полушария?",opts:["Экватор","Нулевой меридиан","Тропик"],correct:0}
  ]},

{ n:"Часовые пояса",
  explain:"Из-за вращения Земли и её большого размера в разных частях планеты одновременно разное время суток. Землю условно поделили на <b>часовые пояса</b>.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <circle cx="100" cy="80" r="70" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="10" x2="100" y2="150" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 4"/>
  <ellipse cx="100" cy="80" rx="46" ry="70" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 4"/>
  <ellipse cx="100" cy="80" rx="20" ry="70" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="30" y1="80" x2="170" y2="80" stroke="#2B2A26" stroke-width="1"/>
  <circle cx="30" cy="80" r="12" fill="#FFDE59" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="30" y1="80" x2="30" y2="73" stroke="#2B2A26" stroke-width="1.5"/><line x1="30" y1="80" x2="35" y2="80" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="100" cy="80" r="12" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="100" y1="80" x2="100" y2="72" stroke="#2B2A26" stroke-width="1.5"/><line x1="100" y1="80" x2="106" y2="84" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="170" cy="80" r="12" fill="#284D77" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="170" y1="80" x2="170" y2="74" stroke="#FFFEF8" stroke-width="1.5"/><line x1="170" y1="80" x2="176" y2="78" stroke="#FFFEF8" stroke-width="1.5"/>
  </svg>`,
  bank:[
    {p:"Почему в разных частях Земли одновременно разное время?",opts:["Земля вращается, и Солнце освещает разные стороны","Часы показывают неправильно"],correct:0},
    {p:"На что условно поделена Земля для удобства учёта времени?",opts:["На часовые пояса","На страны только"],correct:0}
  ]},

{ n:"Вулканы и землетрясения",
  explain:"<b>Вулкан</b> — гора, через которую на поверхность иногда вырывается раскалённая магма. <b>Землетрясение</b> — colебания земной коры, вызванные подземными процессами.",
  svg:`<svg viewBox="0 0 260 160" width="260">
  <polygon points="60,130 110,30 160,130" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="95,60 110,30 125,60" fill="#D6524F"/>
  <path d="M108 40c4 20-14 30-6 50s-8 24-2 38" fill="none" stroke="#E3922E" stroke-width="4" stroke-linecap="round"/>
  <path d="M110 20c-4-8 2-16 0-24M118 20c2-8-4-16 0-22" stroke="#736C5E" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>
  <line x1="0" y1="130" x2="260" y2="130" stroke="#2B2A26" stroke-width="2"/>
  <path d="M180 130c6-8-6-12 0-20s-6-12 0-20-6-12 2-20" fill="none" stroke="#A83836" stroke-width="3" stroke-linecap="round"/>
  <text x="205" y="60" font-size="8" fill="#2B2A26">разлом коры</text>
  <text x="110" y="150" font-size="11" text-anchor="middle" fill="#2B2A26">вулкан</text>
  </svg>`,
  bank:[
    {p:"Что вырывается из вулкана при извержении?",opts:["Раскалённая магма (лава)","Обычная дождевая вода","Снег"],correct:0},
    {p:"Что такое землетрясение?",opts:["Колебания земной коры","Извержение вулкана","Смена времён года"],correct:0}
  ]},

{ n:"Население Земли",
  explain:"На Земле живёт более 8 миллиардов человек. Люди разных стран говорят на разных языках, имеют разные традиции, но все относятся к одному биологическому виду — Человек разумный.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <circle cx="110" cy="80" r="72" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <g fill="#D6524F"><circle cx="80" cy="55" r="6"/><circle cx="60" cy="70" r="4"/></g>
  <g fill="#E3922E"><circle cx="120" cy="60" r="5"/><circle cx="140" cy="75" r="6"/></g>
  <g fill="#5F9A5C"><circle cx="90" cy="95" r="5"/><circle cx="70" cy="110" r="4"/></g>
  <g fill="#9973B8"><circle cx="130" cy="100" r="6"/><circle cx="150" cy="115" r="4"/></g>
  <g fill="#3B6EA5"><circle cx="105" cy="120" r="4"/></g>
  <text x="110" y="150" font-size="12" text-anchor="middle" fill="#2B2A26" font-weight="700">8 000 000 000+</text>
  </svg>`,
  bank:[
    {p:"Сколько примерно людей живёт сейчас на Земле?",opts:["Более 8 миллиардов","Около тысячи","Около миллиона"],correct:0},
    {p:"К какому виду относятся все люди на Земле, несмотря на разные языки и традиции?",opts:["Человек разумный","Разные виды у разных народов"],correct:0}
  ]}

];
