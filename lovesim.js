// quiz-data.js 必須有 const questions = [...] 結構
let current = 0;
const choiceHistory = [];

const personalityTable = {
  "TOOL-S": {
    quote: "人家有事才會找我，懂？",
    match: ["CUTE"],
    clash: ["MEAN"],
    desc: "耳根子軟，被人召喚就出現，簡直是行走的免費勞動力。",
    explain: "你是那種無法拒絕他人請求的人，別人一撒嬌你就腿軟。天天被人使喚還沾沾自喜覺得自己有人緣，殊不知你只是別人的工具而已。",
    image: "tool.gif"
  },
  "IMBT": {
    quote: "我不是變態，我只是品味異於常人",
    match: ["MIMI"],
    clash: ["IMSB"],
    desc: "熱愛過度表達自己，極其外向，有著正常人難以理解的癖好。",
    explain: "你的一言一行都透露著「快來關注我」的氣息，正常人看了都想報警。你以為你的特立獨行很酷，實際上你真的蠻酷的。",
    image: "imbt.png"
  },
  "DRUN-K": {
    quote: "酒醒只為繼續醉",
    match: ["JOKER"],
    clash: ["ACGN"],
    desc: "把酒當水喝，沒有酒就活不下去。",
    explain: "你的血液已經被酒精取代，肝臟在向你哭泣。每次說「今天不喝了」的人都是你，每次喝到爛醉如泥的也是你。你不是在喝酒，就是在去喝酒的路上。",
    image: "drunk.png"
  },
  "MIMI": {
    quote: "小貓咪，能有什麼壞心思呢？",
    match: ["IMBT"],
    clash: ["MEAN"],
    desc: "平時安靜得像不存在，熟了之後騷擾起人來比貓還煩。",
    explain: "你就像一隻貓，安靜時讓人忘記你的存在，活躍時讓人想把你丟出窗外。你總是用無辜的眼神掩飾自己惡作劇的本性，別以為大家不知道背後是誰搞的鬼。",
    image: "mimi.png"
  },
  "DEAD": {
    quote: "活人微死",
    match: ["POOR"],
    clash: ["WSND"],
    desc: "活著只是因為還沒死，對人生毫無期待。",
    explain: "你活著，但靈魂已經離開了。每天醒來的第一個念頭是「啊，又要過一天」。你的表情比得過喪禮上的親屬，連笑都像是在完成任務。如果無聊是一種病，你已經是晚期了。",
    image: "dead.png"
  },
  "CUTE": {
    quote: "誰還不是cute了",
    match: ["IMSB"],
    clash: ["MEAN"],
    desc: "智商堪憂，天天犯傻，說過的話三秒就忘。",
    explain: "你的腦袋大概裝的是棉花糖，同一個問題能問三遍還是聽不懂。但你那無辜的眼神和呆萌的反應卻讓人氣不起來。別人都說你可愛，其實是覺得你智商感人，不忍心直說罷了。",
    image: "cute.png"
  },
  "MEAN": {
    quote: "我不是毒舌，我只是比較誠實",
    match: ["WSND"],
    clash: ["JOKER"],
    desc: "說話不帶濾鏡，常把天聊死。",
    explain: "你自稱是誠實，實際上只是不會說話。你的「實話實說」已經傷害了無數人，還美其名曰「為他好」。如果情商有負數，你一定是創造了新低。",
    image: "mean.png"
  },
  "ATMer": {
    quote: "是我那個談了渣男的朋友",
    match: ["AUNT", "LOOK-I"],
    clash: ["POOR", "KNOW-E"],
    desc: "錢不是錢，是會消失的數字，購物狂魔。",
    explain: "你的錢包永遠是空的，但衣櫃和垃圾桶卻塞滿了「限量版」垃圾。你活在「剁手->後悔->剁手」的死循環中，信用卡賬單是你每月最大的驚喜。買完就扔的東西比你吃過的飯還多。",
    image: "atmer.png"
  },
  "NSDD": {
    quote: "啊對對對，開擺開擺～",
    match: ["DRUN-K"],
    clash: ["IMSB"],
    desc: "擺爛是信仰，躺平是藝術。",
    explain: "你的座右銘是「能躺著絕不坐著」。別人在努力打拼時，你已經進入了第三層夢境。你把「明日復明日」奉為人生信條，如果躺平是奧運項目，你早就拿金牌了。",
    image: "nsdd.png"
  },
  "JOKE-R": {
    quote: "好紅好紅，誰的鼻子掉了",
    match: ["DRUN-K"],
    clash: ["ATMer"],
    desc: "感情中總是一廂情願，被已讀已成常態。",
    explain: "你在感情中永遠是那個多愛的人，對方的每個已讀不回你都能找出一百個理由來解釋。明明被欺負到家門口了，還在幻想對方其實是愛你的。說真的，你媽沒教你什麼是 self respect 嗎？",
    image: "joker.png"
  },
  "WSND": {
    quote: "停止精神內耗，老娘配享太廟",
    match: ["MEAN"],
    clash: ["CUTE"],
    desc: "直接發瘋，精神外耗。",
    explain: "你的情緒比過山車還起伏大，周圍的人都成了你的情緒垃圾桶。你以為自己只是「性格直」，比起內耗焦慮，你更願意讓身邊的人幫你焦慮。",
    image: "wsnd.png"
  },
  "MALO": {
    quote: "嗎哩也是要打工的",
    match: ["MIMI"],
    clash: ["IMSB"],
    desc: "沒有兄弟就活不下去，群體行動像邪教。",
    explain: "你和你那群一模一樣的兄弟形影不離，像是被施了連體咒語。你們總是一起做一些讓人側目的事情，還美其名曰「友情」。",
    image: "malo.png"
  },
  "IMSB": {
    quote: "我只能說在做的各位都是辣雞",
    match: ["WSND"],
    clash: ["NSDD"],
    desc: "生活被截止日期和會議支配，黑眼圈是標配。",
    explain: "你的日程表擠得像沙丁魚罐頭，睡眠時間比小學生的零用錢還少。咖啡已經代替了你的血液，眼袋可以裝下一個宇宙。你明明活得像個奴隸，卻還要在朋友面前假裝「充實」。",
    image: "imsb.png"
  },
  "ACGN": {
    quote: "教練，我想打籃球",
    match: ["MALO"],
    clash: ["IMSB"],
    desc: "三次元女友不存在，老婆在硬碟裡。",
    explain: "你的房間像個動漫展銷會，對二次元角色的瞭解比對現實世界還多。你已經分不清現實和虛構的界限。",
    image: "acgn.png"
  },
  "POOR": {
    quote: "口袋沒錢，態度照樣囂張",
    match: ["DRUN-K"],
    clash: ["ATMer"],
    desc: "口袋比心還空，但嘴硬得很。",
    explain: "你的錢包比沙漠還乾淨，「AA制」是你最怕聽到的詞。雖然窮，但你的會想方設法湊錢買美麗廢物，窮得只剩態度了。",
    image: "poor.png"
  }
};


