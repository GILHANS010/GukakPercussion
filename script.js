
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
 * (4) 사운드 맵 - 사물놀이 & 장단
 **************************************************************/


const soundMap = {
  samul: {
    36: { high: 'sounds/samul/buk_samul_hard_high.wav', mid: 'sounds/samul/buk_samul_hard_mid.wav', low: 'sounds/samul/buk_samul_hard_low.wav' },
    37: { high: 'sounds/samul/janggu_samul_rightkung_high.wav', mid: 'sounds/samul/janggu_samul_rightkung_mid.wav', low: 'sounds/samul/janggu_samul_rightkung_low.wav' },
    38: { high: 'sounds/samul/janggu_samul_kung_high.wav', mid: 'sounds/samul/janggu_samul_kung_mid.wav', low: 'sounds/samul/janggu_samul_kung_low.wav' },
    42: { high: 'sounds/samul/buk_samul_soft_high.wav', mid: 'sounds/samul/buk_samul_soft_mid.wav', low: 'sounds/samul/buk_samul_soft_low.wav' },
    43: { high: 'sounds/samul/janggu_samul_duk_high.wav', mid: 'sounds/samul/janggu_samul_duk_mid.wav', low: 'sounds/samul/janggu_samul_duk_low.wav' },
    44: { high: 'sounds/samul/buk_samul_soft_high.wav', mid: 'sounds/samul/buk_samul_soft_mid.wav', low: 'sounds/samul/buk_samul_soft_low.wav' },
    45: { high: 'sounds/samul/kkwaenggwari_samul_gang_high.wav', mid: 'sounds/samul/kkwaenggwari_samul_gang_mid.wav', low: 'sounds/samul/kkwaenggwari_samul_gang_low.wav' },
    46: { high: 'sounds/samul/buk_samul_soft_high.wav', mid: 'sounds/samul/buk_samul_soft_mid.wav', low: 'sounds/samul/buk_samul_soft_low.wav' },
    47: { high: 'sounds/samul/kkwaenggwari_samul_gaek_high.wav', mid: 'sounds/samul/kkwaenggwari_samul_gaek_mid.wav', low: 'sounds/samul/kkwaenggwari_samul_gaek_low.wav' },
    49: { high: 'sounds/samul/buk_samul_hard_high.wav', mid: 'sounds/samul/buk_samul_hard_mid.wav', low: 'sounds/samul/buk_samul_hard_low.wav' },
    51: { high: 'sounds/samul/jing_samul_high.wav', mid: 'sounds/samul/jing_samul_mid.wav', low: 'sounds/samul/jing_samul_low.wav' },
  },

  jangdan: {
    36: { high: 'sounds/jangdan/buk_jangdan_lefthand_high.wav', mid: 'sounds/jangdan/buk_jangdan_lefthand_mid.wav', low: 'sounds/jangdan/buk_jangdan_lefthand_low.wav' },
    37: { high: 'sounds/jangdan/janggu_jangdan_duk_high.wav', mid: 'sounds/jangdan/janggu_jangdan_duk_mid.wav', low: 'sounds/jangdan/janggu_jangdan_duk_low.wav' },
    38: { high: 'sounds/jangdan/janggu_jangdan_kung_high.wav', mid: 'sounds/jangdan/janggu_jangdan_kung_mid.wav', low: 'sounds/jangdan/janggu_jangdan_kung_low.wav' },
    42: { high: 'sounds/jangdan/buk_jangdan_righthand_high.wav', mid: 'sounds/jangdan/buk_jangdan_righthand_mid.wav', low: 'sounds/jangdan/buk_jangdan_righthand_low.wav' },
    43: { high: 'sounds/jangdan/janggu_jangdan_giduk_high.wav', mid: 'sounds/jangdan/janggu_jangdan_giduk_mid.wav', low: 'sounds/jangdan/janggu_jangdan_giduk_low.wav' },
    44: { high: 'sounds/jangdan/buk_jangdan_righthand_high.wav', mid: 'sounds/jangdan/buk_jangdan_righthand_mid.wav', low: 'sounds/jangdan/buk_jangdan_righthand_low.wav' },
    45: { high: 'sounds/jangdan/janggu_jangdan_drrr_high.wav', mid: 'sounds/jangdan/janggu_jangdan_drrr_mid.wav', low: 'sounds/jangdan/janggu_jangdan_drrr_low.wav' },
    46: { high: 'sounds/jangdan/buk_jangdan_righthand_high.wav', mid: 'sounds/jangdan/buk_jangdan_righthand_mid.wav', low: 'sounds/jangdan/buk_jangdan_righthand_low.wav' },
    47: { high: 'sounds/jangdan/buk_jangdan_ddak_high.wav', mid: 'sounds/jangdan/buk_jangdan_ddak_mid.wav', low: 'sounds/jangdan/buk_jangdan_ddak_low.wav' },
    49: { high: 'sounds/jangdan/buk_jangdan_lefthand_high.wav', mid: 'sounds/jangdan/buk_jangdan_lefthand_mid.wav', low: 'sounds/jangdan/buk_jangdan_lefthand_low.wav' },
    51: { high: 'sounds/jangdan/janggu_jangdan_byunjuk_high.wav', mid: 'sounds/jangdan/janggu_jangdan_byunjuk_mid.wav', low: 'sounds/jangdan/janggu_jangdan_byunjuk_low.wav' },
  },

  BigDrumKit: {
    36: { high: 'sounds/DrumKit/BigDrumKit/Kick_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/Kick_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/Kick_Soft.wav' },
    37: { high: 'sounds/DrumKit/BigDrumKit/Rimshot_Hard.wav', mid:'sounds/DrumKit/BigDrumKit/Rimshot_Moderate.wav', low:"sounds/DrumKit/BigDrumKit/Rimshot_Soft.wav"},
    38: { high: 'sounds/DrumKit/BigDrumKit/Snare_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/Snare_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/Snare_Soft.wav' },
    42: { high: 'sounds/DrumKit/BigDrumKit/HH_Close_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/HH_Close_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/HH_Close_Soft.wav' },
    43: { high: 'sounds/DrumKit/BigDrumKit/TomLow_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/TomLow_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/TomLow_Soft.wav' },
    44: { high: 'sounds/DrumKit/BigDrumKit/HH_Pedal_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/HH_Pedal_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/HH_Pedal_Soft.wav' },
    45: { high: 'sounds/DrumKit/BigDrumKit/TomMid_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/TomMid_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/TomMid_Soft.wav' },
    46: { high: 'sounds/DrumKit/BigDrumKit/HH_Open_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/HH_Open_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/HH_Open_Soft.wav' },
    47: { high: 'sounds/DrumKit/BigDrumKit/TomHigh_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/TomHigh_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/TomHigh_Soft.wav' },
    49: { high: 'sounds/DrumKit/BigDrumKit/Crash_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/Crash_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/Crash_Soft.wav' },
    51: { high: 'sounds/DrumKit/BigDrumKit/Ride_Hard.wav', mid: 'sounds/DrumKit/BigDrumKit/Ride_Moderate.wav', low: 'sounds/DrumKit/BigDrumKit/Ride_Soft.wav' },
  },

  CountryDrumKit: {
    36: { high: 'sounds/DrumKit/CountryDrumKit/Kick_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/Kick_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/Kick_Soft.wav' },
    37: { high: 'sounds/DrumKit/CountryDrumKit/Rimshot_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/Rimshot_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/Rimshot_Soft.wav' },
    38: { high: 'sounds/DrumKit/CountryDrumKit/Snare_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/Snare_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/Snare_Soft.wav' },
    42: { high: 'sounds/DrumKit/CountryDrumKit/HH_Close_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/HH_Close_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/HH_Close_Soft.wav' },
    43: { high: 'sounds/DrumKit/CountryDrumKit/TomLow_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/TomLow_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/TomLow_Soft.wav' },
    44: { high: 'sounds/DrumKit/CountryDrumKit/HH_Pedal_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/HH_Pedal_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/HH_Pedal_Soft.wav' },
    45: { high: 'sounds/DrumKit/CountryDrumKit/TomMid_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/TomMid_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/TomMid_Soft.wav' },
    46: { high: 'sounds/DrumKit/CountryDrumKit/HH_Open_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/HH_Open_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/HH_Open_Soft.wav' },
    47: { high: 'sounds/DrumKit/CountryDrumKit/TomHigh_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/TomHigh_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/TomHigh_Soft.wav' },
    49: { high: 'sounds/DrumKit/CountryDrumKit/Crash_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/Crash_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/Crash_Soft.wav' },
    51: { high: 'sounds/DrumKit/CountryDrumKit/Ride_Hard.wav', mid: 'sounds/DrumKit/CountryDrumKit/Ride_Moderate.wav', low: 'sounds/DrumKit/CountryDrumKit/Ride_Soft.wav' },
  },

  HiphopDrumKit: {
    36: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick_Soft.wav' },
    37: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Rimshot_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Rimshot_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Rimshot_Soft.wav' },
    38: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare_Soft.wav' },
    42: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Close_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Close_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Close_Soft.wav' },
    43: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow_Soft.wav' },
    44: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal_Soft.wav' },
    45: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid_Soft.wav' },
    46: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open_Soft.wav' },
    47: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh_Soft.wav' },
    49: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash_Soft.wav' },
    51: { high: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride_Hard.wav', mid: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride_Moderate.wav', low: 'sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride_Soft.wav' },
  },

  HouseDrumKit: {
    36: { high: 'sounds/DrumKit/HouseDrum/Kick.wav', mid: 'sounds/DrumKit/HouseDrum/Kick.wav', low: 'sounds/DrumKit/HouseDrum/Kick.wav' },
    37: { high: 'sounds/DrumKit/HouseDrum/Rimshot.wav', mid: 'sounds/DrumKit/HouseDrum/Rimshot.wav', low: 'sounds/DrumKit/HouseDrum/Rimshot.wav' },
    38: { high: 'sounds/DrumKit/HouseDrum/Snare.wav', mid: 'sounds/DrumKit/HouseDrum/Snare.wav', low: 'sounds/DrumKit/HouseDrum/Snare.wav' },
    42: { high: 'sounds/DrumKit/HouseDrum/HH_Close.wav', mid: 'sounds/DrumKit/HouseDrum/HH_Close.wav', low: 'sounds/DrumKit/HouseDrum/HH_Close.wav' },
    43: { high: 'sounds/DrumKit/HouseDrum/TomLow.wav', mid: 'sounds/DrumKit/HouseDrum/TomLow.wav', low: 'sounds/DrumKit/HouseDrum/TomLow.wav' },
    44: { high: 'sounds/DrumKit/HouseDrum/HH_Pedal.wav', mid: 'sounds/DrumKit/HouseDrum/HH_Pedal.wav', low: 'sounds/DrumKit/HouseDrum/HH_Pedal.wav' },
    45: { high: 'sounds/DrumKit/HouseDrum/TomMid.wav', mid: 'sounds/DrumKit/HouseDrum/TomMid.wav', low: 'sounds/DrumKit/HouseDrum/TomMid.wav' },
    46: { high: 'sounds/DrumKit/HouseDrum/HH_Open.wav', mid: 'sounds/DrumKit/HouseDrum/HH_Open.wav', low: 'sounds/DrumKit/HouseDrum/HH_Open.wav' },
    47: { high: 'sounds/DrumKit/HouseDrum/TomHigh.wav', mid: 'sounds/DrumKit/HouseDrum/TomHigh.wav', low: 'sounds/DrumKit/HouseDrum/TomHigh.wav' },
    49: { high: 'sounds/DrumKit/HouseDrum/Crash.wav', mid: 'sounds/DrumKit/HouseDrum/Crash.wav', low: 'sounds/DrumKit/HouseDrum/Crash.wav' },
    51: { high: 'sounds/DrumKit/HouseDrum/Ride.wav', mid: 'sounds/DrumKit/HouseDrum/Ride.wav', low: 'sounds/DrumKit/HouseDrum/Ride.wav' },
  },

  JazzDrumKit: {
    36: { high: 'sounds/DrumKit/JazzDrumKit/Kick_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/Kick_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/Kick_Soft.wav' },
    37: { high: 'sounds/DrumKit/JazzDrumKit/Rimshot_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/Rimshot_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/Rimshot_Soft.wav' },
    38: { high: 'sounds/DrumKit/JazzDrumKit/Snare_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/Snare_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/Snare_Soft.wav' },
    42: { high: 'sounds/DrumKit/JazzDrumKit/HH_Close_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/HH_Close_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/HH_Close_Soft.wav' },
    43: { high: 'sounds/DrumKit/JazzDrumKit/TomLow_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/TomLow_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/TomLow_Soft.wav' },
    44: { high: 'sounds/DrumKit/JazzDrumKit/HH_Pedal_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/HH_Pedal_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/HH_Pedal_Soft.wav' },
    45: { high: 'sounds/DrumKit/JazzDrumKit/TomMid_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/TomMid_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/TomMid_Soft.wav' },
    46: { high: 'sounds/DrumKit/JazzDrumKit/HH_Open_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/HH_Open_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/HH_Open_Soft.wav' },
    47: { high: 'sounds/DrumKit/JazzDrumKit/TomHigh_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/TomHigh_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/TomHigh_Soft.wav' },
    49: { high: 'sounds/DrumKit/JazzDrumKit/Crash_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/Crash_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/Crash_Soft.wav' },
    51: { high: 'sounds/DrumKit/JazzDrumKit/Ride_Hard.wav', mid: 'sounds/DrumKit/JazzDrumKit/Ride_Moderate.wav', low: 'sounds/DrumKit/JazzDrumKit/Ride_Soft.wav' },
  },

  AfricanTribal: {
    36: { high: 'sounds/Percussion/AfricanTribal/Djembe_Kick_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Djembe_Kick_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Djembe_Kick_Soft.wav' },
    37: { high:"", mid:"", low:""},
    38: { high: 'sounds/Percussion/AfricanTribal/Djembe_Hit_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Djembe_Hit_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Djembe_Hit_Soft.wav' },
    42: { high: 'sounds/Percussion/AfricanTribal/Caxixi_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Caxixi_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Caxixi_Soft.wav' },
    43: { high: 'sounds/Percussion/AfricanTribal/TalkingDrum_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/TalkingDrum_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/TalkingDrum_Soft.wav' },
    44: { high: 'sounds/Percussion/AfricanTribal/Caxixi_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Caxixi_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Caxixi_Soft.wav' },
    45: { high: 'sounds/Percussion/AfricanTribal/Conga_Right_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Conga_Right_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Conga_Right_Soft.wav' },
    46: { high: 'sounds/Percussion/AfricanTribal/Caxixi_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Caxixi_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Caxixi_Soft.wav' },
    47: { high: 'sounds/Percussion/AfricanTribal/Conga_Left_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Conga_Left_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Conga_Left_Soft.wav' },
    49: { high: 'sounds/Percussion/AfricanTribal/Agogo_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Agogo_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Agogo_Soft.wav' },
    51: { high: 'sounds/Percussion/AfricanTribal/Udu_Hard.wav', mid: 'sounds/Percussion/AfricanTribal/Udu_Moderate.wav', low: 'sounds/Percussion/AfricanTribal/Udu_Soft.wav' },
  },

  BossanovaLatin: {
    36: { high: 'sounds/Percussion/BossanovaLatin/Cajon_Kick_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Cajon_Kick_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Cajon_Kick_Soft.wav' },
    37: { high:"", mid:"", low:""},
    38: { high: 'sounds/Percussion/BossanovaLatin/Cajon_Hit_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Cajon_Hit_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Cajon_Hit_Soft.wav' },
    42: { high: 'sounds/Percussion/BossanovaLatin/Shaker_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Shaker_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Shaker_Soft.wav' },
    43: { high: 'sounds/Percussion/BossanovaLatin/Clap_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Clap_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Clap_Soft.wav' },
    44: { high: 'sounds/Percussion/BossanovaLatin/Shaker_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Shaker_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Shaker_Soft.wav' },
    45: { high: 'sounds/Percussion/BossanovaLatin/Quinto_Kick_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Quinto_Kick_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Quinto_Kick_Soft.wav' },
    46: { high: 'sounds/Percussion/BossanovaLatin/Shaker_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Shaker_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Shaker_Soft.wav' },
    47: { high: 'sounds/Percussion/BossanovaLatin/Quinto_Hit_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Quinto_Hit_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Quinto_Hit_Soft.wav' },
    49: { high: 'sounds/Percussion/BossanovaLatin/Cowbell_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Cowbell_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Cowbell_Soft.wav' },
    51: { high: 'sounds/Percussion/BossanovaLatin/Claves_Hard.wav', mid: 'sounds/Percussion/BossanovaLatin/Claves_Moderate.wav', low: 'sounds/Percussion/BossanovaLatin/Claves_Soft.wav' },
  },

  SymphonyOrchestra: {
    36: { high: 'sounds/Percussion/SymphonyOrchestra/BassDrum_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/BassDrum_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/BassDrum_Soft.wav' },
    37: { high:"", mid:"", low:""},
    38: { high: 'sounds/Percussion/SymphonyOrchestra/Tambourine_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/Tambourine_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/Tambourine_Soft.wav' },
    42: { high: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Soft.wav' },
    43: { high: 'sounds/Percussion/SymphonyOrchestra/Timpani_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/Timpani_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/Timpani_Soft.wav' },
    44: { high: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Soft.wav' },
    45: { high: 'sounds/Percussion/SymphonyOrchestra/SleighBell_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/SleighBell_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/SleighBell_Soft.wav' },
    46: { high: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/Woodblock_Soft.wav' },
    47: { high: 'sounds/Percussion/SymphonyOrchestra/Castanets_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/Castanets_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/Castanets_Soft.wav' },
    49: { high: 'sounds/Percussion/SymphonyOrchestra/Crash_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/Crash_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/Crash_Soft.wav' },
    51: { high: 'sounds/Percussion/SymphonyOrchestra/Triangle_Hard.wav', mid: 'sounds/Percussion/SymphonyOrchestra/Triangle_Moderate.wav', low: 'sounds/Percussion/SymphonyOrchestra/Triangle_Soft.wav' },
  }
};

  // "pad top-left" data-note="49">
  // "pad top-right" data-note="51">
  // "pad middle-left" data-note="46">
  // "pad middle-center" data-note="47">
  // "pad middle-right" data-note="45">
  // "pad bottom-left" data-note="38">
  // "pad bottom-center" data-note="37">
  // "pad bottom-right" data-note="43">
  // "left-bottom-pad" data-note="44">
  // "right-bottom-pad" data-note="36">

let currentKit = 'samul'; // 현재 선택된 키트
let audioBuffers = {};     // 오디오 버퍼를 저장할 객체 (미리 로딩된 사운드)

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

/**************************************************************
 * (5) 라디오로 키트 선택
 **************************************************************/
const kitRadios = document.querySelectorAll('input[name="kitOption"]');
kitRadios.forEach((radio) => {
  radio.addEventListener('change', (ev) => {
    const selectedKit = ev.target.value; // 'samul' or 'jangdan'
    loadKit(selectedKit);
    preloadSounds(selectedKit);  // ★ 키트 변경 시 사운드 미리 로드
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
      document.querySelector('.left-bottom-pad').textContent= '북(약)';
      document.querySelector('.right-bottom-pad').textContent = '북(강)';

    } else {
      document.querySelector('.top-left.pad').textContent    = 'Buk (Hard)';
      document.querySelector('.top-right.pad').textContent   = 'Jing';
      document.querySelector('.middle-left.pad').textContent  = 'Buk (Soft)';
      document.querySelector('.middle-center.pad').textContent= 'Kkwaeng (Gaek)';
      document.querySelector('.middle-right.pad').textContent = 'Kkwaeng (Gang)';
      document.querySelector('.bottom-left.pad').textContent  = 'Janggu (Kung L)';
      document.querySelector('.bottom-center.pad').textContent= 'Janggu (Kung R)';
      document.querySelector('.bottom-right.pad').textContent = 'Janggu (Duk)';
      document.querySelector('.left-bottom-pad').textContent= 'Buk (Soft)';
      document.querySelector('.right-bottom-pad').textContent = 'Buk (Hard)';
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
      document.querySelector('.left-bottom-pad').textContent= '북(쿵R)';
      document.querySelector('.right-bottom-pad').textContent = '북(쿵L)';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Buk (Kung L)';
      document.querySelector('.top-right.pad').textContent   = 'Janggu (Byunjuk)';
      document.querySelector('.middle-left.pad').textContent  = 'Buk (Kung R)';
      document.querySelector('.middle-center.pad').textContent= 'Buk (Ddak)';
      document.querySelector('.middle-right.pad').textContent = 'Janggu (Drrr)';
      document.querySelector('.bottom-left.pad').textContent  = 'Janggu (Kung)';
      document.querySelector('.bottom-center.pad').textContent= 'Janggu (Duk)';
      document.querySelector('.bottom-right.pad').textContent = 'Janggu (Giduk)';
      document.querySelector('.left-bottom-pad').textContent= 'Buk (Kung R)';
      document.querySelector('.right-bottom-pad').textContent = 'Buk (Kung L)';
    }
  } else if (
    kitName === 'BigDrumKit' ||
    kitName === 'CountryDrumKit' ||
    kitName === 'HiphopDrumKit' ||
    kitName === 'HouseDrumKit' ||
    kitName === 'JazzDrumKit'
  ) {
    // 드럼 키트 종류
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad').textContent    = '크래쉬';
      document.querySelector('.top-right.pad').textContent   = '라이드';
      document.querySelector('.middle-left.pad').textContent  = '하이햇';
      document.querySelector('.middle-center.pad').textContent= '톰 하이';
      document.querySelector('.middle-right.pad').textContent = '톰 미드';
      document.querySelector('.bottom-left.pad').textContent  = '스네어';
      document.querySelector('.bottom-center.pad').textContent= '림샷';
      document.querySelector('.bottom-right.pad').textContent = '톰 로우';
      document.querySelector('.left-bottom-pad').textContent= '하이햇 페달';
      document.querySelector('.right-bottom-pad').textContent = '킥';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Crash';
      document.querySelector('.top-right.pad').textContent   = 'Ride';
      document.querySelector('.middle-left.pad').textContent  = 'HH';
      document.querySelector('.middle-center.pad').textContent= 'Tom High';
      document.querySelector('.middle-right.pad').textContent = 'Tom Mid';
      document.querySelector('.bottom-left.pad').textContent  = 'Snare';
      document.querySelector('.bottom-center.pad').textContent= 'Rim Shot';
      document.querySelector('.bottom-right.pad').textContent = 'Tom Low';
      document.querySelector('.left-bottom-pad').textContent= 'HH Pedal';
      document.querySelector('.right-bottom-pad').textContent = 'Kick';
    }
  } else if (kitName === 'AfricanTribal') {
    // AfricanTribal 키트 -  기본 라벨 (Generic labels for now)
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad').textContent    = '아고고';
      document.querySelector('.top-right.pad').textContent   = '우두';
      document.querySelector('.middle-left.pad').textContent  = '카시시';
      document.querySelector('.middle-center.pad').textContent= '콩가 (왼손)';    
      document.querySelector('.middle-right.pad').textContent = '콩가 (오른손)';
      document.querySelector('.bottom-left.pad').textContent  = '젬베 힛';
      document.querySelector('.bottom-center.pad').textContent= '';   
      document.querySelector('.bottom-right.pad').textContent = '토킹 드럼';
      document.querySelector('.left-bottom-pad').textContent= '카시시';
      document.querySelector('.right-bottom-pad').textContent = '젬베 킥';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Agogo';
      document.querySelector('.top-right.pad').textContent   = 'Udu';
      document.querySelector('.middle-left.pad').textContent  = 'Caxixi';
      document.querySelector('.middle-center.pad').textContent= 'Conga (Left)';        
      document.querySelector('.middle-right.pad').textContent = 'Conga (Right)';
      document.querySelector('.bottom-left.pad').textContent  = 'Djembe Hit';
      document.querySelector('.bottom-center.pad').textContent= '';         
      document.querySelector('.bottom-right.pad').textContent = 'Talking Drum';
      document.querySelector('.left-bottom-pad').textContent= 'Caxixi';
      document.querySelector('.right-bottom-pad').textContent = 'Djembe Kick';
    }
  } else if (kitName === 'BossanovaLatin') {
    // BossanovaLatin 키트 -  맞춤 라벨
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad').textContent    = '카우벨';
      document.querySelector('.top-right.pad').textContent   = '클라베스';
      document.querySelector('.middle-left.pad').textContent  = '쉐이커';
      document.querySelector('.middle-center.pad').textContent= '퀸토 힛';
      document.querySelector('.middle-right.pad').textContent = '퀸토 킥';
      document.querySelector('.bottom-left.pad').textContent  = '카혼 힛';
      document.querySelector('.bottom-center.pad').textContent= '';   
      document.querySelector('.bottom-right.pad').textContent = '클랩';
      document.querySelector('.left-bottom-pad').textContent= '쉐이커';
      document.querySelector('.right-bottom-pad').textContent = '카혼 킥';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Cowbell';
      document.querySelector('.top-right.pad').textContent   = 'Claves'; 
      document.querySelector('.middle-left.pad').textContent  = 'Shaker';
      document.querySelector('.middle-center.pad').textContent= 'Quinto Hit';
      document.querySelector('.middle-right.pad').textContent = 'Quinto Kick'; 
      document.querySelector('.bottom-left.pad').textContent  = 'Cajon Hit';
      document.querySelector('.bottom-center.pad').textContent= '';
      document.querySelector('.bottom-right.pad').textContent = 'Clap';
      document.querySelector('.left-bottom-pad').textContent= 'Shaker';
      document.querySelector('.right-bottom-pad').textContent = 'Cajon Kick';
    }
  } else if (kitName === 'SymphonyOrchestra') {
    // SymphonyOrchestra 키트 -  수정된 맞춤 라벨 (Corrected Labels)
    if (currentLang === 'ko') {
      document.querySelector('.top-left.pad').textContent    = '크래쉬 심벌';
      document.querySelector('.top-right.pad').textContent   = '트라이앵글';
      document.querySelector('.middle-left.pad').textContent  = '우드블록';
      document.querySelector('.middle-center.pad').textContent= '캐스터네츠';
      document.querySelector('.middle-right.pad').textContent = '슬레이벨';
      document.querySelector('.bottom-left.pad').textContent  = '탬버린';
      document.querySelector('.bottom-center.pad').textContent= '';
      document.querySelector('.bottom-right.pad').textContent = '팀파니';
      document.querySelector('.left-bottom-pad').textContent= '왼쪽 페달';
      document.querySelector('.right-bottom-pad').textContent = '큰북';
    } else {
      document.querySelector('.top-left.pad').textContent    = 'Crash Cymbal';
      document.querySelector('.top-right.pad').textContent   = 'Triangle';
      document.querySelector('.middle-left.pad').textContent  = 'Woodblock';
      document.querySelector('.middle-center.pad').textContent= 'Castanets'; 
      document.querySelector('.middle-right.pad').textContent = 'Sleigh Bells';
      document.querySelector('.bottom-left.pad').textContent  = 'Tambourine';
      document.querySelector('.bottom-center.pad').textContent= '';
      document.querySelector('.bottom-right.pad').textContent = 'Timpani';
      document.querySelector('.left-bottom-pad').textContent= 'Left Pedal';
      document.querySelector('.right-bottom-pad').textContent = 'Bass Drum';
    }
  }
}

/**************************************************************
 * (7) Web MIDI Access
 **************************************************************/
// MIDI 입력 처리
function handleMidiInput(message) {
  const [command, note, velocity] = message.data;

  if (command === 144 && velocity > 0) { // Note On
    playSound(note, velocity);
    // 패드 시각 효과
    const pad = document.querySelector(`.pad[data-note="${note}"]`);
    if(pad) {
      pad.classList.add('active');
      setTimeout(() => pad.classList.remove('active'), 100);
    }

  }
}

// MIDI 접근 요청
if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);
}

