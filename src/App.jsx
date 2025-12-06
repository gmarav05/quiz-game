import './index.css'
import image from './assets/image.png'
function App() {

  return (
    <>
     <main>
      <img src={image}/>

      <div className='start-page'>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button>Start quiz</button>
      </div>

     </main>
    </>
  )
}

export default App
