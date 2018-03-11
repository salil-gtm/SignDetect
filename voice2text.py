import requests
import json
import uuid

COG_URL1 = "https://api.cognitive.microsoft.com/sts/v1.0/issueToken"
COG_URL2 = "https://speech.platform.bing.com/speech/recognition/interactive/cognitiveservices/v1?language=en-IN&locale=en-IN&format=json&requestid=6801d59a-9419-4d26-a6ba-77d456f06823"

def stream_audio_file(speech_file, chunk_size=1024):
    with open(speech_file, 'rb') as f:
        while 1:
            data = f.read(1024)
            if not data:
                break
            yield data

def retrieve_transcript(file):
    r = requests.post(COG_URL1, headers = {
        'Content-type': 'application/x-www-form-urlencoded',
        'Content-length': '0',
        'Ocp-Apim-Subscription-Key': '7ed090c64ac4414a80a4b20b81875717'
    })

    token = r.text

    s = requests.post(COG_URL2, data = stream_audio_file(file), headers = {
                        'Authorization': 'Bearer ' + token,
                        'Content-type': 'audio/wav; codec="audio/pcm"; samplerate=16000'
                    })
    print s.json()

    return s.json()['DisplayText']
                        
        
    
