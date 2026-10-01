document.addEventListener('DOMContentLoaded', () => {
    // AUDIO
    let audioCtx = null;
    function initAudio() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    window.playSound = function(type) {
        initAudio(); if(audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        if (type === 'click') { osc.type = 'sine'; osc.frequency.setValueAtTime(500, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1); gain.gain.setValueAtTime(0.2, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1); osc.start(); osc.stop(audioCtx.currentTime + 0.1); }
        else if (type === 'success') { osc.type = 'square'; osc.frequency.setValueAtTime(400, audioCtx.currentTime); osc.frequency.setValueAtTime(600, audioCtx.currentTime + 0.1); gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2); osc.start(); osc.stop(audioCtx.currentTime + 0.2); }
        else if (type === 'wrong') { osc.type = 'sawtooth'; osc.frequency.setValueAtTime(200, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3); gain.gain.setValueAtTime(0.2, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3); osc.start(); osc.stop(audioCtx.currentTime + 0.3); }
        else if (type === 'milestone') { osc.type = 'triangle'; osc.frequency.setValueAtTime(440, audioCtx.currentTime); osc.frequency.setValueAtTime(554.37, audioCtx.currentTime + 0.1); osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.2); gain.gain.setValueAtTime(0.3, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5); osc.start(); osc.stop(audioCtx.currentTime + 0.5); }
        else if (type === 'badge') { osc.type = 'sine'; osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.3); gain.gain.setValueAtTime(0.3, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8); osc.start(); osc.stop(audioCtx.currentTime + 0.8); }
    }

    // SPA Router
    window.showScreen = function(screenId) {
        playSound('click');
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        document.getElementById(screenId).classList.remove('hidden');
    }

    // ====== RHYTHMIC COUNTING LOGIC (EXISTING) ======
    const BADGES = { 'first_play': { icon: '🎯', name: 'İlk Adım' }, 'combo_3': { icon: '🔥', name: 'Sıcak Seri' }, 'combo_10': { icon: '⚡', name: 'Yıldırım' }, 'fast_time': { icon: '🚀', name: 'Roket Hızı' }, 'goal_reached': { icon: '🏆', name: 'Hedef Avcısı' } };
    let myBadges = JSON.parse(localStorage.getItem('rhythmicBadges')) || [];
    let rhMode='learn', rhDir='forward', rhGameType='countdown', rhStep=0, rhTotal=0, rhLimit=100, rhScore=0, rhCombo=0, rhTime=0, rhInterval=null, rhPlaying=false, rhSessBadges=[];

    document.getElementById('mode-learn').onclick = () => { playSound('click'); rhMode='learn'; document.getElementById('mode-learn').classList.add('active'); document.getElementById('mode-game').classList.remove('active'); document.getElementById('game-type-selector').classList.add('hidden'); resetRh(); if(rhStep) startRh(rhStep); }
    document.getElementById('mode-game').onclick = () => { playSound('click'); rhMode='game'; document.getElementById('mode-game').classList.add('active'); document.getElementById('mode-learn').classList.remove('active'); document.getElementById('game-type-selector').classList.remove('hidden'); resetRh(); if(rhStep) startRh(rhStep); }
    document.getElementById('dir-forward').onclick = () => { playSound('click'); rhDir='forward'; document.getElementById('dir-forward').classList.add('active'); document.getElementById('dir-backward').classList.remove('active'); resetRh(); if(rhStep) startRh(rhStep); }
    document.getElementById('dir-backward').onclick = () => { playSound('click'); rhDir='backward'; document.getElementById('dir-backward').classList.add('active'); document.getElementById('dir-forward').classList.remove('active'); resetRh(); if(rhStep) startRh(rhStep); }
    document.getElementById('gt-countdown').onclick = () => { playSound('click'); rhGameType='countdown'; document.getElementById('gt-countdown').classList.add('active'); document.getElementById('gt-stopwatch').classList.remove('active'); resetRh(); if(rhStep) startRh(rhStep); }
    document.getElementById('gt-stopwatch').onclick = () => { playSound('click'); rhGameType='stopwatch'; document.getElementById('gt-stopwatch').classList.add('active'); document.getElementById('gt-countdown').classList.remove('active'); resetRh(); if(rhStep) startRh(rhStep); }

    document.querySelectorAll('#screen-rhythmic .num-btn').forEach(btn => {
        btn.onclick = () => { playSound('click'); resetRh(); rhStep = parseInt(btn.getAttribute('data-step')); startRh(rhStep); }
    });
    
    document.getElementById('next-btn').onclick = () => { playSound('click'); nextRhLearn(); };
    document.querySelectorAll('#screen-rhythmic .reset-btn').forEach(btn => { btn.onclick = () => { playSound('click'); resetRh(); if (rhStep) startRh(rhStep); }});
    document.getElementById('start-timer-btn').onclick = () => { playSound('click'); startRhTimerGame(); };
    document.getElementById('play-again-btn').onclick = () => { playSound('click'); resetRh(); if(rhStep) startRh(rhStep); };

    function resetRh() { clearInterval(rhInterval); rhPlaying = false; document.getElementById('timer-box').classList.remove('urgent'); document.getElementById('game-over-screen').classList.add('hidden'); rhSessBadges = []; }
    function startRh(step) {
        rhLimit = step * 10;
        rhTotal = rhDir === 'forward' ? 0 : rhLimit;
        document.getElementById('step-suffix').textContent = rhDir === 'forward' ? `'şer ileri sayıyoruz! (Hedef: ${rhLimit}) 🚀` : `'şer geri sayıyoruz! (Hedef: 0) 🚁`;
        document.getElementById('step-display').textContent = step; document.getElementById('current-number').textContent = rhTotal; document.getElementById('history-list').innerHTML = '';
        document.getElementById('game-area').classList.remove('hidden');
        addRhHistory(rhTotal);
        if (rhMode === 'learn') {
            document.getElementById('learn-controls').classList.remove('hidden'); document.getElementById('game-options').classList.add('hidden'); document.getElementById('game-hud').classList.add('hidden'); document.getElementById('start-overlay').classList.add('hidden'); document.getElementById('next-btn').disabled = false;
        } else {
            document.getElementById('learn-controls').classList.add('hidden'); document.getElementById('game-options').classList.add('hidden'); document.getElementById('game-hud').classList.remove('hidden'); document.getElementById('start-overlay').classList.remove('hidden');
            rhScore = 0; rhCombo = 0; document.getElementById('score-display').textContent = rhScore; document.getElementById('combo-box').classList.add('hidden');
            rhTime = rhGameType === 'countdown' ? 60 : 0; document.getElementById('timer-display').textContent = rhGameType === 'countdown' ? rhTime + " sn" : "0.0 sn";
        }
    }
    function startRhTimerGame() {
        rhPlaying = true; document.getElementById('start-overlay').classList.add('hidden'); document.getElementById('game-options').classList.remove('hidden'); checkRhBadge('first_play'); generateRhOptions();
        rhInterval = setInterval(() => {
            if(rhGameType === 'countdown') { rhTime--; document.getElementById('timer-display').textContent = rhTime + " sn"; if(rhTime <= 10) document.getElementById('timer-box').classList.add('urgent'); else document.getElementById('timer-box').classList.remove('urgent'); if(rhTime <= 0) endRhGame("Süre Bitti!", `Toplam Skor: ${rhScore} ⭐`); } 
            else { rhTime += 0.1; document.getElementById('timer-display').textContent = rhTime.toFixed(1) + " sn"; }
        }, 100);
    }
    function endRhGame(title, desc) { clearInterval(rhInterval); rhPlaying = false; document.getElementById('game-options').classList.add('hidden'); document.getElementById('game-over-screen').classList.remove('hidden'); document.getElementById('timer-box').classList.remove('urgent'); document.getElementById('game-over-title').textContent = title; document.getElementById('game-over-desc').innerHTML = `<strong>${desc}</strong>`; if (rhSessBadges.length > 0) { playSound('badge'); document.getElementById('new-badge-text').textContent = `🎉 Yeni Rozet Kazandın!`; confettiCall(150); } else { playSound('milestone'); confettiCall(40); } }
    function generateRhOptions() {
        if (!rhPlaying) return;
        let correct = rhDir === 'forward' ? rhTotal + rhStep : rhTotal - rhStep;
        let opts = [correct];
        while (opts.length < 3) {
            let wrong = correct + (Math.floor(Math.random()*3)+1)*(Math.random()>0.5?1:-1);
            if(Math.random()>0.5) wrong = correct + (rhStep*(Math.random()>0.5?1:-1)) + (Math.random()>0.5?1:-1);
            if(wrong !== correct && !opts.includes(wrong)) opts.push(wrong);
        }
        opts.sort(()=>Math.random()-0.5);
        document.getElementById('options-container').innerHTML = '';
        opts.forEach(opt => {
            let btn = document.createElement('button'); btn.className = 'option-btn'; btn.textContent = opt;
            btn.onclick = () => {
                if(opt === correct) {
                    playSound('success'); btn.classList.add('correct'); Array.from(document.getElementById('options-container').children).forEach(b=>b.disabled=true);
                    rhScore++; rhCombo++; document.getElementById('score-display').textContent = rhScore;
                    if(rhCombo>=2){ document.getElementById('combo-box').classList.remove('hidden'); document.getElementById('combo-display').textContent = rhCombo; }
                    if(rhCombo===3) checkRhBadge('combo_3'); if(rhCombo===10) checkRhBadge('combo_10');
                    setTimeout(()=>{
                        rhTotal = correct; updateRhDisplay();
                        if((rhDir==='forward' && rhTotal>=rhLimit) || (rhDir==='backward' && rhTotal<=0)){
                            checkRhBadge('goal_reached'); if(rhGameType==='stopwatch' && rhTime<30) checkRhBadge('fast_time');
                            endRhGame("Harika! Hedefe Ulaştın! 🎈", rhGameType==='stopwatch' ? `Süren: ${rhTime.toFixed(1)} Saniye ⏱️` : `Kalan Süre: ${rhTime} sn, Skor: ${rhScore} ⭐`);
                        } else generateRhOptions();
                    },500);
                } else {
                    playSound('wrong'); btn.classList.add('wrong','shake'); rhCombo=0; document.getElementById('combo-box').classList.add('hidden');
                    setTimeout(()=>btn.classList.remove('wrong','shake'),500);
                }
            };
            document.getElementById('options-container').appendChild(btn);
        });
    }
    function nextRhLearn() {
        if (rhDir === 'forward') { if (rhTotal + rhStep <= rhLimit) rhTotal += rhStep; else return; } 
        else { if (rhTotal - rhStep >= 0) rhTotal -= rhStep; else return; }
        updateRhDisplay();
        if ((rhDir==='forward' && rhTotal===rhLimit) || (rhDir==='backward' && rhTotal===0)) { document.getElementById('next-btn').disabled=true; playSound('milestone'); confettiCall(150); }
    }
    function updateRhDisplay() { document.getElementById('current-number').textContent = rhTotal; document.getElementById('current-number').classList.remove('pop-animation'); void document.getElementById('current-number').offsetWidth; document.getElementById('current-number').classList.add('pop-animation'); addRhHistory(rhTotal); }
    function addRhHistory(num) { let sp = document.createElement('span'); sp.className='history-item'; sp.textContent=num; document.getElementById('history-list').appendChild(sp); }
    function checkRhBadge(id) { if(!myBadges.includes(id)){ myBadges.push(id); localStorage.setItem('rhythmicBadges', JSON.stringify(myBadges)); rhSessBadges.push(id); renderBadges(); playSound('badge'); } }
    function confettiCall(cnt) { if(typeof confetti !== 'undefined') confetti({ particleCount: cnt, spread: 80, origin: { y: 0.6 }}); }

    // ====== MULTIPLICATION LOGIC ======
    let multMode = 'learn', currentMult = null, multScore = 0;
    
    window.setMultMode = function(mode) {
        playSound('click'); multMode = mode;
        document.getElementById('mult-mode-learn').classList.toggle('active', mode === 'learn');
        document.getElementById('mult-mode-game').classList.toggle('active', mode === 'game');
        if(currentMult) startMult(currentMult);
    }

    function initMult() {
        const sel = document.getElementById('mult-number-selector'); sel.innerHTML = '';
        for(let i=1; i<=10; i++) {
            let btn = document.createElement('button'); btn.className = 'num-btn'; btn.textContent = i;
            btn.onclick = () => { playSound('click'); currentMult = i; startMult(i); }; sel.appendChild(btn);
        }
        let mix = document.createElement('button'); mix.className = 'num-btn special'; mix.textContent = 'Karışık';
        mix.onclick = () => { playSound('click'); currentMult = 'mix'; startMult('mix'); }; sel.appendChild(mix);
    }

    function startMult(num) {
        document.getElementById('mult-game-area').classList.remove('hidden');
        multScore = 0; document.getElementById('mult-score').textContent = multScore;
        if(multMode === 'learn') {
            document.getElementById('mult-learn-area').classList.remove('hidden'); document.getElementById('mult-game-ui').classList.add('hidden');
            if(num === 'mix') { document.getElementById('mult-learn-area').innerHTML = '<div style="text-align:center;">Öğrenme modu için sayı seç! 😊</div>'; return; }
            let html = ''; for(let i=1; i<=10; i++) html += `<div class="table-row"><span>${num} x ${i}</span><span>= ${num*i}</span></div>`;
            document.getElementById('mult-learn-area').innerHTML = html;
        } else {
            document.getElementById('mult-learn-area').classList.add('hidden'); document.getElementById('mult-game-ui').classList.remove('hidden');
            nextMultQuestion();
        }
    }

    function nextMultQuestion() {
        let n1 = currentMult === 'mix' ? Math.floor(Math.random()*10)+1 : currentMult;
        let n2 = Math.floor(Math.random()*10)+1;
        let correct = n1 * n2;
        
        document.getElementById('mult-question').textContent = `${n1} x ${n2} = ?`;
        document.getElementById('mult-question').classList.remove('pop-animation'); void document.getElementById('mult-question').offsetWidth; document.getElementById('mult-question').classList.add('pop-animation');
        
        let opts = [correct];
        while(opts.length < 3) {
            let wrong; let r = Math.random();
            if(r < 0.3) wrong = correct + n1; else if(r < 0.6) wrong = correct - n1; else wrong = correct + Math.floor(Math.random()*5)+1;
            if(wrong > 0 && wrong !== correct && !opts.includes(wrong)) opts.push(wrong);
        }
        opts.sort(()=>Math.random()-0.5);
        
        const cont = document.getElementById('mult-options'); cont.innerHTML = '';
        opts.forEach(opt => {
            let btn = document.createElement('button'); btn.className = 'option-btn'; btn.textContent = opt;
            btn.onclick = () => {
                if(opt === correct) {
                    playSound('success'); btn.classList.add('correct'); Array.from(cont.children).forEach(b=>b.disabled=true);
                    multScore++; document.getElementById('mult-score').textContent = multScore;
                    if(multScore % 5 === 0) { confettiCall(40); playSound('milestone'); }
                    setTimeout(() => nextMultQuestion(), 800);
                } else {
                    playSound('wrong'); btn.classList.add('wrong', 'shake'); setTimeout(() => btn.classList.remove('wrong', 'shake'), 500);
                }
            }; cont.appendChild(btn);
        });
    }

    // ====== DIVISION LOGIC ======
    let divMode = 'learn', currentDiv = null, divScore = 0;
    
    window.setDivMode = function(mode) {
        playSound('click'); divMode = mode;
        document.getElementById('div-mode-learn').classList.toggle('active', mode === 'learn');
        document.getElementById('div-mode-game').classList.toggle('active', mode === 'game');
        if(currentDiv) startDiv(currentDiv);
    }

    function initDiv() {
        const sel = document.getElementById('div-number-selector'); sel.innerHTML = '';
        for(let i=2; i<=10; i++) {
            let btn = document.createElement('button'); btn.className = 'num-btn'; btn.textContent = i;
            btn.onclick = () => { playSound('click'); currentDiv = i; startDiv(i); }; sel.appendChild(btn);
        }
        let mix = document.createElement('button'); mix.className = 'num-btn special'; mix.textContent = 'Karışık';
        mix.onclick = () => { playSound('click'); currentDiv = 'mix'; startDiv('mix'); }; sel.appendChild(mix);
    }

    function startDiv(num) {
        document.getElementById('div-game-area').classList.remove('hidden');
        divScore = 0; document.getElementById('div-score').textContent = divScore;
        if(divMode === 'learn') {
            document.getElementById('div-learn-area').classList.remove('hidden'); document.getElementById('div-game-ui').classList.add('hidden');
            if(num === 'mix') { document.getElementById('div-learn-area').innerHTML = '<div style="text-align:center;">Öğrenme modu için sayı seç! 😊</div>'; return; }
            let html = ''; for(let i=1; i<=10; i++) html += `<div class="table-row"><span>${num*i} ÷ ${num}</span><span>= ${i}</span></div>`;
            document.getElementById('div-learn-area').innerHTML = html;
        } else {
            document.getElementById('div-learn-area').classList.add('hidden'); document.getElementById('div-game-ui').classList.remove('hidden');
            nextDivQuestion();
        }
    }

    function nextDivQuestion() {
        let divisor = currentDiv === 'mix' ? Math.floor(Math.random()*9)+2 : currentDiv;
        let quotient = Math.floor(Math.random()*10)+1;
        let dividend = divisor * quotient;
        
        document.getElementById('div-question').textContent = `${dividend} ÷ ${divisor} = ?`;
        document.getElementById('div-question').classList.remove('pop-animation'); void document.getElementById('div-question').offsetWidth; document.getElementById('div-question').classList.add('pop-animation');
        
        let opts = [quotient];
        while(opts.length < 3) {
            let wrong = quotient + (Math.floor(Math.random()*4)+1)*(Math.random()>0.5?1:-1);
            if(wrong > 0 && wrong !== quotient && !opts.includes(wrong)) opts.push(wrong);
        }
        opts.sort(()=>Math.random()-0.5);
        
        const cont = document.getElementById('div-options'); cont.innerHTML = '';
        opts.forEach(opt => {
            let btn = document.createElement('button'); btn.className = 'option-btn'; btn.textContent = opt;
            btn.onclick = () => {
                if(opt === quotient) {
                    playSound('success'); btn.classList.add('correct'); Array.from(cont.children).forEach(b=>b.disabled=true);
                    divScore++; document.getElementById('div-score').textContent = divScore;
                    if(divScore % 5 === 0) { confettiCall(40); playSound('milestone'); }
                    setTimeout(() => nextDivQuestion(), 800);
                } else {
                    playSound('wrong'); btn.classList.add('wrong', 'shake'); setTimeout(() => btn.classList.remove('wrong', 'shake'), 500);
                }
            }; cont.appendChild(btn);
        });
    }

    function renderBadges() {
        let bC = document.getElementById('badges-container');
        if (myBadges.length === 0) { bC.innerHTML = '<p class="no-badges">Henüz rozet kazanmadın.</p>'; return; }
        bC.innerHTML = '';
        myBadges.forEach(bId => {
            if(BADGES[bId]) {
                let div = document.createElement('div'); div.className = 'badge'; div.textContent = BADGES[bId].icon; div.setAttribute('data-tooltip', BADGES[bId].name); bC.appendChild(div);
            }
        });
    }

    initMult(); initDiv(); renderBadges();

    // ====== UNIVERSAL QUIZ ENGINE (FOR ALL NEW MATH MODULES) ======
    let currentQuizTopic = null;
    let currentQuizParent = 'screen-math';
    let quizScore = 0;

    window.setQuizMode = function(mode) {
        playSound('click');
        document.getElementById('quiz-mode-learn').classList.remove('active');
        document.getElementById('quiz-mode-game').classList.remove('active');
        document.getElementById('quiz-mode-' + mode).classList.add('active');
        
        if (mode === 'learn') {
            document.getElementById('quiz-learn-area').classList.remove('hidden');
            document.getElementById('quiz-game-ui').classList.add('hidden');
        } else {
            document.getElementById('quiz-learn-area').classList.add('hidden');
            document.getElementById('quiz-game-ui').classList.remove('hidden');
            nextQuizQuestion();
        }
    }

    window.startQuiz = function(topicId, parentScreen = 'screen-math') {
        playSound('click');
        currentQuizTopic = topicId;
        currentQuizParent = parentScreen;
        quizScore = 0;
        
        document.getElementById('quiz-score').textContent = quizScore;
        document.getElementById('quiz-back-btn').setAttribute('onclick', `showScreen('${parentScreen}')`);
        showScreen('screen-quiz');
        
        let learnArea = document.getElementById('quiz-learn-area');
        
        // Load data dynamically from CURRICULUM_DATA (in data.js)
        if (typeof CURRICULUM_DATA !== 'undefined' && CURRICULUM_DATA[topicId]) {
            document.getElementById('quiz-title').textContent = CURRICULUM_DATA[topicId].title;
            learnArea.innerHTML = CURRICULUM_DATA[topicId].summary || `<p style="text-align:center; color:#888; font-style:italic;">Bu konunun özeti hazırlanıyor...</p>`;
        } else {
            document.getElementById('quiz-title').textContent = "Bilinmeyen Konu";
            learnArea.innerHTML = `<p style="text-align:center; color:#888; font-style:italic;">Bu konu henüz eklenmedi.</p>`;
        }
        
        // Always start in learn mode
        setQuizMode('learn');
    }

    function nextQuizQuestion() {
        let visual = "", question = "", correct = "", options = [];
        let r = Math.random;

        if (typeof CURRICULUM_DATA !== 'undefined' && CURRICULUM_DATA[currentQuizTopic] && CURRICULUM_DATA[currentQuizTopic].questions) {
            let qArray = CURRICULUM_DATA[currentQuizTopic].questions;
            let qs = qArray[Math.floor(r() * qArray.length)];
            
            // Handle dynamically generated math logic vs static text
            if (currentQuizTopic === 'money' && !qs.v) {
                // Keep the dynamic random money generator as a special case if we want, 
                // but since we added static questions to money, we can just use them.
            }
            if (currentQuizTopic === 'data' && !qs.v) {
                 // Same for data
            }

            visual = `<span style="font-size: ${qs.v && qs.v.length > 5 ? '3rem' : '4rem'}">${qs.v}</span>`;
            question = qs.q; correct = qs.a; options = [correct, ...qs.o];
        } else {
            visual = "❓";
            question = "Soru bulunamadı!";
            correct = "Tamam";
            options = ["Tamam", "Hata", "Geri"];
        }


        document.getElementById('quiz-visual').innerHTML = visual;
        document.getElementById('quiz-visual').classList.remove('pop-animation');
        void document.getElementById('quiz-visual').offsetWidth;
        document.getElementById('quiz-visual').classList.add('pop-animation');
        
        document.getElementById('quiz-question').textContent = question;

        // Shuffle options and take first 3 unique
        let uniqueOpts = Array.from(new Set(options));
        uniqueOpts.sort(() => r() - 0.5);
        uniqueOpts = uniqueOpts.slice(0, 3);
        if(!uniqueOpts.includes(correct)) uniqueOpts[0] = correct; // Ensure correct is in there
        uniqueOpts.sort(() => r() - 0.5); // Shuffle again

        const cont = document.getElementById('quiz-options');
        cont.innerHTML = '';
        uniqueOpts.forEach(opt => {
            let btn = document.createElement('button'); 
            btn.className = 'option-btn'; 
            btn.style.width = 'auto'; 
            btn.style.padding = '0 20px';
            btn.style.fontSize = opt.length > 10 ? '1.2rem' : '1.8rem';
            btn.textContent = opt;
            
            btn.onclick = () => {
                if(opt === correct) {
                    playSound('success'); btn.classList.add('correct'); 
                    Array.from(cont.children).forEach(b => b.disabled = true);
                    quizScore += 10; 
                    document.getElementById('quiz-score').textContent = quizScore;
                    if(quizScore % 50 === 0) { confettiCall(40); playSound('milestone'); }
                    setTimeout(() => nextQuizQuestion(), 1000);
                } else {
                    playSound('wrong'); btn.classList.add('wrong', 'shake'); 
                    setTimeout(() => btn.classList.remove('wrong', 'shake'), 500);
                }
            };
            cont.appendChild(btn);
        });
    }

});
