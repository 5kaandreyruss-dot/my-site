/* Биология, 11 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Эволюция, происхождение человека, экология и охрана природы. */

const BIOLOGY11_MOD = [

{ n:"Вид и его критерии",
  explain:"<b>Вид</b> — совокупность особей, сходных по строению, способных скрещиваться друг с другом и давать плодовитое потомство, населяющих определённую территорию.",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <ellipse cx="55" cy="55" rx="28" ry="18" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="160" cy="55" rx="28" ry="18" fill="#E3922E" stroke="#2B2A26" stroke-width="2" opacity="0.8"/>
  <path d="M83 55h44" stroke="#2B2A26" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="110" y="45" font-size="9" text-anchor="middle" fill="#2B2A26">скрещивание</text>
  <text x="110" y="90" font-size="9" text-anchor="middle" fill="#2B2A26">→ плодовитое потомство</text>
  </svg>`,
  bank:[
    {p:"Что важно для особей одного вида по отношению друг к другу?",opts:["Способность скрещиваться и давать плодовитое потомство","Полная неспособность взаимодействовать"],correct:0}
  ]},

{ n:"Движущие силы эволюции",
  explain:"К движущим силам эволюции относят наследственную изменчивость, борьбу за существование и естественный отбор — основные положения теории Дарвина.",
  svg:`<svg viewBox="0 0 220 120" width="220">
  <g font-size="9" fill="#2B2A26" text-anchor="middle">
  <rect x="5" y="15" width="65" height="24" rx="5" fill="#3B6EA5" opacity="0.8"/><text x="37" y="31" fill="#fff">изменчивость</text>
  <rect x="5" y="48" width="65" height="24" rx="5" fill="#D6524F" opacity="0.8"/><text x="37" y="64" fill="#fff">борьба за жизнь</text>
  <rect x="5" y="81" width="65" height="24" rx="5" fill="#5F9A5C" opacity="0.8"/><text x="37" y="97" fill="#fff">отбор</text>
  </g>
  <path d="M70 27l60 30M70 60h60M70 93l60-30" stroke="#2B2A26" stroke-width="1.5" fill="none"/>
  <text x="175" y="63" font-size="10" text-anchor="middle" fill="#2B2A26">эволюция</text>
  </svg>`,
  bank:[
    {p:"Что из этого — движущая сила эволюции по Дарвину?",opts:["Естественный отбор","Постоянство видов без изменений"],correct:0}
  ]},

{ n:"Видообразование",
  explain:"<b>Видообразование</b> — процесс возникновения новых видов, часто происходящий из-за географической или иной изоляции популяций, накапливающих со временем различия.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <ellipse cx="70" cy="30" rx="35" ry="16" fill="#5F9A5C" opacity="0.6"/>
  <text x="70" y="34" font-size="9" text-anchor="middle" fill="#2B2A26">популяция</text>
  <path d="M110 45v20" stroke="#2B2A26" stroke-width="2"/>
  <path d="M100 65l-20 15M120 65l20 15" stroke="#2B2A26" stroke-width="2" stroke-dasharray="3 3"/>
  <rect x="105" y="60" width="6" height="35" fill="#B96F16"/>
  <text x="108" y="105" font-size="8" text-anchor="middle" fill="#2B2A26">изоляция</text>
  <ellipse cx="60" cy="105" rx="28" ry="14" fill="#3B6EA5" opacity="0.7"/>
  <ellipse cx="160" cy="105" rx="28" ry="14" fill="#D6524F" opacity="0.7"/>
  <text x="60" y="109" font-size="8" text-anchor="middle" fill="#fff">вид А</text>
  <text x="160" y="109" font-size="8" text-anchor="middle" fill="#fff">вид Б</text>
  </svg>`,
  bank:[
    {p:"Что часто приводит к образованию новых видов?",opts:["Изоляция популяций и накопление различий","Полное отсутствие каких-либо изменений"],correct:0}
  ]},

{ n:"Происхождение человека",
  explain:"Человек, согласно современной науке, произошёл от древних приматов в результате длительной эволюции. Ближайшие ныне живущие родственники человека — человекообразные обезьяны.",
  svg:`<svg viewBox="0 0 240 100" width="240">
  <g stroke="#2B2A26" stroke-width="2" fill="#736C5E">
  <circle cx="30" cy="55" r="10"/><rect x="24" y="63" width="12" height="20" rx="4"/>
  <circle cx="90" cy="48" r="10"/><rect x="84" y="56" width="12" height="24" rx="4" transform="rotate(-8 90 68)"/>
  <circle cx="155" cy="40" r="10"/><rect x="149" y="48" width="12" height="30" rx="4" transform="rotate(-4 155 63)"/>
  <circle cx="215" cy="30" r="10"/><rect x="209" y="38" width="12" height="35" rx="4"/>
  </g>
  <text x="120" y="95" font-size="9" text-anchor="middle" fill="#2B2A26">эволюция приматов к человеку</text>
  </svg>`,
  bank:[
    {p:"От кого, согласно науке, произошёл человек в ходе эволюции?",opts:["От древних приматов","От современных птиц"],correct:0}
  ]},

{ n:"Экологические факторы",
  explain:"<b>Экологические факторы</b> делят на абиотические (неживая природа: свет, температура, влажность) и биотические (влияние других организмов).",
  svg:`<svg viewBox="0 0 220 110" width="220">
  <text x="55" y="15" font-size="10" text-anchor="middle" fill="#2B2A26">абиотические</text>
  <circle cx="25" cy="45" r="9" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <rect x="55" y="35" width="8" height="20" rx="4" fill="#D6524F" stroke="#A83836" stroke-width="1"/>
  <path d="M90 35c8 0 8 12 0 12s-8-12 0-12z" fill="#3B6EA5"/><path d="M90 47c-4 4-4 10 0 12s4-8 0-12z" fill="#3B6EA5"/>
  <line x1="0" y1="65" x2="220" y2="65" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="165" y="15" font-size="10" text-anchor="middle" fill="#2B2A26">биотические</text>
  <ellipse cx="150" cy="45" rx="14" ry="8" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <path d="M195 55c-14-3-22 6-25 16 12 5 21-3 25-16z" fill="#5F9A5C"/><line x1="195" y1="55" x2="195" y2="70" stroke="#3F7A3D" stroke-width="3"/>
  <text x="110" y="95" font-size="9" text-anchor="middle" fill="#2B2A26">неживая и живая природа</text>
  </svg>`,
  bank:[
    {p:"Что относится к абиотическим факторам?",opts:["Температура и свет","Влияние других животных"],correct:0},
    {p:"Что относится к биотическим факторам?",opts:["Влияние других организмов","Только температура воздуха"],correct:0}
  ]},

{ n:"Пищевые цепи",
  explain:"<b>Пищевая цепь</b> — последовательность организмов, где каждый служит пищей следующему звену: растение → травоядное → хищник.",
  svg:`<svg viewBox="0 0 240 100" width="240">
  <path d="M40 55c-14-3-22 6-25 16 12 5 21-3 25-16z" fill="#5F9A5C"/><line x1="40" y1="55" x2="40" y2="75" stroke="#3F7A3D" stroke-width="3"/>
  <path d="M65 60h25" stroke="#2B2A26" stroke-width="2"/>
  <ellipse cx="120" cy="60" rx="20" ry="13" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <path d="M145 60h25" stroke="#2B2A26" stroke-width="2"/>
  <path d="M200 45c15-5 25 5 22 18-3 12-18 15-28 5" fill="#A83836" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="40" y="90" font-size="8" text-anchor="middle" fill="#2B2A26">растение</text>
  <text x="120" y="85" font-size="8" text-anchor="middle" fill="#2B2A26">травоядное</text>
  <text x="205" y="85" font-size="8" text-anchor="middle" fill="#2B2A26">хищник</text>
  </svg>`,
  bank:[
    {p:"С кого обычно начинается пищевая цепь?",opts:["С растений (производителей)","Со сложных хищников"],correct:0}
  ]},

{ n:"Круговорот веществ в природе",
  explain:"Вещества (углерод, азот, вода) непрерывно циркулируют между живыми организмами и неживой природой — этот процесс называют круговоротом веществ.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="70" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 5"/>
  <path d="M60 45c-14-3-22 6-25 16 12 5 21-3 25-16z" fill="#5F9A5C"/>
  <text x="100" y="35" font-size="9" text-anchor="middle" fill="#2B2A26">организмы</text>
  <text x="100" y="175" font-size="9" text-anchor="middle" fill="#2B2A26">неживая природа</text>
  <text x="170" y="100" font-size="9" text-anchor="middle" fill="#2B2A26">C, N, H₂O</text>
  <path d="M100 30a70 70 0 0 1 60 70" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <path d="M100 170a70 70 0 0 1 -60 -70" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Что происходит с веществами вроде углерода и воды в природе?",opts:["Они циркулируют по кругу между организмами и средой","Они полностью исчезают после однократного использования"],correct:0}
  ]},

