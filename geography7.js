/* География материков и океанов, 7 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 6 класса: подробное изучение материков. */

const GEOGRAPHY7_MOD = [

{ n:"Африка",
  explain:"<b>Африка</b> — второй по величине материк, самый жаркий на Земле. Через него проходит экватор, а на севере находится крупнейшая пустыня мира — <b>Сахара</b>.",
  svg:`<svg viewBox="0 0 180 200" width="180">
  <path d="M80 10c30 4 40 24 34 40s10 20 6 36 14 18 8 40-24 20-20 44-16 26-30 24-20-24-30-30-14-30-6-46-4-32 4-46-4-38 34-62z" fill="#E3922E" stroke="#2B2A26" stroke-width="2"/>
  <line x1="30" y1="96" x2="150" y2="96" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="152" y="99" font-size="6" fill="#A83836">экватор</text>
  <ellipse cx="70" cy="50" rx="24" ry="14" fill="#FFDE59" opacity="0.8"/>
  <text x="70" y="53" font-size="8" text-anchor="middle" fill="#2B2A26">Сахара</text>
  </svg>`,
  bank:[
    {p:"Какой материк считается самым жарким на Земле?",opts:["Африка","Антарктида","Евразия"],correct:0},
    {p:"Как называется крупнейшая пустыня Африки?",opts:["Сахара","Гоби","Каракум"],correct:0},
    {p:"Проходит ли экватор через Африку?",opts:["Да","Нет"],correct:0},
    {p:"Самая длинная река Африки называется...",opts:["Нил","Волга","Амазонка"],correct:0}
  ]},

{ n:"Австралия",
  explain:"<b>Австралия</b> — самый маленький материк, единственный, целиком занятый одной страной. Там обитают уникальные животные, например кенгуру и коала, которых больше нигде нет в дикой природе.",
  svg:`<svg viewBox="0 0 220 150" width="220">
  <path d="M30 70c10-20 30-24 50-18s30-10 50-4 40 10 44 28-10 24-30 26-16 16-36 14-38-6-50-18-8-22-28-28z" fill="#D9679A" stroke="#2B2A26" stroke-width="2" opacity="0.85"/>
  <text x="110" y="140" font-size="11" text-anchor="middle" fill="#2B2A26">самый маленький материк</text>
  <text x="90" y="90" font-size="20">🦘</text>
  </svg>`,
  bank:[
    {p:"Какой материк самый маленький по площади?",opts:["Австралия","Африка","Евразия"],correct:0},
    {p:"Сколько государств расположено на материке Австралия?",opts:["Одно","Много"],correct:0},
    {p:"Какое животное — символ Австралии, обитающий только там в дикой природе?",opts:["Кенгуру","Слон","Панда"],correct:0}
  ]},

{ n:"Южная Америка",
  explain:"В Южной Америке находится самая полноводная река мира — <b>Амазонка</b> — и крупнейший тропический лес планеты, часто называемый «лёгкими Земли».",
  svg:`<svg viewBox="0 0 160 200" width="160">
  <path d="M80 8c22 6 34 22 30 36s8 18 4 32 10 16 4 32-2 24 8 34-6 30-18 40-24 6-30-6-4-24-14-34 2-28-6-40 6-22 0-36 8-30 22-58z" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <path d="M60 40c10 14 6 26 14 38s2 24 12 34 6 22 16 30" fill="none" stroke="#3B6EA5" stroke-width="3" stroke-linecap="round"/>
  <text x="80" y="190" font-size="10" text-anchor="middle" fill="#2B2A26">Амазонка</text>
  </svg>`,
  bank:[
    {p:"Как называется самая полноводная река мира?",opts:["Амазонка","Нил","Волга"],correct:0},
    {p:"На каком материке протекает Амазонка?",opts:["Южная Америка","Африка"],correct:0},
    {p:"Почему тропический лес Амазонки называют «лёгкими Земли»?",opts:["Он производит много кислорода","Он похож на лёгкие по форме"],correct:0}
  ]},

{ n:"Северная Америка",
  explain:"Северная Америка простирается от холодной Арктики на севере до тропиков на юге. Там находится знаменитый Гранд-Каньон и Великие озёра — крупнейшая группа пресных озёр в мире.",
  svg:`<svg viewBox="0 0 180 200" width="180">
  <path d="M90 8c26 4 40 20 34 34s12 14 6 30 12 18 4 34-4 26 10 36-10 32-26 40-30 2-32-16-16-20-20-38 4-30-4-44 6-24 0-40 6-28 28-36z" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <line x1="8" y1="12" x2="8" y2="4" stroke="none"/>
  <ellipse cx="90" cy="80" rx="4" ry="3" fill="#FFFEF8"/><ellipse cx="98" cy="82" rx="4" ry="3" fill="#FFFEF8"/><ellipse cx="94" cy="90" rx="4" ry="3" fill="#FFFEF8"/>
  <text x="120" y="86" font-size="8" fill="#FFFEF8">Великие озёра</text>
  <path d="M65 150c4-8 12-8 16-2s10 0 14-4" stroke="#E3922E" stroke-width="4" fill="none" stroke-linecap="round"/>
  <text x="70" y="172" font-size="8" fill="#2B2A26">Гранд-Каньон</text>
  </svg>`,
  bank:[
    {p:"От какой зоны на севере до какой на юге простирается Северная Америка?",opts:["От Арктики до тропиков","От пустыни до тундры"],correct:0},
    {p:"Как называется знаменитая система пресных озёр в Северной Америке?",opts:["Великие озёра","Балтийское море"],correct:0}
  ]},

{ n:"Антарктида",
  explain:"<b>Антарктида</b> — самый южный и самый холодный материк Земли, почти полностью покрытый толстым слоем льда. Постоянного населения там нет — только учёные на научных станциях.",
  svg:`<svg viewBox="0 0 200 150" width="200">
  <ellipse cx="100" cy="90" rx="90" ry="50" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M40 70c10-4 16 6 26 0s18-8 26 0 20 6 30 0 20-8 28 0" fill="none" stroke="#FFFEF8" stroke-width="4" stroke-linecap="round"/>
  <rect x="95" y="40" width="3" height="20" fill="#2B2A26"/>
  <polygon points="98,40 118,46 98,52" fill="#D6524F"/>
  <text x="100" y="130" font-size="10" text-anchor="middle" fill="#2B2A26">научная станция</text>
  </svg>`,
  bank:[
    {p:"Какой материк самый холодный на Земле?",opts:["Антарктида","Африка","Австралия"],correct:0},
    {p:"Чем почти полностью покрыта Антарктида?",opts:["Льдом","Песком","Лесами"],correct:0},
    {p:"Живёт ли на Антарктиде постоянное население?",opts:["Нет, только учёные на станциях","Да, там большие города"],correct:0}
  ]},

{ n:"Евразия",
  explain:"<b>Евразия</b> — самый большой материк, объединяющий части света Европу и Азию. На нём находится и самая высокая точка суши — гора <b>Эверест</b>.",
  svg:`<svg viewBox="0 0 260 150" width="260">
  <path d="M10 60c20-20 40-24 60-16s30-16 50-10 40 4 56 14 50 6 70 20-10 30-30 28-40 10-60 4-46 2-64-8-30 4-48-4-30-12-34-28z" fill="#9973B8" stroke="#2B2A26" stroke-width="2" opacity="0.85"/>
  <polygon points="150,44 158,26 166,44" fill="#FFFEF8" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="158" y="20" font-size="9" text-anchor="middle" fill="#2B2A26">Эверест</text>
  <text x="60" y="60" font-size="9" fill="#2B2A26">Европа</text>
  <text x="190" y="70" font-size="9" fill="#2B2A26">Азия</text>
  </svg>`,
  bank:[
    {p:"Какой материк самый большой на Земле?",opts:["Евразия","Африка","Австралия"],correct:0},
    {p:"Из каких двух частей света состоит Евразия?",opts:["Из Европы и Азии","Из Африки и Америки"],correct:0},
    {p:"Где находится самая высокая гора мира — Эверест?",opts:["В Евразии","В Африке"],correct:0}
  ]},

{ n:"Океанические течения",
  explain:"<b>Течения</b> — постоянные потоки воды в океане. Тёплые течения (например, Гольфстрим) несут тепло от экватора к полюсам и заметно влияют на климат побережий.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <rect x="6" y="6" width="228" height="128" rx="8" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M20 100c30-20 60-30 90-20s50 40 100 10" fill="none" stroke="#D6524F" stroke-width="4" stroke-linecap="round" marker-end="url(#arw)"/>
  <path d="M30 40c40 10 70-4 100 10s50 6 80-8" fill="none" stroke="#284D77" stroke-width="4" stroke-linecap="round" marker-end="url(#arb)"/>
  <defs>
  <marker id="arw" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#D6524F"/></marker>
  <marker id="arb" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#284D77"/></marker>
  </defs>
  <text x="60" y="118" font-size="9" fill="#A83836">тёплое течение</text>
  <text x="60" y="30" font-size="9" fill="#284D77">холодное течение</text>
  </svg>`,
  bank:[
    {p:"Что такое океанические течения?",opts:["Постоянные потоки воды в океане","Волны от ветра"],correct:0},
    {p:"Как называется известное тёплое течение в Атлантическом океане?",opts:["Гольфстрим","Нил"],correct:0},
    {p:"Как тёплые течения влияют на климат побережий?",opts:["Делают его теплее","Делают его холоднее"],correct:0}
  ]},

{ n:"Природные зоны мира",
  explain:"На Земле выделяют природные зоны: экваториальные леса, саванны, пустыни, степи, леса умеренного пояса, тайгу, тундру — они сменяют друг друга в зависимости от климата.",
  svg:`<svg viewBox="0 0 240 150" width="240">
  <rect x="10" y="10" width="220" height="16" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1"/>
  <text x="120" y="22" font-size="8" text-anchor="middle" fill="#2B2A26">тундра</text>
  <rect x="10" y="26" width="220" height="16" fill="#3E8F86" opacity="0.6" stroke="#2B2A26" stroke-width="1"/>
  <text x="120" y="38" font-size="8" text-anchor="middle" fill="#2B2A26">тайга</text>
  <rect x="10" y="42" width="220" height="16" fill="#5F9A5C" stroke="#2B2A26" stroke-width="1"/>
  <text x="120" y="54" font-size="8" text-anchor="middle" fill="#FFFEF8">леса умер. пояса</text>
  <rect x="10" y="58" width="220" height="16" fill="#E3922E" opacity="0.7" stroke="#2B2A26" stroke-width="1"/>
  <text x="120" y="70" font-size="8" text-anchor="middle" fill="#2B2A26">степь</text>
  <rect x="10" y="74" width="220" height="16" fill="#FFDE59" stroke="#2B2A26" stroke-width="1"/>
  <text x="120" y="86" font-size="8" text-anchor="middle" fill="#2B2A26">пустыня</text>
  <rect x="10" y="90" width="220" height="16" fill="#E3922E" stroke="#2B2A26" stroke-width="1"/>
  <text x="120" y="102" font-size="8" text-anchor="middle" fill="#2B2A26">саванна</text>
  <rect x="10" y="106" width="220" height="16" fill="#3F7A3D" stroke="#2B2A26" stroke-width="1"/>
  <text x="120" y="118" font-size="8" text-anchor="middle" fill="#FFFEF8">экватор. леса</text>
  <line x1="10" y1="114" x2="230" y2="114" stroke="#D6524F" stroke-width="1.5" stroke-dasharray="3 3"/>
  </svg>`,
  bank:[
    {p:"От чего зависит смена природных зон на Земле?",opts:["От климата","От цвета почвы"],correct:0},
    {p:"Как называется зона с высокими травами и редкими деревьями в жарком климате?",opts:["Саванна","Тайга"],correct:0},
    {p:"В какой зоне находится Сахара?",opts:["В зоне пустынь","В зоне тундры"],correct:0}
  ]},

{ n:"Литосферные плиты",
  explain:"Земная кора разделена на крупные <b>литосферные плиты</b>, которые медленно движутся. На границах плит часто происходят землетрясения и вулканическая активность.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <rect x="10" y="60" width="100" height="60" fill="#9973B8" opacity="0.5" stroke="#2B2A26" stroke-width="2"/>
  <rect x="130" y="60" width="100" height="60" fill="#3E8F86" opacity="0.5" stroke="#2B2A26" stroke-width="2"/>
  <line x1="110" y1="60" x2="130" y2="120" stroke="#2B2A26" stroke-width="2" stroke-dasharray="3 3"/>
  <path d="M85 55l15 10-15 10" fill="none" stroke="#2B2A26" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M155 55l-15 10 15 10" fill="none" stroke="#2B2A26" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="110,55 120,30 130,55" fill="#D6524F" stroke="#A83836" stroke-width="1.5"/>
  <text x="55" y="45" font-size="9" text-anchor="middle" fill="#2B2A26">плита А</text>
  <text x="185" y="45" font-size="9" text-anchor="middle" fill="#2B2A26">плита Б</text>
  </svg>`,
  bank:[
    {p:"На что разделена земная кора?",opts:["На литосферные плиты","На один сплошной кусок"],correct:0},
    {p:"Что часто происходит на границах литосферных плит?",opts:["Землетрясения и вулканы","Ничего особенного"],correct:0}
  ]},

{ n:"Климатические пояса",
  explain:"Земля делится на климатические пояса: экваториальный (жарко и влажно круглый год), тропический, умеренный (чёткая смена сезонов), полярный (очень холодно).",
  svg:`<svg viewBox="0 0 200 200" width="200">
  <circle cx="100" cy="100" r="88" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <path d="M12 100a88 88 0 0 1 176 0z" fill="#284D77" opacity="0.5"/>
  <path d="M18 63a88 88 0 0 1 22-32M182 63a88 88 0 0 1 -22-32" fill="none"/>
  <ellipse cx="100" cy="100" rx="88" ry="88" fill="none"/>
  <path d="M14 78a88 88 0 0 1 172 0" fill="none" stroke="#2B2A26" stroke-width="1"/>
  <rect x="12" y="94" width="176" height="12" fill="#D6524F" opacity="0.8"/>
  <rect x="16" y="76" width="168" height="18" fill="#E3922E" opacity="0.7"/>
  <rect x="16" y="106" width="168" height="18" fill="#E3922E" opacity="0.7"/>
  <rect x="24" y="50" width="152" height="26" fill="#5F9A5C" opacity="0.6"/>
  <rect x="24" y="124" width="152" height="26" fill="#5F9A5C" opacity="0.6"/>
  <text x="100" y="103" font-size="9" text-anchor="middle" fill="#FFFEF8">экватор.</text>
  <text x="100" y="150" font-size="9" text-anchor="middle" fill="#2B2A26">умеренный</text>
  <text x="100" y="30" font-size="9" text-anchor="middle" fill="#2B2A26">полярный</text>
  </svg>`,
  bank:[
    {p:"В каком поясе жарко и влажно круглый год?",opts:["Экваториальном","Полярном"],correct:0},
    {p:"В каком поясе чётко сменяются четыре сезона?",opts:["Умеренном","Экваториальном"],correct:0},
    {p:"Какой пояс самый холодный?",opts:["Полярный","Тропический"],correct:0}
  ]},

{ n:"Население материков",
  explain:"Население по-разному распределено на разных материках: Евразия и Африка населены очень плотно в некоторых регионах, а Антарктида вовсе не имеет постоянного населения.",
  svg:`<svg viewBox="0 0 240 140" width="240">
  <line x1="20" y1="120" x2="230" y2="120" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="20" width="26" height="100" fill="#9973B8"/>
  <text x="43" y="132" font-size="8" text-anchor="middle" fill="#2B2A26">Евразия</text>
  <rect x="70" y="55" width="26" height="65" fill="#E3922E"/>
  <text x="83" y="132" font-size="8" text-anchor="middle" fill="#2B2A26">Африка</text>
  <rect x="110" y="85" width="26" height="35" fill="#3B6EA5"/>
  <text x="123" y="132" font-size="7" text-anchor="middle" fill="#2B2A26">Сев.Ам.</text>
  <rect x="150" y="95" width="26" height="25" fill="#5F9A5C"/>
  <text x="163" y="132" font-size="7" text-anchor="middle" fill="#2B2A26">Юж.Ам.</text>
  <rect x="190" y="112" width="26" height="8" fill="#D9679A"/>
  <text x="203" y="132" font-size="7" text-anchor="middle" fill="#2B2A26">Австр.</text>
  </svg>`,
  bank:[
    {p:"На каком материке нет постоянного населения?",opts:["На Антарктиде","На Евразии"],correct:0},
    {p:"Равномерно ли распределено население по материкам?",opts:["Нет, очень неравномерно","Да, идеально равномерно"],correct:0}
  ]}

];