function loadQuestion() {
  const box = document.getElementById('quiz-box');
  if (current >= questions.length) return showResult();

  const q = questions[current];
  box.innerHTML = `<div class="question-box slide-in">
    <h2>第 ${current + 1} 題：${q.question}</h2>
    <div class="options">
      ${q.options.map((opt, idx) => {
        const letter = ["A", "B", "C", "D"][idx];
        return `<button class="option-animate" onclick="select('${letter}', this)">${opt}</button>`;
      }).join("")}
    </div>
  </div>`;
}


function select(letter, btn) {
  clickSound.play();
  const buttons = document.querySelectorAll('.options button');
  buttons.forEach(b => b.disabled = true);
  btn.classList.add('selected');
  setTimeout(() => {
    choiceHistory.push(letter);
    current++;
    loadQuestion();
  }, 300);
  document.getElementById('prog').value = current+1;
}
function showResult() {
  resultSound.play();
  const count = { A: 0, B: 0, C: 0, D: 0 };
  const indexByLetter = { A: [], B: [], C: [], D: [] };
  choiceHistory.forEach((ch, i) => {
    count[ch]++;
    indexByLetter[ch].push(i + 1);
  });

  const chose = (q, l) => choiceHistory[q - 1] === l;
  const choseIn = (qs, l) => qs.filter(q => chose(q, l)).length;

  let result = "UNKNOWN"; 
  if (count["A"] >= 8 && chose(1, "A") && chose(6, "A") && chose(9, "A")) result = "TOOL-S";
  else if (count["B"] >= 7 && choseIn([5, 12, 32], "B") >= 2) result = "IMBT";
  else if (count["C"] >= 8 && chose(3, "C") && chose(11, "C")) result = "DRUN-K";
  else if ((count["A"] + count["C"] >= 12) && Math.abs(count["A"] - count["C"]) <= 4 && choseIn([12, 23, 32], "A") + choseIn([12, 23, 32], "C") >= 2) result = "MIMI";
  else if ((count["C"] + count["D"] >= 15) && choseIn([14, 20, 24, 37], "C") + choseIn([14, 20, 24, 37], "D") >= 3) result = "DEAD";
  else if ((count["A"] + count["B"] >= 12) && chose(33, "A") && (chose(19, "A") || chose(38, "A"))) result = "CUTE";
  else if (count["D"] >= 8 && choseIn([8, 14, 26, 34], "D") >= 3) result = "MEAN";
  else if (choseIn([10, 21, 29, 35], "B") + choseIn([10, 21, 29, 35], "D") >= 3) result = "ATMer";
  else if (choseIn([7, 11, 20, 25], "C") + choseIn([7, 11, 20, 25], "D") >= 3 && chose(17, "C")) result = "NSDD";
  else if (choseIn([4, 16, 30, 31], "A") >= 3 && (chose(34, "A") || chose(34, "C"))) result = "JOKE-R";
  else if (choseIn([8, 14, 26, 34], "B") + choseIn([8, 14, 26, 34], "D") >= 3 && chose(38, "B")) result = "WSND";
  else if (count["B"] >= 7 && chose(2, "B") && chose(15, "B") && chose(12, "B")) result = "MALO";
  else if (choseIn([11, 19, 22, 25], "A") + choseIn([11, 19, 22, 25], "D") >= 3 && chose(7, "A") && (chose(24, "B") || chose(24, "C"))) result = "IMSB";
  else if (choseIn([1, 10, 21, 35], "A") + choseIn([1, 10, 21, 35], "B") >= 3 && (chose(32, "A") || chose(32, "C"))) result = "ACGN";
  else if (choseIn([3, 10, 21, 29], "A") + choseIn([3, 10, 21, 29], "C") >= 3 && (chose(24, "A") || chose(24, "C"))) result = "POOR";

  const box = document.getElementById("result-box");
  document.getElementById("quiz-box").classList.add("hidden");
  box.classList.remove("hidden");

  const p = personalityTable[result];
  const matchList = p?.match.map(id => `<li><strong>${id}</strong>：${personalityTable[id]?.quote}</li>`).join("") || "";
  const clashList = p?.clash.map(id => `<li><strong>${id}</strong>：${personalityTable[id]?.quote}</li>`).join("") || "";

  const resultHTML = `
  <div class="question-box fade-in">
    <h2>你的主要人格是：</h2>
   <img src="images/${p.image}" alt="${result}" style="max-width:100%; margin:1rem auto; display:block;" />
    <p style="font-size: 1.2rem; font-weight: bold; margin-top: 1rem;">${result} ｜ ${p.quote}</p>
    <p style="font-style: italic; color: #666;">${p.desc}</p>
    <p style="margin-top: 1rem;">${p.explain}</p>
  </div>
  <div class="question-box fade-in delay1">
    <h3>💘 最適合你的人格：</h3>
    <ul>${matchList}</ul>
  </div>
  <div class="question-box fade-in delay2">
    <h3>⚠️ 最不合的人格：</h3>
    <ul>${clashList}</ul>
  </div>`;

  document.getElementById("result-type").textContent = result;
  document.getElementById("result-description").innerHTML = resultHTML;
  fireConfetti();
}


