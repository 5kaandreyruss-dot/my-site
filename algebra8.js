/* Алгебра, 8 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 7 класса: квадратные корни, квадратные уравнения, квадратичная функция. */

const ALGEBRA8_MOD = [

{ n:"Квадратный корень",
  explain:"<b>Квадратный корень</b> из числа a — это число, квадрат которого равен a. Обозначается √a. Например, √9 = 3, потому что 3² = 9.",
  svg:`<svg viewBox="0 0 160 160" width="160">
  <rect x="20" y="20" width="90" height="90" fill="#3B6EA5" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <text x="65" y="72" font-size="20" text-anchor="middle" fill="#fff">S=9</text>
  <text x="65" y="14" font-size="12" text-anchor="middle" fill="#2B2A26">3</text>
  <text x="10" y="70" font-size="12" text-anchor="middle" fill="#2B2A26">3</text>
  </svg>`,
  bank:[
    {p:"Чему равен √9?",opts:["3","9","81"],correct:0},
    {p:"Чему равен √16?",opts:["4","8","16"],correct:0},
    {p:"Чему равен √25?",opts:["5","25","10"],correct:0},
    {p:"Может ли квадратный корень из отрицательного числа быть обычным (действительным) числом?",opts:["Нет","Да, всегда"],correct:0}
  ]},

{ n:"Свойства квадратных корней",
  explain:"Квадратные корни можно перемножать: √a × √b = √(ab). А также извлекать из дроби: √(a/b) = √a / √b (при a,b ≥ 0).",
  svg:`<svg viewBox="0 0 260 80" width="260">
  <text x="15" y="45" font-size="18" fill="#3B6EA5" font-weight="700">√4</text>
  <text x="55" y="45" font-size="18" fill="#2B2A26">×</text>
  <text x="72" y="45" font-size="18" fill="#5F9A5C" font-weight="700">√9</text>
  <text x="112" y="45" font-size="18" fill="#2B2A26">=</text>
  <text x="130" y="45" font-size="18" fill="#E3922E" font-weight="700">√36</text>
  <text x="185" y="45" font-size="18" fill="#2B2A26">=</text>
  <text x="205" y="45" font-size="18" fill="#A83836" font-weight="700">6</text>
  </svg>`,
  bank:[
    {p:"Чему равно √4 × √9?",opts:["6 (потому что √36=6)","13","36"],correct:0},
    {p:"Чему равно √(4/9)?",opts:["2/3","4/9","2/9"],correct:0}
  ]},

{ n:"Квадратные уравнения",
  explain:"<b>Квадратное уравнение</b> имеет вид ax² + bx + c = 0, где a ≠ 0. Оно может иметь два корня, один корень или не иметь корней среди действительных чисел.",
  svg:`<svg viewBox="0 0 200 175" width="200">
  <line x1="10" y1="130" x2="190" y2="130" stroke="#2B2A26" stroke-width="2"/>
  <path d="M30 40 Q100 165 170 40" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <circle cx="55" cy="130" r="4" fill="#D6524F"/>
  <circle cx="145" cy="130" r="4" fill="#D6524F"/>
  <text x="55" y="148" font-size="11" text-anchor="middle" fill="#A83836">x₁</text>
  <text x="145" y="148" font-size="11" text-anchor="middle" fill="#A83836">x₂</text>
  </svg>`,
  bank:[
    {p:"Как выглядит общий вид квадратного уравнения?",opts:["ax² + bx + c = 0","ax + b = 0"],correct:0},
    {p:"Сколько действительных корней может иметь квадратное уравнение?",opts:["Два, один или ни одного","Всегда ровно один"],correct:0},
    {p:"Реши уравнение: x² = 25. Какие есть решения?",opts:["x = 5 или x = −5","Только x = 5"],correct:0}
  ]},

{ n:"Дискриминант",
  explain:"<b>Дискриминант</b> D = b² − 4ac помогает узнать число корней уравнения ax²+bx+c=0: если D > 0 — два корня, D = 0 — один корень, D < 0 — действительных корней нет.",
  svg:`<svg viewBox="0 0 280 110" width="280">
  <g>
  <line x1="10" y1="80" x2="80" y2="80" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M18 30 Q45 100 72 30" fill="none" stroke="#5F9A5C" stroke-width="2"/>
  <text x="45" y="100" font-size="10" text-anchor="middle" fill="#3F7A3D">D&gt;0</text>
  </g>
  <g>
  <line x1="100" y1="80" x2="170" y2="80" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M108 30 Q135 80 162 30" fill="none" stroke="#E3922E" stroke-width="2"/>
  <text x="135" y="100" font-size="10" text-anchor="middle" fill="#B96F16">D=0</text>
  </g>
  <g>
  <line x1="190" y1="80" x2="260" y2="80" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M198 60 Q225 20 252 60" fill="none" stroke="#D6524F" stroke-width="2"/>
  <text x="225" y="100" font-size="10" text-anchor="middle" fill="#A83836">D&lt;0</text>
  </g>
  </svg>`,
  bank:[
    {p:"Как обозначают дискриминант?",opts:["D","X","Y"],correct:0},
    {p:"Сколько корней у уравнения, если D > 0?",opts:["Два","Один","Ни одного"],correct:0},
    {p:"Сколько корней у уравнения, если D = 0?",opts:["Один","Два"],correct:0},
    {p:"Сколько действительных корней у уравнения, если D < 0?",opts:["Ни одного","Два"],correct:0}
  ]},

{ n:"Теорема Виета",
  explain:"Для приведённого квадратного уравнения x² + px + q = 0 теорема <b>Виета</b> утверждает: сумма корней равна −p, а произведение корней равно q.",
  svg:`<svg viewBox="0 0 220 90" width="220">
  <line x1="15" y1="45" x2="205" y2="45" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="205,45 197,40 197,50" fill="#2B2A26"/>
  <g stroke="#2B2A26" stroke-width="2">
  <line x1="70" y1="39" x2="70" y2="51"/><line x1="120" y1="39" x2="120" y2="51"/>
  </g>
  <circle cx="70" cy="45" r="5" fill="#3B6EA5"/>
  <circle cx="120" cy="45" r="5" fill="#D6524F"/>
  <text x="70" y="65" font-size="11" text-anchor="middle" fill="#284D77">x₁=2</text>
  <text x="120" y="65" font-size="11" text-anchor="middle" fill="#A83836">x₂=3</text>
  <text x="95" y="85" font-size="11" text-anchor="middle" fill="#736C5E">сумма=5, произв.=6</text>
  </svg>`,
  bank:[
    {p:"Что связывает теорема Виета?",opts:["Сумму и произведение корней с коэффициентами","Только один корень с коэффициентом"],correct:0},
    {p:"В уравнении x² − 5x + 6 = 0 чему равна сумма корней?",opts:["5","6","−5"],correct:0},
    {p:"В уравнении x² − 5x + 6 = 0 чему равно произведение корней?",opts:["6","5","−6"],correct:0}
  ]},

{ n:"Квадратичная функция",
  explain:"<b>Квадратичная функция</b> y = ax² + bx + c (a ≠ 0) имеет графиком <b>параболу</b>. Если a > 0, ветви параболы направлены вверх, если a < 0 — вниз.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <line x1="10" y1="70" x2="230" y2="70" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M25 120 Q75 20 125 120" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="75" y="135" font-size="11" text-anchor="middle" fill="#284D77">a&gt;0</text>
  <path d="M135 20 Q185 120 225 20" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <text x="185" y="15" font-size="11" text-anchor="middle" fill="#A83836">a&lt;0</text>
  </svg>`,
  bank:[
    {p:"Как называется график квадратичной функции?",opts:["Парабола","Прямая линия"],correct:0},
    {p:"Куда направлены ветви параболы, если a > 0?",opts:["Вверх","Вниз"],correct:0},
    {p:"Куда направлены ветви параболы, если a < 0?",opts:["Вниз","Вверх"],correct:0}
  ]},

{ n:"Неравенства",
  explain:"<b>Неравенство</b> сравнивает выражения знаками >, <, ≥, ≤. При умножении или делении обеих частей на отрицательное число знак неравенства меняется на противоположный.",
  svg:`<svg viewBox="0 0 220 60" width="220">
  <line x1="15" y1="30" x2="205" y2="30" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="205,30 197,25 197,35" fill="#2B2A26"/>
  <line x1="120" y1="30" x2="200" y2="30" stroke="#3B6EA5" stroke-width="4"/>
  <circle cx="120" cy="30" r="6" fill="#FFFEF8" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="120" y="50" font-size="11" text-anchor="middle">3</text>
  </svg>`,
  bank:[
    {p:"Что происходит со знаком неравенства при умножении на отрицательное число?",opts:["Меняется на противоположный","Остаётся тем же"],correct:0},
    {p:"Решение неравенства x > 3 включает число 3?",opts:["Нет, не включает","Да, включает"],correct:0},
    {p:"Решение неравенства x ≥ 3 включает число 3?",opts:["Да, включает","Нет"],correct:0}
  ]},

{ n:"Системы уравнений",
  explain:"<b>Система уравнений</b> — несколько уравнений, которые нужно решить одновременно, найдя общее решение для всех переменных.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <line x1="20" y1="180" x2="190" y2="180" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="180" x2="20" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <line x1="25" y1="160" x2="180" y2="40" stroke="#3B6EA5" stroke-width="2.5"/>
  <line x1="25" y1="50" x2="180" y2="160" stroke="#D6524F" stroke-width="2.5"/>
  <circle cx="102" cy="100" r="5" fill="#2B2A26"/>
  </svg>`,
  bank:[
    {p:"Что значит решить систему уравнений?",opts:["Найти значения переменных, подходящие для всех уравнений сразу","Решить только первое уравнение"],correct:0},
    {p:"Одним из способов решения системы является метод...",opts:["Подстановки","Только угадывания"],correct:0}
  ]},

{ n:"Стандартный вид числа",
  explain:"Очень большие или маленькие числа удобно записывать в <b>стандартном виде</b>: a × 10ⁿ, где 1 ≤ a < 10. Например, 5000 = 5 × 10³.",
  svg:`<svg viewBox="0 0 260 70" width="260">
  <text x="20" y="45" font-size="20" fill="#2B2A26">5000</text>
  <text x="90" y="45" font-size="20" fill="#736C5E">=</text>
  <text x="115" y="45" font-size="20" fill="#3B6EA5" font-weight="700">5</text>
  <text x="135" y="45" font-size="20" fill="#2B2A26">×</text>
  <text x="155" y="35" font-size="16" fill="#D6524F">10</text>
  <text x="180" y="25" font-size="12" fill="#A83836">3</text>
  </svg>`,
  bank:[
    {p:"Как записать 5000 в стандартном виде?",opts:["5 × 10³","5 × 10⁴","50 × 10²"],correct:0},
    {p:"В стандартном виде a × 10ⁿ число a должно быть...",opts:["От 1 до 10","Любым числом"],correct:0}
  ]},

{ n:"Рациональные дроби",
  explain:"<b>Рациональная дробь</b> — дробь, где в числителе и знаменателе стоят многочлены, например (x+1)/(x−2). Знаменатель дроби не может быть равен нулю.",
  svg:`<svg viewBox="0 0 160 100" width="160">
  <text x="80" y="40" font-size="20" text-anchor="middle" fill="#2B2A26">x+1</text>
  <line x1="30" y1="50" x2="130" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <text x="80" y="75" font-size="20" text-anchor="middle" fill="#2B2A26">x−2</text>
  <text x="80" y="95" font-size="11" text-anchor="middle" fill="#A83836">x ≠ 2</text>
  </svg>`,
  bank:[
    {p:"Может ли знаменатель рациональной дроби быть равен нулю?",opts:["Нет, никогда","Да, всегда"],correct:0},
    {p:"Что стоит в числителе и знаменателе рациональной дроби?",opts:["Многочлены","Только простые числа"],correct:0}
  ]},

{ n:"Сложение и вычитание рациональных дробей",
  explain:"Чтобы сложить или вычесть дроби с одинаковым знаменателем, складывают (вычитают) числители, а знаменатель оставляют тем же: a/c + b/c = (a+b)/c.",
  svg:`<svg viewBox="0 0 220 80" width="220">
  <text x="20" y="30" font-size="16" fill="#2B2A26">2</text><line x1="12" y1="38" x2="36" y2="38" stroke="#2B2A26" stroke-width="1.5"/><text x="20" y="55" font-size="16" fill="#2B2A26">x</text>
  <text x="46" y="45" font-size="18" fill="#2B2A26">+</text>
  <text x="70" y="30" font-size="16" fill="#2B2A26">3</text><line x1="62" y1="38" x2="86" y2="38" stroke="#2B2A26" stroke-width="1.5"/><text x="70" y="55" font-size="16" fill="#2B2A26">x</text>
  <text x="98" y="45" font-size="18" fill="#2B2A26">=</text>
  <text x="130" y="30" font-size="16" fill="#3B6EA5" font-weight="700">5</text><line x1="120" y1="38" x2="146" y2="38" stroke="#284D77" stroke-width="1.5"/><text x="130" y="55" font-size="16" fill="#3B6EA5" font-weight="700">x</text>
  </svg>`,
  bank:[
    {p:"Как сложить дроби с одинаковым знаменателем?",opts:["Сложить числители, знаменатель оставить","Сложить и числители, и знаменатели"],correct:0},
    {p:"Чему равно 2/x + 3/x?",opts:["5/x","5/(2x)"],correct:0}
  ]},

{ n:"Умножение и деление рациональных дробей",
  explain:"При умножении дробей перемножаются числители и знаменатели отдельно. При делении дробь делят, умножая на перевёрнутую (обратную) вторую дробь.",
  svg:`<svg viewBox="0 0 220 70" width="220">
  <text x="20" y="30" font-size="15" fill="#3B6EA5">a</text><line x1="10" y1="36" x2="34" y2="36" stroke="#2B2A26" stroke-width="1.5"/><text x="20" y="52" font-size="15" fill="#3B6EA5">b</text>
  <text x="46" y="42" font-size="18" fill="#2B2A26">×</text>
  <text x="70" y="30" font-size="15" fill="#5F9A5C">c</text><line x1="60" y1="36" x2="84" y2="36" stroke="#2B2A26" stroke-width="1.5"/><text x="70" y="52" font-size="15" fill="#5F9A5C">d</text>
  <text x="96" y="42" font-size="18" fill="#2B2A26">=</text>
  <text x="130" y="30" font-size="15" fill="#D6524F">ac</text><line x1="118" y1="36" x2="150" y2="36" stroke="#2B2A26" stroke-width="1.5"/><text x="130" y="52" font-size="15" fill="#D6524F">bd</text>
  </svg>`,
  bank:[
    {p:"Как умножить две дроби?",opts:["Перемножить числители и знаменатели отдельно","Сложить числители"],correct:0},
    {p:"Что делают при делении на дробь?",opts:["Умножают на перевёрнутую дробь","Делят числители"],correct:0}
  ]},

{ n:"Графическое решение уравнений",
  explain:"Решение уравнения f(x) = g(x) можно найти графически — как точки пересечения графиков функций y = f(x) и y = g(x).",
  svg:`<svg viewBox="0 0 200 180" width="200">
  <line x1="15" y1="160" x2="190" y2="160" stroke="#2B2A26" stroke-width="2"/>
  <line x1="15" y1="160" x2="15" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <line x1="25" y1="140" x2="175" y2="35" stroke="#3B6EA5" stroke-width="2.5"/>
  <path d="M25 145 Q100 20 175 100" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <circle cx="98" cy="88" r="5" fill="#2B2A26"/>
  <text x="105" y="82" font-size="10" fill="#2B2A26">решение</text>
  </svg>`,
  bank:[
    {p:"Что показывают точки пересечения графиков y=f(x) и y=g(x)?",opts:["Решения уравнения f(x)=g(x)","Ничего не показывают"],correct:0}
  ]},

{ n:"Возрастание и убывание функции",
  explain:"Функция <b>возрастает</b> на промежутке, если при увеличении x значение y тоже увеличивается. Функция <b>убывает</b>, если при увеличении x значение y уменьшается.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <line x1="10" y1="100" x2="210" y2="100" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M20 95 Q70 15 120 50 Q160 80 200 95" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="45" y="55" font-size="11" fill="#3F7A3D">возрастает</text>
  <text x="150" y="55" font-size="11" fill="#A83836">убывает</text>
  </svg>`,
  bank:[
    {p:"Что значит, что функция возрастает?",opts:["При увеличении x, y тоже увеличивается","При увеличении x, y уменьшается"],correct:0},
    {p:"Что значит, что функция убывает?",opts:["При увеличении x, y уменьшается","При увеличении x, y тоже увеличивается"],correct:0}
  ]}

];
