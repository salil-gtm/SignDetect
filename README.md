![Logo](https://github.com/salil-gtm/SignDetect/blob/master/29003533_10204203894813894_2122524096_n.png?raw=true)
# SignDetect

This application is developed to help speechless people interact with others with ease.
It detects voice and converts the input speech into a sign language based video.

## Installation

1. From the root of the repository run `pip install -r requirements.txt`
2. Deploy the flask endpoint by running  `python main.py`. This will host the flask endpoints at localhost:6789
3. Deploy node server by running `node index.js` .
4. Access the UI from the browser at http://localhost:8000

### Prerequisites

What things you need to install the software and how to install them
1. Python (>=Python 3.0)
2. Node
3. Flask


### Running the Platform

 
1. Run python main.py
2. Record your voice for 5 seconds.
3. wait for the processing to be done.
4. The Video will be played in default video player (It should support .mp4 videos.)


## Built With
* [Python]
* [Node]
* [Flask]


## Future Works [WiP]
* Sign language recognition via image processing and deep learning and converting it to text and speech.
* Full Fledged platform for 2 way interaction to be developed.

## Authors

* **Salil Gautam** - [salil-gtm](https://github.com/salil-gtm)
* **Shubham Verma** - [shubhamverma27](https://github.com/shubhamverma27)
* **Nishant Gore** - [NishantGore](https://github.com/nishantgore)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

 ## Acknowledgments
 
* https://handspeak.com/word/ for public repo of sign videos.
* Made with &#9829; during Mumbai Hackathon 2018 in 24 hrs.
