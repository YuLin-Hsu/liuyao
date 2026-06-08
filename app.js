/* ==========================================================================
   Chinese Trigrams & 64 Hexagrams Database
   ========================================================================== */

// 8 Trigrams (八卦) definitions (from bottom to top binary representation)
const TRIGRAMS = {
    '111': { name: '乾', nature: '天', symbol: '☰' },
    '110': { name: '兌', nature: '澤', symbol: '☱' },
    '101': { name: '離', nature: '火', symbol: '☲' },
    '100': { name: '震', nature: '雷', symbol: '☳' },
    '011': { name: '巽', nature: '風', symbol: '☴' },
    '010': { name: '坎', nature: '水', symbol: '☵' },
    '001': { name: '艮', nature: '山', symbol: '☶' },
    '000': { name: '坤', nature: '地', symbol: '☷' }
};

// 64 Hexagrams (六十四卦) definitions (key: [UpperTrigramName][LowerTrigramName])
const HEXAGRAMS = {
    // 乾宮
    '乾乾': { name: '乾為天', desc: '天行健，君子以自強不息。象徵極致的剛健與主動，利於開創與領導，但需防盛極而衰，宜持之以恆。' },
    '乾兌': { name: '天澤履', desc: '步履艱難，如同踩在老虎尾巴上，需小心翼翼。象徵禮儀防範與伴君如伴虎的戒慎心理。' },
    '乾離': { name: '天火同人', desc: '志同道合，廣結善緣。象徵與人和同、共同合作。利於建立團隊、聯手創業或出外謀求合作。' },
    '乾震': { name: '天雷无妄', desc: '順應自然，不存妄想。行事應坚守正道，實事求是，防範突如其來的意外，不可心存僥倖。' },
    '乾巽': { name: '天風姤', desc: '相遇與邂逅。象徵陰氣漸生，外表看似和順但內部潛藏危機。此時需防範小人，避免被假象蒙蔽。' },
    '乾坎': { name: '天水訟', desc: '爭端與訴訟。天與水背道而馳，象徵道不同不相為謀。宜及早退讓，不宜爭鬥到底。' },
    '乾艮': { name: '天山遯', desc: '退避隱遁。此時小人勢力強大，君子應以退為進，保存實力，避開鋒芒以待日後良機。' },
    '乾坤': { name: '天地否', desc: '閉塞不通。天在上升，地在下沈，兩者不相交感。此時上下不和，諸事阻礙，宜守正忍耐。' },
    
    // 兌宮
    '兌乾': { name: '澤天夬', desc: '決斷與排除。水汽上升至天，面臨決堤。陽剛之氣將完全戰勝陰氣，需果斷做出決策，切忌優柔寡斷。' },
    '兌兌': { name: '兌為澤', desc: '喜悅與溝通。兩澤相連，互相滋潤。象徵言語交流、說服他人、和樂融融。利於協商與洽談。' },
    '兌離': { name: '澤火革', desc: '改革與去舊更新。澤中有火，水火交融必生變革。時機已成熟，順應天道民意大膽改革，必得吉運。' },
    '兌震': { name: '澤雷隨', desc: '隨順與適應。澤中藏雷，順應自然。做事要隨時調整步伐，聽取他人建議，隨遇而安便能亨通。' },
    '兌巽': { name: '澤風大過', desc: '負擔沉重。澤水淹沒樹木，柱子彎曲，象徵壓力過載。需要非凡的勇氣與決心，以非常手段解決困難。' },
    '兌坎': { name: '澤水困', desc: '陷入困境。澤中無水，乾涸困頓。此時言行難以取信於人，宜收斂鋒芒，守正忍耐，修身養性以待時。' },
    '兌艮': { name: '澤山咸', desc: '感應與吸引。山頂有澤，水向下流，兩相感應。象徵情感交流、人際和諧與姻緣，多聽直覺。' },
    '兌坤': { name: '澤地萃', desc: '聚集與精華匯聚。水匯聚於地上，人才、資金和物資聚集。利於團隊協作、舉辦大型活動或展現影響力。' },
    
    // 離宮
    '離乾': { name: '火天大有', desc: '大獲豐收，富庶滿盈。火在天上，普照萬物。事業處於鼎盛期，但需謙遜待人，樂善好施以保長久。' },
    '離兌': { name: '火澤睽', desc: '乖離與矛盾。火往上燒，澤水往下流，背道而馳。象徵意見分歧、不和諧。此時求同存異為上策。' },
    '離離': { name: '離為火', desc: '明亮與依附。雙火重明，光輝燦爛。如同火附著於木。行事宜堅守中庸之道，保持內心光明磊落。' },
    '離震': { name: '火雷噬嗑', desc: '障礙清除。雷電交加，咬碎硬物。象徵有障礙阻礙前行，應果斷執法或採取強硬手段排除困難。' },
    '離巽': { name: '火風鼎', desc: '鼎新變革，賢能相助。木上有火，烹飪之象。三足鼎立，象徵合夥吉利，權力穩固，利於除舊布新。' },
    '離坎': { name: '火水未濟', desc: '尚未成功。火在水上，無法交感。事情尚未有最終結果，曙光在前，需做最後的努力，小心謹慎。' },
    '離艮': { name: '火山旅', desc: '客旅在外，流動性大。山上有火，一燒即過。出外謀生或旅行之象，行事宜謙虛守禮，以防孤立無援。' },
    '離坤': { name: '火地晉', desc: '前進與升遷。太陽從地平線升起，光明普照。事業順利，能得到長輩或貴人的提攜，宜乘勢而上。' },
    
    // 震宮
    '震乾': { name: '雷天大壯', desc: '聲勢浩大，強盛壯大。雷行天上，陽氣大盛。利於採取積極行動，但切記不可鋒芒太露，以防觸藩。' },
    '震兌': { name: '雷澤歸妹', desc: '本末倒置。澤上有雷，違反常理的結合。女子主動出嫁，行事容易缺乏原則，需慎防有始無終。' },
    '震離': { name: '雷火豐', desc: '豐收與盛大。雷電齊發，光明燦爛。正值全盛時期，但要預防「日中則昃」的自然規律，防盛極而衰。' },
    '震震': { name: '震為雷', desc: '警醒與震動。雷聲隆隆，令人恐懼。象徵局勢動盪或突發事件，但若能反省修德，反而能因警惕而獲吉。' },
    '震巽': { name: '雷風恆', desc: '持久與恆常。雷動風散，兩相配合。象徵堅守信念，長久不變。夫妻和睦，做事貴在持之以恆。' },
    '震坎': { name: '雷水解', desc: '解除困境。雷雨大作，萬物釋放。困難與壓力已經消散，此時宜快刀斬亂麻，主動出擊，休養生息。' },
    '震艮': { name: '雷山小過', desc: '微小過度，宜守正。山上有雷，音訊傳遞小。此時不宜做大事，應保持謙虛、低調，從小處著手方吉。' },
    '震坤': { name: '雷地豫', desc: '和樂與預備。雷出地上，春雷發動。人心喜悅，順應形勢。利於制定計劃、招兵買馬或休閒娛樂。' },

    // 巽宮
    '巽乾': { name: '風天小畜', desc: '微小的積蓄。風行天上，密雲不雨。力量尚薄弱，時機未成熟，宜積德累功，忍耐等待，不宜強求。' },
    '巽兌': { name: '風澤中孚', desc: '誠信與同理心。風行澤上，水波感應。心中誠信能感化他人與動物。利於談判、合作與調解。' },
    '巽離': { name: '風火家人', desc: '治家有道，內部和睦。風自火出，長幼有序。做事應注重內部結構與團隊和諧，各司其職，修身齊家。' },
    '巽震': { name: '風雷益', desc: '增益與進步。風雷交加，互相助長。有利於開創、擴張事業、求取功名，應把握機會積極進取。' },
    '巽巽': { name: '巽為風', desc: '柔順滲透。隨風起舞，順應時勢。做事要虛心謙下，聽取專家意見，採取溫和的方式逐步滲透。' },
    '巽坎': { name: '風水渙', desc: '渙散與消解。風行水上，水花四濺。象徵人心渙散或危機消除。宜建立共同信仰，凝聚民心，涉大川。' },
    '巽艮': { name: '風山漸', desc: '循序漸進。山上木茂，緩慢生長。如同女子出嫁，步驟不可紊亂。按部就班方能取得持久的成功。' },
    '巽坤': { name: '風地觀', desc: '觀察與瞻仰。風行地上，周遊列國。此時宜靜觀其變，審視大局，檢討自身得失，不宜輕易投資。' },
    
    // 坎宮
    '坎乾': { name: '水天需', desc: '等待時機。雲在天上，雨未落下。前面有險阻（水），應在岸邊耐心等待，儲備體力（飲食），時機到自通。' },
    '坎兌': { name: '水澤節', desc: '節制與限度。澤容納水，滿則溢。象徵做事要有分寸與限制。節約能保平安，但不可過度嚴苛。' },
    '坎離': { name: '水火既濟', desc: '事情成功。水在火上，水火交融。諸事皆已就緒，完美和諧。但要慎防「初吉終亂」，注意後續維護。' },
    '坎震': { name: '水雷屯', desc: '創業維艱，起始困難。雲雷交加，草創未開。雖然萬事開頭難，但蘊含生機，宜尋找輔佐，打好根基。' },
    '坎巽': { name: '水風井', desc: '源源不絕，維持不變。木桶入井汲水。象徵基礎結構穩定，默默奉獻。做事應堅守崗位，不宜改行。' },
    '坎坎': { name: '坎為水', desc: '重重險陷。水流不息，面臨多重危機。必須保持誠信與冷靜，憑藉勇氣與智慧隨方就圓，方能脫險。' },
    '坎艮': { name: '水山蹇', desc: '前路險阻。前有大水，後有高山，進退維谷。此時不宜冒險前行，宜往西南方向求助貴人，以退為進。' },
    '坎坤': { name: '水地比', desc: '親近依附。水流地上，融為一體。象徵相親相輔、團結合作。利於建立人際網絡，尋找志同道合的合作者。' },
    
    // 艮宮
    '艮乾': { name: '山天大畜', desc: '大有積蓄。天在山中，藏量巨大。利於積累學識、儲存資金。不食於家，利於出外發展或大舉投資。' },
    '艮兌': { name: '山澤損', desc: '減損與奉獻。山下有澤，澤水浸潤山基。象徵損己利人，減少物質追求以提升精神境界。誠信為本。' },
    '艮離': { name: '山火賁', desc: '裝飾與美化。山下有火，照亮山景。象徵裝飾、文飾與禮儀。只宜辦理小事，不宜做重大決定。' },
    '艮震': { name: '山雷頤', desc: '養育與言行防範。山下有雷，頤養天年。注意保養身體與自我修行，謹言慎行，管好口腹之慾。' },
    '艮巽': { name: '山風蠱', desc: '整頓整治。山下有風，風吹不入則生蟲。象徵內部腐敗，危機四伏。必須下定決心掃除積弊。' },
    '艮坎': { name: '山水蒙', desc: '啟蒙與教育。山下流泉，霧氣籠罩。象徵朦朧無知，需要真誠求教，接受啟蒙。忌三心二意與浮躁。' },
    '艮艮': { name: '艮為山', desc: '靜止與止步。兩山重疊，重巒疊嶂。象徵行止有度，該動則動，該靜則靜。此時宜靜不宜動，收斂心神。' },
    '艮坤': { name: '山地剝', desc: '剝落衰退。山附於地，基底動搖。象徵陰盛陽衰，小人得勢。此時不宜有任何積極舉動，宜隱忍自保。' },
    
    // 坤宮
    '坤乾': { name: '地天泰', desc: '國泰民安，和諧通暢。地氣下降，天氣上升，水乳交融。象徵大往小來，諸事順遂，正值發展黃金期。' },
    '坤兌': { name: '地澤臨', desc: '居高臨下，前途光明。地在澤上，水氣上升。象徵領導管理、貴人親臨。利於推進工作，但需防八月有凶。' },
    '坤離': { name: '地火明夷', desc: '光明受損。太陽沈入地下，象徵黑暗重重。此時面臨危機，宜外愚內智，收斂鋒芒，韜光養晦以自全。' },
    '坤震': { name: '地雷復', desc: '生機重現，一陽復始。雷在地中，蓄勢待發。經歷低谷後迎來轉機，此時宜循序漸進，不宜急躁。' },
    '坤巽': { name: '地風升', desc: '步步高升。木生地下，向上生長。象徵職位升遷、事業擴張。利於拜見貴人，積極爭取進步，大吉。' },
    '坤坎': { name: '地水師', desc: '行軍打仗，組織紀律。地底藏水，象徵軍隊與紀律。做事需要嚴密的組織、強有力的領導及堅守正義。' },
    '坤艮': { name: '地山謙', desc: '謙虛有禮，吉無不利。山隱於地下，象徵高尚品德而不自顯。謙虛待人，終能獲得眾人擁戴與成功。' },
    '坤坤': { name: '坤為地', desc: '柔順包容，厚德載物。象徵大地之德，利於配合、輔佐他人，忌做領頭羊。堅守正道，溫和包容則吉。' }
};