{ n:"Биосфера",
  explain:"<b>Биосфера</b> — оболочка Земли, населённая живыми организмами. Учение о биосфере разработал русский учёный Владимир Вернадский.",
  svg:`<svg viewBox="0 0 180 180" width="180">
  <circle cx="90" cy="90" r="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M30 60c15-10 30 5 45-5s25 15 40 5 20 0 35 10" fill="none" stroke="#5F9A5C" stroke-width="6" stroke-linecap="round"/>
  <path d="M25 100c20-8 35 8 50-2s25 12 40 2 20-5 35 5" fill="none" stroke="#3F7A3D" stroke-width="5" stroke-linecap="round"/>
  <text x="90" y="165" font-size="9" text-anchor="middle" fill="#2B2A26">оболочка жизни на Земле</text>
  </svg>`,
  bank:[
    {p:"Кто разработал учение о биосфере?",opts:["Владимир Вернадский","Чарльз Дарвин"],correct:0}
  ]},

{ n:"Охрана природы",
  explain:"Для сохранения биоразнообразия создают заповедники и национальные парки, ограничивают загрязнение среды и вводят охрану редких видов животных и растений.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <rect x="15" y="20" width="170" height="90" rx="10" fill="none" stroke="#3F7A3D" stroke-width="2" stroke-dasharray="6 4"/>
  <path d="M60 75c-14-3-22 6-25 16 12 5 21-3 25-16z" fill="#5F9A5C"/><line x1="60" y1="75" x2="60" y2="95" stroke="#3F7A3D" stroke-width="4"/>
  <ellipse cx="130" cy="90" rx="20" ry="12" fill="#E3922E" stroke="#B96F16" stroke-width="1.5"/>
  <text x="100" y="10" font-size="10" text-anchor="middle" fill="#2B2A26">заповедник</text>
  </svg>`,
  bank:[
    {p:"Для чего создают заповедники?",opts:["Для сохранения природы и биоразнообразия","Только для добычи полезных ископаемых"],correct:0}
  ]},

{ n:"Доказательства эволюции",
  explain:"Эволюцию подтверждают палеонтологические (ископаемые остатки), сравнительно-анатомические (сходство строения разных видов) и молекулярные (сходство ДНК) доказательства.",
  svg:`<svg viewBox="0 0 238 120" width="238">
  <path d="M15 90h60v20H15z" fill="#B96F16" opacity="0.3" stroke="#2B2A26" stroke-width="1.5"/>
  <path d="M25 100c8-15 20-15 30-2 6-8 12-6 14 0" fill="none" stroke="#736C5E" stroke-width="2"/>
  <text x="45" y="118" font-size="8" text-anchor="middle" fill="#2B2A26">ископаемые</text>
  <path d="M110 20c0 12 30 12 30 24s-30 12-30 24 30 12 30 24" fill="none" stroke="#3B6EA5" stroke-width="2.5"/>
  <text x="125" y="105" font-size="8" text-anchor="middle" fill="#2B2A26">сходство ДНК</text>
  <ellipse cx="200" cy="45" rx="14" ry="10" fill="#5F9A5C" opacity="0.8"/>
  <ellipse cx="200" cy="70" rx="12" ry="9" fill="#5F9A5C" opacity="0.6"/>
  <text x="200" y="100" font-size="6" text-anchor="middle" fill="#2B2A26">сравнение строения</text>
  </svg>`,
  bank:[
    {p:"Что из этого — доказательство эволюции?",opts:["Ископаемые остатки древних организмов","Личное мнение отдельного человека"],correct:0},
    {p:"Что показывает сходство ДНК разных видов?",opts:["Родство и общее происхождение видов","Полную независимость видов друг от друга"],correct:0}
  ]},

{ n:"Популяция как единица эволюции",
  explain:"<b>Популяция</b> — группа особей одного вида, длительно населяющая определённую территорию и свободно скрещивающаяся между собой. Именно популяция — элементарная единица эволюции.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <ellipse cx="100" cy="65" rx="85" ry="55" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="4 4"/>
  <circle cx="60" cy="50" r="10" fill="#3B6EA5"/><circle cx="100" cy="40" r="10" fill="#3B6EA5"/><circle cx="140" cy="55" r="10" fill="#3B6EA5"/>
  <circle cx="75" cy="85" r="10" fill="#3B6EA5"/><circle cx="120" cy="90" r="10" fill="#3B6EA5"/>
  <path d="M70 55l25-10M110 45l25 8M85 88l30-2" stroke="#736C5E" stroke-width="1" stroke-dasharray="2 2"/>
  <text x="100" y="125" font-size="9" text-anchor="middle" fill="#2B2A26">популяция — одна территория</text>
  </svg>`,
  bank:[
    {p:"Что является элементарной единицей эволюции?",opts:["Популяция","Отдельная особь"],correct:0},
    {p:"Что характерно для особей одной популяции?",opts:["Свободное скрещивание между собой","Полная изоляция друг от друга"],correct:0}
  ]},

