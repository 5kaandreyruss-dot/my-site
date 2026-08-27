/* Алгебра, 9 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 8 класса: числовые последовательности, прогрессии, системы уравнений второй степени, неравенства. */

const ALGEBRA9_MOD = [

{ n:"Числовая последовательность",
  explain:"<b>Числовая последовательность</b> — это числа, идущие в определённом порядке и пронумерованные: a₁, a₂, a₃, ... Каждое число называется членом последовательности.",
  svg:`<svg viewBox="0 0 240 70" width="240">
  <g fill="#3B6EA5">
  <circle cx="20" cy="35" r="6"/><circle cx="70" cy="35" r="6"/><circle cx="120" cy="35" r="6"/><circle cx="170" cy="35" r="6"/>
  </g>
  <text x="20" y="55" font-size="11" text-anchor="middle">a₁</text>
  <text x="70" y="55" font-size="11" text-anchor="middle">a₂</text>
  <text x="120" y="55" font-size="11" text-anchor="middle">a₃</text>
  <text x="170" y="55" font-size="11" text-anchor="middle">a₄</text>
  <text x="205" y="39" font-size="16" fill="#736C5E">...</text>
  </svg>`,
  bank:[
    {p:"Что такое числовая последовательность?",opts:["Числа в определённом порядке, пронумерованные","Случайный набор чисел без порядка"],correct:0},
    {p:"Как называется каждое число в последовательности?",opts:["Член последовательности","Корень уравнения"],correct:0}
  ]},

{ n:"Арифметическая прогрессия",
  explain:"<b>Арифметическая прогрессия</b> — последовательность, где каждый следующий член получается прибавлением одного и того же числа d (разности). Формула: aₙ = a₁ + (n−1)d.",
  svg:`<svg viewBox="0 0 260 70" width="260">
  <circle cx="20" cy="35" r="6" fill="#3B6EA5"/><text x="20" y="55" font-size="11" text-anchor="middle">2</text>
  <circle cx="90" cy="35" r="6" fill="#3B6EA5"/><text x="90" y="55" font-size="11" text-anchor="middle">5</text>
  <circle cx="160" cy="35" r="6" fill="#3B6EA5"/><text x="160" y="55" font-size="11" text-anchor="middle">8</text>
  <circle cx="230" cy="35" r="6" fill="#3B6EA5"/><text x="230" y="55" font-size="11" text-anchor="middle">11</text>
  <path d="M28 30q30-16 54 0" fill="none" stroke="#E3922E" stroke-width="1.5"/><text x="55" y="14" font-size="10" fill="#B96F16">+3</text>
  <path d="M98 30q30-16 54 0" fill="none" stroke="#E3922E" stroke-width="1.5"/><text x="125" y="14" font-size="10" fill="#B96F16">+3</text>
  <path d="M168 30q30-16 54 0" fill="none" stroke="#E3922E" stroke-width="1.5"/><text x="195" y="14" font-size="10" fill="#B96F16">+3</text>
  </svg>`,
  bank:[
    {p:"Что прибавляется к каждому члену арифметической прогрессии, чтобы получить следующий?",opts:["Одно и то же число (разность d)","Каждый раз разное число"],correct:0},
    {p:"Дана прогрессия 2, 5, 8, 11... Чему равна разность d?",opts:["3","2"],correct:0},
    {p:"В прогрессии 4, 7, 10... чему равен пятый член?",opts:["16","13"],correct:0}
  ]},

{ n:"Сумма арифметической прогрессии",
  explain:"Сумма первых n членов арифметической прогрессии находится по формуле Sₙ = (a₁+aₙ)/2 × n — полусумма первого и последнего членов, умноженная на их количество.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <g stroke="#2B2A26" stroke-width="1.5">
  <line x1="10" y1="20" x2="10" y2="110"/><line x1="190" y1="20" x2="190" y2="110"/>
  </g>
  <rect x="10" y="20" width="60" height="14" fill="#3B6EA5"/><text x="40" y="31" font-size="10" text-anchor="middle" fill="#fff">1</text>
  <rect x="130" y="20" width="60" height="14" fill="#3B6EA5"/><text x="160" y="31" font-size="10" text-anchor="middle" fill="#fff">10</text>
  <path d="M40 34 Q100 60 160 34" fill="none" stroke="#E3922E" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="100" y="70" font-size="11" text-anchor="middle" fill="#B96F16">1+10=11</text>
  <text x="100" y="100" font-size="11" text-anchor="middle" fill="#736C5E">пар: 10÷2=5</text>
  </svg>`,
  bank:[
    {p:"По какой идее считается сумма арифметической прогрессии?",opts:["Полусумма первого и последнего членов × количество","Просто первый член × количество"],correct:0},
    {p:"Прогрессия 1,2,3,...,10. Чему равна сумма первых 10 членов?",opts:["55","100"],correct:0}
  ]},

{ n:"Геометрическая прогрессия",
  explain:"<b>Геометрическая прогрессия</b> — последовательность, где каждый следующий член получается умножением на одно и то же число q (знаменатель прогрессии). Формула: bₙ = b₁ × qⁿ⁻¹.",
  svg:`<svg viewBox="0 0 260 70" width="260">
  <circle cx="20" cy="35" r="6" fill="#9973B8"/><text x="20" y="55" font-size="10" text-anchor="middle">2</text>
  <circle cx="90" cy="35" r="6" fill="#9973B8"/><text x="90" y="55" font-size="10" text-anchor="middle">6</text>
  <circle cx="160" cy="35" r="6" fill="#9973B8"/><text x="160" y="55" font-size="10" text-anchor="middle">18</text>
  <circle cx="230" cy="35" r="6" fill="#9973B8"/><text x="230" y="55" font-size="10" text-anchor="middle">54</text>
  <path d="M28 30q30-16 54 0" fill="none" stroke="#725189" stroke-width="1.5"/><text x="55" y="14" font-size="10" fill="#725189">×3</text>
  <path d="M98 30q30-16 54 0" fill="none" stroke="#725189" stroke-width="1.5"/><text x="125" y="14" font-size="10" fill="#725189">×3</text>
  <path d="M168 30q30-16 54 0" fill="none" stroke="#725189" stroke-width="1.5"/><text x="195" y="14" font-size="10" fill="#725189">×3</text>
  </svg>`,
  bank:[
    {p:"Что делают с членом геометрической прогрессии, чтобы получить следующий?",opts:["Умножают на одно и то же число q","Прибавляют одно и то же число"],correct:0},
    {p:"Дана прогрессия 2, 6, 18, 54... Чему равен знаменатель q?",opts:["3","2"],correct:0},
    {p:"В прогрессии 3, 6, 12... чему равен четвёртый член?",opts:["24","18"],correct:0}
  ]},

{ n:"Квадратные неравенства",
  explain:"<b>Квадратное неравенство</b> вида ax²+bx+c > 0 решают через корни соответствующего уравнения и знак параболы — определяют, где парабола выше или ниже оси x.",
  svg:`<svg viewBox="0 0 200 150" width="200">
  <line x1="10" y1="120" x2="190" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <path d="M30 40 Q100 160 170 40" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <line x1="10" y1="120" x2="55" y2="120" stroke="#5F9A5C" stroke-width="5"/>
  <line x1="145" y1="120" x2="190" y2="120" stroke="#5F9A5C" stroke-width="5"/>
  <circle cx="55" cy="120" r="4" fill="#2B2A26"/>
  <circle cx="145" cy="120" r="4" fill="#2B2A26"/>
  <text x="100" y="140" font-size="11" text-anchor="middle" fill="#3F7A3D">x²−...&gt;0 вне корней</text>
  </svg>`,
  bank:[
    {p:"С помощью чего решают квадратные неравенства?",opts:["Через корни уравнения и знак параболы","Только подбором чисел"],correct:0},
    {p:"Неравенство x² > 0 верно для каких x?",opts:["Для всех x, кроме 0","Только для x=0"],correct:0}
  ]},

{ n:"Системы уравнений второй степени",
  explain:"Система, где хотя бы одно уравнение содержит переменную во второй степени, решается чаще всего методом подстановки: из одного уравнения выражают переменную и подставляют в другое.",
  svg:`<svg viewBox="0 0 200 180" width="200">
  <line x1="15" y1="160" x2="190" y2="160" stroke="#2B2A26" stroke-width="2"/>
  <line x1="15" y1="160" x2="15" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="130" x2="180" y2="50" stroke="#3B6EA5" stroke-width="2.5"/>
  <path d="M25 150 Q105 20 180 150" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <circle cx="55" cy="112" r="5" fill="#2B2A26"/>
  <circle cx="150" cy="65" r="5" fill="#2B2A26"/>
  </svg>`,
  bank:[
    {p:"Каким методом чаще всего решают системы с уравнением второй степени?",opts:["Методом подстановки","Только графическим способом"],correct:0}
  ]},

{ n:"Степенная функция",
  explain:"<b>Степенная функция</b> имеет вид y = xⁿ. При чётном n график симметричен относительно оси y (похож на параболу), при нечётном n — симметричен относительно начала координат.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <line x1="10" y1="70" x2="230" y2="70" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="60" y1="10" x2="60" y2="130" stroke="#2B2A26" stroke-width="1" opacity="0.4"/>
  <path d="M25 120 Q60 20 95 120" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="60" y="135" font-size="10" text-anchor="middle" fill="#284D77">y=x² (чётная)</text>
  <line x1="180" y1="10" x2="180" y2="130" stroke="#2B2A26" stroke-width="1" opacity="0.4"/>
  <path d="M145 115 Q180 70 215 25" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <text x="180" y="135" font-size="10" text-anchor="middle" fill="#A83836">y=x³ (нечётная)</text>
  </svg>`,
  bank:[
    {p:"Как выглядит степенная функция?",opts:["y = xⁿ","y = n/x"],correct:0},
    {p:"На что похож график y=x² (n чётное)?",opts:["На параболу","На прямую линию"],correct:0}
  ]},

{ n:"Область определения функции",
  explain:"<b>Область определения</b> функции — это все значения x, при которых функция имеет смысл (например, знаменатель дроби не равен нулю, подкоренное выражение не отрицательно).",
  svg:`<svg viewBox="0 0 220 60" width="220">
  <line x1="15" y1="30" x2="205" y2="30" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="205,30 197,25 197,35" fill="#2B2A26"/>
  <line x1="15" y1="30" x2="105" y2="30" stroke="#5F9A5C" stroke-width="4"/>
  <line x1="115" y1="30" x2="205" y2="30" stroke="#5F9A5C" stroke-width="4"/>
  <circle cx="110" cy="30" r="6" fill="#FFFEF8" stroke="#D6524F" stroke-width="2.5"/>
  <text x="110" y="50" font-size="11" text-anchor="middle">x=2 исключено</text>
  </svg>`,
  bank:[
    {p:"Что такое область определения функции?",opts:["Все значения x, при которых функция имеет смысл","Только положительные числа"],correct:0},
    {p:"Может ли x входить в область определения, если знаменатель дроби при этом x равен нулю?",opts:["Нет, не может","Да, всегда может"],correct:0}
  ]},

{ n:"Уравнения с параметром (введение)",
  explain:"В некоторых задачах кроме переменной x есть ещё буква-параметр (например, a). Нужно понять, как меняется решение уравнения в зависимости от значения этого параметра.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <line x1="15" y1="140" x2="190" y2="140" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="15" y1="140" x2="15" y2="15" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="25" y1="130" x2="180" y2="30" stroke="#3B6EA5" stroke-width="2" opacity="0.8"/>
  <line x1="25" y1="100" x2="180" y2="60" stroke="#5F9A5C" stroke-width="2" opacity="0.8"/>
  <line x1="25" y1="70" x2="180" y2="100" stroke="#D6524F" stroke-width="2" opacity="0.8"/>
  <text x="100" y="16" font-size="9" text-anchor="middle" fill="#736C5E">при разных a</text>
  </svg>`,
  bank:[
    {p:"Что такое параметр в уравнении?",opts:["Дополнительная буква, от значения которой зависит решение","Просто ещё одно неизвестное с тем же смыслом, что x"],correct:0}
  ]},

{ n:"Бесконечно убывающая геометрическая прогрессия",
  explain:"Если |q| < 1, геометрическая прогрессия называется бесконечно убывающей — её члены становятся всё меньше и меньше, приближаясь к нулю.",
  svg:`<svg viewBox="0 0 220 60" width="220">
  <line x1="15" y1="30" x2="205" y2="30" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="205,30 197,25 197,35" fill="#2B2A26"/>
  <circle cx="180" cy="30" r="5" fill="#9973B8"/>
  <circle cx="130" cy="30" r="4.5" fill="#9973B8"/>
  <circle cx="95" cy="30" r="4" fill="#9973B8"/>
  <circle cx="72" cy="30" r="3.2" fill="#9973B8"/>
  <circle cx="58" cy="30" r="2.4" fill="#9973B8"/>
  <circle cx="50" cy="30" r="1.6" fill="#9973B8"/>
  <text x="50" y="48" font-size="11" text-anchor="middle" fill="#725189">→ 0</text>
  </svg>`,
  bank:[
    {p:"При каком условии геометрическая прогрессия является бесконечно убывающей?",opts:["Если |q| < 1","Если q > 1"],correct:0},
    {p:"К чему приближаются члены бесконечно убывающей прогрессии?",opts:["К нулю","К бесконечности"],correct:0}
  ]},

{ n:"Числовые неравенства и их свойства",
  explain:"Неравенства можно складывать почленно, а при умножении обеих частей на отрицательное число знак неравенства меняется на противоположный.",
  svg:`<svg viewBox="0 0 200 60" width="200">
  <line x1="15" y1="30" x2="190" y2="30" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="190,30 182,25 182,35" fill="#2B2A26"/>
  <circle cx="70" cy="30" r="5" fill="#3B6EA5"/>
  <circle cx="140" cy="30" r="5" fill="#D6524F"/>
  <text x="70" y="50" font-size="11" text-anchor="middle" fill="#284D77">a</text>
  <text x="140" y="50" font-size="11" text-anchor="middle" fill="#A83836">b</text>
  <text x="105" y="15" font-size="11" text-anchor="middle" fill="#736C5E">a &lt; b</text>
  </svg>`,
  bank:[
    {p:"Что происходит со знаком неравенства при умножении обеих частей на отрицательное число?",opts:["Меняется на противоположный","Остаётся тем же"],correct:0},
    {p:"Можно ли складывать два неравенства одного знака почленно?",opts:["Да, можно","Нет, никогда"],correct:0}
  ]},

{ n:"Решение неравенств методом интервалов",
  explain:"<b>Метод интервалов</b> используют для решения неравенств: находят нули функции на числовой прямой, а затем определяют знак функции на каждом промежутке между ними.",
  svg:`<svg viewBox="0 0 240 70" width="240">
  <line x1="15" y1="35" x2="225" y2="35" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="225,35 217,30 217,40" fill="#2B2A26"/>
  <circle cx="80" cy="35" r="5" fill="#2B2A26"/>
  <circle cx="160" cy="35" r="5" fill="#2B2A26"/>
  <text x="80" y="55" font-size="11" text-anchor="middle">x₁</text>
  <text x="160" y="55" font-size="11" text-anchor="middle">x₂</text>
  <text x="45" y="25" font-size="14" text-anchor="middle" fill="#3F7A3D">+</text>
  <text x="120" y="25" font-size="14" text-anchor="middle" fill="#A83836">−</text>
  <text x="192" y="25" font-size="14" text-anchor="middle" fill="#3F7A3D">+</text>
  </svg>`,
  bank:[
    {p:"Что находят в первую очередь при методе интервалов?",opts:["Нули функции на числовой прямой","Сразу окончательный ответ"],correct:0},
    {p:"Что определяют на каждом промежутке между нулями?",opts:["Знак функции","Цвет графика"],correct:0}
  ]},

{ n:"Статистика: среднее, мода, медиана",
  explain:"<b>Среднее арифметическое</b> — сумма чисел, делённая на их количество. <b>Мода</b> — число, встречающееся чаще всего. <b>Медиана</b> — среднее значение в упорядоченном ряду.",
  svg:`<svg viewBox="0 0 220 70" width="220">
  <line x1="15" y1="45" x2="205" y2="45" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="40" cy="45" r="5" fill="#3B6EA5"/>
  <circle cx="70" cy="45" r="5" fill="#3B6EA5"/>
  <circle cx="70" cy="35" r="5" fill="#3B6EA5"/>
  <circle cx="110" cy="45" r="5" fill="#3B6EA5"/>
  <circle cx="160" cy="45" r="5" fill="#3B6EA5"/>
  <text x="70" y="20" font-size="9" text-anchor="middle" fill="#284D77">мода</text>
  <line x1="110" y1="50" x2="110" y2="62" stroke="#D6524F" stroke-width="2"/>
  <text x="110" y="72" font-size="9" text-anchor="middle" fill="#A83836">медиана</text>
  </svg>`,
  bank:[
    {p:"Как найти среднее арифметическое набора чисел?",opts:["Сумму разделить на количество чисел","Просто взять первое число"],correct:0},
    {p:"Что такое мода набора чисел?",opts:["Число, встречающееся чаще всего","Самое большое число"],correct:0},
    {p:"Что такое медиана упорядоченного ряда чисел?",opts:["Среднее по положению значение","Сумма всех чисел"],correct:0}
  ]}

];
