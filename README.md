# Hosimi Percussion MIDI Mapping

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

| Pad Position         | MIDI Note | Sound File                                         | Description                |
| ------------------ | --------- | ------------------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/BigDrumKit/Crash_High.wav          | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/BigDrumKit/Ride_High.wav           | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/BigDrumKit/HH_Open_High.wav        | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/BigDrumKit/TomHigh_High.wav       | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/BigDrumKit/TomMid_High.wav        | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/BigDrumKit/Snare_High.wav         | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/BigDrumKit/Rimshot_High.wav       | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/BigDrumKit/TomLow_High.wav        | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/BigDrumKit/HH_Pedal_High.wav        | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/BigDrumKit/HH_Closed_High.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/BigDrumKit/Kick_High.wav           | Kick                       |

### 4. Country Drum Kit

| Pad Position         | MIDI Note | Sound File                                            | Description                |
| ------------------ | --------- | ---------------------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/CountryDrumKit/Crash_High.wav          | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/CountryDrumKit/Ride_High.wav           | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/CountryDrumKit/HH_Open_High.wav        | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/CountryDrumKit/TomHigh_High.wav       | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/CountryDrumKit/TomMid_High.wav        | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/CountryDrumKit/Snare_High.wav         | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/CountryDrumKit/Rimshot_High.wav       | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/CountryDrumKit/TomLow_High.wav        | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/CountryDrumKit/HH_Pedal_High.wav        | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/CountryDrumKit/HH_Closed_High.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/CountryDrumKit/Kick_High.wav           | Kick                       |

### 5. Hiphop (Lofi) Drum Kit

| Pad Position         | MIDI Note | Sound File                                                 | Description                |
| ------------------ | --------- | --------------------------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Crash_High.wav          | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Ride_High.wav           | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Open_High.wav        | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomHigh_High.wav       | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomMid_High.wav        | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Snare_High.wav         | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Rimshot_High.wav       | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/Hiphop(Lofi)DrumKit/TomLow_High.wav        | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Pedal_High.wav        | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/Hiphop(Lofi)DrumKit/HH_Closed_High.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/Hiphop(Lofi)DrumKit/Kick_High.wav           | Kick                       |

### 6. House Drum Kit

| Pad Position         | MIDI Note | Sound File                                   | Description                |
| ------------------ | --------- | ------------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/HouseDrum/Crash.wav          | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/HouseDrum/Ride.wav           | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/HouseDrum/HH_Open.wav        | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/HouseDrum/TomHigh.wav       | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/HouseDrum/TomMid.wav        | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/HouseDrum/Snare.wav         | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/HouseDrum/Rimshot.wav       | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/HouseDrum/TomLow.wav        | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/HouseDrum/HH_Pedal.wav        | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/HouseDrum/HH_Closed.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/HouseDrum/Kick.wav           | Kick                       |

### 7. Jazz Drum Kit

| Pad Position         | MIDI Note | Sound File                                       | Description                |
| ------------------ | --------- | ----------------------------------------------- | -------------------------- |
| Top-Left           | 49        | sounds/DrumKit/JazzDrumKit/Crash_High.wav          | Crash                      |
| Top-Right          | 51        | sounds/DrumKit/JazzDrumKit/Ride_High.wav           | Ride                       |
| Middle-Left        | 46        | sounds/DrumKit/JazzDrumKit/HH_Open_High.wav        | Hi-Hat (Open - No Pedal)   |
| Middle-Center      | 47        | sounds/DrumKit/JazzDrumKit/TomHigh_High.wav       | Tom High                   |
| Middle-Right       | 45        | sounds/DrumKit/JazzDrumKit/TomMid_High.wav        | Tom Mid                    |
| Bottom-Left        | 38        | sounds/DrumKit/JazzDrumKit/Snare_High.wav         | Snare                      |
| Bottom-Center      | 37        | sounds/DrumKit/JazzDrumKit/Rimshot_High.wav       | Rimshot                    |
| Bottom-Right       | 43        | sounds/DrumKit/JazzDrumKit/TomLow_High.wav        | Tom Low                    |
| Left-Bottom Pedal  | 44        | sounds/DrumKit/JazzDrumKit/HH_Pedal_High.wav        | Hi-Hat (Pedal Press)       |
| **Middle-Left** | **42** | **sounds/DrumKit/JazzDrumKit/HH_Closed_High.wav** | **Hi-Hat (Closed - Pedal)** |
| Right-Bottom Pedal | 36        | sounds/DrumKit/JazzDrumKit/Kick_High.wav           | Kick                       |

### 8. African Tribal

| Pad Position      | MIDI Note | Sound File                                                    | Description   |
| -------------- | --------- | ------------------------------------------------------------ | ------------- |
| Top-Left       | 49        | sounds/Percussion/AfricanTribal/Agogo_High.wav               | Agogo         |
| Top-Right      | 51        | sounds/Percussion/AfricanTribal/Udu_High.wav                 | Udu           |
| Middle-Left    | 46        | sounds/Percussion/AfricanTribal/Caxixi_High.wav              | Caxixi        |
| Middle-Center  | 47        | sounds/Percussion/AfricanTribal/Conga_Left_High.wav          | Conga (Left)  |
| Middle-Right   | 45        | sounds/Percussion/AfricanTribal/Conga_Right_High.wav         | Conga (Right) |
| Bottom-Left    | 38        | sounds/Percussion/AfricanTribal/Djembe_Hit_High.wav           | Djembe Hit    |
| Bottom-Center  | 37        | sounds/Percussion/AfricanTribal/TalkingDrum_High.wav        | Talking Drum  |
| Bottom-Right   | 43        | sounds/Percussion/AfricanTribal/FrameDrum_High.wav           | Frame Drum    |
| Left-Bottom Pedal| 44        | sounds/Percussion/AfricanTribal/Caxixi_High.wav              | Caxixi        |
| Right-Bottom Pedal| 36        | sounds/Percussion/AfricanTribal/Djembe_Kick_High.wav          | Djembe Kick   |

