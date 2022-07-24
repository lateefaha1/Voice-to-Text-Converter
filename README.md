# Speech-to-Text-Converter

Smart methods Task NO1 for the IOT path. "convert audio to text"

# Description
This App allows you to record human speech and convert it into text.

The Speech Recognition API is surprisingly accurate for a free browser feature. 
It recognized correctly almost all of my speaking and knew which words go together to form phrases that make sense. 


# Code understading
- SpeechRecognition, used to understand human voice and convert it into text (Speech-->Text).
- onresult event, is executed every time the user speaks, giving us access to a text convert of what was said. the text saved and display in a textarea.
- start() function, asks for users permission then the device microphone will be activated.
- It will stop listening automatically after 15 seconds of silence or if it's manually stopped.



---
❗Important❗

- Speech-to-text API is supported only in Google Chrome!.
