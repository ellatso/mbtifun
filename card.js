// 人格數據
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
        match: ["JOKE-R"],
        clash: ["POOR"],
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

// 生成人格卡片
function generatePersonalityCards() {
    const grid = document.getElementById('personalitiesGrid');
    grid.innerHTML = '';

    Object.entries(personalityTable).forEach(([key, personality]) => {
        const card = document.createElement('div');
        card.className = 'personality-card';
        
        card.innerHTML = `
            <div class="card-header">
                <div class="personality-icon">${key.charAt(0)}</div>
                <div>
                    <div class="card-title">${key}</div>
                </div>
            </div>
            <!-- 🖼️ 人格代表圖片 -->
             <img src="images/${personality.image}" alt="${key} 圖片" class="personality-image" />

            <div class="card-quote">"${personality.quote}"</div>
            
            <div class="card-description">
                <strong>特徵：</strong>${personality.desc}
            </div>
            
            <div class="card-explanation">
                ${personality.explain}
            </div>
            
            <div class="compatibility">
                <div class="compatibility-item match">
                    <strong>💕 相配</strong><br>
                    ${personality.match.join(', ')}
                </div>
                <div class="compatibility-item clash">
                    <strong>💥 相沖</strong><br>
                    ${personality.clash.join(', ')}
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// 顯示人格展示區域
function showPersonalities() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('personalities').classList.add('active');
    document.getElementById('back-to-hero').classList.add('show');
    document.getElementById('slotMachine').style.display = 'none';
    document.getElementById('gomokuGame').style.display = 'none';
    document.getElementById('snakeGame').style.display = 'none';
    document.getElementById('memoryGame').style.display = 'none';

    // 生成卡片（如果還沒生成）
    if (document.getElementById('personalitiesGrid').children.length === 0) {
        generatePersonalityCards();
    }
    
    // 平滑滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 返回首頁
function backToHero() {
    document.getElementById('hero').style.display = 'block';
    document.getElementById('personalities').classList.remove('active');
    document.getElementById('back-to-hero').classList.remove('show');
    
    // 平滑滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 頁面載入時的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 可以在這裡添加其他初始化邏輯
});

/* ----------------  拉霸機常數 ---------------- */
const slotSymbols = ['🎮', '💕', '🎯']; // 3 種圖示即可
// 三連圖示 => game key
const gameMapping = {
  '🎮🎮🎮': 'snake',   // 🎮 → 貪吃蛇
  '💕💕💕': 'gomoku',  // 💕 → 五子棋
  '🎯🎯🎯': 'memory'  // 🎯 → 翻牌配對
};

let spinning = false;

/* ------------- 顯示拉霸機區 --------------- */
function showSlotMachine () {
  document.getElementById('hero').style.display = 'none';
  document.getElementById('personalities').classList.add('active');
  document.getElementById('slotMachine').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------- 拉霸機轉動 --------------- */
function spinSlots(){
  if(spinning) return;
  spinning = true;
  const reels = ['slot1','slot2','slot3'].map(id=>document.getElementById(id));
  const btn   = document.getElementById('spinButton');
  const info  = document.getElementById('slotResult');

  btn.disabled = true; btn.textContent='轉動中…'; info.textContent='';

  // 個別 interval, 個別停靠時間
  const intervals = [];
  const stopDelays = [1800, 2300, 2900];  // 第1輪先停 → 最後一輪壓軸
  reels.forEach((el,i)=>{
    el.classList.add('spinning');
    intervals[i] = setInterval(()=>{
      el.textContent = slotSymbols[Math.random()*slotSymbols.length|0];
    }, 70 + i*20);                       // 每輪速度略不同
  });

  // 最終結果陣列 (一次決定)
  const final = generateResult();

  // 依 stopDelays 依序停止
  reels.forEach((el,i)=>{
    setTimeout(()=>{
      clearInterval(intervals[i]);
      el.classList.remove('spinning');
      el.textContent = final[i];
      // 最後一輪停下後再判定結果
      if(i===2){
        showGamePrompt(final.join(''));
        spinning=false;
        btn.disabled=false;
        btn.textContent='再轉一次！';
      }
    }, stopDelays[i]);
  });
}

/* ---------- 產生結果：4 成機率中獎 ---------- */
function generateResult () {
  if (Math.random() < 0.9) {                 // 40% 三連圖
    const s = slotSymbols[Math.random() * slotSymbols.length | 0];
    return [s, s, s];
  }
  return slotSymbols.map(() => slotSymbols[Math.random() * slotSymbols.length | 0]);
}

/* ---------- 依結果顯示啟動對應遊戲 ---------- */
function showGamePrompt (key) {
  const info = document.getElementById('slotResult');
  if (gameMapping[key]) {
    const game = gameMapping[key];
    const label = game === 'snake'  ? '🐍 貪吃蛇'
               : game === 'gomoku' ? '⚫⚪ 五子棋'
               : '🂠 翻牌配對';

    info.innerHTML = `
      🎉 ${key}！<br><strong>啟動：${label}</strong><br>
      <button onclick="startMiniGame('${game}')" style="margin-top:8px;padding:8px 18px;background:linear-gradient(135deg,#ff9800,#ff5722);
  color:#fff; border:none; padding:.8rem 1.6rem;
  border-radius:50px; font-size:1.1rem; cursor:pointer;
  box-shadow:0 4px 15px rgba(255,152,0,.4);
  transition:.3s;">
       開始遊戲
      </button>
    `;
  } else {
    info.textContent = `${key} → 沒中，再試一次！`;
  }
}

/* ---------- 開始小遊戲 ↔ 回拉霸機 ---------- */
function startMiniGame (type) {
  // 隱藏 slotMachine，顯示指定遊戲
  ['gomokuGame','snakeGame','memoryGame','slotMachine'].forEach(id =>
    document.getElementById(id).style.display = (id === `${type}Game` ? 'block' : 'none')
  );

  if (type === 'gomoku')  initGomoku();
  if (type === 'snake')   initSnake();
  if (type === 'memory')  initMemory();
}

function backToSlotMachine () {
  ['gomokuGame','snakeGame','memoryGame'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById('slotMachine').style.display = 'block';
}

/* ======= 工具：section 切換 ======= */
function showSection(id){
  ['gomokuGame','snakeGame','memoryGame','slotMachine']
    .forEach(sec=>document.getElementById(sec).style.display = (sec===id? 'block':'none'));
}
/* 在 slot 機結果觸發 */
function startMiniGame(type){
  if(type==='gomoku')   initGomoku();
  if(type==='snake')    initSnake();
  if(type==='memory')   initMemory();
}
/* 返回 slot */
function backToSlotMachine(){
  showSection('slotMachine');
}

/* ============ (1) 五子棋 (最簡單 9×9, 玩家 vs. 隨機 AI) ============ */
function initGomoku(){
  showSection('gomokuGame');
  const cvs = document.getElementById('gomokuCanvas');
  const ctx = cvs.getContext('2d');
  const size = 9, cell = cvs.width/size;
  const board = Array.from({length:size},()=>Array(size).fill(0)); // 0空1黑2白
  let turn = 1; // 玩家先(1)

  draw();
  cvs.onclick = e=>{
    const x = Math.floor(e.offsetX/cell);
    const y = Math.floor(e.offsetY/cell);
    if(board[y][x]!==0) return;
    board[y][x]=1; draw();
    if(checkWin(1)){ end('你贏了!'); return; }
    aiMove(); draw();
    if(checkWin(2)){ end('AI 贏了'); }
  };
  function aiMove(){
  // 1. 若玩家下一步會贏，優先擋下來
  for(let y=0; y<size; y++){
    for(let x=0; x<size; x++){
      if(board[y][x]!==0) continue;
      board[y][x] = 1;
      if(checkWin(1)) { board[y][x] = 2; return; } // 擋住玩家
      board[y][x] = 0;
    }
  }

  // 2. 嘗試讓 AI 自己贏
  for(let y=0; y<size; y++){
    for(let x=0; x<size; x++){
      if(board[y][x]!==0) continue;
      board[y][x] = 2;
      if(checkWin(2)) return; // 自己能贏就贏
      board[y][x] = 0;
    }
  }

  // 3. 嘗試下在自己連三的位置
  const score = (x, y, player) => {
    const dir = [[1,0],[0,1],[1,1],[1,-1]];
    let max = 0;
    for(const [dx, dy] of dir){
      let count = 0;
      for(let k=1; k<5; k++){
        const nx = x + dx * k;
        const ny = y + dy * k;
        if(nx<0||ny<0||nx>=size||ny>=size) break;
        if(board[ny][nx] === player) count++;
        else break;
      }
      max = Math.max(max, count);
    }
    return max;
  };

  let bestX = -1, bestY = -1, bestScore = -1;
  for(let y=0; y<size; y++){
    for(let x=0; x<size; x++){
      if(board[y][x]!==0) continue;
      const s = score(x, y, 2); // AI 目前下這格會變幾連
      if(s > bestScore) {
        bestScore = s;
        bestX = x;
        bestY = y;
      }
    }
  }

  if(bestX !== -1 && bestY !== -1) {
    board[bestY][bestX] = 2;
    return;
  }

  // 4. 若都沒有，隨機亂下
  let x, y;
  do {
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
  } while(board[y][x] !== 0);
  board[y][x] = 2;
}


  function draw(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    ctx.strokeStyle='#555';
    for(let i=0;i<size;i++){
      ctx.beginPath(); ctx.moveTo(i*cell+cell/2,cell/2);
      ctx.lineTo(i*cell+cell/2,cvs.height-cell/2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cell/2,i*cell+cell/2);
      ctx.lineTo(cvs.width-cell/2,i*cell+cell/2); ctx.stroke();
    }
    for(let y=0;y<size;y++)for(let x=0;x<size;x++){
      if(board[y][x]){
        ctx.fillStyle = board[y][x]==1?'#000':'#fff';
        ctx.beginPath();
        ctx.arc(x*cell+cell/2,y*cell+cell/2,cell/3,0,Math.PI*2);
        ctx.fill(); ctx.stroke();
      }
    }
  }
  function checkWin(p){
    const dir=[[1,0],[0,1],[1,1],[1,-1]];
    for(let y=0;y<size;y++)for(let x=0;x<size;x++)if(board[y][x]==p){
      for(const [dx,dy] of dir){
        let cnt=0; for(let k=0;k<5;k++){
          const nx=x+k*dx, ny=y+k*dy;
          if(board[ny]?.[nx]==p) cnt++; else break;
        }
        if(cnt==5) return true;
      }
    }
    return false;
  }
  function end(msg){ document.getElementById('gomokuMsg').innerText=msg; cvs.onclick=null;}
}

/* ============ (2) 貪吃蛇 (最小版 15×15) ============ */
function initSnake(){
  showSection('snakeGame');
  const cvs=document.getElementById('snakeCanvas');
  const ctx=cvs.getContext('2d');
  const grid=15, size=cvs.width/grid;
  let snake=[[7,7]], dir=[1,0], food=[3,3], score=0, running=true;

  document.onkeydown=e=>{
    if(e.key==='ArrowUp'   && dir[1]!==1) dir=[0,-1];
    if(e.key==='ArrowDown' && dir[1]!==-1) dir=[0,1];
    if(e.key==='ArrowLeft' && dir[0]!==1) dir=[-1,0];
    if(e.key==='ArrowRight'&& dir[0]!==-1)dir=[1,0];
  };

  const loop=setInterval(()=>{
    if(!running) return;
    const head=[snake[0][0]+dir[0], snake[0][1]+dir[1]];
    if(head[0]<0||head[0]>=grid||head[1]<0||head[1]>=grid||
       snake.some(s=>s[0]==head[0]&&s[1]==head[1])){
      running=false; clearInterval(loop); alert('GG! 得分:'+score); backToSlotMachine(); return;
    }
    snake.unshift(head);
    if(head[0]==food[0]&&head[1]==food[1]){
      score++; document.getElementById('snakeScore').innerText='得分：'+score;
      do{ food=[Math.floor(Math.random()*grid),Math.floor(Math.random()*grid)];}
      while(snake.some(s=>s[0]==food[0]&&s[1]==food[1]));
    }else{ snake.pop(); }
    draw();
  },200);
  function draw(){
    ctx.fillStyle='#fafafa'; ctx.fillRect(0,0,cvs.width,cvs.height);
    ctx.fillStyle='#4caf50';
    snake.forEach(([x,y])=>ctx.fillRect(x*size,y*size,size-2,size-2));
    ctx.fillStyle='#e91e63';
    ctx.fillRect(food[0]*size,food[1]*size,size-2,size-2);
  }
}

/* ============ (3) 翻牌配對 (4×4 – 含愛心機制) ============ */
function initMemory () {
  showSection('memoryGame');        // 切換區塊
  const grid   = document.getElementById('memoryGrid');
  const msgElm = document.getElementById('memoryMsg');

  grid.innerHTML = '';
  msgElm.textContent = '';
  document.getElementById('memoryLives').innerHTML = '❤️❤️❤️❤️❤️❤️❤️❤️❤️';

  const icons = ['🍕','🍔','🍟','🍫','🍩','🍉','🍓','🍇'];
  const deck  = [...icons, ...icons].sort(() => Math.random() - 0.5);

  let opened = [];          // 目前翻開卡 (0~2)
  let matched = 0;          // 已配對數
  let lives = 10;            // 生命值

  deck.forEach(icon => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.icon = icon;

    card.onclick = () => {
      // 已翻開兩張 or 自己已是 open → 直接返回
      if (opened.length === 2 || card.classList.contains('open')) return;

      card.classList.add('open');
      card.textContent = icon;
      opened.push(card);

      /* 兩張都翻開後判斷 */
      if (opened.length === 2) {
        const [c1, c2] = opened;

        if (c1.dataset.icon === c2.dataset.icon) {
          // 配對成功
          matched += 2;
          opened = [];

          if (matched === 16) {
            msgElm.textContent = '🎉 全部配對完成！';
          }
        } else {
          // 配對失敗 – 0.8 秒後翻回去
          lives--;
          updateLivesDisplay(lives);

          const toClose = [...opened];   // 複製目前兩張
          opened = [];                   // 先清空防止再點
          setTimeout(() => {
            toClose.forEach(card => {
              card.classList.remove('open');
              card.textContent = '';
            });
          }, 800);

          if (lives === 0) {
            msgElm.textContent = '💔 GAME OVER！';
            // 失敗後禁止再翻
            grid.querySelectorAll('.memory-card').forEach(card => card.onclick = null);
          }
        }
      }
    };

    grid.appendChild(card);
  });

  /* 生命值顯示更新 */
  function updateLivesDisplay (n) {
    const hearts = '❤️'.repeat(n) + '🖤'.repeat(10 - n);
    document.getElementById('memoryLives').innerHTML = hearts;
  }
}


