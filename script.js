// 사운드 매핑
const soundMap = {
    36: 'sounds/janggu_kung.mp3',
    47: 'sounds/janggu_duck.mp3',
    42: 'sounds/kkwaenggwari_geck.mp3',
    38: 'sounds/kkwaenggwari_gang.mp3',
    45: 'sounds/janggu_giduk.mp3',
    43: 'sounds/janggu_drrr.mp3',
    49: 'sounds/buk.mp3',
    51: 'sounds/jing.mp3',
};

// 키보드 매핑 (영어 키보드와 한글 자판 대응)
const keyboardMap = {
    'z': 38, 'ㅋ': 38, // Z or ㅋ -> Note 38
    'x': 36, 'ㅌ': 36, // X or ㅌ -> Note 36
    'c': 47, 'ㅊ': 47, // C or ㅊ -> Note 47
    'a': 42, 'ㅁ': 42, // A or ㅁ -> Note 42
    's': 43, 'ㄴ': 43, // S or ㄴ -> Note 43
    'd': 45, 'ㅇ': 45, // D or ㅇ -> Note 45
    'q': 49, 'ㅂ': 49, // Q or ㅂ -> Note 49
    'e': 51, 'ㄷ': 51  // E or ㄷ -> Note 51
};


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

    if (status === 144 && velocity > 0) {
        playSound(note);
        highlightPad(note);
    }
}

function playSound(note) {
    const soundFile = soundMap[note];
    if (soundFile) {
        console.log(`Playing sound for note ${note}: ${soundFile}`);
        const audio = new Audio(soundFile);
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

// 키보드 입력 이벤트 추가
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); // 소문자로 변환
    if (keyboardMap[key]) {
        const note = keyboardMap[key];
        playSound(note);
        highlightPad(note);
    }
});

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
    }, 1000); // 3초 후 로딩 화면 사라짐
});
