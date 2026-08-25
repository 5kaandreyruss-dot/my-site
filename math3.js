/* Математика, 3 класс. Уроки (LESSONS_G3) в формате движка "Учимся до 100/1000" и задачи (TASKS3). */

const LESSONS_G3 = [
 {n:"Числа до 1000",f:G3L1},
 {n:"Таблица умножения (повтор)",f:G3L2},
 {n:"Деление с остатком",f:G3L3},
 {n:"Умножение и деление на 10 и 100",f:G3L4},
 {n:"Единицы длины",f:G3L5},
 {n:"Единицы массы и вместимости",f:G3L6},
 {n:"Площадь прямоугольника",f:G3L7},
 {n:"Доли (простые дроби)",f:G3L8},
 {n:"Порядок действий со скобками",f:G3L9},
 {n:"Сложение и вычитание трёхзначных чисел",f:G3L10},
 {n:"Задачи в 2-3 действия",f:G3L11},
];

/* Урок 1 — числа до 1000 */
let g3n1=0;
function G3L1(){
  g3n1=R(100,999);
  lcard.innerHTML=`<h2 class="ltitle">1. Числа до 1000</h2>
  <div class="lexp">Трёхзначное число состоит из сотен, десятков и единиц. Например, 347 — это 3 сотни, 4 десятка и 7 единиц.</div>
  <div class="eq">${g3n1} = ? сот. ? дес. ? ед.</div>
  <div class="split">
    <input type="number" class="mini" id="g3l1h" placeholder="сот"> сот.
    <input type="number" class="mini" id="g3l1t" placeholder="дес"> дес.
    <input type="number" class="mini" id="g3l1o" placeholder="ед"> ед.
  </div>
  <div class="lctr"><button class="btn b" onclick="g3l1c()">Проверить</button>
  <button class="btn ghost" onclick="G3L1()">Другое число</button></div>
  <div class="fb" id="g3l1f"></div>${nav()}`;
}
function g3l1c(){
  const h=Math.floor(g3n1/100), t=Math.floor((g3n1%100)/10), o=g3n1%10;
  const vh=parseInt(g3l1h.value,10), vt=parseInt(g3l1t.value,10), vo=parseInt(g3l1o.value,10);
  (vh===h&&vt===t&&vo===o)
    ? lessonOk(`Верно! ${g3n1} = ${h} сот. ${t} дес. ${o} ед. 🎉`,"g3l1f")
    : lessonNo(`${g3n1} = ${h} сот. ${t} дес. ${o} ед.`,"g3l1f");
}

/* Урок 2 — таблица умножения полностью */
let g3a2=0,g3b2=0;
function G3L2(){
  g3a2=R(2,9); g3b2=R(2,9);
  lcard.innerHTML=`<h2 class="ltitle">2. Таблица умножения</h2>
  <div class="lexp">В 3 классе важно знать всю таблицу умножения наизусть — от ×2 до ×9.</div>
  <div class="eq">${g3a2} × ${g3b2} = ?</div>
  <div class="row"><input type="number" id="g3l2i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l2c()">Проверить</button>
  <button class="btn ghost" onclick="G3L2()">Другой пример</button></div>
  <div class="fb" id="g3l2f"></div>${nav()}`;
}
function g3l2c(){
  parseInt(g3l2i.value,10)===g3a2*g3b2
    ? lessonOk(g3a2+" × "+g3b2+" = "+(g3a2*g3b2)+" 🎉","g3l2f")
    : lessonNo("Ответ: "+(g3a2*g3b2),"g3l2f");
}

/* Урок 3 — деление с остатком */
let g3a3=0,g3b3=0;
function G3L3(){
  g3b3=R(2,9);
  const full=R(1,9);
  const rem=R(1,g3b3-1);
  g3a3=full*g3b3+rem;
  lcard.innerHTML=`<h2 class="ltitle">3. Деление с остатком</h2>
  <div class="lexp">Не всегда одно число делится на другое без остатка. Например, 17 ÷ 5 = 3 (остаток 2), потому что 3 × 5 = 15, а 17 − 15 = 2.</div>
  <div class="eq">${g3a3} ÷ ${g3b3} = ? (остаток ?)</div>
  <div class="split">
    <input type="number" class="mini" id="g3l3q" placeholder="частное">
    <input type="number" class="mini" id="g3l3r" placeholder="остаток">
  </div>
  <div class="lctr"><button class="btn b" onclick="g3l3c()">Проверить</button>
  <button class="btn ghost" onclick="G3L3()">Другой пример</button></div>
  <div class="fb" id="g3l3f"></div>${nav()}`;
}
function g3l3c(){
  const q=Math.floor(g3a3/g3b3), r=g3a3%g3b3;
  const vq=parseInt(g3l3q.value,10), vr=parseInt(g3l3r.value,10);
  (vq===q&&vr===r)
    ? lessonOk(`Верно! ${g3a3} ÷ ${g3b3} = ${q} (остаток ${r}) 🎉`,"g3l3f")
    : lessonNo(`${g3a3} ÷ ${g3b3} = ${q} (остаток ${r})`,"g3l3f");
}