// 64 Hexagrams to 8 Palaces mapping (本宮對照表)
const HEX_PALACES = {
    // 乾宮
    '乾為天': '乾', '天風姤': '乾', '天山遯': '乾', '天地否': '乾', 
    '風地觀': '乾', '山地剝': '乾', '火地晉': '乾', '火天大有': '乾',
    // 兌宮
    '兌為澤': '兌', '澤水困': '兌', '澤地萃': '兌', '澤山咸': '兌', 
    '水山蹇': '兌', '地山謙': '兌', '雷山小過': '兌', '雷澤歸妹': '兌',
    // 離宮
    '離為火': '離', '火山旅': '離', '火風鼎': '離', '火水未濟': '離', 
    '山水蒙': '離', '風水渙': '離', '天水訟': '離', '天火同人': '離',
    // 震宮
    '震為雷': '震', '雷地豫': '震', '雷水解': '震', '雷風恆': '震', 
    '地風升': '震', '水風井': '震', '澤風大過': '震', '澤雷隨': '震',
    // 巽宮
    '巽為風': '巽', '風天小畜': '巽', '風火家人': '巽', '風雷益': '巽', 
    '天雷無妄': '巽', '天雷无妄': '巽',
    '火雷噬嗑': '巽', '山雷頤': '巽', '山風蠱': '巽',
    // 坎宮
    '坎為水': '坎', '水澤節': '坎', '水雷屯': '坎', '水火既濟': '坎', 
    '澤火革': '坎', '雷火豐': '坎', '地火明夷': '坎', '地水師': '坎',
    // 艮宮
    '艮為山': '艮', '山火賁': '艮', '山天大畜': '艮', '山澤損': '艮', 
    '火澤睽': '艮', '天澤履': '艮', '風澤中孚': '艮', '風山漸': '艮',
    // 坤宮
    '坤為地': '坤', '地雷復': '坤', '地澤臨': '坤', '地天泰': '坤', 
    '雷天大壯': '坤', '澤天夬': '坤', '水天需': '坤', '水地比': '坤'
};

