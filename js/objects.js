(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Ron",
        lastName: 'Palencia',
        sayHello:  function () {
            return `Hello ${this.firstName} ${this.lastName}!`;
        }
    };

    console.log(person.firstName);
    console.log(person.lastName);



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // name + beforeDiscount + discount + amountAfterDiscount

    shoppers.forEach( (item) => {
        if (item.amount < 200) {
            console.log(`Shopper ${item.name}'s total is $${item.amount} and their discount is $${0} and their final total is $${item.amount}`);
        } else {
            let itemDiscount = item.amount * .12;
            let finalPrice = item.amount - itemDiscount;
            console.log(`Shopper ${item.name}'s total is $${item.amount} and their discount is $${itemDiscount} and their final total is $${finalPrice}`)
        }
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [{
        title: "Leaders Eat Last",
        author: {
            firsName: "Simon",
            lastName: "Sinek"
        }
    },
        {
            title: "Columbus Day",
            author: {
                firstName: 'Craig',
                lastName: 'Alanson'
            }
        },
        {
            title: "Creative Selection",
            author: {
                firstName: "Ken",
                lastName: "Kocienda"
            }
        },
        {
            title: "The Alchemist",
            author: {
                firstName: "Paulo",
                lastName: "Coelho"
            }
        }
    ];

    books[4] = {};
    books[4].title = 'Into The Magic Shop';
    books[4].author = {
        firstName: 'James',
        lastName: 'Doty'
    };

console.log(books);
console.log(books[0].title);
console.log(books[1].author.firstName);
console.log(books[4].author.lastName);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach( (item, index) => {
        console.log(`
               Book # ${index + 1}
               Title: ${item.title}
               Author: ${item.author.firstName} ${item.author.lastName}
               ---
        `);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function CreateBook (title, firstName, lastName) {
        this.title = title;
        this.author = {
            firstName: firstName,
            lastName: lastName
        };
    }

  var newBooks = new CreateBook ('Ascendant: Book 1', 'Craig', 'Alanson');
  console.log(newBooks);

 const showBookInfo = (arr) => {
     arr.forEach( (book, index) => {
         console.log(`
               Book # ${index + 1}
               Title: ${book.title}
               Author: ${book.author.firstName} ${book.author.lastName}
               ---
        `);
     });
 };

books.push(newBooks);

  showBookInfo(books);
})();
