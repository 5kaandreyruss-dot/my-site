/* Геометрия, 9 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 8 класса: векторы, метод координат, окружность, длина окружности и площадь круга. */

const GEOMETRY9_MOD = [

{ n:"Вектор",
  explain:"<b>Вектор</b> — это отрезок, у которого указано направление (от начала к концу). Векторы характеризуются длиной (модулем) и направлением.",
  svg:`<svg viewBox="0 0 200 100" width="200">
  <line x1="20" y1="80" x2="170" y2="30" stroke="#3B6EA5" stroke-width="2.5"/>
  <polygon points="170,30 154,32 160,44" fill="#3B6EA5"/>
  <circle cx="20" cy="80" r="3" fill="#2B2A26"/>
  <text x="12" y="95" font-size="13" font-weight="700">A</text>
  <text x="176" y="30" font-size="13" font-weight="700">B</text>
  <text x="90" y="45" font-size="12" fill="#3B6EA5">a</text>
  </svg>`,
  bank:[
    {p:"Что такое вектор?",opts:["Отрезок с указанным направлением","Просто число"],correct:0},
    {p:"Чем характеризуется вектор?",opts:["Длиной и направлением","Только цветом"],correct:0}
  ]},

{ n:"Сложение векторов",
  explain:"Векторы можно складывать по правилу треугольника: конец первого вектора соединяют с началом второго, а сумма — вектор от начала первого до конца второго.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <line x1="20" y1="110" x2="100" y2="40" stroke="#3B6EA5" stroke-width="2.5"/>
  <polygon points="100,40 84,45 92,55" fill="#3B6EA5"/>
  <line x1="100" y1="40" x2="190" y2="70" stroke="#5F9A5C" stroke-width="2.5"/>
  <polygon points="190,70 174,64 178,78" fill="#5F9A5C"/>
  <line x1="20" y1="110" x2="190" y2="70" stroke="#D6524F" stroke-width="2.5" stroke-dasharray="6 4"/>
  <polygon points="190,70 173,68 178,80" fill="#D6524F"/>
  <text x="52" y="70" font-size="12" fill="#3B6EA5">a</text>
  <text x="150" y="48" font-size="12" fill="#5F9A5C">b</text>
  <text x="95" y="105" font-size="12" fill="#D6524F">a+b</text>
  </svg>`,
  bank:[
    {p:"Как складывают векторы по правилу треугольника?",opts:["Конец первого соединяют с началом второго","Складывают только длины без направления"],correct:0}
  ]},

{ n:"Координаты вектора",
  explain:"В прямоугольной системе координат вектор задаётся координатами: разностью координат конца и начала. Если A(x₁,y₁), B(x₂,y₂), то вектор AB имеет координаты (x₂−x₁; y₂−y₁).",
  svg:`<svg viewBox="0 0 200 170" width="200">
  <line x1="20" y1="150" x2="190" y2="150" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="30" y1="160" x2="30" y2="10" stroke="#736C5E" stroke-width="1.5"/>
  <text x="185" y="145" font-size="10" fill="#736C5E">x</text>
  <text x="35" y="15" font-size="10" fill="#736C5E">y</text>
  <line x1="50" y1="130" x2="140" y2="50" stroke="#3B6EA5" stroke-width="2.5"/>
  <polygon points="140,50 124,54 130,65" fill="#3B6EA5"/>
  <circle cx="50" cy="130" r="3" fill="#2B2A26"/>
  <circle cx="140" cy="50" r="3" fill="#2B2A26"/>
  <line x1="50" y1="130" x2="140" y2="130" stroke="#D6524F" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="140" y1="130" x2="140" y2="50" stroke="#D6524F" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="45" y="145" font-size="10">A(1;2)</text>
  <text x="146" y="45" font-size="10">B(4;6)</text>
  <text x="90" y="145" font-size="10" fill="#D6524F">3</text>
  <text x="146" y="95" font-size="10" fill="#D6524F">4</text>
  </svg>`,
  bank:[
    {p:"Как найти координаты вектора AB, если A(1,2), B(4,6)?",opts:["(3; 4)","(5; 8)"],correct:0},
    {p:"Как находят координаты вектора?",opts:["Разностью координат конца и начала","Суммой всех координат"],correct:0}
  ]},

{ n:"Метод координат: расстояние между точками",
  explain:"Расстояние между точками A(x₁,y₁) и B(x₂,y₂) находится по формуле, похожей на теорему Пифагора: d = √((x₂−x₁)² + (y₂−y₁)²).",
  svg:`<svg viewBox="0 0 200 170" width="200">
  <line x1="20" y1="150" x2="190" y2="150" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="30" y1="160" x2="30" y2="10" stroke="#736C5E" stroke-width="1.5"/>
  <circle cx="30" cy="150" r="3" fill="#2B2A26"/>
  <circle cx="90" cy="70" r="3" fill="#2B2A26"/>
  <line x1="30" y1="150" x2="90" y2="70" stroke="#D6524F" stroke-width="2.5"/>
  <line x1="30" y1="150" x2="90" y2="150" stroke="#3B6EA5" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="90" y1="150" x2="90" y2="70" stroke="#3B6EA5" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="20" y="164" font-size="10">A(0;0)</text>
  <text x="96" y="65" font-size="10">B(3;4)</text>
  <text x="52" y="145" font-size="10" fill="#3B6EA5">3</text>
  <text x="96" y="112" font-size="10" fill="#3B6EA5">4</text>
  <text x="45" y="105" font-size="11" fill="#D6524F">d=5</text>
  </svg>`,
  bank:[
    {p:"На какую теорему похожа формула расстояния между точками?",opts:["На теорему Пифагора","На теорему Виета"],correct:0},
    {p:"Расстояние между точками A(0,0) и B(3,4) равно...",opts:["5","7"],correct:0}
  ]},

{ n:"Скалярное произведение векторов",
  explain:"<b>Скалярное произведение</b> двух векторов равно произведению их длин на косинус угла между ними. Если векторы перпендикулярны, их скалярное произведение равно нулю.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <line x1="30" y1="110" x2="150" y2="110" stroke="#3B6EA5" stroke-width="2.5"/>
  <polygon points="150,110 134,105 134,115" fill="#3B6EA5"/>
  <line x1="30" y1="110" x2="30" y2="20" stroke="#5F9A5C" stroke-width="2.5"/>
  <polygon points="30,20 25,36 35,36" fill="#5F9A5C"/>
  <rect x="30" y="100" width="10" height="10" fill="none" stroke="#D6524F" stroke-width="1.5"/>
  <text x="90" y="126" font-size="12" fill="#3B6EA5">a</text>
  <text x="12" y="60" font-size="12" fill="#5F9A5C">b</text>
  <text x="45" y="93" font-size="11" fill="#D6524F">a·b=0</text>
  </svg>`,
  bank:[
    {p:"Чему равно скалярное произведение перпендикулярных векторов?",opts:["Нулю","Единице"],correct:0}
  ]},

{ n:"Центральные и вписанные углы",
  explain:"<b>Центральный угол</b> опирается на дугу окружности и равен этой дуге по градусной мере. <b>Вписанный угол</b> опирается на ту же дугу и равен половине центрального угла.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="105" r="75" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M100 30 A75 75 0 0 1 165 140" fill="none" stroke="#E3922E" stroke-width="4"/>
  <line x1="100" y1="105" x2="100" y2="30" stroke="#3B6EA5" stroke-width="2"/>
  <line x1="100" y1="105" x2="165" y2="140" stroke="#3B6EA5" stroke-width="2"/>
  <text x="118" y="90" font-size="11" fill="#3B6EA5">80°</text>
  <line x1="26" y1="119" x2="100" y2="30" stroke="#D6524F" stroke-width="2"/>
  <line x1="26" y1="119" x2="165" y2="140" stroke="#D6524F" stroke-width="2"/>
  <text x="48" y="120" font-size="11" fill="#D6524F">40°</text>
  <circle cx="100" cy="105" r="3" fill="#2B2A26"/>
  <circle cx="26" cy="119" r="3" fill="#2B2A26"/>
  </svg>`,
  bank:[
    {p:"Чему равен вписанный угол, опирающийся на дугу 80°?",opts:["40°","80°"],correct:0},
    {p:"Вписанный угол равен... центрального угла на ту же дугу.",opts:["Половине","Двум"],correct:0}
  ]},

{ n:"Вписанная и описанная окружности",
  explain:"<b>Вписанная</b> окружность касается всех сторон многоугольника изнутри. <b>Описанная</b> окружность проходит через все вершины многоугольника.",
  svg:`<svg viewBox="0 0 300 150" width="300">
  <polygon points="45,130 135,130 90,20" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="90" cy="100" r="30" fill="none" stroke="#3B6EA5" stroke-width="1.6"/>
  <text x="90" y="145" font-size="11" text-anchor="middle" fill="#736C5E">вписанная</text>
  <polygon points="215,125 280,125 247.5,35" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="247.5" cy="86" r="51" fill="none" stroke="#D6524F" stroke-width="1.6"/>
  <text x="246" y="145" font-size="11" text-anchor="middle" fill="#736C5E">описанная</text>
  </svg>`,
  bank:[
    {p:"Что делает вписанная окружность?",opts:["Касается всех сторон многоугольника","Проходит через все вершины"],correct:0},
    {p:"Что делает описанная окружность?",opts:["Проходит через все вершины многоугольника","Касается только одной стороны"],correct:0}
  ]},

{ n:"Длина окружности",
  explain:"Длина окружности вычисляется по формуле C = 2πr, где r — радиус, а π ≈ 3,14.",
  svg:`<svg viewBox="0 0 200 190" width="200">
  <circle cx="100" cy="90" r="75" fill="none" stroke="#3B6EA5" stroke-width="3"/>
  <circle cx="100" cy="90" r="3" fill="#2B2A26"/>
  <line x1="100" y1="90" x2="175" y2="90" stroke="#D6524F" stroke-width="2"/>
  <text x="130" y="82" font-size="12" fill="#D6524F">r</text>
  <text x="100" y="180" font-size="12" text-anchor="middle" fill="#736C5E">C = 2πr</text>
  </svg>`,
  bank:[
    {p:"По какой формуле вычисляется длина окружности?",opts:["C = 2πr","C = πr²"],correct:0},
    {p:"Чему приблизительно равна длина окружности радиусом 10 см (π≈3,14)?",opts:["Около 62,8 см","Около 31,4 см"],correct:0}
  ]},

{ n:"Площадь круга",
  explain:"Площадь круга вычисляется по формуле S = πr², где r — радиус круга.",
  svg:`<svg viewBox="0 0 200 190" width="200">
  <circle cx="100" cy="90" r="75" fill="#3B6EA5" opacity="0.18" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="100" cy="90" r="3" fill="#2B2A26"/>
  <line x1="100" y1="90" x2="175" y2="90" stroke="#D6524F" stroke-width="2"/>
  <text x="130" y="82" font-size="12" fill="#D6524F">r</text>
  <text x="100" y="180" font-size="12" text-anchor="middle" fill="#736C5E">S = πr²</text>
  </svg>`,
  bank:[
    {p:"По какой формуле вычисляется площадь круга?",opts:["S = πr²","S = 2πr"],correct:0},
    {p:"Правильный многоугольник — это многоугольник, у которого...",opts:["Все стороны и все углы равны","Только стороны равны"],correct:0}
  ]},

{ n:"Умножение вектора на число",
  explain:"При умножении вектора на число k его длина умножается на |k|, а направление сохраняется, если k>0, и меняется на противоположное, если k<0.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <line x1="20" y1="90" x2="60" y2="60" stroke="#2B2A26" stroke-width="2.5"/>
  <polygon points="60,60 45,60 51,72" fill="#2B2A26"/>
  <text x="34" y="70" font-size="11">a</text>
  <line x1="20" y1="115" x2="100" y2="55" stroke="#3B6EA5" stroke-width="2.5"/>
  <polygon points="100,55 82,57 87,68" fill="#3B6EA5"/>
  <text x="55" y="100" font-size="11" fill="#3B6EA5">2a</text>
  <line x1="160" y1="30" x2="120" y2="60" stroke="#D6524F" stroke-width="2.5"/>
  <polygon points="120,60 135,58 130,70" fill="#D6524F"/>
  <text x="140" y="42" font-size="11" fill="#D6524F">-a</text>
  </svg>`,
  bank:[
    {p:"Что происходит с длиной вектора при умножении на число k?",opts:["Умножается на |k|","Не меняется никогда"],correct:0},
    {p:"Что происходит с направлением вектора, если k < 0?",opts:["Меняется на противоположное","Остаётся тем же"],correct:0}
  ]},

{ n:"Правильные многоугольники и окружность",
  explain:"Вокруг любого правильного многоугольника можно описать окружность, и в него же можно вписать окружность — обе окружности имеют общий центр.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#D6524F" stroke-width="1.6"/>
  <circle cx="100" cy="100" r="69.3" fill="none" stroke="#3B6EA5" stroke-width="1.6"/>
  <polygon points="100,20 169.3,60 169.3,140 100,180 30.7,140 30.7,60" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="100" cy="100" r="2.5" fill="#2B2A26"/>
  <text x="106" y="103" font-size="10" fill="#736C5E">O</text>
  </svg>`,
  bank:[
    {p:"Можно ли описать окружность вокруг правильного многоугольника?",opts:["Да, всегда можно","Нет, никогда"],correct:0},
    {p:"Имеют ли вписанная и описанная окружности правильного многоугольника общий центр?",opts:["Да, общий центр","Нет, разные центры"],correct:0}
  ]},

{ n:"Движение фигур на плоскости",
  explain:"<b>Движение</b> — преобразование плоскости, сохраняющее расстояния между точками. К движениям относят параллельный перенос, поворот и симметрию (осевую и центральную).",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <polygon points="30,110 70,110 30,60" fill="#3B6EA5" opacity="0.2" stroke="#3B6EA5" stroke-width="2"/>
  <polygon points="130,90 170,90 130,40" fill="#D6524F" opacity="0.2" stroke="#D6524F" stroke-width="2"/>
  <line x1="72" y1="85" x2="120" y2="65" stroke="#2B2A26" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#arrow9)"/>
  <defs><marker id="arrow9" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2B2A26"/></marker></defs>
  <text x="85" y="115" font-size="10" text-anchor="middle" fill="#736C5E">перенос</text>
  </svg>`,
  bank:[
    {p:"Что сохраняет движение фигуры на плоскости?",opts:["Расстояния между точками","Только цвет фигуры"],correct:0},
    {p:"Что из этого — вид движения?",opts:["Параллельный перенос","Растяжение фигуры"],correct:0}
  ]}

];