// 64 Hexagrams to Shi (世) line index mapping (0-indexed: 0=初爻, 5=上爻)
const HEX_SHI = {
    // 乾宮
    '乾為天': 5, '天風姤': 0, '天山遯': 1, '天地否': 2, '風地觀': 3, '山地剝': 4, '火地晉': 3, '火天大有': 2,
    // 兌宮
    '兌為澤': 5, '澤水困': 0, '澤地萃': 1, '澤山咸': 2, '水山蹇': 3, '地山謙': 4, '雷山小過': 3, '雷澤歸妹': 2,
    // 離宮
    '離為火': 5, '火山旅': 0, '火風鼎': 1, '火水未濟': 2, '山水蒙': 3, '風水渙': 4, '天水訟': 3, '天火同人': 2,
    // 震宮
    '震為雷': 5, '雷地豫': 0, '雷水解': 1, '雷風恆': 2, '地風升': 3, '水風井': 4, '澤風大過': 3, '澤雷隨': 2,
    // 巽宮
    '巽為風': 5, '風天小畜': 0, '風火家人': 1, '風雷益': 2, '天雷无妄': 3, '天雷無妄': 3, '火雷噬嗑': 4, '山雷頤': 3, '山風蠱': 2,
    // 坎宮
    '坎為水': 5, '水澤節': 0, '水雷屯': 1, '水火既濟': 2, '澤火革': 3, '雷火豐': 4, '地火明夷': 3, '地水師': 2,
    // 艮宮
    '艮為山': 5, '山火賁': 0, '山天大畜': 1, '山澤損': 2, '火澤睽': 3, '天澤履': 4, '風澤中孚': 3, '風山漸': 2,
    // 坤宮
    '坤為地': 5, '地雷復': 0, '地澤臨': 1, '地天泰': 2, '雷天大壯': 3, '澤天夬': 4, '水天需': 3, '水地比': 2
};

// Palace Five Element Mapping (本宮五行屬性對照)
const PALACE_ELEMENTS = {
    '乾': '金', '兌': '金',
    '離': '火',
    '震': '木', '巽': '木',
    '坎': '水',
    '艮': '土', '坤': '土'
};

/* ==========================================================================
   Application State
   ========================================================================== */
let appState = {
    selectedDate: new Date(),
    recordedLines: [null, null, null, null, null, null], // Line 1 to 6 (index 0 to 5)
    currentActiveIndex: 0, // start with line 1 (index 0)
    history: []
};

// Map of names for display
const LINE_NAMES = ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];

/* ==========================================================================
   DOM Element Cache
   ========================================================================== */
const elements = {
    statusBarTime: document.getElementById('statusBarTime'),
    btnThemeToggle: document.getElementById('btnThemeToggle'),
    solarDateText: document.getElementById('solarDateText'),
    timeText: document.getElementById('timeText'),
    solarDatePicker: document.getElementById('solarDatePicker'),
    stemYear: document.getElementById('stemYear'),
    branchYear: document.getElementById('branchYear'),
    stemMonth: document.getElementById('stemMonth'),
    branchMonth: document.getElementById('branchMonth'),
    stemDay: document.getElementById('stemDay'),
    branchDay: document.getElementById('branchDay'),
    stemHour: document.getElementById('stemHour'),
    branchHour: document.getElementById('branchHour'),
    xkDay: document.getElementById('xkDay'),
    ymDay: document.getElementById('ymDay'),
    
    recordStatus: document.getElementById('recordStatus'),
    linesList: document.getElementById('linesList'),
    palaceHeaderInfo: document.getElementById('palaceHeaderInfo'),
    
    tossArena: document.getElementById('tossArena'),
    coin1: document.getElementById('coin1'),
    coin2: document.getElementById('coin2'),
    coin3: document.getElementById('coin3'),
    tossResultText: document.getElementById('tossResultText'),
    
    analysisCard: document.getElementById('analysisCard'),
    originalMiniLines: document.getElementById('originalMiniLines'),
    originalHexName: document.getElementById('originalHexName'),
    originalTrigrams: document.getElementById('originalTrigrams'),
    changedMiniLines: document.getElementById('changedMiniLines'),
    changedHexName: document.getElementById('changedHexName'),
    changedTrigrams: document.getElementById('changedTrigrams'),
    hexSummaryText: document.getElementById('hexSummaryText'),
    recordNotes: document.getElementById('recordNotes'),
    btnSpeechRecord: document.getElementById('btnSpeechRecord'),
    btnSaveRecord: document.getElementById('btnSaveRecord'),
    
    btnRestart: document.getElementById('btnRestart'),
    btnToss: document.getElementById('btnToss'),
    btnOpenHistory: document.getElementById('btnOpenHistory'),
    
    historyDrawer: document.getElementById('historyDrawer'),
    btnCloseHistory: document.getElementById('btnCloseHistory'),
    drawerOverlay: document.getElementById('drawerOverlay'),
    historyList: document.getElementById('historyList'),
    historySearchInput: document.getElementById('historySearchInput'),
    
    editModal: document.getElementById('editModal'),
    modalLineName: document.getElementById('modalLineName'),
    btnCancelEdit: document.getElementById('btnCancelEdit'),
    
    // Inputs (0, 1, 2, 3)
    btnInputs: [
        document.getElementById('btnInput0'),
        document.getElementById('btnInput1'),
        document.getElementById('btnInput2'),
        document.getElementById('btnInput3')
    ]
};

