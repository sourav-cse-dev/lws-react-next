var lang = 'Bangla'; // global scoped

function learn(topic){
    // lang = topic; // global scoped
    var lang = topic; // function scoped

    console.log(`I am learning ${topic}`);
}

// console.log(topic); // ReferenceError: topic is not defined; not accessible outside the function
learn('JavaScript');

console.log(`I know ${lang}`);