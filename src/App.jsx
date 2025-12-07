import './index.css'
import image from './assets/image.png'
import { useState } from 'react'
export default function App() {

  const [quiz, setQuiz] = useState(null)

  function startQuiz() {
    setQuiz()

  }


  return (
    <>
     <main>
      <img src={image}/>

      <div className='start-page'>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button onClick={startQuiz}>Start quiz</button>
      </div>

     </main>
    </>
  )
}