/* ==========================================================================
   Speech Recognition Helpers
   ========================================================================== */
let recognitionInstance = null;

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        // Speech Recognition not supported in this browser, hide the button
        if (elements.btnSpeechRecord) {
            elements.btnSpeechRecord.style.display = 'none';
        }
        return;
    }

    recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'zh-TW';
    recognitionInstance.continuous = false; // stops when user stops speaking
    recognitionInstance.interimResults = false;

    recognitionInstance.onstart = () => {
        if (elements.btnSpeechRecord) {
            elements.btnSpeechRecord.classList.add('recording');
            elements.btnSpeechRecord.innerHTML = '🔴 正在聆聽...';
        }
    };

    recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        cleanupSpeechUI();
        if (event.error === 'not-allowed') {
            alert("無法存取麥克風，請確認瀏覽器語音授權！");
        }
    };

    recognitionInstance.onend = () => {
        cleanupSpeechUI();
    };

    recognitionInstance.onresult = (event) => {
        const resultText = event.results[0][0].transcript;
        if (resultText && elements.recordNotes) {
            const currentVal = elements.recordNotes.value.trim();
            elements.recordNotes.value = currentVal ? `${currentVal} ${resultText}` : resultText;
        }
    };
}

function cleanupSpeechUI() {
    if (elements.btnSpeechRecord) {
        elements.btnSpeechRecord.classList.remove('recording');
        elements.btnSpeechRecord.innerHTML = '🎤 語音輸入';
    }
}

function toggleSpeechRecording() {
    if (!recognitionInstance) {
        initSpeechRecognition();
    }
    
    if (!recognitionInstance) return; // not supported

    if (elements.btnSpeechRecord && elements.btnSpeechRecord.classList.contains('recording')) {
        recognitionInstance.stop();
    } else {
        try {
            recognitionInstance.start();
        } catch (e) {
            console.error("Error starting speech recognition:", e);
        }
    }
}

/* ==========================================================================
   Theme Management (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
    const savedTheme = localStorage.getItem('LiuYaoTheme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (elements.btnThemeToggle) {
            elements.btnThemeToggle.innerText = '🌙';
        }
    } else {
        document.body.classList.remove('light-theme');
        if (elements.btnThemeToggle) {
            elements.btnThemeToggle.innerText = '☀️';
        }
    }
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    const newTheme = isLight ? 'light' : 'dark';
    localStorage.setItem('LiuYaoTheme', newTheme);
    if (elements.btnThemeToggle) {
        elements.btnThemeToggle.innerText = isLight ? '🌙' : '☀️';
    }
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

/* ==========================================================================
   Initialization & Date Handling
   ========================================================================== */
function init() {
    // 0. Initialize theme setting
    initTheme();
    
    // 1. Setup real-time status bar clock
    updateClock();
    setInterval(updateClock, 1000 * 30);
    
    // 2. Set default date
    const now = new Date();
    appState.selectedDate = now;
    
    // Convert to timezone adjusted ISO local format: YYYY-MM-DDTHH:MM
    const localIso = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    elements.solarDatePicker.value = localIso;
    
    updateChineseCalendar(now);
    
    // 3. Bind UI event listeners
    bindEvents();
    
    // 4. Initialize Speech Recognition
    initSpeechRecognition();
    
    // 5. Render initial empty lines
    renderLines();
    
    // 6. Load History
    loadHistoryFromStorage();
}

function updateClock() {
    const now = new Date();
    elements.statusBarTime.innerText = now.toTimeString().slice(0, 5);
}

// Compute Heavenly Stems, Earthly Branches, and Xun Kong using lunar-javascript
function updateChineseCalendar(date) {
    // Set human-readable Solar date texts
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    elements.solarDateText.innerText = `${year}年${month}月${day}日 ${hours}時`;
    elements.timeText.innerText = `${minutes}分`;
    
    try {
        // Core calculation using the Lunar library
        const lunar = Lunar.fromDate(date);
        const eightChar = lunar.getEightChar();
        
        const yearGanZhi = eightChar.getYear(); // e.g. "丙午"
        const monthGanZhi = eightChar.getMonth(); // e.g. "癸巳"
        const dayGanZhi = eightChar.getDay(); // e.g. "癸酉"
        const hourGanZhi = eightChar.getTime(); // e.g. "癸亥"
        const dayXunKong = eightChar.getDayXunKong(); // e.g. "戌亥"
        appState.dayStem = dayGanZhi[0] || '甲';
        
        elements.stemYear.innerText = yearGanZhi[0] || '-';
        elements.branchYear.innerText = yearGanZhi[1] || '-';
        
        elements.stemMonth.innerText = monthGanZhi[0] || '-';
        elements.branchMonth.innerText = monthGanZhi[1] || '-';
        
        elements.stemDay.innerText = dayGanZhi[0] || '-';
        elements.branchDay.innerText = dayGanZhi[1] || '-';
        
        elements.stemHour.innerText = hourGanZhi[0] || '-';
        elements.branchHour.innerText = hourGanZhi[1] || '-';
        
        const dayBranch = dayGanZhi[1];
        let yiMa = '';
        if (dayBranch) {
            if ('申子辰'.includes(dayBranch)) yiMa = '寅';
            else if ('寅午戌'.includes(dayBranch)) yiMa = '申';
            else if ('巳酉丑'.includes(dayBranch)) yiMa = '亥';
            else if ('亥卯未'.includes(dayBranch)) yiMa = '巳';
        }
        elements.ymDay.innerText = yiMa ? `馬在${yiMa}` : '馬未知';
        elements.xkDay.innerText = dayXunKong + '空';
    } catch (e) {
        console.error("Calendar conversion error: ", e);
        elements.stemYear.innerText = '-';
        elements.branchYear.innerText = '-';
        elements.stemMonth.innerText = '-';
        elements.branchMonth.innerText = '-';
        elements.stemDay.innerText = '-';
        elements.branchDay.innerText = '-';
        elements.stemHour.innerText = '-';
        elements.branchHour.innerText = '-';
        elements.ymDay.innerText = '馬未知';
        elements.xkDay.innerText = '旬空未知';
    }
}