{ n:"Устойчивое развитие",
  explain:"<b>Устойчивое развитие</b> — подход, при котором удовлетворение потребностей нынешнего поколения не подрывает возможности будущих поколений удовлетворять свои потребности.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <line x1="110" y1="20" x2="110" y2="50" stroke="#2B2A26" stroke-width="3"/>
  <line x1="40" y1="50" x2="180" y2="50" stroke="#2B2A26" stroke-width="3"/>
  <line x1="40" y1="50" x2="40" y2="80" stroke="#2B2A26" stroke-width="2"/>
  <line x1="180" y1="50" x2="180" y2="80" stroke="#2B2A26" stroke-width="2"/>
  <path d="M15 80a25 12 0 0 0 50 0z" fill="#3B6EA5" stroke="#284D77" stroke-width="1.5"/>
  <path d="M155 80a25 12 0 0 0 50 0z" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1.5"/>
  <rect x="100" y="95" width="20" height="20" fill="#736C5E"/>
  <text x="40" y="105" font-size="7" text-anchor="middle" fill="#2B2A26">нынешнее поколение</text>
  <text x="180" y="105" font-size="8" text-anchor="middle" fill="#2B2A26">будущие поколения</text>
  </svg>`,
  bank:[
    {p:"Что учитывает концепция устойчивого развития?",opts:["Интересы будущих поколений наряду с нынешними","Только сиюминутную выгоду"],correct:0}
  ]}

];
