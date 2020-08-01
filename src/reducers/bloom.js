const bloom = [
    {
        label: "Knowledge",
        level: 1,
        stems: [
            "What do you remember about *?",
            "How would you define *?",
            "How would you identify *?",
            "How would you recognize *?",
            "What would you choose *?",
            "Describe what happens when *?",
            "How is (are) *?",
            "Where is (are) *?",
            "Which one  *?",
            "Who was  *?",
            "Why did  *?",
            "What is (are) *?",
            "When did *?",
            "How would you outline  *?",
            "List the * in order."
        ]
    },
    {
        label: "Comprehension",
        level: 2,
        stems: [
            "How would you compare * with ^?",
            "How would you contrast * with ^?",
            "How would you clarify the meaning of *?",
            "How would you differentiate between * and ^?",
            "How would you generalize *?",
            "How would you express *?",
            "What can you infer from *?",
            "What did you observe *?",
            "How would you identify *?",
            "How can you describe *?",
            "Will you restate *?",
            "Elaborate on *.",
            "What would happen if *?",
            "What is the main idea of *?",
            "What can you say about *?"
        ]
    },
    {
        label: "Application",
        level: 3,
        stems: [
            "What actions would you take to perform *?",
            "How would you develop * to present ^?",
            "What other way would you choose to *?",
            "What would the result be if *?",
            "How would you demonstrate *?",
            "How would you present *?",
            "How would you change *?",
            "How would you modify *?",
            "How could you develop *?",
            "Why does * work?",
            "How would you alter * to ^?",
            "What examples can you find that *?",
            "How would you solve *?"
        ]
    },
    {
        label: "Analysis",
        level: 4,
        stems: [
            "How can you classify * according to ^?",
            "How can you compare the different parts *?",
            "What explanation do you have for *?",
            "How is * connected to ^?",
            "Discuss the pros and cons of *.",
            "How can you sort the parts *?",
            "What is the Analysis of *?",
            "What can you infer *?",
            "What ideas validate *?",
            "How would you explain *?",
            "What can you point out about *?",
            "What is the problem with *?",
            "Why do you think *?"
        ]
    },
    {
        label: "Evaluation",
        level: 5,
        stems: [
            "What criteria would you use to assess *?",
            "What data was used to evaluate *?",
            "What choice would you have made *?",
            "How would you determine the facts *?",
            "What is the most important *?",
            "What would you suggest *?",
            "How would you grade *?",
            "What is your opinion of *?",
            "How could you verify *?",
            "What information would you use to prioritize *?",
            "Rate the *.",
            "Rank the importance of *.",
            "Determine the value of *."
        ]
    },
    {
        label: "Synthesis",
        level: 6,
        stems: [
            "What alternative would you suggest for *?",
            "What changes would you make to revise *?",
            "How would you explain the reason *?",
            "How would you generate a plan to *?",
            "What could you invent with *?",
            "What facts can you gather about *?",
            "Predict the outcome if *.",
            "What would happen if *?",
            "How would you portray *?",
            "Devise a way to *.",
            "How would you compile the facts for *?",
            "How would you elaborate on the reason *?",
            "How would you improve *?"
        ]
    }
];
const bloomReducer = (state = bloom, action) => {
    switch(action.type){
        default:
            return state;//must return the state or else Chrome Dev Tools fails to find the store...
    };
}

export default bloomReducer;