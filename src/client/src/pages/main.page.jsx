
import { useState, useEffect } from "react";
import settings from "./config/settings.json"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";


function mainPage(props) {
    //responses holds all possible responses for 8 ball fortune
    let [responses, setResponses] = useState([]);
    //random phrase will be the random one response from the response object array
    //set initially to empty string
    let [randomPhrase, setRandomPhrase] = useState("");

    const {
      transcript,
      listening,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    function shake(){
      let ball= document.getElementById("ball")
      //css animation
      ball.classList.add("shake");
      //remove shake class
      setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    }

    function listen() {
      setRandomPhrase("");
      SpeechRecognition.startListening();
    }

    //update fortune(random phrase) on an event
    function updatePhrase() {
      SpeechRecognition.stopListening();
        setRandomPhrase("");
        shake();
        setTimeout(() => {

          if (transcript.toLowerCase().includes("javascript")) {
            setRandomPhrase("JAVASCRIPT RULES!!!")
          }else {
            let random = responses[Math.floor(Math.random()*responses.length)];
            setRandomPhrase(`${random.Phrase}`);
          
          }
        }, 1500);  


    };

    //get 8 ball responses on initial load (when component mounts)
    useEffect( () => {
      console.log("did mount");
      fetch(`${settings.serverUrl}/api/responses`)
          .then((res) => res.json())
          .then((data) => setResponses(data))
          .catch((err) => {
            console.error(err);
            setResponses("Could not connect to test api endpoint :(");
          });    
      }, []);
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

  return (
      <div className="App; center">
      <h2>MAGIC 8 BALL</h2>
      <hr/>
          <div className="wrapper">
                <div>
                  <img id="ball"  alt="Magic 8 Ball" src="/images/8ball.png"/>
                </div>
                <div>
                  <p>Microphone: {listening ? "on" : "off"}</p>
                  <button id="btnAsk" onClick={listen}>Ask Me Anything</button>
                  <p>{transcript}? </p>
                  <button id="btnFortune" onClick={updatePhrase}>Get Fortune </button>
                  <p id="fortuneDisplay" className="fortune"> {randomPhrase}</p>
                </div>
                
          
        </div>
      </div>
    
      
    );
}

export default mainPage;

