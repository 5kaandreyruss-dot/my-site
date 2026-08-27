/* Алгебра и начала анализа, 10 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Тригонометрия, степенная/показательная/логарифмическая функции, введение в производную. */

const ALGEBRA10_MOD = [

{ n:"Радианная мера угла",
  explain:"Угол можно измерять не только в градусах, но и в <b>радианах</b>. Полный круг составляет 360° или 2π радиан, значит 180° = π радиан.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <circle cx="80" cy="80" r="60" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="80" x2="140" y2="80" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="80" x2="20" y2="80" stroke="#3B6EA5" stroke-width="2"/>
  <path d="M110 80 A30 30 0 0 1 50 80" fill="none" stroke="#E3922E" stroke-width="2"/>
  <text x="80" y="60" font-size="11" text-anchor="middle" fill="#B96F16">180° = π</text>
  </svg>`,
  bank:[
    {p:"Скольким радианам равен угол 180°?",opts:["π радиан","2π радиан"],correct:0},
    {p:"Скольким радианам равен полный круг (360°)?",opts:["2π радиан","π радиан"],correct:0}
  ]},

{ n:"Синус, косинус, тангенс",
  explain:"<b>Синус, косинус и тангенс</b> — тригонометрические функции угла, определённые через координаты точки на единичной окружности. Значения синуса и косинуса всегда находятся между −1 и 1.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <circle cx="80" cy="80" r="60" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="10" y1="80" x2="150" y2="80" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="80" y1="10" x2="80" y2="150" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="80" y1="80" x2="122" y2="45" stroke="#D6524F" stroke-width="2"/>
  <line x1="122" y1="45" x2="122" y2="80" stroke="#5F9A5C" stroke-width="2" stroke-dasharray="3 3"/>
  <line x1="80" y1="80" x2="122" y2="80" stroke="#3B6EA5" stroke-width="2" stroke-dasharray="3 3"/>
  <circle cx="122" cy="45" r="4" fill="#D6524F"/>
  <text x="128" y="65" font-size="10" fill="#3F7A3D">sin α</text>
  <text x="95" y="95" font-size="10" fill="#284D77">cos α</text>
  </svg>`,
  bank:[
    {p:"В каких пределах находятся значения синуса и косинуса?",opts:["От −1 до 1","От 0 до 100"],correct:0},
    {p:"Чему равен sin(0°)?",opts:["0","1"],correct:0},
    {p:"Чему равен cos(0°)?",opts:["1","0"],correct:0}
  ]},

{ n:"Основное тригонометрическое тождество",
  explain:"Для любого угла α выполняется тождество: sin²α + cos²α = 1. Это одно из важнейших соотношений в тригонометрии.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <circle cx="80" cy="80" r="60" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="80" y1="80" x2="122" y2="45" stroke="#2B2A26" stroke-width="2"/>
  <line x1="122" y1="45" x2="122" y2="80" stroke="#5F9A5C" stroke-width="2"/>
  <line x1="80" y1="80" x2="122" y2="80" stroke="#3B6EA5" stroke-width="2"/>
  <text x="95" y="60" font-size="11" fill="#2B2A26">1</text>
  <text x="128" y="65" font-size="10" fill="#3F7A3D">sinα</text>
  <text x="95" y="95" font-size="10" fill="#284D77">cosα</text>
  <text x="80" y="140" font-size="11" text-anchor="middle" fill="#736C5E">sin²α+cos²α=1</text>
  </svg>`,
  bank:[
    {p:"Чему равна сумма sin²α + cos²α для любого угла?",opts:["1","0"],correct:0}
  ]},

{ n:"Тригонометрические уравнения",
  explain:"Простейшее тригонометрическое уравнение вида sin x = a решается с помощью формул общего решения, поскольку синус — периодическая функция и принимает одно значение бесконечно много раз.",
  svg:`<svg viewBox="0 0 260 100" width="260">
  <line x1="10" y1="50" x2="250" y2="50" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M10 50 Q35 10 60 50 T110 50 T160 50 T210 50 T260 50" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <line x1="60" y1="15" x2="60" y2="50" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="160" y1="15" x2="160" y2="50" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="60" cy="15" r="4" fill="#D6524F"/><circle cx="160" cy="15" r="4" fill="#D6524F"/>
  <text x="60" y="8" font-size="9" text-anchor="middle" fill="#A83836">решение</text>
  </svg>`,
  bank:[
    {p:"Почему у тригонометрического уравнения обычно бесконечно много решений?",opts:["Синус и косинус — периодические функции","Потому что уравнение неправильно составлено"],correct:0}
  ]},

{ n:"Степенная функция и её свойства",
  explain:"Свойства степенной функции y = xⁿ зависят от показателя n: при чётном n функция чётная (график симметричен относительно оси Y), при нечётном — нечётная (симметрична относительно начала координат).",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <line x1="10" y1="70" x2="190" y2="70" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="100" y1="10" x2="100" y2="130" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M30 120 Q100 20 170 120" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="100" y="135" font-size="11" text-anchor="middle" fill="#284D77">чётная: симметрия по Oy</text>
  </svg>`,
  bank:[
    {p:"Какой функция y=xⁿ является при чётном n?",opts:["Чётной","Нечётной"],correct:0}
  ]},

{ n:"Показательная функция",
  explain:"<b>Показательная функция</b> имеет вид y = aˣ, где a > 0, a ≠ 1. Если a > 1, функция возрастает; если 0 < a < 1, функция убывает.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <line x1="15" y1="140" x2="190" y2="140" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="190,140 182,135 182,145" fill="#2B2A26"/>
  <line x1="15" y1="140" x2="15" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="15,15 10,23 20,23" fill="#2B2A26"/>
  <path d="M20 135 Q80 130 120 90 T175 25" fill="none" stroke="#E3922E" stroke-width="2.5"/>
  <circle cx="45" cy="130" r="3.5" fill="#B96F16"/>
  <text x="52" y="128" font-size="10" fill="#B96F16">(0;1)</text>
  </svg>`,
  bank:[
    {p:"Как ведёт себя показательная функция y=aˣ, если a > 1?",opts:["Возрастает","Убывает"],correct:0},
    {p:"Чему равно значение aˣ при x=0 (для любого a>0)?",opts:["1","0"],correct:0}
  ]},

{ n:"Логарифм",
  explain:"<b>Логарифм</b> числа b по основанию a (a>0, a≠1) — это показатель степени, в которую нужно возвести a, чтобы получить b. Обозначается logₐb. Например, log₂8 = 3, потому что 2³=8.",
  svg:`<svg viewBox="0 0 220 70" width="220">
  <text x="15" y="45" font-size="18" fill="#3B6EA5" font-weight="700">log₂8</text>
  <text x="90" y="45" font-size="18" fill="#2B2A26">=</text>
  <text x="110" y="45" font-size="18" fill="#D6524F" font-weight="700">3</text>
  <text x="140" y="45" font-size="14" fill="#736C5E">т.к. 2³=8</text>
  </svg>`,
  bank:[
    {p:"Чему равен log₂8?",opts:["3, потому что 2³=8","8"],correct:0},
    {p:"Чему равен log₁₀100?",opts:["2, потому что 10²=100","100"],correct:0}
  ]},

{ n:"Свойства логарифмов",
  explain:"Логарифм произведения равен сумме логарифмов: logₐ(xy) = logₐx + logₐy. Логарифм частного равен разности логарифмов: logₐ(x/y) = logₐx − logₐy.",
  svg:`<svg viewBox="0 0 260 60" width="260">
  <text x="10" y="38" font-size="16" fill="#2B2A26">logₐ(xy)</text>
  <text x="100" y="38" font-size="16" fill="#2B2A26">=</text>
  <text x="120" y="38" font-size="16" fill="#3B6EA5">logₐx</text>
  <text x="190" y="38" font-size="16" fill="#2B2A26">+</text>
  <text x="205" y="38" font-size="16" fill="#5F9A5C">logₐy</text>
  </svg>`,
  bank:[
    {p:"Чему равен logₐ(xy)?",opts:["logₐx + logₐy","logₐx × logₐy"],correct:0}
  ]},

{ n:"Понятие о производной",
  explain:"<b>Производная</b> функции в точке показывает скорость изменения функции — насколько быстро меняется значение функции при малом изменении аргумента. Геометрически производная — это угловой коэффициент касательной к графику.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <line x1="15" y1="140" x2="190" y2="140" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M20 130 Q100 10 180 60" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <line x1="55" y1="130" x2="150" y2="45" stroke="#D6524F" stroke-width="2"/>
  <circle cx="100" cy="88" r="4" fill="#A83836"/>
  <text x="150" y="40" font-size="7" fill="#A83836">касательная</text>
  </svg>`,
  bank:[
    {p:"Что показывает производная функции?",opts:["Скорость изменения функции","Только значение функции в точке"],correct:0},
    {p:"Чем является производная геометрически?",opts:["Угловым коэффициентом касательной","Площадью под графиком"],correct:0}
  ]},

{ n:"Формулы приведения",
  explain:"<b>Формулы приведения</b> позволяют выразить тригонометрическую функцию любого угла через функцию острого угла, например sin(180°−α) = sin α.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <circle cx="80" cy="80" r="60" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="10" y1="80" x2="150" y2="80" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="80" y1="80" x2="122" y2="45" stroke="#3B6EA5" stroke-width="2"/>
  <line x1="80" y1="80" x2="38" y2="45" stroke="#D6524F" stroke-width="2"/>
  <text x="128" y="65" font-size="10" fill="#284D77">α</text>
  <text x="30" y="65" font-size="10" fill="#A83836">180°−α</text>
  </svg>`,
  bank:[
    {p:"Для чего нужны формулы приведения?",opts:["Выразить функцию любого угла через острый угол","Только для деления чисел"],correct:0}
  ]},

{ n:"Тангенс и котангенс",
  explain:"<b>Тангенс</b> угла — отношение синуса к косинусу: tg α = sin α / cos α. <b>Котангенс</b> — обратная величина: ctg α = cos α / sin α.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <polygon points="20,110 150,110 150,30" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="80" y="125" font-size="10" text-anchor="middle" fill="#284D77">cos α</text>
  <text x="160" y="72" font-size="10" fill="#A83836">sin α</text>
  <text x="60" y="60" font-size="11" fill="#3F7A3D">tgα=sinα/cosα</text>
  </svg>`,
  bank:[
    {p:"Как выражается тангенс через синус и косинус?",opts:["tg α = sin α / cos α","tg α = cos α / sin α"],correct:0},
    {p:"Чему равен тангенс, если косинус угла равен нулю?",opts:["Тангенс не определён","Тангенс равен нулю"],correct:0}
  ]},

{ n:"Область значений функции",
  explain:"<b>Область значений</b> функции — множество всех значений y, которые функция может принимать. Например, для y = sin x область значений — от −1 до 1.",
  svg:`<svg viewBox="0 0 254 100" width="254">
  <line x1="10" y1="50" x2="230" y2="50" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="10" y1="20" x2="230" y2="20" stroke="#5F9A5C" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="10" y1="80" x2="230" y2="80" stroke="#5F9A5C" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M10 50 Q35 20 60 50 T110 50 T160 50 T210 50" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="235" y="24" font-size="10" fill="#3F7A3D">1</text>
  <text x="235" y="84" font-size="10" fill="#3F7A3D">−1</text>
  </svg>`,
  bank:[
    {p:"Что такое область значений функции?",opts:["Множество всех возможных значений y","Множество значений x"],correct:0},
    {p:"Какова область значений функции y = sin x?",opts:["От −1 до 1","От 0 до бесконечности"],correct:0}
  ]},

{ n:"Чётные и нечётные функции",
  explain:"Функция <b>чётная</b>, если f(−x) = f(x) (график симметричен относительно оси Y). Функция <b>нечётная</b>, если f(−x) = −f(x) (график симметричен относительно начала координат).",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <line x1="10" y1="65" x2="110" y2="65" stroke="#2B2A26" stroke-width="1"/>
  <line x1="60" y1="10" x2="60" y2="120" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M20 110 Q60 15 100 110" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="60" y="128" font-size="10" text-anchor="middle" fill="#284D77">чётная</text>
  <line x1="140" y1="65" x2="230" y2="65" stroke="#2B2A26" stroke-width="1"/>
  <circle cx="185" cy="65" r="2" fill="#2B2A26"/>
  <path d="M150 105 Q185 65 220 25" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <text x="185" y="128" font-size="10" text-anchor="middle" fill="#A83836">нечётная</text>
  </svg>`,
  bank:[
    {p:"Какому условию удовлетворяет чётная функция?",opts:["f(−x) = f(x)","f(−x) = −f(x)"],correct:0},
    {p:"Относительно чего симметричен график чётной функции?",opts:["Относительно оси Y","Относительно начала координат"],correct:0}
  ]}

];
