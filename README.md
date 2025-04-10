알겠습니다. 코드의 soundMap 부분을 새로운 파일 이름 규칙 (_Hard.wav, _Moderate.wav, _Soft.wav)에 맞게 업데이트하셨군요. 이 변경사항을 반영하여 이전에 작성했던 README.md 파일을 수정하겠습니다.

가장 중요한 변경점은 벨로시티 레이어(강, 중, 약)에 해당하는 사운드 파일 이름 규칙을 명확히 하는 것입니다. BigDrumKit 예제는 이미 이 규칙을 따르고 있었으므로 테이블 자체는 크게 변경되지 않지만, 설명 부분을 좀 더 명확하게 다듬겠습니다.

Hoshimi Drum Pad Sound Mapping Instructions (호시미 드럼 패드 사운드 매핑 지침)
(최종 수정: 2025-04-10)

English Version
1. Purpose
This document explains how to map the correct sound files to the Hoshimi Drum Pad. The goal is to ensure that when a pad is hit, it sends the correct MIDI Note Number so that the connected web application (or other software) plays the intended sound.

2. Pad Identification and Required MIDI Note Output
The drum pad has several physical pads and likely two pedals (or bottom pads). Each physical pad/pedal must be programmed to send a specific MIDI Note Number when struck. Refer to the diagram below (or the physical layout) and the table:

Top-Left Pad: Must send MIDI Note 49
Top-Right Pad: Must send MIDI Note 51
Middle-Left Pad: Must send MIDI Note 46
Middle-Center Pad: Must send MIDI Note 47
Middle-Right Pad: Must send MIDI Note 45
Bottom-Left Pad: Must send MIDI Note 38
Bottom-Center Pad: Must send MIDI Note 37
Bottom-Right Pad: Must send MIDI Note 43
Left Pedal / Left Bottom Pad: Must send MIDI Note 44
Right Pedal / Right Bottom Pad: Must send MIDI Note 36
IMPORTANT: The drum pad hardware needs to send these exact MIDI Note Numbers for the software to work correctly.

3. Understanding Sound Files (Velocity Layers)
For most sounds, there are three different sound files provided, representing different hitting strengths (velocity layers). These files typically end with:

_Hard.wav: Sound for hitting the pad hard.
_Moderate.wav: Sound for hitting the pad with medium force.
_Soft.wav: Sound for hitting the pad softly.
The drum pad should also send a Velocity value (0-127) with each MIDI Note, indicating how hard the pad was hit. The software uses this velocity value to choose which sound file (_Hard, _Moderate, or _Soft) to play and also adjusts the volume.

Factory Task: Your main task is to associate the correct MIDI Note Number (from step 2) with the set of sounds (Hard, Moderate, Soft files) listed in the table below. The pad's firmware should handle sending the appropriate MIDI Note and Velocity.

4. Sound Mapping Table (Example: BigDrumKit)
This table shows which sound files correspond to which MIDI Note Number, using the "BigDrumKit" sounds as an example. The sounds/DrumKit/BigDrumKit/ path indicates the file location, but you likely only need the base filename ending with _Hard.wav, _Moderate.wav, or _Soft.wav.

Pad Position	Required MIDI Note Output	Sound Type (Example: BigDrumKit)	Hard Sound File (_Hard.wav)	Medium Sound File (_Moderate.wav)	Soft Sound File (_Soft.wav)
Right Pedal/Pad	36	Kick Drum	Kick_Hard.wav	Kick_Moderate.wav	Kick_Soft.wav
Bottom-Center Pad	37	Rimshot	Rimshot_Hard.wav	Rimshot_Moderate.wav	Rimshot_Soft.wav
Bottom-Left Pad	38	Snare Drum	Snare_Hard.wav	Snare_Moderate.wav	Snare_Soft.wav
Bottom-Right Pad	43	Tom Low	TomLow_Hard.wav	TomLow_Moderate.wav	TomLow_Soft.wav
Left Pedal/Pad	44	Hi-Hat Pedal	HH_Pedal_Hard.wav	HH_Pedal_Moderate.wav	HH_Pedal_Soft.wav
Middle-Right Pad	45	Tom Mid	TomMid_Hard.wav	TomMid_Moderate.wav	TomMid_Soft.wav
Middle-Left Pad	46	Hi-Hat Open	HH_Open_Hard.wav	HH_Open_Moderate.wav	HH_Open_Soft.wav
Middle-Center Pad	47	Tom High	TomHigh_Hard.wav	TomHigh_Moderate.wav	TomHigh_Soft.wav
Top-Left Pad	49	Crash Cymbal	Crash_Hard.wav	Crash_Moderate.wav	Crash_Soft.wav
Top-Right Pad	51	Ride Cymbal	Ride_Hard.wav	Ride_Moderate.wav	Ride_Soft.wav
(Note 42)	(42)	Hi-Hat Close	HH_Close_Hard.wav	HH_Close_Moderate.wav	HH_Close_Soft.wav

