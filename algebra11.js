/* Алгебра и начала анализа, 11 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Производная, первообразная и интеграл, показательные и логарифмические уравнения, комбинаторика. */

const ALGEBRA11_MOD = [

{ n:"Производная степенной функции",
  explain:"Производная функции y = xⁿ вычисляется по формуле y' = n·xⁿ⁻¹. Например, производная x² равна 2x, производная x³ равна 3x².",
  svg:`<svg viewBox="0 0 200 60" width="200">
  <text x="15" y="38" font-size="18" fill="#3B6EA5" font-weight="700">(x²)'</text>
  <text x="75" y="38" font-size="18" fill="#2B2A26">=</text>
  <text x="95" y="38" font-size="18" fill="#D6524F" font-weight="700">2x</text>
  </svg>`,
  bank:[
    {p:"Чему равна производная функции y=x²?",opts:["2x","x"],correct:0},
    {p:"Чему равна производная функции y=x³?",opts:["3x²","x²"],correct:0}
  ]},

{ n:"Производная и монотонность функции",
  explain:"Если производная функции на промежутке положительна, функция возрастает на этом промежутке; если отрицательна — убывает.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <line x1="10" y1="100" x2="210" y2="100" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M20 95 Q70 15 120 50 Q160 80 200 95" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="45" y="55" font-size="12" fill="#3F7A3D">f'&gt;0</text>
  <text x="150" y="55" font-size="12" fill="#A83836">f'&lt;0</text>
  </svg>`,
  bank:[
    {p:"Что означает положительная производная функции на промежутке?",opts:["Функция возрастает","Функция убывает"],correct:0},
    {p:"Что означает отрицательная производная функции на промежутке?",opts:["Функция убывает","Функция возрастает"],correct:0}
  ]},

{ n:"Экстремумы функции",
  explain:"<b>Точки экстремума</b> (максимума или минимума) функции — это точки, где производная меняет знак. В этих точках производная равна нулю (если она существует).",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <line x1="10" y1="100" x2="190" y2="100" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M20 90 Q100 15 180 90" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <circle cx="100" cy="15" r="5" fill="#D6524F"/>
  <text x="100" y="9" font-size="10" text-anchor="middle" fill="#A83836">max, f'=0</text>
  </svg>`,
  bank:[
    {p:"Чему обычно равна производная в точке экстремума?",opts:["Нулю","Всегда единице"],correct:0}
  ]},

{ n:"Первообразная",
  explain:"<b>Первообразная</b> функции f(x) — это функция F(x), производная которой равна f(x). Например, первообразная функции 2x — это x², так как (x²)' = 2x.",
  svg:`<svg viewBox="0 0 220 80" width="220">
  <rect x="10" y="20" width="80" height="36" rx="6" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <text x="50" y="43" font-size="15" text-anchor="middle" fill="#2B2A26">F(x)=x²</text>
  <line x1="95" y1="38" x2="135" y2="38" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="135,38 127,33 127,43" fill="#2B2A26"/>
  <text x="115" y="28" font-size="10" text-anchor="middle" fill="#736C5E">производная</text>
  <rect x="140" y="20" width="70" height="36" rx="6" fill="none" stroke="#D6524F" stroke-width="2"/>
  <text x="175" y="43" font-size="15" text-anchor="middle" fill="#2B2A26">f(x)=2x</text>
  </svg>`,
  bank:[
    {p:"Что такое первообразная функции f(x)?",opts:["Функция F(x), производная которой равна f(x)","То же самое, что и сама функция f(x)"],correct:0},
    {p:"Какая функция является первообразной для 2x?",opts:["x²","x"],correct:0}
  ]},

{ n:"Определённый интеграл",
  explain:"<b>Определённый интеграл</b> функции на отрезке численно равен площади фигуры под графиком этой функции на этом отрезке (для неотрицательной функции).",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <line x1="15" y1="120" x2="190" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <path d="M20 110 Q100 20 180 60" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <path d="M60 120 L60 78 Q100 40 140 55 L140 120 Z" fill="#3B6EA5" opacity="0.3"/>
  <line x1="60" y1="120" x2="60" y2="78" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="140" y1="120" x2="140" y2="55" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="60" y="133" font-size="10" text-anchor="middle">a</text>
  <text x="140" y="133" font-size="10" text-anchor="middle">b</text>
  </svg>`,
  bank:[
    {p:"Что численно равно определённому интегралу неотрицательной функции на отрезке?",opts:["Площадь фигуры под графиком","Длина отрезка"],correct:0}
  ]},

{ n:"Показательные уравнения",
  explain:"<b>Показательное уравнение</b> содержит переменную в показателе степени, например 2ˣ=8. Решается приведением обеих частей к одному основанию: 2ˣ=2³, значит x=3.",
  svg:`<svg viewBox="0 0 220 60" width="220">
  <text x="15" y="38" font-size="18" fill="#3B6EA5" font-weight="700">2ˣ = 8</text>
  <text x="115" y="38" font-size="18" fill="#2B2A26">→</text>
  <text x="145" y="38" font-size="18" fill="#D6524F" font-weight="700">x = 3</text>
  </svg>`,
  bank:[
    {p:"Реши уравнение 2ˣ=8. Чему равен x?",opts:["3, так как 2³=8","8"],correct:0},
    {p:"Реши уравнение 3ˣ=9. Чему равен x?",opts:["2, так как 3²=9","9"],correct:0}
  ]},

{ n:"Логарифмические уравнения",
  explain:"<b>Логарифмическое уравнение</b> содержит переменную под знаком логарифма, например log₂x=3. Решается по определению логарифма: x=2³=8.",
  svg:`<svg viewBox="0 0 220 60" width="220">
  <text x="10" y="38" font-size="18" fill="#3B6EA5" font-weight="700">log₂x = 3</text>
  <text x="130" y="38" font-size="18" fill="#2B2A26">→</text>
  <text x="160" y="38" font-size="18" fill="#D6524F" font-weight="700">x=8</text>
  </svg>`,
  bank:[
    {p:"Реши уравнение log₂x=3. Чему равен x?",opts:["8, так как 2³=8","3"],correct:0}
  ]},

{ n:"Перестановки и сочетания",
  explain:"<b>Перестановка</b> n элементов — число способов расставить их по порядку (n!). <b>Сочетание</b> — число способов выбрать k элементов из n без учёта порядка.",
  svg:`<svg viewBox="0 0 200 90" width="200">
  <rect x="10" y="15" width="20" height="20" fill="#3B6EA5"/>
  <rect x="35" y="15" width="20" height="20" fill="#5F9A5C"/>
  <rect x="60" y="15" width="20" height="20" fill="#D6524F"/>
  <text x="100" y="30" font-size="16" fill="#2B2A26">→ 3! = 6</text>
  <text x="45" y="60" font-size="9" fill="#736C5E">способов расставить по порядку</text>
  </svg>`,
  bank:[
    {p:"Сколько перестановок можно составить из 3 различных элементов (3!)?",opts:["6","3"],correct:0},
    {p:"Учитывается ли порядок элементов в сочетании?",opts:["Нет, не учитывается","Да, всегда учитывается"],correct:0}
  ]},

{ n:"Вероятность события",
  explain:"<b>Вероятность</b> события — отношение числа благоприятных исходов к общему числу равновозможных исходов. Например, вероятность выпадения орла при подбрасывании монеты равна 1/2.",
  svg:`<svg viewBox="0 0 180 100" width="180">
  <circle cx="45" cy="45" r="30" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="45" y="52" font-size="16" text-anchor="middle" fill="#2B2A26">орёл</text>
  <text x="100" y="35" font-size="18" fill="#2B2A26">P =</text>
  <text x="140" y="28" font-size="16" fill="#3B6EA5" text-anchor="middle">1</text>
  <line x1="128" y1="35" x2="152" y2="35" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="140" y="52" font-size="16" fill="#3B6EA5" text-anchor="middle">2</text>
  </svg>`,
  bank:[
    {p:"Чему равна вероятность выпадения орла при подбрасывании монеты?",opts:["1/2","1"],correct:0},
    {p:"Как вычисляется вероятность события?",opts:["Число благоприятных исходов ÷ общее число исходов","Всегда равна единице"],correct:0}
  ]},

{ n:"Производная сложной функции",
  explain:"Для нахождения производной сложной функции (функции от функции) используют цепное правило: сначала берут производную внешней функции, затем умножают на производную внутренней.",
  svg:`<svg viewBox="0 0 260 80" width="260">
  <rect x="10" y="25" width="60" height="34" rx="6" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <text x="40" y="47" font-size="12" text-anchor="middle">x</text>
  <line x1="72" y1="42" x2="100" y2="42" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="100,42 92,37 92,47" fill="#2B2A26"/>
  <rect x="102" y="25" width="70" height="34" rx="6" fill="none" stroke="#5F9A5C" stroke-width="2"/>
  <text x="137" y="47" font-size="11" text-anchor="middle">внутр. g(x)</text>
  <line x1="174" y1="42" x2="202" y2="42" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="202,42 194,37 194,47" fill="#2B2A26"/>
  <rect x="204" y="25" width="50" height="34" rx="6" fill="none" stroke="#D6524F" stroke-width="2"/>
  <text x="229" y="47" font-size="11" text-anchor="middle">f(g)</text>
  </svg>`,
  bank:[
    {p:"Как называется правило нахождения производной функции от функции?",opts:["Цепное правило","Правило сложения"],correct:0}
  ]},

{ n:"Правило Ньютона-Лейбница",
  explain:"<b>Формула Ньютона-Лейбница</b> связывает определённый интеграл с первообразной: интеграл от a до b функции f(x) равен разности значений первообразной F(b) − F(a).",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <line x1="15" y1="120" x2="190" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <path d="M20 110 Q100 20 180 60" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <path d="M60 120 L60 78 Q100 40 140 55 L140 120 Z" fill="#3B6EA5" opacity="0.3"/>
  <text x="100" y="100" font-size="12" text-anchor="middle" fill="#284D77">F(b)−F(a)</text>
  <text x="60" y="133" font-size="10" text-anchor="middle">a</text>
  <text x="140" y="133" font-size="10" text-anchor="middle">b</text>
  </svg>`,
  bank:[
    {p:"Что связывает формула Ньютона-Лейбница?",opts:["Определённый интеграл с первообразной","Только два случайных числа"],correct:0}
  ]},

{ n:"Наибольшее и наименьшее значения функции",
  explain:"Чтобы найти наибольшее и наименьшее значения функции на отрезке, находят критические точки (где производная равна нулю или не существует) и сравнивают значения функции в этих точках и на концах отрезка.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <line x1="15" y1="110" x2="205" y2="110" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="30" y1="115" x2="30" y2="15" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="190" y1="115" x2="190" y2="15" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M30 90 Q90 20 120 60 Q160 100 190 40" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <circle cx="90" cy="30" r="4" fill="#3F7A3D"/><text x="90" y="20" font-size="9" text-anchor="middle" fill="#3F7A3D">max</text>
  <circle cx="160" cy="93" r="4" fill="#A83836"/><text x="160" y="107" font-size="9" text-anchor="middle" fill="#A83836">min</text>
  <text x="30" y="128" font-size="10" text-anchor="middle">a</text>
  <text x="190" y="128" font-size="10" text-anchor="middle">b</text>
  </svg>`,
  bank:[
    {p:"Что находят в первую очередь для поиска наибольшего/наименьшего значения функции?",opts:["Критические точки","Сразу окончательный ответ"],correct:0}
  ]},

{ n:"Формула бинома Ньютона",
  explain:"<b>Бином Ньютона</b> — формула для раскрытия скобок в выражении (a+b)ⁿ с использованием биномиальных коэффициентов (чисел сочетаний).",
  svg:`<svg viewBox="0 0 200 110" width="200">
  <text x="100" y="15" font-size="13" text-anchor="middle">1</text>
  <text x="90" y="35" font-size="13" text-anchor="middle">1</text><text x="110" y="35" font-size="13" text-anchor="middle">1</text>
  <text x="80" y="55" font-size="13" text-anchor="middle">1</text><text x="100" y="55" font-size="13" text-anchor="middle">2</text><text x="120" y="55" font-size="13" text-anchor="middle">1</text>
  <text x="70" y="75" font-size="13" text-anchor="middle">1</text><text x="90" y="75" font-size="13" text-anchor="middle">3</text><text x="110" y="75" font-size="13" text-anchor="middle">3</text><text x="130" y="75" font-size="13" text-anchor="middle">1</text>
  <text x="60" y="95" font-size="13" text-anchor="middle">1</text><text x="80" y="95" font-size="13" text-anchor="middle">4</text><text x="100" y="95" font-size="13" text-anchor="middle" fill="#D6524F">6</text><text x="120" y="95" font-size="13" text-anchor="middle">4</text><text x="140" y="95" font-size="13" text-anchor="middle">1</text>
  </svg>`,
  bank:[
    {p:"Для чего используют формулу бинома Ньютона?",opts:["Для раскрытия скобок в (a+b)ⁿ","Только для сложения двух чисел"],correct:0}
  ]}

];
