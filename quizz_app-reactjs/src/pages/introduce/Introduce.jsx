import React, { useState } from 'react'
import './introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'



function Introduce() {

    const difficulty = ["easy", "medium", "hard"]
    const [diffchange, setDiffchange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10;

    console.log(diffchange, "difficulty ");

    const startQuiz = () => {
        if (diffchange === '') {
            navigate(`/quiz/easy/${TOTAL_QUESTIONS}`)

        }

        if (diffchange) {
            navigate(`/quiz/${diffchange}/${TOTAL_QUESTIONS}`)
        }
    }


    return (
        <>
            <div className='introduce'>
                <div className="introduce-container">
                    <img src="https://play-lh.googleusercontent.com/WkK8-_NYDo0f15qfGsZnn4iZ9G7Q-MMloycE5mdnClbUNnkQ50hZrkWi5xxubg5_F8E" alt="" />
                    <Dropdown data={difficulty} setDiffchange={setDiffchange} />
                    <div onClick={startQuiz} className='introduce-btn'>Quiz'e Başla</div>
                </div>
            </div>

        </>
    )
}

export default Introduce