Sheets로 내보내기
(Note: MIDI Note 42 is used for Closed Hi-Hat in some kits like BigDrumKit, though not directly mapped to a default pad in the current HTML structure. It might be triggered differently or used in other kits.)

(For HouseDrumKit, only one sample exists per note, e.g., Kick.wav. In this case, load this single file for the corresponding note, and the software will only adjust volume based on velocity.)

5. Other Sound Kits
The provided software includes other sound kits (like "Samulnori", "Jangdan", "Jazz", "House", etc.). These kits use the same MIDI Note Numbers (36, 37, 49, etc.) but trigger different sets of sound files. Note that the filenames within these other kits also follow the _Hard.wav, _Moderate.wav, _Soft.wav convention now.

The most important task for the hardware is to ensure the physical pads consistently send the correct MIDI Note Numbers as listed in section 2 and the table. The software will handle loading and playing the sounds for the selected kit.

中文版 (Chinese Version - Simplified)
(最后更新: 2025-04-10)

1. 目的 (Purpose)
本文档说明如何将正确的声音文件映射到 Hoshimi 鼓垫。目标是确保当敲击鼓垫时，它能发送正确的 MIDI 音符编号 (MIDI Note Number)，以便连接的网络应用程序（或其他软件）播放预期的声音。

2. 鼓垫识别与必需的 MIDI 音符输出 (Pad Identification and Required MIDI Note Output)
该电子鼓有数个物理鼓面/打击垫，以及通常两个踏板（或底部打击垫）。每个物理鼓垫/踏板在被敲击时，必须被编程为发送一个特定的 MIDI 音符编号。请参考下图（或实物布局）和表格：

左上鼓垫 (Top-Left Pad): 必须发送 MIDI 音符 49
右上鼓垫 (Top-Right Pad): 必须发送 MIDI 音符 51
中左鼓垫 (Middle-Left Pad): 必须发送 MIDI 音符 46
中中鼓垫 (Middle-Center Pad): 必须发送 MIDI 音符 47
中右鼓垫 (Middle-Right Pad): 必须发送 MIDI 音符 45
左下鼓垫 (Bottom-Left Pad): 必须发送 MIDI 音符 38
中下鼓垫 (Bottom-Center Pad): 必须发送 MIDI 音符 37
右下鼓垫 (Bottom-Right Pad): 必须发送 MIDI 音符 43
左踏板 / 左下打击垫 (Left Pedal / Left Bottom Pad): 必须发送 MIDI 音符 44
右踏板 / 右下打击垫 (Right Pedal / Right Bottom Pad): 必须发送 MIDI 音符 36
重要提示： 电子鼓硬件需要发送这些准确的 MIDI 音符编号，软件才能正常工作。

3. 理解声音文件（力度分层）(Understanding Sound Files - Velocity Layers)
对于大多数声音，我们提供了 三种不同的声音文件，代表不同的敲击力度（力度分层）。这些文件通常以下列后缀结尾：

