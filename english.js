/* Английский язык, 2 класс (начальный уровень). Формат такой же, как у русского модуля. */

const ENG_MOD = [

{ n:"Alphabet — буквы",
  explain:"Английский алфавит начинается с A, B, C... Найди правильную маленькую букву для большой.",
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
  bank:[
    {p:"1",opts:["One","Two","Six"],correct:0},{p:"2",opts:["Ten","Two","Five"],correct:1},
    {p:"3",opts:["Three","Eight","Four"],correct:0},{p:"4",opts:["Four","Nine","One"],correct:0},
    {p:"5",opts:["Seven","Five","Two"],correct:1},{p:"6",opts:["Six","Three","Ten"],correct:0},
    {p:"7",opts:["Nine","Seven","One"],correct:1},{p:"8",opts:["Eight","Six","Four"],correct:0},
    {p:"9",opts:["Five","Nine","Two"],correct:1},{p:"10",opts:["Ten","Seven","Three"],correct:0}
  ]},

{ n:"Animals — животные",
  explain:"Как называются животные по-английски?",
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
  bank:[
    {p:"хлеб",opts:["Bread","Butter","Milk"],correct:0},
    {p:"молоко",opts:["Water","Milk","Juice"],correct:1},
    {p:"яблоко",opts:["Apple","Orange","Banana"],correct:0},
    {p:"сыр",opts:["Cheese","Chicken","Cake"],correct:0},
    {p:"суп",opts:["Soup","Soap","Salad"],correct:0},
    {p:"вода",opts:["Water","Water","Wine"],correct:0},
    {p:"яйцо",opts:["Egg","Ear","Eye"],correct:0},
    {p:"рыба",opts:["Fish","Fresh","Fork"],correct:0},
    {p:"мясо",opts:["Meat","Meal","Milk"],correct:0}
  ]},

{ n:"In, on, under — предлоги места",
  explain:"In — внутри (в), on — на поверхности (на), under — снизу (под).",
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
  bank:[
    {p:"зима",opts:["Winter","Summer","Spring"],correct:0},
    {p:"весна",opts:["Spring","Autumn","Winter"],correct:0},
    {p:"лето",opts:["Summer","Winter","Fall"],correct:0},
    {p:"осень",opts:["Autumn","Spring","Summer"],correct:0},
    {p:"снег",opts:["Snow","Sun","Rain"],correct:0},
    {p:"солнце",opts:["Sun","Snow","Cloud"],correct:0},
    {p:"дождь",opts:["Rain","Snow","Wind"],correct:0},
    {p:"Какое время года идёт после winter?",opts:["Spring","Summer","Autumn"],correct:0}
  ]}

];
