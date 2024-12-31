'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const question = new Map([
  ['question', 'Whats the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', '2'],
  [true, 'Correct!! :)'],
  [false, 'Try again!'],
]);

console.log(question);

//const hoursMap = new Map(Object.entries(openingHours));

// Quiz App
console.log(`++++++++++++++++++++++++++++++++++++++++++++++++`);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = prompt('Your answer');
const answer = 3;
console.log(`answer: ${answer}`);
//console.log(question.get(answer === '2'));

console.log(question.get(question.get('correct') === answer));

// convert map to array

console.log('convert back!!!!:::::::::::' + [...question]);
*/
// Mutating var

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variables
// [main, secondary] = [secondary, main];

// const [starter, mainC] = restaurant.order(2, 0);
// console.log(starter, mainC);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [a, , [x, y]] = nested;
// console.log(a, x, y);

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Assignments MAP

const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

console.log(`bookMap: ${[...bookMap]}`);

bookMap.set('pages', 464);
console.log(`bookMap: ${[...bookMap]}`);

const title = bookMap.get('title');
const author = bookMap.get('author');
console.log(` /////////////// ******************${title} by ${author}`);

console.log(`sizeeeeeeeeeeeeeeeeeeeeeeeeeeeeee: ${bookMap.size}`);

if (bookMap.has('author')) console.log('The author of the book is known');

bookMap.has('author') && console.log('The author of the book is known');

const firstBookMap = new Map(Object.entries(books[0]));
console.log(`firstBookMap: ${[...firstBookMap]}`);

for (const [key, val] of firstBookMap) {
  if (typeof key === 'number') console.log(`@@@@@@@@@@@@@@@@@@ ${key}`);
}

console.log(`8888888888888888888888888888888888888888888888888888888`);

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
/*
const [{ title, author, ISBN }] = books;
console.log(title, author, ISBN);

const { keywords: tags1 } = books[0];
console.log(tags1);

const { language, programmingLanguage = 'uncnown' } = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

function printBookInfo({
  title = 'unknown',
  author = 'unknown',
  year = 'year unknown',
}) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

console.log(
  '***********************12/28/24***********************************'
);
*/
// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr); /// individual prints like (1, 2, 3, 4, ...)

// const newMenu = [...restaurant.mainMenu, 'buterbrodas'];
// console.log(newMenu);

// // copy array

// const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// // join 2 arrays

// const jointMenu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(jointMenu);

// const str = 'Deividas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);
// console.log('ingredients');

// restaurant.orderPasta(...ingredients);

// objects too

// const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Mikas' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Mikosius';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
/*
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

function spellWord(word) {
  console.log(...word);
}

spellWord('JavaScript');

const [a1, b1, ...c1] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a1, b1, c1); // 3 - 8

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 3, 7, 11);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log('******', bookPublisher);
console.log('-------', restOfTheBook);

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
*/
// -------------------- or ------------------
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// ------------------ and --------------------

// console.log(0 && 'deividas');
// console.log(7 && 'deividas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java' || 'no data available';
// }

// console.log(hasExamplesInJava(books[1]));

// console.log(
//   '*********************************************************************************'
// );

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`${title}`);
// }
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish: null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

for (let j = 0; j < books.length; j++) {
  books[j].onlineContent ?? console.log(`last one: ${title}`);
}

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'Itali',
  owner: 'Senior',
};

// OR ASSIGNMENT OPERATOR

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && 22;
// rest2.owner = rest2.owner && 'bybys';

rest1.owner &&= 'bybys';
rest2.owner &&= 'bybys';

console.log(rest1);
console.log(rest2);

for (let j = 0; j < books.length; j++) {
  books[j].edition ||= 1;
}

for (let j = 0; j < books.length; j++) {
  if (books[j].thirdParty.goodreads.rating < 4.2) books[j].highlighted = false;

  books[j].highlighted = books[j].thirdParty.goodreads.rating < 4.2;

  books[j].highlighted = books[j].thirdParty.goodreads.rating < 4.2 && false;

  books[j].highlighted &&= !(books[j].thirdParty.goodreads.rating < 4.2);
}

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu1) console.log(item);

for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);

let pageSum = 0;
for (const item of books) {
  pageSum += item.pages;
}
console.log(`Total pages: ${pageSum}`);

const allAuthors = [];
let j = 0;
for (const [i, book] of books.entries()) {
  if (typeof book.author === 'string') {
    j++;
    console.log(`entries i: ${i}`);
    allAuthors.push(`${j} ${book.author}`);
  } else {
    for (const [ii, author] of book.author.entries()) {
      j++;
      console.log(`entries ii: ${ii}`);
      allAuthors.push(`${j} ${book.author[ii]}`);
    }
  }
}

console.log(`allAuthors: `, allAuthors);

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
  // ...
};

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
  // ...
};

if (restaurant.openingHours) console.log(restaurant.openingHours.mon);

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist!");

console.log(restaurant.orderEgg?.(0, 1) ?? "Method doesn't exist!");

// ARRAY

