/* Геометрия, 8 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 7 класса: четырёхугольники, площади, теорема Пифагора, подобие треугольников. */

const GEOMETRY8_MOD = [

{ n:"Параллелограмм",
  explain:"<b>Параллелограмм</b> — четырёхугольник, у которого противоположные стороны попарно параллельны. У параллелограмма противоположные стороны и углы равны.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <polygon points="30,110 150,110 170,20 50,20" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="18" y="122" font-size="13" font-weight="700">A</text>
  <text x="158" y="122" font-size="13" font-weight="700">B</text>
  <text x="176" y="18" font-size="13" font-weight="700">C</text>
  <text x="40" y="18" font-size="13" font-weight="700">D</text>
  <path d="M84 110l7 4 7-4M100 110l7 4 7-4" stroke="#3B6EA5" stroke-width="2" fill="none"/>
  <path d="M104 20l7 4 7-4M120 20l7 4 7-4" stroke="#3B6EA5" stroke-width="2" fill="none"/>
  <path d="M38 68l5 6M46 62l5 6" stroke="#D6524F" stroke-width="2" fill="none"/>
  <path d="M158 68l5 6M166 62l5 6" stroke="#D6524F" stroke-width="2" fill="none"/>
  </svg>`,
  bank:[
    {p:"Что верно о противоположных сторонах параллелограмма?",opts:["Они параллельны и равны","Они перпендикулярны"],correct:0},
    {p:"Равны ли противоположные углы параллелограмма?",opts:["Да, равны","Нет, всегда разные"],correct:0},
    {p:"Сколько сторон у параллелограмма?",opts:["Четыре","Три"],correct:0}
  ]},

{ n:"Прямоугольник, ромб, квадрат",
  explain:"<b>Прямоугольник</b> — параллелограмм со всеми прямыми углами. <b>Ромб</b> — параллелограмм со всеми равными сторонами. <b>Квадрат</b> сочетает свойства обоих.",
  svg:`<svg viewBox="0 0 320 130" width="320">
  <rect x="15" y="45" width="90" height="55" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <rect x="15" y="93" width="8" height="8" fill="none" stroke="#3B6EA5" stroke-width="1.5"/>
  <text x="60" y="118" font-size="11" text-anchor="middle" fill="#736C5E">прямоугольник</text>
  <polygon points="165,30 200,72 165,114 130,72" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M148 47l4 6M156 41l4 6" stroke="#D6524F" stroke-width="1.5" fill="none"/>
  <path d="M148 97l4-6M156 103l4-6" stroke="#D6524F" stroke-width="1.5" fill="none"/>
  <text x="165" y="128" font-size="11" text-anchor="middle" fill="#736C5E">ромб</text>
  <rect x="240" y="42" width="65" height="65" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <rect x="240" y="99" width="8" height="8" fill="none" stroke="#3B6EA5" stroke-width="1.5"/>
  <text x="272" y="122" font-size="11" text-anchor="middle" fill="#736C5E">квадрат</text>
  </svg>`,
  bank:[
    {p:"Какой параллелограмм имеет все прямые углы?",opts:["Прямоугольник","Ромб"],correct:0},
    {p:"Какой параллелограмм имеет все равные стороны?",opts:["Ромб","Прямоугольник"],correct:0},
    {p:"Квадрат сочетает свойства каких двух фигур?",opts:["Прямоугольника и ромба","Только треугольника"],correct:0}
  ]},

{ n:"Трапеция",
  explain:"<b>Трапеция</b> — четырёхугольник, у которого только одна пара сторон параллельна (основания), а другая пара — нет (боковые стороны).",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <polygon points="30,100 170,100 140,25 65,25" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M92 100l7 4 7-4" stroke="#3B6EA5" stroke-width="2" fill="none"/>
  <path d="M95 25l7 4 7-4" stroke="#3B6EA5" stroke-width="2" fill="none"/>
  <text x="100" y="115" font-size="11" text-anchor="middle" fill="#736C5E">основание a</text>
  <text x="103" y="18" font-size="11" text-anchor="middle" fill="#736C5E">основание b</text>
  <text x="42" y="65" font-size="10" fill="#D6524F">боковая</text>
  </svg>`,
  bank:[
    {p:"Сколько пар параллельных сторон у трапеции?",opts:["Одна","Две"],correct:0},
    {p:"Как называются параллельные стороны трапеции?",opts:["Основания","Боковые стороны"],correct:0},
    {p:"Трапеция с равными боковыми сторонами называется...",opts:["Равнобедренной","Прямоугольной"],correct:0}
  ]},

{ n:"Площадь параллелограмма и треугольника",
  explain:"Площадь параллелограмма = основание × высота. Площадь треугольника = ½ × основание × высота.",
  svg:`<svg viewBox="0 0 300 130" width="300">
  <polygon points="20,110 120,110 140,30 40,30" fill="#3B6EA5" opacity="0.18" stroke="#2B2A26" stroke-width="2"/>
  <line x1="40" y1="110" x2="40" y2="30" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="3 3"/>
  <rect x="40" y="102" width="8" height="8" fill="none" stroke="#D6524F" stroke-width="1.2"/>
  <text x="30" y="70" font-size="11" fill="#D6524F">h</text>
  <text x="70" y="126" font-size="11" text-anchor="middle" fill="#736C5E">a</text>
  <polygon points="180,110 280,110 220,30" fill="#5F9A5C" opacity="0.18" stroke="#2B2A26" stroke-width="2"/>
  <line x1="220" y1="110" x2="220" y2="30" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="3 3"/>
  <rect x="220" y="102" width="8" height="8" fill="none" stroke="#D6524F" stroke-width="1.2"/>
  <text x="228" y="70" font-size="11" fill="#D6524F">h</text>
  <text x="230" y="126" font-size="11" text-anchor="middle" fill="#736C5E">a</text>
  </svg>`,
  bank:[
    {p:"Как найти площадь параллелограмма?",opts:["Основание умножить на высоту","Основание плюс высота"],correct:0},
    {p:"Как найти площадь треугольника?",opts:["Половина произведения основания на высоту","Произведение основания на высоту"],correct:0},
    {p:"Если основание треугольника 10 см, а высота 6 см, чему равна площадь?",opts:["30 см²","60 см²","16 см²"],correct:0}
  ]},

{ n:"Площадь трапеции",
  explain:"Площадь трапеции равна полусумме оснований, умноженной на высоту: S = ((a+b)/2) × h.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <polygon points="30,110 170,110 140,25 65,25" fill="#E3922E" opacity="0.18" stroke="#2B2A26" stroke-width="2"/>
  <line x1="65" y1="110" x2="65" y2="25" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="3 3"/>
  <rect x="65" y="102" width="8" height="8" fill="none" stroke="#D6524F" stroke-width="1.2"/>
  <text x="72" y="70" font-size="11" fill="#D6524F">h</text>
  <text x="100" y="124" font-size="11" text-anchor="middle" fill="#736C5E">a</text>
  <text x="103" y="18" font-size="11" text-anchor="middle" fill="#736C5E">b</text>
  </svg>`,
  bank:[
    {p:"Какая формула площади трапеции?",opts:["Полусумма оснований, умноженная на высоту","Произведение оснований"],correct:0},
    {p:"Если основания трапеции 6 и 10 см, а высота 4 см, чему равна площадь?",opts:["32 см²","40 см²","64 см²"],correct:0}
  ]},

{ n:"Теорема Пифагора",
  explain:"В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов: <b>c² = a² + b²</b>. Это одна из самых известных теорем в математике.",
  svg:`<svg viewBox="0 0 340 380" width="340">
  <polygon points="110,240 230,240 230,360 110,360" fill="#5F9A5C" opacity="0.18" stroke="#5F9A5C" stroke-width="1.5"/>
  <polygon points="110,240 110,150 20,150 20,240" fill="#3B6EA5" opacity="0.18" stroke="#3B6EA5" stroke-width="1.5"/>
  <polygon points="110,150 230,240 320,120 200,30" fill="#D6524F" opacity="0.18" stroke="#D6524F" stroke-width="1.5"/>
  <polygon points="110,240 230,240 110,150" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="110" y="232" width="8" height="8" fill="none" stroke="#2B2A26" stroke-width="1.2"/>
  <text x="170" y="305" font-size="13" text-anchor="middle" fill="#3F7A3D">a²</text>
  <text x="60" y="200" font-size="13" text-anchor="middle" fill="#284D77">b²</text>
  <text x="215" y="140" font-size="13" text-anchor="middle" fill="#A83836">c²</text>
  <text x="170" y="232" font-size="11" text-anchor="middle" fill="#2B2A26">a</text>
  <text x="98" y="199" font-size="11" text-anchor="middle" fill="#2B2A26">b</text>
  <text x="150" y="188" font-size="11" text-anchor="middle" fill="#2B2A26">c</text>
  </svg>`,
  bank:[
    {p:"Как формулируется теорема Пифагора?",opts:["Квадрат гипотенузы равен сумме квадратов катетов","Сумма всех сторон равна 180"],correct:0},
    {p:"Катеты треугольника равны 3 и 4. Чему равна гипотенуза?",opts:["5","7","12"],correct:0},
    {p:"Катеты треугольника равны 6 и 8. Чему равна гипотенуза?",opts:["10","14","48"],correct:0}
  ]},

{ n:"Подобные треугольники",
  explain:"<b>Подобные</b> треугольники имеют одинаковую форму, но разный размер: их углы равны, а стороны пропорциональны.",
  svg:`<svg viewBox="0 0 260 150" width="260">
  <polygon points="15,120 65,120 40,75" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <polygon points="90,130 190,130 140,40" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <text x="40" y="138" font-size="10" text-anchor="middle" fill="#736C5E">ABC</text>
  <text x="140" y="145" font-size="10" text-anchor="middle" fill="#736C5E">A'B'C' (в 2 раза больше)</text>
  <text x="77" y="105" font-size="18" text-anchor="middle" fill="#736C5E">∼</text>
  </svg>`,
  bank:[
    {p:"Что общего у подобных треугольников?",opts:["Равные углы и пропорциональные стороны","Одинаковый размер"],correct:0},
    {p:"Обязательно ли подобные треугольники одинакового размера?",opts:["Нет, размер может отличаться","Да, всегда одинаковые"],correct:0}
  ]},

{ n:"Окружность и круг",
  explain:"<b>Окружность</b> — линия, все точки которой равноудалены от центра. <b>Круг</b> — часть плоскости внутри окружности. Радиус — расстояние от центра до окружности.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="80" fill="#3B6EA5" opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#2B2A26"/>
  <line x1="100" y1="100" x2="31" y2="60" stroke="#D6524F" stroke-width="2"/>
  <line x1="20" y1="100" x2="180" y2="100" stroke="#3B6EA5" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="93" y="90" font-size="12">O</text>
  <text x="52" y="72" font-size="12" fill="#D6524F">r</text>
  <text x="100" y="118" font-size="12" fill="#3B6EA5" text-anchor="middle">d</text>
  </svg>`,
  bank:[
    {p:"Чем отличается окружность от круга?",opts:["Окружность — это линия, круг — вся плоская фигура внутри","Это одно и то же"],correct:0},
    {p:"Что такое радиус?",opts:["Расстояние от центра до окружности","Расстояние между двумя любыми точками"],correct:0},
    {p:"Как называется отрезок, соединяющий две точки окружности через центр?",opts:["Диаметр","Радиус"],correct:0}
  ]},

{ n:"Вписанные и центральные углы",
  explain:"<b>Центральный угол</b> — угол с вершиной в центре окружности. <b>Вписанный угол</b> имеет вершину на окружности. Вписанный угол в два раза меньше центрального, опирающегося на ту же дугу.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="105" r="75" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="105" x2="100" y2="30" stroke="#3B6EA5" stroke-width="2"/>
  <line x1="100" y1="105" x2="165" y2="140" stroke="#3B6EA5" stroke-width="2"/>
  <text x="120" y="90" font-size="11" fill="#3B6EA5">80°</text>
  <line x1="26" y1="119" x2="100" y2="30" stroke="#D6524F" stroke-width="2"/>
  <line x1="26" y1="119" x2="165" y2="140" stroke="#D6524F" stroke-width="2"/>
  <text x="48" y="120" font-size="11" fill="#D6524F">40°</text>
  <circle cx="100" cy="105" r="3" fill="#2B2A26"/>
  <circle cx="26" cy="119" r="3" fill="#2B2A26"/>
  <text x="112" y="20" font-size="10" fill="#736C5E">дуга</text>
  </svg>`,
  bank:[
    {p:"Где находится вершина центрального угла?",opts:["В центре окружности","На самой окружности"],correct:0},
    {p:"Где находится вершина вписанного угла?",opts:["На окружности","В центре"],correct:0},
    {p:"Как соотносится вписанный угол с центральным, опирающимся на ту же дугу?",opts:["Вписанный вдвое меньше","Они равны"],correct:0}
  ]},

{ n:"Средняя линия треугольника",
  explain:"<b>Средняя линия</b> треугольника соединяет середины двух его сторон. Она параллельна третьей стороне и равна её половине.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <polygon points="20,140 180,140 90,20" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="55" y1="80" x2="135" y2="80" stroke="#D6524F" stroke-width="2"/>
  <circle cx="55" cy="80" r="3" fill="#3B6EA5"/>
  <circle cx="135" cy="80" r="3" fill="#3B6EA5"/>
  <text x="100" y="72" font-size="11" fill="#D6524F" text-anchor="middle">MN = ½·AB</text>
  <text x="8" y="152" font-size="13" font-weight="700">A</text>
  <text x="185" y="152" font-size="13" font-weight="700">B</text>
  <text x="90" y="14" font-size="13" font-weight="700" text-anchor="middle">C</text>
  <text x="42" y="72" font-size="11" font-weight="700">M</text>
  <text x="140" y="72" font-size="11" font-weight="700">N</text>
  </svg>`,
  bank:[
    {p:"Что соединяет средняя линия треугольника?",opts:["Середины двух сторон","Вершину и середину стороны"],correct:0},
    {p:"Чему равна средняя линия по отношению к третьей стороне?",opts:["Половине третьей стороны","Всей третьей стороне"],correct:0},
    {p:"Параллельна ли средняя линия третьей стороне?",opts:["Да, параллельна","Нет, перпендикулярна"],correct:0}
  ]},

{ n:"Теорема, обратная теореме Пифагора",
  explain:"Если квадрат одной стороны треугольника равен сумме квадратов двух других сторон, то треугольник прямоугольный — это обратная теорема Пифагора.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <polygon points="30,140 150,140 30,60" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="132" width="8" height="8" fill="none" stroke="#D6524F" stroke-width="1.5"/>
  <text x="88" y="155" font-size="12" text-anchor="middle" fill="#736C5E">4</text>
  <text x="14" y="103" font-size="12" fill="#736C5E">3</text>
  <text x="98" y="95" font-size="12" fill="#736C5E">5</text>
  <text x="100" y="30" font-size="12" text-anchor="middle" fill="#3B6EA5">3² + 4² = 5² → угол 90°</text>
  </svg>`,
  bank:[
    {p:"Что можно определить с помощью обратной теоремы Пифагора?",opts:["Является ли треугольник прямоугольным","Площадь треугольника"],correct:0},
    {p:"Треугольник со сторонами 3, 4, 5 — прямоугольный, потому что...",opts:["3²+4²=5²","Все стороны разные"],correct:0}
  ]},

{ n:"Правильные многоугольники",
  explain:"<b>Правильный многоугольник</b> — многоугольник, у которого все стороны равны и все углы равны. Пример: квадрат (правильный четырёхугольник), правильный шестиугольник.",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <rect x="25" y="30" width="70" height="70" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="60" y="118" font-size="11" text-anchor="middle" fill="#736C5E">квадрат</text>
  <polygon points="200,20 234,40 234,80 200,100 166,80 166,40" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="200" y="118" font-size="11" text-anchor="middle" fill="#736C5E">шестиугольник</text>
  </svg>`,
  bank:[
    {p:"Что характерно для правильного многоугольника?",opts:["Все стороны и углы равны","Только стороны равны"],correct:0},
    {p:"Является ли квадрат правильным многоугольником?",opts:["Да, это правильный четырёхугольник","Нет"],correct:0}
  ]}

];
