/* Геометрия, 11 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение стереометрии: многогранники, тела вращения, объёмы и площади поверхностей. */

const GEOMETRY11_MOD = [

{ n:"Правильные многогранники",
  explain:"<b>Правильный многогранник</b> — тело, все грани которого являются равными правильными многоугольниками. Существует ровно пять правильных многогранников, например куб и тетраэдр.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <polygon points="20,50 60,50 85,30 45,30" fill="#5F9A5C" opacity="0.25" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="60,50 60,90 85,70 85,30" fill="#5F9A5C" opacity="0.4" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="20,50 60,50 60,90 20,90" fill="#5F9A5C" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <path d="M45,70 L20,90 M45,70 L85,70 M45,70 L45,30" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
  <text x="52" y="108" font-size="11" text-anchor="middle" fill="#736C5E">куб</text>
  <polygon points="140,80 200,80 210,60 150,60" fill="#E3922E" opacity="0.2" stroke="#2B2A26" stroke-width="2"/>
  <line x1="140" y1="80" x2="175" y2="25" stroke="#2B2A26" stroke-width="2"/>
  <line x1="200" y1="80" x2="175" y2="25" stroke="#2B2A26" stroke-width="2"/>
  <line x1="210" y1="60" x2="175" y2="25" stroke="#2B2A26" stroke-width="2"/>
  <line x1="150" y1="60" x2="175" y2="25" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="175" y="108" font-size="11" text-anchor="middle" fill="#736C5E">тетраэдр</text>
  </svg>`,
  bank:[
    {p:"Сколько существует правильных многогранников?",opts:["Пять","Бесконечно много"],correct:0},
    {p:"Что из этого — правильный многогранник?",opts:["Куб","Обычный кирпич (произвольный параллелепипед)"],correct:0}
  ]},

{ n:"Объём призмы",
  explain:"Объём призмы вычисляется по формуле V = S(осн) × h, где S(осн) — площадь основания, h — высота призмы.",
  svg:`<svg viewBox="0 0 200 150" width="200">
  <polygon points="30,120 90,120 120,75 60,75" fill="#3B6EA5" opacity="0.22" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="90,120 60,70 90,25 120,75" fill="#3B6EA5" opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="60,75 120,75 90,25" fill="#3B6EA5" opacity="0.32" stroke="#2B2A26" stroke-width="2"/>
  <path d="M30,120 L60,70 L60,75" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="3 3" fill="none"/>
  <line x1="105" y1="100" x2="105" y2="50" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="2 3"/>
  <text x="112" y="78" font-size="12" fill="#D6524F">h</text>
  <text x="75" y="135" font-size="11" text-anchor="middle" fill="#736C5E">S(осн)</text>
  </svg>`,
  bank:[
    {p:"По какой формуле вычисляется объём призмы?",opts:["V = площадь основания × высота","V = только площадь основания"],correct:0}
  ]},

{ n:"Объём пирамиды",
  explain:"Объём пирамиды вычисляется по формуле V = (1/3) × S(осн) × h — треть от произведения площади основания на высоту.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <polygon points="30,100 150,100 175,75 55,75" fill="#E3922E" opacity="0.2" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="15" x2="30" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="15" x2="150" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="15" x2="175" y2="75" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="15" x2="55" y2="75" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="100" y1="15" x2="100" y2="88" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="2 3"/>
  <text x="106" y="55" font-size="12" fill="#D6524F">h</text>
  <text x="90" y="120" font-size="11" text-anchor="middle" fill="#736C5E">S(осн)</text>
  </svg>`,
  bank:[
    {p:"Какая доля от «площадь основания × высота» составляет объём пирамиды?",opts:["Одна треть","Половина"],correct:0}
  ]},

{ n:"Цилиндр",
  explain:"<b>Цилиндр</b> — тело вращения, полученное вращением прямоугольника вокруг одной из его сторон. Объём цилиндра: V = πR²h, где R — радиус основания, h — высота.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <ellipse cx="80" cy="35" rx="55" ry="18" fill="#3B6EA5" opacity="0.2" stroke="#2B2A26" stroke-width="2"/>
  <line x1="25" y1="35" x2="25" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <line x1="135" y1="35" x2="135" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25,120 A55 18 0 0 0 135,120" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25,120 A55 18 0 0 1 135,120" fill="none" stroke="#2B2A26" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="80" y1="35" x2="135" y2="35" stroke="#D6524F" stroke-width="1.6"/>
  <text x="100" y="30" font-size="11" fill="#D6524F">R</text>
  <line x1="10" y1="35" x2="10" y2="120" stroke="#5F9A5C" stroke-width="1.6"/>
  <text x="0" y="80" font-size="11" fill="#5F9A5C">h</text>
  </svg>`,
  bank:[
    {p:"По какой формуле вычисляется объём цилиндра?",opts:["V = πR²h","V = πRh"],correct:0}
  ]},

{ n:"Конус",
  explain:"<b>Конус</b> — тело вращения, полученное вращением прямоугольного треугольника вокруг одного из катетов. Объём конуса: V = (1/3)πR²h.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <ellipse cx="80" cy="120" rx="55" ry="16" fill="#E3922E" opacity="0.2" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="20" x2="25" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="20" x2="135" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25,120 A55 16 0 0 0 135,120" fill="none" stroke="#2B2A26" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="80" y1="120" x2="135" y2="120" stroke="#D6524F" stroke-width="1.6"/>
  <text x="100" y="132" font-size="11" fill="#D6524F">R</text>
  <line x1="80" y1="20" x2="80" y2="120" stroke="#5F9A5C" stroke-width="1.6" stroke-dasharray="2 3"/>
  <text x="85" y="70" font-size="11" fill="#5F9A5C">h</text>
  <text x="55" y="18" font-size="11" font-weight="700">S</text>
  </svg>`,
  bank:[
    {p:"Какая доля от объёма цилиндра составляет объём конуса с теми же R и h?",opts:["Одна треть","Половина"],correct:0}
  ]},

{ n:"Шар",
  explain:"<b>Шар</b> — тело, состоящее из всех точек пространства, находящихся от центра на расстоянии не больше радиуса R. Объём шара: V = (4/3)πR³.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <circle cx="80" cy="80" r="60" fill="#9973B8" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="80" cy="80" rx="60" ry="18" fill="none" stroke="#2B2A26" stroke-width="1.2" stroke-dasharray="3 3"/>
  <circle cx="80" cy="80" r="2.5" fill="#2B2A26"/>
  <line x1="80" y1="80" x2="132" y2="80" stroke="#D6524F" stroke-width="2"/>
  <text x="98" y="72" font-size="12" fill="#D6524F">R</text>
  <text x="86" y="86" font-size="10">O</text>
  </svg>`,
  bank:[
    {p:"По какой формуле вычисляется объём шара?",opts:["V = (4/3)πR³","V = πR²"],correct:0}
  ]},

{ n:"Площадь поверхности сферы",
  explain:"Площадь поверхности сферы (шаровой поверхности) радиусом R вычисляется по формуле S = 4πR².",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <circle cx="80" cy="80" r="60" fill="#9973B8" opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="80" cy="80" rx="60" ry="18" fill="none" stroke="#725189" stroke-width="1.2"/>
  <ellipse cx="80" cy="80" rx="22" ry="60" fill="none" stroke="#725189" stroke-width="1.2"/>
  <line x1="80" y1="80" x2="130" y2="47" stroke="#D6524F" stroke-width="2"/>
  <text x="100" y="58" font-size="12" fill="#D6524F">R</text>
  <text x="70" y="18" font-size="11" text-anchor="middle" fill="#736C5E">S = 4πR²</text>
  </svg>`,
  bank:[
    {p:"По какой формуле вычисляется площадь поверхности сферы?",opts:["S = 4πR²","S = 2πR"],correct:0}
  ]},

{ n:"Площадь боковой поверхности цилиндра",
  explain:"Площадь боковой поверхности цилиндра вычисляется по формуле S = 2πRh, где R — радиус основания, h — высота цилиндра.",
  svg:`<svg viewBox="0 0 260 150" width="260">
  <ellipse cx="45" cy="25" rx="35" ry="12" fill="#3B6EA5" opacity="0.2" stroke="#2B2A26" stroke-width="2"/>
  <line x1="10" y1="25" x2="10" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="25" x2="80" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <path d="M10,95 A35 12 0 0 0 80,95" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M10,95 A35 12 0 0 1 80,95" fill="none" stroke="#2B2A26" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="45" y="130" font-size="10" text-anchor="middle" fill="#736C5E">R, h</text>
  <path d="M120 25l16 0" stroke="#736C5E" stroke-width="1.6" marker-end="url(#arw11)"/>
  <defs><marker id="arw11" markerWidth="7" markerHeight="7" refX="4" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#736C5E"/></marker></defs>
  <rect x="155" y="15" width="90" height="70" fill="#3B6EA5" opacity="0.2" stroke="#2B2A26" stroke-width="2"/>
  <text x="200" y="10" font-size="10" text-anchor="middle" fill="#D6524F">2πR</text>
  <text x="150" y="55" font-size="10" fill="#5F9A5C">h</text>
  <text x="200" y="98" font-size="7" text-anchor="middle" fill="#736C5E">развёртка боковой поверхности</text>
  </svg>`,
  bank:[
    {p:"По какой формуле вычисляется площадь боковой поверхности цилиндра?",opts:["S = 2πRh","S = πR²h"],correct:0}
  ]},

{ n:"Вписанные и описанные тела",
  explain:"Тело называется <b>вписанным</b> в другое, если все его точки принадлежат этому телу; <b>описанным</b> — если оно содержит другое тело внутри себя (например, шар, вписанный в цилиндр).",
  svg:`<svg viewBox="0 0 160 180" width="160">
  <ellipse cx="80" cy="30" rx="55" ry="16" fill="#3B6EA5" opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <line x1="25" y1="30" x2="25" y2="140" stroke="#2B2A26" stroke-width="2"/>
  <line x1="135" y1="30" x2="135" y2="140" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25,140 A55 16 0 0 0 135,140" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25,140 A55 16 0 0 1 135,140" fill="none" stroke="#2B2A26" stroke-width="1.2" stroke-dasharray="3 3"/>
  <circle cx="80" cy="85" r="55" fill="#D6524F" opacity="0.18" stroke="#A83836" stroke-width="1.6"/>
  <text x="80" y="164" font-size="10" text-anchor="middle" fill="#736C5E">шар вписан в цилиндр</text>
  </svg>`,
  bank:[
    {p:"Что значит, что шар вписан в цилиндр?",opts:["Шар касается цилиндра изнутри, находясь внутри него","Шар находится далеко за пределами цилиндра"],correct:0}
  ]},

{ n:"Симметрия тел в пространстве",
  explain:"Тело обладает <b>осевой симметрией</b>, если при повороте вокруг оси на определённый угол оно совпадает само с собой. <b>Центральная симметрия</b> — совпадение при отражении через точку-центр.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <ellipse cx="80" cy="35" rx="45" ry="14" fill="#3B6EA5" opacity="0.2" stroke="#2B2A26" stroke-width="2"/>
  <line x1="35" y1="35" x2="35" y2="115" stroke="#2B2A26" stroke-width="2"/>
  <line x1="125" y1="35" x2="125" y2="115" stroke="#2B2A26" stroke-width="2"/>
  <path d="M35,115 A45 14 0 0 0 125,115" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M35,115 A45 14 0 0 1 125,115" fill="none" stroke="#2B2A26" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="80" y1="10" x2="80" y2="140" stroke="#D6524F" stroke-width="1.6" stroke-dasharray="4 3"/>
  <path d="M100,18 A22 22 0 0 1 100,50" fill="none" stroke="#D6524F" stroke-width="1.4" marker-end="url(#arwsym)"/>
  <defs><marker id="arwsym" markerWidth="7" markerHeight="7" refX="4" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#D6524F"/></marker></defs>
  <text x="80" y="150" font-size="10" text-anchor="middle" fill="#736C5E">ось симметрии</text>
  </svg>`,
  bank:[
    {p:"Что такое осевая симметрия тела?",opts:["Совпадение с собой при повороте вокруг оси","Совпадение при любом случайном движении"],correct:0}
  ]},

{ n:"Комбинации многогранников и тел вращения",
  explain:"В задачах часто встречаются комбинации фигур: пирамида, вписанная в конус, или шар, вписанный в куб, — важно понимать, как соотносятся их размеры.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <ellipse cx="80" cy="130" rx="55" ry="16" fill="#E3922E" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="20" x2="25" y2="130" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="20" x2="135" y2="130" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25,130 A55 16 0 0 0 135,130" fill="none" stroke="#2B2A26" stroke-width="1.2" stroke-dasharray="3 3"/>
  <polygon points="80,20 47,122 113,122" fill="#3B6EA5" opacity="0.25" stroke="#284D77" stroke-width="2"/>
  <text x="80" y="150" font-size="10" text-anchor="middle" fill="#736C5E">пирамида вписана в конус</text>
  </svg>`,
  bank:[
    {p:"Что важно понимать при решении задач с комбинациями фигур?",opts:["Как соотносятся размеры фигур","Только цвет фигур"],correct:0}
  ]},

{ n:"Векторы в пространстве",
  explain:"Понятие вектора распространяется и на пространство: вектор в пространстве задаётся тремя координатами (x, y, z) и характеризуется длиной и направлением.",
  svg:`<svg viewBox="0 0 180 170" width="180">
  <line x1="90" y1="140" x2="90" y2="15" stroke="#2B2A26" stroke-width="1.6"/>
  <line x1="90" y1="140" x2="165" y2="120" stroke="#2B2A26" stroke-width="1.6"/>
  <line x1="90" y1="140" x2="20" y2="110" stroke="#2B2A26" stroke-width="1.6"/>
  <text x="94" y="18" font-size="11" fill="#736C5E">z</text>
  <text x="168" y="122" font-size="11" fill="#736C5E">x</text>
  <text x="10" y="112" font-size="11" fill="#736C5E">y</text>
  <line x1="90" y1="140" x2="130" y2="60" stroke="#3B6EA5" stroke-width="2.5"/>
  <polygon points="130,60 116,68 122,75" fill="#3B6EA5"/>
  <path d="M130,60 L145,70 L110,90 L95,80 Z" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="135" y="55" font-size="9" fill="#3B6EA5">a(x;y;z)</text>
  </svg>`,
  bank:[
    {p:"Сколькими координатами задаётся вектор в пространстве?",opts:["Тремя (x, y, z)","Двумя"],correct:0}
  ]},

{ n:"Применение интеграла для вычисления объёмов",
  explain:"Объёмы тел вращения (шар, конус, цилиндр) можно вычислить с помощью определённого интеграла, суммируя объёмы бесконечно тонких слоёв тела.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <ellipse cx="80" cy="130" rx="50" ry="13" fill="#9973B8" opacity="0.2" stroke="#2B2A26" stroke-width="1.4"/>
  <ellipse cx="80" cy="112" rx="42" ry="11" fill="#9973B8" opacity="0.2" stroke="#2B2A26" stroke-width="1.2"/>
  <ellipse cx="80" cy="94" rx="33" ry="9" fill="#9973B8" opacity="0.2" stroke="#2B2A26" stroke-width="1.2"/>
  <ellipse cx="80" cy="76" rx="23" ry="6.5" fill="#9973B8" opacity="0.2" stroke="#2B2A26" stroke-width="1.2"/>
  <ellipse cx="80" cy="58" rx="12" ry="3.5" fill="#9973B8" opacity="0.2" stroke="#2B2A26" stroke-width="1.2"/>
  <line x1="80" y1="45" x2="80" y2="130" stroke="#D6524F" stroke-width="1.4" stroke-dasharray="3 3"/>
  <path d="M30,140 L130,140" stroke="#2B2A26" stroke-width="1.4"/>
  <text x="80" y="153" font-size="10" text-anchor="middle" fill="#736C5E">V = ∫ S(x) dx</text>
  </svg>`,
  bank:[
    {p:"Что используют для точного вычисления объёмов тел вращения?",opts:["Определённый интеграл","Только линейку"],correct:0}
  ]}

];