/* ==========================================================================
   UI Event Bindings
   ========================================================================== */
function bindEvents() {
    // Date selection change
    elements.solarDatePicker.addEventListener('change', (e) => {
        if (e.target.value) {
            const date = new Date(e.target.value);
            appState.selectedDate = date;
            updateChineseCalendar(date);
            renderLines();
        }
    });
    
    // Action inputs (0, 1, 2, 3 buttons)
    elements.btnInputs.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            recordLineValue(idx);
        });
    });
    
    // Clear and Restart
    elements.btnRestart.addEventListener('click', resetRecording);
    
    // Virtual Coin Toss
    elements.btnToss.addEventListener('click', triggerCoinTossAnimation);
    
    // Save Hexagram Record
    elements.btnSaveRecord.addEventListener('click', saveCurrentRecord);
    
    // Speech Recognition
    if (elements.btnSpeechRecord) {
        elements.btnSpeechRecord.addEventListener('click', toggleSpeechRecording);
    }
    
    // History Drawer triggers
    elements.btnOpenHistory.addEventListener('click', openHistoryDrawer);
    elements.btnCloseHistory.addEventListener('click', closeHistoryDrawer);
    elements.drawerOverlay.addEventListener('click', closeHistoryDrawer);
    elements.historySearchInput.addEventListener('input', renderHistoryList);
    
    // Theme switch trigger
    if (elements.btnThemeToggle) {
        elements.btnThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Modal events
    elements.btnCancelEdit.addEventListener('click', closeEditModal);
}

/* ==========================================================================
   Na Jia Earthly Branch Calculation Helper
   ========================================================================== */
function getTrigramNaJia(trigramName, isOuter, lineIdxInTrigram) {
    const branches = {
        '乾': ['子', '寅', '辰', '午', '申', '戌'],
        '震': ['子', '寅', '辰', '午', '申', '戌'],
        '坎': ['寅', '辰', '午', '申', '戌', '子'],
        '艮': ['辰', '午', '申', '戌', '子', '寅'],
        '坤': ['未', '巳', '卯', '丑', '亥', '酉'],
        '巽': ['丑', '亥', '酉', '未', '巳', '卯'],
        '離': ['卯', '丑', '亥', '酉', '未', '巳'],
        '兌': ['巳', '卯', '丑', '亥', '酉', '未']
    };
    
    const list = branches[trigramName];
    if (!list) return '';
    
    const offset = isOuter ? 3 : 0;
    return list[offset + lineIdxInTrigram];
}

/* ==========================================================================
   Core Logic: Line Recording State Machine
   ========================================================================== */
const BEASTS_CYCLE = ['青龍', '朱雀', '勾陳', '螣蛇', '白虎', '玄武'];

function getSixBeasts(dayStem) {
    const startBeasts = {
        '甲': 0, '乙': 0,
        '丙': 1, '丁': 1,
        '戊': 2,
        '己': 3,
        '庚': 4, '辛': 4,
        '壬': 5, '癸': 5
    };
    const startIndex = startBeasts[dayStem];
    if (startIndex === undefined) return ['', '', '', '', '', ''];
    
    const beasts = [];
    for (let i = 0; i < 6; i++) {
        beasts.push(BEASTS_CYCLE[(startIndex + i) % 6]);
    }
    return beasts;
}

