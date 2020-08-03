import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion, updateFilter } from '../actions';

function QuestionList() {
    const dispatch = useDispatch();
    const termsList = useSelector( state => state.terms);
    const bloomsList = useSelector( state => state.blooms);
    const filter = useSelector( state => state.filter);
    const stemsList = listStems();
    const questionsList = createQuestions();
    dispatch(addQuestion(questionsList));

      
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

    function listStems(){
        let result = [];
        if(filter.byBloom === ''){
            for( const bloom of bloomsList){
                for( const stem of bloom.stems){
                    result.push(stem);
                }
            }
        }else{
            let bloom = bloomsList.filter(bloom => bloom.id === filter.byBloom)[0];
            console.log('filter bloom')
            for( const stem of bloom.stems){
                result.push(stem);
            }
        }
        return result;//THIS IS WORKING I CAN'T GET LIST TO UPDATE
    }

    function filterQuestions(){
        console.log('filterQuestions()')
    }


    function handleSelectedSelectorChange(event){
        switch(event.target.value){
            case 'Display all':
                filter.setState({isSelected: null});
                break;
            case 'Display selected':
                filter.setState({isSelected: true});
                break;
            case 'Display unselected':
                filter.setState({isSelected: false});
                break;
            default:
                filter.setState({isSelected: null});
                break;
        }
        dispatch(updateFilter(filter));
    }
    function handleTermSelectorChange(event){
        if(event.target.value === 'Display all'){
            filter.byTerm = '';
        }else{
            let term = termsList.filter(term => term.value === event.target.value)[0];
            filter.byTerm = term.id;
        }        
        dispatch(updateFilter(filter));
    }
    function handleBloomSelectorChange(event){
        if(event.target.value === 'Display all'){
            filter.byBloom = '';
        }else{
            let bloom = bloomsList.filter(bloom => bloom.label === event.target.value)[0];
            filter.byBloom = bloom.id;
        }        
        dispatch(updateFilter(filter));
    }
    function handleStemSelectorChange(event){
        if(event.target.value === 'Display all'){
            filter.byStem = '';
        }else{
            let stem = stemsList.filter(stem => stem.value === event.target.value)[0];
            filter.byStem = stem.id;
        }        
        dispatch(updateFilter(filter));
    }

    function handleQuestionChange(event){
        event.preventDefault();
        let value = event.target.value.trim();
        //dispatch(addQuestion(value));
    }
    

    return (
        <div>
            <h2>Question</h2>
            <h3>Knowledge</h3>
            <label htmlFor="selectedSelector">Show:</label>
            <select id="selectedSelector" onChange={(event)=>handleSelectedSelectorChange(event)} defaultValue='Display all'>
                <option>Display all</option>
                <option>Display selected</option>
                <option>Display unselected</option>
            </select>
            <label htmlFor="termSelector">Term:</label>
            <select id="termSelector" onChange={(event)=>handleTermSelectorChange(event)} defaultValue='Display all'>
                {termsList.map((term) => (<option key={term.id} id={term.id}>{term.value}</option>))}
                <option>Display all</option>
            </select>
            <label htmlFor="bloomSelector">Bloom level:</label>
            <select id="bloomSelector" onChange={(event)=>handleBloomSelectorChange(event)} defaultValue='Display all'>
                {bloomsList.map((bloom) => (<option key={bloom.id}>{bloom.label}</option>))}
                <option>Display all</option>
            </select>
            <label htmlFor="stemSelector">Stem:</label>
            <select id="stemSelector" onChange={(event)=>handleStemSelectorChange(event)} defaultValue='Display all'>
                {stemsList.map((stem) => (<option key={stem.id}>{stem.value}</option>))}
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