// 사운드 매핑
const soundMap = {
    36: {
        high: 'sounds/janggu_kung_high.mp3',
        mid: 'sounds/janggu_kung_mid.mp3',
        low: 'sounds/janggu_kung_low.mp3'
    },
    38: {
        high: 'sounds/janggu_kung_high.mp3',
        mid: 'sounds/janggu_kung_mid.mp3',
        low: 'sounds/janggu_kung_low.mp3'
    },
    43: {
        high: 'sounds/janggu_duck_high.mp3',
        mid: 'sounds/janggu_duck_mid.mp3',
        low: 'sounds/janggu_duck_low.mp3'
    },
    42: {
        high: 'sounds/kkwaenggwari_geck_high.mp3',
        mid: 'sounds/kkwaenggwari_geck_mid.mp3',
        low: 'sounds/kkwaenggwari_geck_low.mp3'
    },
    44: "sounds/kkwaenggwari_geck2.mp3",
    46: {
        high: 'sounds/kkwaenggwari_gang_high.mp3',
        mid: 'sounds/kkwaenggwari_gang_mid.mp3',
        low: 'sounds/kkwaenggwari_gang_low.mp3'
    },
    45: {
        high: 'sounds/janggu_giduk_high.mp3',
        mid: 'sounds/janggu_giduk_mid.mp3',
        low: 'sounds/janggu_giduk_low.mp3'
    },
    48: 'sounds/janggu_drrr.mp3', // Single velocity layer
    49: {
        high: 'sounds/buk_high.mp3',
        mid: 'sounds/buk_mid.mp3',
        low: 'sounds/buk_low.mp3'
    },
    51: {
        high: 'sounds/jing_high.mp3',
        low: 'sounds/jing_low.mp3' // Two velocity layers only
    }
};


// <!-- 상단 패드 3개 -->
// <div class="pad top-left" data-note="49">북</div>
// <div class="pad top-center" data-note="48">더러러러</div>
// <div class="pad top-right" data-note="51">징</div>

// <!-- 하단 패드 4개 -->
// <div class="pad bottom-left" data-note="46">갱</div>
// <div class="pad bottom-center-left" data-note="38">쿵</div>
// <div class="pad bottom-center-right" data-note="45">기덕</div>
// <div class="pad bottom-right" data-note="43">덕</div>

// <!-- 페달 패드 -->
// <div class="pad pedal-left" data-note="42">왼쪽 페달(객)</div>
// <div class="pad pedal-right" data-note="36">오른쪽 페달</div>

// 키보드 매핑 (영어 키보드와 한글 자판 대응)
const keyboardMap = {
    'z': 42, 'ㅋ': 42,
    'c': 36, 'ㅊ': 36,
    'a': 46, 'ㅁ': 46,
    's': 38, 'ㄴ': 38,
    'd': 45, 'ㅇ': 45,
    'f': 43, 'ㄹ': 43,
    'w': 49, 'ㅈ': 49,
    'e': 48, 'ㄷ': 48,
    'r': 51, 'ㄱ': 51 
};

const rhythmPattern = [
    { notes: [51, 38, 43, 49, 46], delay: 0 },       // 첫 박
    { notes: [38, 43, 49, 46], delay: 600 },        // 두 번째 박
    { notes: [38, 43, 49, 46], delay: 1200 },        // 네 번째 박
    { notes: [42, 43], delay: 1600 },               // 다섯 번째 박
    { notes: [42, 38, 49], delay: 1800 },           // 여섯 번째 박
    { notes: [46, 43], delay: 2000 },               // 일곱 번째 박
];

const pads = document.querySelectorAll('.pad');

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
} else {
    alert('Web MIDI API를 지원하지 않는 브라우저입니다.');
}

function onMIDISuccess(midiAccess) {
    const inputs = midiAccess.inputs;

    console.log('MIDI Access Successful');
    console.log(`Connected MIDI Inputs (${inputs.size}):`);
    inputs.forEach(function (input) {
        console.log(`- ${input.name}`);
        input.onmidimessage = onMIDIMessage;
    });
}


function onMIDIFailure() {
    console.error('MIDI Access Failed');
}

function onMIDIMessage(message) {
    const [status, note, velocity] = message.data;
    console.log(`MIDI Message: status=${status}, note=${note}, velocity=${velocity}`);

    if ((status & 0xF0) === 0x90 && velocity > 0) {
        playSound(note, velocity);
        highlightPad(note);
    }
}

