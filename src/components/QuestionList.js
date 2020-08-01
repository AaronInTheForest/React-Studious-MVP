import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion } from '../actions';

function QuestionList() {
    const dispatch = useDispatch();
    const termsList = useSelector( state => state.terms);
    const bloomsList = useSelector( state => state.blooms); 
    
    let questionsList = createQuestions();
    dispatch(addQuestion(questionsList));


    function createQuestions() {
        let result = [];
        for( const bloom of bloomsList){
            for(const stem of bloom.stems){
                for(const term of termsList){
                    let alternateTerm = termsList[Math.floor(Math.random() * termsList.length)];
                    // let question = {id: uuidv4()};
                    // console.log('stem.value')
                    // console.log(stem.value)
                    let question = {
                        id: uuidv4(),

                        termId: term.id,
                        alternateTermId: stem.value.includes('^') ? alternateTerm.id : null,
                        value: stem.value.replace('*', term.value).replace('^', alternateTerm.value),

                        bloomId: bloom.id,
                        level: bloom.level,
                        label: bloom.label,
                        
                        isEdited: false,
                        isSelected: false,
                        answers: [],
                    }
                    result.push(question);
                    
                }
            }
        }
        return result;
        
    }

    // function selectByCountTermLevel(count, term, level) {
    //     let filteredQuestionsList = questionsList.filter(question => question.level === level && question.term === term);
    //     let result = [];
    //     do{
    //         let randomQuestion = filteredQuestionsList[Math.floor(Math.random() * filteredQuestionsList.length)];
    //         if(!result.includes(randomQuestion)){
    //             result.push(randomQuestion)
    //         }

    //     }while(result.length < count);
    //     console.log(result);
    //     return result;
    // }

    function handleQuestionChange(event){
        event.preventDefault();
        let value = event.target.value.trim();
        // dispatch(addQuestion(value));
    }

    return (
        <div>
            <h2>Question</h2>
            <h3>Knowledge</h3>
            <ul>
                {questionsList.map((question) => (
                    <li key={question.id}>
                        <label>{question.label} (Lvl. {question.level}):</label>
                        <input type="text" value={question.value} onChange={(event)=>handleQuestionChange(event)}/>
                        {/* <button id={term.id} onClick= {(event)=>handleSelect(event)}>+</button> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuestionList;