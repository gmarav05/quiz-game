import image from '../assets/image.png'
import '../index.css'

export default function StartPage(props) {
    return (
    <main>
      <img src={image}/>

      <div className='start-page'>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button onClick={props.startQuiz}>Start quiz</button>
      </div>

    </main>
    )
}