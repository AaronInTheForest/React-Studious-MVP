const bloom = [
    {
        id: 'c03b5101-b372-43ab-8201-d7ef1e380b4d',        
        label: "Knowledge",
        level: 1,
        stems: [
            { id: "guid", value: "What do you remember about *?"},
            { id: "guid", value: "How would you define *?"},
            { id: "guid", value: "How would you identify *?"},
            { id: "guid", value: "How would you recognize *?"},
            { id: "guid", value: "What would you choose *?"},
            { id: "guid", value: "Describe what happens when *?"},
            { id: "guid", value: "How is (are) *?"},
            { id: "guid", value: "Where is (are) *?"},
            { id: "guid", value: "Which one  *?"},
            { id: "guid", value: "Who was  *?"},
            { id: "guid", value: "Why did  *?"},
            { id: "guid", value: "What is (are) *?"},
            { id: "guid", value: "When did *?"},
            { id: "guid", value: "How would you outline  *?"},
            { id: "guid", value: "List the * in order."}
        ]
    },
    {
        id: '06bb839f-5cca-499c-9e6e-bdd3374dfa4e',
        label: "Comprehension",
        level: 2,
        stems: [
            { id: "guid", value: "How would you compare * with ^?"},
            { id: "guid", value: "How would you contrast * with ^?"},
            { id: "guid", value: "How would you clarify the meaning of *?"},
            { id: "guid", value: "How would you differentiate between * and ^?"},
            { id: "guid", value: "How would you generalize *?"},
            { id: "guid", value: "How would you express *?"},
            { id: "guid", value: "What can you infer from *?"},
            { id: "guid", value: "What did you observe *?"},
            { id: "guid", value: "How would you identify *?"},
            { id: "guid", value: "How can you describe *?"},
            { id: "guid", value: "Will you restate *?"},
            { id: "guid", value: "Elaborate on *."},
            { id: "guid", value: "What would happen if *?"},
            { id: "guid", value: "What is the main idea of *?"},
            { id: "guid", value: "What can you say about *?"}
        ]
    },
    {
        id: '26e00cf6-8259-44e6-87ea-934973a594c5',
        label: "Application",
        level: 3,
        stems: [
            { id: "guid", value: "What actions would you take to perform *?"},
            { id: "guid", value: "How would you develop * to present ^?"},
            { id: "guid", value: "What other way would you choose to *?"},
            { id: "guid", value: "What would the result be if *?"},
            { id: "guid", value: "How would you demonstrate *?"},
            { id: "guid", value: "How would you present *?"},
            { id: "guid", value: "How would you change *?"},
            { id: "guid", value: "How would you modify *?"},
            { id: "guid", value: "How could you develop *?"},
            { id: "guid", value: "Why does * work?"},
            { id: "guid", value: "How would you alter * to ^?"},
            { id: "guid", value: "What examples can you find that *?"},
            { id: "guid", value: "How would you solve *?"}
        ]
    },
    {
        id: 'c01e52f7-a913-441f-a0bc-c2e35e6b0d21',
        label: "Analysis",
        level: 4,
        stems: [
            { id: "guid", value: "How can you classify * according to ^?"},
            { id: "guid", value: "How can you compare the different parts *?"},
            { id: "guid", value: "What explanation do you have for *?"},
            { id: "guid", value: "How is * connected to ^?"},
            { id: "guid", value: "Discuss the pros and cons of *."},
            { id: "guid", value: "How can you sort the parts *?"},
            { id: "guid", value: "What is the Analysis of *?"},
            { id: "guid", value: "What can you infer *?"},
            { id: "guid", value: "What ideas validate *?"},
            { id: "guid", value: "How would you explain *?"},
            { id: "guid", value: "What can you point out about *?"},
            { id: "guid", value: "What is the problem with *?"},
            { id: "guid", value: "Why do you think *?"}
        ]
    },
    {
        id: 'd9240862-a12b-41d9-9267-f25a6f4a7334',
        label: "Evaluation",
        level: 5,
        stems: [
            { id: "guid", value: "What criteria would you use to assess *?"},
            { id: "guid", value: "What data was used to evaluate *?"},
            { id: "guid", value: "What choice would you have made *?"},
            { id: "guid", value: "How would you determine the facts *?"},
            { id: "guid", value: "What is the most important *?"},
            { id: "guid", value: "What would you suggest *?"},
            { id: "guid", value: "How would you grade *?"},
            { id: "guid", value: "What is your opinion of *?"},
            { id: "guid", value: "How could you verify *?"},
            { id: "guid", value: "What information would you use to prioritize *?"},
            { id: "guid", value: "Rate the *."},
            { id: "guid", value: "Rank the importance of *."},
            { id: "guid", value: "Determine the value of *."}
        ]
    },
    {
        id: 'f4de4fe1-f1ae-45e4-9a14-6365dd4ece28',
        label: "Synthesis",
        level: 6,
        stems: [
            { id: "guid", value: "What alternative would you suggest for *?"},
            { id: "guid", value: "What changes would you make to revise *?"},
            { id: "guid", value: "How would you explain the reason *?"},
            { id: "guid", value: "How would you generate a plan to *?"},
            { id: "guid", value: "What could you invent with *?"},
            { id: "guid", value: "What facts can you gather about *?"},
            { id: "guid", value: "Predict the outcome if *."},
            { id: "guid", value: "What would happen if *?"},
            { id: "guid", value: "How would you portray *?"},
            { id: "guid", value: "Devise a way to *."},
            { id: "guid", value: "How would you compile the facts for *?"},
            { id: "guid", value: "How would you elaborate on the reason *?"},
            { id: "guid", value: "How would you improve *?"}
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