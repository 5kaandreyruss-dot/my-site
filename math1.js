/* Математика, 1 класс. Уроки (LESSONS_G1) в формате движка "Учимся до 100" и задачи (TASKS1). */

const LESSONS_G1 = [
 {n:"Числа от 0 до 10",f:G1L1},
 {n:"Сравниваем числа",f:G1L2},
 {n:"Состав числа",f:G1L3},
 {n:"Сложение в пределах 10",f:G1L4},
 {n:"Вычитание в пределах 10",f:G1L5},
 {n:"Числа от 11 до 20",f:G1L6},
 {n:"Геометрические фигуры",f:G1L7},
 {n:"Больше, меньше, длиннее, короче",f:G1L8},
 {n:"Соседи числа",f:G1L9},
 {n:"Простые задачи",f:G1L10},
];

/* Урок 1 — числа от 0 до 10 (счёт предметов) */
let g1n1=0;
function G1L1(){
  g1n1=R(1,10);
  lcard.innerHTML=`<h2 class="ltitle">1. Числа от 0 до 10</h2>
  <div class="lexp">Посчитай кружочки и напиши, сколько их всего.</div>
  <div class="blocks" id="g1l1b" style="min-height:70px"></div>
  <div class="row"><input type="number" id="g1l1i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g1l1c()">Проверить</button>
  <button class="btn ghost" onclick="G1L1()">Другое число</button></div>
  <div class="fb" id="g1l1f"></div>${nav()}`;
  const c=document.getElementById("g1l1b");c.innerHTML="";
  const grp=document.createElement("div");grp.className="bgrp";
  for(let i=0;i<g1n1;i++) grp.appendChild(oneEl());
  c.appendChild(grp);
}
function g1l1c(){
  parseInt(g1l1i.value,10)===g1n1
    ? lessonOk("Верно! Здесь "+g1n1+" 🎉","g1l1f")
    : lessonNo("Здесь "+g1n1+" кружочков — посчитай ещё раз","g1l1f");
}

/* Урок 2 — сравниваем числа */
let g1a2=0,g1b2=0;
function G1L2(){
  g1a2=R(1,10); do{g1b2=R(1,10);}while(g1b2===g1a2);
  lcard.innerHTML=`<h2 class="ltitle">2. Сравниваем числа</h2>
  <div class="lexp">Какое число больше, а какое меньше? Сравни их.</div>
  <div class="eq">${g1a2} ? ${g1b2}</div>
  <div class="lctr">
    <button class="btn b" onclick="g1l2c('>')">${g1a2} больше</button>
    <button class="btn b" onclick="g1l2c('<')">${g1b2} больше</button>
  </div>
  <div class="fb" id="g1l2f"></div>
  <div class="lctr"><button class="btn ghost" onclick="G1L2()">Другая пара</button></div>${nav()}`;
}
function g1l2c(sign){
  const correct = g1a2>g1b2 ? ">" : "<";
  sign===correct
    ? lessonOk("Верно! "+Math.max(g1a2,g1b2)+" больше, чем "+Math.min(g1a2,g1b2)+" 🎉","g1l2f")
    : lessonNo("Больше "+Math.max(g1a2,g1b2)+", ведь "+Math.max(g1a2,g1b2)+" > "+Math.min(g1a2,g1b2),"g1l2f");
}

/* Урок 3 — состав числа */
let g1n3=0,g1a3=0;
function G1L3(){
  g1n3=R(3,10); g1a3=R(1,g1n3-1);
  lcard.innerHTML=`<h2 class="ltitle">3. Состав числа</h2>
  <div class="lexp">Любое число можно разложить на два слагаемых. Например, 5 = 2 + 3.</div>
  <div class="eq">${g1n3} = ${g1a3} + ?</div>
  <div class="row"><input type="number" id="g1l3i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g1l3c()">Проверить</button>
  <button class="btn ghost" onclick="G1L3()">Другое число</button></div>
  <div class="fb" id="g1l3f"></div>${nav()}`;
}
function g1l3c(){
  const ans=g1n3-g1a3;
  parseInt(g1l3i.value,10)===ans
    ? lessonOk(g1n3+" = "+g1a3+" + "+ans+" 🎉","g1l3f")
    : lessonNo("Ответ: "+ans+" (потому что "+g1a3+" + "+ans+" = "+g1n3+")","g1l3f");
}

