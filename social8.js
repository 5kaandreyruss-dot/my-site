/* Обществознание, 8 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 7 класса: сферы общества, экономика, социальная структура. */

const SOCIAL8_MOD = [

{ n:"Сферы жизни общества",
  explain:"Жизнь общества делится на сферы: <b>экономическую</b> (производство и торговля), <b>политическую</b> (власть и управление), <b>социальную</b> (отношения между людьми) и <b>духовную</b> (культура, наука, религия).",
  svg:`<svg viewBox="0 0 220 220" width="220">
  <circle cx="110" cy="110" r="90" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <line x1="110" y1="20" x2="110" y2="200" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="110" x2="200" y2="110" stroke="#2B2A26" stroke-width="2"/>
  <path d="M110 20a90 90 0 0 1 90 90h-90z" fill="#E3922E" opacity="0.8"/>
  <path d="M200 110a90 90 0 0 1-90 90v-90z" fill="#3B6EA5" opacity="0.8"/>
  <path d="M110 200a90 90 0 0 1-90-90h90z" fill="#5F9A5C" opacity="0.8"/>
  <path d="M20 110a90 90 0 0 1 90-90v90z" fill="#9973B8" opacity="0.8"/>
  <text x="155" y="70" font-size="10" text-anchor="middle" fill="#fff">эконом.</text>
  <text x="155" y="150" font-size="10" text-anchor="middle" fill="#fff">политич.</text>
  <text x="65" y="150" font-size="10" text-anchor="middle" fill="#fff">социальн.</text>
  <text x="65" y="70" font-size="10" text-anchor="middle" fill="#fff">духовная</text>
  </svg>`,
  bank:[
    {p:"Сколько основных сфер жизни общества обычно выделяют?",opts:["Четыре","Одну"],correct:0},
    {p:"Какая сфера связана с производством и торговлей?",opts:["Экономическая","Духовная"],correct:0},
    {p:"Какая сфера включает культуру, науку и религию?",opts:["Духовная","Политическая"],correct:0}
  ]},

{ n:"Экономика и её роль",
  explain:"<b>Экономика</b> изучает, как люди производят, распределяют и используют ограниченные ресурсы для удовлетворения своих потребностей.",
  svg:`<svg viewBox="0 0 220 200" width="220">
  <rect x="70" y="10" width="80" height="34" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="110" y="32" font-size="10" text-anchor="middle" fill="#fff">Производство</text>
  <rect x="10" y="150" width="90" height="34" rx="6" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="55" y="172" font-size="10" text-anchor="middle" fill="#fff">Потребление</text>
  <rect x="130" y="150" width="90" height="34" rx="6" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <text x="175" y="172" font-size="9" text-anchor="middle" fill="#fff">Распределение</text>
  <path d="M95 44c-30 40-40 70-30 100" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="66,142 60,158 76,150" fill="#2B2A26"/>
  <path d="M100 167h30" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="126,161 138,167 126,173" fill="#2B2A26"/>
  <path d="M155 150c15-40 5-70-25-100" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="132,55 130,38 148,48" fill="#2B2A26"/>
  </svg>`,
  bank:[
    {p:"Что изучает экономика?",opts:["Производство и использование ресурсов","Только историю войн"],correct:0},
    {p:"Являются ли ресурсы для удовлетворения потребностей безграничными?",opts:["Нет, они ограничены","Да, безграничны"],correct:0}
  ]},

{ n:"Спрос и предложение",
  explain:"<b>Спрос</b> — желание и возможность покупателей купить товар. <b>Предложение</b> — количество товара, которое продавцы готовы продать. Их соотношение влияет на цену.",
  svg:`<svg viewBox="0 0 200 180" width="200">
  <line x1="20" y1="160" x2="20" y2="10" stroke="#2B2A26" stroke-width="2"/>
  <line x1="20" y1="160" x2="190" y2="160" stroke="#2B2A26" stroke-width="2"/>
  <line x1="30" y1="30" x2="180" y2="150" stroke="#D6524F" stroke-width="3"/>
  <line x1="30" y1="150" x2="180" y2="30" stroke="#3B6EA5" stroke-width="3"/>
  <text x="150" y="145" font-size="10" fill="#D6524F">спрос</text>
  <text x="150" y="35" font-size="10" fill="#3B6EA5">предл.</text>
  <circle cx="105" cy="90" r="5" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Что такое спрос?",opts:["Желание и возможность купить товар","Количество товара на складе"],correct:0},
    {p:"Что такое предложение?",opts:["Количество товара, которое готовы продать","Желание купить товар"],correct:0},
    {p:"Что влияет на цену товара?",opts:["Соотношение спроса и предложения","Только желание продавца"],correct:0}
  ]},

{ n:"Социальная структура общества",
  explain:"Общество состоит из разных социальных групп: по возрасту, профессии, доходу. Положение человека в обществе называют <b>социальным статусом</b>.",
  svg:`<svg viewBox="0 0 220 180" width="220">
  <polygon points="110,10 170,60 50,60" fill="#9973B8" stroke="#725189" stroke-width="2"/>
  <polygon points="50,60 170,60 190,110 30,110" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <polygon points="30,110 190,110 210,165 10,165" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Что такое социальный статус?",opts:["Положение человека в обществе","Только его рост"],correct:0},
    {p:"По каким признакам могут выделяться социальные группы?",opts:["По возрасту, профессии, доходу","Только по цвету волос"],correct:0}
  ]},