/* Урок 4 — умножение и деление на 10 и 100 */
let g3ans4=0;
function G3L4(){
  const dir=R(0,1), base=[10,100][R(0,1)];
  let qtext;
  if(dir===0){ const n=R(2,90); qtext=n+" × "+base+" = ?"; g3ans4=n*base; }
  else { const n=R(2,90)*base; qtext=n+" ÷ "+base+" = ?"; g3ans4=n/base; }
  lcard.innerHTML=`<h2 class="ltitle">4. Умножение и деление на 10 и 100</h2>
  <div class="lexp">Чтобы умножить на 10, допиши один ноль. Чтобы умножить на 100 — два нуля. Деление — убираем нужное число нулей.</div>
  <div class="eq">${qtext}</div>
  <div class="row"><input type="number" id="g3l4i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l4c()">Проверить</button>
  <button class="btn ghost" onclick="G3L4()">Другой пример</button></div>
  <div class="fb" id="g3l4f"></div>${nav()}`;
}
function g3l4c(){
  parseInt(g3l4i.value,10)===g3ans4
    ? lessonOk("Верно! 🎉","g3l4f")
    : lessonNo("Ответ: "+g3ans4,"g3l4f");
}

/* Урок 5 — единицы длины */
let g3ans5=0;
function G3L5(){
  const units=[["км","м",1000],["м","дм",10],["дм","см",10],["см","мм",10],["м","см",100]];
  const u=units[R(0,units.length-1)];
  const n=R(1,9);
  const dir=R(0,1);
  let qtext;
  if(dir===0){ qtext=n+" "+u[0]+" = ? "+u[1]; g3ans5=n*u[2]; }
  else { const big=n*u[2]; qtext=big+" "+u[1]+" = ? "+u[0]; g3ans5=n; }
  lcard.innerHTML=`<h2 class="ltitle">5. Единицы длины</h2>
  <div class="lexp">Длину измеряют в километрах, метрах, дециметрах, сантиметрах и миллиметрах. Каждая следующая единица в 10 раз (а километр — в 1000 раз) меньше предыдущей.</div>
  <div class="eq">${qtext}</div>
  <div class="row"><input type="number" id="g3l5i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l5c()">Проверить</button>
  <button class="btn ghost" onclick="G3L5()">Другой пример</button></div>
  <div class="fb" id="g3l5f"></div>${nav()}`;
}
function g3l5c(){
  parseInt(g3l5i.value,10)===g3ans5
    ? lessonOk("Верно! 🎉","g3l5f")
    : lessonNo("Ответ: "+g3ans5,"g3l5f");
}

/* Урок 6 — единицы массы и вместимости */
let g3ans6=0;
function G3L6(){
  const dir=R(0,1);
  let qtext;
  if(dir===0){ const n=R(1,9); qtext=n+" кг = ? г"; g3ans6=n*1000; }
  else { const n=R(1,9); qtext=n+" л = ? мл"; g3ans6=n*1000; }
  lcard.innerHTML=`<h2 class="ltitle">6. Единицы массы и вместимости</h2>
  <div class="lexp">Массу измеряют в килограммах и граммах (1 кг = 1000 г). Вместимость (объём жидкости) измеряют в литрах и миллилитрах (1 л = 1000 мл).</div>
  <div class="eq">${qtext}</div>
  <div class="row"><input type="number" id="g3l6i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l6c()">Проверить</button>
  <button class="btn ghost" onclick="G3L6()">Другой пример</button></div>
  <div class="fb" id="g3l6f"></div>${nav()}`;
}
function g3l6c(){
  parseInt(g3l6i.value,10)===g3ans6
    ? lessonOk("Верно! 🎉","g3l6f")
    : lessonNo("Ответ: "+g3ans6,"g3l6f");
}