function renderLines() {
    // Check if lower trigram is complete (Lines 0, 1, 2)
    const lowerComplete = appState.recordedLines[0] !== null && 
                          appState.recordedLines[1] !== null && 
                          appState.recordedLines[2] !== null;
                          
    // Check if upper trigram is complete (Lines 3, 4, 5)
    const upperComplete = appState.recordedLines[3] !== null && 
                          appState.recordedLines[4] !== null && 
                          appState.recordedLines[5] !== null;
                          
    let lowerTrigramName = '';
    let lowerChangedTrigramName = '';
    if (lowerComplete) {
        const lowerBinary = appState.recordedLines.slice(0, 3).map(v => (v === 2 || v === 0) ? '1' : '0').join('');
        lowerTrigramName = TRIGRAMS[lowerBinary].name;
        
        const lowerChangedBinary = appState.recordedLines.slice(0, 3).map(v => (v === 2 || v === 3) ? '1' : '0').join('');
        lowerChangedTrigramName = TRIGRAMS[lowerChangedBinary].name;
    }
    
    let upperTrigramName = '';
    let upperChangedTrigramName = '';
    if (upperComplete) {
        const upperBinary = appState.recordedLines.slice(3, 6).map(v => (v === 2 || v === 0) ? '1' : '0').join('');
        upperTrigramName = TRIGRAMS[upperBinary].name;
        
        const upperChangedBinary = appState.recordedLines.slice(3, 6).map(v => (v === 2 || v === 3) ? '1' : '0').join('');
        upperChangedTrigramName = TRIGRAMS[upperChangedBinary].name;
    }

    // Check if both upper and lower trigrams are complete, which means the whole hexagram is complete
    const hexComplete = lowerComplete && upperComplete;
    let palaceName = '';
    let shiIndex = -1;
    let yingIndex = -1;
    if (hexComplete) {
        // Resolve Original Hexagram Name
        const origBinary = appState.recordedLines.map(val => (val === 2 || val === 0) ? '1' : '0');
        const origLowerKey = origBinary.slice(0, 3).join('');
        const origUpperKey = origBinary.slice(3, 6).join('');
        const origHexKey = TRIGRAMS[origUpperKey].name + TRIGRAMS[origLowerKey].name;
        const origHexName = HEXAGRAMS[origHexKey] ? HEXAGRAMS[origHexKey].name : '';
        palaceName = HEX_PALACES[origHexName] || '';
        
        // Show Palace and its Five Elements in the top-left in red
        if (palaceName) {
            elements.palaceHeaderInfo.innerHTML = `${palaceName}宮屬${PALACE_ELEMENTS[palaceName]}`;
        } else {
            elements.palaceHeaderInfo.innerHTML = '';
        }
        
        // Calculate Shi and Ying indices
        if (origHexName) {
            shiIndex = HEX_SHI[origHexName];
            if (shiIndex !== undefined) {
                yingIndex = (shiIndex + 3) % 6;
            }
        }
    } else {
        elements.palaceHeaderInfo.innerHTML = '';
    }

    // Determine Six Beasts based on Day Stem
    const beasts = getSixBeasts(appState.dayStem || '甲');

    // Loop through Line 6 down to Line 1 (indices 5 to 0) to update rows
    for (let i = 5; i >= 0; i--) {
        const value = appState.recordedLines[i];
        const row = document.getElementById(`lineRow-${i}`);
        const symbolContainer = document.getElementById(`symbol-${i}`);
        const beastSpan = document.getElementById(`beast-${i}`);
        const palaceSpan = document.getElementById(`palace-${i}`);
        const najiaSpan = document.getElementById(`najia-${i}`);
        const shiyingSpan = document.getElementById(`shiying-${i}`);
        
        // Remove active state
        row.classList.remove('active', 'completed');
        
        // Render Six Beasts
        const beastName = beasts[i] || '';
        beastSpan.innerText = beastName;
        beastSpan.className = `line-beast beast-${beastName}`;
        
        if (value === null) {
            // Unrecorded state
            symbolContainer.innerHTML = '<div class="symbol-empty"></div>';
            najiaSpan.innerHTML = '';
            palaceSpan.innerHTML = '';
            
            if (i === appState.currentActiveIndex) {
                row.classList.add('active');
            }
        } else {
            // Recorded state
            row.classList.add('completed');
            
            // Draw CSS custom shapes based on user requirement:
            // 0=圓圈, 1=左右兩橫, 2=一橫, 3=叉叉
            if (value === 0) {
                symbolContainer.innerHTML = '<div class="symbol-0-circle"></div>';
            } else if (value === 1) {
                symbolContainer.innerHTML = '<div class="symbol-1-broken"></div>';
            } else if (value === 2) {
                symbolContainer.innerHTML = '<div class="symbol-2-solid"></div>';
            } else if (value === 3) {
                symbolContainer.innerHTML = '<div class="symbol-3-cross"></div>';
            }

            // Update Na Jia earthly branch text (Original and Changed branches)
            let najiaHtml = '';
            if (i < 3 && lowerComplete) {
                const origBranch = getTrigramNaJia(lowerTrigramName, false, i);
                const changedBranch = getTrigramNaJia(lowerChangedTrigramName, false, i);
                
                if (value === 0 || value === 3) {
                    // Moving line: change is shown in emerald with an arrow
                    najiaHtml = `${origBranch} <span class="najia-arrow">➔</span> <span class="najia-change">${changedBranch}</span>`;
                } else {
                    // Static line: change is shown in purple, with hidden arrow for alignment
                    najiaHtml = `${origBranch} <span class="najia-arrow static-arrow">➔</span> <span class="najia-change-static">${changedBranch}</span>`;
                }
            } else if (i >= 3 && upperComplete) {
                const origBranch = getTrigramNaJia(upperTrigramName, true, i - 3);
                const changedBranch = getTrigramNaJia(upperChangedTrigramName, true, i - 3);
                
                if (value === 0 || value === 3) {
                    // Moving line: change is shown in emerald with an arrow
                    najiaHtml = `${origBranch} <span class="najia-arrow">➔</span> <span class="najia-change">${changedBranch}</span>`;
                } else {
                    // Static line: change is shown in purple, with hidden arrow for alignment
                    najiaHtml = `${origBranch} <span class="najia-arrow static-arrow">➔</span> <span class="najia-change-static">${changedBranch}</span>`;
                }
            }
            najiaSpan.innerHTML = najiaHtml;

            // Render Palace branch on the left of symbol in red when hexagram is complete
            if (hexComplete && palaceName) {
                const isOuter = i >= 3;
                const lineIdxInTrigram = isOuter ? (i - 3) : i;
                palaceSpan.innerHTML = getTrigramNaJia(palaceName, isOuter, lineIdxInTrigram);
            } else {
                palaceSpan.innerHTML = '';
            }
        }
        
        // Render Shi/Ying in white
        if (hexComplete && (i === shiIndex || i === yingIndex)) {
            shiyingSpan.innerText = i === shiIndex ? '世' : '應';
        } else {
            shiyingSpan.innerText = '';
        }
        
        // Bind single click event for line editing
        row.onclick = () => {
            openEditModal(i);
        };
    }
}

function recordLineValue(value) {
    if (appState.currentActiveIndex >= 6) return;
    
    // Play a subtle click vibration effect if supported
    if (navigator.vibrate) navigator.vibrate(40);
    
    appState.recordedLines[appState.currentActiveIndex] = value;
    appState.currentActiveIndex++;
    
    renderLines();
    
    // Update status text
    if (appState.currentActiveIndex < 6) {
        elements.recordStatus.innerText = `已記錄 ${appState.currentActiveIndex} 爻，請記錄下一爻 (${LINE_NAMES[appState.currentActiveIndex]})`;
    } else {
        elements.recordStatus.innerText = '六爻已完成記錄，卦象解析已生成';
        analyzeHexagram();
    }
}

function resetRecording() {
    appState.recordedLines = [null, null, null, null, null, null];
    appState.currentActiveIndex = 0;
    elements.recordStatus.innerText = '請點擊下方按鈕，由下往上記錄六爻';
    elements.analysisCard.style.display = 'none';
    elements.recordNotes.value = '';
    renderLines();
}

/* ==========================================================================
   Virtual Tossing Logic (Three Coins)
   ========================================================================== */
let isTossing = false;

