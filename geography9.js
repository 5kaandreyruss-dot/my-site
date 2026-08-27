/* География, 9 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Экономическая и социальная география России: хозяйство, отрасли, население, районы. */

const GEOGRAPHY9_MOD = [

{ n:"Экономическая география",
  explain:"<b>Экономическая география</b> изучает размещение хозяйства — где и почему расположены заводы, фермы, города — и связи между разными территориями.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <rect x="6" y="6" width="208" height="128" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="25" y="35" width="30" height="24" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <polygon points="25,35 40,20 55,35" fill="#D6524F"/>
  <text x="40" y="72" font-size="8" text-anchor="middle" fill="#2B2A26">завод</text>
  <path d="M100 55c-6-10 4-18 12-14 4-8 16-8 18 2 8-2 12 6 8 12z" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1.3"/>
  <text x="115" y="72" font-size="8" text-anchor="middle" fill="#2B2A26">ферма</text>
  <circle cx="180" cy="45" r="14" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="180" y="72" font-size="8" text-anchor="middle" fill="#2B2A26">город</text>
  <path d="M55 48h45M129 48h37" stroke="#2B2A26" stroke-width="1.3" stroke-dasharray="3 3"/>
  </svg>`,
  bank:[
    {p:"Что изучает экономическая география?",opts:["Размещение хозяйства и его связи","Только рельеф местности"],correct:0}
  ]},

{ n:"Население России",
  explain:"Население России распределено неравномерно: большинство людей живёт в европейской части страны, а на востоке (Сибирь, Дальний Восток) плотность населения намного ниже.",
  svg:`<svg viewBox="0 0 240 130" width="240">
  <rect x="6" y="6" width="228" height="118" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <line x1="90" y1="6" x2="90" y2="124" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 3"/>
  <g fill="#D6524F">
  <circle cx="25" cy="30" r="5"/><circle cx="40" cy="45" r="5"/><circle cx="55" cy="30" r="5"/><circle cx="70" cy="50" r="5"/>
  <circle cx="30" cy="65" r="5"/><circle cx="48" cy="75" r="5"/><circle cx="65" cy="70" r="5"/>
  <circle cx="25" cy="95" r="5"/><circle cx="45" cy="100" r="5"/><circle cx="62" cy="95" r="5"/>
  </g>
  <text x="48" y="118" font-size="9" text-anchor="middle" fill="#2B2A26">европ. часть</text>
  <circle cx="120" cy="40" r="3" fill="#E3922E"/><circle cx="170" cy="60" r="3" fill="#E3922E"/><circle cx="210" cy="35" r="3" fill="#E3922E"/><circle cx="150" cy="90" r="3" fill="#E3922E"/>
  <text x="170" y="118" font-size="9" text-anchor="middle" fill="#2B2A26">Сибирь и Дальний Восток</text>
  </svg>`,
  bank:[
    {p:"Где живёт большинство населения России?",opts:["В европейской части страны","Только на Крайнем Севере"],correct:0},
    {p:"Какая плотность населения в Сибири и на Дальнем Востоке?",opts:["Намного ниже, чем в европейской части","Такая же, как в европейской части"],correct:0}
  ]},

{ n:"Городское и сельское население",
  explain:"Большая часть населения России — <b>городское</b>, то есть проживает в городах. Такое преобладание городского населения над сельским называется урбанизацией.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <line x1="15" y1="115" x2="190" y2="115" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="20" width="40" height="95" fill="#3B6EA5"/>
  <rect x="34" y="30" width="8" height="8" fill="#DCE9F6"/><rect x="48" y="30" width="8" height="8" fill="#DCE9F6"/>
  <rect x="34" y="46" width="8" height="8" fill="#DCE9F6"/><rect x="48" y="46" width="8" height="8" fill="#DCE9F6"/>
  <text x="50" y="126" font-size="9" text-anchor="middle" fill="#2B2A26">город ~75%</text>
  <rect x="120" y="85" width="40" height="30" fill="#5F9A5C"/>
  <polygon points="120,85 140,68 160,85" fill="#3F7A3D"/>
  <text x="140" y="126" font-size="9" text-anchor="middle" fill="#2B2A26">село ~25%</text>
  </svg>`,
  bank:[
    {p:"Какое население преобладает в России — городское или сельское?",opts:["Городское","Сельское"],correct:0},
    {p:"Как называется процесс роста городского населения?",opts:["Урбанизация","Миграция"],correct:0}
  ]},

{ n:"Топливно-энергетический комплекс",
  explain:"<b>Топливно-энергетический комплекс (ТЭК)</b> объединяет добычу нефти, газа, угля и производство электроэнергии. Россия — один из крупнейших в мире экспортёров нефти и природного газа.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="20" y="70" width="6" height="50" fill="#736C5E"/>
  <polygon points="10,70 36,70 30,45 16,45" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <text x="23" y="126" font-size="8" text-anchor="middle" fill="#2B2A26">нефть</text>
  <path d="M75 100c-6-10 2-18 10-14 2-10 16-12 20 0 8-2 12 8 6 14z" fill="#FFDE59" stroke="#C99A00" stroke-width="1.5"/>
  <text x="90" y="126" font-size="8" text-anchor="middle" fill="#2B2A26">газ</text>
  <polygon points="130,120 122,80 148,80 140,120" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="135" y="70" font-size="8" text-anchor="middle" fill="#2B2A26">уголь</text>
  <line x1="180" y1="30" x2="180" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <line x1="160" y1="45" x2="200" y2="45" stroke="#2B2A26" stroke-width="2"/>
  <line x1="165" y1="65" x2="195" y2="65" stroke="#2B2A26" stroke-width="2"/>
  <text x="180" y="126" font-size="8" text-anchor="middle" fill="#2B2A26">ЛЭП</text>
  </svg>`,
  bank:[
    {p:"Что входит в топливно-энергетический комплекс?",opts:["Добыча нефти, газа, угля и производство энергии","Только сельское хозяйство"],correct:0},
    {p:"Каким экспортёром нефти и газа является Россия?",opts:["Одним из крупнейших в мире","Россия их не экспортирует"],correct:0}
  ]},

{ n:"Металлургия России",
  explain:"<b>Металлургия</b> делится на чёрную (производство железа и стали) и цветную (производство меди, алюминия, никеля и других металлов). Крупные центры металлургии — Урал, Сибирь.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <polygon points="30,120 20,50 60,50 50,120" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <path d="M28 50c-2-14 8-18 6-30" stroke="#D6524F" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M42 50c2-12-6-16-2-28" stroke="#E3922E" stroke-width="4" fill="none" stroke-linecap="round"/>
  <text x="40" y="14" font-size="8" text-anchor="middle" fill="#2B2A26">чёрная</text>
  <polygon points="150,120 140,50 180,50 170,120" fill="#9973B8" stroke="#2B2A26" stroke-width="2" opacity="0.85"/>
  <path d="M148 50c-2-14 8-18 6-30" stroke="#D9679A" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M162 50c2-12-6-16-2-28" stroke="#FFDE59" stroke-width="4" fill="none" stroke-linecap="round"/>
  <text x="160" y="14" font-size="8" text-anchor="middle" fill="#2B2A26">цветная</text>
  </svg>`,
  bank:[
    {p:"Какие два вида металлургии выделяют?",opts:["Чёрную и цветную","Тяжёлую и лёгкую"],correct:0},
    {p:"Что производит чёрная металлургия?",opts:["Железо и сталь","Алюминий"],correct:0}
  ]},

{ n:"Машиностроение",
  explain:"<b>Машиностроение</b> — отрасль, производящая машины, оборудование и транспорт. Она требует большого числа квалифицированных рабочих и обычно размещается ближе к крупным городам.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <circle cx="70" cy="65" r="30" fill="none" stroke="#3B6EA5" stroke-width="8"/>
  <circle cx="70" cy="65" r="30" fill="none" stroke="#284D77" stroke-width="8" stroke-dasharray="10 8"/>
  <circle cx="70" cy="65" r="10" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="130" cy="45" r="16" fill="none" stroke="#E3922E" stroke-width="6"/>
  <circle cx="130" cy="45" r="16" fill="none" stroke="#B96F16" stroke-width="6" stroke-dasharray="6 6"/>
  <circle cx="130" cy="45" r="5" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="100" y="118" font-size="10" text-anchor="middle" fill="#2B2A26">заводы рядом с городами</text>
  </svg>`,
  bank:[
    {p:"Что производит машиностроение?",opts:["Машины, оборудование, транспорт","Только продукты питания"],correct:0}
  ]},

{ n:"Сельское хозяйство России",
  explain:"Сельское хозяйство делится на растениеводство (выращивание культур: пшеница, картофель) и животноводство (разведение скота). Природные условия сильно влияют на то, что выращивают в разных регионах.",
  svg:`<svg viewBox="0 0 200 130" width="200">
  <line x1="10" y1="110" x2="95" y2="110" stroke="#B96F16" stroke-width="4"/>
  <path d="M20 110c0-20 4-30 0-40M35 110c0-24 4-32 0-44M50 110c0-20 4-28 0-38M65 110c0-24 4-32 0-44M80 110c0-20 4-30 0-40" stroke="#E3922E" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="52" y="126" font-size="9" text-anchor="middle" fill="#2B2A26">растениеводство</text>
  <ellipse cx="150" cy="90" rx="26" ry="16" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <circle cx="130" cy="80" r="9" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <g fill="#2B2A26"><circle cx="140" cy="90" r="2.5"/><circle cx="160" cy="90" r="2.5"/></g>
  <line x1="140" y1="106" x2="140" y2="118" stroke="#2B2A26" stroke-width="3"/>
  <line x1="160" y1="106" x2="160" y2="118" stroke="#2B2A26" stroke-width="3"/>
  <text x="148" y="126" font-size="9" text-anchor="middle" fill="#2B2A26">животноводство</text>
  </svg>`,
  bank:[
    {p:"На какие две основные части делится сельское хозяйство?",opts:["Растениеводство и животноводство","Добычу и переработку нефти"],correct:0},
    {p:"Что сильно влияет на то, какие культуры выращивают в регионе?",opts:["Природные условия (климат, почва)","Только желание фермера"],correct:0}
  ]},

{ n:"Транспорт России",
  explain:"В России развиты все виды транспорта: железнодорожный, автомобильный, водный, воздушный, трубопроводный. Из-за огромной территории железнодорожный транспорт особенно важен для перевозки грузов на большие расстояния.",
  svg:`<svg viewBox="0 0 240 100" width="240">
  <line x1="10" y1="70" x2="230" y2="70" stroke="#736C5E" stroke-width="2" stroke-dasharray="6 4"/>
  <rect x="15" y="50" width="34" height="16" rx="3" fill="#3B6EA5" stroke="#2B2A26" stroke-width="1.3"/>
  <circle cx="24" cy="68" r="4" fill="#2B2A26"/><circle cx="40" cy="68" r="4" fill="#2B2A26"/>
  <text x="32" y="46" font-size="7" text-anchor="middle" fill="#2B2A26">ж/д</text>
  <rect x="65" y="52" width="26" height="14" rx="2" fill="#E3922E" stroke="#2B2A26" stroke-width="1.3"/>
  <circle cx="72" cy="68" r="3.5" fill="#2B2A26"/><circle cx="86" cy="68" r="3.5" fill="#2B2A26"/>
  <text x="78" y="48" font-size="7" text-anchor="middle" fill="#2B2A26">авто</text>
  <path d="M115 68l14-6 14 6z" fill="#3E8F86" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="129" y="48" font-size="7" text-anchor="middle" fill="#2B2A26">водный</text>
  <path d="M170 60l16-4 -4 8 -6 2z" fill="#9973B8" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="180" y="48" font-size="7" text-anchor="middle" fill="#2B2A26">возд.</text>
  <path d="M205 70c8-10 8-16 20-16" fill="none" stroke="#D6524F" stroke-width="4" stroke-linecap="round"/>
  <text x="218" y="48" font-size="7" text-anchor="middle" fill="#2B2A26">труба</text>
  </svg>`,
  bank:[
    {p:"Почему железнодорожный транспорт особенно важен в России?",opts:["Из-за огромной территории страны","Потому что других видов транспорта нет"],correct:0},
    {p:"Какой транспорт используют для перекачки нефти и газа?",opts:["Трубопроводный","Только воздушный"],correct:0}
  ]},

{ n:"Экономические районы России",
  explain:"Территорию России для удобства управления и изучения делят на крупные <b>экономические районы</b> — например, Центральный, Уральский, Сибирский — каждый со своей хозяйственной специализацией.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <rect x="6" y="6" width="208" height="118" rx="8" fill="#FFFEF8" stroke="#2B2A26" stroke-width="2"/>
  <rect x="14" y="14" width="60" height="102" fill="#D9679A" opacity="0.5" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="44" y="66" font-size="8" text-anchor="middle" fill="#2B2A26">Централь-ный</text>
  <rect x="78" y="14" width="58" height="102" fill="#3E8F86" opacity="0.55" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="107" y="66" font-size="8" text-anchor="middle" fill="#2B2A26">Уральский</text>
  <rect x="140" y="14" width="66" height="102" fill="#E3922E" opacity="0.55" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="173" y="66" font-size="8" text-anchor="middle" fill="#2B2A26">Сибирский</text>
  </svg>`,
  bank:[
    {p:"Зачем территорию России делят на экономические районы?",opts:["Для удобства управления и изучения хозяйства","Просто для украшения карты"],correct:0}
  ]},

{ n:"Химическая промышленность",
  explain:"<b>Химическая промышленность</b> производит удобрения, пластмассы, синтетические волокна и другие материалы, используя сырьё вроде нефти, газа и минералов.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <path d="M80 20h20v34l24 50c3 6-1 12-8 12H64c-7 0-11-6-8-12l24-50z" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M68 90h64l6 12c2 4-1 8-6 8H68c-5 0-8-4-6-8z" fill="#9973B8" opacity="0.7"/>
  <circle cx="85" cy="70" r="4" fill="#3B6EA5"/><circle cx="100" cy="80" r="3" fill="#5F9A5C"/><circle cx="92" cy="60" r="3" fill="#D6524F"/>
  <line x1="72" y1="14" x2="128" y2="14" stroke="#2B2A26" stroke-width="2"/>
  <text x="100" y="130" font-size="9" text-anchor="middle" fill="#2B2A26">удобрения · пластмассы</text>
  </svg>`,
  bank:[
    {p:"Что производит химическая промышленность?",opts:["Удобрения, пластмассы, синтетические волокна","Только продукты питания"],correct:0}
  ]},

{ n:"Лесная промышленность",
  explain:"Россия обладает крупнейшими в мире лесными ресурсами. Лесная промышленность включает заготовку древесины, деревообработку и производство бумаги.",
  svg:`<svg viewBox="0 0 220 130" width="220">
  <polygon points="30,110 20,60 40,60" fill="#3F7A3D"/><polygon points="30,95 15,45 45,45" fill="#5F9A5C"/>
  <rect x="27" y="105" width="6" height="14" fill="#B96F16"/>
  <rect x="70" y="90" width="60" height="14" rx="4" fill="#B96F16" stroke="#2B2A26" stroke-width="1.5"/>
  <circle cx="76" cy="97" r="7" fill="none" stroke="#2B2A26" stroke-width="1.5"/><circle cx="124" cy="97" r="7" fill="none" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="100" y="118" font-size="8" text-anchor="middle" fill="#2B2A26">брёвна</text>
  <rect x="165" y="55" width="30" height="42" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.5"/>
  <line x1="170" y1="65" x2="190" y2="65" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="170" y1="75" x2="190" y2="75" stroke="#736C5E" stroke-width="1.5"/>
  <line x1="170" y1="85" x2="190" y2="85" stroke="#736C5E" stroke-width="1.5"/>
  <text x="180" y="112" font-size="8" text-anchor="middle" fill="#2B2A26">бумага</text>
  </svg>`,
  bank:[
    {p:"Какими лесными ресурсами обладает Россия?",opts:["Крупнейшими в мире","Незначительными"],correct:0},
    {p:"Что производит лесная промышленность, помимо древесины?",opts:["Бумагу","Только металл"],correct:0}
  ]},

{ n:"Агропромышленный комплекс",
  explain:"<b>Агропромышленный комплекс</b> объединяет сельское хозяйство и связанные с ним отрасли: переработку продукции, производство удобрений и техники для сельского хозяйства.",
  svg:`<svg viewBox="0 0 220 150" width="220">
  <circle cx="110" cy="75" r="60" fill="none" stroke="#736C5E" stroke-width="1" stroke-dasharray="3 4"/>
  <path d="M110 20l6 10-12 0z" fill="#2B2A26"/>
  <path d="M60 45l12 2-4 12z" fill="#2B2A26" transform="rotate(120 66 51)"/>
  <path d="M60 105l12 2-4 12z" fill="#2B2A26" transform="rotate(240 66 111)"/>
  <text x="110" y="30" font-size="8" text-anchor="middle" fill="#2B2A26">хозяйство</text>
  <path d="M55 50c-6-10 2-18 10-14 2-8 14-10 18 0 8-2 12 6 6 12z" fill="#5F9A5C" stroke="#3F7A3D" stroke-width="1.2" transform="translate(0,10)"/>
  <text x="72" y="118" font-size="8" text-anchor="middle" fill="#2B2A26">переработка</text>
  <rect x="150" y="90" width="30" height="20" rx="3" fill="#E3922E" stroke="#2B2A26" stroke-width="1.2"/>
  <text x="165" y="122" font-size="8" text-anchor="middle" fill="#2B2A26">техника</text>
  </svg>`,
  bank:[
    {p:"Что объединяет агропромышленный комплекс?",opts:["Сельское хозяйство и связанные с ним отрасли","Только добычу угля"],correct:0}
  ]},

{ n:"Экологические проблемы России",
  explain:"К экологическим проблемам России относят загрязнение воздуха и воды промышленными предприятиями, вырубку лесов и последствия изменения климата.",
  svg:`<svg viewBox="0 0 220 140" width="220">
  <rect x="20" y="70" width="46" height="50" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <rect x="30" y="50" width="10" height="24" fill="#736C5E" stroke="#2B2A26" stroke-width="1.3"/>
  <rect x="48" y="42" width="10" height="32" fill="#736C5E" stroke="#2B2A26" stroke-width="1.3"/>
  <path d="M35 50c-4-8 2-14 6-10s2-10 8-8" stroke="#9973B8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
  <path d="M53 42c-4-8 2-14 6-10s2-10 8-8" stroke="#9973B8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
  <rect x="0" y="120" width="90" height="14" fill="#3E8F86" opacity="0.6"/>
  <path d="M6 127c4-4 8 2 12-2s8 2 12-2 8 2 12-2" stroke="#A83836" stroke-width="2" fill="none" opacity="0.7"/>
  <polygon points="130,120 122,80 148,80 140,120" fill="#736C5E" opacity="0.4"/>
  <line x1="118" y1="90" x2="142" y2="60" stroke="#2B2A26" stroke-width="2"/>
  <text x="130" y="132" font-size="7" text-anchor="middle" fill="#2B2A26">вырубка</text>
  </svg>`,
  bank:[
    {p:"Что из этого — экологическая проблема?",opts:["Загрязнение воздуха промышленностью","Хорошая погода летом"],correct:0}
  ]}

];
