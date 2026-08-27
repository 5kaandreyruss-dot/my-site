/* География, 6 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение начального курса 5 класса: гидросфера, атмосфера, биосфера, географическая оболочка, население. */

const GEOGRAPHY6_MOD = [

{ n:"Мировой океан",
  explain:"<b>Мировой океан</b> — единое водное пространство Земли, включающее все океаны и моря. Он делится на четыре (иногда пять) океанов и занимает большую часть поверхности планеты.",
  svg:`<svg viewBox="0 0 220 180" width="220">
  <circle cx="110" cy="90" r="80" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <path d="M110 10a80 80 0 0 1 56 24l-56 56z" fill="#284D77"/>
  <path d="M110 90l56-56a80 80 0 0 1 0 112z" fill="#3E8F86"/>
  <path d="M110 90l56 56a80 80 0 0 1 -112 0z" fill="#5F9A5C" opacity="0.7"/>
  <path d="M110 90l-56-56a80 80 0 0 1 56-24z" fill="#284D77" opacity="0.8"/>
  <circle cx="110" cy="90" r="80" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M64 44c8 6 4 16-2 20M150 130c-6-6-2-16 6-18" stroke="#FFFEF8" stroke-width="2" fill="none" opacity="0.6"/>
  <text x="110" y="94" font-size="10" text-anchor="middle" fill="#FFFEF8" font-weight="700">70%</text>
  </svg>`,
  bank:[
    {p:"Как называется единое водное пространство Земли?",opts:["Мировой океан","Литосфера","Атмосфера"],correct:0},
    {p:"Какую примерно часть поверхности Земли занимает Мировой океан?",opts:["Большую часть (около 70%)","Меньшую часть (около 10%)","Почти ничего"],correct:0},
    {p:"Часть океана, вдающаяся в сушу и менее солёная, называется...",opts:["Морем","Рекой","Озером"],correct:0}
  ]},

{ n:"Реки и их части",
  explain:"У каждой реки есть <b>исток</b> (начало), <b>русло</b> (путь течения) и <b>устье</b> (место впадения в море, озеро или другую реку). Реки, впадающие в главную реку, называют притоками.",
  svg:`<svg viewBox="0 0 260 150" width="260">
  <polygon points="20,30 40,15 55,32" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="38" cy="20" r="4" fill="#3B6EA5"/>
  <path d="M38 24c6 20 2 30 20 40s10 24 30 30 24 4 40 16 40 6 60 20" fill="none" stroke="#3B6EA5" stroke-width="5" stroke-linecap="round"/>
  <path d="M110 60c14 4 22 18 30 30" fill="none" stroke="#3B6EA5" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M0 100c-4-10 4-20 14-22" fill="none" stroke="#3B6EA5" stroke-width="3" stroke-linecap="round" transform="translate(150,20)"/>
  <ellipse cx="220" cy="130" rx="34" ry="12" fill="#DCE9F6" stroke="#3B6EA5" stroke-width="1.5"/>
  <text x="38" y="12" font-size="10" text-anchor="middle" fill="#2B2A26">исток</text>
  <text x="140" y="72" font-size="10" fill="#2B2A26">приток</text>
  <text x="220" y="146" font-size="10" text-anchor="middle" fill="#2B2A26">устье</text>
  </svg>`,
  bank:[
    {p:"Как называется начало реки?",opts:["Исток","Устье","Русло"],correct:0},
    {p:"Как называется место впадения реки в море или другую реку?",opts:["Устье","Исток","Приток"],correct:0},
    {p:"Как называют реку, впадающую в другую, более крупную реку?",opts:["Приток","Исток","Дельта"],correct:0},
    {p:"Путь, по которому течёт река, называется...",opts:["Русло","Устье","Берег"],correct:0}
  ]},

{ n:"Озёра и болота",
  explain:"<b>Озеро</b> — природный водоём, не связанный напрямую с океаном. <b>Болото</b> — избыточно увлажнённый участок суши, часто образуется на месте заросших озёр.",
  svg:`<svg viewBox="0 0 240 150" width="240">
  <ellipse cx="65" cy="80" rx="55" ry="30" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <path d="M25 70c10 6 20-4 30 2s20 6 28-2" fill="none" stroke="#DCE9F6" stroke-width="2" opacity="0.7"/>
  <text x="65" y="126" font-size="11" text-anchor="middle" fill="#2B2A26">озеро</text>
  <ellipse cx="180" cy="90" rx="55" ry="26" fill="#3E8F86" stroke="#2C6D66" stroke-width="2" opacity="0.85"/>
  <path d="M150 80c4-14 8-16 10-30M175 82c2-16 6-20 4-34M200 80c4-12 10-14 12-26" stroke="#3F7A3D" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M150 80c4-14 8-16 10-30" stroke="#5F9A5C" stroke-width="4" fill="none" stroke-linecap="round"/>
  <text x="180" y="132" font-size="11" text-anchor="middle" fill="#2B2A26">болото</text>
  </svg>`,
  bank:[
    {p:"Что такое озеро?",opts:["Природный водоём, не связанный напрямую с океаном","Часть океана","Река"],correct:0},
    {p:"Что такое болото?",opts:["Избыточно увлажнённый участок суши","Гора","Пустыня"],correct:0},
    {p:"На месте чего часто образуются болота?",opts:["Заросших озёр","Гор","Пустынь"],correct:0}
  ]},

{ n:"Атмосфера: строение",
  explain:"Атмосфера состоит из нескольких слоёв. Ближайший к Земле слой, где мы живём и где формируется погода, называется <b>тропосфера</b>.",
  svg:`<svg viewBox="0 0 220 170" width="220">
  <rect x="10" y="10" width="200" height="34" fill="#9973B8" opacity="0.5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="20" y="30" font-size="10" fill="#2B2A26">верхние слои</text>
  <rect x="10" y="44" width="200" height="30" fill="#3B6EA5" opacity="0.45" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="20" y="63" font-size="10" fill="#2B2A26">стратосфера</text>
  <rect x="10" y="74" width="200" height="60" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <text x="20" y="98" font-size="11" font-weight="700" fill="#284D77">тропосфера</text>
  <path d="M120 90c8-8 20-8 24 2 8 0 12 6 10 12h-38c-4-4-2-10 4-14z" fill="#FFFEF8" stroke="#736C5E" stroke-width="1.2"/>
  <path d="M130 108l-4 10M142 108l-4 12" stroke="#3B6EA5" stroke-width="2" stroke-linecap="round"/>
  <polygon points="55,134 75,95 95,134" fill="#736C5E"/>
  <rect x="10" y="134" width="200" height="26" fill="#5F9A5C" opacity="0.5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="20" y="152" font-size="10" fill="#2B2A26">Земля</text>
  </svg>`,
  bank:[
    {p:"Как называется ближайший к Земле слой атмосферы, где формируется погода?",opts:["Тропосфера","Стратосфера","Литосфера"],correct:0},
    {p:"Атмосфера состоит из...",opts:["Нескольких слоёв","Одного сплошного слоя"],correct:0},
    {p:"Что защищает атмосфера, среди прочего?",opts:["Землю от опасного излучения Солнца","Только океаны"],correct:0}
  ]},

{ n:"Погода и климат",
  explain:"<b>Погода</b> меняется день ото дня, а <b>климат</b> — это многолетний, устойчивый характер погоды для конкретной территории. Климат зависит от географической широты, близости к океану и других факторов.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <text x="10" y="18" font-size="10" fill="#736C5E">погода за неделю</text>
  <text x="60" y="35" font-size="16">☀️</text><text x="95" y="35" font-size="16">🌧️</text><text x="130" y="35" font-size="16">⛅</text><text x="165" y="35" font-size="16">❄️</text><text x="200" y="35" font-size="16">☀️</text>
  <line x1="8" y1="55" x2="232" y2="55" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 4"/>
  <text x="10" y="78" font-size="10" fill="#736C5E">климат: средняя за годы</text>
  <path d="M10 120c30-45 60-55 100-55s70 10 100-40" fill="none" stroke="#D6524F" stroke-width="4" stroke-linecap="round"/>
  </svg>`,
  bank:[
    {p:"Что меняется быстрее — погода или климат?",opts:["Погода","Климат"],correct:0},
    {p:"От чего зависит климат территории?",opts:["От широты, близости к океану и других факторов","Только от цвета почвы"],correct:0},
    {p:"Климат жарких регионов около экватора обычно...",opts:["Жаркий","Холодный"],correct:0}
  ]},

{ n:"Биосфера",
  explain:"<b>Биосфера</b> — оболочка Земли, где существует жизнь: часть атмосферы, вся гидросфера и верхняя часть литосферы. Живые организмы влияют на все другие оболочки Земли.",
  svg:`<svg viewBox="0 0 220 180" width="220">
  <circle cx="90" cy="80" r="60" fill="#DCE9F6" opacity="0.6" stroke="#3B6EA5" stroke-width="1.5"/>
  <circle cx="130" cy="80" r="60" fill="#5F9A5C" opacity="0.35" stroke="#3F7A3D" stroke-width="1.5"/>
  <circle cx="110" cy="120" r="60" fill="#736C5E" opacity="0.3" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="60" y="55" font-size="10" fill="#284D77">атмосфера</text>
  <text x="145" y="45" font-size="10" fill="#3F7A3D">гидросфера</text>
  <text x="95" y="165" font-size="10" fill="#2B2A26">литосфера</text>
  <text x="110" y="102" font-size="18" text-anchor="middle">🌱</text>
  </svg>`,
  bank:[
    {p:"Что такое биосфера?",opts:["Оболочка Земли, где существует жизнь","Только океаны","Только горы"],correct:0},
    {p:"Влияют ли живые организмы на другие оболочки Земли?",opts:["Да, влияют","Нет, никак не влияют"],correct:0}
  ]},

{ n:"Географическая оболочка",
  explain:"<b>Географическая оболочка</b> — это совокупность всех оболочек Земли (литосферы, атмосферы, гидросферы, биосферы), которые взаимодействуют друг с другом.",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="88" fill="none" stroke="#2B2A26" stroke-width="2" stroke-dasharray="3 5"/>
  <circle cx="100" cy="66" r="36" fill="#9973B8" opacity="0.55" stroke="#725189" stroke-width="1.5"/>
  <circle cx="66" cy="120" r="36" fill="#3B6EA5" opacity="0.55" stroke="#284D77" stroke-width="1.5"/>
  <circle cx="134" cy="120" r="36" fill="#736C5E" opacity="0.5" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="100" cy="106" r="26" fill="#5F9A5C" opacity="0.6" stroke="#3F7A3D" stroke-width="1.5"/>
  <text x="100" y="46" font-size="9" text-anchor="middle" fill="#2B2A26">атмосфера</text>
  <text x="42" y="150" font-size="9" text-anchor="middle" fill="#2B2A26">гидросфера</text>
  <text x="158" y="150" font-size="9" text-anchor="middle" fill="#2B2A26">литосфера</text>
  <text x="100" y="110" font-size="9" text-anchor="middle" fill="#FFFEF8">биосфера</text>
  </svg>`,
  bank:[
    {p:"Что включает в себя географическая оболочка?",opts:["Все оболочки Земли, взаимодействующие друг с другом","Только сушу","Только воду"],correct:0},
    {p:"Взаимодействуют ли оболочки Земли между собой?",opts:["Да","Нет, они полностью раздельны"],correct:0}
  ]},

{ n:"Население Земли",
  explain:"На Земле живёт множество народов, говорящих на разных языках. Люди неравномерно распределены по планете: где-то живёт много людей, а где-то — почти никого (пустыни, Антарктида).",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <rect x="6" y="6" width="105" height="128" rx="8" fill="#FFF3C9" stroke="#2B2A26" stroke-width="2"/>
  <g fill="#D6524F"><circle cx="30" cy="30" r="5"/><circle cx="48" cy="26" r="5"/><circle cx="66" cy="32" r="5"/><circle cx="84" cy="28" r="5"/>
  <circle cx="24" cy="48" r="5"/><circle cx="42" cy="46" r="5"/><circle cx="60" cy="50" r="5"/><circle cx="78" cy="46" r="5"/><circle cx="94" cy="50" r="5"/>
  <circle cx="34" cy="66" r="5"/><circle cx="52" cy="64" r="5"/><circle cx="70" cy="68" r="5"/><circle cx="88" cy="64" r="5"/></g>
  <text x="58" y="120" font-size="11" text-anchor="middle" fill="#2B2A26">густо заселено</text>
  <rect x="129" y="6" width="105" height="128" rx="8" fill="#FDF6E3" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="160" cy="40" r="5" fill="#E3922E"/><circle cx="205" cy="80" r="5" fill="#E3922E"/>
  <text x="182" y="120" font-size="11" text-anchor="middle" fill="#2B2A26">почти безлюдно</text>
  </svg>`,
  bank:[
    {p:"Равномерно ли люди распределены по поверхности Земли?",opts:["Нет, неравномерно","Да, равномерно"],correct:0},
    {p:"Где на Земле живёт очень мало людей?",opts:["В пустынях и Антарктиде","В крупных городах"],correct:0},
    {p:"На скольких примерно языках говорят люди на Земле?",opts:["На тысячах языков","Только на одном","Только на десяти"],correct:0}
  ]},

{ n:"Почва",
  explain:"<b>Почва</b> — верхний плодородный слой земли, где растут растения. Она образуется очень медленно из горных пород под действием воды, воздуха и живых организмов.",
  svg:`<svg viewBox="0 0 220 150" width="220">
  <rect x="10" y="10" width="200" height="26" fill="#3F7A3D" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="20" y="27" font-size="10" fill="#FFFEF8">почва (гумус)</text>
  <rect x="10" y="36" width="200" height="34" fill="#B96F16" opacity="0.55" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="20" y="57" font-size="10" fill="#2B2A26">подпочва</text>
  <rect x="10" y="70" width="200" height="70" fill="#736C5E" opacity="0.5" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="20" y="95" font-size="10" fill="#2B2A26">горная порода</text>
  <path d="M60 10c-4 20 2 34-4 46M100 10c2 22-4 36 2 50" stroke="#5F9A5C" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M60 10c-6-6-16-6-20 2M100 10c6-6 14-8 20 0" stroke="#5F9A5C" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,
  bank:[
    {p:"Что такое почва?",opts:["Верхний плодородный слой земли","Твёрдая горная порода","Слой воды под землёй"],correct:0},
    {p:"Быстро ли образуется почва?",opts:["Нет, очень медленно","Да, за один день"],correct:0},
    {p:"Что влияет на образование почвы?",opts:["Вода, воздух, живые организмы","Только температура воздуха"],correct:0}
  ]},

{ n:"Ледники",
  explain:"<b>Ледники</b> — большие массы льда, накопившегося за многие годы. Они встречаются в горах и в полярных областях (Антарктида, Гренландия) и содержат значительную часть пресной воды Земли.",
  svg:`<svg viewBox="0 0 220 150" width="220">
  <rect x="0" y="100" width="220" height="50" fill="#3B6EA5"/>
  <polygon points="30,100 70,25 110,100" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="90,100 130,45 170,100" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <path d="M50 70l10 8-10 6M100 70l8 8-8 6" stroke="#3B6EA5" stroke-width="1.5" fill="none" opacity="0.6"/>
  <path d="M30 100c30 8 40-6 60 0s30-6 60 4" fill="none" stroke="#3B6EA5" stroke-width="2" opacity="0.5"/>
  <text x="110" y="140" font-size="11" text-anchor="middle" fill="#FFFEF8">ледник и айсберг</text>
  </svg>`,
  bank:[
    {p:"Где на Земле встречаются ледники?",opts:["В горах и полярных областях","Только в пустынях","Только в океане"],correct:0},
    {p:"Какую воду в основном хранят ледники — солёную или пресную?",opts:["Пресную","Солёную"],correct:0}
  ]},

{ n:"Природные комплексы",
  explain:"<b>Природный комплекс</b> — участок земной поверхности, где рельеф, климат, вода, почва, растения и животные тесно связаны друг с другом (например, лес, степь, пустыня).",
  svg:`<svg viewBox="0 0 220 170" width="220">
  <circle cx="110" cy="85" r="14" fill="#FFDE59" stroke="#2B2A26" stroke-width="1.5"/>
  <g stroke="#2B2A26" stroke-width="1.2" stroke-dasharray="2 3">
  <line x1="110" y1="85" x2="50" y2="30"/><line x1="110" y1="85" x2="170" y2="30"/>
  <line x1="110" y1="85" x2="30" y2="90"/><line x1="110" y1="85" x2="190" y2="90"/>
  <line x1="110" y1="85" x2="50" y2="140"/><line x1="110" y1="85" x2="170" y2="140"/>
  </g>
  <text x="50" y="25" font-size="10" text-anchor="middle" fill="#2B2A26">рельеф</text>
  <text x="170" y="25" font-size="10" text-anchor="middle" fill="#2B2A26">климат</text>
  <text x="26" y="95" font-size="10" text-anchor="middle" fill="#2B2A26">вода</text>
  <text x="194" y="95" font-size="10" text-anchor="middle" fill="#2B2A26">почва</text>
  <text x="50" y="152" font-size="10" text-anchor="middle" fill="#2B2A26">растения</text>
  <text x="170" y="152" font-size="10" text-anchor="middle" fill="#2B2A26">животные</text>
  </svg>`,
  bank:[
    {p:"Что такое природный комплекс?",opts:["Участок земли, где всё взаимосвязано","Просто одна река без окружения"],correct:0},
    {p:"Что из этого можно назвать природным комплексом?",opts:["Лес со всеми его обитателями","Один отдельный камень"],correct:0}
  ]}

];
