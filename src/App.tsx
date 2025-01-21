
import './App.css'
import FloatingText from './floatingText'

function App() {

  
  return (
    <>
    <div className='container'>
      <header>
        <h1>
          <FloatingText text="Lets Play Speed"></FloatingText>
        </h1>
      </header>
    </div>
    <div className='container-play'>
      <img src='./src/assets/play-button.png' className='play-button'></img>
    </div>
    </>
  )
}

export default App