/* Урок 4 — сложение в пределах 10 */
let g1a4=0,g1b4=0;
function G1L4(){
  g1a4=R(1,9); g1b4=R(1,10-g1a4);
  lcard.innerHTML=`<h2 class="ltitle">4. Сложение в пределах 10</h2>
  <div class="lexp">Считай кружочки вместе — сначала одна группа, потом вторая.</div>
  <div class="blocks" id="g1l4b" style="min-height:70px"></div>
  <div class="eq">${g1a4} + ${g1b4} = ?</div>
  <div class="row"><input type="number" id="g1l4i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g1l4c()">Проверить</button>
  <button class="btn ghost" onclick="G1L4()">Другой пример</button></div>
  <div class="fb" id="g1l4f"></div>${nav()}`;
  const c=document.getElementById("g1l4b");c.innerHTML="";
  const g1=document.createElement("div");g1.className="bgrp";
  for(let i=0;i<g1a4;i++) g1.appendChild(oneEl());
  const g2=document.createElement("div");g2.className="bgrp";
  for(let i=0;i<g1b4;i++){const o=document.createElement("div");o.className="one";o.style.background="#ffd98a";o.style.borderColor="var(--orange-d)";g2.appendChild(o);}
  c.appendChild(g1);c.appendChild(g2);
}
function g1l4c(){
  parseInt(g1l4i.value,10)===g1a4+g1b4
    ? lessonOk(g1a4+" + "+g1b4+" = "+(g1a4+g1b4)+" 🎉","g1l4f")
    : lessonNo("Ответ: "+(g1a4+g1b4),"g1l4f");
}

/* Урок 5 — вычитание в пределах 10 */
let g1a5=0,g1b5=0;
function G1L5(){
  g1a5=R(2,10); g1b5=R(1,g1a5);
  lcard.innerHTML=`<h2 class="ltitle">5. Вычитание в пределах 10</h2>
  <div class="lexp">Вычитание — это когда убирают часть предметов. Посчитай, сколько осталось.</div>
  <div class="blocks" id="g1l5b" style="min-height:70px"></div>
  <div class="eq">${g1a5} − ${g1b5} = ?</div>
  <div class="row"><input type="number" id="g1l5i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g1l5c()">Проверить</button>
  <button class="btn ghost" onclick="G1L5()">Другой пример</button></div>
  <div class="fb" id="g1l5f"></div>${nav()}`;
  const c=document.getElementById("g1l5b");c.innerHTML="";
  const g=document.createElement("div");g.className="bgrp";
  for(let i=0;i<g1a5;i++){
    const o=document.createElement("div");o.className="one";
    if(i>=g1a5-g1b5){o.style.opacity=".3";o.style.borderStyle="dashed";}
    g.appendChild(o);
  }
  c.appendChild(g);
}
function g1l5c(){
  const ans=g1a5-g1b5;
  parseInt(g1l5i.value,10)===ans
    ? lessonOk(g1a5+" − "+g1b5+" = "+ans+" 🎉","g1l5f")
    : lessonNo("Ответ: "+ans,"g1l5f");
}

/* Урок 6 — числа от 11 до 20 */
let g1n6=0;
function G1L6(){
  g1n6=R(11,20);
  const tens=1, ones=g1n6-10;
  lcard.innerHTML=`<h2 class="ltitle">6. Числа от 11 до 20</h2>
  <div class="lexp">Числа от 11 до 20 — это один десяток и ещё несколько единиц. Например, 14 — это 10 и 4.</div>
  <div class="blocks" id="g1l6b" style="min-height:110px"></div>
  <div class="row"><input type="number" id="g1l6i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g1l6c()">Проверить</button>
  <button class="btn ghost" onclick="G1L6()">Другое число</button></div>
  <div class="fb" id="g1l6f"></div>${nav()}`;
  drawBlocks(document.getElementById("g1l6b"), tens, ones);
}
function g1l6c(){
  parseInt(g1l6i.value,10)===g1n6
    ? lessonOk("Верно! Это "+g1n6+" 🎉","g1l6f")
    : lessonNo("Здесь 1 десяток и "+(g1n6-10)+" единиц = "+g1n6,"g1l6f");
}

