// 사운드 매핑
const soundMap = {
    37: 'sounds/janggu_kung.mp3',
    43: 'sounds/janggu_duck.mp3',
    46: 'sounds/kkwaenggwari_geck.mp3',
    38: 'sounds/kkwaenggwari_gang.mp3',
    45: 'sounds/janggu_giduk.mp3',
    47: 'sounds/janggu_drrr.mp3',
    49: 'sounds/buk.mp3',
    51: 'sounds/jing.mp3',
};

// 키보드 매핑 (영어 키보드와 한글 자판 대응)
const keyboardMap = {
    'z': 38, 'ㅋ': 38,
    'x': 37, 'ㅌ': 37,
    'c': 43, 'ㅊ': 43,
    'a': 46, 'ㅁ': 46,
    's': 47, 'ㄴ': 47,
    'd': 45, 'ㅇ': 45,
    'q': 49, 'ㅂ': 49,
    'e': 51, 'ㄷ': 51 
};

const rhythmPattern = [
    { notes: [51, 37, 43, 49, 38], delay: 0 },       // 첫 박
    { notes: [37, 43, 49, 38], delay: 600 },        // 두 번째 박
    { notes: [37, 43, 49, 38], delay: 1200 },        // 네 번째 박
    { notes: [46, 43], delay: 1600 },               // 다섯 번째 박
    { notes: [46, 37, 49], delay: 1800 },           // 여섯 번째 박
    { notes: [38, 43], delay: 2000 },               // 일곱 번째 박
];

const pads = document.querySelectorAll('.pad');

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
} else {
    alert('Web MIDI API를 지원하지 않는 브라우저입니다.');
}

function onMIDISuccess(midiAccess) {
    const inputs = midiAccess.inputs;

    inputs.forEach(function (input) {
        input.onmidimessage = onMIDIMessage;
    });

    console.log('MIDI Access Successful');
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
    const soundFile = soundMap[note];
    if (soundFile) {
        console.log(`Playing sound for note ${note}: ${soundFile} with velocity ${velocity}`);
        const audio = new Audio(soundFile);

        // Velocity 값을 0.0 ~ 1.0 범위로 변환하여 소리 크기 조절
        audio.volume = Math.max(0, Math.min(1, velocity / 127));

        audio.play();
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