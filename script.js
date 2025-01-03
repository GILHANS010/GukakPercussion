
/**************************************************************
 * (1) 다국어 텍스트(번역) 객체
 **************************************************************/
const translations = {
  ko: {
    headerTitle: "국립국악원 타악기",
    headerSubtitle: "패드를 눌러 소리를 재생하세요!",
    samulLabel: "사물놀이 키트",
    jangdanLabel: "장단 키트",
    modalTitle: "사용법",
    modalSteps: [
      "호시미 전자드럼을 USB로 컴퓨터에 연결합니다.",
      "웹브라우저에서 미디 컨트롤러 연결 허용을 클릭합니다.",
      "패드의 표기된 타악기 이름을 보고 해당 패드를 눌러 연결합니다."
    ],
    modalSubtitle: "호시미 패드 없이 사용하기",
    modalText: "키보드 자판을 사용하여 연주할 수 있습니다:",
    modalKeyboardList: [
      "<b>하단 패드:</b> Z, X, C",
      "<b>중앙 패드:</b> A, S, D",
      "<b>상단 패드:</b> Q, E"
    ],
    closeButton: "닫기",
    langToggle: "English"
  },
  en: {
    headerTitle: "National Gugak Center Percussion",
    headerSubtitle: "Press the pads to play sounds!",
    samulLabel: "Samulnori Kit",
    jangdanLabel: "Jangdan Kit",
    modalTitle: "Instructions",
    modalSteps: [
      "Connect the Hoshimi e-drum via USB to your computer.",
      "Allow MIDI controller access in your web browser if prompted.",
      "Refer to the label on the pad and press the corresponding pad."
    ],
    modalSubtitle: "Use without Hoshimi Pad",
    modalText: "You can also play with your computer keyboard:",
    modalKeyboardList: [
      "<b>Bottom pads:</b> Z, X, C",
      "<b>Middle pads:</b> A, S, D",
      "<b>Top pads:</b> Q, E"
    ],
    closeButton: "Close",
    langToggle: "한국어"
  }
};

let currentLang = 'ko'; // 초기 언어: 한국어

/**************************************************************
 * (2) setLanguage() - UI 문구 갱신
 **************************************************************/
function setLanguage(lang) {
  currentLang = lang;

  // 헤더
  document.getElementById('header-title').textContent    = translations[lang].headerTitle;
  document.getElementById('header-subtitle').textContent = translations[lang].headerSubtitle;

  // 키트 라벨
  document.getElementById('samul-label').textContent   = translations[lang].samulLabel;
  document.getElementById('jangdan-label').textContent = translations[lang].jangdanLabel;

  // 모달
  document.getElementById('modal-title').textContent = translations[lang].modalTitle;

  // 모달 steps (ol)
  const steps = document.querySelectorAll('#modal-steps li');
  translations[lang].modalSteps.forEach((txt, idx) => {
    steps[idx].textContent = txt;
  });

  document.getElementById('modal-subtitle').textContent = translations[lang].modalSubtitle;
  document.getElementById('modal-text').textContent     = translations[lang].modalText;

  // 모달 keyboard list (ul)
  const listItems = document.querySelectorAll('#modal-keyboard-list li');
  translations[lang].modalKeyboardList.forEach((liHTML, idx) => {
    listItems[idx].innerHTML = liHTML; 
  });

  // 닫기 버튼 & 토글 버튼
  document.getElementById('close-button').textContent  = translations[lang].closeButton;
  document.getElementById('lang-toggle').textContent   = translations[lang].langToggle;
}

/**************************************************************
 * (3) 초기 구동 및 언어 토글 버튼 설정
 **************************************************************/
window.addEventListener('load', () => {
  // 언어 초기화
  setLanguage(currentLang);

  // 로딩 화면 제거
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen?.classList.add('hidden');
  }, 1000);
  
  // 기본(사물놀이) 키트 로드
  loadKit('samul');
});

document.getElementById('lang-toggle').addEventListener('click', () => {
  const newLang = (currentLang === 'ko') ? 'en' : 'ko';
  setLanguage(newLang);
  // ★ 만약 패드 이름까지 언어 전환한다면, loadKit(currentKit) 다시 호출
  loadKit(currentKit);
});