/* Урок 7 — геометрические фигуры */
function G1L7(){
  const figs=[
    {name:"Круг",svg:'<circle cx="12" cy="12" r="9" stroke="white" stroke-width="2" fill="none"/>'},
    {name:"Квадрат",svg:'<rect x="4" y="4" width="16" height="16" stroke="white" stroke-width="2" fill="none"/>'},
    {name:"Треугольник",svg:'<polygon points="12,3 21,20 3,20" stroke="white" stroke-width="2" fill="none"/>'},
    {name:"Прямоугольник",svg:'<rect x="2" y="6" width="20" height="12" stroke="white" stroke-width="2" fill="none"/>'},
  ];
  const correct=R(0,figs.length-1);
  const opts=[...figs].sort(()=>Math.random()-0.5).map(f=>f.name);
  window._g1l7correct=figs[correct].name;
  lcard.innerHTML=`<h2 class="ltitle">7. Геометрические фигуры</h2>
  <div class="lexp">Круг — без углов. Треугольник — 3 угла. Квадрат — 4 равные стороны. Прямоугольник — 4 угла, стороны попарно равны.</div>
  <div style="display:flex;justify-content:center;margin:16px 0">
    <div style="width:100px;height:100px;background:var(--grass);border-radius:16px;display:flex;align-items:center;justify-content:center;">
      <svg viewBox="0 0 24 24" width="56" height="56">${figs[correct].svg}</svg>
    </div>
  </div>
  <div class="mcqrow" id="g1l7opts">
    ${opts.map(o=>`<div class="mcqopt" onclick="g1l7c(this,'${o}')">${o}</div>`).join("")}
  </div>
  <div class="fb" id="g1l7f"></div>${nav()}`;
}
function g1l7c(el,name){
  const opts=document.getElementById("g1l7opts").children;
  for(const o of opts) o.onclick=null;
  const ok = name===window._g1l7correct;
  el.classList.add(ok?"right":"wrong");
  if(!ok){ for(const o of opts) if(o.textContent===window._g1l7correct) o.classList.add("right"); }
  ok ? lessonOk("Верно! Это "+window._g1l7correct+" 🎉","g1l7f") : lessonNo("Это "+window._g1l7correct,"g1l7f");
}

/* Урок 8 — больше, меньше, длиннее, короче */
function G1L8(){
  const pairs=[
    {q:"🐘 и 🐭 — кто больше?",opts:["Слон","Мышь"],correct:0},
    {q:"🚌 и 🚗 — что длиннее?",opts:["Автобус","Легковая машина"],correct:0},
    {q:"🏔️ и 🏠 — что выше?",opts:["Гора","Дом"],correct:0},
    {q:"🐜 и 🐻 — кто меньше?",opts:["Муравей","Медведь"],correct:0},
    {q:"✏️ и 📏 (линейка чуть длиннее карандаша) — что длиннее?",opts:["Линейка","Карандаш"],correct:0},
    {q:"🌳 и 🌱 — что выше?",opts:["Дерево","Росток"],correct:0}
  ];
  const item=pairs[R(0,pairs.length-1)];
  window._g1l8=item;
  lcard.innerHTML=`<h2 class="ltitle">8. Больше, меньше, длиннее, короче</h2>
  <div class="lexp">Сравнивать можно не только числа, но и размеры предметов: кто больше, что длиннее, что выше.</div>
  <div class="mcqprompt" style="font-size:1.3rem">${item.q}</div>
  <div class="mcqrow" id="g1l8opts">
    ${item.opts.map((o,i)=>`<div class="mcqopt" onclick="g1l8c(this,${i})">${o}</div>`).join("")}
  </div>
  <div class="fb" id="g1l8f"></div>
  <div class="lctr"><button class="btn ghost" onclick="G1L8()">Другой пример</button></div>${nav()}`;
}
function g1l8c(el,i){
  const opts=document.getElementById("g1l8opts").children;
  for(const o of opts) o.onclick=null;
  const ok=i===window._g1l8.correct;
  el.classList.add(ok?"right":"wrong");
  if(!ok) opts[window._g1l8.correct].classList.add("right");
  ok ? lessonOk("Верно! 🎉","g1l8f") : lessonNo("Правильный ответ: "+window._g1l8.opts[window._g1l8.correct],"g1l8f");
}

