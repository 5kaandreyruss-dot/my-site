/* Физика, 7 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Новый предмет для 7 класса: что изучает физика, движение, масса, плотность, сила, давление. */

const PHYSICS7_MOD = [

{ n:"Что изучает физика",
  explain:"<b>Физика</b> — наука о простейших и самых общих явлениях природы: движении, тепле, свете, электричестве. Физики изучают явления с помощью наблюдений и опытов.",
  svg:`<svg viewBox="0 0 260 110" width="260">
  <text x="130" y="16" font-size="12" text-anchor="middle" fill="#2B2A26" font-weight="700">Физика изучает явления природы</text>
  <g transform="translate(20,35)">
    <line x1="0" y1="40" x2="40" y2="40" stroke="#3B6EA5" stroke-width="3"/>
    <polygon points="40,40 30,34 30,46" fill="#3B6EA5"/>
    <text x="20" y="60" font-size="8" text-anchor="middle" fill="#284D77">движение</text>
  </g>
  <g transform="translate(85,20)">
    <rect x="10" y="0" width="8" height="35" rx="4" fill="#D6524F"/>
    <circle cx="14" cy="42" r="9" fill="#D6524F"/>
    <text x="14" y="65" font-size="10" text-anchor="middle" fill="#A83836">тепло</text>
  </g>
  <g transform="translate(150,15)">
    <circle cx="18" cy="18" r="12" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
    <line x1="18" y1="0" x2="18" y2="-6" stroke="#C99A00" stroke-width="2"/>
    <line x1="0" y1="18" x2="-6" y2="18" stroke="#C99A00" stroke-width="2"/>
    <line x1="36" y1="18" x2="42" y2="18" stroke="#C99A00" stroke-width="2"/>
    <text x="18" y="50" font-size="10" text-anchor="middle" fill="#C99A00">свет</text>
  </g>
  <g transform="translate(205,18)">
    <polygon points="10,0 0,24 8,24 4,42 22,16 12,16 18,0" fill="#E3922E" stroke="#B96F16" stroke-width="1"/>
    <text x="12" y="58" font-size="7" text-anchor="middle" fill="#B96F16">эл-во</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что изучает физика?",opts:["Простейшие и общие явления природы","Только живые организмы","Только языки"],correct:0},
    {p:"С помощью чего физики изучают явления природы?",opts:["Наблюдений и опытов","Только фантазии"],correct:0},
    {p:"Учёного, который занимается физикой, называют...",opts:["Физик","Биолог","Историк"],correct:0}
  ]},

{ n:"Физические величины и измерения",
  explain:"<b>Физическая величина</b> — то, что можно измерить: длина, масса, время. У каждой величины есть <b>единица измерения</b>: метр, килограмм, секунда.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <g transform="translate(10,20)">
    <rect x="0" y="30" width="70" height="14" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
    <line x1="10" y1="30" x2="10" y2="38" stroke="#2B2A26" stroke-width="1"/>
    <line x1="24" y1="30" x2="24" y2="38" stroke="#2B2A26" stroke-width="1"/>
    <line x1="38" y1="30" x2="38" y2="38" stroke="#2B2A26" stroke-width="1"/>
    <line x1="52" y1="30" x2="52" y2="38" stroke="#2B2A26" stroke-width="1"/>
    <text x="35" y="60" font-size="10" text-anchor="middle" fill="#2B2A26">длина, м</text>
  </g>
  <g transform="translate(95,10)">
    <circle cx="30" cy="30" r="22" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
    <line x1="30" y1="30" x2="30" y2="14" stroke="#2B2A26" stroke-width="2"/>
    <line x1="30" y1="30" x2="42" y2="30" stroke="#2B2A26" stroke-width="2"/>
    <text x="30" y="68" font-size="10" text-anchor="middle" fill="#2B2A26">время, с</text>
  </g>
  <g transform="translate(170,15)">
    <rect x="0" y="30" width="50" height="6" fill="#2B2A26"/>
    <line x1="25" y1="30" x2="25" y2="10" stroke="#2B2A26" stroke-width="2"/>
    <rect x="4" y="36" width="16" height="12" fill="#3B6EA5"/>
    <rect x="30" y="36" width="16" height="12" fill="#3B6EA5"/>
    <text x="25" y="62" font-size="10" text-anchor="middle" fill="#2B2A26">масса, кг</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что такое физическая величина?",opts:["То, что можно измерить","Только число без смысла"],correct:0},
    {p:"В каких единицах измеряют длину в физике?",opts:["В метрах","В килограммах","В секундах"],correct:0},
    {p:"В каких единицах измеряют массу?",opts:["В килограммах","В метрах","В литрах"],correct:0},
    {p:"Прибор для измерения времени называется...",opts:["Часы","Весы","Линейка"],correct:0}
  ]},

{ n:"Механическое движение",
  explain:"<b>Механическое движение</b> — изменение положения тела относительно других тел с течением времени. Тело, относительно которого рассматривают движение, называют <b>телом отсчёта</b>.",
  svg:`<svg viewBox="-30 0 270 120" width="270">
  <line x1="10" y1="100" x2="230" y2="100" stroke="#2B2A26" stroke-width="2"/>
  <g transform="translate(40,55)">
    <rect x="0" y="10" width="4" height="35" fill="#3F7A3D"/>
    <circle cx="2" cy="6" r="12" fill="#5F9A5C"/>
    <text x="2" y="60" font-size="6" text-anchor="middle" fill="#3F7A3D">тело отсчёта</text>
  </g>
  <g transform="translate(140,75)">
    <rect x="-18" y="-10" width="36" height="14" rx="3" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
    <circle cx="-10" cy="6" r="5" fill="#2B2A26"/>
    <circle cx="10" cy="6" r="5" fill="#2B2A26"/>
  </g>
  <path d="M100 60 Q160 40 210 60" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="3 4"/>
  <polygon points="210,60 200,55 202,64" fill="#736C5E"/>
  <text x="155" y="35" font-size="10" text-anchor="middle" fill="#2B2A26">движение автомобиля</text>
  </svg>`,
  bank:[
    {p:"Что такое механическое движение?",opts:["Изменение положения тела относительно других тел","Изменение цвета тела"],correct:0},
    {p:"Как называется тело, относительно которого рассматривают движение?",opts:["Тело отсчёта","Тело притяжения"],correct:0},
    {p:"Может ли тело одновременно двигаться относительно одного тела и покоиться относительно другого?",opts:["Да, может","Нет, никогда"],correct:0}
  ]},

{ n:"Скорость",
  explain:"<b>Скорость</b> показывает, какой путь тело проходит за единицу времени. Скорость = путь ÷ время. Измеряется, например, в км/ч или м/с.",
  svg:`<svg viewBox="0 0 220 150" width="220">
  <line x1="30" y1="10" x2="30" y2="130" stroke="#2B2A26" stroke-width="2"/>
  <line x1="30" y1="130" x2="210" y2="130" stroke="#2B2A26" stroke-width="2"/>
  <text x="14" y="20" font-size="11" fill="#2B2A26">s, м</text>
  <text x="195" y="145" font-size="11" fill="#2B2A26">t, с</text>
  <line x1="30" y1="130" x2="180" y2="30" stroke="#3B6EA5" stroke-width="2.5"/>
  <line x1="100" y1="130" x2="100" y2="80" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="30" y1="80" x2="100" y2="80" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="105" y="145" font-size="10" fill="#2B2A26">10 с</text>
  <text x="4" y="83" font-size="10" fill="#2B2A26">100 м</text>
  <text x="118" y="60" font-size="11" fill="#284D77">v = s/t = 10 м/с</text>
  </svg>`,
  bank:[
    {p:"Что показывает скорость движения?",opts:["Какой путь тело проходит за единицу времени","Только массу тела"],correct:0},
    {p:"Как найти скорость, зная путь и время?",opts:["Путь разделить на время","Путь умножить на время"],correct:0},
    {p:"В каких единицах часто измеряют скорость автомобиля?",opts:["Км/ч","Кг","Секунды"],correct:0},
    {p:"Если тело прошло 100 м за 10 секунд, какова его скорость?",opts:["10 м/с","100 м/с","1 м/с"],correct:0}
  ]},

{ n:"Масса и плотность",
  explain:"<b>Масса</b> — величина, показывающая количество вещества в теле, измеряется в килограммах. <b>Плотность</b> показывает, какая масса приходится на единицу объёма вещества.",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <g transform="translate(20,20)">
    <rect x="0" y="0" width="80" height="80" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="20" cy="20" r="4" fill="#B96F16"/><circle cx="55" cy="25" r="4" fill="#B96F16"/>
    <circle cx="30" cy="55" r="4" fill="#B96F16"/><circle cx="62" cy="60" r="4" fill="#B96F16"/>
    <text x="40" y="100" font-size="11" text-anchor="middle" fill="#2B2A26">дерево</text>
    <text x="40" y="114" font-size="9" text-anchor="middle" fill="#736C5E">низкая плотность</text>
  </g>
  <g transform="translate(140,20)">
    <rect x="0" y="0" width="80" height="80" fill="#E9EEF3" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="14" cy="14" r="4" fill="#284D77"/><circle cx="34" cy="14" r="4" fill="#284D77"/><circle cx="54" cy="14" r="4" fill="#284D77"/><circle cx="70" cy="14" r="4" fill="#284D77"/>
    <circle cx="14" cy="34" r="4" fill="#284D77"/><circle cx="34" cy="34" r="4" fill="#284D77"/><circle cx="54" cy="34" r="4" fill="#284D77"/><circle cx="70" cy="34" r="4" fill="#284D77"/>
    <circle cx="14" cy="54" r="4" fill="#284D77"/><circle cx="34" cy="54" r="4" fill="#284D77"/><circle cx="54" cy="54" r="4" fill="#284D77"/><circle cx="70" cy="54" r="4" fill="#284D77"/>
    <circle cx="14" cy="70" r="4" fill="#284D77"/><circle cx="34" cy="70" r="4" fill="#284D77"/><circle cx="54" cy="70" r="4" fill="#284D77"/><circle cx="70" cy="70" r="4" fill="#284D77"/>
    <text x="40" y="100" font-size="11" text-anchor="middle" fill="#2B2A26">металл</text>
    <text x="40" y="114" font-size="8" text-anchor="middle" fill="#736C5E">высокая плотность</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что показывает масса тела?",opts:["Количество вещества в теле","Скорость тела"],correct:0},
    {p:"В чём измеряется масса?",opts:["В килограммах","В метрах","В секундах"],correct:0},
    {p:"Что показывает плотность вещества?",opts:["Массу, приходящуюся на единицу объёма","Только цвет вещества"],correct:0},
    {p:"Какой прибор используют для измерения массы?",opts:["Весы","Линейку","Секундомер"],correct:0}
  ]},

{ n:"Сила",
  explain:"<b>Сила</b> — причина изменения скорости тела или его формы. Сила имеет числовое значение и направление, измеряется в <b>ньютонах (Н)</b>.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <rect x="70" y="45" width="60" height="45" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
  <line x1="130" y1="67" x2="195" y2="67" stroke="#D6524F" stroke-width="3"/>
  <polygon points="195,67 182,60 182,74" fill="#D6524F"/>
  <text x="160" y="55" font-size="13" fill="#A83836">F = 20 Н</text>
  <line x1="20" y1="90" x2="200" y2="90" stroke="#2B2A26" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Что может вызвать сила, действуя на тело?",opts:["Изменение скорости или формы тела","Только изменение цвета"],correct:0},
    {p:"В каких единицах измеряется сила?",opts:["В ньютонах","В метрах","В килограммах"],correct:0},
    {p:"Имеет ли сила направление?",opts:["Да, имеет","Нет, только числовое значение"],correct:0}
  ]},

{ n:"Сила тяжести и вес",
  explain:"<b>Сила тяжести</b> — сила, с которой Земля притягивает тела к себе. <b>Вес тела</b> — сила, с которой тело давит на опору или растягивает подвес.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <line x1="30" y1="10" x2="170" y2="10" stroke="#2B2A26" stroke-width="3"/>
  <path d="M100 10 q-6 8 0 16 q6 8 0 16 q-6 8 0 16 q6 8 0 16" fill="none" stroke="#736C5E" stroke-width="2"/>
  <rect x="80" y="74" width="40" height="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <line x1="100" y1="104" x2="100" y2="140" stroke="#D6524F" stroke-width="3"/>
  <polygon points="100,140 94,128 106,128" fill="#D6524F"/>
  <text x="115" y="150" font-size="11" fill="#A83836">P (вес)</text>
  <text x="30" y="30" font-size="11" fill="#2B2A26">пружина</text>
  </svg>`,
  bank:[
    {p:"Что такое сила тяжести?",opts:["Сила притяжения тела к Земле","Сила трения о воздух"],correct:0},
    {p:"Что такое вес тела?",opts:["Сила, с которой тело давит на опору","То же самое, что масса"],correct:0},
    {p:"Изменится ли вес тела в невесомости (например, в космосе)?",opts:["Да, станет равным нулю","Нет, останется тем же"],correct:0}
  ]},

{ n:"Давление",
  explain:"<b>Давление</b> показывает, с какой силой давят на единицу площади поверхности. Давление = сила ÷ площадь. Одна и та же сила на маленькой площади создаёт большее давление.",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <g transform="translate(20,10)">
    <line x1="40" y1="0" x2="40" y2="40" stroke="#D6524F" stroke-width="3"/>
    <polygon points="40,0 34,10 46,10" fill="#D6524F"/>
    <polygon points="30,40 50,40 40,70" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
    <line x1="10" y1="70" x2="90" y2="70" stroke="#2B2A26" stroke-width="3"/>
    <text x="40" y="95" font-size="10" text-anchor="middle" fill="#2B2A26">острый: S мала</text>
    <text x="40" y="108" font-size="9" text-anchor="middle" fill="#A83836">давление больше</text>
  </g>
  <g transform="translate(140,10)">
    <line x1="40" y1="0" x2="40" y2="40" stroke="#D6524F" stroke-width="3"/>
    <polygon points="40,0 34,10 46,10" fill="#D6524F"/>
    <rect x="20" y="40" width="40" height="30" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
    <line x1="10" y1="70" x2="90" y2="70" stroke="#2B2A26" stroke-width="3"/>
    <text x="40" y="95" font-size="9" text-anchor="middle" fill="#2B2A26">тупой: S больше</text>
    <text x="40" y="108" font-size="9" text-anchor="middle" fill="#3F7A3D">давление меньше</text>
  </g>
  </svg>`,
  bank:[
    {p:"Что показывает давление?",opts:["Силу, действующую на единицу площади","Только массу тела"],correct:0},
    {p:"Как найти давление, зная силу и площадь?",opts:["Силу разделить на площадь","Силу умножить на площадь"],correct:0},
    {p:"Почему острый нож режет легче тупого при той же силе нажатия?",opts:["У острого ножа меньше площадь — больше давление","Острый нож тяжелее"],correct:0},
    {p:"Почему лыжи помогают не проваливаться в снег?",opts:["Увеличивают площадь опоры и уменьшают давление","Делают человека легче"],correct:0}
  ]},

{ n:"Простые механизмы",
  explain:"<b>Простые механизмы</b> — рычаг, блок, наклонная плоскость — помогают увеличить силу или изменить направление действия при выполнении работы.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <polygon points="120,70 108,95 132,95" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="70" x2="220" y2="70" stroke="#2B2A26" stroke-width="4"/>
  <circle cx="120" cy="70" r="3" fill="#FFFEF8"/>
  <rect x="8" y="46" width="24" height="24" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <text x="20" y="42" font-size="10" text-anchor="middle" fill="#A83836">F1</text>
  <rect x="205" y="50" width="18" height="18" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <text x="214" y="42" font-size="10" text-anchor="middle" fill="#284D77">F2</text>
  <text x="120" y="112" font-size="10" text-anchor="middle" fill="#2B2A26">рычаг: точка опоры посередине</text>
  </svg>`,
  bank:[
    {p:"Для чего служат простые механизмы?",opts:["Увеличить силу или изменить направление действия","Только для украшения"],correct:0},
    {p:"Что из этого — простой механизм?",opts:["Рычаг","Компьютер","Телефон"],correct:0},
    {p:"Качели — пример какого простого механизма?",opts:["Рычага","Блока"],correct:0}
  ]},

{ n:"Инерция и взаимодействие тел",
  explain:"<b>Инерция</b> — свойство тел сохранять скорость движения, пока на них не подействует сила. Если одно тело действует на другое, то и второе всегда действует на первое — это <b>взаимодействие тел</b>.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <rect x="30" y="55" width="90" height="40" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="50" cy="98" r="10" fill="#2B2A26"/><circle cx="100" cy="98" r="10" fill="#2B2A26"/>
  <circle cx="95" cy="65" r="8" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <line x1="95" y1="65" x2="130" y2="55" stroke="#D6524F" stroke-width="3"/>
  <polygon points="130,55 118,52 122,63" fill="#D6524F"/>
  <text x="150" y="48" font-size="7" fill="#A83836">по инерции продолжает</text>
  <text x="150" y="60" font-size="10" fill="#A83836">двигаться вперёд</text>
  <line x1="150" y1="105" x2="10" y2="105" stroke="#736C5E" stroke-width="2"/>
  <polygon points="10,105 20,100 20,110" fill="#736C5E"/>
  <text x="60" y="118" font-size="10" fill="#2B2A26">торможение автобуса</text>
  </svg>`,
  bank:[
    {p:"Что такое инерция?",opts:["Свойство тела сохранять скорость без действия силы","Свойство тела всегда ускоряться"],correct:0},
    {p:"Почему пассажиров в машине толкает вперёд при резком торможении?",opts:["Из-за инерции тела продолжают двигаться","Машина притягивает их назад"],correct:0},
    {p:"Если тело А действует на тело Б, действует ли Б на А?",opts:["Да, это взаимодействие","Нет, только одно тело действует"],correct:0}
  ]},

{ n:"Строение вещества: молекулы",
  explain:"Все вещества состоят из мельчайших частиц — <b>молекул</b>, которые находятся в постоянном движении и притягиваются друг к другу. Между молекулами есть промежутки.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <circle cx="60" cy="50" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <circle cx="100" cy="40" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <circle cx="130" cy="70" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <circle cx="80" cy="90" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <circle cx="150" cy="35" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <line x1="70" y1="52" x2="90" y2="42" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="110" y1="42" x2="122" y2="63" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="65" y1="58" x2="75" y2="82" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <text x="110" y="120" font-size="10" text-anchor="middle" fill="#2B2A26">молекулы притягиваются,</text>
  <text x="110" y="133" font-size="10" text-anchor="middle" fill="#2B2A26">между ними есть промежутки</text>
  </svg>`,
  bank:[
    {p:"Из чего состоят все вещества?",opts:["Из молекул","Из сплошной массы без частиц"],correct:0},
    {p:"Есть ли промежутки между молекулами?",opts:["Да, есть","Нет, молекулы вплотную друг к другу без зазоров"],correct:0},
    {p:"Находятся ли молекулы в движении?",opts:["Да, постоянно движутся","Нет, они всегда неподвижны"],correct:0}
  ]},

{ n:"Три состояния вещества",
  explain:"Вещество может находиться в твёрдом, жидком и газообразном состоянии. В твёрдом теле молекулы расположены плотно и почти не двигаются, в газе — далеко друг от друга и двигаются свободно.",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <g transform="translate(0,0)">
    <rect x="4" y="10" width="70" height="70" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="20" cy="26" r="4" fill="#3B6EA5"/><circle cx="38" cy="26" r="4" fill="#3B6EA5"/><circle cx="56" cy="26" r="4" fill="#3B6EA5"/>
    <circle cx="20" cy="44" r="4" fill="#3B6EA5"/><circle cx="38" cy="44" r="4" fill="#3B6EA5"/><circle cx="56" cy="44" r="4" fill="#3B6EA5"/>
    <circle cx="20" cy="62" r="4" fill="#3B6EA5"/><circle cx="38" cy="62" r="4" fill="#3B6EA5"/><circle cx="56" cy="62" r="4" fill="#3B6EA5"/>
    <text x="39" y="95" font-size="10" text-anchor="middle" fill="#2B2A26">твёрдое</text>
  </g>
  <g transform="translate(95,0)">
    <rect x="4" y="10" width="70" height="70" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="18" cy="30" r="4" fill="#3E8F86"/><circle cx="40" cy="24" r="4" fill="#3E8F86"/><circle cx="58" cy="34" r="4" fill="#3E8F86"/>
    <circle cx="26" cy="50" r="4" fill="#3E8F86"/><circle cx="50" cy="52" r="4" fill="#3E8F86"/>
    <circle cx="20" cy="68" r="4" fill="#3E8F86"/><circle cx="45" cy="70" r="4" fill="#3E8F86"/><circle cx="62" cy="60" r="4" fill="#3E8F86"/>
    <text x="39" y="95" font-size="10" text-anchor="middle" fill="#2B2A26">жидкое</text>
  </g>
  <g transform="translate(190,0)">
    <rect x="4" y="10" width="70" height="70" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
    <circle cx="14" cy="20" r="3.5" fill="#E3922E"/><circle cx="55" cy="18" r="3.5" fill="#E3922E"/>
    <circle cx="30" cy="45" r="3.5" fill="#E3922E"/><circle cx="62" cy="55" r="3.5" fill="#E3922E"/>
    <circle cx="12" cy="65" r="3.5" fill="#E3922E"/><circle cx="45" cy="70" r="3.5" fill="#E3922E"/>
    <text x="39" y="95" font-size="10" text-anchor="middle" fill="#2B2A26">газообразное</text>
  </g>
  </svg>`,
  bank:[
    {p:"В каком состоянии молекулы расположены наиболее плотно?",opts:["В твёрдом","В газообразном"],correct:0},
    {p:"В каком состоянии молекулы двигаются наиболее свободно?",opts:["В газообразном","В твёрдом"],correct:0},
    {p:"Сохраняет ли жидкость свою форму без сосуда?",opts:["Нет, принимает форму сосуда","Да, всегда сохраняет форму"],correct:0}
  ]},

{ n:"Архимедова сила",
  explain:"На тело, погружённое в жидкость или газ, действует выталкивающая <b>архимедова сила</b>, равная весу вытесненной жидкости. Именно поэтому корабли и рыбы могут плавать.",
  svg:`<svg viewBox="0 0 200 165" width="200">
  <rect x="10" y="60" width="180" height="80" fill="#DCE9F6" stroke="#3B6EA5" stroke-width="1.5"/>
  <path d="M10 60 q10 -4 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#3B6EA5" stroke-width="1.5"/>
  <rect x="80" y="75" width="40" height="40" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <line x1="100" y1="75" x2="100" y2="45" stroke="#5F9A5C" stroke-width="3"/>
  <polygon points="100,45 94,55 106,55" fill="#5F9A5C"/>
  <text x="100" y="35" font-size="11" text-anchor="middle" fill="#3F7A3D">Fₐ (выталкивающая)</text>
  <line x1="100" y1="115" x2="100" y2="145" stroke="#D6524F" stroke-width="3"/>
  <polygon points="100,145 94,135 106,135" fill="#D6524F"/>
  <text x="140" y="152" font-size="8" fill="#A83836">mg (тяжесть)</text>
  </svg>`,
  bank:[
    {p:"Как называется выталкивающая сила, действующая на тело в жидкости?",opts:["Архимедова сила","Сила тяжести"],correct:0},
    {p:"Чему равна архимедова сила?",opts:["Весу вытесненной жидкости","Весу самого тела всегда"],correct:0},
    {p:"Благодаря какой силе большие металлические корабли способны плавать?",opts:["Архимедовой силе","Только силе трения"],correct:0}
  ]},

{ n:"Работа и мощность",
  explain:"<b>Механическая работа</b> совершается, когда сила перемещает тело: A = F × s. <b>Мощность</b> показывает, какую работу совершают за единицу времени: N = A / t.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <line x1="20" y1="95" x2="220" y2="95" stroke="#2B2A26" stroke-width="2"/>
  <rect x="40" y="65" width="40" height="30" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <line x1="80" y1="80" x2="120" y2="80" stroke="#D6524F" stroke-width="3"/>
  <polygon points="120,80 108,74 108,86" fill="#D6524F"/>
  <text x="100" y="65" font-size="11" fill="#A83836">F</text>
  <path d="M60 100 q60 20 120 0" fill="none" stroke="#736C5E" stroke-width="1.5" stroke-dasharray="3 4"/>
  <text x="130" y="115" font-size="11" fill="#2B2A26">s (путь)</text>
  <text x="150" y="40" font-size="9" fill="#2B2A26">A = F·s,  N = A/t</text>
  </svg>`,
  bank:[
    {p:"Когда совершается механическая работа?",opts:["Когда сила перемещает тело","Всегда, даже без движения"],correct:0},
    {p:"Что показывает мощность?",opts:["Работу за единицу времени","Только массу тела"],correct:0},
    {p:"Как найти работу, зная силу и путь?",opts:["Умножить силу на путь","Разделить силу на путь"],correct:0}
  ]}

];
