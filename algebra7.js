/* Алгебра, 7 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Новый предмет для 7 класса: выражения, одночлены, многочлены, формулы сокращённого умножения, уравнения, функции. */

const ALGEBRA7_MOD = [

{ n:"Числовые и буквенные выражения",
  explain:"<b>Буквенное выражение</b> содержит буквы вместо чисел, например 2x + 3. Если вместо буквы подставить число, получится числовое выражение, которое можно вычислить.",
  svg:`<svg viewBox="0 0 260 100" width="260">
  <rect x="8" y="30" width="100" height="40" rx="8" fill="#FFFEF8" stroke="#3B6EA5" stroke-width="2"/>
  <text x="58" y="55" font-size="16" text-anchor="middle" fill="#2B2A26">2x + 3</text>
  <line x1="112" y1="50" x2="150" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="150,50 142,45 142,55" fill="#2B2A26"/>
  <text x="131" y="40" font-size="11" text-anchor="middle" fill="#736C5E">x = 5</text>
  <rect x="152" y="30" width="100" height="40" rx="8" fill="#FFFEF8" stroke="#5F9A5C" stroke-width="2"/>
  <text x="202" y="55" font-size="16" text-anchor="middle" fill="#2B2A26">2·5+3=13</text>
  </svg>`,
  bank:[
    {p:"Что содержит буквенное выражение?",opts:["Буквы вместо чисел","Только цифры","Только знаки"],correct:0},
    {p:"«2x + 3» — это какое выражение?",opts:["Буквенное","Числовое"],correct:0},
    {p:"Если в выражении 2x+3 подставить x=5, чему будет равно выражение?",opts:["13","10","8"],correct:0},
    {p:"Буква в выражении, которая может принимать разные значения, называется...",opts:["Переменной","Постоянной"],correct:0}
  ]},

{ n:"Одночлены",
  explain:"<b>Одночлен</b> — произведение чисел, переменных и их степеней: 5x²y. Число перед буквами называется <b>коэффициентом</b>, а сумма показателей степеней — <b>степенью одночлена</b>.",
  svg:`<svg viewBox="0 0 200 100" width="200">
  <text x="20" y="50" font-size="30" fill="#D6524F" font-weight="700">5</text>
  <text x="45" y="50" font-size="30" fill="#3B6EA5" font-weight="700">x²</text>
  <text x="95" y="50" font-size="30" fill="#5F9A5C" font-weight="700">y</text>
  <line x1="25" y1="60" x2="25" y2="75" stroke="#D6524F" stroke-width="2"/>
  <line x1="58" y1="60" x2="58" y2="75" stroke="#3B6EA5" stroke-width="2"/>
  <line x1="100" y1="60" x2="100" y2="75" stroke="#5F9A5C" stroke-width="2"/>
  <text x="25" y="90" font-size="11" text-anchor="middle" fill="#A83836">коэфф.</text>
  <text x="58" y="90" font-size="11" text-anchor="middle" fill="#284D77">степень x</text>
  <text x="100" y="90" font-size="11" text-anchor="middle" fill="#3F7A3D">степень y</text>
  </svg>`,
  bank:[
    {p:"Что такое одночлен?",opts:["Произведение чисел, переменных и степеней","Сумма чисел","Дробь"],correct:0},
    {p:"В одночлене «5x²y» что является коэффициентом?",opts:["5","x","y"],correct:0},
    {p:"Чему равна степень одночлена 5x²y (сумма показателей степеней)?",opts:["3","2","5"],correct:0},
    {p:"Является ли «3x + 2» одночленом?",opts:["Нет, это сумма (многочлен)","Да"],correct:0}
  ]},

{ n:"Многочлены",
  explain:"<b>Многочлен</b> — сумма одночленов: 3x² + 2x − 5. Каждое слагаемое называется <b>членом многочлена</b>. Многочлены складывают и вычитают, приводя подобные слагаемые.",
  svg:`<svg viewBox="0 0 260 100" width="260">
  <rect x="10" y="25" width="60" height="36" rx="6" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <text x="40" y="49" font-size="18" text-anchor="middle" fill="#2B2A26">3x²</text>
  <text x="78" y="49" font-size="18" fill="#2B2A26">+</text>
  <rect x="92" y="25" width="50" height="36" rx="6" fill="none" stroke="#5F9A5C" stroke-width="2"/>
  <text x="117" y="49" font-size="18" text-anchor="middle" fill="#2B2A26">2x</text>
  <text x="148" y="49" font-size="18" fill="#2B2A26">−</text>
  <rect x="162" y="25" width="46" height="36" rx="6" fill="none" stroke="#D6524F" stroke-width="2"/>
  <text x="185" y="49" font-size="18" text-anchor="middle" fill="#2B2A26">5</text>
  <text x="40" y="80" font-size="11" text-anchor="middle" fill="#284D77">член 1</text>
  <text x="117" y="80" font-size="11" text-anchor="middle" fill="#3F7A3D">член 2</text>
  <text x="185" y="80" font-size="11" text-anchor="middle" fill="#A83836">член 3</text>
  </svg>`,
  bank:[
    {p:"Что такое многочлен?",opts:["Сумма одночленов","Произведение одночленов","Одно число"],correct:0},
    {p:"«3x² + 2x − 5» — сколько здесь членов многочлена?",opts:["Три","Два","Один"],correct:0},
    {p:"Слагаемые с одинаковой буквенной частью называются...",opts:["Подобными слагаемыми","Разными одночленами"],correct:0},
    {p:"«3x + 2x» после приведения подобных слагаемых равно...",opts:["5x","6x","x"],correct:0}
  ]},

{ n:"Формулы сокращённого умножения",
  explain:"Есть полезные формулы: <b>(a+b)² = a² + 2ab + b²</b> (квадрат суммы) и <b>(a−b)(a+b) = a² − b²</b> (разность квадратов). Они упрощают вычисления и преобразования.",
  svg:`<svg viewBox="0 0 220 220" width="220">
  <rect x="30" y="20" width="120" height="120" fill="#3B6EA5" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="150" y="20" width="60" height="120" fill="#5F9A5C" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="140" width="120" height="60" fill="#5F9A5C" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="150" y="140" width="60" height="60" fill="#E3922E" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <text x="90" y="85" font-size="16" text-anchor="middle" fill="#fff">a²</text>
  <text x="180" y="85" font-size="14" text-anchor="middle" fill="#fff">ab</text>
  <text x="90" y="174" font-size="14" text-anchor="middle" fill="#fff">ab</text>
  <text x="180" y="174" font-size="14" text-anchor="middle" fill="#fff">b²</text>
  <text x="90" y="14" font-size="12" text-anchor="middle" fill="#2B2A26">a</text>
  <text x="180" y="14" font-size="12" text-anchor="middle" fill="#2B2A26">b</text>
  <text x="16" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">a</text>
  <text x="16" y="174" font-size="12" text-anchor="middle" fill="#2B2A26">b</text>
  </svg>`,
  bank:[
    {p:"Чему равно (a+b)²?",opts:["a² + 2ab + b²","a² + b²","2a + 2b"],correct:0},
    {p:"Чему равно (a−b)(a+b)?",opts:["a² − b²","a² + b²","2ab"],correct:0},
    {p:"Как называется формула a² − b² = (a−b)(a+b)?",opts:["Разность квадратов","Квадрат суммы","Квадрат разности"],correct:0},
    {p:"Зачем нужны формулы сокращённого умножения?",opts:["Упрощают вычисления и преобразования","Усложняют примеры специально"],correct:0}
  ]},

{ n:"Линейные уравнения",
  explain:"<b>Линейное уравнение</b> — уравнение вида ax + b = 0, где x — неизвестное. Чтобы решить его, нужно найти значение x, при котором равенство верно.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <line x1="110" y1="20" x2="110" y2="50" stroke="#2B2A26" stroke-width="3"/>
  <line x1="40" y1="50" x2="180" y2="50" stroke="#2B2A26" stroke-width="3"/>
  <line x1="40" y1="50" x2="40" y2="80" stroke="#2B2A26" stroke-width="2"/>
  <line x1="180" y1="50" x2="180" y2="80" stroke="#2B2A26" stroke-width="2"/>
  <rect x="8" y="80" width="64" height="10" fill="#3B6EA5"/>
  <text x="40" y="105" font-size="13" text-anchor="middle" fill="#2B2A26">x + 5</text>
  <rect x="148" y="80" width="64" height="10" fill="#E3922E"/>
  <text x="180" y="105" font-size="13" text-anchor="middle" fill="#2B2A26">12</text>
  <rect x="95" y="105" width="30" height="20" fill="#736C5E"/>
  </svg>`,
  bank:[
    {p:"Что нужно найти, решая уравнение?",opts:["Значение неизвестного, при котором равенство верно","Любое число"],correct:0},
    {p:"Реши уравнение: x + 5 = 12. Чему равен x?",opts:["7","17","5"],correct:0},
    {p:"Реши уравнение: 3x = 15. Чему равен x?",opts:["5","45","3"],correct:0},
    {p:"Что можно делать с обеими частями уравнения, не нарушая равенства?",opts:["Прибавлять/вычитать одно и то же число","Только умножать на ноль"],correct:0}
  ]},

{ n:"Степень с натуральным показателем",
  explain:"<b>Степень</b> a^n означает умножение числа a само на себя n раз. При умножении степеней с одинаковым основанием показатели складываются: a^m × a^n = a^(m+n).",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <rect x="10" y="40" width="30" height="30" rx="4" fill="#3B6EA5" opacity="0.85"/>
  <text x="25" y="60" font-size="16" text-anchor="middle" fill="#fff">2</text>
  <text x="46" y="60" font-size="16" fill="#2B2A26">×</text>
  <rect x="60" y="40" width="30" height="30" rx="4" fill="#3B6EA5" opacity="0.85"/>
  <text x="75" y="60" font-size="16" text-anchor="middle" fill="#fff">2</text>
  <text x="96" y="60" font-size="16" fill="#2B2A26">×</text>
  <rect x="110" y="40" width="30" height="30" rx="4" fill="#3B6EA5" opacity="0.85"/>
  <text x="125" y="60" font-size="16" text-anchor="middle" fill="#fff">2</text>
  <text x="146" y="60" font-size="16" fill="#2B2A26">=</text>
  <rect x="165" y="20" width="45" height="50" rx="4" fill="#E3922E"/>
  <text x="187" y="52" font-size="20" text-anchor="middle" fill="#fff">8</text>
  <text x="25" y="90" font-size="9" text-anchor="middle" fill="#736C5E">основание</text>
  </svg>`,
  bank:[
    {p:"Чему равно 2³?",opts:["8","6","9"],correct:0},
    {p:"Чему равно a² × a³?",opts:["a⁵","a⁶","a¹"],correct:0},
    {p:"Число a называется...",opts:["Основанием степени","Показателем степени"],correct:0},
    {p:"Чему равно любое число в первой степени (a¹)?",opts:["Самому числу a","Единице","Нулю"],correct:0}
  ]},

{ n:"Функции и графики",
  explain:"<b>Функция</b> — правило, по которому каждому значению x соответствует одно значение y. Например, y = 2x. Функцию можно изобразить <b>графиком</b> на координатной плоскости.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <line x1="20" y1="180" x2="190" y2="180" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="190,180 182,175 182,185" fill="#2B2A26"/>
  <line x1="100" y1="190" x2="100" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="100,15 95,23 105,23" fill="#2B2A26"/>
  <text x="192" y="178" font-size="11">x</text><text x="88" y="15" font-size="11">y</text>
  <line x1="70" y1="180" x2="130" y2="30" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="135" y="28" font-size="12" fill="#284D77">y=2x</text>
  </svg>`,
  bank:[
    {p:"Что такое функция?",opts:["Правило, ставящее в соответствие x одно значение y","Просто число","Уравнение без решений"],correct:0},
    {p:"Где изображают график функции?",opts:["На координатной плоскости","В таблице умножения"],correct:0},
    {p:"Если y = 2x и x = 3, чему равен y?",opts:["6","5","9"],correct:0},
    {p:"Из скольких осей состоит координатная плоскость?",opts:["Из двух (x и y)","Из одной","Из трёх"],correct:0}
  ]},

{ n:"Тождественные преобразования",
  explain:"<b>Тождество</b> — равенство, верное при любых значениях переменных, например x + x = 2x. Упрощение выражений с сохранением их значения называют тождественным преобразованием.",
  svg:`<svg viewBox="0 0 240 90" width="240">
  <rect x="10" y="25" width="34" height="34" rx="6" fill="#5F9A5C" opacity="0.85"/>
  <text x="27" y="47" font-size="14" text-anchor="middle" fill="#fff">x</text>
  <text x="50" y="47" font-size="16" fill="#2B2A26">+</text>
  <rect x="62" y="25" width="34" height="34" rx="6" fill="#5F9A5C" opacity="0.85"/>
  <text x="79" y="47" font-size="14" text-anchor="middle" fill="#fff">x</text>
  <text x="106" y="47" font-size="18" fill="#2B2A26">=</text>
  <rect x="130" y="25" width="68" height="34" rx="6" fill="#3B6EA5" opacity="0.85"/>
  <text x="164" y="47" font-size="14" text-anchor="middle" fill="#fff">2x</text>
  <text x="104" y="80" font-size="11" text-anchor="middle" fill="#736C5E">верно при любом x</text>
  </svg>`,
  bank:[
    {p:"Что такое тождество?",opts:["Равенство, верное при любых значениях переменных","Равенство, верное только при одном значении"],correct:0},
    {p:"«x + x = 2x» — это пример...",opts:["Тождества","Уравнения с одним корнем"],correct:0},
    {p:"Зачем упрощают выражения?",opts:["Чтобы было легче вычислять и понимать","Чтобы усложнить задачу"],correct:0}
  ]},

{ n:"Координатная плоскость",
  explain:"Координатная плоскость образована двумя перпендикулярными осями: горизонтальной <b>Ox</b> и вертикальной <b>Oy</b>. Точка на плоскости задаётся парой чисел (x; y).",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <line x1="10" y1="100" x2="190" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="190,100 182,95 182,105" fill="#2B2A26"/>
  <line x1="100" y1="190" x2="100" y2="10" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="100,10 95,18 105,18" fill="#2B2A26"/>
  <text x="192" y="98" font-size="11">x</text><text x="88" y="10" font-size="11">y</text>
  <text x="90" y="112" font-size="10" fill="#736C5E">O</text>
  <line x1="150" y1="100" x2="150" y2="50" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="100" y1="50" x2="150" y2="50" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="150" cy="50" r="4" fill="#D6524F"/>
  <text x="158" y="48" font-size="11" fill="#A83836">(x;y)</text>
  </svg>`,
  bank:[
    {p:"Как называется горизонтальная ось координатной плоскости?",opts:["Ось Ox","Ось Oy"],correct:0},
    {p:"Как называется вертикальная ось координатной плоскости?",opts:["Ось Oy","Ось Ox"],correct:0},
    {p:"Сколькими числами задаётся точка на координатной плоскости?",opts:["Двумя (x и y)","Одним","Тремя"],correct:0},
    {p:"Точка, где пересекаются оси, называется...",opts:["Началом координат","Концом координат"],correct:0}
  ]},

{ n:"Подобные слагаемые",
  explain:"<b>Подобные слагаемые</b> имеют одинаковую буквенную часть (2x и 5x — подобные, а 2x и 5x² — нет). Их можно складывать, складывая коэффициенты.",
  svg:`<svg viewBox="0 0 260 90" width="260">
  <text x="20" y="50" font-size="20" fill="#3B6EA5" font-weight="700">2x</text>
  <text x="60" y="50" font-size="20" fill="#2B2A26">+</text>
  <text x="80" y="50" font-size="20" fill="#3B6EA5" font-weight="700">5x</text>
  <text x="122" y="50" font-size="20" fill="#2B2A26">+</text>
  <text x="142" y="50" font-size="20" fill="#D6524F" font-weight="700">2x²</text>
  <path d="M15 60q30 14 60 0" stroke="#284D77" stroke-width="2" fill="none"/>
  <text x="45" y="82" font-size="11" fill="#284D77" text-anchor="middle">подобные</text>
  </svg>`,
  bank:[
    {p:"«2x» и «5x» — подобные слагаемые?",opts:["Да","Нет"],correct:0},
    {p:"«2x» и «5x²» — подобные слагаемые?",opts:["Нет, разная степень x","Да"],correct:0},
    {p:"Чему равно 4x + 7x после приведения подобных слагаемых?",opts:["11x","28x","3x"],correct:0}
  ]},

{ n:"Умножение одночлена на многочлен",
  explain:"Чтобы умножить одночлен на многочлен, нужно умножить одночлен на каждый член многочлена и сложить результаты: a(b+c) = ab + ac.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="30" y="20" width="70" height="50" fill="#3B6EA5" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="100" y="20" width="90" height="50" fill="#5F9A5C" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <text x="65" y="50" font-size="15" text-anchor="middle" fill="#fff">ab</text>
  <text x="145" y="50" font-size="15" text-anchor="middle" fill="#fff">ac</text>
  <text x="65" y="14" font-size="12" text-anchor="middle" fill="#2B2A26">b</text>
  <text x="145" y="14" font-size="12" text-anchor="middle" fill="#2B2A26">c</text>
  <text x="16" y="50" font-size="12" text-anchor="middle" fill="#2B2A26">a</text>
  </svg>`,
  bank:[
    {p:"Чему равно 2(x + 3)?",opts:["2x + 6","2x + 3","x + 6"],correct:0},
    {p:"Чему равно x(x − 5)?",opts:["x² − 5x","x² − 5","2x − 5"],correct:0},
    {p:"Как раскрыть скобки в a(b+c)?",opts:["ab + ac","a + b + c"],correct:0}
  ]},

{ n:"Разложение многочлена на множители: вынесение общего множителя",
  explain:"Если у всех членов многочлена есть общий множитель, его можно вынести за скобки: ab + ac = a(b+c). Это упрощает выражение и помогает решать уравнения.",
  svg:`<svg viewBox="0 0 260 90" width="260">
  <rect x="10" y="20" width="45" height="40" fill="#3B6EA5" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="55" y="20" width="60" height="40" fill="#5F9A5C" opacity="0.8" stroke="#2B2A26" stroke-width="2"/>
  <text x="32" y="44" font-size="13" text-anchor="middle" fill="#fff">ab</text>
  <text x="85" y="44" font-size="13" text-anchor="middle" fill="#fff">ac</text>
  <line x1="122" y1="40" x2="152" y2="40" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="152,40 144,35 144,45" fill="#2B2A26"/>
  <rect x="160" y="20" width="15" height="40" fill="#E3922E" opacity="0.85" stroke="#2B2A26" stroke-width="2"/>
  <rect x="175" y="20" width="75" height="40" fill="#5F9A5C" opacity="0.55" stroke="#2B2A26" stroke-width="2"/>
  <text x="167" y="44" font-size="11" text-anchor="middle" fill="#fff">a</text>
  <text x="212" y="44" font-size="13" text-anchor="middle" fill="#2B2A26">(b+c)</text>
  </svg>`,
  bank:[
    {p:"Какой общий множитель можно вынести из 3x + 3y?",opts:["3","x"],correct:0},
    {p:"Разложи на множители: 5x + 5y",opts:["5(x+y)","5x·5y"],correct:0},
    {p:"Зачем раскладывают многочлен на множители?",opts:["Чтобы упростить выражение или решить уравнение","Чтобы усложнить пример"],correct:0}
  ]},

{ n:"Линейная функция",
  explain:"<b>Линейная функция</b> имеет вид y = kx + b, её график — прямая линия. Число k показывает наклон прямой, а b — точку пересечения с осью Oy.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <line x1="20" y1="180" x2="190" y2="180" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="190,180 182,175 182,185" fill="#2B2A26"/>
  <line x1="20" y1="180" x2="20" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="20,15 15,23 25,23" fill="#2B2A26"/>
  <text x="192" y="178" font-size="11">x</text><text x="12" y="15" font-size="11">y</text>
  <line x1="20" y1="145" x2="170" y2="45" stroke="#3B6EA5" stroke-width="2.5"/>
  <circle cx="20" cy="145" r="4" fill="#D6524F"/>
  <text x="27" y="141" font-size="11" fill="#A83836">b</text>
  <text x="130" y="58" font-size="11" fill="#284D77">наклон k</text>
  </svg>`,
  bank:[
    {p:"Какой вид имеет линейная функция?",opts:["y = kx + b","y = x²"],correct:0},
    {p:"Какую форму имеет график линейной функции?",opts:["Прямую линию","Параболу"],correct:0},
    {p:"Что показывает число b в формуле y=kx+b?",opts:["Точку пересечения с осью Oy","Наклон прямой"],correct:0}
  ]},

{ n:"Системы линейных уравнений",
  explain:"<b>Система уравнений</b> — несколько уравнений, для которых нужно найти общее решение. Один из способов решения — метод подстановки: выразить одну переменную и подставить в другое уравнение.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <line x1="20" y1="180" x2="190" y2="180" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="180" x2="20" y2="15" stroke="#2B2A26" stroke-width="2"/>
  <line x1="25" y1="160" x2="180" y2="40" stroke="#3B6EA5" stroke-width="2.5"/>
  <line x1="25" y1="50" x2="180" y2="160" stroke="#D6524F" stroke-width="2.5"/>
  <circle cx="102" cy="100" r="5" fill="#2B2A26"/>
  <text x="112" y="96" font-size="11" fill="#2B2A26">решение</text>
  </svg>`,
  bank:[
    {p:"Что значит решить систему уравнений?",opts:["Найти значения переменных, подходящие для всех уравнений","Решить только одно уравнение"],correct:0},
    {p:"Что делают в методе подстановки?",opts:["Выражают одну переменную и подставляют в другое уравнение","Складывают уравнения без изменений"],correct:0}
  ]}

];