/* Урок 9 — соседи числа */
let g1n9=0;
function G1L9(){
  g1n9=R(1,19);
  lcard.innerHTML=`<h2 class="ltitle">9. Соседи числа</h2>
  <div class="lexp">У каждого числа есть сосед слева (на 1 меньше) и сосед справа (на 1 больше).</div>
  <div class="split"><input type="number" class="mini" id="g1l9a" placeholder="?" inputmode="numeric">
  <span style="font-size:1.5rem;color:var(--blue-d)"> ← ${g1n9} → </span>
  <input type="number" class="mini" id="g1l9b" placeholder="?" inputmode="numeric"></div>
  <div class="lctr"><button class="btn b" onclick="g1l9c()">Проверить</button>
  <button class="btn ghost" onclick="G1L9()">Другое число</button></div>
  <div class="fb" id="g1l9f"></div>${nav()}`;
}
function g1l9c(){
  const x=parseInt(g1l9a.value,10),y=parseInt(g1l9b.value,10);
  (x===g1n9-1&&y===g1n9+1)
    ? lessonOk("Верно! "+(g1n9-1)+", "+g1n9+", "+(g1n9+1)+" 🎉","g1l9f")
    : lessonNo("Соседи: "+(g1n9-1)+" и "+(g1n9+1),"g1l9f");
}

/* Урок 10 — простые задачи */
let g1task=null;
function G1L10(){
  const names=["Катя","Ваня","Соня","Артём"];
  const n=names[R(0,names.length-1)];
  const type=R(0,1);
  let a,b,ans,text;
  if(type===0){
    a=R(1,7);b=R(1,10-a);ans=a+b;
    text=`У ${n} было ${a} шарика. Ему подарили ещё ${b}. Сколько шариков стало?`;
  } else {
    a=R(3,10);b=R(1,a-1);ans=a-b;
    text=`У ${n} было ${a} конфеты. Он съел ${b}. Сколько конфет осталось?`;
  }
  g1task={ans};
  lcard.innerHTML=`<h2 class="ltitle">10. Простые задачи</h2>
  <div class="lexp">Прочитай задачу внимательно и подумай, нужно сложить или вычесть.</div>
  <div style="font-size:1.1rem;line-height:1.6;text-align:center;margin:14px 0">${text}</div>
  <div class="row"><input type="number" id="g1l10i" placeholder="?" inputmode="numeric">
  <button class="btn b" onclick="g1l10c()">Проверить</button>
  <button class="btn ghost" onclick="G1L10()">Другая задача</button></div>
  <div class="fb" id="g1l10f"></div>${nav()}`;
}
function g1l10c(){
  parseInt(g1l10i.value,10)===g1task.ans
    ? lessonOk("Верно! Ответ: "+g1task.ans+" 🎉","g1l10f")
    : lessonNo("Ответ: "+g1task.ans,"g1l10f");
}

