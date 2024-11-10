const fruits = ['apple', 'jackfruit', 'watermelon', 'mango', 'guava']
// let firstChild = fruits[2]
console.log(fruits[0],fruits[2])
const webtechs = [
    'iphone',
    'samsung',
    247,
    true,
    {contry:'Bangladesh', city:'Rajshahi'},
    {skills: ['html', 'css','tailwind','javascript']}
]
console.log(webtechs)

let js = "javascrpt";
let charsinjs = js.split('');
console.log(charsinjs);

let companies ='apple, linux, facebook, whatsapp, microsoft'
console.log(companies)
let comSplit = companies.split(',');

console.log(comSplit);

let txt = 'I love teaching empowering people. I teach HTML, js, react, python'
const words = txt.split(' ');
console.log(words);

let fruits1 = ['banana', 'orange', 'mango', 'lemon'];
const firstfruit = fruits1[0];
console.log(firstfruit);

const secondFruit = fruits1[1];
console.log(secondFruit);

const thirdFruit = fruits1[2];
console.log(thirdFruit);

const fourthFruit = fruits1[3];
console.log(fourthFruit);

// to find the last index item we can use "length - 1"
const lastIndex = fruits1.length - 1;
const lastFruit = fruits1[lastIndex];
console.log(lastFruit);

const numbers = [0, 3, 84, 748, 36, 948, 200];
// to know the size of array
console.log(numbers.length);
// to show the array
console.log(numbers);

// to identify index
console.log(numbers[0]);
console.log(numbers[5]);

// to identify last index
const lastitem = numbers.length-1
console.log(numbers[lastitem]);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB']
// list of web technologies.
console.log(webTechs);
console.log(webTechs[0]);

const lastWeb = webTechs.length - 1;
console.log(lastWeb);
console.log(webTechs[lastWeb]);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungry',
    'Ireland',
    'Japan',
    'Kenya',
]
// list of countries

console.log(countries);
console.log(countries[0]);
console.log(countries[9]);

const lastCountry = countries.length-1;
console.log(countries[lastCountry]);


const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
]
// list of products
console.log(shoppingCart);
console.log(shoppingCart[2]);
console.log(shoppingCart[0]);
console.log(shoppingCart[5]);

const lastCart = shoppingCart.length - 1;
console.log(shoppingCart[lastCart]);

// ---------Modifying array element----------------

// We can modify array value....

const numbers1 = [1,2,4,5,6,201];
numbers1[0] = 35;
numbers1[2] = 147;
console.log(numbers1);


const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungery'

]

countries1[0]= 'Afganistan';
console.log(countries1);

const arr = Array();
console.log(arr);
const emptyArr = Array(8);
console.log(emptyArr);

// ---------Creating static values with "fill"----------

const emptyArray = Array();
console.log(emptyArray);

const eightZvalues = Array(8).fill('Mohammad');
console.log(eightZvalues);

const eightXvalues = Array(8).fill('Hasan');
console.log(eightXvalues);

const eightYvalues = Array(8).fill('Ali');
console.log(eightYvalues);

// -----------Use of "concat"========
// সংযুক্তকরন = Concatenating

const firstList = [1,2,3,4,5,6,7,8,9,10];
const secondList = [11,12,13,14,15,16,17,18,19,20];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

// ======Concatenating of String Array====

const prothomArray = ['samsung','iphone','linux', 'facebook'];
const ditioArray = ['microsoft','spaceX','whatsapp','instagram'];
const finalArray = prothomArray.concat(ditioArray);
console.log(finalArray);

// =======To know the size of Array "length"===========
const numbers2 = [1,2,3,4,5,6,7,8,9,10];
// to check how much items
console.log(numbers2.length);
// to check if an item exist in Array==get its index number with "indexOf"===
console.log(numbers2.indexOf(10));
console.log(numbers2.indexOf(5));
console.log(numbers2.indexOf(8));
console.log(numbers2.indexOf(1));


