const users = [{ name: 'Deividas', email: 'deiwis@yahoo.com' }];

console.log(users[0]?.name ?? 'No user!');

function getFirstKeyword(book) {
  return book.keywords?.[0] ?? 'undefined';
}

console.log(getFirstKeyword(books[0]));

console.log('*****************************************');

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// prop names

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// prop values

const values = Object.values(openingHours);
console.log(values);

// entire object
const entries2 = Object.entries(openingHours);
console.log(`entries2: + ${entries2}`);

console.log('//////////////////////////////////////////////////////');

for (const [key, { open, close }] of entries2) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}

console.log('+++++++++++++ assirnments +++++++++++++++++');

const entries3 = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  // console.log(`key: ` + key);
  entries3.push([key]);
}

console.log(entries3);
*/
// thirdParty: {
//   goodreads: {
//     rating: 4.41,
//     ratingsCount: 1733,
//     reviewsCount: 63,
//     fiveStarRatingCount: 976,
//     oneStarRatingCount: 13,
//   },
// },

//console.log('############################################');
/*
const valArr = [];

const valuesX = Object.values(books[0].thirdParty.goodreads);
console.log(valuesX);

// entire object
const entriesX = Object.entries(books[0].thirdParty.goodreads);
console.log(entriesX); */

// for (const val of Object.values(books[0].thirdParty.goodreads)) {
//   console.log(`val: ${val}`);
//   valArr.push(val);
// }

// const entriesY = [[], [], []];
// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entriesY[index].push(value);
// }

// console.log(`entriesY: ${entriesY}`);
/*
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
console.log(`entries after key: ${entries}`);

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}
console.log(`entries after val: ${entries}`);

const entries22 = Object.entries(books[0].thirdParty.goodreads);
console.log(`entries22: ${entries22}`); */

// *******************    SETS  ******************************
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log('orderSet: ', orderSet);

console.log(new Set('Deividas'));

console.log(orderSet.size);
console.log(orderSet.has('Bred'));
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Chef'];

const staffUni = [...new Set(staff)];
console.log(staffUni);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Chef']).size);
console.log(new Set('deividas').size);
*/
// ASSIGNMENTS **************************
/*
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(`allKeywords: ${allKeywords}`);

const uniqueKeywords = new Set(allKeywords);
console.log(`new Set: ${[...uniqueKeywords]}`);

uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log('added elements: ' + [...uniqueKeywords]);

uniqueKeywords.delete('business');
console.log('deleted business ' + [...uniqueKeywords]);

const uniqueKeywordsArr = [...uniqueKeywords];
console.log('array: ' + [...uniqueKeywords]);

uniqueKeywords.clear();
console.log('set after deletion: ' + [...uniqueKeywords]);
*/
const italianFoods = new Set([
  'pasta',
  'gnochi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
/*
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

const union = new Set([...italianFoods, ...mexicanFoods]);
console.log(`union: ${union}`);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(`uniqueItalianFoods: ${[...uniqueItalianFoods]}`);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(`uniqueMXFoods: ${[...uniqueMexicanFoods]}`);

const uniqueIM = italianFoods.symmetricDifference(mexicanFoods);
console.log(`uniqueIM: ${uniqueIM}`);

console.log(italianFoods.isDisjointFrom(mexicanFoods));
*/
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Milan');

console.log(rest.set(2, 'Lisbon'));

rest
  .set('categories', ['Ita', 'Ltu', 'Pol', 'Usa'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();

const arras = [1, 2];
rest.set(arras, 'Test');

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest.get(arras));
*/

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Middle seat!!!! :(');
  else console.log('You got lucky!!! :)');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Deividas'));

const airways = 'Norse';

console.log(airways.toLocaleLowerCase());
console.log(airways.toUpperCase());

const passanger = 'dEIVIDAS';
const passangerLower = passanger.toLocaleLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log('passangerCorrect: ' + passangerCorrect);

const email = 'deiwis@yaoo.com';
const loginEmail = '  Deiwis@Yahoo.Com \n';
const lower = loginEmail.toLowerCase();
const trimmed = lower.trim();
console.log(trimmed);

const normalized = loginEmail.toLowerCase().trim();
console.log(normalized);

// repalcing

const priceGB = '299,95&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passangers come to door 23. The door 23!';

//console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const planeE = 'A320neo';
console.log(planeE.includes('A320'));
console.log(planeE.includes('R'));
console.log(planeE.startsWith('A3'));

if (planeE.startsWith('A') && planeE.endsWith('eo')) {
  console.log('Part of the new Airbus family!');
}

// Practice

const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Not allowed!');
  } else {
    console.log('Allowed!');
  }
};

checkBaggage('I have a Laptop, Food, and a pocket Knife');
checkBaggage('I have socks and camera');
checkBaggage('Got some snacks and a gun');

// split and join

console.log('a+very+nice+string'.split('+')); // arrya
//console.log('Deividas Strole'.split(' '));

const [firstName, lastName] = 'Deividas Strole'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
console.log(firstName, lastName);

// ******************************

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('deividas strole');
