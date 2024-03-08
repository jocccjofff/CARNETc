import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Estás seguro?",
  "Muy seguro?",
  "Pensalo de nuevo, por favor",
  "Porfi decime que si",
  "Voy a llorar",
  "Estás rompiendo mi corazón :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [siPressed, setSiPressed] = useState(false);
  const siButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
<div className="Carnet-container">
  {siPressed ? (
    <>
    <img
    alt="autoF1"
    src="<div class="<div class="tenor-gif-embed" data-postid="5101352" data-share-method="host" data-aspect-ratio="2.08333" data-width="100%"><a href="https://tenor.com/view/tina-driving-crash-bad-bobs-gif-5101352">Tina Driving GIF</a>from <a href="https://tenor.com/search/tina-gifs">Tina GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    />
    <div className="text">Siiii!!!</div>
    </>
  ):(
    <>
    <img
    alt="Hamilton"
    src=<div class="tenor-gif-embed" data-postid="23263878" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/vettel-sebastian-vettel-celebration-gif-23263878">Vettel Sebastian Vettel GIF</a>from <a href="https://tenor.com/search/vettel-gifs">Vettel GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>"" 
    />
    
     <div>Me vas a ayudar a sacar el carnet?"</div> 
    <div>
      <button 
      className="siButton"
      style={{fontSize: siButtonSize}}
      onClick={() => setSiPressed(true)}
      >
        Si
      </button>
      <button onClick={handleNoClick} className="noButton">No</button>
      {getNoButtonText()}
      </button>
    </div>
    </> 
  )}
    </div>
  );
}   

export default App;