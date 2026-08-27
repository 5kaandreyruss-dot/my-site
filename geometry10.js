/* Геометрия, 10 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Начало стереометрии: точки, прямые, плоскости в пространстве, параллельность и перпендикулярность. */

const GEOMETRY10_MOD = [

{ n:"Стереометрия",
  explain:"<b>Стереометрия</b> — раздел геометрии, изучающий фигуры в пространстве (в отличие от планиметрии, изучающей фигуры на плоскости).",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <rect x="15" y="35" width="80" height="60" fill="#3B6EA5" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <text x="55" y="118" font-size="11" text-anchor="middle" fill="#736C5E">планиметрия</text>
  <polygon points="150,55 190,55 215,35 175,35" fill="#5F9A5C" opacity="0.25" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="190,55 190,95 215,75 215,35" fill="#5F9A5C" opacity="0.4" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="150,55 190,55 190,95 150,95" fill="#5F9A5C" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <path d="M175,75 L150,95 M175,75 L215,75 M175,75 L175,35" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="3 3" fill="none"/>
  <text x="190" y="118" font-size="11" text-anchor="middle" fill="#736C5E">стереометрия</text>
  </svg>`,
  bank:[
    {p:"Что изучает стереометрия?",opts:["Фигуры в пространстве","Только фигуры на плоскости"],correct:0}
  ]},

{ n:"Аксиомы стереометрии",
  explain:"Основные аксиомы стереометрии: через любые три точки, не лежащие на одной прямой, проходит единственная плоскость; если две точки прямой лежат в плоскости, то и вся прямая лежит в этой плоскости.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <polygon points="20,90 190,70 200,25 30,45" fill="#3B6EA5" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="60" cy="70" r="3.5" fill="#D6524F"/>
  <circle cx="140" cy="55" r="3.5" fill="#D6524F"/>
  <circle cx="90" cy="80" r="3.5" fill="#D6524F"/>
  <text x="55" y="62" font-size="12" font-weight="700">A</text>
  <text x="145" y="47" font-size="12" font-weight="700">B</text>
  <text x="80" y="98" font-size="12" font-weight="700">C</text>
  <text x="110" y="118" font-size="11" text-anchor="middle" fill="#736C5E">плоскость α — одна через A, B, C</text>
  </svg>`,
  bank:[
    {p:"Сколько плоскостей проходит через три точки, не лежащие на одной прямой?",opts:["Одна (единственная)","Бесконечно много"],correct:0}
  ]},

{ n:"Взаимное расположение прямых в пространстве",
  explain:"В пространстве прямые могут быть <b>пересекающимися</b> (имеют общую точку), <b>параллельными</b> (лежат в одной плоскости и не пересекаются) или <b>скрещивающимися</b> (не лежат в одной плоскости и не пересекаются).",
  svg:`<svg viewBox="0 0 320 130" width="320">
  <line x1="15" y1="30" x2="95" y2="110" stroke="#3B6EA5" stroke-width="2"/>
  <line x1="15" y1="110" x2="95" y2="30" stroke="#3B6EA5" stroke-width="2"/>
  <text x="55" y="125" font-size="10" text-anchor="middle" fill="#736C5E">пересекаются</text>
  <line x1="120" y1="30" x2="200" y2="30" stroke="#5F9A5C" stroke-width="2"/>
  <line x1="120" y1="90" x2="200" y2="90" stroke="#5F9A5C" stroke-width="2"/>
  <text x="160" y="125" font-size="10" text-anchor="middle" fill="#736C5E">параллельны</text>
  <polygon points="230,50 300,40 305,90 235,100" fill="#E3922E" opacity="0.15" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="225" y1="20" x2="280" y2="65" stroke="#D6524F" stroke-width="2"/>
  <line x1="260" y1="115" x2="310" y2="55" stroke="#D6524F" stroke-width="2"/>
  <text x="270" y="125" font-size="10" text-anchor="middle" fill="#736C5E">скрещиваются</text>
  </svg>`,
  bank:[
    {p:"Как называются прямые, которые не лежат в одной плоскости и не пересекаются?",opts:["Скрещивающиеся","Параллельные"],correct:0},
    {p:"Лежат ли параллельные прямые в одной плоскости?",opts:["Да, лежат","Нет, никогда"],correct:0}
  ]},

{ n:"Параллельность прямой и плоскости",
  explain:"Прямая называется <b>параллельной плоскости</b>, если она не имеет с этой плоскостью общих точек.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <polygon points="20,100 190,80 200,35 30,55" fill="#3B6EA5" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <line x1="30" y1="30" x2="190" y2="10" stroke="#D6524F" stroke-width="2.5"/>
  <line x1="55" y1="45" x2="55" y2="25" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="2 3"/>
  <line x1="150" y1="25" x2="150" y2="15" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="2 3"/>
  <text x="195" y="8" font-size="12" fill="#D6524F">a</text>
  <text x="150" y="68" font-size="12" fill="#3B6EA5">α</text>
  <text x="110" y="120" font-size="11" text-anchor="middle" fill="#736C5E">a ∥ α (общих точек нет)</text>
  </svg>`,
  bank:[
    {p:"Когда прямая параллельна плоскости?",opts:["Когда у них нет общих точек","Когда у них ровно одна общая точка"],correct:0}
  ]},

{ n:"Параллельность плоскостей",
  explain:"Две плоскости называются <b>параллельными</b>, если они не пересекаются, то есть не имеют общих точек.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <polygon points="20,110 190,90 200,45 30,65" fill="#3B6EA5" opacity="0.18" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="20,60 190,40 200,-5 30,15" fill="#5F9A5C" opacity="0.18" stroke="#2B2A26" stroke-width="2" transform="translate(0,10)"/>
  <text x="150" y="30" font-size="12" fill="#5F9A5C">β</text>
  <text x="150" y="80" font-size="12" fill="#3B6EA5">α</text>
  <text x="110" y="133" font-size="11" text-anchor="middle" fill="#736C5E">α ∥ β</text>
  </svg>`,
  bank:[
    {p:"Когда две плоскости называются параллельными?",opts:["Когда они не пересекаются","Когда у них есть общая прямая"],correct:0}
  ]},

{ n:"Перпендикулярность прямой и плоскости",
  explain:"Прямая перпендикулярна плоскости, если она перпендикулярна каждой прямой, лежащей в этой плоскости и проходящей через точку их пересечения.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <polygon points="15,100 185,100 165,130 -5,130" fill="#3B6EA5" opacity="0.18" stroke="#2B2A26" stroke-width="2" transform="translate(20,-20)"/>
  <line x1="100" y1="90" x2="100" y2="10" stroke="#D6524F" stroke-width="2.5"/>
  <text x="106" y="20" font-size="12" fill="#D6524F">a</text>
  <line x1="60" y1="93" x2="140" y2="87" stroke="#2B2A26" stroke-width="1.4"/>
  <line x1="75" y1="70" x2="125" y2="108" stroke="#2B2A26" stroke-width="1.4"/>
  <circle cx="100" cy="90" r="2.5" fill="#2B2A26"/>
  <text x="145" y="120" font-size="11" fill="#3B6EA5">α</text>
  <text x="100" y="150" font-size="11" text-anchor="middle" fill="#736C5E">a ⊥ α</text>
  </svg>`,
  bank:[
    {p:"Что значит, что прямая перпендикулярна плоскости?",opts:["Она перпендикулярна каждой прямой этой плоскости в точке пересечения","Она параллельна плоскости"],correct:0}
  ]},

{ n:"Двугранный угол",
  explain:"<b>Двугранный угол</b> — фигура, образованная двумя полуплоскостями, исходящими из одной прямой (ребра). Измеряется линейным углом, перпендикулярным ребру.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <polygon points="30,20 30,110 110,130 110,40" fill="#3B6EA5" opacity="0.18" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="30,20 30,110 190,90 190,0" fill="#D6524F" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <line x1="30" y1="20" x2="30" y2="110" stroke="#2B2A26" stroke-width="2.5"/>
  <path d="M55 65 A25 25 0 0 0 68 47" fill="none" stroke="#5F9A5C" stroke-width="1.6"/>
  <text x="62" y="75" font-size="11" fill="#5F9A5C">φ</text>
  <text x="18" y="65" font-size="11" fill="#736C5E">ребро</text>
  </svg>`,
  bank:[
    {p:"Чем образован двугранный угол?",opts:["Двумя полуплоскостями с общим ребром","Двумя точками"],correct:0}
  ]},

{ n:"Многогранники",
  explain:"<b>Многогранник</b> — тело, поверхность которого состоит из многоугольников (граней). Примеры многогранников: куб, призма, пирамида.",
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
  <text x="175" y="108" font-size="11" text-anchor="middle" fill="#736C5E">пирамида</text>
  </svg>`,
  bank:[
    {p:"Из чего состоит поверхность многогранника?",opts:["Из многоугольников (граней)","Только из кругов"],correct:0},
    {p:"Что из этого является многогранником?",opts:["Куб","Шар"],correct:0}
  ]},

{ n:"Призма",
  explain:"<b>Призма</b> — многогранник с двумя равными параллельными основаниями-многоугольниками и боковыми гранями-параллелограммами.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <polygon points="30,100 90,100 120,55 60,55" fill="#3B6EA5" opacity="0.22" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="90,100 60,50 90,5 120,55" fill="#3B6EA5" opacity="0.12" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="60,55 120,55 90,5" fill="#3B6EA5" opacity="0.32" stroke="#2B2A26" stroke-width="2"/>
  <path d="M30,100 L60,50 L60,55" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="3 3" fill="none"/>
  <text x="75" y="115" font-size="11" text-anchor="middle" fill="#736C5E">основание</text>
  </svg>`,
  bank:[
    {p:"Сколько оснований у призмы?",opts:["Два, равных и параллельных","Одно"],correct:0}
  ]},

{ n:"Пирамида",
  explain:"<b>Пирамида</b> — многогранник с одним основанием-многоугольником и боковыми гранями-треугольниками, сходящимися в одной вершине.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <polygon points="30,100 150,100 175,75 55,75" fill="#E3922E" opacity="0.2" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="15" x2="30" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="15" x2="150" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="15" x2="175" y2="75" stroke="#2B2A26" stroke-width="2"/>
  <line x1="100" y1="15" x2="55" y2="75" stroke="#736C5E" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="106" y="12" font-size="12" font-weight="700">S</text>
  <text x="90" y="120" font-size="11" text-anchor="middle" fill="#736C5E">основание</text>
  </svg>`,
  bank:[
    {p:"Сколько оснований у пирамиды?",opts:["Одно","Два"],correct:0},
    {p:"Какой формы боковые грани пирамиды?",opts:["Треугольные","Круглые"],correct:0}
  ]},

{ n:"Параллельность прямых в пространстве",
  explain:"Две прямые в пространстве параллельны, если они лежат в одной плоскости и не пересекаются. Если прямая параллельна прямой, лежащей в плоскости, она может быть параллельна и самой плоскости.",
  svg:`<svg viewBox="0 0 233 130" width="233">
  <polygon points="20,100 190,80 200,35 30,55" fill="#5F9A5C" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <line x1="45" y1="80" x2="170" y2="65" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="175" y="60" font-size="6" fill="#3B6EA5">b (в плоскости)</text>
  <line x1="55" y1="30" x2="180" y2="15" stroke="#D6524F" stroke-width="2.5"/>
  <text x="185" y="12" font-size="12" fill="#D6524F">a</text>
  <text x="110" y="118" font-size="11" text-anchor="middle" fill="#736C5E">a ∥ b ⇒ a ∥ α</text>
  </svg>`,
  bank:[
    {p:"Что необходимо для параллельности двух прямых в пространстве?",opts:["Лежать в одной плоскости и не пересекаться","Просто не пересекаться, неважно как"],correct:0}
  ]},

{ n:"Прямоугольный параллелепипед",
  explain:"<b>Прямоугольный параллелепипед</b> — многогранник с шестью прямоугольными гранями. Куб — частный случай параллелепипеда, где все грани — квадраты.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <polygon points="20,55 80,55 100,35 40,35" fill="#3B6EA5" opacity="0.25" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="80,55 80,105 100,85 100,35" fill="#3B6EA5" opacity="0.4" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="20,55 80,55 80,105 20,105" fill="#3B6EA5" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <path d="M40,85 L20,105 M40,85 L100,85 M40,85 L40,35" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
  <rect x="20" y="97" width="8" height="8" fill="none" stroke="#D6524F" stroke-width="1.3"/>
  <text x="50" y="120" font-size="6" text-anchor="middle" fill="#736C5E">все грани — прямоугольники</text>
  </svg>`,
  bank:[
    {p:"Сколько граней у прямоугольного параллелепипеда?",opts:["Шесть","Четыре"],correct:0},
    {p:"Чем является куб по отношению к параллелепипеду?",opts:["Частным случаем параллелепипеда","Совсем другой фигурой"],correct:0}
  ]},

{ n:"Сечения многогранников",
  explain:"<b>Сечение</b> многогранника — фигура, получаемая при пересечении многогранника плоскостью. Форма сечения зависит от положения секущей плоскости.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <polygon points="30,60 90,60 110,40 50,40" fill="#5F9A5C" opacity="0.15" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="90,60 90,110 110,90 110,40" fill="#5F9A5C" opacity="0.3" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="30,60 90,60 90,110 30,110" fill="#5F9A5C" opacity="0.1" stroke="#2B2A26" stroke-width="2"/>
  <path d="M50,90 L30,110 M50,90 L110,90 M50,90 L50,40" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
  <polygon points="30,80 90,60 110,75 55,105" fill="#D6524F" opacity="0.35" stroke="#A83836" stroke-width="2"/>
  <text x="60" y="128" font-size="11" text-anchor="middle" fill="#736C5E">секущая плоскость</text>
  </svg>`,
  bank:[
    {p:"Что такое сечение многогранника?",opts:["Фигура при пересечении многогранника плоскостью","Сама поверхность многогранника"],correct:0},
    {p:"От чего зависит форма сечения?",opts:["От положения секущей плоскости","От цвета многогранника"],correct:0}
  ]}

];