function restartQuiz() {
  current = 0;
  choiceHistory.length = 0;
  document.getElementById('result-box').classList.add('hidden');
  document.getElementById('quiz-box').classList.remove('hidden');
  loadQuestion();
}

const clickSound = document.getElementById("click-sound");
const resultSound = document.getElementById("result-sound");



function boom(x,y){                       // 產生 10 個 emoji
  for(let i=0;i<10;i++){
    const e=document.createElement('span');
    e.textContent='✨';
    e.style.cssText=`position:fixed;left:${x}px;top:${y}px;
      font-size:${12+Math.random()*18}px; pointer-events:none;
      animation:rise 1.4s ease-out forwards;`;
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),1400);
  }
}

document.addEventListener('click',e=>boom(e.clientX,e.clientY));

const themeToggle = document.getElementById('themeSwitch');
const prefersDark  = window.matchMedia('(prefers-color-scheme: dark)').matches;


themeToggle.addEventListener('change', ()=>{
  if(themeToggle.checked){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
  }else{
    document.documentElement.setAttribute('data-theme','light');
    localStorage.setItem('theme','light');
  }
});

function fireConfetti(){
  // 連續 3 波
  const end = Date.now() + 900;
  (function frame(){
    confetti({
      particleCount: 45,
      startVelocity: 35,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* ======= 背景音樂開關 ======= */
const bgAudio      = document.getElementById('bgMusic');
const musicToggle  = document.getElementById('musicSwitch');
const storedMusic  = localStorage.getItem('music');   // "on" / "off" / null

// 1. 初始：依照 localStorage，預設關閉
if(storedMusic === 'on'){
  musicToggle.checked = true;
  bgAudio.play().catch(()=>{});  // 若瀏覽器禁止自動播，使用者點擊後會播放
}

// 2. 使用者切換
musicToggle.addEventListener('change',()=>{
  if(musicToggle.checked){
    bgAudio.play();
    localStorage.setItem('music','on');
  }else{
    bgAudio.pause();
    localStorage.setItem('music','off');
  }
});

// 3. 若瀏覽器第一次拒絕自動播放，等到第一次點擊任意按鈕再播放
document.addEventListener('click',()=>{
  if(musicToggle.checked && bgAudio.paused){
    bgAudio.play().catch(()=>{});
  }
},{once:true});



loadQuestion();


// 顯示/隱藏按鈕 (可選)
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-hero');
  if (window.scrollY > 0) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});