/* Урок 7 — площадь прямоугольника */
let g3a7=0,g3b7=0;
function G3L7(){
  g3a7=R(2,9); g3b7=R(2,9);
  lcard.innerHTML=`<h2 class="ltitle">7. Площадь прямоугольника</h2>
  <div class="lexp">Площадь прямоугольника = длина × ширина. Измеряется в квадратных единицах, например см².</div>
  <div style="display:flex;justify-content:center;margin:14px 0">
    <svg width="200" height="130" viewBox="0 0 200 130">
      <rect x="30" y="20" width="140" height="80" fill="none" stroke="var(--blue-d)" stroke-width="4"/>
      <text x="100" y="14" text-anchor="middle" font-size="16" fill="var(--ink)">${g3a7} см</text>
      <text x="14" y="64" text-anchor="middle" font-size="16" fill="var(--ink)">${g3b7}</text>
    </svg>
  </div>
  <div class="eq">Площадь = ? см²</div>
  <div class="row"><input type="number" id="g3l7i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l7c()">Проверить</button>
  <button class="btn ghost" onclick="G3L7()">Другой прямоугольник</button></div>
  <div class="fb" id="g3l7f"></div>${nav()}`;
}
function g3l7c(){
  const correct=g3a7*g3b7;
  parseInt(g3l7i.value,10)===correct
    ? lessonOk("Верно! Площадь = "+correct+" см² 🎉","g3l7f")
    : lessonNo("Площадь = "+g3a7+" × "+g3b7+" = "+correct+" см²","g3l7f");
}

/* Урок 8 — доли */
let g3n8=0,g3parts8=0;
function G3L8(){
  g3parts8=[2,3,4][R(0,2)];
  g3n8=g3parts8*R(2,6);
  lcard.innerHTML=`<h2 class="ltitle">8. Доли (простые дроби)</h2>
  <div class="lexp">Доля — это равная часть целого. Половина — это 1/2, треть — 1/3, четверть — 1/4. Чтобы найти долю числа, дели число на знаменатель.</div>
  <div class="eq">1/${g3parts8} от ${g3n8} = ?</div>
  <div class="row"><input type="number" id="g3l8i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l8c()">Проверить</button>
  <button class="btn ghost" onclick="G3L8()">Другой пример</button></div>
  <div class="fb" id="g3l8f"></div>${nav()}`;
}
function g3l8c(){
  const ans=g3n8/g3parts8;
  parseInt(g3l8i.value,10)===ans
    ? lessonOk("Верно! 1/"+g3parts8+" от "+g3n8+" = "+ans+" 🎉","g3l8f")
    : lessonNo("Ответ: "+ans+" (потому что "+g3n8+" ÷ "+g3parts8+" = "+ans+")","g3l8f");
}

/* Урок 9 — порядок действий со скобками */
let g3ans9=0;
function G3L9(){
  const a=R(2,9),b=R(2,9),c=R(1,9);
  const type=R(0,1);
  let text;
  if(type===0){ text="("+a+" + "+b+") × "+c; g3ans9=(a+b)*c; }
  else { text=a+" × ("+b+" + "+c+")"; g3ans9=a*(b+c); }
  lcard.innerHTML=`<h2 class="ltitle">9. Порядок действий со скобками</h2>
  <div class="lexp">Если в примере есть скобки — сначала всегда выполняем действие в скобках, а потом уже остальное.</div>
  <div class="eq">${text} = ?</div>
  <div class="row"><input type="number" id="g3l9i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l9c()">Проверить</button>
  <button class="btn ghost" onclick="G3L9()">Другой пример</button></div>
  <div class="fb" id="g3l9f"></div>${nav()}`;
}
function g3l9c(){
  parseInt(g3l9i.value,10)===g3ans9
    ? lessonOk("Верно! Ответ: "+g3ans9+" 🎉","g3l9f")
    : lessonNo("Сначала скобки, потом остальное. Ответ: "+g3ans9,"g3l9f");
}

/* Урок 10 — сложение и вычитание трёхзначных чисел */
let g3a10=0,g3b10=0,g3isPlus10=true;
function G3L10(){
  g3isPlus10=R(0,1)===0;
  if(g3isPlus10){ g3a10=R(100,500); g3b10=R(100,999-g3a10); }
  else { g3a10=R(200,999); g3b10=R(100,g3a10-1); }
  lcard.innerHTML=`<h2 class="ltitle">10. Сложение и вычитание трёхзначных чисел</h2>
  <div class="lexp">Складывай и вычитай по разрядам: сначала единицы, потом десятки, потом сотни — как с двузначными числами, только на один разряд больше.</div>
  <div class="eq">${g3a10} ${g3isPlus10?"+":"−"} ${g3b10} = ?</div>
  <div class="row"><input type="number" id="g3l10i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l10c()">Проверить</button>
  <button class="btn ghost" onclick="G3L10()">Другой пример</button></div>
  <div class="fb" id="g3l10f"></div>${nav()}`;
}
function g3l10c(){
  const correct = g3isPlus10 ? g3a10+g3b10 : g3a10-g3b10;
  parseInt(g3l10i.value,10)===correct
    ? lessonOk("Верно! Ответ: "+correct+" 🎉","g3l10f")
    : lessonNo("Ответ: "+correct,"g3l10f");
}

