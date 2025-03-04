
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
    49: {
      high: 'sounds/samul/buk_samul_hard_high.wav',
      mid: 'sounds/samul/buk_samul_hard_mid.wav',
      low: 'sounds/samul/buk_samul_hard_low.wav'
    },
    51: {
      high: 'sounds/samul/jing_samul_high.wav',
      mid: 'sounds/samul/jing_samul_mid.wav',
      low: 'sounds/samul/jing_samul_low.wav',
    },
    46: {
      high: 'sounds/samul/buk_samul_soft_high.wav',
      mid: 'sounds/samul/buk_samul_soft_mid.wav',
      low: 'sounds/samul/buk_samul_soft_low.wav',
    },
    47: {
      high: 'sounds/samul/kkwaenggwari_samul_gaek_high.wav',
      mid: 'sounds/samul/kkwaenggwari_samul_gaek_mid.wav',
      low: 'sounds/samul/kkwaenggwari_samul_gaek_low.wav',
    },
    45: {
      high: 'sounds/samul/kkwaenggwari_samul_gang_high.wav',
      mid: 'sounds/samul/kkwaenggwari_samul_gang_mid.wav',
      low: 'sounds/samul/kkwaenggwari_samul_gang_low.wav'
    },
    38: {
      high: 'sounds/samul/janggu_samul_kung_high.wav',
      mid: 'sounds/samul/janggu_samul_kung_mid.wav',
      low: 'sounds/samul/janggu_samul_kung_low.wav'
    },
    37: {
      high: 'sounds/samul/janggu_samul_rightkung_high.wav',
      mid: 'sounds/samul/janggu_samul_rightkung_mid.wav',
      low: 'sounds/samul/janggu_samul_rightkung_low.wav'
    },
    43: {
      high: 'sounds/samul/janggu_samul_duk_high.wav',
      mid: 'sounds/samul/janggu_samul_duk_mid.wav',
      low: 'sounds/samul/janggu_samul_duk_low.wav'
    }
  },

  jangdan: {
    49: {
      high: 'sounds/jangdan/buk_jangdan_lefthand_high.wav',
      mid: 'sounds/jangdan/buk_jangdan_lefthand_mid.wav',
      low: 'sounds/jangdan/buk_jangdan_lefthand_low.wav'
    },
    51: {
      high: 'sounds/jangdan/janggu_jangdan_byunjuk_high.wav',
      mid: 'sounds/jangdan/janggu_jangdan_byunjuk_mid.wav',
      low: 'sounds/jangdan/janggu_jangdan_byunjuk_low.wav'
    },
    46: {
      high: 'sounds/jangdan/buk_jangdan_righthand_high.wav',
      mid: 'sounds/jangdan/buk_jangdan_righthand_mid.wav',
      low: 'sounds/jangdan/buk_jangdan_righthand_low.wav'
    },
    47: {
      high: 'sounds/jangdan/buk_jangdan_ddak_high.wav',
      mid: 'sounds/jangdan/buk_jangdan_ddak_mid.wav',
      low: 'sounds/jangdan/buk_jangdan_ddak_low.wav'
    },
    45: {
      high: 'sounds/jangdan/janggu_jangdan_drrr_high.wav',
      mid: 'sounds/jangdan/janggu_jangdan_drrr_mid.wav',
      low: 'sounds/jangdan/janggu_jangdan_drrr_low.wav'
    },
    38: {
      high: 'sounds/jangdan/janggu_jangdan_kung_high.wav',
      mid: 'sounds/jangdan/janggu_jangdan_kung_mid.wav',
      low: 'sounds/jangdan/janggu_jangdan_kung_low.wav'
    },
    37: {
      high: 'sounds/jangdan/janggu_jangdan_duk_high.wav',
      mid: 'sounds/jangdan/janggu_jangdan_duk_mid.wav',
      low: 'sounds/jangdan/janggu_jangdan_duk_low.wav'
    },
    43: {
      high: 'sounds/jangdan/janggu_jangdan_giduk_high.wav',
      mid: 'sounds/jangdan/janggu_jangdan_giduk_mid.wav',
      low: 'sounds/jangdan/janggu_jangdan_giduk_low.wav'
    }
  }, 

  BigDrumKit: {
    49: { high: 'sounds/DrumKit/BigDrumKit/Crash_Hard.wav',    mid: 'sounds/DrumKit/BigDrumKit/Crash_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/Crash_Soft.wav' },
    42: { high: 'sounds/DrumKit/BigDrumKit/HH_Close_Hard.wav',  mid: 'sounds/DrumKit/BigDrumKit/HH_Close_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/HH_Close_Soft.wav' },
    44: { high: 'sounds/DrumKit/BigDrumKit/HH_Pedal_Hard.wav',  mid: 'sounds/DrumKit/BigDrumKit/HH_Pedal_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/HH_Pedal_Soft.wav' },
    46: { high: 'sounds/DrumKit/BigDrumKit/HH_Open_Hard.wav',  mid: 'sounds/DrumKit/BigDrumKit/HH_Open_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/HH_Open_Soft.wav' },
    37: { high: 'sounds/DrumKit/BigDrumKit/Kick_Hard.wav',       mid: 'sounds/DrumKit/BigDrumKit/Kick_Moderate.wav',      low: 'sounds/DrumKit/BigDrumKit/Kick_Soft.wav' },
    38: { high: 'sounds/DrumKit/BigDrumKit/Snare_Hard.wav',      mid: 'sounds/DrumKit/BigDrumKit/Snare_Moderate.wav',     low: 'sounds/DrumKit/BigDrumKit/Snare_Soft.wav' },
    47: { high: 'sounds/DrumKit/BigDrumKit/TomHigh_Hard.wav',    mid: 'sounds/DrumKit/BigDrumKit/TomHigh_Moderate.wav',   low: 'sounds/DrumKit/BigDrumKit/TomHigh_Soft.wav' },
    43: { high: 'sounds/DrumKit/BigDrumKit/TomLow_Hard.wav',     mid: 'sounds/DrumKit/BigDrumKit/TomLow_Moderate.wav',    low: 'sounds/DrumKit/BigDrumKit/TomLow_Soft.wav' },
    45: { high: 'sounds/DrumKit/BigDrumKit/TomMid_Hard.wav',     mid: 'sounds/DrumKit/BigDrumKit/TomMid_Moderate.wav',    low: 'sounds/DrumKit/BigDrumKit/TomMid_Soft.wav' },
    51: { high: 'sounds/DrumKit/BigDrumKit/Ride_Hard.wav',       mid: 'sounds/DrumKit/BigDrumKit/Ride_Moderate.wav',      low: 'sounds/DrumKit/BigDrumKit/Ride_Soft.wav' }
  },

  CountryDrumKit: {
    49: { high: 'sounds/DrumKit/CountryDrumKit/Crash_Hard.wav',    mid: 'sounds/DrumKit/CountryDrumKit/Crash_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/Crash_Soft.wav' },
    42: { high: 'sounds/DrumKit/CountryDrumKit/HH_Close_Hard.wav',   mid: 'sounds/DrumKit/CountryDrumKit/HH_Close_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/HH_Close_Soft.wav' },
    44: { high: 'sounds/DrumKit/CountryDrumKit/HH_Pedal_Hard.wav',   mid: 'sounds/DrumKit/CountryDrumKit/HH_Pedal_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/HH_Pedal_Soft.wav' },
    46: { high: 'sounds/DrumKit/CountryDrumKit/HH_Open_Hard.wav',   mid: 'sounds/DrumKit/CountryDrumKit/HH_Open_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/HH_Open_Soft.wav' },
    37: { high: 'sounds/DrumKit/CountryDrumKit/Kick_Hard.wav',       mid: 'sounds/DrumKit/CountryDrumKit/Kick_Moderate.wav',     low: 'sounds/DrumKit/CountryDrumKit/Kick_Soft.wav' },
    38: { high: 'sounds/DrumKit/CountryDrumKit/Snare_Hard.wav',      mid: 'sounds/DrumKit/CountryDrumKit/Snare_Moderate.wav',    low: 'sounds/DrumKit/CountryDrumKit/Snare_Soft.wav' },
    47: { high: 'sounds/DrumKit/CountryDrumKit/TomHigh_Hard.wav',    mid: 'sounds/DrumKit/CountryDrumKit/TomHigh_Moderate.wav',  low: 'sounds/DrumKit/CountryDrumKit/TomHigh_Soft.wav' },
    43: { high: 'sounds/DrumKit/CountryDrumKit/TomLow_Hard.wav',     mid: 'sounds/DrumKit/CountryDrumKit/TomLow_Moderate.wav',   low: 'sounds/DrumKit/CountryDrumKit/TomLow_Soft.wav' },
    45: { high: 'sounds/DrumKit/CountryDrumKit/TomMid_Hard.wav',     mid: 'sounds/DrumKit/CountryDrumKit/TomMid_Moderate.wav',   low: 'sounds/DrumKit/CountryDrumKit/TomMid_Soft.wav' },
    51: { high: 'sounds/DrumKit/CountryDrumKit/Ride_Hard.wav',       mid: 'sounds/DrumKit/CountryDrumKit/Ride_Moderate.wav',     low: 'sounds/DrumKit/CountryDrumKit/Ride_Soft.wav' }
  },
  HiphopDrumKit: {
    49: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash_Hard.wav',    mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash_Soft.wav' },
    42: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Close_Hard.wav',   mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Close_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Close_Soft.wav' },
    44: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal_Hard.wav',   mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal_Soft.wav' },
    46: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open_Hard.wav',   mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open_Soft.wav' },
    37: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick_Hard.wav',       mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick_Moderate.wav',     low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick_Soft.wav' },
    38: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare_Hard.wav',      mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare_Moderate.wav',    low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare_Soft.wav' },
    47: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh_Hard.wav',    mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh_Moderate.wav',  low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh_Soft.wav' },
    43: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow_Hard.wav',     mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow_Moderate.wav',   low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow_Soft.wav' },
    45: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid_Hard.wav',     mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid_Moderate.wav',   low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid_Soft.wav' },
    51: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride_Hard.wav',       mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride_Moderate.wav',     low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride_Soft.wav' }
  },
  HouseDrumKit: {
    49: { high: 'sounds/DrumKit/HouseDrum/Crash.wav',    mid: 'sounds/DrumKit/HouseDrum/Crash.wav', low: 'sounds/DrumKit/HouseDrum/Crash.wav' },
    42: { high: 'sounds/DrumKit/HouseDrum/HH_Close.wav',   mid: 'sounds/DrumKit/HouseDrum/HH_Close.wav', low: 'sounds/DrumKit/HouseDrum/HH_Close.wav' },
    44: { high: 'sounds/DrumKit/HouseDrum/HH_Pedal.wav',   mid: 'sounds/DrumKit/HouseDrum/HH_Pedal.wav', low: 'sounds/DrumKit/HouseDrum/HH_Pedal.wav' },
    46: { high: 'sounds/DrumKit/HouseDrum/HH_Open.wav',   mid: 'sounds/DrumKit/HouseDrum/HH_Open.wav', low: 'sounds/DrumKit/HouseDrum/HH_Open.wav' },
    37: { high: 'sounds/DrumKit/HouseDrum/Kick.wav',       mid: 'sounds/DrumKit/HouseDrum/Kick.wav',     low: 'sounds/DrumKit/HouseDrum/Kick.wav' },
    38: { high: 'sounds/DrumKit/HouseDrum/Snare.wav',      mid: 'sounds/DrumKit/HouseDrum/Snare.wav',    low: 'sounds/DrumKit/HouseDrum/Snare.wav' },
    47: { high: 'sounds/DrumKit/HouseDrum/TomHigh.wav',    mid: 'sounds/DrumKit/HouseDrum/TomHigh.wav',  low: 'sounds/DrumKit/HouseDrum/TomHigh.wav' },
    43: { high: 'sounds/DrumKit/HouseDrum/TomLow.wav',     mid: 'sounds/DrumKit/HouseDrum/TomLow.wav',   low: 'sounds/DrumKit/HouseDrum/TomLow.wav' },
    45: { high: 'sounds/DrumKit/HouseDrum/TomMid.wav',     mid: 'sounds/DrumKit/HouseDrum/TomMid.wav',   low: 'sounds/DrumKit/HouseDrum/TomMid.wav' },
    51: { high: 'sounds/DrumKit/HouseDrum/Ride.wav',       mid: 'sounds/DrumKit/HouseDrum/Ride.wav',     low: 'sounds/DrumKit/HouseDrum/Ride.wav' }
  },
  JazzDrumKit: {
    49: { high: 'sounds/DrumKit/JazzDrumKit/Crash_Hard.wav',    mid: 'sounds/DrumKit/JazzDrumKit/Crash_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/Crash_Soft.wav' },
    42: { high: 'sounds/DrumKit/JazzDrumKit/HH_Close_Hard.wav',   mid: 'sounds/DrumKit/JazzDrumKit/HH_Close_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/HH_Close_Soft.wav' },
    44: { high: 'sounds/DrumKit/JazzDrumKit/HH_Pedal_Hard.wav',   mid: 'sounds/DrumKit/JazzDrumKit/HH_Pedal_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/HH_Pedal_Soft.wav' },
    46: { high: 'sounds/DrumKit/JazzDrumKit/HH_Open_Hard.wav',   mid: 'sounds/DrumKit/JazzDrumKit/HH_Open_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/HH_Open_Soft.wav' },
    37: { high: 'sounds/DrumKit/JazzDrumKit/Kick_Hard.wav',       mid: 'sounds/DrumKit/JazzDrumKit/Kick_Moderate.wav',     low: 'sounds/DrumKit/JazzDrumKit/Kick_Soft.wav' },
    38: { high: 'sounds/DrumKit/JazzDrumKit/Snare_Hard.wav',      mid: 'sounds/DrumKit/JazzDrumKit/Snare_Moderate.wav',    low: 'sounds/DrumKit/JazzDrumKit/Snare_Soft.wav' },
    47: { high: 'sounds/DrumKit/JazzDrumKit/TomHigh_Hard.wav',    mid: 'sounds/DrumKit/JazzDrumKit/TomHigh_Moderate.wav',  low: 'sounds/DrumKit/JazzDrumKit/TomHigh_Soft.wav' },
    43: { high: 'sounds/DrumKit/JazzDrumKit/TomLow_Hard.wav',     mid: 'sounds/DrumKit/JazzDrumKit/TomLow_Moderate.wav',   low: 'sounds/DrumKit/JazzDrumKit/TomLow_Soft.wav' },
    45: { high: 'sounds/DrumKit/JazzDrumKit/TomMid_Hard.wav',     mid: 'sounds/DrumKit/JazzDrumKit/TomMid_Moderate.wav',   low: 'sounds/DrumKit/JazzDrumKit/TomMid_Soft.wav' },
    51: { high: 'sounds/DrumKit/JazzDrumKit/Ride_Hard.wav',       mid: 'sounds/DrumKit/JazzDrumKit/Ride_Moderate.wav',     low: 'sounds/DrumKit/JazzDrumKit/Ride_Soft.wav' }
  },

  // "pad top-left" data-note="49">
  // "pad top-right" data-note="51">
  // "pad middle-left" data-note="46">
  // "pad middle-center" data-note="47">
  // "pad middle-right" data-note="45">
  // "pad bottom-left" data-note="38">
  // "pad bottom-center" data-note="37">
  // "pad bottom-right" data-note="43">

  // 퍼커션 키트: 나중에 채워넣을 수 있도록 공간만 마련 (개발자가 파일명을 채워주세요)
  AfricanTribal: {
    // 예: pad 매핑 구조
    // 49: { high: '', mid: '', low: '' },
    // 51: { high: '', mid: '', low: '' },
    // … 8개 패드에 해당하는 구조를 추가하세요.
  },
  BossanovaLatin: {
    // 사용자가 채워넣을 공간
  },
  SymphonyOrchestra: {
    // 사용자가 채워넣을 공간
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
      document.querySelector('.top-left.pad').textContent    = '북(강)';
      document.querySelector('.top-right.pad').textContent   = '징';
      document.querySelector('.middle-left.pad').textContent  = '북(약)';
      document.querySelector('.middle-center.pad').textContent= '꽹과리(객)';
      document.querySelector('.middle-right.pad').textContent = '꽹과리(갱)';
      document.querySelector('.bottom-left.pad').textContent  = '장구(쿵L)';
      document.querySelector('.bottom-center.pad').textContent= '장구(쿵R)';
      document.querySelector('.bottom-right.pad').textContent = '장구(덕)';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Buk (Hard)';
      document.querySelector('.top-right.pad').textContent   = 'Jing';
      document.querySelector('.middle-left.pad').textContent  = 'Buk (Soft)';
      document.querySelector('.middle-center.pad').textContent= 'Kkwaeng (Gaek)';
      document.querySelector('.middle-right.pad').textContent = 'Kkwaeng (Gang)';
      document.querySelector('.bottom-left.pad').textContent  = 'Janggu (Kung L)';
      document.querySelector('.bottom-center.pad').textContent= 'Janggu (Kung R)';
      document.querySelector('.bottom-right.pad').textContent = 'Janggu (Duk)';
    }
  } else if (kitName === 'jangdan') {
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad').textContent    = '북(쿵L)';
      document.querySelector('.top-right.pad').textContent   = '장구(변죽)';
      document.querySelector('.middle-left.pad').textContent  = '북(쿵R)';
      document.querySelector('.middle-center.pad').textContent= '북(딱)';
      document.querySelector('.middle-right.pad').textContent = '장구(더러러)';
      document.querySelector('.bottom-left.pad').textContent  = '장구(쿵)';
      document.querySelector('.bottom-center.pad').textContent= '장구(덕)';
      document.querySelector('.bottom-right.pad').textContent = '장구(기덕)';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Buk (Kung L)';
      document.querySelector('.top-right.pad').textContent   = 'Janggu (Byunjuk)';
      document.querySelector('.middle-left.pad').textContent  = 'Buk (Kung R)';
      document.querySelector('.middle-center.pad').textContent= 'Buk (Ddak)';
      document.querySelector('.middle-right.pad').textContent = 'Janggu (Drrr)';
      document.querySelector('.bottom-left.pad').textContent  = 'Janggu (Kung)';
      document.querySelector('.bottom-center.pad').textContent= 'Janggu (Duk)';
      document.querySelector('.bottom-right.pad').textContent = 'Janggu (Giduk)';
    }
  } else if (
    kitName === 'BigDrumKit' ||
    kitName === 'CountryDrumKit' ||
    kitName === 'HiphopDrumKit' ||
    kitName === 'HouseDrumKit' ||
    kitName === 'JazzDrumKit'
  ) {
    // 새로운 드럼 키트들
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad').textContent    = '크래쉬';
      document.querySelector('.top-right.pad').textContent   = '라이드';
      document.querySelector('.middle-left.pad').textContent  = '하이햇';
      document.querySelector('.middle-center.pad').textContent= '톰 하이';
      document.querySelector('.middle-right.pad').textContent = '톰 미드';
      document.querySelector('.bottom-left.pad').textContent  = '스네어';
      document.querySelector('.bottom-center.pad').textContent= '킥';
      document.querySelector('.bottom-right.pad').textContent = '톰 로우';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Crash';
      document.querySelector('.top-right.pad').textContent   = 'Ride';
      document.querySelector('.middle-left.pad').textContent  = 'HH';
      document.querySelector('.middle-center.pad').textContent= 'Tom High';
      document.querySelector('.middle-right.pad').textContent = 'Tom Mid';
      document.querySelector('.bottom-left.pad').textContent  = 'Snare';
      document.querySelector('.bottom-center.pad').textContent= 'Kick';
      document.querySelector('.bottom-right.pad').textContent = 'Tom Low';
    }
  } else if (
    kitName === 'AfricanTribal' ||
    kitName === 'BossanovaLatin' ||
    kitName === 'SymphonyOrchestra'
  ) {
    // 새로운 퍼커션 키트들 – 기본 라벨 (추후 필요 시 수정 가능)
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad').textContent    = '퍼커션1';
      document.querySelector('.top-right.pad').textContent   = '퍼커션2';
      document.querySelector('.middle-left.pad').textContent  = '퍼커션3';
      document.querySelector('.middle-center.pad').textContent= '퍼커션4';
      document.querySelector('.middle-right.pad').textContent = '퍼커션5';
      document.querySelector('.bottom-left.pad').textContent  = '퍼커션6';
      document.querySelector('.bottom-center.pad').textContent= '퍼커션7';
      document.querySelector('.bottom-right.pad').textContent = '퍼커션8';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Percussion 1';
      document.querySelector('.top-right.pad').textContent   = 'Percussion 2';
      document.querySelector('.middle-left.pad').textContent  = 'Percussion 3';
      document.querySelector('.middle-center.pad').textContent= 'Percussion 4';
      document.querySelector('.middle-right.pad').textContent = 'Percussion 5';
      document.querySelector('.bottom-left.pad').textContent  = 'Percussion 6';
      document.querySelector('.bottom-center.pad').textContent= 'Percussion 7';
      document.querySelector('.bottom-right.pad').textContent = 'Percussion 8';
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
  // let soundFile = soundLayers.mid;
  let soundFile;
  if (velocity < 50) {
    soundFile = soundLayers.low;
  } else if (velocity < 100) {
    soundFile = soundLayers.mid;
  } else {
    soundFile = soundLayers.high;
  }

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