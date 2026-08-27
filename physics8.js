/* Физика, 8 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 7 класса: тепловые, электрические, магнитные и световые явления. */

const PHYSICS8_MOD = [

{ n:"Тепловое движение и температура",
  explain:"Все молекулы вещества находятся в постоянном хаотичном движении — <b>тепловом движении</b>. Чем выше температура тела, тем быстрее движутся его молекулы.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <g transform="translate(0,0)">
    <rect x="4" y="10" width="100" height="90" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="30" cy="30" r="5" fill="#3B6EA5"/><circle cx="70" cy="45" r="5" fill="#3B6EA5"/>
    <circle cx="45" cy="70" r="5" fill="#3B6EA5"/><circle cx="80" cy="80" r="5" fill="#3B6EA5"/>
    <line x1="30" y1="30" x2="38" y2="24" stroke="#284D77" stroke-width="1.5"/>
    <line x1="70" y1="45" x2="76" y2="52" stroke="#284D77" stroke-width="1.5"/>
    <text x="54" y="112" font-size="10" text-anchor="middle" fill="#2B2A26">холодно: медленно</text>
  </g>
  <g transform="translate(130,0)">
    <rect x="4" y="10" width="100" height="90" fill="#FDE3DC" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="30" cy="30" r="5" fill="#D6524F"/><circle cx="70" cy="45" r="5" fill="#D6524F"/>
    <circle cx="45" cy="70" r="5" fill="#D6524F"/><circle cx="80" cy="80" r="5" fill="#D6524F"/>
    <line x1="30" y1="30" x2="46" y2="14" stroke="#A83836" stroke-width="1.5"/>
    <line x1="70" y1="45" x2="88" y2="62" stroke="#A83836" stroke-width="1.5"/>
    <line x1="45" y1="70" x2="30" y2="90" stroke="#A83836" stroke-width="1.5"/>
    <text x="54" y="112" font-size="10" text-anchor="middle" fill="#2B2A26">горячо: быстро</text>
  </g>
  </svg>`,
  bank:[
    {p:"Как называется хаотичное движение молекул?",opts:["Тепловое движение","Механическое движение"],correct:0},
    {p:"Как связана скорость движения молекул с температурой?",opts:["Чем выше температура, тем быстрее движутся молекулы","Скорость не зависит от температуры"],correct:0}
  ]},

{ n:"Внутренняя энергия и теплопередача",
  explain:"<b>Теплопередача</b> — процесс изменения внутренней энергии тела без совершения работы. Виды теплопередачи: теплопроводность, конвекция и излучение.",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <g transform="translate(0,10)">
    <line x1="0" y1="30" x2="70" y2="30" stroke="#736C5E" stroke-width="6"/>
    <circle cx="8" cy="30" r="7" fill="#D6524F"/>
    <text x="35" y="55" font-size="7" text-anchor="middle" fill="#2B2A26">теплопроводность</text>
    <text x="35" y="66" font-size="8" text-anchor="middle" fill="#736C5E">(металл греется)</text>
  </g>
  <g transform="translate(95,0)">
    <rect x="0" y="10" width="60" height="50" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1.5"/>
    <path d="M15 55 q0-20 0-40" fill="none" stroke="#D6524F" stroke-width="2" stroke-dasharray="3 3"/>
    <polygon points="15,15 10,25 20,25" fill="#D6524F"/>
    <path d="M45 15 q0 20 0 40" fill="none" stroke="#3B6EA5" stroke-width="2" stroke-dasharray="3 3"/>
    <polygon points="45,55 40,45 50,45" fill="#3B6EA5"/>
    <text x="30" y="76" font-size="9" text-anchor="middle" fill="#2B2A26">конвекция</text>
  </g>
  <g transform="translate(180,5)">
    <circle cx="30" cy="35" r="14" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
    <line x1="30" y1="55" x2="30" y2="66" stroke="#C99A00" stroke-width="2"/>
    <line x1="46" y1="46" x2="55" y2="52" stroke="#C99A00" stroke-width="2"/>
    <line x1="14" y1="46" x2="5" y2="52" stroke="#C99A00" stroke-width="2"/>
    <text x="30" y="82" font-size="9" text-anchor="middle" fill="#2B2A26">излучение</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что такое теплопередача?",opts:["Изменение внутренней энергии тела без работы","Только механическое движение"],correct:0},
    {p:"Назови один из видов теплопередачи.",opts:["Теплопроводность","Отражение"],correct:0},
    {p:"Как называется теплопередача через движение нагретых слоёв жидкости или газа?",opts:["Конвекция","Теплопроводность"],correct:0}
  ]},

{ n:"Агрегатные состояния вещества",
  explain:"Вещество может находиться в трёх основных агрегатных состояниях: <b>твёрдом</b>, <b>жидком</b> и <b>газообразном</b>. Переход между ними происходит при изменении температуры.",
  svg:`<svg viewBox="0 0 280 110" width="280">
  <g transform="translate(0,10)">
    <rect x="4" y="0" width="60" height="60" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="20" cy="16" r="4" fill="#3B6EA5"/><circle cx="40" cy="16" r="4" fill="#3B6EA5"/>
    <circle cx="20" cy="34" r="4" fill="#3B6EA5"/><circle cx="40" cy="34" r="4" fill="#3B6EA5"/>
    <circle cx="20" cy="50" r="4" fill="#3B6EA5"/><circle cx="40" cy="50" r="4" fill="#3B6EA5"/>
    <text x="34" y="78" font-size="10" text-anchor="middle" fill="#2B2A26">твёрдое</text>
  </g>
  <text x="80" y="35" font-size="10" fill="#A83836">плавление →</text>
  <text x="80" y="55" font-size="10" fill="#284D77">← отвердевание</text>
  <g transform="translate(130,10)">
    <rect x="4" y="0" width="60" height="60" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="16" cy="20" r="4" fill="#3E8F86"/><circle cx="36" cy="14" r="4" fill="#3E8F86"/>
    <circle cx="46" cy="38" r="4" fill="#3E8F86"/><circle cx="20" cy="46" r="4" fill="#3E8F86"/>
    <text x="34" y="78" font-size="10" text-anchor="middle" fill="#2B2A26">жидкое</text>
  </g>
  <text x="205" y="35" font-size="10" fill="#A83836">испарение →</text>
  <text x="205" y="55" font-size="10" fill="#284D77">← конденсация</text>
  <g transform="translate(255,10)">
    <rect x="4" y="0" width="20" height="60" fill="none"/>
    <circle cx="14" cy="14" r="3" fill="#E3922E"/><circle cx="10" cy="40" r="3" fill="#E3922E"/>
  </g>
  </svg>`,
  bank:[
    {p:"Сколько основных агрегатных состояний вещества?",opts:["Три","Два"],correct:0},
    {p:"Как называется переход из твёрдого состояния в жидкое?",opts:["Плавление","Кипение"],correct:0},
    {p:"Как называется переход из жидкого состояния в газообразное?",opts:["Испарение","Плавление"],correct:0},
    {p:"При каком процессе вода превращается в лёд?",opts:["При замерзании (кристаллизации)","При кипении"],correct:0}
  ]},

{ n:"Электрический заряд",
  explain:"<b>Электрический заряд</b> бывает положительным и отрицательным. Одноимённые заряды отталкиваются, разноимённые — притягиваются.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <g transform="translate(0,15)">
    <circle cx="25" cy="30" r="16" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
    <text x="25" y="35" font-size="15" text-anchor="middle" fill="#FFFEF8">+</text>
    <circle cx="85" cy="30" r="16" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
    <text x="85" y="35" font-size="15" text-anchor="middle" fill="#FFFEF8">+</text>
    <line x1="46" y1="15" x2="64" y2="15" stroke="#A83836" stroke-width="2"/><polygon points="46,15 54,11 54,19" fill="#A83836"/>
    <line x1="64" y1="45" x2="46" y2="45" stroke="#A83836" stroke-width="2"/><polygon points="64,45 56,41 56,49" fill="#A83836"/>
    <text x="55" y="70" font-size="10" text-anchor="middle" fill="#A83836">отталкиваются</text>
  </g>
  <g transform="translate(140,15)">
    <circle cx="25" cy="30" r="16" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
    <text x="25" y="35" font-size="15" text-anchor="middle" fill="#FFFEF8">+</text>
    <circle cx="85" cy="30" r="16" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
    <text x="85" y="35" font-size="15" text-anchor="middle" fill="#FFFEF8">−</text>
    <line x1="64" y1="30" x2="46" y2="30" stroke="#3F7A3D" stroke-width="2"/><polygon points="46,30 54,25 54,35" fill="#3F7A3D"/>
    <line x1="46" y1="30" x2="64" y2="30" stroke="#3F7A3D" stroke-width="0"/>
    <text x="55" y="70" font-size="10" text-anchor="middle" fill="#3F7A3D">притягиваются</text>
  </g>
  </svg>`,
  bank:[
    {p:"Какие бывают электрические заряды?",opts:["Положительные и отрицательные","Только положительные"],correct:0},
    {p:"Что происходит с одноимёнными зарядами?",opts:["Они отталкиваются","Они притягиваются"],correct:0},
    {p:"Что происходит с разноимёнными зарядами?",opts:["Они притягиваются","Они отталкиваются"],correct:0}
  ]},

{ n:"Электрический ток",
  explain:"<b>Электрический ток</b> — упорядоченное движение заряженных частиц. Для его существования нужна замкнутая цепь и источник тока.",
  svg:`<svg viewBox="-37 0 257 130" width="257">
  <rect x="30" y="20" width="160" height="90" rx="6" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <g transform="translate(90,95)">
    <line x1="0" y1="0" x2="0" y2="15" stroke="#2B2A26" stroke-width="4"/>
    <line x1="14" y1="0" x2="14" y2="15" stroke="#2B2A26" stroke-width="2"/>
    <text x="7" y="-6" font-size="6" text-anchor="middle" fill="#2B2A26">источник тока</text>
  </g>
  <circle cx="180" cy="65" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <line x1="171" y1="56" x2="189" y2="74" stroke="#C99A00" stroke-width="1.5"/>
  <line x1="189" y1="56" x2="171" y2="74" stroke="#C99A00" stroke-width="1.5"/>
  <circle cx="60" cy="65" r="3" fill="#3B6EA5"/>
  <circle cx="45" cy="30" r="3" fill="#3B6EA5"/>
  <circle cx="150" cy="30" r="3" fill="#3B6EA5"/>
  <text x="110" y="128" font-size="10" text-anchor="middle" fill="#2B2A26">замкнутая цепь</text>
  </svg>`,
  bank:[
    {p:"Что такое электрический ток?",opts:["Упорядоченное движение заряженных частиц","Просто наличие зарядов"],correct:0},
    {p:"Что нужно для существования электрического тока в цепи?",opts:["Замкнутая цепь и источник тока","Только провод"],correct:0}
  ]},

{ n:"Сила тока, напряжение, сопротивление",
  explain:"<b>Сила тока</b> измеряется в амперах (А), <b>напряжение</b> — в вольтах (В), <b>сопротивление</b> — в омах (Ом). Их связывает закон Ома: I = U / R.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <rect x="20" y="20" width="200" height="70" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <g transform="translate(100,80)">
    <line x1="0" y1="0" x2="0" y2="10" stroke="#2B2A26" stroke-width="4"/>
    <line x1="12" y1="0" x2="12" y2="10" stroke="#2B2A26" stroke-width="2"/>
  </g>
  <path d="M155 90 l6-14 8 20 8-20 8 20 8-20 6 14" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="55" cy="20" r="10" fill="#FFFEF8" stroke="#284D77" stroke-width="2"/>
  <text x="55" y="24" font-size="10" text-anchor="middle" fill="#284D77">A</text>
  <text x="185" y="55" font-size="10" text-anchor="middle" fill="#2B2A26">R (Ом)</text>
  <text x="55" y="10" font-size="9" text-anchor="middle" fill="#284D77">I, А</text>
  <text x="120" y="112" font-size="12" text-anchor="middle" fill="#2B2A26">I = U / R</text>
  </svg>`,
  bank:[
    {p:"В каких единицах измеряется сила тока?",opts:["В амперах","В вольтах","В омах"],correct:0},
    {p:"В каких единицах измеряется напряжение?",opts:["В вольтах","В амперах"],correct:0},
    {p:"В каких единицах измеряется сопротивление?",opts:["В омах","В вольтах"],correct:0},
    {p:"Как связаны сила тока, напряжение и сопротивление (закон Ома)?",opts:["I = U / R","I = U + R"],correct:0}
  ]},

{ n:"Магнитное поле",
  explain:"Вокруг постоянных магнитов и проводников с током существует <b>магнитное поле</b>. У любого магнита есть два полюса — северный и южный.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <rect x="70" y="40" width="30" height="50" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <rect x="100" y="40" width="30" height="50" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="85" y="70" font-size="14" text-anchor="middle" fill="#FFFEF8" font-weight="700">N</text>
  <text x="115" y="70" font-size="14" text-anchor="middle" fill="#FFFEF8" font-weight="700">S</text>
  <path d="M100 40 q60-20 0-40" fill="none" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="2 3" transform="translate(0,50) scale(1,1)"/>
  <path d="M70 40 q-50 25 30 55" fill="none" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="2 3"/>
  <path d="M70 55 q-70 15 30 40" fill="none" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="2 3"/>
  <path d="M130 55 q70 15 -30 40" fill="none" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="2 3"/>
  <text x="100" y="108" font-size="10" text-anchor="middle" fill="#2B2A26">магнитное поле магнита</text>
  </svg>`,
  bank:[
    {p:"Вокруг чего существует магнитное поле?",opts:["Вокруг магнитов и проводников с током","Только вокруг Земли"],correct:0},
    {p:"Сколько полюсов у обычного магнита?",opts:["Два (северный и южный)","Один"],correct:0},
    {p:"Как ведут себя одноимённые полюса магнитов?",opts:["Отталкиваются","Притягиваются"],correct:0}
  ]},

{ n:"Свет и его источники",
  explain:"Источники света бывают естественные (Солнце) и искусственные (лампа). Свет распространяется прямолинейно, что объясняет образование теней.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <circle cx="30" cy="30" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <line x1="46" y1="40" x2="90" y2="70" stroke="#C99A00" stroke-width="1.5"/>
  <line x1="46" y1="20" x2="95" y2="35" stroke="#C99A00" stroke-width="1.5"/>
  <line x1="30" y1="46" x2="60" y2="90" stroke="#C99A00" stroke-width="1.5"/>
  <rect x="90" y="45" width="20" height="45" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <polygon points="110,90 160,90 175,110 125,110" fill="#2B2A26" opacity="0.35"/>
  <text x="60" y="10" font-size="10" fill="#B96F16">свет по прямой</text>
  <text x="145" y="112" font-size="10" text-anchor="middle" fill="#2B2A26" transform="translate(0,3)"/>
  <text x="145" y="120" font-size="9" text-anchor="middle" fill="#736C5E">тень</text>
  </svg>`,
  bank:[
    {p:"Какой источник света — естественный?",opts:["Солнце","Лампа"],correct:0},
    {p:"Как распространяется свет в однородной среде?",opts:["Прямолинейно","По кругу"],correct:0},
    {p:"Из-за чего образуются тени от предметов?",opts:["Из-за прямолинейного распространения света","Из-за магнетизма"],correct:0}
  ]},

{ n:"Отражение и преломление света",
  explain:"При <b>отражении</b> свет возвращается от поверхности (угол падения равен углу отражения). При <b>преломлении</b> свет меняет направление, переходя из одной среды в другую (например, из воздуха в воду).",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <g transform="translate(0,0)">
    <line x1="10" y1="90" x2="110" y2="90" stroke="#2B2A26" stroke-width="2"/>
    <line x1="60" y1="90" x2="60" y2="30" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
    <line x1="20" y1="30" x2="60" y2="90" stroke="#D6524F" stroke-width="2"/>
    <polygon points="60,90 48,74 55,70" fill="#D6524F"/>
    <line x1="60" y1="90" x2="100" y2="30" stroke="#D6524F" stroke-width="2"/>
    <polygon points="100,30 84,42 90,46" fill="#D6524F"/>
    <text x="60" y="112" font-size="9" text-anchor="middle" fill="#2B2A26">отражение: угол = углу</text>
  </g>
  <g transform="translate(140,0)">
    <rect x="0" y="60" width="110" height="40" fill="#DCE9F6"/>
    <line x1="55" y1="0" x2="55" y2="100" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
    <line x1="20" y1="10" x2="55" y2="60" stroke="#284D77" stroke-width="2"/>
    <polygon points="55,60 42,45 48,42" fill="#284D77"/>
    <line x1="55" y1="60" x2="75" y2="100" stroke="#284D77" stroke-width="2"/>
    <polygon points="75,100 60,78 68,76" fill="#284D77"/>
    <text x="55" y="115" font-size="9" text-anchor="middle" fill="#2B2A26">преломление в воде</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что происходит со светом при отражении от зеркала?",opts:["Он возвращается, угол падения равен углу отражения","Он исчезает"],correct:0},
    {p:"Что происходит со светом при переходе из воздуха в воду?",opts:["Он преломляется, меняя направление","Ничего не меняется"],correct:0},
    {p:"Почему ложка в стакане с водой кажется «сломанной»?",opts:["Из-за преломления света","Из-за отражения от дна"],correct:0}
  ]},

{ n:"Удельная теплоёмкость",
  explain:"<b>Удельная теплоёмкость</b> вещества показывает, сколько теплоты нужно, чтобы нагреть 1 кг этого вещества на 1°C. У разных веществ она разная — например, у воды она довольно высокая.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <g transform="translate(10,10)">
    <rect x="0" y="30" width="60" height="60" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
    <text x="30" y="65" font-size="11" text-anchor="middle" fill="#284D77">1 кг воды</text>
    <text x="30" y="105" font-size="6" text-anchor="middle" fill="#2B2A26">нужно много теплоты</text>
  </g>
  <g transform="translate(150,10)">
    <rect x="0" y="30" width="60" height="60" fill="#E9EEF3" stroke="#2B2A26" stroke-width="2"/>
    <text x="30" y="65" font-size="8" text-anchor="middle" fill="#736C5E">1 кг металла</text>
    <text x="30" y="105" font-size="6" text-anchor="middle" fill="#2B2A26">нужно мало теплоты</text>
  </g>
  <line x1="75" y1="30" x2="145" y2="30" stroke="#D6524F" stroke-width="2"/>
  <polygon points="145,30 137,25 137,35" fill="#D6524F"/>
  <text x="110" y="20" font-size="9" text-anchor="middle" fill="#A83836">+1°C</text>
  </svg>`,
  bank:[
    {p:"Что показывает удельная теплоёмкость вещества?",opts:["Сколько теплоты нужно для нагрева 1 кг на 1°C","Только массу вещества"],correct:0},
    {p:"Одинакова ли удельная теплоёмкость у разных веществ?",opts:["Нет, она разная","Да, всегда одинакова"],correct:0}
  ]},

{ n:"Плавление и кипение",
  explain:"<b>Плавление</b> — переход из твёрдого состояния в жидкое при определённой температуре плавления. <b>Кипение</b> — бурное испарение по всему объёму жидкости при температуре кипения.",
  svg:`<svg viewBox="0 0 274 140" width="274">
  <line x1="30" y1="10" x2="30" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <line x1="30" y1="120" x2="220" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <text x="10" y="20" font-size="10" fill="#2B2A26">t,°C</text>
  <text x="200" y="135" font-size="10" fill="#2B2A26">время</text>
  <path d="M30 105 L70 105 L100 60 L150 60 L180 25" stroke="#D6524F" stroke-width="2.5" fill="none"/>
  <line x1="30" y1="105" x2="220" y2="105" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="222" y="108" font-size="6" fill="#2B2A26">0°C плавление</text>
  <line x1="30" y1="60" x2="220" y2="60" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="222" y="63" font-size="6" fill="#2B2A26">100°C кипение</text>
  </svg>`,
  bank:[
    {p:"Что такое плавление?",opts:["Переход из твёрдого состояния в жидкое","Переход из жидкого в газообразное"],correct:0},
    {p:"Что такое кипение?",opts:["Бурное испарение по всему объёму жидкости","Замерзание жидкости"],correct:0},
    {p:"При постоянном давлении температура плавления льда — величина...",opts:["Постоянная для данного вещества","Случайная"],correct:0}
  ]},

{ n:"Последовательное и параллельное соединение проводников",
  explain:"При <b>последовательном</b> соединении сила тока во всех участках одинакова. При <b>параллельном</b> соединении одинаково напряжение на всех ветвях, а сила тока делится между ними.",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <g transform="translate(0,0)">
    <rect x="10" y="20" width="110" height="70" fill="none" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="45" cy="20" r="9" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
    <circle cx="85" cy="20" r="9" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
    <text x="65" y="112" font-size="9" text-anchor="middle" fill="#2B2A26">последовательно</text>
  </g>
  <g transform="translate(140,0)">
    <rect x="10" y="15" width="110" height="30" fill="none" stroke="#2B2A26" stroke-width="2"/>
    <rect x="10" y="55" width="110" height="30" fill="none" stroke="#2B2A26" stroke-width="2"/>
    <line x1="10" y1="15" x2="10" y2="85" stroke="#2B2A26" stroke-width="2"/>
    <line x1="120" y1="15" x2="120" y2="85" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="65" cy="15" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
    <circle cx="65" cy="55" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
    <text x="65" y="112" font-size="9" text-anchor="middle" fill="#2B2A26">параллельно</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что одинаково при последовательном соединении проводников?",opts:["Сила тока","Напряжение"],correct:0},
    {p:"Что одинаково при параллельном соединении проводников?",opts:["Напряжение","Сила тока"],correct:0}
  ]},