/* Урок 11 — задачи в 2-3 действия */
let g3task11=null;
function G3L11(){
  const names=["Настя","Миша","Катя","Егор","Вера"];
  const n=names[R(0,names.length-1)];
  const a=R(2,9),b=R(2,9),c=R(1,10);
  const ans=a*b+c;
  g3task11={ans};
  lcard.innerHTML=`<h2 class="ltitle">11. Задачи в 2-3 действия</h2>
  <div class="lexp">В таких задачах нужно выполнить сразу два действия: сначала найти промежуточный результат, потом использовать его дальше.</div>
  <div style="font-size:1.05rem;line-height:1.6;text-align:center;margin:14px 0">
    У ${n} есть ${a} пакета, в каждом по ${b} конфет. Ещё ${n} нашёл(-а) ${c} конфету отдельно. Сколько всего конфет у ${n}?
  </div>
  <div class="row"><input type="number" id="g3l11i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g3l11c()">Проверить</button>
  <button class="btn ghost" onclick="G3L11()">Другая задача</button></div>
  <div class="fb" id="g3l11f"></div>${nav()}`;
}
function g3l11c(){
  parseInt(g3l11i.value,10)===g3task11.ans
    ? lessonOk("Верно! Ответ: "+g3task11.ans+" 🎉","g3l11f")
    : lessonNo("Сначала умножь пакеты на конфеты, потом прибавь отдельную. Ответ: "+g3task11.ans,"g3l11f");
}

/* ================= ЗАДАЧИ 3 КЛАССА ================= */
const TASKS3=[
 ()=>{const a=R(2,9),b=R(2,9),n=["Настя","Миша","Катя","Егор"][R(0,3)];
   return{q:`${n} купил(а) ${a} пакета по ${b} яблок в каждом. Сколько всего яблок?`,a:a*b,h:"Одинаковые группы — умножаем."};},
 ()=>{const b=R(2,9),per=R(2,9),k=b*per;
   return{q:`${k} тетрадей разложили поровну в ${b} стопки. Сколько тетрадей в каждой стопке?`,a:per,h:"Раскладываем поровну — делим."};},
 ()=>{const a=R(100,500),b=R(100,900-a);
   return{q:`На складе было ${a} кг муки, привезли ещё ${b} кг. Сколько кг муки стало?`,a:a+b,h:"Стало больше — складываем."};},
 ()=>{const a=R(300,900),b=R(100,a-50);
   return{q:`В библиотеке было ${a} книг, ${b} книг забрали на ремонт. Сколько книг осталось?`,a:a-b,h:"Забрали — вычитаем."};},
 ()=>{const a=R(2,9),b=R(2,9),c=R(1,10);
   return{q:`${a} коробки по ${b} карандашей плюс ещё ${c} карандаш отдельно. Сколько карандашей всего?`,a:a*b+c,h:"Сначала умножь, потом прибавь остаток."};},
 ()=>{const side=R(2,9);
   return{q:`Квадратная грядка со стороной ${side} м. Чему равна её площадь?`,a:side*side,h:"Площадь квадрата = сторона × сторона."};},
 ()=>{const a=R(2,9),b=R(2,9);
   return{q:`Прямоугольная комната ${a} м на ${b} м. Чему равна её площадь?`,a:a*b,h:"Площадь прямоугольника = длина × ширина."};},
 ()=>{const parts=[2,3,4][R(0,2)],n=parts*R(2,6);
   return{q:`В корзине ${n} яблок. Взяли 1/${parts} часть. Сколько яблок взяли?`,a:n/parts,h:"Чтобы найти долю, дели число на знаменатель."};},
 ()=>{const a=R(100,300),b=R(100,300),c=R(100,300);
   return{q:`На складе было ${a} кг сахара, привезли ещё ${b} кг, потом ещё ${c} кг. Сколько кг сахара стало?`,a:a+b+c,h:"Сложи все три числа по порядку."};},
 ()=>{const pk=R(3,9),per=R(3,9),bad=R(1,pk*per-1);
   return{q:`Купили ${pk} упаковок по ${per} жвачек. ${bad} жвачек оказались бракованными и их выбросили. Сколько жвачек осталось?`,a:pk*per-bad,h:"Сначала умножь упаковки на количество, потом вычти бракованные."};},
 ()=>{const side=R(2,9);
   return{q:`Периметр квадрата со стороной ${side} м. Чему равен периметр?`,a:4*side,h:"Периметр квадрата = сторона × 4."};},
 ()=>{const a=R(100,900),b=R(50,a-10);
   return{q:`У Артёма ${a} рублей, у Гриши ${b} рублей. На сколько рублей у Артёма больше?`,a:a-b,h:"«На сколько больше» — вычитаем меньшее из большего."};},
];
