var lang = 'Bangla'; // global scoped

function learn(topic){
    lang = topic; // global scoped
    // var lang = topic; // function scoped

    if(true){
        let a = 5; // block scoped
        // let a = 6; // re-declaring a variable in the same block will throw an error: SyntaxError: Identifier 'a' has already been declared
        a = 6; // re-assigning a variable is allowed

        var b = 10;
        var b = 15; // re-declaring a variable with var is allowed, it will just overwrite the previous value
        b = 20; // re-assigning a variable with var is allowed

        const c = 25; // block scoped
        // const c = 30; // re-declaring a variable with const will throw an error: SyntaxError: Identifier 'c' has already been declared
        // c = 30; // re-assigning a variable with const will throw an error: TypeError: Assignment to constant variable. 

        const d = {
            name: 'JavaScript',
        }
        d.name = 'React'; // re-assigning a property of an object declared with const is allowed
        // const d = {} // re-declaring a variable with const will throw an error: SyntaxError: Identifier 'd' has already been declared

        const e = [1, 2, 3];
        e.push(4); // re-assigning a property of an array declared with const is allowed
        // const e = [] // re-declaring a variable with const will throw an error: SyntaxError: Identifier 'e' has already been declared

        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
    }
    // console.log(a); // ReferenceError: a is not defined; not accessible outside the block
    console.log(`I am learning ${lang}`);
}

// console.log(topic); // ReferenceError: topic is not defined; not accessible outside the function
learn('JavaScript');

console.log(`I know ${lang}`);