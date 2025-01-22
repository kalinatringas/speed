
import './App.css'
import FloatingText from './floatingText'

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
