const tipsReducer = (state = [
                        "Type in a study topic, then press Enter",
                        "Short topics may work best",
                        "Input will be used to generate quiz questions",
                        "Click \u2713 to see your quiz questions"],
                    action) => {
    switch(action.type){
        default:
            return state;//must return the state or else Chrome Dev Tools fails to find the store...
    };
};

export default tipsReducer;