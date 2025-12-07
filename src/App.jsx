import { useState } from 'react'
import StartPage  from './components/StartPage'
import Quiz from './components/Quiz'

export default function App() {

  const [quiz, setQuiz] = useState(false)

  function startQuiz() {
    setQuiz(quiz => !quiz)
    document.getElementsByClassName('start-page').style.display = 'none'
  }

  return (

    <>

    { 
    quiz ?
     (
     <Quiz
      />
      ) 
     : < StartPage
      startQuiz={startQuiz}
      />
      
    }
    </>
  )
}