_Hard.wav: 用于 重击 鼓垫的声音。
_Moderate.wav: 用于 中等 力度敲击鼓垫的声音。
_Soft.wav: 用于 轻击 鼓垫的声音。
电子鼓在发送每个 MIDI 音符时，还应发送一个 力度值 (Velocity)（范围 0-127），表示敲击鼓垫的力度。软件会使用这个力度值来选择播放哪个声音文件（_Hard, _Moderate, 或 _Soft），并同时调整音量。

工厂任务： 您的主要任务是将正确的 MIDI 音符编号（来自第 2 步）与下表中列出的 一组声音（Hard, Moderate, Soft 文件）相关联。鼓垫的固件（firmware）应负责发送相应的 MIDI 音符和力度值。

4. 声音映射表 (示例：BigDrumKit) (Sound Mapping Table - Example: BigDrumKit)
此表显示了哪些声音文件对应哪个 MIDI 音符编号，以 "BigDrumKit" 的声音为例。路径 sounds/DrumKit/BigDrumKit/ 指示了文件位置，但您可能只需要以 _Hard.wav, _Moderate.wav, 或 _Soft.wav 结尾的基础文件名。

鼓垫位置	必需的 MIDI 音符输出	声音类型 (示例: BigDrumKit)	重击声音文件 (_Hard.wav)	中等力度声音文件 (_Moderate.wav)	轻击声音文件 (_Soft.wav)
右踏板/打击垫	36	底鼓 (Kick Drum)	Kick_Hard.wav	Kick_Moderate.wav	Kick_Soft.wav
中下打击垫	37	边击 (Rimshot)	Rimshot_Hard.wav	Rimshot_Moderate.wav	Rimshot_Soft.wav
左下打击垫	38	军鼓 (Snare Drum)	Snare_Hard.wav	Snare_Moderate.wav	Snare_Soft.wav
右下打击垫	43	低音桶鼓 (Tom Low)	TomLow_Hard.wav	TomLow_Moderate.wav	TomLow_Soft.wav
左踏板/打击垫	44	踩镲踏板 (Hi-Hat Pedal)	HH_Pedal_Hard.wav	HH_Pedal_Moderate.wav	HH_Pedal_Soft.wav
中右打击垫	45	中音桶鼓 (Tom Mid)	TomMid_Hard.wav	TomMid_Moderate.wav	TomMid_Soft.wav
中左打击垫	46	开镲 (Hi-Hat Open)	HH_Open_Hard.wav	HH_Open_Moderate.wav	HH_Open_Soft.wav
中中打击垫	47	高音桶鼓 (Tom High)	TomHigh_Hard.wav	TomHigh_Moderate.wav	TomHigh_Soft.wav
左上打击垫	49	碎音镲 (Crash Cymbal)	Crash_Hard.wav	Crash_Moderate.wav	Crash_Soft.wav
右上打击垫	51	叮叮镲 (Ride Cymbal)	Ride_Hard.wav	Ride_Moderate.wav	Ride_Soft.wav
(音符 42)	(42)	闭镲 (Hi-Hat Close)	HH_Close_Hard.wav	HH_Close_Moderate.wav	HH_Close_Soft.wav

Sheets로 내보내기
(注意：MIDI 音符 42 在像 BigDrumKit 这样的某些鼓组中用于闭合踩镲 (Closed Hi-Hat)，但在当前的 HTML 结构中没有直接映射到默认鼓垫。它可能有不同的触发方式或在其他鼓组中使用。)

(对于 HouseDrumKit，每个音符只有一个样本，例如 Kick.wav。在这种情况下，只需为对应的音符加载这一个文件，软件将仅根据力度调整音量。)

5. 其他鼓组 (Other Sound Kits)
提供的软件包含其他声音套件（如 "Samulnori"、"Jangdan"、"Jazz"、"House" 等）。这些套件使用 相同的 MIDI 音符编号（36, 37, 49 等），但会触发 不同的声音文件组。请注意，这些其他套件中的文件名现在也遵循 _Hard.wav, _Moderate.wav, _Soft.wav 的命名约定。

对于硬件来说，最重要的任务是确保物理鼓垫始终发送第 2 节和表格中列出的 正确的 MIDI 音符编号。软件将负责加载和播放所选鼓组的声音