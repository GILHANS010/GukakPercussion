# HOSIMI Percussion MIDI Mapping

This repository provides a set of **traditional Korean percussion instruments** (Samulnori and Jangdan) and various drum kits mapped to **specific MIDI note numbers**. This information is designed to help hardware MIDI percussion controller makers integrate and utilize these sounds. Detailed information on the sound mappings and velocity layer structure for each kit can be found below.

> **Live Demo**
> For a hands-on demonstration, visit **[GukakPercussion](https://gilhans010.github.io/GugakPercussion/)**. You can switch to Korean labels by clicking the “한국어” button in the top-right corner.

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
