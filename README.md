# SignDetect

This application is developed to help dumb people interact with others with ease.
It detects voice and converts the input speech into a sign language based video.

## Installation

1. From the root of the repository run `pip install -r requirements.txt`
2. Deploy flask endpoint by running  `python main.py`. This will host the flask endpoints at localhost:6789
3. Deploy node server by running `node index.js` .
4. Access the UI from the browser at localhost:8000

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


## Authors
 
-* **Shubham Verma** - *Initial work* - [shubhamverma27](https://github.com/shubhamverma27)
-* **Salil Gautam** - *Initial work* - [salil-gtm](https://github.com/salil-gtm)
-* **Nishant Gore** - *Initial work* - [NishantGore](https://github.com/nishantgore)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

 ## Acknowledgments
 
-* https://handspeak.com/word/ for public repo of sign videos.