{ n:"Политика и власть",
  explain:"<b>Политика</b> связана с управлением государством и обществом. <b>Власть</b> — возможность влиять на поведение людей, в том числе с помощью законов.",
  svg:`<svg viewBox="0 0 200 150" width="200">
  <polygon points="100,10 180,50 20,50" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="10" y="130" width="180" height="12" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="55" width="14" height="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="63" y="55" width="14" height="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="96" y="55" width="14" height="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="129" y="55" width="14" height="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <rect x="156" y="55" width="14" height="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"С чем связана политика?",opts:["С управлением государством и обществом","Только с наукой"],correct:0},
    {p:"Что такое власть?",opts:["Возможность влиять на поведение людей","Просто богатство"],correct:0}
  ]},

{ n:"Мораль и нравственность",
  explain:"<b>Мораль</b> — правила поведения, основанные на представлениях о добре и зле, которые не закреплены как законы, но соблюдаются по совести и традиции.",
  svg:`<svg viewBox="0 0 180 160" width="180">
  <rect x="82" y="60" width="16" height="90" fill="#736C5E"/>
  <polygon points="98,50 160,40 160,60" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="118" y="55" font-size="10" fill="#fff">добро</text>
  <polygon points="82,80 20,70 20,90" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="36" y="85" font-size="10" fill="#fff">зло</text>
  </svg>`,
  bank:[
    {p:"На чём основана мораль?",opts:["На представлениях о добре и зле","Только на законах"],correct:0},
    {p:"Является ли нарушение морали таким же наказуемым, как нарушение закона?",opts:["Нет, у морали другой механизм — совесть и осуждение","Да, точно так же"],correct:0}
  ]},

{ n:"Глобальные проблемы человечества",
  explain:"Современное человечество сталкивается с общими проблемами: загрязнение окружающей среды, изменение климата, бедность, которые требуют сотрудничества разных стран.",
  svg:`<svg viewBox="0 0 180 180" width="180">
  <circle cx="90" cy="90" r="75" fill="#DCE9F6" stroke="#284D77" stroke-width="3"/>
  <path d="M20 70c30-15 60 10 90-5s40-20 55 0" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <path d="M15 110c35 10 60-15 95 0s40 15 60 5" fill="none" stroke="#3B6EA5" stroke-width="2"/>
  <polygon points="140,20 160,55 120,55" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="140" y="48" font-size="18" text-anchor="middle" font-weight="700" fill="#2B2A26">!</text>
  </svg>`,
  bank:[
    {p:"Что из этого — глобальная проблема человечества?",opts:["Загрязнение окружающей среды","Личный выбор одного человека"],correct:0},
    {p:"Может ли одна страна в одиночку решить глобальные проблемы?",opts:["Обычно нет, нужно сотрудничество стран","Да, легко в одиночку"],correct:0}
  ]},

{ n:"Личность и социализация",
  explain:"<b>Социализация</b> — процесс усвоения человеком норм и ценностей общества, происходящий через семью, школу, друзей на протяжении всей жизни.",
  svg:`<svg viewBox="0 0 220 160" width="220">
  <circle cx="110" cy="90" r="26" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <rect x="10" y="10" width="60" height="26" rx="6" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <text x="40" y="28" font-size="9" text-anchor="middle" fill="#fff">семья</text>
  <rect x="150" y="10" width="60" height="26" rx="6" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <text x="180" y="28" font-size="9" text-anchor="middle" fill="#fff">школа</text>
  <rect x="80" y="130" width="60" height="26" rx="6" fill="#D6524F" stroke="#A83836" stroke-width="2"/>
  <text x="110" y="148" font-size="9" text-anchor="middle" fill="#fff">друзья</text>
  <line x1="55" y1="36" x2="95" y2="72" stroke="#2B2A26" stroke-width="2"/>
  <line x1="165" y1="36" x2="125" y2="72" stroke="#2B2A26" stroke-width="2"/>
  <line x1="110" y1="116" x2="110" y2="130" stroke="#2B2A26" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Что такое социализация?",opts:["Усвоение норм и ценностей общества","Изучение только математики"],correct:0},
    {p:"Через что человек проходит социализацию?",opts:["Через семью, школу, друзей","Только через книги"],correct:0}
  ]},