function triggerCoinTossAnimation() {
    if (isTossing || appState.currentActiveIndex >= 6) return;
    isTossing = true;
    
    // Hide standard list and show coin toss arena
    elements.linesList.style.display = 'none';
    elements.tossArena.style.display = 'block';
    elements.tossResultText.innerText = '搖動金幣中...';
    
    // Add flipping animations
    elements.coin1.className = 'coin flipping';
    elements.coin2.className = 'coin flipping';
    elements.coin3.className = 'coin flipping';
    
    // Randomize results
    const coin1Heads = Math.random() > 0.5;
    const coin2Heads = Math.random() > 0.5;
    const coin3Heads = Math.random() > 0.5;
    
    // Calculation: Heads = Yang (value 0), Tails = Yin (value 3)
    // 3 Tails (0 Heads) = 6 -> 老陰 (3)
    // 2 Tails 1 Head (1 Head) = 7 -> 少陽 (2)
    // 1 Tail 2 Heads (2 Heads) = 8 -> 少陰 (1)
    // 3 Heads = 9 -> 老陽 (0)
    const headsCount = (coin1Heads ? 1 : 0) + (coin2Heads ? 1 : 0) + (coin3Heads ? 1 : 0);
    
    let resultValue = 1;
    let resultLabel = "";
    if (headsCount === 0) {
        resultValue = 3; // 老陰
        resultLabel = "三背：老陰 ✗";
    } else if (headsCount === 1) {
        resultValue = 2; // 少陽
        resultLabel = "一字二背：少陽 ⚊";
    } else if (headsCount === 2) {
        resultValue = 1; // 少陰
        resultLabel = "二字一背：少陰 ⚋";
    } else if (headsCount === 3) {
        resultValue = 0; // 老陽
        resultLabel = "三字：老陽 ◯";
    }
    
    setTimeout(() => {
        // Stop spinning
        elements.coin1.className = `coin ${coin1Heads ? 'face-heads' : 'face-tails'}`;
        elements.coin2.className = `coin ${coin2Heads ? 'face-heads' : 'face-tails'}`;
        elements.coin3.className = `coin ${coin3Heads ? 'face-heads' : 'face-tails'}`;
        
        elements.coin1.innerText = coin1Heads ? '陽' : '陰';
        elements.coin2.innerText = coin2Heads ? '陽' : '陰';
        elements.coin3.innerText = coin3Heads ? '陽' : '陰';
        
        elements.tossResultText.innerText = `結果：${resultLabel}`;
        
        // Save to state and go to next line
        setTimeout(() => {
            elements.tossArena.style.display = 'none';
            elements.linesList.style.display = 'flex';
            isTossing = false;
            
            recordLineValue(resultValue);
        }, 1200);
        
    }, 1000);
}

/* ==========================================================================
   Hexagram Analysis Algorithm
   ========================================================================== */
function analyzeHexagram() {
    const lines = appState.recordedLines;
    
    // Check that all 6 lines are complete
    if (lines.includes(null)) return;
    
    // 1. Resolve Original Hexagram (本卦)
    // Map values to Yin(0)/Yang(1)
    // 2 (少陽) & 0 (老陽) are Yang
    // 3 (老陰) & 1 (少陰) are Yin
    const origBinary = lines.map(val => (val === 2 || val === 0) ? '1' : '0');
    const origLowerKey = origBinary.slice(0, 3).join('');
    const origUpperKey = origBinary.slice(3, 6).join('');
    
    const origLowerTrigram = TRIGRAMS[origLowerKey];
    const origUpperTrigram = TRIGRAMS[origUpperKey];
    
    const origHexKey = origUpperTrigram.name + origLowerTrigram.name;
    const origHexInfo = HEXAGRAMS[origHexKey] || { name: '未知卦', desc: '無法識別此卦象' };
    
    // 2. Resolve Changed Hexagram (變卦)
    // Moving lines change states:
    // 2 (少陽, static Yang) -> Yang (1)
    // 3 (老陰, moving Yin) -> Yang (1)
    // 1 (少陰, static Yin) -> Yin (0)
    // 0 (老陽, moving Yang) -> Yin (0)
    const changedBinary = lines.map(val => (val === 2 || val === 3) ? '1' : '0');
    const changedLowerKey = changedBinary.slice(0, 3).join('');
    const changedUpperKey = changedBinary.slice(3, 6).join('');
    
    const changedLowerTrigram = TRIGRAMS[changedLowerKey];
    const changedUpperTrigram = TRIGRAMS[changedUpperKey];
    
    const changedHexKey = changedUpperTrigram.name + changedLowerTrigram.name;
    const changedHexInfo = HEXAGRAMS[changedHexKey] || { name: '未知卦', desc: '無法識別此卦象' };
    
    // 3. Render analysis UI details
    elements.originalHexName.innerText = origHexInfo.name;
    elements.originalTrigrams.innerText = `${origUpperTrigram.nature} / ${origLowerTrigram.nature}`;
    
    elements.changedHexName.innerText = changedHexInfo.name;
    elements.changedTrigrams.innerText = `${changedUpperTrigram.nature} / ${changedLowerTrigram.nature}`;
    
    // Show Description
    elements.hexSummaryText.innerHTML = `
        <strong>【${origHexInfo.name}】</strong>: ${origHexInfo.desc}
        <br><br>
        <strong>變為【${changedHexInfo.name}】</strong>: ${changedHexInfo.desc}
    `;
    
    // Draw mini lines representations
    drawMiniDiagram(elements.originalMiniLines, origBinary);
    drawMiniDiagram(elements.changedMiniLines, changedBinary);
    
    // Slide up Card
    elements.analysisCard.style.display = 'block';
}

function drawMiniDiagram(container, binaryArray) {
    container.innerHTML = '';
    // Draw from line 6 (top, index 5) down to line 1 (bottom, index 0)
    for (let i = 5; i >= 0; i--) {
        const isYang = binaryArray[i] === '1';
        const lineDiv = document.createElement('div');
        if (isYang) {
            lineDiv.className = 'mini-line solid';
        } else {
            lineDiv.className = 'mini-line broken';
        }
        container.appendChild(lineDiv);
    }
}

/* ==========================================================================
   Single Line Editing Overlay Modal
   ========================================================================== */
let editingLineIndex = null;

function openEditModal(index) {
    editingLineIndex = index;
    elements.modalLineName.innerText = LINE_NAMES[index];
    elements.editModal.style.display = 'flex';
    
    // Bind buttons in grid
    const editOptions = elements.editModal.querySelectorAll('.btn-edit-option');
    editOptions.forEach(btn => {
        btn.onclick = (e) => {
            const val = parseInt(btn.getAttribute('data-value'));
            saveLineEditValue(val);
        };
    });
}

function closeEditModal() {
    elements.editModal.style.display = 'none';
    editingLineIndex = null;
}

function saveLineEditValue(val) {
    if (editingLineIndex === null) return;
    
    appState.recordedLines[editingLineIndex] = val;
    
    // If we are correcting an earlier line before finishing the whole hexagram,
    // let's adjust currentActiveIndex if needed.
    // If it was empty, we need to advance the index.
    let emptyIndex = appState.recordedLines.indexOf(null);
    if (emptyIndex === -1) {
        appState.currentActiveIndex = 6;
        elements.recordStatus.innerText = '六爻已完成記錄，卦象解析已生成';
        analyzeHexagram();
    } else {
        appState.currentActiveIndex = emptyIndex;
        elements.recordStatus.innerText = `已記錄到第 ${appState.currentActiveIndex} 爻，請記錄下一爻 (${LINE_NAMES[appState.currentActiveIndex]})`;
        elements.analysisCard.style.display = 'none';
    }
    
    renderLines();
    closeEditModal();
}

