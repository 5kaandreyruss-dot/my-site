/* География России, 8 класс. Формат: {n:название, explain:объяснение, bank:[{p,opts,correct}, ...]}
   Продолжение курса 7 класса: физическая география России — рельеф, климат, реки, часовые пояса. */

const GEOGRAPHY8_MOD = [

{ n:"Территория России",
  explain:"Россия — самая большая страна в мире по площади. Она расположена сразу в двух частях света: <b>Европе</b> и <b>Азии</b>, а её территория омывается тремя океанами.",
  svg:`<svg viewBox="0 0 260 140" width="260">
  <path d="M10 70c10-20 30-24 50-16s26-14 46-8 30 6 46-2 34 0 46 10 40 4 52 20-14 26-34 22-40 8-58 2-38 6-56-2-30 8-48 0-30-4-44-14-10-16 0-32z" fill="#5F9A5C" stroke="#2B2A26" stroke-width="2"/>
  <line x1="86" y1="40" x2="98" y2="96" stroke="#2B2A26" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="55" y="62" font-size="9" fill="#2B2A26">Европа</text>
  <text x="170" y="62" font-size="9" fill="#2B2A26">Азия</text>
  <text x="130" y="24" font-size="8" fill="#284D77">Сев. Ледовитый ок.</text>
  </svg>`,
  bank:[
    {p:"Россия — самая большая страна мира по какому показателю?",opts:["По площади","По населению"],correct:0},
    {p:"В скольких частях света расположена территория России?",opts:["В двух (Европе и Азии)","Только в Азии"],correct:0},
    {p:"Сколько океанов омывает территорию России?",opts:["Три","Один"],correct:0}
  ]},

{ n:"Рельеф России",
  explain:"На территории России есть равнины (Восточно-Европейская, Западно-Сибирская) и горы (Урал, Кавказ, Алтай). Урал считается границей между Европой и Азией.",
  svg:`<svg viewBox="0 0 260 140" width="260">
  <line x1="10" y1="118" x2="90" y2="118" stroke="#5F9A5C" stroke-width="6" stroke-linecap="round"/>
  <text x="50" y="135" font-size="9" text-anchor="middle" fill="#2B2A26">Вост.-Европ. равнина</text>
  <polygon points="95,118 108,70 121,118" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <polygon points="112,118 125,60 138,118" fill="#9973B8" stroke="#2B2A26" stroke-width="2"/>
  <text x="115" y="55" font-size="8" text-anchor="middle" fill="#2B2A26">Урал</text>
  <line x1="145" y1="118" x2="220" y2="118" stroke="#5F9A5C" stroke-width="6" stroke-linecap="round"/>
  <text x="182" y="135" font-size="9" text-anchor="middle" fill="#2B2A26">Зап.-Сибирская равнина</text>
  <polygon points="220,118 235,50 250,118" fill="#736C5E" stroke="#2B2A26" stroke-width="2"/>
  <text x="235" y="46" font-size="8" text-anchor="middle" fill="#2B2A26">Алтай</text>
  </svg>`,
  bank:[
    {p:"Какая горная система считается границей между Европой и Азией?",opts:["Урал","Кавказ"],correct:0},
    {p:"Что преобладает на большей части территории России — равнины или горы?",opts:["Равнины","Горы"],correct:0},
    {p:"Назови одну из крупных равнин России.",opts:["Восточно-Европейская","Амазонская"],correct:0}
  ]},

{ n:"Климат России",
  explain:"Из-за большой протяжённости территории в России очень разнообразный климат: от арктического на севере до субтропического на юге Черноморского побережья.",
  svg:`<svg viewBox="0 0 100 220" width="100">
  <rect x="10" y="10" width="60" height="40" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="40" y="34" font-size="8" text-anchor="middle" fill="#2B2A26">арктич.</text>
  <rect x="10" y="50" width="60" height="40" fill="#3E8F86" opacity="0.6" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="40" y="74" font-size="8" text-anchor="middle" fill="#2B2A26">субарктич.</text>
  <rect x="10" y="90" width="60" height="80" fill="#5F9A5C" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="40" y="132" font-size="8" text-anchor="middle" fill="#FFFEF8">умеренный</text>
  <rect x="10" y="170" width="60" height="30" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="40" y="188" font-size="8" text-anchor="middle" fill="#2B2A26">субтропич.</text>
  <text x="40" y="212" font-size="8" text-anchor="middle" fill="#736C5E">север → юг</text>
  </svg>`,
  bank:[
    {p:"Почему в России такой разнообразный климат?",opts:["Из-за большой протяжённости территории","Климат везде одинаковый"],correct:0},
    {p:"Какой климат на крайнем севере России?",opts:["Арктический, холодный","Тропический, жаркий"],correct:0}
  ]},

{ n:"Реки России",
  explain:"В России протекают одни из крупнейших рек мира: <b>Волга</b> (самая длинная река Европы), Обь, Енисей, Лена. Многие сибирские реки текут на север, в Северный Ледовитый океан.",
  svg:`<svg viewBox="0 0 240 150" width="240">
  <rect x="4" y="4" width="232" height="20" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="150" y="18" font-size="9" text-anchor="middle" fill="#284D77">Северный Ледовитый океан</text>
  <path d="M40 24c-4 40 8 70 4 106" fill="none" stroke="#3B6EA5" stroke-width="3" stroke-linecap="round"/>
  <text x="40" y="144" font-size="8" text-anchor="middle" fill="#2B2A26">Обь</text>
  <path d="M100 24c2 44-10 70-4 106" fill="none" stroke="#3B6EA5" stroke-width="3" stroke-linecap="round"/>
  <text x="100" y="144" font-size="8" text-anchor="middle" fill="#2B2A26">Енисей</text>
  <path d="M160 24c-2 46 6 68 0 106" fill="none" stroke="#3B6EA5" stroke-width="3" stroke-linecap="round"/>
  <text x="160" y="144" font-size="8" text-anchor="middle" fill="#2B2A26">Лена</text>
  <path d="M215 130c8-30 2-60 8-96" fill="none" stroke="#3E8F86" stroke-width="3" stroke-linecap="round"/>
  <text x="215" y="144" font-size="8" text-anchor="middle" fill="#2B2A26">Волга →юг</text>
  </svg>`,
  bank:[
    {p:"Как называется самая длинная река Европы, протекающая в России?",opts:["Волга","Нил"],correct:0},
    {p:"В какой океан впадает большинство крупных рек Сибири?",opts:["В Северный Ледовитый океан","В Тихий океан"],correct:0},
    {p:"Назови одну из крупных рек Сибири.",opts:["Енисей","Амазонка"],correct:0}
  ]},

{ n:"Озеро Байкал",
  explain:"<b>Байкал</b> — самое глубокое озеро в мире, расположенное в Сибири. В нём содержится огромный запас пресной воды планеты.",
  svg:`<svg viewBox="0 0 220 170" width="220">
  <path d="M60 10c-16 4-20 20-16 40s-8 30-2 50 2 30 14 46c10 12 24 6 26-10s-8-24-6-44 10-32 4-52-8-26-20-30z" fill="#3B6EA5" stroke="#2B2A26" stroke-width="2"/>
  <line x1="70" y1="20" x2="66" y2="140" stroke="#284D77" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="120" y1="150" x2="180" y2="150" stroke="#2B2A26" stroke-width="1"/>
  <line x1="120" y1="150" x2="120" y2="30" stroke="#2B2A26" stroke-width="1"/>
  <rect x="150" y="120" width="14" height="30" fill="#5F9A5C"/>
  <text x="157" y="160" font-size="7" text-anchor="middle" fill="#2B2A26">др. озеро</text>
  <rect x="122" y="35" width="14" height="115" fill="#3B6EA5"/>
  <text x="129" y="160" font-size="7" text-anchor="middle" fill="#2B2A26">Байкал 1642м</text>
  </svg>`,
  bank:[
    {p:"Чем знаменито озеро Байкал?",opts:["Это самое глубокое озеро в мире","Это самое солёное озеро в мире"],correct:0},
    {p:"В какой части России расположен Байкал?",opts:["В Сибири","На Кавказе"],correct:0},
    {p:"Какая вода в Байкале — солёная или пресная?",opts:["Пресная","Солёная"],correct:0}
  ]},

{ n:"Природные ресурсы России",
  explain:"Россия богата природными ресурсами: нефтью, газом, углём, лесами, металлическими рудами. Эти ресурсы важны для экономики страны.",
  svg:`<svg viewBox="0 0 240 110" width="240">
  <circle cx="30" cy="40" r="22" fill="#2B2A26" opacity="0.8"/>
  <text x="30" y="46" font-size="9" text-anchor="middle" fill="#FFFEF8">нефть</text>
  <rect x="75" y="20" width="40" height="40" rx="6" fill="#E3922E"/>
  <text x="95" y="45" font-size="9" text-anchor="middle" fill="#2B2A26">газ</text>
  <polygon points="150,60 140,25 170,25 180,60" fill="#736C5E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="160" y="52" font-size="8" text-anchor="middle" fill="#FFFEF8">уголь</text>
  <polygon points="205,20 215,45 205,60 195,45" fill="#9973B8"/>
  <text x="205" y="45" font-size="7" text-anchor="middle" fill="#2B2A26">руда</text>
  <text x="215" y="80" font-size="18">🌲</text>
  <text x="30" y="100" font-size="7" text-anchor="middle" fill="#736C5E">ресурсы России</text>
  </svg>`,
  bank:[
    {p:"Какими ресурсами богата Россия?",opts:["Нефтью, газом, углём, лесами","Только песком"],correct:0},
    {p:"Для чего важны природные ресурсы страны?",opts:["Для экономики","Только для украшения"],correct:0}
  ]},

{ n:"Часовые пояса России",
  explain:"Из-за огромной протяжённости с запада на восток территория России находится в <b>нескольких часовых поясах</b> — когда на западе страны утро, на Дальнем Востоке уже вечер.",
  svg:`<svg viewBox="0 0 260 110" width="260">
  <rect x="6" y="6" width="248" height="70" rx="8" fill="#5F9A5C" opacity="0.35" stroke="#2B2A26" stroke-width="2"/>
  <line x1="50" y1="6" x2="50" y2="76" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="94" y1="6" x2="94" y2="76" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="138" y1="6" x2="138" y2="76" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="182" y1="6" x2="182" y2="76" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <line x1="216" y1="6" x2="216" y2="76" stroke="#2B2A26" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="28" cy="41" r="14" fill="#FFDE59" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="28" y="44" font-size="8" text-anchor="middle" fill="#2B2A26">7:00</text>
  <circle cx="140" cy="41" r="14" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="140" y="44" font-size="8" text-anchor="middle" fill="#2B2A26">12:00</text>
  <circle cx="235" cy="41" r="14" fill="#284D77" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="235" y="44" font-size="8" text-anchor="middle" fill="#FFFEF8">19:00</text>
  <text x="28" y="94" font-size="9" text-anchor="middle" fill="#2B2A26">Запад</text>
  <text x="235" y="94" font-size="6" text-anchor="middle" fill="#2B2A26">Дальний Восток</text>
  </svg>`,
  bank:[
    {p:"Находится ли Россия в нескольких часовых поясах?",opts:["Да, в нескольких","Нет, только в одном"],correct:0},
    {p:"Почему в России несколько часовых поясов?",opts:["Из-за большой протяжённости с запада на восток","Из-за холодного климата"],correct:0}
  ]},

{ n:"Природные зоны России",
  explain:"С севера на юг в России сменяются природные зоны: арктические пустыни, тундра, тайга, смешанные леса, степи и полупустыни — каждая со своим климатом и обитателями.",
  svg:`<svg viewBox="0 0 100 220" width="100">
  <rect x="10" y="8" width="60" height="24" fill="#DCE9F6" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="40" y="24" font-size="7" text-anchor="middle" fill="#2B2A26">арктич. пустыня</text>
  <rect x="10" y="32" width="60" height="30" fill="#9973B8" opacity="0.5" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="40" y="50" font-size="8" text-anchor="middle" fill="#2B2A26">тундра</text>
  <rect x="10" y="62" width="60" height="60" fill="#3E8F86" opacity="0.6" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="40" y="94" font-size="8" text-anchor="middle" fill="#2B2A26">тайга</text>
  <rect x="10" y="122" width="60" height="34" fill="#5F9A5C" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="40" y="141" font-size="7" text-anchor="middle" fill="#FFFEF8">смеш. леса</text>
  <rect x="10" y="156" width="60" height="34" fill="#E3922E" opacity="0.7" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="40" y="175" font-size="8" text-anchor="middle" fill="#2B2A26">степь</text>
  <rect x="10" y="190" width="60" height="24" fill="#FFDE59" stroke="#2B2A26" stroke-width="1.3"/>
  <text x="40" y="205" font-size="7" text-anchor="middle" fill="#2B2A26">полупустыня</text>
  </svg>`,
  bank:[
    {p:"В каком направлении обычно сменяются природные зоны в России?",opts:["С севера на юг","С востока на запад"],correct:0},
    {p:"Какая зона занимает наибольшую площадь в России?",opts:["Тайга","Пустыня"],correct:0}
  ]},

{ n:"Моря России",
  explain:"Территорию России омывают моря трёх океанов: Балтийское и Чёрное (Атлантический), Баренцево и Карское (Северный Ледовитый), Берингово и Японское (Тихий).",
  svg:`<svg viewBox="0 0 240 160" width="240">
  <ellipse cx="120" cy="90" rx="90" ry="55" fill="#5F9A5C" opacity="0.4" stroke="#2B2A26" stroke-width="2"/>
  <rect x="30" y="10" width="180" height="26" rx="6" fill="#284D77" opacity="0.7" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="120" y="28" font-size="9" text-anchor="middle" fill="#FFFEF8">Баренцево, Карское (Сев. Ледовитый)</text>
  <rect x="4" y="120" width="90" height="26" rx="6" fill="#3B6EA5" opacity="0.7" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="49" y="138" font-size="7" text-anchor="middle" fill="#FFFEF8">Балт., Чёрное (Атлант.)</text>
  <rect x="146" y="120" width="90" height="26" rx="6" fill="#3E8F86" opacity="0.8" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="191" y="138" font-size="7" text-anchor="middle" fill="#FFFEF8">Беринг., Японск. (Тихий)</text>
  </svg>`,
  bank:[
    {p:"К бассейну какого океана относится Балтийское море?",opts:["Атлантического","Тихого"],correct:0},
    {p:"К бассейну какого океана относится Берингово море?",opts:["Тихого","Атлантического"],correct:0},
    {p:"Сколько океанов имеют моря, омывающие Россию?",opts:["Три","Один"],correct:0}
  ]},

{ n:"Вечная мерзлота",
  explain:"На значительной части севера России распространена <b>вечная мерзлота</b> — грунт, который не оттаивает даже летом, что осложняет строительство и сельское хозяйство.",
  svg:`<svg viewBox="0 0 200 150" width="200">
  <rect x="10" y="10" width="180" height="24" fill="#5F9A5C" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="100" y="27" font-size="9" text-anchor="middle" fill="#FFFEF8">поверхность летом</text>
  <rect x="10" y="34" width="180" height="70" fill="#DCE9F6" stroke="#2B2A26" stroke-width="2"/>
  <text x="100" y="72" font-size="10" text-anchor="middle" fill="#284D77" font-weight="700">вечная мерзлота</text>
  <path d="M20 44l10 10-10 10M50 44l10 10-10 10M170 44l-10 10 10 10" stroke="#3B6EA5" stroke-width="1.3" fill="none" opacity="0.6"/>
  <rect x="80" y="108" width="10" height="30" fill="#D6524F" stroke="#2B2A26" stroke-width="1.2"/>
  <circle cx="85" cy="106" r="6" fill="#D6524F" stroke="#2B2A26" stroke-width="1.2"/>
  <text x="130" y="130" font-size="9" fill="#2B2A26">не тает</text>
  </svg>`,
  bank:[
    {p:"Что такое вечная мерзлота?",opts:["Грунт, не оттаивающий даже летом","Просто снежный покров зимой"],correct:0},
    {p:"На какой части России распространена вечная мерзлота?",opts:["На значительной части севера","На юге страны"],correct:0}
  ]},

{ n:"Население России: города и сёла",
  explain:"Население России распределено по городам (большая часть) и сёлам. Крупнейшие города — Москва и Санкт-Петербург, важные экономические и культурные центры страны.",
  svg:`<svg viewBox="0 0 200 140" width="200">
  <circle cx="70" cy="70" r="62" fill="none" stroke="#2B2A26" stroke-width="2"/>
  <path d="M70 8a62 62 0 0 1 0 124z" fill="#3B6EA5"/>
  <path d="M70 8a62 62 0 0 0 0 124z" fill="#5F9A5C"/>
  <text x="95" y="70" font-size="9" text-anchor="middle" fill="#FFFEF8">города</text>
  <text x="45" y="70" font-size="9" text-anchor="middle" fill="#FFFEF8">сёла</text>
  <circle cx="160" cy="45" r="8" fill="#D6524F" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="160" y="30" font-size="8" text-anchor="middle" fill="#2B2A26">Москва</text>
  <circle cx="160" cy="90" r="6" fill="#E3922E" stroke="#2B2A26" stroke-width="1.5"/>
  <text x="160" y="112" font-size="7" text-anchor="middle" fill="#2B2A26">СПб</text>
  </svg>`,
  bank:[
    {p:"Где живёт большая часть населения России — в городах или сёлах?",opts:["В городах","В сёлах"],correct:0},
    {p:"Какой город России самый крупный по населению?",opts:["Москва","Новосибирск"],correct:0}
  ]}

];
