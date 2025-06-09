// 人格數據
const personalityTable = {
    "TOOL-S": {
        quote: "人家有事才會找我，懂？",
        match: ["CUTE"],
        clash: ["MEAN"],
        desc: "耳根子軟，被人召喚就出現，簡直是行走的免費勞動力。",
        explain: "你是那種無法拒絕他人請求的人，別人一撒嬌你就腿軟。天天被人使喚還沾沾自喜覺得自己有人緣，殊不知你只是別人的工具而已。",
        image: "tool.png"
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