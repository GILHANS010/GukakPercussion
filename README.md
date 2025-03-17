# HOSIMI Percussion MIDI Mapping (English)

This repository provides a set of **traditional Korean percussion instruments** (Samulnori and Jangdan) and various drum kits mapped to **specific MIDI note numbers**. This information is designed to help hardware MIDI percussion controller makers integrate and utilize these sounds. Detailed information on the sound mappings and velocity layer structure for each kit can be found below.

> **Live Demo**
> For a hands-on demonstration, visit **[GukakPercussion](https://gilhans010.github.io/GukakPercussion/)**. You can switch to Korean labels by clicking the “한국어” button in the top-right corner.

---

## File Structure

All waveform (.wav) audio files are stored in the following folders:

* `sounds/Percussion/samul/`: Samulnori Kit sounds
* `sounds/Percussion/jangdan/`: Jangdan Kit sounds
* `sounds/DrumKit/{Kit Name}/`: General Drum Kit sounds (e.g., `sounds/DrumKit/BigDrumKit/`)
* `sounds/Percussion/{Kit Name}/`: Percussion Kit sounds (e.g., `sounds/Percussion/AfricanTribal/`)

## Hi-Hat Control (Drum Kits)

For the drum kits (Big Drum Kit, Country Drum Kit, Hiphop (Lofi) Drum Kit, House Drum Kit, Jazz Drum Kit), the hi-hat behavior is mapped using specific MIDI notes to capture the nuances of playing:

* **MIDI Note 44 (Left-Bottom Pedal):** Represents the action of pressing the hi-hat pedal down. This trigger can be used to activate a continuous controller or a switch on your hardware.
* **MIDI Note 42 (Middle-Left):** Represents the sound of a closed hi-hat, typically achieved by hitting the hi-hat cymbal while the pedal is pressed down.
* **MIDI Note 46 (Middle-Left):** Represents the sound of an open hi-hat, achieved by hitting the hi-hat cymbal without the pedal being pressed.

When implementing hi-hat control, consider the following logic:

* Triggering MIDI note 44 should ideally transition the hi-hat sound to a closed state.
* Triggering MIDI note 42 should play the closed hi-hat sound.
* Triggering MIDI note 46 should play the open hi-hat sound.
* Releasing the pedal (stopping the trigger of MIDI note 44) might transition the sound back to an open state or a half-open state depending on the desired level of detail.

Please ensure your MIDI controller or software can handle these distinct MIDI note triggers to accurately reproduce the nuances of hi-hat playing.

## MIDI Note Mappings

Below are the pad positions, corresponding MIDI note numbers, and lists of sound files for each drum kit.

### 1. Samulnori Kit

| Pad Position      | MIDI Note | Sound File                                                       | Description                 |
| -------------- | --------- | --------------------------------------------------------------- | --------------------------- |
| Top-Left       | 49        | sounds/Percussion/samul/buk_samul_hard_high.wav                 | Buk (hard stroke)           |
| Top-Right      | 51        | sounds/Percussion/samul/jing_samul_high.wav                    | Jing                        |
| Middle-Left    | 46        | sounds/Percussion/samul/buk_samul_soft_high.wav                 | Buk (soft stroke)           |
| Middle-Center  | 47        | sounds/Percussion/samul/kkwaenggwari_samul_gaek_high.wav        | Kkwaenggwari (gaek stroke) |
| Middle-Right   | 45        | sounds/Percussion/samul/kkwaenggwari_samul_gang_high.wav        | Kkwaenggwari (gang stroke) |
| Bottom-Left    | 38        | sounds/Percussion/samul/janggu_samul_kung_high.wav              | Janggu (kung L)           |
| Bottom-Center  | 37        | sounds/Percussion/samul/janggu_samul_rightkung_high.wav         | Janggu (kung R)           |
| Bottom-Right   | 43        | sounds/Percussion/samul/janggu_samul_duk_high.wav               | Janggu (duk)              |
| Left-Bottom Pedal| 44        | sounds/Percussion/samul/buk_samul_soft_high.wav                 | Buk (soft stroke - Pedal)   |
| Right-Bottom Pedal| 36        | sounds/Percussion/samul/buk_samul_hard_high.wav                 | Buk (hard stroke - Pedal)   |

### 2. Jangdan Kit

| Pad Position      | MIDI Note | Sound File                                                         | Description                 |
| -------------- | --------- | ----------------------------------------------------------------- | --------------------------- |
| Top-Left       | 49        | sounds/Percussion/jangdan/buk_jangdan_lefthand_high.wav           | Buk (left-hand stroke)      |
| Top-Right      | 51        | sounds/Percussion/jangdan/janggu_jangdan_byunjuk_high.wav         | Janggu (byunjuk stroke)     |
| Middle-Left    | 46        | sounds/Percussion/jangdan/buk_jangdan_righthand_high.wav          | Buk (right-hand stroke)     |
| Middle-Center  | 47        | sounds/Percussion/jangdan/buk_jangdan_ddak_high.wav               | Buk (ddak stroke)           |
| Middle-Right   | 45        | sounds/Percussion/jangdan/janggu_jangdan_drrr_high.wav            | Janggu (drrr roll)          |
| Bottom-Left    | 38        | sounds/Percussion/jangdan/janggu_jangdan_kung_high.wav            | Janggu (kung)               |
| Bottom-Center  | 37        | sounds/Percussion/jangdan/janggu_jangdan_duk_high.wav             | Janggu (duk)                |
| Bottom-Right   | 43        | sounds/Percussion/jangdan/janggu_jangdan_giduk_high.wav           | Janggu (giduk)              |
| Left-Bottom Pedal| 44        | sounds/Percussion/jangdan/buk_jangdan_righthand_high.wav          | Buk (right-hand stroke - Pedal) |
| Right-Bottom Pedal| 36        | sounds/Percussion/jangdan/buk_jangdan_lefthand_high.wav           | Buk (left-hand stroke - Pedal)  |

### 3. Big Drum Kit

| Pad Position         | MIDI Note | Sound File                             | Description                |
| ------------------ | --------- | -------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/BigDrumKit/Crash.wav      | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/BigDrumKit/Ride.wav       | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/BigDrumKit/HH_Open.wav    | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/BigDrumKit/TomHigh.wav   | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/BigDrumKit/TomMid.wav    | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/BigDrumKit/Snare.wav     | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/BigDrumKit/Rimshot.wav   | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/BigDrumKit/TomLow.wav    | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/BigDrumKit/HH_Pedal.wav   | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/BigDrumKit/HH_Close.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/BigDrumKit/Kick.wav      | Kick                       |

### 4. Country Drum Kit

| Pad Position         | MIDI Note | Sound File                                | Description                |
| ------------------ | --------- | ----------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/CountryDrumKit/Crash.wav      | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/CountryDrumKit/Ride.wav       | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/CountryDrumKit/HH_Open.wav    | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/CountryDrumKit/TomHigh.wav   | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/CountryDrumKit/TomMid.wav    | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/CountryDrumKit/Snare.wav     | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/CountryDrumKit/Rimshot.wav   | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/CountryDrumKit/TomLow.wav    | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/CountryDrumKit/HH_Pedal.wav   | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/CountryDrumKit/HH_Close.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/CountryDrumKit/Kick.wav      | Kick                       |

### 5. Hiphop (Lofi) Drum Kit

| Pad Position         | MIDI Note | Sound File                                     | Description                |
| ------------------ | --------- | ---------------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash.wav      | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride.wav       | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open.wav    | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh.wav   | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid.wav    | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare.wav     | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Rimshot.wav   | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow.wav    | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal.wav   | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Close.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick.wav      | Kick                       |

### 6. House Drum Kit

| Pad Position         | MIDI Note | Sound File                     | Description                |
| ------------------ | --------- | ------------------------------ | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/HouseDrum/Crash.wav | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/HouseDrum/Ride.wav  | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/HouseDrum/HH_Open.wav| Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/HouseDrum/TomHigh.wav| Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/HouseDrum/TomMid.wav | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/HouseDrum/Snare.wav | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/HouseDrum/Rimshot.wav| Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/HouseDrum/TomLow.wav| Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/HouseDrum/HH_Pedal.wav| Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | sounds/DrumKit/HouseDrum/HH_Close.wav| **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/HouseDrum/Kick.wav  | Kick                       |

### 7. Jazz Drum Kit

| Pad Position         | MIDI Note | Sound File                                   | Description                |
| ------------------ | --------- | ------------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/JazzDrumKit/Crash.wav          | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/JazzDrumKit/Ride.wav           | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/JazzDrumKit/HH_Open.wav        | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/JazzDrumKit/TomHigh.wav       | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/JazzDrumKit/TomMid.wav        | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/JazzDrumKit/Snare.wav         | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/JazzDrumKit/Rimshot.wav       | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/JazzDrumKit/TomLow.wav        | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/JazzDrumKit/HH_Pedal.wav        | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/JazzDrumKit/HH_Close.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/JazzDrumKit/Kick.wav           | Kick                       |

### 8. African Tribal

| Pad Position      | MIDI Note | Sound File                                                | Description   |
| -------------- | --------- | -------------------------------------------------------- | ------------- |
| Top-Left       | 49        | sounds/Percussion/AfricanTribal/Agogo.wav               | Agogo         |
| Top-Right      | 51        | sounds/Percussion/AfricanTribal/Udu.wav                 | Udu           |
| Middle-Left    | 46        | sounds/Percussion/AfricanTribal/Caxixi.wav              | Caxixi        |
| Middle-Center  | 47        | sounds/Percussion/AfricanTribal/Conga_Left.wav          | Conga (Left)  |
| Middle-Right   | 45        | sounds/Percussion/AfricanTribal/Conga_Right.wav         | Conga (Right) |
| Bottom-Left    | 38        | sounds/Percussion/AfricanTribal/Djembe_Hit.wav           | Djembe Hit    |
| Bottom-Center  | 37        | sounds/Percussion/AfricanTribal/TalkingDrum.wav        | Talking Drum  |
| Bottom-Right   | 43        | sounds/Percussion/AfricanTribal/FrameDrum.wav           | Frame Drum    |
| Left-Bottom Pedal| 44        | sounds/Percussion/AfricanTribal/Caxixi.wav              | Caxixi        |
| Right-Bottom Pedal| 36        | sounds/Percussion/AfricanTribal/Djembe_Kick.wav          | Djembe Kick   |

### 9. Bossanova Latin

| Pad Position      | MIDI Note | Sound File                                                  | Description   |
| -------------- | --------- | ---------------------------------------------------------- | ------------- |
| Top-Left       | 49        | sounds/Percussion/BossanovaLatin/Cowbell.wav             | Cowbell       |
| Top-Right      | 51        | sounds/Percussion/BossanovaLatin/Claves.wav               | Claves        |
| Middle-Left    | 46        | sounds/Percussion/BossanovaLatin/Shaker.wav              | Shaker        |
| Middle-Center  | 47        | sounds/Percussion/BossanovaLatin/Quinto_Hit.wav           | Quinto Hit    |
| Middle-Right   | 45        | sounds/Percussion/BossanovaLatin/Quinto_Kick.wav          | Quinto Kick   |
| Bottom-Left    | 38        | sounds/Percussion/BossanovaLatin/Cajon_Hit.wav            | Cajon Hit     |
| Bottom-Center  | 37        | sounds/Percussion/BossanovaLatin/Clap.wav                | Clap          |
| Bottom-Right   | 43        | sounds/Percussion/BossanovaLatin/Guiro.wav               | Guiro         |
| Left-Bottom Pedal| 44        | sounds/Percussion/BossanovaLatin/Shaker.wav              | Shaker        |
| Right-Bottom Pedal| 36        | sounds/Percussion/BossanovaLatin/Cajon_Kick.wav           | Cajon Kick    |

### 10. Symphony Orchestra

| Pad Position      | MIDI Note | Sound File                                                      | Description    |
| -------------- | --------- | -------------------------------------------------------------- | -------------- |
| Top-Left       | 49        | sounds/Percussion/SymphonyOrchestra/Crash.wav                | Crash Cymbal   |
| Top-Right      | 51        | sounds/Percussion/SymphonyOrchestra/Triangle.wav             | Triangle       |
| Middle-Left    | 46        | sounds/Percussion/SymphonyOrchestra/SleighBell.wav           | Sleigh Bells   |
| Middle-Center  | 47        | sounds/Percussion/SymphonyOrchestra/Castanets.wav            | Castanets      |
| Middle-Right   | 45        | sounds/Percussion/SymphonyOrchestra/Chime.wav                | Chime          |
| Bottom-Left    | 38        | sounds/Percussion/SymphonyOrchestra/Tambourine.wav          | Tambourine     |
| Bottom-Center  | 37        | sounds/Percussion/SymphonyOrchestra/Woodblock.wav            | Woodblock      |
| Bottom-Right   | 43        | sounds/Percussion/SymphonyOrchestra/Timpani.wav              | Timpani        |
| Left-Bottom Pedal| 44        | sounds/Percussion/SymphonyOrchestra/SleighBell.wav           | Sleigh Bells   |
| Right-Bottom Pedal| 36        | sounds/Percussion/SymphonyOrchestra/BassDrum.wav            | Bass Drum      |

## Velocity Layers

Each MIDI note can utilize three velocity layers to represent different intensities of playing. The naming convention for these layers varies between the traditional Korean instruments and the drum kits:

* **Samulnori and Jangdan Kits:** Use `_high.wav` (strong), `_mid.wav` (medium), and `_low.wav` (soft) suffixes. For example, the Buk (hard stroke) in the Samulnori kit at MIDI note 49 can have files named `sounds/Percussion/samul/buk_samul_hard_high.wav`, `sounds/Percussion/samul/buk_samul_hard_mid.wav`, and `sounds/Percussion/samul/buk_samul_hard_low.wav`.
* **Other Drum Kits (Big Drum Kit, Country Drum Kit, Hiphop (Lofi) Drum Kit, House Drum Kit, Jazz Drum Kit, African Tribal, Bossanova Latin, Symphony Orchestra):** Use `_Hard.wav` (strong), `_Moderate.wav` (medium), and `_Soft.wav` (soft) suffixes. For example, the Kick drum in the Big Drum Kit at MIDI note 36 can have files named `sounds/DrumKit/BigDrumKit/Kick_Hard.wav`, `sounds/DrumKit/BigDrumKit/Kick_Moderate.wav`, and `sounds/DrumKit/BigDrumKit/Kick_Soft.wav`. The House Drum Kit uses the base filename without intensity suffixes, implying a single velocity layer for each sound.

You can adjust the code to switch between these files based on the incoming MIDI velocity value:

* **Velocity 0-49:** Typically triggers the soft/low intensity sound.
* **Velocity 50-100:** Typically triggers the moderate/mid intensity sound.
* **Velocity 101-127:** Typically triggers the hard/high intensity sound.

## How to Use These Files

1.  **Download Sounds:** Download or copy the contents of the `sounds/` folder (including all subfolders like samul, jangdan, and other kits).
2.  **MIDI Mapping and Triggering:** Each of the MIDI notes listed in the tables above directly maps to the specific sound files for the selected kit. You can integrate these sounds into your own MIDI percussion instrument, hardware, or software plugin.
3.  **Online Demo:** For a quick reference or test, open the demo page in your web browser. Choose a Samulnori or Jangdan kit, then tap the pads or input the corresponding MIDI notes to hear the sounds. You can switch to Korean labels using the button in the top-right corner.



# 호시미 타악기 MIDI 매핑 (한국어)

본 저장소는 **전통 국악 타악기**(사물놀이 및 장단)와 다양한 드럼 키트를 **특정 MIDI 노트 번호**에 매핑하여 제공합니다. 이 정보는 하드웨어 MIDI 타악기 컨트롤러 제작자들이 이러한 사운드를 통합하고 활용하는 데 도움이 되도록 설계되었습니다. 각 키트에 대한 사운드 매핑 및 벨로시티 레이어 구조에 대한 자세한 내용은 아래에서 확인할 수 있습니다.

> **라이브 데모**
> 직접 시연해 보려면 **[국악퍼커션](https://gilhans010.github.io/GugakPercussion/)**을 방문하세요. 오른쪽 상단의 "한국어" 버튼을 클릭하여 한국어 라벨로 전환할 수 있습니다.

---

## 파일 구조

모든 웨이브폼(.wav) 오디오 파일은 다음 폴더에 저장됩니다.

* `sounds/Percussion/samul/`: 사물놀이 키트 사운드
* `sounds/Percussion/jangdan/`: 장단 키트 사운드
* `sounds/DrumKit/{키트 이름}/`: 일반 드럼 키트 사운드 (예: `sounds/DrumKit/BigDrumKit/`)
* `sounds/Percussion/{키트 이름}/`: 퍼커션 키트 사운드 (예: `sounds/Percussion/AfricanTribal/`)

## 하이햇 컨트롤 (드럼 키트)

드럼 키트(빅 드럼 키트, 컨트리 드럼 키트, 힙합(로파이) 드럼 키트, 하우스 드럼 키트, 재즈 드럼 키트)의 경우, 하이햇 연주의 뉘앙스를 포착하기 위해 특정 MIDI 노트를 사용하여 하이햇 동작을 매핑했습니다.

* **MIDI 노트 44 (왼쪽 하단 페달):** 하이햇 페달을 밟는 동작을 나타냅니다. 이 트리거는 하드웨어에서 연속 컨트롤러 또는 스위치를 활성화하는 데 사용할 수 있습니다.
* **MIDI 노트 42 (중간 왼쪽):** 페달을 밟은 상태에서 하이햇 심벌을 쳐서 내는 닫힌 하이햇 소리를 나타냅니다.
* **MIDI 노트 46 (중간 왼쪽):** 페달을 밟지 않은 상태에서 하이햇 심벌을 쳐서 내는 열린 하이햇 소리를 나타냅니다.

하이햇 컨트롤을 구현할 때 다음 논리를 고려하십시오.

* MIDI 노트 44를 트리거하면 하이햇 사운드가 닫힌 상태로 전환되는 것이 이상적입니다.
* MIDI 노트 42를 트리거하면 닫힌 하이햇 사운드가 재생됩니다.
* MIDI 노트 46을 트리거하면 열린 하이햇 사운드가 재생됩니다.
* 페달에서 발을 떼면(MIDI 노트 44 트리거 중단) 사운드가 다시 열린 상태 또는 반쯤 열린 상태로 전환될 수 있습니다(원하는 디테일 수준에 따라 다름).

하드웨어 MIDI 컨트롤러 또는 소프트웨어가 이러한 개별 MIDI 노트 트리거를 처리하여 하이햇 연주의 뉘앙스를 정확하게 재현할 수 있는지 확인하십시오.

## MIDI 노트 매핑

아래는 각 드럼 키트의 패드 위치, 해당 MIDI 노트 번호 및 사운드 파일 목록입니다.

### 1. 사물놀이 키트

| 패드 위치      | MIDI 노트 | 사운드 파일                                                       | 설명                 |
| -------------- | --------- | --------------------------------------------------------------- | --------------------------- |
| 상단-왼쪽       | 49        | sounds/Percussion/samul/buk_samul_hard_high.wav                 | 북 (강)                   |
| 상단-오른쪽      | 51        | sounds/Percussion/samul/jing_samul_high.wav                    | 징                        |
| 중간-왼쪽       | 46        | sounds/Percussion/samul/buk_samul_soft_high.wav                 | 북 (약)                   |
| 중간-중앙       | 47        | sounds/Percussion/samul/kkwaenggwari_samul_gaek_high.wav        | 꽹과리 (객)               |
| 중간-오른쪽      | 45        | sounds/Percussion/samul/kkwaenggwari_samul_gang_high.wav        | 꽹과리 (갱)               |
| 하단-왼쪽       | 38        | sounds/Percussion/samul/janggu_samul_kung_high.wav              | 장구 (쿵 L)               |
| 하단-중앙       | 37        | sounds/Percussion/samul/janggu_samul_rightkung_high.wav         | 장구 (쿵 R)               |
| 하단-오른쪽      | 43        | sounds/Percussion/samul/janggu_samul_duk_high.wav               | 장구 (덕)               |
| 왼쪽 하단 페달 | 44        | sounds/Percussion/samul/buk_samul_soft_high.wav                 | 북 (약 - 페달)             |
| 오른쪽 하단 페달| 36        | sounds/Percussion/samul/buk_samul_hard_high.wav                 | 북 (강 - 페달)             |

### 2. 장단 키트

| 패드 위치      | MIDI 노트 | 사운드 파일                                                         | 설명                 |
| -------------- | --------- | ----------------------------------------------------------------- | --------------------------- |
| 상단-왼쪽       | 49        | sounds/Percussion/jangdan/buk_jangdan_lefthand_high.wav           | 북 (왼손)                 |
| 상단-오른쪽      | 51        | sounds/Percussion/jangdan/janggu_jangdan_byunjuk_high.wav         | 장구 (변죽)               |
| 중간-왼쪽       | 46        | sounds/Percussion/jangdan/buk_jangdan_righthand_high.wav          | 북 (오른손)               |
| 중간-중앙       | 47        | sounds/Percussion/jangdan/buk_jangdan_ddak_high.wav               | 북 (딱)                   |
| 중간-오른쪽      | 45        | sounds/Percussion/jangdan/janggu_jangdan_drrr_high.wav            | 장구 (더러러)             |
| 하단-왼쪽       | 38        | sounds/Percussion/jangdan/janggu_jangdan_kung_high.wav            | 장구 (쿵)                 |
| 하단-중앙       | 37        | sounds/Percussion/jangdan/janggu_jangdan_duk_high.wav             | 장구 (덕)                 |
| 하단-오른쪽      | 43        | sounds/Percussion/jangdan/janggu_jangdan_giduk_high.wav           | 장구 (기덕)               |
| 왼쪽 하단 페달 | 44        | sounds/Percussion/jangdan/buk_jangdan_righthand_high.wav          | 북 (오른손 - 페달)         |
| 오른쪽 하단 페달| 36        | sounds/Percussion/jangdan/buk_jangdan_lefthand_high.wav           | 북 (왼손 - 페달)         |

### 3. 빅 드럼 키트

| 패드 위치         | MIDI 노트 | 사운드 파일                             | 설명                   |
| ------------------ | --------- | -------------------------------------- | ---------------------- |
| 상단-왼쪽           | 49        | sounds/DrumKit/BigDrumKit/Crash.wav      | 크래쉬                 |
| 상단-오른쪽          | 51        | sounds/DrumKit/BigDrumKit/Ride.wav       | 라이드                 |
| 중간-왼쪽           | 46        | sounds/DrumKit/BigDrumKit/HH_Open.wav    | 하이햇 (오픈 - 페달 없음)|
| 중간-중앙           | 47        | sounds/DrumKit/BigDrumKit/TomHigh.wav   | 탐 하이                 |
| 중간-오른쪽          | 45        | sounds/DrumKit/BigDrumKit/TomMid.wav    | 탐 미드                 |
| 하단-왼쪽           | 38        | sounds/DrumKit/BigDrumKit/Snare.wav     | 스네어                 |
| 하단-중앙           | 37        | sounds/DrumKit/BigDrumKit/Rimshot.wav   | 림샷                   |
| 하단-오른쪽          | 43        | sounds/DrumKit/BigDrumKit/TomLow.wav    | 탐 로우                 |
| 왼쪽 하단 페달      | 44        | sounds/DrumKit/BigDrumKit/HH_Pedal.wav   | 하이햇 (페달)           |
| **중간-왼쪽** | **42** | **sounds/DrumKit/BigDrumKit/HH_Close.wav** | **하이햇 (닫힘 - 페달)** |
| 오른쪽 하단 페달     | 36        | sounds/DrumKit/BigDrumKit/Kick.wav      | 킥                     |

### 4. 컨트리 드럼 키트

| 패드 위치         | MIDI 노트 | 사운드 파일                                | 설명                   |
| ------------------ | --------- | ----------------------------------------- | ---------------------- |
| 상단-왼쪽           | 49        | sounds/DrumKit/CountryDrumKit/Crash.wav      | 크래쉬                 |
| 상단-오른쪽          | 51        | sounds/DrumKit/CountryDrumKit/Ride.wav       | 라이드                 |
| 중간-왼쪽           | 46        | sounds/DrumKit/CountryDrumKit/HH_Open.wav    | 하이햇 (오픈 - 페달 없음)|
| 중간-중앙           | 47        | sounds/DrumKit/CountryDrumKit/TomHigh.wav   | 탐 하이                 |
| 중간-오른쪽          | 45        | sounds/DrumKit/CountryDrumKit/TomMid.wav    | 탐 미드                 |
| 하단-왼쪽           | 38        | sounds/DrumKit/CountryDrumKit/Snare.wav     | 스네어                 |
| 하단-중앙           | 37        | sounds/DrumKit/CountryDrumKit/Rimshot.wav   | 림샷                   |
| 하단-오른쪽          | 43        | sounds/DrumKit/CountryDrumKit/TomLow.wav    | 탐 로우                 |
| 왼쪽 하단 페달      | 44        | sounds/DrumKit/CountryDrumKit/HH_Pedal.wav   | 하이햇 (페달)           |
| **중간-왼쪽** | **42** | **sounds/DrumKit/CountryDrumKit/HH_Close.wav** | **하이햇 (닫힘 - 페달)** |
| 오른쪽 하단 페달     | 36        | sounds/DrumKit/CountryDrumKit/Kick.wav      | 킥                     |

### 5. 힙합 (로파이) 드럼 키트

| 패드 위치         | MIDI 노트 | 사운드 파일                                     | 설명                   |
| ------------------ | --------- | ---------------------------------------------- | ---------------------- |
| 상단-왼쪽           | 49        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash.wav      | 크래쉬                 |
| 상단-오른쪽          | 51        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride.wav       | 라이드                 |
| 중간-왼쪽           | 46        | sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open.wav    | 하이햇 (오픈 - 페달 없음)|
| 중간-중앙           | 47        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh.wav   | 탐 하이                 |
| 중간-오른쪽          | 45        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid.wav    | 탐 미드                 |
| 하단-왼쪽           | 38        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare.wav     | 스네어                 |
| 하단-중앙           | 37        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Rimshot.wav   | 림샷                   |
| 하단-오른쪽          | 43        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow.wav    | 탐 로우                 |
| 왼쪽 하단 페달      | 44        | sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal.wav   | 하이햇 (페달)           |
| **중간-왼쪽** | **42** | **sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Close.wav** | **하이햇 (닫힘 - 페달)** |
| 오른쪽 하단 페달     | 36        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick.wav      | 킥                     |

### 6. 하우스 드럼 키트

| 패드 위치         | MIDI 노트 | 사운드 파일                     | 설명                   |
| ------------------ | --------- | ------------------------------ | ---------------------- |
| 상단-왼쪽           | 49        | sounds/DrumKit/HouseDrum/Crash.wav | 크래쉬                 |
| 상단-오른쪽          | 51        | sounds/DrumKit/HouseDrum/Ride.wav  | 라이드                 |
| 중간-왼쪽           | 46        | sounds/DrumKit/HouseDrum/HH_Open.wav| 하이햇 (오픈 - 페달 없음)|
| 중간-중앙           | 47        | sounds/DrumKit/HouseDrum/TomHigh.wav| 탐 하이                 |
| 중간-오른쪽          | 45        | sounds/DrumKit/HouseDrum/TomMid.wav | 탐 미드                 |
| 하단-왼쪽           | 38        | sounds/DrumKit/HouseDrum/Snare.wav | 스네어                 |
| 하단-중앙           | 37        | sounds/DrumKit/HouseDrum/Rimshot.wav| 림샷                   |
| 하단-오른쪽          | 43        | sounds/DrumKit/HouseDrum/TomLow.wav| 탐 로우                 |
| 왼쪽 하단 페달      | 44        | sounds/DrumKit/HouseDrum/HH_Pedal.wav| 하이햇 (페달)           |
| **중간-왼쪽** | **42** | sounds/DrumKit/HouseDrum/HH_Close.wav| **하이햇 (닫힘 - 페달)** |
| 오른쪽 하단 페달     | 36        | sounds/DrumKit/HouseDrum/Kick.wav  | 킥                     |

### 7. 재즈 드럼 키트

| 패드 위치         | MIDI 노트 | 사운드 파일                                   | 설명                   |
| ------------------ | --------- | ------------------------------------------- | ---------------------- |
| 상단-왼쪽           | 49        | sounds/DrumKit/JazzDrumKit/Crash.wav          | 크래쉬                 |
| 상단-오른쪽          | 51        | sounds/DrumKit/JazzDrumKit/Ride.wav           | 라이드                 |
| 중간-왼쪽           | 46        | sounds/DrumKit/JazzDrumKit/HH_Open.wav        | 하이햇 (오픈 - 페달 없음)|
| 중간-중앙           | 47        | sounds/DrumKit/JazzDrumKit/TomHigh.wav       | 탐 하이                 |
| 중간-오른쪽          | 45        | sounds/DrumKit/JazzDrumKit/TomMid.wav        | 탐 미드                 |
| 하단-왼쪽           | 38        | sounds/DrumKit/JazzDrumKit/Snare.wav         | 스네어                 |
| 하단-중앙           | 37        | sounds/DrumKit/JazzDrumKit/Rimshot.wav       | 림샷                   |
| 하단-오른쪽          | 43        | sounds/DrumKit/JazzDrumKit/TomLow.wav        | 탐 로우                 |
| 왼쪽 하단 페달      | 44        | sounds/DrumKit/JazzDrumKit/HH_Pedal.wav        | 하이햇 (페달)           |
| **중간-왼쪽** | **42** | **sounds/DrumKit/JazzDrumKit/HH_Close.wav** | **하이햇 (닫힘 - 페달)** |
| 오른쪽 하단 페달     | 36        | sounds/DrumKit/JazzDrumKit/Kick.wav           | 킥                     |

### 8. 아프리카 토속 악기

| 패드 위치      | MIDI 노트 | 사운드 파일                                                | 설명         |
| -------------- | --------- | -------------------------------------------------------- | ----------- |
| 상단-왼쪽       | 49        | sounds/Percussion/AfricanTribal/Agogo.wav               | 아고고       |
| 상단-오른쪽      | 51        | sounds/Percussion/AfricanTribal/Udu.wav                 | 우두         |
| 중간-왼쪽       | 46        | sounds/Percussion/AfricanTribal/Caxixi.wav              | 카시시       |
| 중간-중앙       | 47        | sounds/Percussion/AfricanTribal/Conga_Left.wav          | 콩가 (왼손)   |
| 중간-오른쪽      | 45        | sounds/Percussion/AfricanTribal/Conga_Right.wav         | 콩가 (오른손) |
| 하단-왼쪽       | 38        | sounds/Percussion/AfricanTribal/Djembe_Hit.wav           | 젬베 힛      |
| 하단-중앙       | 37        | sounds/Percussion/AfricanTribal/TalkingDrum.wav        | 토킹 드럼    |
| 하단-오른쪽      | 43        | sounds/Percussion/AfricanTribal/FrameDrum.wav           | 프레임 드럼   |
| 왼쪽 하단 페달 | 44        | sounds/Percussion/AfricanTribal/Caxixi.wav              | 카시시       |
| 오른쪽 하단 페달| 36        | sounds/Percussion/AfricanTribal/Djembe_Kick.wav          | 젬베 킥      |

### 9. 보사노바 라틴 악기

| 패드 위치      | MIDI 노트 | 사운드 파일                                                  | 설명       |
| -------------- | --------- | ---------------------------------------------------------- | -------- |
| 상단-왼쪽       | 49        | sounds/Percussion/BossanovaLatin/Cowbell.wav             | 카우벨     |
| 상단-오른쪽      | 51        | sounds/Percussion/BossanovaLatin/Claves.wav               | 클라베스   |
| 중간-왼쪽       | 46        | sounds/Percussion/BossanovaLatin/Shaker.wav              | 쉐이커     |
| 중간-중앙       | 47        | sounds/Percussion/BossanovaLatin/Quinto_Hit.wav           | 퀸토 힛    |
| 중간-오른쪽      | 45        | sounds/Percussion/BossanovaLatin/Quinto_Kick.wav          | 퀸토 킥    |
| 하단-왼쪽       | 38        | sounds/Percussion/BossanovaLatin/Cajon_Hit.wav            | 카혼 힛    |
| 하단-중앙       | 37        | sounds/Percussion/BossanovaLatin/Clap.wav                | 박수       |
| 하단-오른쪽      | 43        | sounds/Percussion/BossanovaLatin/Guiro.wav               | 귀로       |
| 왼쪽 하단 페달 | 44        | sounds/Percussion/BossanovaLatin/Shaker.wav              | 쉐이커     |
| 오른쪽 하단 페달| 36        | sounds/Percussion/BossanovaLatin/Cajon_Kick.wav           | 카혼 킥    |

### 10. 심포니 오케스트라

| 패드 위치      | MIDI 노트 | 사운드 파일                                                      | 설명         |
| -------------- | --------- | -------------------------------------------------------------- | ----------- |
| 상단-왼쪽       | 49        | sounds/Percussion/SymphonyOrchestra/Crash.wav                | 크래쉬 심벌 |
| 상단-오른쪽      | 51        | sounds/Percussion/SymphonyOrchestra/Triangle.wav             | 트라이앵글   |
| 중간-왼쪽       | 46        | sounds/Percussion/SymphonyOrchestra/SleighBell.wav           | 슬레이벨     |
| 중간-중앙       | 47        | sounds/Percussion/SymphonyOrchestra/Castanets.wav            | 캐스터네츠   |
| 중간-오른쪽      | 45        | sounds/Percussion/SymphonyOrchestra/Chime.wav                | 차임         |
| 하단-왼쪽       | 38        | sounds/Percussion/SymphonyOrchestra/Tambourine.wav          | 탬버린       |
| 하단-중앙       | 37        | sounds/Percussion/SymphonyOrchestra/Woodblock.wav            | 우드블록     |
| 하단-오른쪽      | 43        | sounds/Percussion/SymphonyOrchestra/Timpani.wav              | 팀파니       |
| 왼쪽 하단 페달 | 44        | sounds/Percussion/SymphonyOrchestra/SleighBell.wav           | 슬레이벨     |
| 오른쪽 하단 페달| 36        | sounds/Percussion/SymphonyOrchestra/BassDrum.wav            | 큰북         |

## 벨로시티 레이어

각 MIDI 노트는 연주의 강도를 나타내기 위해 세 가지 벨로시티 레이어를 사용할 수 있습니다. 이러한 레이어의 명명 규칙은 전통 국악기와 드럼 키트 간에 다릅니다.

* **사물놀이 및 장단 키트:** `_high.wav`(강), `_mid.wav`(중간) 및 `_low.wav`(약) 접미사를 사용합니다. 예를 들어, 사물놀이 키트의 MIDI 노트 49번 북(강)의 경우 `sounds/Percussion/samul/buk_samul_hard_high.wav`, `sounds/Percussion/samul/buk_samul_hard_mid.wav` 및 `sounds/Percussion/samul/buk_samul_hard_low.wav`와 같은 파일 이름을 가질 수 있습니다.
* **기타 드럼 키트 (빅 드럼 키트, 컨트리 드럼 키트, 힙합(로파이) 드럼 키트, 하우스 드럼 키트, 재즈 드럼 키트, 아프리카 토속 악기, 보사노바 라틴 악기, 심포니 오케스트라):** `_Hard.wav`(강), `_Moderate.wav`(중간) 및 `_Soft.wav`(약) 접미사를 사용합니다. 예를 들어, 빅 드럼 키트의 MIDI 노트 36번 킥 드럼의 경우 `sounds/DrumKit/BigDrumKit/Kick_Hard.wav`, `sounds/DrumKit/BigDrumKit/Kick_Moderate.wav` 및 `sounds/DrumKit/BigDrumKit/Kick_Soft.wav`와 같은 파일 이름을 가질 수 있습니다. 하우스 드럼 키트는 강도 접미사 없이 기본 파일 이름만 사용하여 각 사운드에 대해 단일 벨로시티 레이어를 의미합니다.

들어오는 MIDI 벨로시티 값에 따라 이러한 파일을 전환하도록 코드를 조정할 수 있습니다.

* **벨로시티 0-49:** 일반적으로 약한/낮은 강도의 사운드를 트리거합니다.
* **벨로시티 50-100:** 일반적으로 중간 강도의 사운드를 트리거합니다.
* **벨로시티 101-127:** 일반적으로 강한/높은 강도의 사운드를 트리거합니다.

## 파일 사용 방법

1.  **사운드 다운로드:** `sounds/` 폴더의 내용(samul, jangdan 및 기타 키트와 같은 모든 하위 폴더 포함)을 다운로드하거나 복사합니다.
2.  **MIDI 매핑 및 트리거:** 위의 표에 나열된 각 MIDI 노트는 선택한 키트의 특정 사운드 파일에 직접 매핑됩니다. 이러한 사운드를 자신의 MIDI 타악기, 하드웨어 또는 소프트웨어 플러그인에 통합할 수 있습니다.
3.  **온라인 데모:** 빠른 참조 또는 테스트를 위해 웹 브라우저에서 데모 페이지를 엽니다. 사물놀이 또는 장단 키트를 선택한 다음 패드를 누르거나 해당 MIDI 노트를 입력하여 사운드를 들어보세요. 오른쪽 상단의 버튼을 사용하여 한국어 라벨로 전환할 수 있습니다.