{ n:"Предпринимательство",
  explain:"<b>Предпринимательство</b> — самостоятельная деятельность по созданию и ведению бизнеса с целью получения прибыли, связанная с определённым риском.",
  svg:`<svg viewBox="0 0 200 150" width="200">
  <line x1="15" y1="135" x2="185" y2="135" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="100" width="30" height="35" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="2"/>
  <rect x="80" y="70" width="30" height="65" fill="#3B6EA5" stroke="#284D77" stroke-width="2"/>
  <rect x="130" y="40" width="30" height="95" fill="#E3922E" stroke="#B96F16" stroke-width="2"/>
  <circle cx="145" cy="25" r="16" fill="#FFDE59" stroke="#C99A00" stroke-width="2"/>
  <text x="145" y="30" font-size="14" text-anchor="middle" font-weight="700" fill="#B96F16">₽</text>
  </svg>`,
  bank:[
    {p:"Что такое предпринимательство?",opts:["Деятельность по ведению бизнеса ради прибыли","Работа только по найму"],correct:0},
    {p:"Связано ли предпринимательство с риском?",opts:["Да, связано","Нет, полностью безопасно"],correct:0}
  ]},

{ n:"Культура и духовные ценности",
  explain:"<b>Культура</b> включает искусство, науку, традиции и обычаи народа. Духовные ценности — то, что люди считают важным и значимым: честность, дружба, знания.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <path d="M100 30c-20-14-50-14-80-4v90c30-10 60-10 80 4 20-14 50-14 80-4V26c-30-10-60-10-80 4z" fill="#9973B8" stroke="#725189" stroke-width="2" stroke-linejoin="round"/>
  <line x1="100" y1="30" x2="100" y2="120" stroke="#725189" stroke-width="2"/>
  </svg>`,
  bank:[
    {p:"Что входит в понятие культуры?",opts:["Искусство, наука, традиции","Только еда"],correct:0},
    {p:"Что из этого можно назвать духовной ценностью?",opts:["Честность и дружба","Только деньги"],correct:0}
  ]}

];