function onMIDISuccess(midiAccess) {
  const inputs = midiAccess.inputs.values();
  for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
    input.value.onmidimessage = handleMidiInput;
  }
}

function onMIDIFailure() {
  console.warn('Could not access your MIDI devices.');
}

// 키보드 입력 처리 (기존 코드와 동일)
document.addEventListener('keydown', (event) => {
    const keyToNote = {
      'z': 38, 'x': 37, 'c': 43,
      'a': 46, 's': 47, 'd': 45,
      'q': 49, 'e': 51
    };
    const note = keyToNote[event.key.toLowerCase()];
    if (note) {
        playSound(note, 80); // 키보드는 고정된 velocity 사용
      // 패드 시각적 효과
      const pad = document.querySelector(`.pad[data-note="${note}"]`);
      if(pad){
        pad.classList.add('active');
        setTimeout(() => pad.classList.remove('active'), 100);
      }
    }
});


/**************************************************************
 * (7) preloadSounds() - 지정된 키트에 대한 모든 사운드 미리 로드
 **************************************************************/
async function preloadSounds(kitName) { // async 함수로 변경
  // 이미 로드된 사운드가 있으면 로딩 X
  if (audioBuffers[kitName]) {
    console.log(`Kit "${kitName}" already preloaded.`);
    return;
  }

  audioBuffers[kitName] = {}; // 해당 키트에 대한 버퍼 객체 생성
  const kitSounds = soundMap[kitName];

  const promises = [];

  for (let note in kitSounds) {
    if (kitSounds.hasOwnProperty(note)) {
      audioBuffers[kitName][note] = {}; // 각 노트별 버퍼 객체
      for (let intensity in kitSounds[note]) {
        if (kitSounds[note].hasOwnProperty(intensity)) {
          const url = kitSounds[note][intensity];

          // ★ Promise 생성 및 배열에 추가 (fetch 비동기 처리를 위해)
          const promise = (async () => { // async 화살표 함수 사용
            try {
              const response = await fetch(url);
              if (!response.ok) { //  HTTP 응답 상태 확인
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const arrayBuffer = await response.arrayBuffer();
              const audioBuffer = await audioContext.decodeAudioData(arrayBuffer); // 전역 audioContext 사용
              audioBuffers[kitName][note][intensity] = audioBuffer; // 로드된 버퍼 저장
              console.log(`Loaded: ${url}`);
            } catch (error) {
              console.error(`Error loading or decoding sound: ${url}`, error);
            }
          })();
          promises.push(promise);
        }
      }
    }
  }

   // ★ 모든 프로미스가 완료될 때까지 기다림 (await 사용).
  await Promise.all(promises);
  console.log(`All sounds for kit "${kitName}" preloaded.`);
}

/**************************************************************
 * (8) 사운드 재생
 **************************************************************/
function playSound(note, velocity) {
  if (!audioBuffers[currentKit] || !audioBuffers[currentKit][note]) {
    console.warn(`No sound loaded for note ${note} in kit ${currentKit}`);
    return;
  }

  let intensity = 'mid';
  if (velocity > 100) intensity = 'high';
  else if (velocity < 50) intensity = 'low';

  const buffer = audioBuffers[currentKit][note][intensity] || audioBuffers[currentKit][note]['mid'];

  if (!buffer) {
    console.warn(`No sound loaded for note ${note}, intensity ${intensity} in kit ${currentKit}`);
    return;
  }

  // Gain Node 생성
  const gainNode = audioContext.createGain();

  // velocity 값을 0에서 1 사이의 값으로 매핑 (볼륨 조절)
  const gainValue = velocity / 127;
  gainNode.gain.value = gainValue;

  // 오디오 소스 생성 및 Gain Node에 연결
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(gainNode);

  // Gain Node를 최종 목적지(스피커)에 연결
  gainNode.connect(audioContext.destination);

  source.start(0);
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

/**************************************************************
 * (3) 초기 구동 및 언어 토글 버튼 설정
 **************************************************************/
window.addEventListener('load', () => {
  // 언어 초기화
  setLanguage(currentLang);

  // 로딩 화면 제거 (기존 코드)
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen?.classList.add('hidden');
  }, 100);

  // 기본(사물놀이) 키트 로드 및 사운드 미리 로드
  loadKit('samul');       // UI (패드 텍스트)
  preloadSounds('samul');  // ★★★★★ 초기 사운드 로딩 ★★★★★
});

document.getElementById('lang-toggle').addEventListener('click', () => {
  const newLang = (currentLang === 'ko') ? 'en' : 'ko';
  setLanguage(newLang);
  // ★ 만약 패드 이름까지 언어 전환한다면, loadKit(currentKit) 다시 호출
  loadKit(currentKit);
});