/* ================= ЗАДАЧИ 1 КЛАССА (простые, одно действие) ================= */
const TASKS1=[
 ()=>{const a=R(1,7),b=R(1,10-a),n=["Настя","Миша","Катя","Егор"][R(0,3)];
   return{q:`У ${n} было ${a} шарика. Ему подарили ещё ${b}. Сколько шариков стало?`,a:a+b,h:"Стало больше — значит, складываем."};},
 ()=>{const a=R(3,10),b=R(1,a-1),n=["Соня","Артём","Вера","Тимур"][R(0,3)];
   return{q:`У ${n} было ${a} конфеты. Он съел ${b}. Сколько конфет осталось?`,a:a-b,h:"Съели — значит, отнимаем."};},
 ()=>{const a=R(1,5),b=R(1,5);
   return{q:`На дереве сидело ${a} птиц, прилетело ещё ${b}. Сколько птиц стало?`,a:a+b,h:"Прилетели — прибавляем."};},
 ()=>{const a=R(4,10),b=R(1,3);
   return{q:`В корзине было ${a} яблок. ${b} яблока взяли. Сколько осталось?`,a:a-b,h:"Взяли — значит, вычитаем."};},
 ()=>{const a=R(1,5),b=R(1,5);
   return{q:`У кота ${a} котёнка и у кошки ${b} котят в другой семье. Сколько котят всего?`,a:a+b,h:"«Всего» — складываем обе группы."};},
 ()=>{const a=R(1,9),b=R(1,10-a);
   return{q:`В вазе было ${a} цветка. Добавили ещё ${b}. Сколько цветов в вазе теперь?`,a:a+b,h:"Добавили — прибавляем."};},
 ()=>{const a=R(5,10),b=R(1,4);
   return{q:`На полке было ${a} книг. ${b} книги взяли почитать. Сколько книг осталось на полке?`,a:a-b,h:"Взяли — вычитаем."};},
 ()=>{const a=R(2,6),b=R(2,6);
   return{q:`У одной вазы ${a} цветка, у другой ${b} цветков. Сколько цветов всего в обеих вазах?`,a:a+b,h:"«Всего» в обеих — складываем."};},
 ()=>{const a=R(2,6),b=R(1,4),n=["Настя","Миша","Катя","Егор"][R(0,3)];
   return{q:`У ${n} было ${a} орешков. Белка принесла ещё ${b}. Сколько орешков стало?`,a:a+b,h:"Принесли ещё — прибавляем."};},
 ()=>{const a=R(4,10),b=R(1,a-2);
   return{q:`На столе стояло ${a} тарелок. ${b} тарелки убрали. Сколько тарелок осталось?`,a:a-b,h:"Убрали — вычитаем."};},
 ()=>{const a=R(1,3),b=R(1,3),c=R(1,3),n=["Настя","Миша","Катя","Егор"][R(0,3)];
   return{q:`${n} нашёл(нашла) ${a} ракушки утром, ${b} днём и ${c} вечером. Сколько ракушек всего?`,a:a+b+c,h:"Сложи все три числа."};},
 ()=>{const a=R(4,10),b=R(1,a-1),n1=["Настя","Миша","Катя","Егор"][R(0,3)],n2=["Соня","Артём","Вера","Тимур"][R(0,3)];
   return{q:`У ${n1} ${a} кубиков, у ${n2} ${b} кубиков. На сколько кубиков больше у ${n1}?`,a:a-b,h:"«На сколько больше» — вычитаем."};},
 ()=>{const a=R(1,5),b=R(1,5),n=["Настя","Миша","Катя","Егор"][R(0,3)];
   return{q:`${n} слепил(а) ${a} снежка утром и ${b} снежка вечером. Сколько снежков всего?`,a:a+b,h:"«Всего» — складываем."};},
 ()=>{const a=R(3,9),b=R(1,2);
   return{q:`В гараже стояло ${a} машинок. ${b} машинки забрали поиграть. Сколько машинок осталось в гараже?`,a:a-b,h:"Забрали — вычитаем."};},
 ()=>{const a=R(1,4),b=R(1,4),c=R(1,4);
   return{q:`На ветке было ${a} листика, потом выросло ещё ${b}, потом ещё ${c}. Сколько листиков стало?`,a:a+b+c,h:"Сложи все три числа по порядку."};},
 ()=>{const a=R(1,9);
   return{q:`Какое число идёт сразу после числа ${a}?`,a:a+1,h:"Следующее число всегда на 1 больше."};},
 ()=>{const a=R(2,10);
   return{q:`Какое число идёт сразу перед числом ${a}?`,a:a-1,h:"Предыдущее число всегда на 1 меньше."};},
 ()=>{const a=R(1,5),b=R(1,5);
   return{q:`В одной коробке ${a} карандаша, в другой ${b} карандашей. Сколько карандашей в двух коробках вместе?`,a:a+b,h:"Сложи количество карандашей в обеих коробках."};},
];
