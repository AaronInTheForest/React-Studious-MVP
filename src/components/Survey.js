import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTerm, removeTerm } from '../actions';

function Survey() {
    const dispatch = useDispatch();
    let termsList = useSelector( state => state.terms);
    const tipsList = useSelector( state => state.tips);
    let randomPlaceholder = tipsList[Math.floor(Math.random() * tipsList.length)];

    function handleSubmit(event) {
        event.preventDefault();
        let input = document.getElementById('termInput');
        let value = input.value.trim();
        dispatch(addTerm(value));
        input.value = '';
    }

    function handleClick(event) {
        let word = termsList.find(el => el.id === event.target.id).value;
        let confMessage = `Are you sure you would like to delete ${word}, and all associated questions?`; 
        if(window.confirm(confMessage)){
            dispatch(removeTerm(event.target.id));
        }
    }

    return (
        <div>
            <h2>Survey Component</h2>
            <form onSubmit= {(event)=>handleSubmit(event)}>
                <input id="termInput" type="text" placeholder={randomPlaceholder}/>
                <button type="submit">+</button>
            </form>
            <ul>
                {termsList.map((term) => (
                    <li key={term.id}>{term.value} <button id={term.id} onClick= {(event)=>handleClick(event)}>x</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Survey;