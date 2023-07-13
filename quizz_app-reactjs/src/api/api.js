


const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
}


export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(url)).json();
    return data.results.map((data) => (
        {
            ...data,
            answers: shuffleArray([...data.incorrect_answers, data.correct_answer])
        }
    ))

}