function playSound(note, velocity = 127) {
    const soundLayers = soundMap[note];

    if (typeof soundLayers === 'string') {
        // Single velocity layer sound
        const audio = new Audio(soundLayers);
        audio.volume = Math.max(0, Math.min(1, velocity / 127));
        audio.play();
    } else if (soundLayers) {
        // Determine the correct velocity layer
        let soundFile;
        if (velocity > 100 && soundLayers.high) {
            soundFile = soundLayers.high;
        } else if (velocity > 50 && soundLayers.mid) {
            soundFile = soundLayers.mid;
        } else if (soundLayers.low) {
            soundFile = soundLayers.low;
        } else {
            // Fallback to any available layer
            soundFile = soundLayers.high || soundLayers.low || soundLayers.mid;
        }

        if (soundFile) {
            const audio = new Audio(soundFile);
            audio.volume = Math.max(0, Math.min(1, velocity / 127));
            audio.play();
        } else {
            console.warn(`No sound file for velocity layer: note ${note}, velocity ${velocity}`);
        }
    } else {
        console.warn(`No sound mapped for note ${note}`);
    }
}


function highlightPad(note) {
    const pad = document.querySelector(`.pad[data-note="${note}"]`);
    if (pad) {
        pad.classList.add('active');
        setTimeout(() => pad.classList.remove('active'), 100);
    }
}

// 패드 클릭 이벤트
pads.forEach((pad) => {
    pad.addEventListener('click', () => {
        const note = parseInt(pad.getAttribute('data-note'));
        playSound(note);
        highlightPad(note);
    });
});

// 키보드 입력 이벤트에서도 기본 최대 Velocity (127)를 사용
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); // 소문자로 변환
    if (keyboardMap[key]) {
        const note = keyboardMap[key];
        playSound(note, 100); // 기본 최대 Velocity
        highlightPad(note);
    }
});

document.addEventListener('click', () => {
    // Unlock audio context for some browsers
    const audio = new Audio();
    audio.play().catch(() => {
        console.log('Audio context unlocked');
    });
}, { once: true });


const instructionModal = document.getElementById('instruction-modal');
const instructionOverlay = document.getElementById('instruction-overlay');
const instructionButton = document.getElementById('instruction-button');
const closeButton = document.getElementById('close-button');

// 사용법 버튼 클릭 시 설명창 표시
instructionButton.addEventListener('click', () => {
    instructionModal.classList.add('active'); // 설명창 활성화
    instructionOverlay.classList.add('active'); // 어두운 배경 활성화
});

// 닫기 버튼 클릭 시 설명창 숨기기
closeButton.addEventListener('click', () => {
    instructionModal.classList.remove('active'); // 설명창 비활성화
    instructionOverlay.classList.remove('active'); // 어두운 배경 비활성화
});

// 로딩 화면 제어
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000); // 1초 후 로딩 화면 사라짐
});


let demoPlaying = false;
let currentIndex = 0;

// 리듬 데모 재생
function startRhythmDemo() {
    if (demoPlaying) return; // 이미 재생 중이면 무시
    demoPlaying = true;
    currentIndex = 0; // 시작 인덱스 초기화
    playNextPattern(); // 첫 패턴 실행
}

function playNextPattern() {
    if (!demoPlaying) return; // 재생이 중지된 경우 종료

    const { notes, delay } = rhythmPattern[currentIndex];

    // 다중 노트를 처리
    notes.forEach((note) => {
        playSound(note); // 소리 재생
        highlightPad(note); // 패드 활성화
    });

    currentIndex++;

    // 패턴의 끝에 도달하면 처음으로 돌아가기
    if (currentIndex >= rhythmPattern.length) {
        currentIndex = 0; // 첫 번째 패턴으로 돌아감
        setTimeout(playNextPattern, 400); // 루프 간 간격 설정
    } else {
        // 다음 패턴 호출
        setTimeout(
            playNextPattern,
            (currentIndex < rhythmPattern.length ? rhythmPattern[currentIndex].delay : 0) - delay
        );
    }
}

// 리듬 데모 중지
function stopRhythmDemo() {
    demoPlaying = false;
}

// 이벤트 리스너 추가
document.getElementById('start-demo').addEventListener('click', startRhythmDemo);
document.getElementById('stop-demo').addEventListener('click', stopRhythmDemo);