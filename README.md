# Gugak Percussion MIDI Mapping

This repository contains a set of **traditional Korean percussion instruments** (Samulnori and Jangdan) mapped to **specific MIDI note numbers**, along with **audio samples** for each note. Below is a detailed overview of the mappings, designed so you can quickly integrate the sounds into a MIDI-based environment or instrument.

> **Live Demo**  
> For a hands-on demonstration, visit **[GukakPercussion](https://gilhans010.github.io/GukakPercussion/)**.  
> You can switch to English labels by clicking the “English” button in the top-right corner.

---

## File Structure
.
├── index.html
├── script.js
├── styles.css
└── sounds/
    ├── samul/
    │   ├── buk_samul_hard_high.wav
    │   ├── ...
    └── jangdan/
        ├── buk_jangdan_lefthand_high.wav
        ├── ...
All .wav files are placed under sounds/samul/ and sounds/jangdan/. Each file corresponds to a particular instrument stroke (e.g., a “hard” Buk hit, or a “get” Kkwaenggwari stroke).

MIDI Note Mappings
Below are the eight pads used in both kits. Each pad corresponds to the same MIDI note numbers but references different audio files depending on the kit (Samulnori vs. Jangdan).

### Samulnori Kit

| Pad Position   | MIDI Note | Sound File                                      | Description               |
|---------------|----------:|------------------------------------------------|---------------------------|
| Top-Left      | 49        | sounds/samul/buk_samul_hard_high.wav          | Buk (hard stroke)         |
| Top-Right     | 51        | sounds/samul/jing_samul_high.wav              | Jing                      |
| Middle-Left   | 46        | sounds/samul/buk_samul_soft_high.wav          | Buk (soft stroke)         |
| Middle-Center | 47        | sounds/samul/kkwaenggwari_samul_get_high.wav  | Kkwaeng (“get” stroke)    |
| Middle-Right  | 45        | sounds/samul/kkwaenggwari_samul_gang_high.wav | Kkwaeng (“gang” stroke)   |
| Bottom-Left   | 38        | sounds/samul/janggu_samul_kung_high.wav       | Janggu (left-hand “kung”) |
| Bottom-Center | 37        | sounds/samul/janggu_samul_rightkung_high.wav  | Janggu (right-hand “kung”)|
| Bottom-Right  | 43        | sounds/samul/janggu_samul_duk_high.wav        | Janggu (“duk”)            |


### Jangdan Kit

| Pad Position   | MIDI Note | Sound File                                        | Description                |
|---------------|----------:|----------------------------------------------------|----------------------------|
| Top-Left      | 49        | sounds/jangdan/buk_jangdan_lefthand_high.wav      | Buk (left-hand stroke)     |
| Top-Right     | 51        | sounds/jangdan/janggu_jangdan_byunjuk_high.wav    | Janggu (“byunjuk” stroke)  |
| Middle-Left   | 46        | sounds/jangdan/buk_jangdan_righthand_high.wav     | Buk (right-hand stroke)    |
| Middle-Center | 47        | sounds/jangdan/buk_jangdan_ddak_high.wav          | Buk (“ddak” stroke)        |
| Middle-Right  | 45        | sounds/jangdan/janggu_jangdan_drrr_high.wav       | Janggu (“drrr” roll)       |
| Bottom-Left   | 38        | sounds/jangdan/janggu_jangdan_kung_high.wav       | Janggu (“kung”)            |
| Bottom-Center | 37        | sounds/jangdan/janggu_jangdan_duk_high.wav        | Janggu (“duk”)             |
| Bottom-Right  | 43        | sounds/jangdan/janggu_jangdan_giduk_high.wav      | Janggu (“giduk”)           |


Velocity Layers
Each note can potentially use different velocity layers: high, mid, and low.
In the current example, only the high layer is used (e.g., buk_samul_hard_high.wav).
If you have additional recordings for softer or louder strokes, simply place them in the same folder and adjust the code to switch between _low.wav, _mid.wav, and _high.wav based on the MIDI velocity.
How to Use These Files
Download the Sounds

Copy or download the contents of the sounds/ folder (both samul and jangdan subfolders).
Assign or Trigger via MIDI

Each of the above MIDI notes (49, 51, 46, 47, 45, 38, 37, 43) maps directly to the .wav files shown in the tables.
You can adapt these samples for your own MIDI percussion instrument, hardware, or software plugin.
Online Demo

For a quick reference or test, open the demo page in your web browser.
Choose Samulnori or Jangdan kit, then tap the pads or press the corresponding MIDI notes to hear the sounds.
Switch to English mode in the top-right corner for English labels.