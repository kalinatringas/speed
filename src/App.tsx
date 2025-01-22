
import './App.css'
import { Accordion } from 'rsuite'
import FloatingText from './floatingText'
import 'rsuite/Accordion/styles/index.css';
function App() {

  
  return (
    <>
    <audio autoPlay loop>
    <source src="./src/assets/in-the-saloon-116225.mp3" type="audio/mp3" />
    Your browser does not support the audio element.
    </audio>
    <div className='container'>
      <header>
        <h1>
          <FloatingText text="Lets Play Speed"></FloatingText>
        </h1>
      </header>
    </div>
    <Accordion>
      <Accordion.Panel header="how do i play?">
      Well, partner, lemme tell ya 'bout Speed, the fastest darn card game in the West!<br/>
      <h2>The Setup</h2>

      Each cowpoke gets 20 cards in their holster (deck). <br/>
      There's a pile of 5 cards on each side for reloadin’ (we call 'em stockpiles).<br/>
      In the middle, we lay down two face-down cards to start the fightin’ piles.<br/>

      <h2>How Ya Play</h2>

      Flip over them two middle cards to get things started.
      <br/>
      Both players use their gunslinger reflexes to slap down cards from their hand onto those piles.<br/>
      The trick is: The card you play has to be one number higher or one number lower than what's showin’.<br/>
      Fer instance, if there's a 5, you can play a 4 or a 6.<br/>

      No takin’ turns here, amigo—it’s a free-for-all! Fastest hand wins the round.<br/>

      <h2>Reloadin’</h2>

      If ya run outta cards in yer hand, grab 5 more from yer stockpile.<br/>
      If neither player can play, flip new cards onto the middle piles.<br/>

      <h2>The Goal</h2>

      Be the first cowboy to git rid of all yer cards and holler “SPEED!”<br/>
      Pro Tips<br/>

    Don’t get distracted by yer opponent’s quick draw—focus on yer own cards.<br/>
    Keep yer wits about ya—Speed ain’t just about goin’ fast, it’s about bein’ clever.<br/>

    Now saddle up and git dealin’!

      </Accordion.Panel>
    </Accordion>
    <div className='koala-img'>
      <img src='./src/assets/koala.png'/>
    </div>
    <div className='container-play'>
      <img src='./src/assets/play-button.png' className='play-button'></img>
    </div>
    </>
  )
}

export default App
