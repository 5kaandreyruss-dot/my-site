/* Физика, 9 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 8 класса: законы движения Ньютона, импульс, механические колебания и волны, электромагнитные явления, атом. */

const PHYSICS9_MOD = [

{ n:"Первый закон Ньютона",
  explain:"<b>Первый закон Ньютона</b>: тело сохраняет состояние покоя или равномерного прямолинейного движения, пока на него не подействуют другие тела (силы). Это также называют законом инерции.",
  svg:`<svg viewBox="0 0 240 100" width="240">
  <circle cx="30" cy="60" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <line x1="30" y1="60" x2="220" y2="60" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 4"/>
  <circle cx="100" cy="60" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2" opacity="0.5"/>
  <circle cx="180" cy="60" r="12" fill="#3B6EA5" stroke="#284D77" stroke-width="2" opacity="0.3"/>
  <line x1="196" y1="60" x2="220" y2="60" stroke="#3F7A3D" stroke-width="2.5"/>
  <polygon points="220,60 210,55 210,65" fill="#3F7A3D"/>
  <text x="120" y="30" font-size="9" text-anchor="middle" fill="#2B2A26">v = const, сил нет — тело движется равномерно</text>
  </svg>`,
  bank:[
    {p:"Как ещё называют первый закон Ньютона?",opts:["Закон инерции","Закон сохранения энергии"],correct:0},
    {p:"Что происходит с телом, на которое не действуют силы?",opts:["Оно сохраняет скорость (покой или равномерное движение)","Оно обязательно останавливается"],correct:0}
  ]},

{ n:"Второй закон Ньютона",
  explain:"<b>Второй закон Ньютона</b>: ускорение тела прямо пропорционально приложенной силе и обратно пропорционально массе тела: a = F/m, или F = ma.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <rect x="70" y="50" width="50" height="40" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
  <text x="95" y="75" font-size="12" text-anchor="middle" fill="#2B2A26">m</text>
  <line x1="120" y1="70" x2="185" y2="70" stroke="#D6524F" stroke-width="3"/>
  <polygon points="185,70 172,63 172,77" fill="#D6524F"/>
  <text x="150" y="55" font-size="12" fill="#A83836">F</text>
  <line x1="70" y1="70" x2="35" y2="45" stroke="#3F7A3D" stroke-width="2" stroke-dasharray="4 3"/>
  <polygon points="35,45 45,48 42,38" fill="#3F7A3D"/>
  <text x="25" y="35" font-size="11" fill="#3F7A3D">a</text>
  <text x="110" y="105" font-size="12" text-anchor="middle" fill="#2B2A26">F = m·a</text>
  </svg>`,
  bank:[
    {p:"Как формулируется второй закон Ньютона?",opts:["F = ma (сила равна массе на ускорение)","F = m/a"],correct:0},
    {p:"Если увеличить массу тела при той же силе, что произойдёт с ускорением?",opts:["Ускорение уменьшится","Ускорение увеличится"],correct:0}
  ]},

{ n:"Третий закон Ньютона",
  explain:"<b>Третий закон Ньютона</b>: тела действуют друг на друга с силами, равными по модулю и противоположными по направлению (сила действия равна силе противодействия).",
  svg:`<svg viewBox="0 0 240 100" width="240">
  <circle cx="60" cy="55" r="16" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="180" cy="55" r="16" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <line x1="78" y1="55" x2="122" y2="55" stroke="#284D77" stroke-width="3"/>
  <polygon points="122,55 110,49 110,61" fill="#284D77"/>
  <line x1="162" y1="55" x2="118" y2="55" stroke="#A83836" stroke-width="3"/>
  <polygon points="118,55 130,49 130,61" fill="#A83836"/>
  <text x="120" y="30" font-size="11" text-anchor="middle" fill="#2B2A26">F₁ = −F₂</text>
  </svg>`,
  bank:[
    {p:"Что говорит третий закон Ньютона о силах взаимодействия тел?",opts:["Они равны по модулю и противоположны по направлению","Одна сила всегда больше другой"],correct:0}
  ]},

{ n:"Импульс тела",
  explain:"<b>Импульс тела</b> — это произведение массы тела на его скорость: p = mv. В замкнутой системе тел общий импульс сохраняется — это <b>закон сохранения импульса</b>.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <circle cx="50" cy="60" r="18" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="50" y="65" font-size="11" text-anchor="middle" fill="#FFFEF8">m,v</text>
  <line x1="70" y1="60" x2="120" y2="60" stroke="#284D77" stroke-width="2.5"/>
  <polygon points="120,60 110,55 110,65" fill="#284D77"/>
  <circle cx="180" cy="60" r="10" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="180" y="64" font-size="9" text-anchor="middle" fill="#FFFEF8">m,v</text>
  <line x1="192" y1="60" x2="215" y2="60" stroke="#A83836" stroke-width="2"/>
  <polygon points="215,60 208,56 208,64" fill="#A83836"/>
  <text x="130" y="30" font-size="11" text-anchor="middle" fill="#2B2A26">p = m·v сохраняется</text>
  </svg>`,
  bank:[
    {p:"Как вычисляется импульс тела?",opts:["p = mv (масса × скорость)","p = m/v"],correct:0},
    {p:"Что происходит с общим импульсом в замкнутой системе?",opts:["Он сохраняется","Он всегда исчезает"],correct:0}
  ]},

{ n:"Свободное падение",
  explain:"<b>Свободное падение</b> — движение тела только под действием силы тяжести, без учёта сопротивления воздуха. Ускорение свободного падения на Земле примерно g ≈ 9,8 м/с².",
  svg:`<svg viewBox="0 0 140 160" width="140">
  <line x1="10" y1="10" x2="130" y2="10" stroke="#736C5E" stroke-width="2"/>
  <circle cx="70" cy="25" r="8" fill="#D6524F"/>
  <line x1="70" y1="35" x2="70" y2="55" stroke="#A83836" stroke-width="2"/><polygon points="70,55 65,47 75,47" fill="#A83836"/>
  <circle cx="70" cy="75" r="8" fill="#D6524F" opacity="0.7"/>
  <line x1="70" y1="85" x2="70" y2="115" stroke="#A83836" stroke-width="2"/><polygon points="70,115 65,105 75,105" fill="#A83836"/>
  <circle cx="70" cy="135" r="8" fill="#D6524F" opacity="0.4"/>
  <text x="90" y="60" font-size="7" fill="#A83836">g ≈ 9,8 м/с²</text>
  <line x1="10" y1="150" x2="130" y2="150" stroke="#2B2A26" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Под действием какой силы происходит свободное падение?",opts:["Только силы тяжести","Только силы трения"],correct:0},
    {p:"Чему примерно равно ускорение свободного падения на Земле?",opts:["Около 9,8 м/с²","Около 100 м/с²"],correct:0}
  ]},

{ n:"Механические колебания",
  explain:"<b>Колебания</b> — это повторяющиеся движения тела около положения равновесия, например качание маятника. Время одного полного колебания называют <b>периодом</b>.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <line x1="110" y1="10" x2="110" y2="30" stroke="#2B2A26" stroke-width="3"/>
  <path d="M40 110 Q75 25 110 30" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 4"/>
  <path d="M180 110 Q145 25 110 30" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 4"/>
  <line x1="110" y1="30" x2="40" y2="110" stroke="#2B2A26" stroke-width="2" opacity="0.4"/>
  <line x1="110" y1="30" x2="110" y2="125" stroke="#2B2A26" stroke-width="2"/>
  <line x1="110" y1="30" x2="180" y2="110" stroke="#2B2A26" stroke-width="2" opacity="0.4"/>
  <circle cx="40" cy="110" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="2" opacity="0.5"/>
  <circle cx="110" cy="125" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <circle cx="180" cy="110" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="2" opacity="0.5"/>
  <text x="110" y="15" font-size="10" text-anchor="middle" fill="#2B2A26">период Т — одно полное колебание</text>
  </svg>`,
  bank:[
    {p:"Что такое механические колебания?",opts:["Повторяющиеся движения около положения равновесия","Движение по прямой без остановки"],correct:0},
    {p:"Как называют время одного полного колебания?",opts:["Период","Амплитуда"],correct:0}
  ]},

{ n:"Механические волны и звук",
  explain:"<b>Волна</b> — это распространение колебаний в среде. <b>Звук</b> — это механическая волна, которую воспринимает слух человека; звук не может распространяться в вакууме, так как нужна среда (воздух, вода и т.п.).",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <path d="M10 55 Q25 25 40 55 T70 55 T100 55 T130 55" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="70" y="85" font-size="9" text-anchor="middle" fill="#284D77">звук в воздухе — есть волна</text>
  <rect x="150" y="20" width="80" height="70" fill="#2B2A26"/>
  <circle cx="190" cy="55" r="18" fill="none" stroke="#FFFEF8" stroke-width="1.5" opacity="0.5"/>
  <line x1="150" y1="20" x2="230" y2="90" stroke="#D6524F" stroke-width="3"/>
  <text x="190" y="102" font-size="10" text-anchor="middle" fill="#2B2A26">вакуум — звука нет</text>
  </svg>`,
  bank:[
    {p:"Что такое волна?",opts:["Распространение колебаний в среде","Просто неподвижный предмет"],correct:0},
    {p:"Может ли звук распространяться в вакууме (пустоте)?",opts:["Нет, нужна среда","Да, легко"],correct:0}
  ]},

{ n:"Электромагнитная индукция",
  explain:"<b>Электромагнитная индукция</b> — явление возникновения электрического тока в проводнике при изменении магнитного поля вокруг него. Это явление лежит в основе работы генераторов электричества.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <rect x="90" y="30" width="16" height="60" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <text x="98" y="24" font-size="10" text-anchor="middle" fill="#A83836">N</text>
  <path d="M120 30 q12-8 24 0 M120 42 q12-8 24 0 M120 54 q12-8 24 0 M120 66 q12-8 24 0 M120 78 q12-8 24 0 M120 90 q12-8 24 0" fill="none" stroke="#284D77" stroke-width="2"/>
  <line x1="60" y1="60" x2="90" y2="60" stroke="#D6524F" stroke-width="2"/>
  <polygon points="90,60 78,55 78,65" fill="#D6524F"/>
  <text x="70" y="50" font-size="9" fill="#A83836">магнит движется</text>
  <circle cx="200" cy="60" r="14" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <line x1="192" y1="60" x2="208" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="200,52 195,60 205,60" fill="#2B2A26"/>
  <text x="200" y="90" font-size="9" text-anchor="middle" fill="#2B2A26">возникает ток</text>
  </svg>`,
  bank:[
    {p:"Что такое электромагнитная индукция?",opts:["Возникновение тока при изменении магнитного поля","Притяжение двух одинаковых зарядов"],correct:0},
    {p:"Где применяется явление электромагнитной индукции?",opts:["В генераторах электричества","Только в термометрах"],correct:0}
  ]},

{ n:"Строение атома",
  explain:"<b>Атом</b> состоит из положительно заряженного ядра (протоны и нейтроны) и отрицательно заряженных электронов, движущихся вокруг ядра. Эту модель предложил Эрнест Резерфорд.",
  svg:`<svg viewBox="0 0 200 160" width="200">
  <ellipse cx="100" cy="80" rx="85" ry="30" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 4"/>
  <ellipse cx="100" cy="80" rx="30" ry="85" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 4"/>
  <circle cx="94" cy="76" r="6" fill="#D6524F"/><circle cx="106" cy="82" r="6" fill="#D6524F"/>
  <circle cx="100" cy="68" r="6" fill="#736C5E"/><circle cx="100" cy="90" r="6" fill="#736C5E"/>
  <circle cx="185" cy="80" r="5" fill="#3B6EA5"/>
  <circle cx="100" cy="8" r="5" fill="#3B6EA5"/>
  <text x="150" y="130" font-size="9" fill="#A83836">протон +</text>
  <text x="150" y="145" font-size="9" fill="#736C5E">нейтрон</text>
  <text x="20" y="130" font-size="9" fill="#284D77">электрон −</text>
  </svg>`,
  bank:[
    {p:"Из чего состоит ядро атома?",opts:["Из протонов и нейтронов","Только из электронов"],correct:0},
    {p:"Какой заряд имеют электроны?",opts:["Отрицательный","Положительный"],correct:0},
    {p:"Кто предложил ядерную модель атома?",opts:["Эрнест Резерфорд","Исаак Ньютон"],correct:0}
  ]},

{ n:"Закон сохранения энергии в механике",
  explain:"В замкнутой системе без трения полная механическая энергия (сумма кинетической и потенциальной) сохраняется — она может переходить из одной формы в другую, но не исчезает и не появляется из ниоткуда.",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <path d="M10 30 Q120 130 230 30" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="30" cy="38" r="10" fill="#D6524F"/>
  <text x="30" y="20" font-size="9" text-anchor="middle" fill="#A83836">Eп макс</text>
  <circle cx="120" cy="118" r="10" fill="#3B6EA5"/>
  <text x="120" y="60" font-size="9" text-anchor="middle" fill="#284D77">Ek макс</text>
  <circle cx="210" cy="38" r="10" fill="#D6524F"/>
  <text x="210" y="20" font-size="9" text-anchor="middle" fill="#A83836">Eп макс</text>
  <text x="120" y="16" font-size="10" text-anchor="middle" fill="#2B2A26">Eп + Ek = const</text>
  </svg>`,
  bank:[
    {p:"Что сохраняется в замкнутой системе без трения?",opts:["Полная механическая энергия","Только скорость"],correct:0},
    {p:"Может ли энергия переходить из одной формы в другую?",opts:["Да, может","Нет, никогда"],correct:0}
  ]},

{ n:"Амплитуда и частота колебаний",
  explain:"<b>Амплитуда</b> — наибольшее отклонение тела от положения равновесия при колебаниях. <b>Частота</b> показывает, сколько колебаний совершается за одну секунду, измеряется в герцах (Гц).",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <line x1="10" y1="55" x2="230" y2="55" stroke="#736C5E" stroke-width="1"/>
  <path d="M10 55 Q40 15 70 55 T130 55 T190 55" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <line x1="40" y1="55" x2="40" y2="15" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="2 2"/>
  <text x="52" y="30" font-size="10" fill="#A83836">амплитуда A</text>
  <line x1="70" y1="70" x2="130" y2="70" stroke="#3F7A3D" stroke-width="1.5"/>
  <polygon points="70,70 76,66 76,74" fill="#3F7A3D"/><polygon points="130,70 124,66 124,74" fill="#3F7A3D"/>
  <text x="100" y="90" font-size="10" text-anchor="middle" fill="#3F7A3D">период T = 1/ν</text>
  </svg>`,
  bank:[
    {p:"Что такое амплитуда колебаний?",opts:["Наибольшее отклонение от положения равновесия","Время одного колебания"],correct:0},
    {p:"В каких единицах измеряется частота колебаний?",opts:["В герцах (Гц)","В метрах"],correct:0}
  ]},

{ n:"Громкость и высота звука",
  explain:"<b>Громкость</b> звука зависит от амплитуды колебаний источника звука. <b>Высота</b> звука зависит от частоты колебаний: чем выше частота, тем выше звук.",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <path d="M10 30 Q25 10 40 30 T70 30 T100 30" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="55" y="55" font-size="9" text-anchor="middle" fill="#284D77">громко (больше A)</text>
  <path d="M10 85 Q25 78 40 85 T70 85 T100 85" fill="none" stroke="#3E8F86" stroke-width="2"/>
  <text x="55" y="105" font-size="9" text-anchor="middle" fill="#2C6D66">тихо (меньше A)</text>
  <path d="M140 30 Q148 15 156 30 T172 30 T188 30 T204 30 T220 30" fill="none" stroke="#D6524F" stroke-width="2"/>
  <text x="180" y="55" font-size="9" text-anchor="middle" fill="#A83836">высокий звук</text>
  <path d="M140 85 Q158 68 176 85 T212 85" fill="none" stroke="#E3922E" stroke-width="2"/>
  <text x="180" y="105" font-size="9" text-anchor="middle" fill="#B96F16">низкий звук</text>
  </svg>`,
  bank:[
    {p:"От чего зависит громкость звука?",opts:["От амплитуды колебаний","От цвета источника"],correct:0},
    {p:"От чего зависит высота звука?",opts:["От частоты колебаний","От громкости"],correct:0}
  ]},

{ n:"Радиоактивность и атомное ядро",
  explain:"Некоторые атомные ядра нестабильны и самопроизвольно распадаются, испуская излучение — это явление называют <b>радиоактивностью</b>. Число протонов в ядре определяет химический элемент.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <circle cx="80" cy="70" r="18" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="80" y="75" font-size="10" text-anchor="middle" fill="#FFFEF8">ядро</text>
  <line x1="95" y1="60" x2="160" y2="30" stroke="#284D77" stroke-width="2"/>
  <polygon points="160,30 148,32 152,40" fill="#284D77"/>
  <text x="165" y="28" font-size="10" fill="#284D77">α</text>
  <line x1="98" y1="70" x2="170" y2="70" stroke="#3F7A3D" stroke-width="2"/>
  <polygon points="170,70 160,65 160,75" fill="#3F7A3D"/>
  <text x="175" y="74" font-size="10" fill="#3F7A3D">β</text>
  <line x1="95" y1="82" x2="160" y2="112" stroke="#9973B8" stroke-width="2"/>
  <polygon points="160,112 148,108 154,100" fill="#9973B8"/>
  <text x="165" y="120" font-size="10" fill="#725189">γ</text>
  </svg>`,
  bank:[
    {p:"Что происходит при радиоактивном распаде?",opts:["Нестабильное ядро самопроизвольно распадается","Ядро становится стабильнее без изменений"],correct:0},
    {p:"Что определяет число протонов в ядре атома?",opts:["Химический элемент","Только массу электрона"],correct:0}
  ]}

];
