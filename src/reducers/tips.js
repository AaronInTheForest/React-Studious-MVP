const tipsReducer = (state = [
                        { id: "guid", value: "Type in a study topic, then press Enter" },
                        { id: "guid", value: "Short topics may work best" },
                        { id: "guid", value: "Input will be used to generate quiz questions" },
                        { id: "guid", value: "Click \u2713 to see your quiz questions" }],
                    action) => {
    switch (action.type) {
        default:
            return state;//must return the state or else Chrome Dev Tools fails to find the store...
    };
};

export default tipsReducer;