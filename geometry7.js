/* Геометрия, 7 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Новый предмет для 7 класса: точки, прямые, углы, треугольники, признаки равенства, параллельность. */

const GEOMETRY7_MOD = [

{ n:"Точки и прямые",
  explain:"<b>Точка</b> и <b>прямая</b> — основные фигуры геометрии. Через две точки можно провести только одну прямую. Часть прямой между двумя точками называется <b>отрезком</b>.",
  svg:`<svg viewBox="0 0 220 100" width="220">
  <line x1="15" y1="50" x2="205" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="60" cy="50" r="4" fill="#3B6EA5"/>
  <circle cx="160" cy="50" r="4" fill="#3B6EA5"/>
  <text x="60" y="34" font-size="14" text-anchor="middle" font-weight="700">A</text>
  <text x="160" y="34" font-size="14" text-anchor="middle" font-weight="700">B</text>
  <text x="110" y="75" font-size="11" text-anchor="middle" fill="#736C5E">отрезок AB</text>
  </svg>`,
  bank:[
    {p:"Сколько прямых можно провести через две точки?",opts:["Только одну","Множество","Ни одной"],correct:0},
    {p:"Как называется часть прямой между двумя точками?",opts:["Отрезок","Луч","Угол"],correct:0},
    {p:"Имеет ли прямая начало и конец?",opts:["Нет, она бесконечна","Да, у неё есть концы"],correct:0}
  ]},

{ n:"Угол и его виды",
  explain:"<b>Угол</b> образуют два луча с общим началом. <b>Прямой</b> угол равен 90°, <b>острый</b> — меньше 90°, <b>тупой</b> — больше 90°, но меньше 180°.",
  svg:`<svg viewBox="0 0 330 130" width="330">
  <line x1="15" y1="95" x2="80" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <line x1="15" y1="95" x2="57" y2="53" stroke="#2B2A26" stroke-width="2"/>
  <text x="28" y="82" font-size="11" fill="#D6524F">40°</text>
  <text x="47" y="118" font-size="12" text-anchor="middle" fill="#736C5E">острый</text>
  <line x1="120" y1="95" x2="185" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <line x1="120" y1="95" x2="120" y2="30" stroke="#2B2A26" stroke-width="2"/>
  <rect x="120" y="85" width="10" height="10" fill="none" stroke="#3B6EA5" stroke-width="1.5"/>
  <text x="152" y="118" font-size="12" text-anchor="middle" fill="#736C5E">прямой</text>
  <line x1="225" y1="95" x2="290" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <line x1="225" y1="95" x2="186" y2="49" stroke="#2B2A26" stroke-width="2"/>
  <text x="196" y="75" font-size="11" fill="#D6524F">130°</text>
  <text x="257" y="118" font-size="12" text-anchor="middle" fill="#736C5E">тупой</text>
  </svg>`,
  bank:[
    {p:"Чему равен прямой угол?",opts:["90°","180°","45°"],correct:0},
    {p:"Острый угол — это угол...",opts:["Меньше 90°","Больше 90°","Равный 180°"],correct:0},
    {p:"Тупой угол — это угол...",opts:["Больше 90°, но меньше 180°","Меньше 90°"],correct:0},
    {p:"Чем образован угол?",opts:["Двумя лучами с общим началом","Двумя параллельными прямыми"],correct:0}
  ]},

{ n:"Вертикальные и смежные углы",
  explain:"<b>Смежные</b> углы имеют общую сторону, а их сумма равна 180°. <b>Вертикальные</b> углы образуются при пересечении двух прямых и всегда равны друг другу.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <line x1="20" y1="100" x2="180" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <line x1="40" y1="170" x2="160" y2="30" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#2B2A26"/>
  <text x="108" y="60" font-size="14" fill="#D6524F" font-weight="700">1</text>
  <text x="145" y="95" font-size="14" fill="#3B6EA5" font-weight="700">2</text>
  <text x="85" y="150" font-size="14" fill="#D6524F" font-weight="700">3</text>
  <text x="50" y="105" font-size="14" fill="#3B6EA5" font-weight="700">4</text>
  <text x="100" y="193" font-size="11" text-anchor="middle" fill="#736C5E">∠1=∠3, ∠2=∠4 (вертикальные)</text>
  </svg>`,
  bank:[
    {p:"Чему равна сумма смежных углов?",opts:["180°","90°","360°"],correct:0},
    {p:"Равны ли вертикальные углы друг другу?",opts:["Да, всегда равны","Нет, никогда не равны"],correct:0},
    {p:"При пересечении скольких прямых образуются вертикальные углы?",opts:["Двух","Трёх"],correct:0}
  ]},

{ n:"Треугольник и его элементы",
  explain:"<b>Треугольник</b> имеет три стороны, три угла и три вершины. Сумма углов любого треугольника всегда равна <b>180°</b>.",
  svg:`<svg viewBox="0 0 200 180" width="200">
  <polygon points="30,160 170,160 116,11" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="16" y="174" font-size="14" font-weight="700">A</text>
  <text x="178" y="174" font-size="14" font-weight="700">B</text>
  <text x="116" y="4" font-size="14" font-weight="700" text-anchor="middle">C</text>
  <text x="55" y="150" font-size="11" fill="#D6524F">60°</text>
  <text x="140" y="150" font-size="11" fill="#3B6EA5">70°</text>
  <text x="116" y="34" font-size="11" fill="#5F9A5C" text-anchor="middle">50°</text>
  </svg>`,
  bank:[
    {p:"Сколько сторон у треугольника?",opts:["Три","Четыре","Два"],correct:0},
    {p:"Чему равна сумма углов любого треугольника?",opts:["180°","360°","90°"],correct:0},
    {p:"Если два угла треугольника равны 60° и 70°, чему равен третий?",opts:["50°","60°","40°"],correct:0}
  ]},

{ n:"Виды треугольников по сторонам",
  explain:"По сторонам треугольники бывают: <b>равносторонний</b> (все стороны равны), <b>равнобедренный</b> (две стороны равны) и <b>разносторонний</b> (все стороны разные).",
  svg:`<svg viewBox="0 0 320 140" width="320">
  <polygon points="15,110 85,110 50,49" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="50" y1="107" x2="50" y2="113" stroke="#3E8F86" stroke-width="2"/>
  <line x1="64.1" y1="77.5" x2="71" y2="81.5" stroke="#3E8F86" stroke-width="2"/>
  <line x1="29" y1="81.5" x2="36" y2="77.5" stroke="#3E8F86" stroke-width="2"/>
  <text x="50" y="128" font-size="11" text-anchor="middle" fill="#736C5E">равносторонний</text>
  <polygon points="120,110 170,110 145,20" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="128.7" y1="63.9" x2="136.3" y2="66.1" stroke="#3E8F86" stroke-width="2"/>
  <line x1="153.7" y1="66.1" x2="161.3" y2="63.9" stroke="#3E8F86" stroke-width="2"/>
  <text x="145" y="128" font-size="11" text-anchor="middle" fill="#736C5E">равнобедренный</text>
  <polygon points="225,110 305,100 255,25" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="265" y="128" font-size="11" text-anchor="middle" fill="#736C5E">разносторонний</text>
  </svg>`,
  bank:[
    {p:"Треугольник со всеми равными сторонами называется...",opts:["Равносторонним","Равнобедренным","Разносторонним"],correct:0},
    {p:"Треугольник с двумя равными сторонами называется...",opts:["Равнобедренным","Равносторонним"],correct:0},
    {p:"Треугольник, у которого все стороны разной длины, называется...",opts:["Разносторонним","Равнобедренным"],correct:0}
  ]},

{ n:"Виды треугольников по углам",
  explain:"По углам треугольники делятся на: <b>остроугольный</b> (все углы острые), <b>прямоугольный</b> (один угол 90°) и <b>тупоугольный</b> (один угол тупой).",
  svg:`<svg viewBox="0 0 330 130" width="330">
  <polygon points="15,110 85,110 50,45" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="50" y="128" font-size="11" text-anchor="middle" fill="#736C5E">остроугольный</text>
  <polygon points="120,110 190,110 120,50" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <rect x="120" y="102" width="8" height="8" fill="none" stroke="#3B6EA5" stroke-width="1.5"/>
  <text x="155" y="128" font-size="11" text-anchor="middle" fill="#736C5E">прямоугольный</text>
  <polygon points="235,110 315,110 220,55" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="245" y="95" font-size="10" fill="#D6524F">105°</text>
  <text x="270" y="128" font-size="11" text-anchor="middle" fill="#736C5E">тупоугольный</text>
  </svg>`,
  bank:[
    {p:"Треугольник с одним углом 90° называется...",opts:["Прямоугольным","Остроугольным","Тупоугольным"],correct:0},
    {p:"Треугольник, где все углы острые, называется...",opts:["Остроугольным","Тупоугольным"],correct:0},
    {p:"В прямоугольном треугольнике сторону напротив прямого угла называют...",opts:["Гипотенузой","Катетом"],correct:0}
  ]},

{ n:"Признаки равенства треугольников",
  explain:"Треугольники равны, если у них равны: по <b>двум сторонам и углу между ними</b>; по <b>стороне и двум прилежащим углам</b>; или по <b>трём сторонам</b>.",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <polygon points="20,110 100,110 45,35" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="58" y1="106" x2="62" y2="114" stroke="#D6524F" stroke-width="2"/>
  <line x1="66" y1="106" x2="70" y2="114" stroke="#D6524F" stroke-width="2"/>
  <line x1="30" y1="76" x2="38" y2="72" stroke="#3B6EA5" stroke-width="2"/>
  <text x="130" y="78" font-size="22" text-anchor="middle" fill="#736C5E">≅</text>
  <polygon points="160,110 240,110 185,35" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="198" y1="106" x2="202" y2="114" stroke="#D6524F" stroke-width="2"/>
  <line x1="206" y1="106" x2="210" y2="114" stroke="#D6524F" stroke-width="2"/>
  <line x1="170" y1="76" x2="178" y2="72" stroke="#3B6EA5" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"По скольким основным признакам можно доказать равенство треугольников?",opts:["По трём","По одному","По десяти"],correct:0},
    {p:"Треугольники равны, если равны все их...",opts:["Стороны (по трём сторонам)","Только один угол"],correct:0},
    {p:"Зачем нужны признаки равенства треугольников?",opts:["Чтобы доказывать равенство фигур без измерения всех элементов","Просто для красоты"],correct:0}
  ]},

{ n:"Перпендикулярные прямые",
  explain:"Две прямые называются <b>перпендикулярными</b>, если они пересекаются под прямым углом (90°). Обозначаются знаком ⊥.",
  svg:`<svg viewBox="0 0 180 180" width="180">
  <line x1="20" y1="90" x2="160" y2="90" stroke="#2B2A26" stroke-width="2"/>
  <line x1="90" y1="20" x2="90" y2="160" stroke="#2B2A26" stroke-width="2"/>
  <rect x="90" y="78" width="12" height="12" fill="none" stroke="#D6524F" stroke-width="2"/>
  <text x="145" y="82" font-size="14" fill="#2B2A26">a</text>
  <text x="100" y="35" font-size="14" fill="#2B2A26">b</text>
  <text x="90" y="175" font-size="12" text-anchor="middle" fill="#736C5E">a ⊥ b</text>
  </svg>`,
  bank:[
    {p:"Под каким углом пересекаются перпендикулярные прямые?",opts:["Под прямым (90°)","Под любым"],correct:0},
    {p:"Каким знаком обозначают перпендикулярность?",opts:["⊥","||","="],correct:0}
  ]},

{ n:"Параллельные прямые",
  explain:"<b>Параллельные</b> прямые лежат в одной плоскости и никогда не пересекаются, сколько бы их ни продолжали. Обозначаются знаком ||.",
  svg:`<svg viewBox="0 0 200 120" width="200">
  <line x1="20" y1="35" x2="180" y2="35" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="85" x2="180" y2="85" stroke="#2B2A26" stroke-width="2"/>
  <path d="M90 30l8 5-8 5M100 30l8 5-8 5" stroke="#3B6EA5" stroke-width="2" fill="none"/>
  <path d="M90 80l8 5-8 5M100 80l8 5-8 5" stroke="#3B6EA5" stroke-width="2" fill="none"/>
  <text x="188" y="39" font-size="14">a</text>
  <text x="188" y="89" font-size="14">b</text>
  <text x="100" y="110" font-size="12" text-anchor="middle" fill="#736C5E">a ∥ b</text>
  </svg>`,
  bank:[
    {p:"Пересекаются ли параллельные прямые?",opts:["Никогда","Да, в одной точке"],correct:0},
    {p:"Каким знаком обозначают параллельность?",opts:["||","⊥","≈"],correct:0},
    {p:"Сколько прямых, параллельных данной, можно провести через точку вне неё?",opts:["Только одну","Множество"],correct:0}
  ]},

{ n:"Сумма углов при параллельных прямых",
  explain:"Когда параллельные прямые пересекает третья (секущая), образуются равные <b>накрест лежащие углы</b> и равные <b>соответственные углы</b>.",
  svg:`<svg viewBox="0 0 220 180" width="220">
  <line x1="20" y1="50" x2="200" y2="50" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="130" x2="200" y2="130" stroke="#2B2A26" stroke-width="2"/>
  <line x1="60" y1="15" x2="160" y2="165" stroke="#2B2A26" stroke-width="2"/>
  <path d="M78 45l8 5-8 5M88 45l8 5-8 5" stroke="#3B6EA5" stroke-width="1.6" fill="none"/>
  <path d="M132 125l8 5-8 5M142 125l8 5-8 5" stroke="#3B6EA5" stroke-width="1.6" fill="none"/>
  <text x="93" y="65" font-size="13" fill="#D6524F">1</text>
  <text x="106" y="120" font-size="13" fill="#D6524F">2</text>
  <text x="205" y="54" font-size="12">a</text>
  <text x="205" y="134" font-size="12">b</text>
  <text x="110" y="176" font-size="11" text-anchor="middle" fill="#736C5E">∠1=∠2 (накрест лежащие)</text>
  </svg>`,
  bank:[
    {p:"Как называется третья прямая, пересекающая две параллельные?",opts:["Секущая","Перпендикуляр"],correct:0},
    {p:"Равны ли накрест лежащие углы при параллельных прямых?",opts:["Да, равны","Нет, никогда"],correct:0},
    {p:"Равны ли соответственные углы при параллельных прямых?",opts:["Да, равны","Нет"],correct:0}
  ]},

{ n:"Медиана, биссектриса и высота треугольника",
  explain:"<b>Медиана</b> соединяет вершину с серединой противоположной стороны. <b>Биссектриса</b> делит угол пополам. <b>Высота</b> опущена из вершины перпендикулярно противоположной стороне.",
  svg:`<svg viewBox="0 0 220 165" width="220">
  <polygon points="30,140 190,140 90,30" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="16" y="152" font-size="13" font-weight="700">A</text>
  <text x="195" y="152" font-size="13" font-weight="700">B</text>
  <text x="90" y="22" font-size="13" font-weight="700" text-anchor="middle">C</text>
  <line x1="90" y1="30" x2="90" y2="140" stroke="#D6524F" stroke-width="2"/>
  <rect x="82" y="132" width="8" height="8" fill="none" stroke="#D6524F" stroke-width="1.5"/>
  <line x1="90" y1="30" x2="103" y2="140" stroke="#5F9A5C" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="90" y1="30" x2="110" y2="140" stroke="#3B6EA5" stroke-width="2" stroke-dasharray="1 4"/>
  <text x="79" y="158" font-size="10" fill="#D6524F">H</text>
  <text x="99" y="158" font-size="10" fill="#5F9A5C">Б</text>
  <text x="112" y="158" font-size="10" fill="#3B6EA5">M</text>
  </svg>`,
  bank:[
    {p:"Что соединяет медиана треугольника?",opts:["Вершину с серединой противоположной стороны","Две середины сторон"],correct:0},
    {p:"Что делает биссектриса угла?",opts:["Делит угол пополам","Делит сторону пополам"],correct:0},
    {p:"Под каким углом высота треугольника падает на сторону?",opts:["Под прямым (90°)","Под любым"],correct:0}
  ]},

{ n:"Окружность и круг",
  explain:"<b>Окружность</b> — линия, все точки которой равноудалены от центра. <b>Круг</b> — часть плоскости, ограниченная окружностью. Расстояние от центра до окружности — <b>радиус</b>.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="80" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#2B2A26"/>
  <line x1="100" y1="100" x2="180" y2="100" stroke="#3B6EA5" stroke-width="2"/>
  <line x1="20" y1="100" x2="180" y2="100" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="93" y="90" font-size="12">O</text>
  <text x="135" y="92" font-size="12" fill="#3B6EA5">r</text>
  <text x="100" y="118" font-size="12" fill="#D6524F" text-anchor="middle">d</text>
  </svg>`,
  bank:[
    {p:"Чем отличается окружность от круга?",opts:["Окружность — линия, круг — часть плоскости внутри неё","Это одно и то же"],correct:0},
    {p:"Как называется расстояние от центра окружности до любой её точки?",opts:["Радиус","Диаметр"],correct:0},
    {p:"Чему равен диаметр относительно радиуса?",opts:["В два раза больше радиуса","Равен радиусу"],correct:0}
  ]},

{ n:"Аксиомы геометрии",
  explain:"<b>Аксиома</b> — утверждение, принимаемое без доказательства (например, через две точки можно провести только одну прямую). На аксиомах строятся все остальные доказательства в геометрии.",
  bank:[
    {p:"Что такое аксиома?",opts:["Утверждение, принимаемое без доказательства","Утверждение, которое всегда нужно доказывать"],correct:0},
    {p:"На чём строятся доказательства теорем в геометрии?",opts:["На аксиомах и ранее доказанных теоремах","Только на догадках"],correct:0}
  ]}

];