/**************************************************************
 * (4) 사운드 맵 - 사물놀이 & 장단
 **************************************************************/
const soundMap = {
  samul: {
    49: { high: 'sounds/samul/buk_samul_hard_high.wav' },
    51: { high: 'sounds/samul/jing_samul_high.wav' },
    46: { high: 'sounds/samul/buk_samul_soft_high.wav' },
    47: { high: 'sounds/samul/kkwaenggwari_samul_get_high.wav' },
    45: { high: 'sounds/samul/kkwaenggwari_samul_gang_high.wav' },
    38: { high: 'sounds/samul/janggu_samul_kung_high.wav' },
    37: { high: 'sounds/samul/janggu_samul_rightkung_high.wav' },
    43: { high: 'sounds/samul/janggu_samul_duk_high.wav' }
  },
  jangdan: {
    49: { high: 'sounds/jangdan/buk_jangdan_lefthand_high.wav' },
    51: { high: 'sounds/jangdan/janggu_jangdan_byunjuk_high.wav' },
    46: { high: 'sounds/jangdan/buk_jangdan_righthand_high.wav' },
    47: { high: 'sounds/jangdan/buk_jangdan_ddak_high.wav' },
    45: { high: 'sounds/jangdan/janggu_jangdan_drrr_high.wav' },
    38: { high: 'sounds/jangdan/janggu_jangdan_kung_high.wav' },
    37: { high: 'sounds/jangdan/janggu_jangdan_duk_high.wav' },
    43: { high: 'sounds/jangdan/janggu_jangdan_giduk_high.wav' }
  }
};

let currentKit = 'samul'; // 현재 선택된 키트

/**************************************************************
 * (5) 라디오로 키트 선택
 **************************************************************/
const kitRadios = document.querySelectorAll('input[name="kitOption"]');
kitRadios.forEach((radio) => {
  radio.addEventListener('change', (ev) => {
    const selectedKit = ev.target.value; // 'samul' or 'jangdan'
    loadKit(selectedKit);
  });
});

/**************************************************************
 * (6) loadKit() - 키트별 패드 라벨 업데이트
 *     ★ pad 텍스트도 다국어가 필요하다면 언어 분기 추가
 **************************************************************/
function loadKit(kitName) {
  currentKit = kitName;

  if (kitName === 'samul') {
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad')    .textContent = '북(강)';
      document.querySelector('.top-right.pad')   .textContent = '징';
      document.querySelector('.middle-left.pad') .textContent = '북(약)';
      document.querySelector('.middle-center.pad').textContent = '꽹과리(객)';
      document.querySelector('.middle-right.pad').textContent = '꽹과리(갱)';
      document.querySelector('.bottom-left.pad') .textContent = '장구(쿵L)';
      document.querySelector('.bottom-center.pad').textContent = '장구(쿵R)';
      document.querySelector('.bottom-right.pad').textContent = '장구(덕)';
    } else {
      document.querySelector('.top-left.pad')    .textContent = 'Buk (Hard)';
      document.querySelector('.top-right.pad')   .textContent = 'Jing';
      document.querySelector('.middle-left.pad') .textContent = 'Buk (Soft)';
      document.querySelector('.middle-center.pad').textContent = 'Kkwaeng (Get)';
      document.querySelector('.middle-right.pad').textContent = 'Kkwaeng (Gang)';
      document.querySelector('.bottom-left.pad') .textContent = 'Janggu (Kung L)';
      document.querySelector('.bottom-center.pad').textContent = 'Janggu (Kung R)';
      document.querySelector('.bottom-right.pad').textContent = 'Janggu (Duk)';
    }
  } else { // jangdan
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad')    .textContent = '북(쿵L)';
      document.querySelector('.top-right.pad')   .textContent = '장구(변죽)';
      document.querySelector('.middle-left.pad') .textContent = '북(쿵R)';
      document.querySelector('.middle-center.pad').textContent = '북(딱)';
      document.querySelector('.middle-right.pad').textContent = '장구(더러러)';
      document.querySelector('.bottom-left.pad') .textContent = '장구(쿵)';
      document.querySelector('.bottom-center.pad').textContent = '장구(덕)';
      document.querySelector('.bottom-right.pad').textContent = '장구(기덕)';
    } else {
      document.querySelector('.top-left.pad')    .textContent = 'Buk (Kung L)';
      document.querySelector('.top-right.pad')   .textContent = 'Janggu (Byunjuk)';
      document.querySelector('.middle-left.pad') .textContent = 'Buk (Kung R)';
      document.querySelector('.middle-center.pad').textContent = 'Buk (Ddak)';
      document.querySelector('.middle-right.pad').textContent = 'Janggu (Drrr)';
      document.querySelector('.bottom-left.pad') .textContent = 'Janggu (Kung)';
      document.querySelector('.bottom-center.pad').textContent = 'Janggu (Duk)';
      document.querySelector('.bottom-right.pad').textContent = 'Janggu (Giduk)';
    }
  }
}


