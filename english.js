/* Английский язык, 2 класс (начальный уровень). Формат такой же, как у русского модуля. */

const ENG_MOD = [

{ n:"Alphabet — буквы",
  explain:"Английский алфавит начинается с A, B, C... Найди правильную маленькую букву для большой.",
  svg:`<svg viewBox="0 0 220 100" width="220">
  <rect x="10" y="15" width="60" height="70" rx="10" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <text x="40" y="65" font-size="36" text-anchor="middle" fill="#FFFEF8" font-weight="700">A</text>
  <rect x="80" y="15" width="60" height="70" rx="10" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <text x="110" y="65" font-size="36" text-anchor="middle" fill="#FFFEF8" font-weight="700">B</text>
  <rect x="150" y="15" width="60" height="70" rx="10" fill="#D6524F" stroke="#2B2A26" stroke-width="2"/>
  <text x="180" y="65" font-size="36" text-anchor="middle" fill="#FFFEF8" font-weight="700">C</text>
  </svg>`,
  bank:[
    {p:"A",opts:["a","e","o"],correct:0},{p:"B",opts:["d","b","p"],correct:1},
    {p:"C",opts:["c","g","o"],correct:0},{p:"D",opts:["b","d","p"],correct:1},
    {p:"E",opts:["e","c","a"],correct:0},{p:"F",opts:["t","f","l"],correct:1},
    {p:"G",opts:["g","q","c"],correct:0},{p:"H",opts:["n","h","k"],correct:1},
    {p:"K",opts:["x","k","h"],correct:1},{p:"M",opts:["m","n","w"],correct:0},
    {p:"N",opts:["m","n","h"],correct:1},{p:"P",opts:["p","q","b"],correct:0},
    {p:"S",opts:["z","s","c"],correct:1},{p:"T",opts:["f","l","t"],correct:2}
  ]},

{ n:"Colours — цвета",
  explain:"Учим названия цветов. Смотри на цвет и выбирай верное слово.",
  svg:`<svg viewBox="0 0 280 90" width="280">
  <circle cx="35" cy="35" r="24" fill="#D6524F" stroke="#2B2A26" stroke-width="2"/>
  <text x="35" y="80" font-size="13" text-anchor="middle" fill="#2B2A26">red</text>
  <circle cx="105" cy="35" r="24" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <text x="105" y="80" font-size="13" text-anchor="middle" fill="#2B2A26">blue</text>
  <circle cx="175" cy="35" r="24" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <text x="175" y="80" font-size="13" text-anchor="middle" fill="#2B2A26">green</text>
  <circle cx="245" cy="35" r="24" fill="#FFDE59" stroke="#2B2A26" stroke-width="2"/>
  <text x="245" y="80" font-size="13" text-anchor="middle" fill="#2B2A26">yellow</text>
  </svg>`,
  bank:[
    {p:"🔴",em:1,opts:["Red","Blue","Green"],correct:0},
    {p:"🔵",em:1,opts:["Yellow","Blue","Black"],correct:1},
    {p:"🟢",em:1,opts:["Green","Pink","Red"],correct:0},
    {p:"🟡",em:1,opts:["Yellow","White","Purple"],correct:0},
    {p:"⚫",em:1,opts:["White","Grey","Black"],correct:2},
    {p:"⚪",em:1,opts:["White","Black","Brown"],correct:0},
    {p:"🟠",em:1,opts:["Orange","Green","Blue"],correct:0},
    {p:"🟣",em:1,opts:["Purple","Yellow","Red"],correct:0},
    {p:"🟤",em:1,opts:["Brown","Pink","Grey"],correct:0}
  ]},

{ n:"Numbers 1–10",
  explain:"Числа от одного до десяти на английском языке.",
  svg:`<svg viewBox="0 0 280 100" width="280">
  <rect x="6" y="10" width="70" height="80" rx="10" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="41" cy="38" r="7" fill="#3B6EA5"/>
  <text x="41" y="76" font-size="16" text-anchor="middle" fill="#2B2A26" font-weight="700">1</text>
  <rect x="105" y="10" width="70" height="80" rx="10" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="128" cy="30" r="6" fill="#5F9A5C"/><circle cx="152" cy="30" r="6" fill="#5F9A5C"/>
  <circle cx="128" cy="46" r="6" fill="#5F9A5C"/><circle cx="152" cy="46" r="6" fill="#5F9A5C"/>
  <circle cx="140" cy="62" r="6" fill="#5F9A5C"/>
  <text x="140" y="82" font-size="16" text-anchor="middle" fill="#2B2A26" font-weight="700">5</text>
  <rect x="204" y="10" width="70" height="80" rx="10" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="222" cy="28" r="5" fill="#D6524F"/><circle cx="239" cy="28" r="5" fill="#D6524F"/><circle cx="256" cy="28" r="5" fill="#D6524F"/>
  <circle cx="222" cy="43" r="5" fill="#D6524F"/><circle cx="239" cy="43" r="5" fill="#D6524F"/><circle cx="256" cy="43" r="5" fill="#D6524F"/>
  <circle cx="222" cy="58" r="5" fill="#D6524F"/><circle cx="239" cy="58" r="5" fill="#D6524F"/><circle cx="256" cy="58" r="5" fill="#D6524F"/>
  <circle cx="239" cy="70" r="5" fill="#D6524F"/>
  <text x="239" y="88" font-size="16" text-anchor="middle" fill="#2B2A26" font-weight="700">10</text>
  </svg>`,
  bank:[
    {p:"1",opts:["One","Two","Six"],correct:0},{p:"2",opts:["Ten","Two","Five"],correct:1},
    {p:"3",opts:["Three","Eight","Four"],correct:0},{p:"4",opts:["Four","Nine","One"],correct:0},
    {p:"5",opts:["Seven","Five","Two"],correct:1},{p:"6",opts:["Six","Three","Ten"],correct:0},
    {p:"7",opts:["Nine","Seven","One"],correct:1},{p:"8",opts:["Eight","Six","Four"],correct:0},
    {p:"9",opts:["Five","Nine","Two"],correct:1},{p:"10",opts:["Ten","Seven","Three"],correct:0}
  ]},

{ n:"Animals — животные",
  explain:"Как называются животные по-английски?",
  svg:`<svg viewBox="0 0 280 100" width="280">
  <text x="35" y="50" font-size="34" text-anchor="middle">🐱</text>
  <text x="35" y="85" font-size="13" text-anchor="middle" fill="#2B2A26">cat</text>
  <text x="105" y="50" font-size="34" text-anchor="middle">🐶</text>
  <text x="105" y="85" font-size="13" text-anchor="middle" fill="#2B2A26">dog</text>
  <text x="175" y="50" font-size="34" text-anchor="middle">🐟</text>
  <text x="175" y="85" font-size="13" text-anchor="middle" fill="#2B2A26">fish</text>
  <text x="245" y="50" font-size="34" text-anchor="middle">🐦</text>
  <text x="245" y="85" font-size="13" text-anchor="middle" fill="#2B2A26">bird</text>
  </svg>`,
  bank:[
    {p:"🐱",em:1,opts:["Dog","Cat","Fish"],correct:1},
    {p:"🐶",em:1,opts:["Dog","Cat","Bird"],correct:0},
    {p:"🐟",em:1,opts:["Fish","Frog","Fox"],correct:0},
    {p:"🐰",em:1,opts:["Rabbit","Rat","Bear"],correct:0},
    {p:"🐻",em:1,opts:["Bear","Bull","Bee"],correct:0},
    {p:"🐦",em:1,opts:["Bird","Bee","Bat"],correct:0},
    {p:"🐸",em:1,opts:["Frog","Fish","Fox"],correct:0},
    {p:"🦁",em:1,opts:["Tiger","Lion","Leopard"],correct:1},
    {p:"🐴",em:1,opts:["Horse","Hen","Hare"],correct:0},
    {p:"🐭",em:1,opts:["Mouse","Moose","Mole"],correct:0}
  ]},

{ n:"Family — семья",
  explain:"Слова про семью: как по-английски назвать маму, папу и других родных?",
  svg:`<svg viewBox="0 0 280 100" width="280">
  <text x="35" y="50" font-size="34" text-anchor="middle">👩</text>
  <text x="35" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">mother</text>
  <text x="105" y="50" font-size="34" text-anchor="middle">👨</text>
  <text x="105" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">father</text>
  <text x="175" y="50" font-size="34" text-anchor="middle">👧</text>
  <text x="175" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">sister</text>
  <text x="245" y="50" font-size="34" text-anchor="middle">👦</text>
  <text x="245" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">brother</text>
  </svg>`,
  bank:[
    {p:"мама",opts:["Mother","Brother","Father"],correct:0},
    {p:"папа",opts:["Father","Sister","Son"],correct:0},
    {p:"брат",opts:["Sister","Brother","Mother"],correct:1},
    {p:"сестра",opts:["Sister","Brother","Father"],correct:0},
    {p:"бабушка",opts:["Grandmother","Grandfather","Aunt"],correct:0},
    {p:"дедушка",opts:["Uncle","Grandfather","Grandmother"],correct:1},
    {p:"сын",opts:["Son","Daughter","Baby"],correct:0},
    {p:"дочь",opts:["Son","Daughter","Sister"],correct:1}
  ]},

{ n:"Greetings — приветствия",
  explain:"Как правильно поздороваться и попрощаться по-английски?",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <circle cx="60" cy="55" r="26" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <g stroke="#C99A00" stroke-width="3" stroke-linecap="round">
  <line x1="60" y1="14" x2="60" y2="4"/><line x1="60" y1="96" x2="60" y2="106"/>
  <line x1="19" y1="55" x2="9" y2="55"/><line x1="101" y1="55" x2="111" y2="55"/>
  <line x1="32" y1="27" x2="24" y2="19"/><line x1="88" y1="83" x2="96" y2="91"/>
  </g>
  <rect x="0" y="106" width="120" height="24" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="60" y="122" font-size="11" text-anchor="middle" fill="#2B2A26">Good morning!</text>
  <circle cx="213" cy="47" r="20" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="222" cy="40" r="18" fill="#284D77"/>
  <circle cx="238" cy="24" r="1.6" fill="#FFFEF8"/><circle cx="248" cy="42" r="1.3" fill="#FFFEF8"/>
  <rect x="140" y="106" width="120" height="24" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="200" y="122" font-size="11" text-anchor="middle" fill="#2B2A26">Good night!</text>
  </svg>`,
  bank:[
    {p:"Доброе утро",opts:["Good morning","Good night","Good bye"],correct:0},
    {p:"Добрый вечер",opts:["Good evening","Good morning","Hello"],correct:0},
    {p:"Привет",opts:["Hello","Sorry","Please"],correct:0},
    {p:"Пока",opts:["Goodbye","Good morning","Thanks"],correct:0},
    {p:"Спасибо",opts:["Thank you","Sorry","Please"],correct:0},
    {p:"Пожалуйста (просьба)",opts:["Please","Thanks","Sorry"],correct:0},
    {p:"Как дела?",opts:["How are you?","What is it?","Who are you?"],correct:0},
    {p:"Спокойной ночи",opts:["Good night","Good morning","Good afternoon"],correct:0}
  ]},

{ n:"It is / I am",
  explain:"«I am» — я есть (про себя). «It is» — это есть (про предмет или животное).",
  svg:`<svg viewBox="0 0 260 120" width="260">
  <circle cx="70" cy="35" r="18" fill="#F0DFC4" stroke="#2B2A26" stroke-width="2"/>
  <path d="M45 100c2-22 14-34 25-34s23 12 25 34z" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <text x="70" y="113" font-size="14" text-anchor="middle" font-weight="700" fill="#2B2A26">I am</text>
  <circle cx="190" cy="55" r="26" fill="#D6524F" stroke="#2B2A26" stroke-width="2"/>
  <path d="M164 55h52M190 29v52" stroke="#FFFEF8" stroke-width="2" opacity="0.6"/>
  <text x="190" y="113" font-size="14" text-anchor="middle" font-weight="700" fill="#2B2A26">It is</text>
  </svg>`,
  bank:[
    {p:"___ a cat. (про кошку)",opts:["It is","I am"],correct:0},
    {p:"___ seven years old. (про себя)",opts:["It is","I am"],correct:1},
    {p:"___ a red ball. (про мяч)",opts:["It is","I am"],correct:0},
    {p:"___ happy today. (про себя)",opts:["It is","I am"],correct:1},
    {p:"___ a big dog. (про собаку)",opts:["It is","I am"],correct:0},
    {p:"___ a student. (про себя)",opts:["It is","I am"],correct:1},
    {p:"___ raining. (про погоду)",opts:["It is","I am"],correct:0},
    {p:"___ from Russia. (про себя)",opts:["It is","I am"],correct:1}
  ]},

{ n:"Body — части тела",
  explain:"Как называются части тела по-английски?",
  svg:`<svg viewBox="0 0 220 230" width="220">
  <circle cx="110" cy="42" r="26" fill="#F0DFC4" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="101" cy="38" r="2.6" fill="#2B2A26"/>
  <circle cx="119" cy="38" r="2.6" fill="#2B2A26"/>
  <path d="M102 50q8 6 16 0" stroke="#2B2A26" stroke-width="2" fill="none" stroke-linecap="round"/>
  <rect x="84" y="68" width="52" height="72" rx="18" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <line x1="84" y1="84" x2="46" y2="126" stroke="#F0DFC4" stroke-width="13" stroke-linecap="round"/>
  <line x1="136" y1="84" x2="174" y2="126" stroke="#F0DFC4" stroke-width="13" stroke-linecap="round"/>
  <line x1="98" y1="140" x2="90" y2="212" stroke="#5F9A5C" stroke-width="15" stroke-linecap="round"/>
  <line x1="122" y1="140" x2="130" y2="212" stroke="#5F9A5C" stroke-width="15" stroke-linecap="round"/>
  <text x="150" y="18" font-size="13" fill="#2B2A26">head</text>
  <line x1="128" y1="24" x2="146" y2="20" stroke="#736C5E" stroke-width="1"/>
  <text x="2" y="132" font-size="13" fill="#2B2A26">hand</text>
  <line x1="46" y1="126" x2="28" y2="128" stroke="#736C5E" stroke-width="1"/>
  <text x="166" y="200" font-size="13" fill="#2B2A26">leg</text>
  <line x1="130" y1="190" x2="162" y2="197" stroke="#736C5E" stroke-width="1"/>
  </svg>`,
  bank:[
    {p:"голова",opts:["Head","Hand","Hair"],correct:0},
    {p:"рука",opts:["Leg","Hand","Arm"],correct:2},
    {p:"нога",opts:["Leg","Foot","Hand"],correct:0},
    {p:"глаз",opts:["Eye","Ear","Nose"],correct:0},
    {p:"ухо",opts:["Eye","Ear","Mouth"],correct:1},
    {p:"нос",opts:["Nose","Neck","Knee"],correct:0},
    {p:"рот",opts:["Mouth","Mouse","Mound"],correct:0},
    {p:"пальцы",opts:["Fingers","Fangs","Feet"],correct:0}
  ]},

{ n:"School things — школьные вещи",
  explain:"Названия школьных предметов и вещей по-английски.",
  svg:`<svg viewBox="0 0 280 100" width="280">
  <text x="35" y="50" font-size="34" text-anchor="middle">📚</text>
  <text x="35" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">book</text>
  <text x="105" y="50" font-size="34" text-anchor="middle">✏️</text>
  <text x="105" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">pencil</text>
  <text x="175" y="50" font-size="34" text-anchor="middle">📏</text>
  <text x="175" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">ruler</text>
  <text x="245" y="50" font-size="34" text-anchor="middle">🎒</text>
  <text x="245" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">bag</text>
  </svg>`,
  bank:[
    {p:"книга",opts:["Book","Bag","Pen"],correct:0},
    {p:"ручка",opts:["Pencil","Pen","Rubber"],correct:1},
    {p:"карандаш",opts:["Pencil","Paper","Ruler"],correct:0},
    {p:"портфель",opts:["Bag","Book","Desk"],correct:0},
    {p:"стол (парта)",opts:["Chair","Desk","Board"],correct:1},
    {p:"доска",opts:["Board","Book","Door"],correct:0},
    {p:"линейка",opts:["Ruler","Rubber","Ring"],correct:0},
    {p:"ластик",opts:["Rubber","Ruler","Rain"],correct:0}
  ]},

{ n:"One or many? — множественное число",
  explain:"Чтобы сказать «много», к слову обычно добавляют -s: cat → cats, dog → dogs.",
  svg:`<svg viewBox="0 0 260 110" width="260">
  <text x="55" y="55" font-size="36" text-anchor="middle">🐱</text>
  <text x="55" y="95" font-size="13" text-anchor="middle" fill="#2B2A26">1 cat</text>
  <line x1="120" y1="15" x2="120" y2="95" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="175" y="46" font-size="26" text-anchor="middle">🐱</text>
  <text x="215" y="46" font-size="26" text-anchor="middle">🐱</text>
  <text x="195" y="76" font-size="26" text-anchor="middle">🐱</text>
  <text x="197" y="100" font-size="13" text-anchor="middle" fill="#2B2A26">3 cats</text>
  </svg>`,
  bank:[
    {p:"Много кошек — это...",opts:["cats","cat","cates"],correct:0},
    {p:"Много собак — это...",opts:["dog","dogs","doges"],correct:1},
    {p:"Много книг — это...",opts:["book","books","bookes"],correct:1},
    {p:"Много мячей — это...",opts:["balls","ball","ballies"],correct:0},
    {p:"Много птиц — это...",opts:["birds","bird","birdes"],correct:0},
    {p:"Одна ручка — это...",opts:["pens","pen","penn"],correct:1},
    {p:"Много столов — это...",opts:["desk","desks","deskes"],correct:1},
    {p:"Один цветок — это...",opts:["flowers","flower","flowrs"],correct:1}
  ]},

{ n:"Days of the week — дни недели",
  explain:"Названия дней недели по-английски всегда пишутся с большой буквы.",
  svg:`<svg viewBox="0 0 300 70" width="300">
  <rect x="2" y="10" width="38" height="50" rx="8" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="21" y="40" font-size="11" text-anchor="middle" fill="#FFFEF8" font-weight="700">Mon</text>
  <rect x="44" y="10" width="38" height="50" rx="8" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="63" y="40" font-size="11" text-anchor="middle" fill="#FFFEF8" font-weight="700">Tue</text>
  <rect x="86" y="10" width="38" height="50" rx="8" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="105" y="40" font-size="11" text-anchor="middle" fill="#FFFEF8" font-weight="700">Wed</text>
  <rect x="128" y="10" width="38" height="50" rx="8" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="147" y="40" font-size="11" text-anchor="middle" fill="#FFFEF8" font-weight="700">Thu</text>
  <rect x="170" y="10" width="38" height="50" rx="8" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="189" y="40" font-size="11" text-anchor="middle" fill="#FFFEF8" font-weight="700">Fri</text>
  <rect x="212" y="10" width="42" height="50" rx="8" fill="#D6524F" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="233" y="40" font-size="11" text-anchor="middle" fill="#FFFEF8" font-weight="700">Sat</text>
  <rect x="258" y="10" width="40" height="50" rx="8" fill="#D6524F" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="278" y="40" font-size="11" text-anchor="middle" fill="#FFFEF8" font-weight="700">Sun</text>
  </svg>`,
  bank:[
    {p:"понедельник",opts:["Monday","Sunday","Tuesday"],correct:0},
    {p:"вторник",opts:["Monday","Tuesday","Thursday"],correct:1},
    {p:"среда",opts:["Wednesday","Friday","Sunday"],correct:0},
    {p:"четверг",opts:["Tuesday","Thursday","Saturday"],correct:1},
    {p:"пятница",opts:["Friday","Monday","Wednesday"],correct:0},
    {p:"суббота",opts:["Sunday","Saturday","Friday"],correct:1},
    {p:"воскресенье",opts:["Sunday","Monday","Saturday"],correct:0},
    {p:"Какой день идёт после Monday?",opts:["Tuesday","Sunday","Friday"],correct:0}
  ]},

{ n:"Food — еда",
  explain:"Названия еды и напитков по-английски.",
  svg:`<svg viewBox="0 0 280 100" width="280">
  <text x="35" y="50" font-size="32" text-anchor="middle">🍞</text>
  <text x="35" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">bread</text>
  <text x="105" y="50" font-size="32" text-anchor="middle">🥛</text>
  <text x="105" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">milk</text>
  <text x="175" y="50" font-size="32" text-anchor="middle">🍎</text>
  <text x="175" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">apple</text>
  <text x="245" y="50" font-size="32" text-anchor="middle">🧀</text>
  <text x="245" y="85" font-size="12" text-anchor="middle" fill="#2B2A26">cheese</text>
  </svg>`,
  bank:[
    {p:"хлеб",opts:["Bread","Butter","Milk"],correct:0},
    {p:"молоко",opts:["Water","Milk","Juice"],correct:1},
    {p:"яблоко",opts:["Apple","Orange","Banana"],correct:0},
    {p:"сыр",opts:["Cheese","Chicken","Cake"],correct:0},
    {p:"суп",opts:["Soup","Soap","Salad"],correct:0},
    {p:"вода",opts:["Water","Wine","Milk"],correct:0},
    {p:"яйцо",opts:["Egg","Ear","Eye"],correct:0},
    {p:"рыба",opts:["Fish","Fresh","Fork"],correct:0},
    {p:"мясо",opts:["Meat","Meal","Milk"],correct:0}
  ]},

{ n:"In, on, under — предлоги места",
  explain:"In — внутри (в), on — на поверхности (на), under — снизу (под).",
  svg:`<svg viewBox="0 0 280 120" width="280">
  <rect x="10" y="50" width="60" height="45" rx="6" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="40" y="80" font-size="24" text-anchor="middle">🐱</text>
  <text x="40" y="112" font-size="13" text-anchor="middle" fill="#2B2A26">in</text>
  <rect x="110" y="70" width="60" height="25" rx="4" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <text x="140" y="60" font-size="24" text-anchor="middle">🐱</text>
  <text x="140" y="112" font-size="13" text-anchor="middle" fill="#2B2A26">on</text>
  <rect x="210" y="35" width="60" height="20" rx="4" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <text x="240" y="85" font-size="24" text-anchor="middle">🐱</text>
  <text x="240" y="112" font-size="13" text-anchor="middle" fill="#2B2A26">under</text>
  </svg>`,
  bank:[
    {p:"Кот ___ коробке (внутри).",opts:["in","on","under"],correct:0},
    {p:"Книга ___ столе (сверху).",opts:["on","in","under"],correct:0},
    {p:"Мяч ___ кроватью (снизу).",opts:["under","on","in"],correct:0},
    {p:"Рыба ___ воде.",opts:["in","on","under"],correct:0},
    {p:"Картина ___ стене.",opts:["on","in","under"],correct:0},
    {p:"Собака спряталась ___ столом.",opts:["under","on","in"],correct:0},
    {p:"Яблоки ___ корзине.",opts:["in","on","under"],correct:0}
  ]},

{ n:"What, where, who — вопросы",
  explain:"What — что?, Where — где?, Who — кто?",
  bank:[
    {p:"«Что это?» по-английски",opts:["What is it?","Where is it?","Who is it?"],correct:0},
    {p:"«Где кот?» по-английски",opts:["Who is the cat?","Where is the cat?","What is the cat?"],correct:1},
    {p:"«Кто это?» по-английски",opts:["Who is it?","What is it?","Where is it?"],correct:0},
    {p:"Чтобы спросить про место, используй слово",opts:["Where","What","Who"],correct:0},
    {p:"Чтобы спросить про предмет, используй слово",opts:["What","Where","Who"],correct:0},
    {p:"Чтобы спросить про человека, используй слово",opts:["Who","What","Where"],correct:0}
  ]},

{ n:"Numbers 11–20",
  explain:"Числа от одиннадцати до двадцати по-английски.",
  svg:`<svg viewBox="0 0 300 70" width="300">
  <line x1="15" y1="35" x2="285" y2="35" stroke="#2B2A26" stroke-width="2"/>
  <line x1="15" y1="28" x2="15" y2="42" stroke="#2B2A26" stroke-width="2"/><text x="15" y="60" font-size="11" text-anchor="middle" fill="#2B2A26">11</text>
  <line x1="45" y1="28" x2="45" y2="42" stroke="#2B2A26" stroke-width="2"/><text x="45" y="60" font-size="11" text-anchor="middle" fill="#2B2A26">12</text>
  <line x1="75" y1="28" x2="75" y2="42" stroke="#2B2A26" stroke-width="2"/><text x="75" y="60" font-size="11" text-anchor="middle" fill="#2B2A26">13</text>
  <line x1="105" y1="28" x2="105" y2="42" stroke="#2B2A26" stroke-width="2"/><text x="105" y="60" font-size="11" text-anchor="middle" fill="#2B2A26">14</text>
  <line x1="135" y1="24" x2="135" y2="46" stroke="#D6524F" stroke-width="3"/><text x="135" y="60" font-size="11" text-anchor="middle" fill="#A83836" font-weight="700">15</text>
  <line x1="165" y1="28" x2="165" y2="42" stroke="#2B2A26" stroke-width="2"/><text x="165" y="60" font-size="11" text-anchor="middle" fill="#2B2A26">16</text>
  <line x1="195" y1="28" x2="195" y2="42" stroke="#2B2A26" stroke-width="2"/><text x="195" y="60" font-size="11" text-anchor="middle" fill="#2B2A26">17</text>
  <line x1="225" y1="28" x2="225" y2="42" stroke="#2B2A26" stroke-width="2"/><text x="225" y="60" font-size="11" text-anchor="middle" fill="#2B2A26">18</text>
  <line x1="255" y1="28" x2="255" y2="42" stroke="#2B2A26" stroke-width="2"/><text x="255" y="60" font-size="11" text-anchor="middle" fill="#2B2A26">19</text>
  <line x1="285" y1="24" x2="285" y2="46" stroke="#3B6EA5" stroke-width="3"/><text x="285" y="60" font-size="11" text-anchor="middle" fill="#284D77" font-weight="700">20</text>
  </svg>`,
  bank:[
    {p:"11",opts:["Eleven","Twelve","Ten"],correct:0},
    {p:"12",opts:["Eleven","Twelve","Thirteen"],correct:1},
    {p:"13",opts:["Thirteen","Thirty","Fourteen"],correct:0},
    {p:"14",opts:["Fourteen","Forty","Fifteen"],correct:0},
    {p:"15",opts:["Fifteen","Fifty","Sixteen"],correct:0},
    {p:"16",opts:["Sixteen","Sixty","Seventeen"],correct:0},
    {p:"17",opts:["Seventeen","Seventy","Eighteen"],correct:0},
    {p:"18",opts:["Eighteen","Eighty","Nineteen"],correct:0},
    {p:"19",opts:["Nineteen","Ninety","Twenty"],correct:0},
    {p:"20",opts:["Twenty","Twelve","Two"],correct:0}
  ]},

{ n:"Can / Can't — умею / не умею",
  explain:"Can — умею, могу. Can't — не умею, не могу. После can/can't всегда идёт глагол без «to».",
  svg:`<svg viewBox="0 0 260 130" width="260">
  <text x="65" y="55" font-size="40" text-anchor="middle">🐦</text>
  <path d="M45 85l10 10 20-24" stroke="#3F7A3D" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="65" y="118" font-size="13" text-anchor="middle" fill="#2B2A26" font-weight="700">A bird can fly</text>
  <text x="195" y="55" font-size="40" text-anchor="middle">🐟</text>
  <circle cx="195" cy="90" r="16" fill="none" stroke="#A83836" stroke-width="4"/>
  <line x1="184" y1="79" x2="206" y2="101" stroke="#A83836" stroke-width="4"/>
  <text x="195" y="118" font-size="13" text-anchor="middle" fill="#2B2A26" font-weight="700">A fish can't fly</text>
  </svg>`,
  bank:[
    {p:"Я умею плавать — как сказать?",opts:["I can swim","I can swimming","I swim can"],correct:0},
    {p:"Птица умеет летать — как сказать?",opts:["A bird can fly","A bird flies can","A bird can flying"],correct:0},
    {p:"Рыба не умеет летать — как сказать?",opts:["A fish can't fly","A fish can fly","A fish flies not"],correct:0},
    {p:"Я не умею готовить — как сказать?",opts:["I can't cook","I not can cook","I can cooking"],correct:0},
    {p:"Кот умеет прыгать — как сказать?",opts:["A cat can jump","A cat jumps can","A cat can jumping"],correct:0},
    {p:"Что означает «can't»?",opts:["Не умею / не могу","Умею","Хочу"],correct:0}
  ]},

{ n:"My family — рассказ о семье",
  explain:"Чтобы рассказать о семье, используем «I have» (у меня есть) и простые описания.",
  bank:[
    {p:"«У меня есть сестра» — как сказать?",opts:["I have a sister","I has a sister","I am a sister"],correct:0},
    {p:"«У меня есть брат» — как сказать?",opts:["I have a brother","I has brother","I brother have"],correct:0},
    {p:"«Моя мама добрая» — как сказать?",opts:["My mother is kind","My mother kind is","Mother my is kind"],correct:0},
    {p:"«У меня нет собаки» — как сказать?",opts:["I don't have a dog","I not have a dog","I haven't dog"],correct:0},
    {p:"«Это мой папа» — как сказать?",opts:["This is my father","This my father is","Father this is my"],correct:0}
  ]},

{ n:"Seasons — времена года",
  explain:"Названия времён года и связанных с ними слов по-английски.",
  svg:`<svg viewBox="0 0 220 220" width="220">
  <circle cx="110" cy="110" r="88" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="3 6"/>
  <path d="M110 22a88 88 0 0 1 88 88h-88z" fill="#FFDE59" opacity="0.85"/>
  <path d="M198 110a88 88 0 0 1 -88 88v-88z" fill="#E3922E" opacity="0.85"/>
  <path d="M110 198a88 88 0 0 1 -88 -88h88z" fill="#3B6EA5" opacity="0.85"/>
  <path d="M22 110a88 88 0 0 1 88 -88v88z" fill="#5F9A5C" opacity="0.85"/>
  <circle cx="110" cy="110" r="30" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <text x="150" y="60" font-size="12" text-anchor="middle" font-weight="700" fill="#2B2A26">summer</text>
  <text x="160" y="150" font-size="12" text-anchor="middle" font-weight="700" fill="#2B2A26">autumn</text>
  <text x="110" y="178" font-size="12" text-anchor="middle" font-weight="700" fill="#FFFEF8">winter</text>
  <text x="62" y="130" font-size="12" text-anchor="middle" font-weight="700" fill="#2B2A26">spring</text>
  </svg>`,
  bank:[
    {p:"зима",opts:["Winter","Summer","Spring"],correct:0},
    {p:"весна",opts:["Spring","Autumn","Winter"],correct:0},
    {p:"лето",opts:["Summer","Winter","Fall"],correct:0},
    {p:"осень",opts:["Autumn","Spring","Summer"],correct:0},
    {p:"снег",opts:["Snow","Sun","Rain"],correct:0},
    {p:"солнце",opts:["Sun","Snow","Cloud"],correct:0},
    {p:"дождь",opts:["Rain","Snow","Wind"],correct:0},
    {p:"Какое время года идёт после winter?",opts:["Spring","Summer","Autumn"],correct:0}
  ]},

{ n:"Clothes — одежда",
  explain:"Названия предметов одежды по-английски.",
  svg:`<svg viewBox="0 0 280 100" width="280">
  <text x="35" y="50" font-size="32" text-anchor="middle">👕</text>
  <text x="35" y="85" font-size="11" text-anchor="middle" fill="#2B2A26">T-shirt</text>
  <text x="105" y="50" font-size="32" text-anchor="middle">👖</text>
  <text x="105" y="85" font-size="11" text-anchor="middle" fill="#2B2A26">trousers</text>
  <text x="175" y="50" font-size="32" text-anchor="middle">🧢</text>
  <text x="175" y="85" font-size="11" text-anchor="middle" fill="#2B2A26">hat</text>
  <text x="245" y="50" font-size="32" text-anchor="middle">👟</text>
  <text x="245" y="85" font-size="11" text-anchor="middle" fill="#2B2A26">shoes</text>
  </svg>`,
  bank:[
    {p:"футболка",opts:["T-shirt","Shoes","Hat"],correct:0},
    {p:"брюки",opts:["Trousers","Dress","Sock"],correct:0},
    {p:"платье",opts:["Dress","Shirt","Coat"],correct:0},
    {p:"шапка",opts:["Hat","Shoe","Belt"],correct:0},
    {p:"обувь (ботинки)",opts:["Shoes","Gloves","Skirt"],correct:0},
    {p:"перчатки",opts:["Gloves","Shoes","Socks"],correct:0},
    {p:"куртка",opts:["Jacket","Skirt","Tie"],correct:0}
  ]},

{ n:"House — дом и комнаты",
  explain:"Названия комнат дома и мебели по-английски.",
  svg:`<svg viewBox="0 0 240 160" width="240">
  <rect x="4" y="4" width="232" height="152" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="120" y1="4" x2="120" y2="156" stroke="#2B2A26" stroke-width="2"/>
  <line x1="4" y1="80" x2="236" y2="80" stroke="#2B2A26" stroke-width="2"/>
  <rect x="6" y="6" width="112" height="72" fill="#5F9A5C" opacity="0.35"/>
  <rect x="122" y="6" width="112" height="72" fill="#3B6EA5" opacity="0.35"/>
  <rect x="6" y="82" width="112" height="72" fill="#E3922E" opacity="0.35"/>
  <rect x="122" y="82" width="112" height="72" fill="#9973B8" opacity="0.35"/>
  <text x="62" y="46" font-size="12" text-anchor="middle" fill="#2B2A26">kitchen</text>
  <text x="178" y="46" font-size="12" text-anchor="middle" fill="#2B2A26">bedroom</text>
  <text x="62" y="122" font-size="11" text-anchor="middle" fill="#2B2A26">living room</text>
  <text x="178" y="122" font-size="12" text-anchor="middle" fill="#2B2A26">bathroom</text>
  </svg>`,
  bank:[
    {p:"кухня",opts:["Kitchen","Bedroom","Bathroom"],correct:0},
    {p:"спальня",opts:["Bedroom","Kitchen","Garden"],correct:0},
    {p:"ванная",opts:["Bathroom","Living room","Hall"],correct:0},
    {p:"гостиная",opts:["Living room","Kitchen","Bathroom"],correct:0},
    {p:"кровать",opts:["Bed","Table","Chair"],correct:0},
    {p:"диван",opts:["Sofa","Bed","Shelf"],correct:0}
  ]},

{ n:"Weather — погода",
  explain:"Как рассказать о погоде по-английски.",
  svg:`<svg viewBox="0 0 280 100" width="280">
  <text x="35" y="50" font-size="32" text-anchor="middle">☀️</text>
  <text x="35" y="85" font-size="11" text-anchor="middle" fill="#2B2A26">sunny</text>
  <text x="105" y="50" font-size="32" text-anchor="middle">🌧️</text>
  <text x="105" y="85" font-size="11" text-anchor="middle" fill="#2B2A26">rainy</text>
  <text x="175" y="50" font-size="32" text-anchor="middle">☁️</text>
  <text x="175" y="85" font-size="11" text-anchor="middle" fill="#2B2A26">cloudy</text>
  <text x="245" y="50" font-size="32" text-anchor="middle">💨</text>
  <text x="245" y="85" font-size="11" text-anchor="middle" fill="#2B2A26">windy</text>
  </svg>`,
  bank:[
    {p:"«Сегодня солнечно» — как сказать?",opts:["It's sunny today","It's rainy today","It's cold today"],correct:0},
    {p:"«Сегодня идёт дождь» — как сказать?",opts:["It's rainy today","It's sunny today","It's windy today"],correct:0},
    {p:"«Сегодня холодно» — как сказать?",opts:["It's cold today","It's hot today","It's warm today"],correct:0},
    {p:"«Сегодня жарко» — как сказать?",opts:["It's hot today","It's cold today","It's snowy today"],correct:0},
    {p:"ветрено",opts:["Windy","Sunny","Cloudy"],correct:0},
    {p:"облачно",opts:["Cloudy","Windy","Snowy"],correct:0}
  ]},

{ n:"Have got — у меня есть",
  explain:"«I have got» (или просто «I have») используют, чтобы сказать, что у тебя что-то есть.",
  bank:[
    {p:"«У меня есть кот» — как сказать?",opts:["I have got a cat","I has got a cat","I got have a cat"],correct:0},
    {p:"«У неё есть книга» — как сказать (she)?",opts:["She has got a book","She have got a book","She got has a book"],correct:0},
    {p:"«У меня нет собаки» — как сказать?",opts:["I haven't got a dog","I not have got a dog","I got haven't a dog"],correct:0},
    {p:"«У тебя есть велосипед?» — как спросить?",opts:["Have you got a bike?","You have got a bike?","Got you have a bike?"],correct:0}
  ]}

];
