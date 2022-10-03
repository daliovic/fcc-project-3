import './App.css';
import audioQ from '../src/audio/Cev_H2.mp3'
import audioW from '../src/audio/Dsc_Oh.mp3'
import audioE from '../src/audio/Heater-1.mp3'
import audioA from '../src/audio/Heater-2.mp3'
import audioS from '../src/audio/Heater-3.mp3'
import audioD from '../src/audio/Heater-4_1.mp3'
import audioZ from '../src/audio/Heater-6.mp3'
import audioX from '../src/audio/Kick_n_Hat.mp3'
import audioC from '../src/audio/RP4_KICK_1.mp3'



import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from 'react';

function App() {


  const audioQref = useRef()
  const audioWref = useRef()
  const audioEref = useRef()
  const audioAref = useRef()
  const audioSref = useRef()
  const audioDref = useRef()
  const audioZref = useRef()
  const audioXref = useRef()
  const audioCref = useRef()
  const displayRef = useRef()

  const kbHandler = (e) => {
    switch (e.key.toUpperCase()){
      case 'Q' : {clickHandler(audioQref);break;}
      case 'W' : {clickHandler(audioWref);break;}
      case 'E' : {clickHandler(audioEref);break;}
      case 'A' : {clickHandler(audioAref);break;}
      case 'S' : {clickHandler(audioSref);break;}
      case 'D' : {clickHandler(audioDref);break;}
      case 'Z' : {clickHandler(audioZref);break;}
      case 'X' : {clickHandler(audioXref);break;}
      case 'C' : {clickHandler(audioCref);break;}
      default:{}
    }
  }

  const clickHandler = (ref) => {
    if (ref.current) {
      ref.current.play();
      displayRef.current.innerText = ref.current.id
      console.log(ref.current.id);
    }
  }


  useEffect (() => {
    document.addEventListener('keydown', kbHandler)
  })

  return (
    <div className="container-fluid" onKeyDown={kbHandler}>
      <div className='d-flex row col-5 mx-auto mt-5' id="drum-machine">
        <div className='mx-auto text-center my-5 fs-3' id="display" ref={displayRef}>-</div>
        <div className='d-flex row flex-wrap mx-auto justify-content-center' >
          <span id='parentQ' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioQref) }}>
            Q <audio id='Q' className='clip' src={audioQ} ref={audioQref}></audio>
          </span>
          <span id='parentW' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioWref) }}>
            W <audio id='W' className='clip' src={audioW} ref={audioWref}></audio>
          </span>
          <span id='parentE' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioEref) }}>
            E <audio id='E' className='clip' src={audioE} ref={audioEref}></audio>
          </span>
          <span id='parentA' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioAref) }}>
            A <audio id='A' className='clip' src={audioA} ref={audioAref}></audio>
          </span>
          <span id='parentS' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioSref) }}>
            S <audio id='S' className='clip' src={audioS} ref={audioSref}></audio>
          </span>
          <span id='parentD' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioDref) }}>
            D <audio id='D' className='clip' src={audioD} ref={audioDref}></audio>
          </span>
          <span id='parentZ' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioZref) }}>
            Z <audio id='Z' className='clip' src={audioZ} ref={audioZref}></audio>
          </span>
          <span id='parentX' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioXref) }}>
            X <audio id='X' className='clip' src={audioX} ref={audioXref}></audio>
          </span>
          <span id='parentC' className='drum-pad btn btn-primary col-3 mx-2 my-2 py-5 text-light fs-4'
            onClick={() => { clickHandler(audioCref) }}>
            C <audio id='C' className='clip' src={audioC} ref={audioCref}></audio>
          </span>

        </div>

      </div>
    </div>
  );
}

export default App;
