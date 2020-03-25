(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Jaclyn', 'Ron', 'Milo', 'Mia'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var index = 0; index < names.length; index++) {
        console.log('items using forloop, ', names[index]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach( item => {
        console.log('items using forEach, ', item);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log('first() ================================');
    var numbers = [1, 2, 3, 4, 5];
    var first = (arr) => {
        return arr[0];
    };

    //Test-Driven-Development:
    var result = first(numbers);
    console.log('1: test first() ', result === 1);
    result = first(names);
    //this is a way to show red error on console intentionally
    // console.error('error: first()' , result !== 1 );
    console.log('2: test first() ', result === 'Jaclyn');

    console.log('second() ================================');
    var second = (arr) => {
        return arr[1];
    };
    //TDD
    result = second(numbers);
    console.log('1: test second() ', result === 2);
    result = second(names);
    console.log('2: test second() ', result === 'Ron');

    console.log('third() ================================');
    var third = (arr) => {
        return arr[arr.length - 1];
    };
    //TDD:
    result = third(numbers);
    console.log('1: test third() ', result === 5);
    result = third(names);
    console.log('2: test third() ', result === 'Mia');
    console.log('================================');

})();