/* ==========================================================================
   localStorage Data Management (History Logs)
   ========================================================================== */
function loadHistoryFromStorage() {
    const raw = localStorage.getItem('LiuYaoHistory');
    if (raw) {
        try {
            appState.history = JSON.parse(raw);
        } catch (e) {
            console.error("Error reading localStorage: ", e);
            appState.history = [];
        }
    } else {
        appState.history = [];
    }
}

function saveHistoryToStorage() {
    localStorage.setItem('LiuYaoHistory', JSON.stringify(appState.history));
}

function saveCurrentRecord() {
    const lines = appState.recordedLines;
    if (lines.includes(null)) {
        alert("請先完成六爻紀錄！");
        return;
    }
    
    const notes = elements.recordNotes.value.trim();
    const date = appState.selectedDate;
    
    // Date formats
    const solarStr = `${date.getFullYear()}/${(date.getMonth()+1).toString().padStart(2,'0')}/${date.getDate().toString().padStart(2,'0')} ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`;
    
    // Chinese pillars from UI (computed previously)
    const gzY = elements.stemYear.innerText + elements.branchYear.innerText;
    const gzM = elements.stemMonth.innerText + elements.branchMonth.innerText;
    const gzD = elements.stemDay.innerText + elements.branchDay.innerText;
    const gzH = elements.stemHour.innerText + elements.branchHour.innerText;
    const xkD = elements.xkDay.innerText;
    const ymD = elements.ymDay.innerText;
    
    // Resolve Hexagram names
    const origBinary = lines.map(val => (val === 2 || val === 0) ? '1' : '0');
    const origHexName = HEXAGRAMS[TRIGRAMS[origBinary.slice(3, 6).join('')].name + TRIGRAMS[origBinary.slice(0, 3).join('')].name].name;
    
    const changedBinary = lines.map(val => (val === 2 || val === 3) ? '1' : '0');
    const changedHexName = HEXAGRAMS[TRIGRAMS[changedBinary.slice(3, 6).join('')].name + TRIGRAMS[changedBinary.slice(0, 3).join('')].name].name;
    
    // Create history item
    const newItem = {
        id: 'liuyao_' + Date.now(),
        timestamp: date.getTime(),
        solarDate: solarStr,
        gzYear: gzY,
        gzMonth: gzM,
        gzDay: gzD,
        gzHour: gzH,
        xkDay: xkD,
        yiMaDay: ymD,
        lines: [...lines],
        originalHex: origHexName,
        changedHex: changedHexName,
        notes: notes
    };
    
    // Save to beginning of array
    appState.history.unshift(newItem);
    saveHistoryToStorage();
    
    alert("占卦紀錄儲存成功！");
    
    // Reset and open history list
    resetRecording();
    openHistoryDrawer();
}

function openHistoryDrawer() {
    elements.historyDrawer.classList.add('open');
    elements.drawerOverlay.classList.add('open');
    renderHistoryList();
}

function closeHistoryDrawer() {
    elements.historyDrawer.classList.remove('open');
    elements.drawerOverlay.classList.remove('open');
}

function renderHistoryList() {
    elements.historyList.innerHTML = '';
    
    const filterKeyword = elements.historySearchInput.value.toLowerCase().trim();
    
    // Filter records
    const filtered = appState.history.filter(item => {
        if (!filterKeyword) return true;
        return (
            item.originalHex.toLowerCase().includes(filterKeyword) ||
            item.changedHex.toLowerCase().includes(filterKeyword) ||
            item.notes.toLowerCase().includes(filterKeyword) ||
            item.solarDate.includes(filterKeyword)
        );
    });
    
    if (filtered.length === 0) {
        elements.historyList.innerHTML = '<div class="empty-history">沒有相符的紀錄</div>';
        return;
    }
    
    filtered.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'history-item';
        
        // Mini hexagram preview (lines drawn vertically)
        const origBinary = item.lines.map(val => (val === 2 || val === 0) ? '1' : '0');
        let miniLinesHtml = '';
        for (let i = 5; i >= 0; i--) {
            miniLinesHtml += `<div class="preview-line ${origBinary[i] === '1' ? 'solid' : 'broken'}"></div>`;
        }
        
        itemDiv.innerHTML = `
            <div class="history-item-left">
                <div class="history-item-date-row">
                    <span class="history-item-date">${item.solarDate}</span>
                    <span class="history-item-gz">${item.gzDay}日 (${item.yiMaDay ? item.yiMaDay + ' ' : ''}${item.xkDay})</span>
                </div>
                <div class="history-item-names">${item.originalHex} ➔ ${item.changedHex}</div>
                <div class="history-item-notes">${item.notes ? item.notes : '無備忘筆記'}</div>
            </div>
            <div class="history-item-right">
                <div class="mini-hex-preview">
                    ${miniLinesHtml}
                </div>
                <button class="btn-delete-history" data-id="${item.id}" title="刪除">🗑</button>
            </div>
        `;
        
        // Tap item body to load record
        itemDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-delete-history')) return;
            loadHistoryItem(item);
        });
        
        // Tap delete icon
        itemDiv.querySelector('.btn-delete-history').addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm(`確定要刪除這筆在 ${item.solarDate} 的占卦紀錄嗎？`)) {
                deleteHistoryItem(item.id);
            }
        });
        
        elements.historyList.appendChild(itemDiv);
    });
}

function loadHistoryItem(item) {
    // Restore states
    appState.recordedLines = [...item.lines];
    appState.currentActiveIndex = 6;
    appState.selectedDate = new Date(item.timestamp);
    
    // Set UI date picker and Chinese info
    const localIso = new Date(appState.selectedDate.getTime() - appState.selectedDate.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    elements.solarDatePicker.value = localIso;
    updateChineseCalendar(appState.selectedDate);
    
    // Populate notes and status text
    elements.recordNotes.value = item.notes;
    elements.recordStatus.innerText = '載入歷史占卦紀錄';
    
    renderLines();
    analyzeHexagram();
    
    closeHistoryDrawer();
}

function deleteHistoryItem(id) {
    appState.history = appState.history.filter(item => item.id !== id);
    saveHistoryToStorage();
    renderHistoryList();
}

/* ==========================================================================
   Init App on Load
   ========================================================================== */
window.onload = init;
