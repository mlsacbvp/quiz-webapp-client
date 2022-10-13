import React from 'react'
import Quizgrid from '../../components/QuizONgoing/Quizgrid'
const quizpage = () => {
    const Testoptionarr = [
        'option 1',
        'option 2',
        'option 3',
        'option 4',
    ];
    const testquesText = `This is  Test Text - Question`;
    const testCounterText = `7`;

    return (
        <Quizgrid testquesText={testquesText} optionArray={Testoptionarr} counter={testCounterText} />
    )
}

export default quizpage