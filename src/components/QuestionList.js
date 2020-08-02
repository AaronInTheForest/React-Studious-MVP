import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion } from '../actions';

function QuestionList() {
    const dispatch = useDispatch();
    const termsList = useSelector( state => state.terms);
    const bloomsList = useSelector( state => state.blooms); 
    
    const questionsList = createQuestions();
    dispatch(addQuestion(questionsList));

    let filter = 'Display all';
    let termFilter = 'Display all';
    let bloomFilter = 'Display all';
    const filteredQuestionsList = filterQuestions();


    function createQuestions() {
        let result = [];
        for( const bloom of bloomsList){
            for(const stem of bloom.stems){
                for(const term of termsList){
                    let alternateTerm = termsList[Math.floor(Math.random() * termsList.length)];
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

    function filterQuestions(){
        switch(filter){
            case 'Term':
                break;
            case 'Bloom Level':
                break;
            case 'Question stem':
                break;
            case 'Dispay all':
                break;
            default:
                console.log('html element filterSelector passed invalid value to handleFilterSelectorChange');
                break;
        }
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
    function handleFilterSelectorChange(event){
        filter = event.target.value;
        
    }
    function handleTermSelectorChange(event){
        termFilter = event.target.value;        
    }
    function handleBloomSelectorChange(event){
        bloomFilter = event.target.value;        
    }

    function handleQuestionChange(event){
        event.preventDefault();
        let value = event.target.value.trim();
        // dispatch(addQuestion(value));
    }
    

    return (
        <div>
            <h2>Question</h2>
            <h3>Knowledge</h3>
            <label htmlFor="selectedSelector">Show:</label>
            <select id="selectedSelector" onChange={(event)=>handleFilterSelectorChange(event)} defaultValue={filter}>
                <option>Display all</option>
                <option>Display selected</option>
                <option>Display unselected</option>
            </select>
            <label htmlFor="termSelector">Term:</label>
            <select id="termSelector" onChange={(event)=>handleTermSelectorChange(event)} defaultValue={termFilter}>
                {termsList.map((term) => (<option key={term.id}>{term.value}</option>))}
                <option>Display all</option>
            </select>
            <label htmlFor="bloomSelector">Bloom level:</label>
            <select id="bloomSelector" onChange={(event)=>handleBloomSelectorChange(event)} defaultValue={bloomFilter}>
    {bloomsList.map((bloom) => (<option key={bloom.id}>{bloom.label} (level {bloom.level}):</option>))}
                <option>Display all</option>
            </select>

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