### 9. Bossanova Latin

| Pad Position      | MIDI Note | Sound File                                                      | Description   |
| -------------- | --------- | -------------------------------------------------------------- | ------------- |
| Top-Left       | 49        | sounds/Percussion/BossanovaLatin/Cowbell_High.wav             | Cowbell       |
| Top-Right      | 51        | sounds/Percussion/BossanovaLatin/Claves_High.wav               | Claves        |
| Middle-Left    | 46        | sounds/Percussion/BossanovaLatin/Shaker_High.wav              | Shaker        |
| Middle-Center  | 47        | sounds/Percussion/BossanovaLatin/Quinto_Hit_High.wav           | Quinto Hit    |
| Middle-Right   | 45        | sounds/Percussion/BossanovaLatin/Quinto_Kick_High.wav          | Quinto Kick   |
| Bottom-Left    | 38        | sounds/Percussion/BossanovaLatin/Cajon_Hit_High.wav            | Cajon Hit     |
| Bottom-Center  | 37        | sounds/Percussion/BossanovaLatin/Clap_High.wav                | Clap          |
| Bottom-Right   | 43        | sounds/Percussion/BossanovaLatin/Guiro_High.wav               | Guiro         |
| Left-Bottom Pedal| 44        | sounds/Percussion/BossanovaLatin/Shaker_High.wav              | Shaker        |
| Right-Bottom Pedal| 36        | sounds/Percussion/BossanovaLatin/Cajon_Kick_High.wav           | Cajon Kick    |

### 10. Symphony Orchestra

| Pad Position      | MIDI Note | Sound File                                                          | Description    |
| -------------- | --------- | ------------------------------------------------------------------ | -------------- |
| Top-Left       | 49        | sounds/Percussion/SymphonyOrchestra/Crash_High.wav                | Crash Cymbal   |
| Top-Right      | 51        | sounds/Percussion/SymphonyOrchestra/Triangle_High.wav             | Triangle       |
| Middle-Left    | 46        | sounds/Percussion/SymphonyOrchestra/SleighBell_High.wav           | Sleigh Bells   |
| Middle-Center  | 47        | sounds/Percussion/SymphonyOrchestra/Castanets_High.wav            | Castanets      |
| Middle-Right   | 45        | sounds/Percussion/SymphonyOrchestra/Chime_High.wav                | Chime          |
| Bottom-Left    | 38        | sounds/Percussion/SymphonyOrchestra/Tambourine_High.wav          | Tambourine     |
| Bottom-Center  | 37        | sounds/Percussion/SymphonyOrchestra/Woodblock_High.wav            | Woodblock      |
| Bottom-Right   | 43        | sounds/Percussion/SymphonyOrchestra/Timpani_High.wav              | Timpani        |
| Left-Bottom Pedal| 44        | sounds/Percussion/SymphonyOrchestra/SleighBell_High.wav           | Sleigh Bells   |
| Right-Bottom Pedal| 36        | sounds/Percussion/SymphonyOrchestra/BassDrum_High.wav            | Bass Drum      |

## Velocity Layers

Each MIDI note can potentially utilize three velocity layers: `high`, `mid`, and `low`.

In the current example, only the `_high.wav` files, corresponding to a strong performance of each instrument, are used. For instance, MIDI note 49 (Buk - Hard) in the "Samulnori Kit" uses the `sounds/Percussion/samul/buk_samul_hard_high.wav` file.

If you have additional recordings for softer or louder strokes, you can add them to the same folder with the filenames `_low.wav` and `_mid.wav`. You can then adjust the code to switch between these files based on the MIDI velocity value.

* **Velocity 0-49:** `_low.wav` files (soft performance)
* **Velocity 50-100:** `_mid.wav` files (medium intensity performance)
* **Velocity 101-127:** `_high.wav` files (strong performance)

## How to Use These Files

1.  **Download Sounds:** Download or copy the contents of the `sounds/` folder (including all subfolders like samul, jangdan, and other kits).
2.  **MIDI Mapping and Triggering:** Each of the MIDI notes listed in the tables above directly maps to the specific sound files for the selected kit. You can integrate these sounds into your own MIDI percussion instrument, hardware, or software plugin.
3.  **Online Demo:** For a quick reference or test, open the demo page in your web browser. Choose a Samulnori or Jangdan kit, then tap the pads or input the corresponding MIDI notes to hear the sounds. You can switch to Korean labels using the button in the top-right corner.

**Note on Hi-Hat Control:** For the drum kits (Big Drum Kit, Country Drum Kit, Hiphop (Lofi) Drum Kit, House Drum Kit, Jazz Drum Kit), the hi-hat behavior is mapped as follows:

* **MIDI Note 44 (Left-Bottom Pedal):** Represents the action of pressing the hi-hat pedal down.
* **MIDI Note 42 (Middle-Left):** Represents the sound of a closed hi-hat, typically achieved by hitting the hi-hat cymbal while the pedal is pressed down.
* **MIDI Note 46 (Middle-Left):** Represents the sound of an open hi-hat, achieved by hitting the hi-hat cymbal without the pedal being pressed.

Please ensure your MIDI controller or software can handle these distinct MIDI note triggers to accurately reproduce the nuances of hi-hat playing.