/**************************************************************
 * (7) Web MIDI Access
 **************************************************************/
if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
} else {
  alert('Web MIDI API를 지원하지 않는 브라우저입니다.');
}

function onMIDISuccess(midiAccess) {
  const inputs = midiAccess.inputs;
  console.log('MIDI Access Successful');
  inputs.forEach((input) => {
    console.log(`- ${input.name}`);
    input.onmidimessage = onMIDIMessage;
  });
}
function onMIDIFailure() {
  console.error('MIDI Access Failed');
}
function onMIDIMessage(msg) {
  const [status, note, velocity] = msg.data;
  console.log(`MIDI Message: status=${status}, note=${note}, velocity=${velocity}`);
  if ((status & 0xF0) === 0x90 && velocity > 0) {
    playSound(note, velocity);
    highlightPad(note);
  }
}

/**************************************************************
 * (8) 사운드 재생
 **************************************************************/
function playSound(note, velocity = 127) {
  const kitSounds = soundMap[currentKit];
  const soundLayers = kitSounds[note];
  if (!soundLayers) {
    console.warn(`No sound mapped for note ${note} in kit '${currentKit}'`);
    return;
  }
  // velocity 레이어링 예시
  let soundFile = soundLayers.high; // 여기선 high만 예시
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.volume = Math.max(0, Math.min(1, velocity / 127));
    audio.play();
  }
}

/**************************************************************
 * (9) 패드 하이라이트
 **************************************************************/
function highlightPad(note) {
  const pad = document.querySelector(`.pad[data-note="${note}"]`);
  if (pad) {
    pad.classList.add('active');
    setTimeout(() => pad.classList.remove('active'), 100);
  }
}

/**************************************************************
 * (10) 마우스 클릭 시 소리 재생
 **************************************************************/
const pads = document.querySelectorAll('.pad');
pads.forEach((pad) => {
  pad.addEventListener('click', () => {
    const note = parseInt(pad.getAttribute('data-note'));
    playSound(note, 100);
    highlightPad(note);
  });
});

/**************************************************************
 * (11) 키보드 입력 -> 연주
 **************************************************************/
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
document.addEventListener('keydown', (ev) => {
  const key = ev.key.toLowerCase();
  if (keyboardMap[key]) {
    const note = keyboardMap[key];
    playSound(note, 100);
    highlightPad(note);
  }
});

/**************************************************************
 * (12) 오디오 컨텍스트 Unlock
 **************************************************************/
document.addEventListener('click', () => {
  const audio = new Audio();
  audio.play().catch(() => {
    console.log('Audio context unlocked');
  });
}, { once: true });

/**************************************************************
 * (13) 사용법 모달
 **************************************************************/
const instructionModal   = document.getElementById('instruction-modal');
const instructionOverlay = document.getElementById('instruction-overlay');
const instructionButton  = document.getElementById('instruction-button');
const closeButton        = document.getElementById('close-button');

instructionButton.addEventListener('click', () => {
  instructionModal.classList.add('active');
  instructionOverlay.classList.add('active');
});
closeButton.addEventListener('click', () => {
  instructionModal.classList.remove('active');
  instructionOverlay.classList.remove('active');
});