'use strict';

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

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested obj

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

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
// thirdParty: {
//   goodreads: {
//     rating: 4.41,
//     ratingsCount: 1733,
//     reviewsCount: 63,
//     fiveStarRatingCount: 976,
//     oneStarRatingCount: 13,
//   },
// },

console.log('############################################');

const valArr = [];

const valuesX = Object.values(books[0].thirdParty.goodreads);
console.log(valuesX);

// entire object
const entriesX = Object.entries(books[0].thirdParty.goodreads);
console.log(entriesX);

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
console.log(`entries22: ${entries22}`);
