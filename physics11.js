/* Физика, 11 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Электромагнитные волны, оптика, элементы теории относительности, квантовая и ядерная физика. */

const PHYSICS11_MOD = [

{ n:"Электромагнитные волны",
  explain:"<b>Электромагнитная волна</b> — распространяющееся в пространстве переменное электромагнитное поле. К электромагнитным волнам относятся радиоволны, свет, рентгеновское излучение.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <line x1="10" y1="55" x2="230" y2="55" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <path d="M10 55 Q35 15 60 55 T110 55 T160 55 T210 55" fill="none" stroke="#D6524F" stroke-width="2.5"/>
  <path d="M10 55 Q35 95 60 55 T110 55 T160 55 T210 55" fill="none" stroke="#3B6EA5" stroke-width="2.5" transform="rotate(90 10 55) translate(-45 45)"/>
  <text x="55" y="18" font-size="10" fill="#A83836">E — электрическое поле</text>
  <text x="35" y="95" font-size="10" fill="#284D77">B — магнитное поле</text>
  <line x1="215" y1="55" x2="230" y2="55" stroke="#2B2A26" stroke-width="1"/>
  <polygon points="230,55 222,51 222,59" fill="#2B2A26"/>
  </svg>`,
  bank:[
    {p:"Что из этого относится к электромагнитным волнам?",opts:["Свет","Звук"],correct:0},
    {p:"Нужна ли электромагнитной волне среда для распространения?",opts:["Нет, она распространяется и в вакууме","Да, обязательно нужна среда"],correct:0}
  ]},

{ n:"Скорость света",
  explain:"Скорость света в вакууме — фундаментальная физическая постоянная, приблизительно равная 300 000 км/с. Это максимально возможная скорость передачи взаимодействий.",
  svg:`<svg viewBox="0 0 240 100" width="240">
  <circle cx="30" cy="50" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <circle cx="210" cy="50" r="10" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <line x1="46" y1="50" x2="195" y2="50" stroke="#E3922E" stroke-width="2.5" stroke-dasharray="6 4"/>
  <polygon points="195,50 185,45 185,55" fill="#E3922E"/>
  <text x="120" y="35" font-size="11" text-anchor="middle" fill="#B96F16">c ≈ 300 000 км/с</text>
  <text x="30" y="78" font-size="9" text-anchor="middle" fill="#2B2A26">Земля</text>
  <text x="210" y="72" font-size="9" text-anchor="middle" fill="#2B2A26">Луна ~1,3 с</text>
  </svg>`,
  bank:[
    {p:"Чему приблизительно равна скорость света в вакууме?",opts:["300 000 км/с","300 км/с"],correct:0}
  ]},

{ n:"Отражение и преломление света",
  explain:"При падении на границу двух сред свет частично <b>отражается</b> (угол падения равен углу отражения) и частично <b>преломляется</b>, меняя направление при переходе в другую среду.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="0" y="70" width="220" height="55" fill="#DCE9F6"/>
  <line x1="110" y1="10" x2="110" y2="125" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="60" y1="20" x2="110" y2="70" stroke="#D6524F" stroke-width="2.5"/>
  <polygon points="110,70 96,55 100,63" fill="#D6524F"/>
  <line x1="110" y1="70" x2="160" y2="20" stroke="#D6524F" stroke-width="2" stroke-dasharray="4 3"/>
  <polygon points="160,20 148,26 154,33" fill="#D6524F"/>
  <line x1="110" y1="70" x2="135" y2="122" stroke="#3B6EA5" stroke-width="2.5"/>
  <polygon points="135,122 121,105 128,102" fill="#3B6EA5"/>
  <text x="60" y="15" font-size="9" fill="#A83836">падающий</text>
  <text x="160" y="15" font-size="9" fill="#A83836">отражённый</text>
  <text x="140" y="120" font-size="9" fill="#284D77">преломлённый</text>
  </svg>`,
  bank:[
    {p:"Как соотносятся угол падения и угол отражения света?",opts:["Они равны","Угол отражения всегда вдвое больше"],correct:0}
  ]},

{ n:"Линзы",
  explain:"<b>Линза</b> — прозрачное тело, ограниченное двумя сферическими (или одной сферической и одной плоской) поверхностями. Линзы бывают собирающими и рассеивающими.",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <g transform="translate(0,0)">
    <path d="M55 15 Q80 55 55 95 Q30 55 55 15" fill="#DCE9F6" stroke="#284D77" stroke-width="1.5"/>
    <line x1="10" y1="30" x2="55" y2="55" stroke="#D6524F" stroke-width="1.8"/>
    <line x1="55" y1="55" x2="115" y2="55" stroke="#D6524F" stroke-width="1.8"/>
    <line x1="10" y1="80" x2="55" y2="55" stroke="#D6524F" stroke-width="1.8"/>
    <line x1="55" y1="55" x2="115" y2="55" stroke="#D6524F" stroke-width="0"/>
    <circle cx="115" cy="55" r="2.5" fill="#A83836"/>
    <text x="55" y="112" font-size="10" text-anchor="middle" fill="#2B2A26">собирающая</text>
  </g>
  <g transform="translate(140,0)">
    <path d="M55 15 Q35 55 55 95 Q75 55 55 15" fill="#FDE3DC" stroke="#A83836" stroke-width="1.5"/>
    <line x1="10" y1="30" x2="55" y2="55" stroke="#3B6EA5" stroke-width="1.8"/>
    <line x1="55" y1="55" x2="115" y2="20" stroke="#3B6EA5" stroke-width="1.8"/>
    <line x1="10" y1="80" x2="55" y2="55" stroke="#3B6EA5" stroke-width="1.8"/>
    <line x1="55" y1="55" x2="115" y2="90" stroke="#3B6EA5" stroke-width="1.8"/>
    <text x="55" y="112" font-size="10" text-anchor="middle" fill="#2B2A26">рассеивающая</text>
  </g>
  </svg>`,
  bank:[
    {p:"Какие два основных вида линз существуют?",opts:["Собирающие и рассеивающие","Только круглые и квадратные"],correct:0}
  ]},

{ n:"Интерференция и дифракция света",
  explain:"<b>Интерференция</b> — явление наложения световых волн с усилением или ослаблением. <b>Дифракция</b> — огибание светом препятствий. Оба явления подтверждают волновую природу света.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <rect x="10" y="10" width="10" height="100" fill="#2B2A26"/>
  <rect x="10" y="35" width="10" height="6" fill="#FFFEF8"/>
  <rect x="10" y="75" width="10" height="6" fill="#FFFEF8"/>
  <path d="M20 38 Q60 38 100 20 M20 38 Q60 38 100 60 M20 38 Q60 38 100 100" fill="none" stroke="#D6524F" stroke-width="1" opacity="0.7"/>
  <path d="M20 78 Q60 78 100 20 M20 78 Q60 78 100 60 M20 78 Q60 78 100 100" fill="none" stroke="#3B6EA5" stroke-width="1" opacity="0.7"/>
  <rect x="185" y="10" width="6" height="100" fill="#736C5E"/>
  <rect x="150" y="14" width="4" height="4" fill="#5F9A5C"/>
  <rect x="150" y="30" width="4" height="4" fill="#5F9A5C"/>
  <rect x="150" y="55" width="4" height="4" fill="#3F7A3D"/>
  <rect x="150" y="80" width="4" height="4" fill="#5F9A5C"/>
  <rect x="150" y="96" width="4" height="4" fill="#5F9A5C"/>
  <text x="60" y="115" font-size="9" text-anchor="middle" fill="#2B2A26">интерференция</text>
  <text x="168" y="115" font-size="9" text-anchor="middle" fill="#2B2A26">дифракция</text>
  </svg>`,
  bank:[
    {p:"Что подтверждают интерференция и дифракция света?",opts:["Волновую природу света","Что свет не существует"],correct:0}
  ]},

{ n:"Постулаты теории относительности",
  explain:"Специальная теория относительности Эйнштейна основана на двух постулатах: законы физики одинаковы во всех инерциальных системах отсчёта, а скорость света в вакууме постоянна для всех наблюдателей.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <rect x="10" y="55" width="70" height="35" rx="4" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <line x1="80" y1="72" x2="120" y2="20" stroke="#FFDE59" stroke-width="2.5"/>
  <polygon points="120,20 110,24 116,30" fill="#FFDE59"/>
  <text x="45" y="50" font-size="9" text-anchor="middle" fill="#284D77">поезд движется</text>
  <rect x="150" y="55" width="70" height="35" rx="4" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2" opacity="0.7"/>
  <line x1="185" y1="55" x2="215" y2="10" stroke="#FFDE59" stroke-width="2.5"/>
  <polygon points="215,10 205,14 211,20" fill="#FFDE59"/>
  <text x="185" y="50" font-size="9" text-anchor="middle" fill="#3F7A3D">наблюдатель стоит</text>
  <text x="120" y="105" font-size="10" text-anchor="middle" fill="#2B2A26">оба измерят c одинаковой</text>
  </svg>`,
  bank:[
    {p:"Кто создал специальную теорию относительности?",opts:["Альберт Эйнштейн","Исаак Ньютон"],correct:0},
    {p:"Меняется ли скорость света в вакууме для разных наблюдателей по теории относительности?",opts:["Нет, она постоянна для всех","Да, она у каждого своя"],correct:0}
  ]},

{ n:"Фотоэффект и кванты света",
  explain:"<b>Фотоэффект</b> — явление вырывания электронов из вещества под действием света. Объяснение фотоэффекта показало, что свет ведёт себя не только как волна, но и как поток частиц — фотонов (квантов).",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <rect x="20" y="60" width="180" height="30" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <line x1="60" y1="15" x2="100" y2="58" stroke="#FFDE59" stroke-width="3"/>
  <polygon points="100,58 88,50 94,44" fill="#FFDE59"/>
  <text x="55" y="10" font-size="10" fill="#C99A00">фотон hν</text>
  <circle cx="140" cy="45" r="6" fill="#284D77"/>
  <text x="140" y="30" font-size="9" text-anchor="middle" fill="#284D77">e⁻</text>
  <line x1="140" y1="39" x2="160" y2="10" stroke="#284D77" stroke-width="2"/>
  <polygon points="160,10 150,14 156,20" fill="#284D77"/>
  </svg>`,
  bank:[
    {p:"Что происходит с электронами при фотоэффекте?",opts:["Они вырываются из вещества под действием света","Они образуют новое вещество"],correct:0},
    {p:"Как называют частицы света?",opts:["Фотоны (кванты)","Протоны"],correct:0}
  ]},

{ n:"Строение атомного ядра",
  explain:"Атомное ядро состоит из протонов (положительно заряженных) и нейтронов (нейтральных), которые вместе называют нуклонами. Число протонов определяет химический элемент.",
  svg:`<svg viewBox="0 0 180 130" width="180">
  <circle cx="55" cy="55" r="9" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <circle cx="75" cy="45" r="9" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <circle cx="70" cy="70" r="9" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="90" cy="60" r="9" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="90" cy="80" r="9" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <circle cx="55" cy="80" r="9" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="10" y="20" font-size="9" fill="#A83836">● протон</text>
  <text x="10" y="112" font-size="9" fill="#2B2A26">● нейтрон</text>
  <text x="72" y="120" font-size="9" text-anchor="middle" fill="#2B2A26">нуклоны в ядре</text>
  </svg>`,
  bank:[
    {p:"Из чего состоит атомное ядро?",opts:["Из протонов и нейтронов","Только из электронов"],correct:0},
    {p:"Что определяет число протонов в ядре?",opts:["Химический элемент","Только массу ядра"],correct:0}
  ]},

{ n:"Радиоактивность",
  explain:"<b>Радиоактивность</b> — самопроизвольный распад ядер некоторых атомов с испусканием излучения. Явление было открыто Анри Беккерелем и изучено супругами Кюри.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <circle cx="70" cy="65" r="20" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="70" y="70" font-size="10" text-anchor="middle" fill="#FFFEF8">ядро</text>
  <line x1="88" y1="55" x2="150" y2="25" stroke="#284D77" stroke-width="2"/>
  <polygon points="150,25 138,27 142,35" fill="#284D77"/>
  <text x="155" y="22" font-size="10" fill="#284D77">α</text>
  <line x1="92" y1="65" x2="160" y2="65" stroke="#3F7A3D" stroke-width="2"/>
  <polygon points="160,65 150,60 150,70" fill="#3F7A3D"/>
  <text x="165" y="69" font-size="10" fill="#3F7A3D">β</text>
  <line x1="88" y1="78" x2="150" y2="108" stroke="#725189" stroke-width="2"/>
  <polygon points="150,108 138,105 143,97" fill="#725189"/>
  <text x="155" y="116" font-size="10" fill="#725189">γ</text>
  </svg>`,
  bank:[
    {p:"Что происходит при радиоактивном распаде?",opts:["Ядро атома самопроизвольно распадается с испусканием излучения","Атом навсегда остаётся неизменным"],correct:0},
    {p:"Кто открыл явление радиоактивности?",opts:["Анри Беккерель","Исаак Ньютон"],correct:0}
  ]},

{ n:"Ядерная энергетика",
  explain:"На атомных электростанциях энергию получают за счёт управляемой реакции деления тяжёлых атомных ядер (например, урана), которая выделяет огромное количество энергии.",
  svg:`<svg viewBox="0 0 240 120" width="240">
  <circle cx="40" cy="60" r="3" fill="#284D77"/>
  <line x1="10" y1="60" x2="38" y2="60" stroke="#284D77" stroke-width="1.5"/>
  <polygon points="38,60 30,56 30,64" fill="#284D77"/>
  <circle cx="70" cy="60" r="18" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="70" y="65" font-size="9" text-anchor="middle" fill="#FFFEF8">U</text>
  <circle cx="130" cy="35" r="12" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <circle cx="130" cy="90" r="12" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <line x1="88" y1="55" x2="118" y2="38" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="88" y1="65" x2="118" y2="85" stroke="#736C5E" stroke-width="1.5"/>
  <circle cx="150" cy="35" r="2.5" fill="#284D77"/><circle cx="155" cy="55" r="2.5" fill="#284D77"/>
  <circle cx="150" cy="90" r="2.5" fill="#284D77"/>
  <text x="180" y="60" font-size="12" fill="#B96F16">+энергия</text>
  </svg>`,
  bank:[
    {p:"За счёт чего получают энергию на атомных электростанциях?",opts:["Управляемой реакции деления ядер","Сжигания угля"],correct:0},
    {p:"Какой элемент часто используют как топливо в ядерных реакторах?",opts:["Уран","Кислород"],correct:0}
  ]},

{ n:"Дисперсия света",
  explain:"<b>Дисперсия света</b> — разложение белого света на спектр цветов при прохождении через призму, вызванное разной скоростью света разных длин волн в веществе.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <line x1="10" y1="45" x2="95" y2="45" stroke="#2B2A26" stroke-width="3"/>
  <polygon points="95,20 130,45 95,70" fill="#DCE9F6" stroke="#284D77" stroke-width="1.5"/>
  <line x1="150" y1="30" x2="220" y2="20" stroke="#D6524F" stroke-width="2"/>
  <line x1="150" y1="38" x2="220" y2="35" stroke="#E3922E" stroke-width="2"/>
  <line x1="150" y1="45" x2="220" y2="50" stroke="#FFDE59" stroke-width="2"/>
  <line x1="150" y1="52" x2="220" y2="65" stroke="#5F9A5C" stroke-width="2"/>
  <line x1="150" y1="58" x2="220" y2="80" stroke="#3B6EA5" stroke-width="2"/>
  <line x1="150" y1="63" x2="220" y2="95" stroke="#9973B8" stroke-width="2"/>
  <text x="60" y="35" font-size="9" text-anchor="middle" fill="#2B2A26">белый свет</text>
  </svg>`,
  bank:[
    {p:"Что происходит при дисперсии света в призме?",opts:["Белый свет разлагается на спектр цветов","Свет полностью исчезает"],correct:0}
  ]},

{ n:"Лазеры",
  explain:"<b>Лазер</b> — устройство, создающее узкий, интенсивный и когерентный пучок света одного цвета (одной длины волны), широко используется в медицине, технике и связи.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <rect x="10" y="35" width="40" height="30" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <line x1="50" y1="50" x2="220" y2="50" stroke="#D6524F" stroke-width="3"/>
  <line x1="55" y1="45" x2="215" y2="45" stroke="#FFDE59" stroke-width="1" opacity="0.6"/>
  <line x1="55" y1="55" x2="215" y2="55" stroke="#FFDE59" stroke-width="1" opacity="0.6"/>
  <text x="130" y="80" font-size="10" text-anchor="middle" fill="#A83836">узкий, когерентный, одноцветный луч</text>
  </svg>`,
  bank:[
    {p:"Какими особенностями обладает лазерный луч?",opts:["Узкий, интенсивный, одноцветный","Широкий и рассеянный"],correct:0}
  ]},

{ n:"Элементарные частицы",
  explain:"Кроме протонов, нейтронов и электронов, физики открыли множество других элементарных частиц (например, нейтрино, кварки), изучаемых физикой высоких энергий.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <circle cx="45" cy="55" r="8" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <text x="45" y="35" font-size="9" text-anchor="middle" fill="#A83836">протон</text>
  <text x="45" y="60" font-size="7" text-anchor="middle" fill="#FFFEF8">uud</text>
  <circle cx="105" cy="55" r="5" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <text x="105" y="35" font-size="9" text-anchor="middle" fill="#284D77">электрон</text>
  <circle cx="160" cy="55" r="3" fill="#9973B8" stroke="#725189" stroke-width="1"/>
  <text x="160" y="35" font-size="9" text-anchor="middle" fill="#725189">нейтрино</text>
  <text x="110" y="95" font-size="9" text-anchor="middle" fill="#2B2A26">кварки, лептоны и другие частицы</text>
  </svg>`,
  bank:[
    {p:"Что изучает физика высоких энергий?",opts:["Элементарные частицы","Только видимый свет"],correct:0}
  ]}

];
