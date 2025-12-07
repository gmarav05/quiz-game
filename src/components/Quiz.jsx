import '../index.css'
import image from '../assets/image.png'
import { useState,useEffect } from 'react'

export default function Quiz() {

    const [questions, setQuestions] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)
    const [data, setData] = useState(null)

    useEffect(function() {
        fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => {
           
            const updatedQuestions = data.results.map((question) => {
                const allAnswers = [...questions.incorrect_answers]

                const randomIndex = Math.floor(
                    Math.random() * (allAnswers.length + 1)
                );

                allAnswers.splice(randomIndex, 0, question.correct_answers)

                return {
                    ...questions,
                    ...allAnswers,
                    selectedAnswerIndex: 1,
                }

            });
             setData(updatedQuestions)
        })

    },[])

    


    return (
    <main>
        <img src={image}/>
        <p>{JSON.stringify(data)}</p>
        



    </main>
    )
}