{ n:"Электромагниты и их применение",
  explain:"<b>Электромагнит</b> — катушка с проволокой, создающая магнитное поле при пропускании тока. Используется в электрических звонках, подъёмных кранах и многих других устройствах.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <rect x="70" y="30" width="16" height="60" fill="#736C5E"/>
  <path d="M65 30 q10-8 20 0 M65 42 q10-8 20 0 M65 54 q10-8 20 0 M65 66 q10-8 20 0 M65 78 q10-8 20 0 M65 90 q10-8 20 0" fill="none" stroke="#B96F16" stroke-width="2"/>
  <g transform="translate(60,95)">
    <line x1="0" y1="0" x2="0" y2="10" stroke="#2B2A26" stroke-width="4"/>
    <line x1="12" y1="0" x2="12" y2="10" stroke="#2B2A26" stroke-width="2"/>
  </g>
  <line x1="20" y1="55" x2="45" y2="55" stroke="#D6524F" stroke-width="3"/>
  <polygon points="45,55 36,50 36,60" fill="#D6524F"/>
  <text x="30" y="45" font-size="9" fill="#A83836">притяг.</text>
  <circle cx="15" cy="55" r="5" fill="#2B2A26"/>
  <text x="78" y="18" font-size="10" text-anchor="middle" fill="#2B2A26">катушка с сердечником</text>
  </svg>`,
  bank:[
    {p:"Когда электромагнит создаёт магнитное поле?",opts:["Когда через него проходит ток","Только при нагревании"],correct:0},
    {p:"Где применяют электромагниты?",opts:["В звонках и подъёмных кранах","Только в часах"],correct:0}
  ]}

];
