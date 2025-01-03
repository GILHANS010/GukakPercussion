/**************************************************************
 * 1) 키트별로 나뉜 soundMap
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
      high: 'sounds/samul/kkwaenggwari_samul_get_high.wav',
      mid: 'sounds/samul/kkwaenggwari_samul_get_mid.wav',
      low: 'sounds/samul/kkwaenggwari_samul_get_low.wav',
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
  }
  
  };

  // Velocity Layer 예시
  // 46: {
  //   high: 'sounds/jangdan/gaeng_high.mp3',
  //   mid:  'sounds/jangdan/gaeng_mid.mp3',
  //   low:  'sounds/jangdan/gaeng_low.mp3'
  // },

  /**************************************************************
   * 2) 현재 활성화된 키트 이름 (초기값: 'samul')
   **************************************************************/
  let currentKit = 'samul';
  
  /**************************************************************
   * 3) MIDI 연동 및 로딩 초기 설정
   **************************************************************/
  window.addEventListener('load', () => {
    // 로딩 화면 제거
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen?.classList.add('hidden');
    }, 1000);
  
    // 기본값(사물놀이 키트) 적용
    loadKit('samul');
  });
  
  /**************************************************************
   * 4) "라디오 버튼"으로 키트 선택
   **************************************************************/
  const kitRadios = document.querySelectorAll('input[name="kitOption"]');
  kitRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const selectedKit = event.target.value; // 'samul' 또는 'jangdan'
      loadKit(selectedKit);
    });
  });
  
  /**************************************************************
   * 5) loadKit() - 패드 라벨 등 업데이트
   **************************************************************/
  function loadKit(kitName) {
    currentKit = kitName;
  
    if (kitName === 'samul') {
      document.querySelector('.top-left.pad')    .textContent = '북(강)';
      document.querySelector('.top-right.pad')   .textContent = '징';
      document.querySelector('.middle-left.pad') .textContent = '북(약)';
      document.querySelector('.middle-center.pad').textContent = '꽹과리(객)';
      document.querySelector('.middle-right.pad').textContent = '꽹과리(갱)';
      document.querySelector('.bottom-left.pad') .textContent = '장구(쿵L)';
      document.querySelector('.bottom-center.pad').textContent = '장구(쿵R)';
      document.querySelector('.bottom-right.pad').textContent = '장구(덕)';
    } 
    else if (kitName === 'jangdan') {
      document.querySelector('.top-left.pad')    .textContent = '북(쿵L)';
      document.querySelector('.top-right.pad')   .textContent = '장구(변죽)';
      document.querySelector('.middle-left.pad') .textContent = '북(쿵R)';
      document.querySelector('.middle-center.pad').textContent = '북(딱)';
      document.querySelector('.middle-right.pad').textContent = '장구(더러러)';
      document.querySelector('.bottom-left.pad') .textContent = '장구(쿵)';
      document.querySelector('.bottom-center.pad').textContent = '장구(덕)';
      document.querySelector('.bottom-right.pad').textContent = '장구(기덕)';
    }
  }
  
  /**************************************************************
   * 6) Web MIDI Access
   **************************************************************/
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
  
  /**************************************************************
   * 7) 사운드 재생 함수
   **************************************************************/
  function playSound(note, velocity = 127) {
    const kitSounds = soundMap[currentKit]; 
    const soundLayers = kitSounds[note];   
  
    if (!soundLayers) {
      console.warn(`No sound mapped for note ${note} in kit '${currentKit}'`);
      return;
    }
  
    if (typeof soundLayers === 'string') {
      const audio = new Audio(soundLayers);
      audio.volume = Math.max(0, Math.min(1, velocity / 127));
      audio.play();
    } else {
      let soundFile;
      if (velocity > 100 && soundLayers.high) {
        soundFile = soundLayers.high;
      } else if (velocity > 50 && soundLayers.mid) {
        soundFile = soundLayers.mid;
      } else if (soundLayers.low) {
        soundFile = soundLayers.low;
      } else {
        soundFile = soundLayers.high || soundLayers.mid || soundLayers.low;
      }
  
      if (soundFile) {
        const audio = new Audio(soundFile);
        audio.volume = Math.max(0, Math.min(1, velocity / 127));
        audio.play();
      } else {
        console.warn(`No sound file found in velocity layers for note ${note}`);
      }
    }
  }
  
  /**************************************************************
   * 8) 패드 하이라이트
   **************************************************************/
  function highlightPad(note) {
    const pad = document.querySelector(`.pad[data-note="${note}"]`);
    if (pad) {
      pad.classList.add('active');
      setTimeout(() => pad.classList.remove('active'), 100);
    }
  }
  
  /**************************************************************
   * 9) 마우스 클릭 시 사운드 재생
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
   * 10) 키보드 입력 연주
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
  
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (keyboardMap[key]) {
      const note = keyboardMap[key];
      playSound(note, 100);
      highlightPad(note);
    }
  });
  
  /**************************************************************
   * 11) 오디오 컨텍스트 Unlock
   **************************************************************/
  document.addEventListener('click', () => {
    const audio = new Audio();
    audio.play().catch(() => {
      console.log('Audio context unlocked');
    });
  }, { once: true });
  
  /**************************************************************
   * 12) 리듬 데모 
   **************************************************************/
  let demoPlaying = false;
  let currentIndex = 0;
  
  const rhythmPattern = [
    { notes: [51, 37, 43, 49, 46], delay: 0 },
    { notes: [37, 43, 49, 46],     delay: 600 },
    { notes: [37, 43, 49, 46],     delay: 1200 },
    { notes: [38, 43],             delay: 1600 },
    { notes: [38, 37, 49],         delay: 1800 },
    { notes: [46, 43],             delay: 2000 },
  ];
  
  function startRhythmDemo() {
    if (demoPlaying) return;
    demoPlaying = true;
    currentIndex = 0;
    playNextPattern();
  }
  
  function playNextPattern() {
    if (!demoPlaying) return;
    const { notes, delay } = rhythmPattern[currentIndex];
    notes.forEach((note) => {
      playSound(note);
      highlightPad(note);
    });
    
    currentIndex++;
    if (currentIndex >= rhythmPattern.length) {
      currentIndex = 0;
      setTimeout(playNextPattern, 400);
    } else {
      setTimeout(
        playNextPattern,
        (currentIndex < rhythmPattern.length ? rhythmPattern[currentIndex].delay : 0) - delay
      );
    }
  }
  
  function stopRhythmDemo() {
    demoPlaying = false;
  }
  
  document.getElementById('start-demo').addEventListener('click', startRhythmDemo);
  document.getElementById('stop-demo').addEventListener('click', stopRhythmDemo);
  
  /**************************************************************
   * 13) 사용법 모달
   **************************************************************/
  const instructionModal   = document.getElementById('instruction-modal');
  const instructionOverlay = document.getElementById('instruction-overlay');
  const instructionButton  = document.getElementById('instruction-button');
  const closeButton        = document.getElementById('close-button');
  
  instructionButton.addEventListener('click', () => {
    instructionModal?.classList.add('active');
    instructionOverlay?.classList.add('active');
  });
  
  closeButton.addEventListener('click', () => {
    instructionModal?.classList.remove('active');
    instructionOverlay?.classList.remove('active');
  });
  